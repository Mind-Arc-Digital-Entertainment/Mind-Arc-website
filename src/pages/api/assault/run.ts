import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

type AssaultRunRequest = {
  score: number;
  highestWaveReached: number;
  enemiesDestroyed: number;
  powerCoresCollected: number;
  startedAt: string;
  endedAt: string;
  durationSeconds: number;
  endReason: string;
  shipCode: string;
  shipName?: string | null;
  gameVersion: string;
};

export const POST: APIRoute = async ({ request, cookies }) => {
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

  let body: AssaultRunRequest;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      {
        error: "Invalid JSON body",
      },
      400,
    );
  }

  const validationError = validateRunRequest(body);

  if (validationError) {
    return jsonResponse(
      {
        error: validationError,
      },
      400,
    );
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("username")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    console.error(
      "Unable to resolve player profile for Assault run:",
      profileError,
    );

    return jsonResponse(
      {
        error: "Unable to resolve player profile",
      },
      500,
    );
  }

  const { data, error } = await supabase.rpc(
    "record_assault_run",
    {
      p_score: body.score,
      p_highest_wave_reached: body.highestWaveReached,
      p_enemies_destroyed: body.enemiesDestroyed,
      p_power_cores_collected: body.powerCoresCollected,
      p_started_at: body.startedAt,
      p_ended_at: body.endedAt,
      p_duration_seconds: body.durationSeconds,
      p_end_reason: body.endReason,
      p_ship_code: body.shipCode,
      p_ship_name_snapshot: body.shipName ?? null,
      p_display_name_snapshot: profile.username,
      p_game_version: body.gameVersion,
    },
  );

  if (error) {
    console.error(
      "Unable to record Assault run:",
      error,
    );

    return jsonResponse(
      {
        error: "Unable to record Assault run",
      },
      500,
    );
  }

  const result = data?.[0];

  if (!result) {
    console.error(
      "Assault run RPC returned no result.",
    );

    return jsonResponse(
      {
        error: "Run recorded but no result was returned",
      },
      500,
    );
  }

  return jsonResponse(
    {
      success: true,
      run: {
        runId: result.run_id,
        highScore: result.high_score,
        highestWave: result.highest_wave,
        isNewHighScore: result.is_new_high_score,
      },
    },
    200,
  );
};

function validateRunRequest(
  body: AssaultRunRequest,
): string | null {
  if (!body || typeof body !== "object") {
    return "Request body is required";
  }

  if (!isNonNegativeInteger(body.score)) {
    return "Invalid score";
  }

  if (!isNonNegativeInteger(body.highestWaveReached)) {
    return "Invalid highest wave";
  }

  if (!isNonNegativeInteger(body.enemiesDestroyed)) {
    return "Invalid enemies destroyed";
  }

  if (!isNonNegativeInteger(body.powerCoresCollected)) {
    return "Invalid power cores collected";
  }

  if (!isNonNegativeInteger(body.durationSeconds)) {
    return "Invalid duration";
  }

  if (!isValidDate(body.startedAt)) {
    return "Invalid startedAt";
  }

  if (!isValidDate(body.endedAt)) {
    return "Invalid endedAt";
  }

  if (
    new Date(body.endedAt).getTime() <
    new Date(body.startedAt).getTime()
  ) {
    return "endedAt cannot be before startedAt";
  }

  if (
    typeof body.endReason !== "string" ||
    body.endReason.trim().length === 0
  ) {
    return "Invalid end reason";
  }

  if (
    typeof body.shipCode !== "string" ||
    body.shipCode.trim().length === 0
  ) {
    return "Invalid ship code";
  }

  if (
    typeof body.gameVersion !== "string" ||
    body.gameVersion.trim().length === 0
  ) {
    return "Invalid game version";
  }

  return null;
}

function isNonNegativeInteger(
  value: unknown,
): value is number {
  return (
    typeof value === "number" &&
    Number.isInteger(value) &&
    value >= 0
  );
}

function isValidDate(value: unknown): value is string {
  return (
    typeof value === "string" &&
    !Number.isNaN(Date.parse(value))
  );
}

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