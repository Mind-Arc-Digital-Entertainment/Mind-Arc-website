import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';import {test} from 'node:test';import vm from 'node:vm';import {transformSync} from 'esbuild';
function load(file,dependencies={}){
 const source=readFileSync(new URL('../'+file,import.meta.url),'utf8').replaceAll('import.meta.env.PUBLIC_SUPABASE_URL','"https://isolated.invalid"').replaceAll('import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY','"sb_publishable_ISOLATED"');
 const {code}=transformSync(source,{loader:'ts',format:'cjs'});const context={module:{exports:{}},exports:{},Response,AbortSignal,console,require:n=>{assert.ok(n in dependencies,'Unexpected dependency '+n);return dependencies[n];}};
 vm.runInNewContext(code,context);return context.module.exports;
}
const base={rank:1,display_name:'FICTIONAL ACE',portrait_key:'rook',score:1000,highest_wave_reached:2};
function leaderboard(data=[base],error=null,throws=false){
 const calls=[];const endpoint=load('src/pages/api/assault/leaderboard.ts',{'@supabase/supabase-js':{createClient:(...args)=>{
 calls.push(args);return {rpc:name=>{assert.equal(name,'get_assault_public_leaderboard');return {abortSignal:async signal=>{assert.ok(signal instanceof AbortSignal);if(throws)throw new Error('private failure');return {data,error};}};}};
 }}});return {endpoint,calls};
}
test('public leaderboard uses anonymous RPC, exact five fields, envelope and portrait',async()=>{
 const h=leaderboard([{...base,identity_id:'PRIVATE',entry_type:'universe',duration_seconds:9}]);
 for(const authorization of [undefined,'Bearer ignored','Basic ignored']){
 const r=await h.endpoint.GET({request:new Request('https://web.invalid',{headers:{Cookie:'ignored',...(authorization?{Authorization:authorization}:{})}})});
 assert.equal(r.status,200);assert.equal(r.headers.get('Cache-Control'),'no-store');const body=await r.json();
 assert.deepEqual(body,{success:true,entries:[{rank:1,displayName:'FICTIONAL ACE',portraitKey:'rook',score:1000,highestWaveReached:2}]});
 assert.equal(JSON.stringify(body).includes('PRIVATE'),false);
 }
 assert.ok(h.calls.every(args=>args.length===3&&args[2].global===undefined));
 assert.deepEqual(JSON.parse(JSON.stringify(h.calls[0][2].auth)),{persistSession:false,autoRefreshToken:false,detectSessionInUrl:false});
});
test('rank order, tie order, max 100, null portraits and fictional callsigns survive',async()=>{
 const rows=Array.from({length:100},(_,i)=>({...base,rank:i+1,display_name:i?'PLAYER':'FICTIONAL ACE',portrait_key:i?null:'rook'}));
 const r=await leaderboard(rows).endpoint.GET({});const body=await r.json();assert.equal(r.status,200);assert.equal(body.entries.length,100);
 assert.deepEqual(body.entries.map(e=>e.rank),rows.map(e=>e.rank));assert.equal(body.entries[1].portraitKey,null);
});
test('empty is successful; failed, thrown, malformed, unsorted and oversized queries return old 500 shape',async()=>{
 const empty=await leaderboard([]).endpoint.GET({});assert.equal(empty.status,200);assert.deepEqual(await empty.json(),{success:true,entries:[]});
 for(const h of [leaderboard(null,{message:'PRIVATE'}),leaderboard([],null,true),leaderboard(null),leaderboard([{...base,rank:0}]),leaderboard([{...base,portrait_key:undefined}]),leaderboard([{...base,rank:2},base]),leaderboard(Array.from({length:101},()=>base))]){
 const r=await h.endpoint.GET({});assert.equal(r.status,500);assert.deepEqual(await r.json(),{error:'Unable to load leaderboard'});
 }
});
const helper=load('src/lib/supabase/assault-api.ts');
for(const [name,method] of [['run','POST'],['player-profile','POST'],['progression','GET'],['event','POST'],['loadout','POST'],['callsign','POST'],['avatar','POST']]){
 test(name+': website and WebGL persistence rejected for no credentials, cookies and supplied bearer',async()=>{
 const endpoint=load('src/pages/api/assault/'+name+'.ts',{'../../../lib/supabase/assault-api':helper});
 for(const headers of [{},{Cookie:'session=browser'},{Authorization:'Bearer supplied',Cookie:'session=browser'}]){
 const response=await endpoint[method]({request:new Request('https://web.invalid/api/assault/'+name,{method,headers,...(method==='POST'?{body:'{}'}:{})}),cookies:{}});
 assert.equal(response.status,401);assert.deepEqual(await response.json(),{error:'Unauthorized'});
 }
 });
}
