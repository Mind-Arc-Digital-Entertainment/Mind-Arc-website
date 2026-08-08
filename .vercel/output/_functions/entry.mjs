import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CFevAv78.mjs';
import { manifest } from './manifest_ClR9-Rm5.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/account/confirm.astro.mjs');
const _page3 = () => import('./pages/account/forgot-password.astro.mjs');
const _page4 = () => import('./pages/account/login.astro.mjs');
const _page5 = () => import('./pages/account/profile.astro.mjs');
const _page6 = () => import('./pages/account/register.astro.mjs');
const _page7 = () => import('./pages/account/reset-password.astro.mjs');
const _page8 = () => import('./pages/assault/play.astro.mjs');
const _page9 = () => import('./pages/assault.astro.mjs');
const _page10 = () => import('./pages/phoenixvector/codex/codexnav.astro.mjs');
const _page11 = () => import('./pages/phoenixvector/codex/fighters/_slug_.astro.mjs');
const _page12 = () => import('./pages/phoenixvector/codex/fighters.astro.mjs');
const _page13 = () => import('./pages/phoenixvector/codex.astro.mjs');
const _page14 = () => import('./pages/phoenixvector/devlog/v0-1-1.astro.mjs');
const _page15 = () => import('./pages/phoenixvector/devlog/v0-2-0.astro.mjs');
const _page16 = () => import('./pages/phoenixvector/devlog.astro.mjs');
const _page17 = () => import('./pages/phoenixvector.astro.mjs');
const _page18 = () => import('./pages/privacy.astro.mjs');
const _page19 = () => import('./pages/support.astro.mjs');
const _page20 = () => import('./pages/terms.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/account/confirm.ts", _page2],
    ["src/pages/account/forgot-password.astro", _page3],
    ["src/pages/account/login.astro", _page4],
    ["src/pages/account/profile.astro", _page5],
    ["src/pages/account/register.astro", _page6],
    ["src/pages/account/reset-password.astro", _page7],
    ["src/pages/assault/play.astro", _page8],
    ["src/pages/assault.astro", _page9],
    ["src/pages/phoenixvector/codex/CodexNav.astro", _page10],
    ["src/pages/phoenixvector/codex/fighters/[slug].astro", _page11],
    ["src/pages/phoenixvector/codex/fighters/index.astro", _page12],
    ["src/pages/phoenixvector/codex/index.astro", _page13],
    ["src/pages/phoenixvector/devlog/v0-1-1/index.astro", _page14],
    ["src/pages/phoenixvector/devlog/v0-2-0/index.astro", _page15],
    ["src/pages/phoenixvector/devlog/index.astro", _page16],
    ["src/pages/phoenixvector.astro", _page17],
    ["src/pages/privacy.astro", _page18],
    ["src/pages/support.astro", _page19],
    ["src/pages/terms.astro", _page20],
    ["src/pages/index.astro", _page21]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "0710cfa6-8051-4756-8d94-efccd80a8f34",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
