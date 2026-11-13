import type { APIRoute } from "astro";
import { createClient } from "@supabase/supabase-js";

export const prerender = false;

export interface PublicLeaderboardEntry {
  rank: number;
  displayName: string;
  portraitKey: string | null;
  score: number;
  highestWaveReached: number;
}

/** Public read-only client: never inherits cookies, bearer headers or a player session. */
export const GET: APIRoute = async () => {
  try {
    const supabase = createClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
      { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } },
    );
    const { data, error } = await supabase.rpc("get_assault_public_leaderboard")
      .abortSignal(AbortSignal.timeout(8000));
    if (error || !Array.isArray(data) || data.length > 100) throw new Error("Leaderboard unavailable");
    const entries: PublicLeaderboardEntry[] = data.map((row) => {
      if (!Number.isSafeInteger(row.rank) || row.rank < 1 || typeof row.display_name !== "string" ||
          (row.portrait_key !== null && typeof row.portrait_key !== "string") ||
          !Number.isSafeInteger(row.score) || row.score < 0 ||
          !Number.isSafeInteger(row.highest_wave_reached) || row.highest_wave_reached < 0) {
        throw new Error("Invalid leaderboard result");
      }
      return { rank: row.rank, displayName: row.display_name, portraitKey: row.portrait_key,
        score: row.score, highestWaveReached: row.highest_wave_reached };
    });
    // Ranking/eligibility are owned by the RPC. Never recalculate or silently reorder them here.
    if (entries.some((row, index) => index > 0 && row.rank <= entries[index - 1].rank)) {
      throw new Error("Invalid leaderboard ordering");
    }
    return jsonResponse({ success: true, entries }, 200);
  } catch {
    return jsonResponse({ error: "Unable to load leaderboard" }, 500);
  }
};

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), { status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
}
