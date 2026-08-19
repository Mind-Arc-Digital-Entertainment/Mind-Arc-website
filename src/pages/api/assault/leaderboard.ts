import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

export const GET: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient({
    request,
    cookies,
  });

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return jsonResponse(
      {
        error: "Unauthorized",
      },
      401,
    );
  }

  const { data, error } = await supabase
    .from("assault_leaderboard_ranked")
    .select(
      `
        rank,
        identity_id,
        display_name,
        portrait_key,
        score,
        highest_wave_reached,
        enemies_destroyed,
        power_cores_collected,
        duration_seconds,
        entry_type
      `,
    )
    .order("rank", { ascending: true })
    .limit(100);

  if (error) {
    console.error(
      "Unable to load Assault leaderboard:",
      error,
    );

    return jsonResponse(
      {
        error: "Unable to load leaderboard",
      },
      500,
    );
  }

  const entries = (data ?? []).map((entry) => ({
    rank: entry.rank,
    identityId: entry.identity_id,
    displayName: entry.display_name,
    portraitKey: entry.portrait_key,
    score: entry.score,
    highestWaveReached: entry.highest_wave_reached,
    enemiesDestroyed: entry.enemies_destroyed,
    powerCoresCollected: entry.power_cores_collected,
    durationSeconds: entry.duration_seconds,
    entryType: entry.entry_type,
  }));

  return jsonResponse(
    {
      success: true,
      entries,
    },
    200,
  );
};

function jsonResponse(
  body: unknown,
  status: number,
): Response {
  return new Response(
    JSON.stringify(body),
    {
      status,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}