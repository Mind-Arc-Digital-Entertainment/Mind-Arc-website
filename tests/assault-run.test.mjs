import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import vm from "node:vm";
import { transformSync } from "esbuild";

// Execute the actual Astro POST handler; replace only its Supabase transport.
const source = readFileSync(new URL("../src/pages/api/assault/run.ts", import.meta.url), "utf8");
const { code } = transformSync(source, { loader: "ts", format: "cjs" });
const baseRun = {
  score: 1200, highestWaveReached: 3, enemiesDestroyed: 12,
  powerCoresCollected: 2, startedAt: "2026-09-15T12:00:00Z",
  endedAt: "2026-09-15T12:01:00Z", durationSeconds: 60,
  endReason: "destroyed", shipCode: "kestrel", shipName: "Kestrel", gameVersion: "pass1-test",
};

async function submit(body, authenticated = true) {
  const calls = [];
  const supabase = {
    auth: { getUser: async () => ({ data: { user: authenticated ? { id: "test-account" } : null }, error: null }) },
    from(table) {
      assert.equal(table, "profiles");
      return { select: () => ({ eq: () => ({ single: async () => ({ data: { username: "Test Pilot" }, error: null }) }) }) };
    },
    async rpc(name, args) {
      calls.push({ name, args: JSON.parse(JSON.stringify(args)) });
      return { data: [{ run_id: "test-run", high_score: 1200, highest_wave: 3, is_new_high_score: true }], error: null };
    },
  };
  const context = {
    module: { exports: {} }, exports: {}, Response, console,
    require(path) {
      assert.equal(path, "../../../lib/supabase/server");
      return { createSupabaseServerClient: () => supabase };
    },
  };
  vm.runInNewContext(code, context, { filename: "run.ts" });
  const response = await context.module.exports.POST({
    request: new Request("https://test.invalid/api/assault/run", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
    }), cookies: {},
  });
  return { status: response.status, body: await response.json(), calls };
}

for (const level of [9, 10]) {
  test(`POST forwards level ${level} + destroyed through the exact RPC parameter`, async () => {
    const result = await submit({ ...baseRun, highestCannonLevelReached: level });
    assert.equal(result.status, 200);
    assert.deepEqual(result.calls, [{ name: "record_assault_run", args: {
      p_score: 1200, p_highest_wave_reached: 3, p_highest_cannon_level_reached: level,
      p_enemies_destroyed: 12, p_power_cores_collected: 2,
      p_started_at: baseRun.startedAt, p_ended_at: baseRun.endedAt, p_duration_seconds: 60,
      p_end_reason: "destroyed", p_ship_code: "kestrel", p_ship_name_snapshot: "Kestrel",
      p_display_name_snapshot: "Test Pilot", p_game_version: "pass1-test",
    } }]);
    assert.equal(result.body.success, true);
    assert.equal(result.body.run.runId, "test-run");
  });
}

test("older client omission forwards level 1", async () => {
  const result = await submit(baseRun);
  assert.equal(result.status, 200);
  assert.equal(result.calls[0].args.p_highest_cannon_level_reached, 1);
});

for (const invalid of [null, 0, -1, 9.5, "10", true, {}, 2147483648]) {
  test(`rejects invalid cannon level ${JSON.stringify(invalid)} before recording`, async () => {
    const result = await submit({ ...baseRun, highestCannonLevelReached: invalid });
    assert.equal(result.status, 400);
    assert.equal(result.body.error, "Invalid highest cannon level");
    assert.equal(result.calls.length, 0);
  });
}

test("unauthenticated run is still rejected", async () => {
  const result = await submit({ ...baseRun, highestCannonLevelReached: 10 }, false);
  assert.equal(result.status, 401);
  assert.equal(result.calls.length, 0);
});
