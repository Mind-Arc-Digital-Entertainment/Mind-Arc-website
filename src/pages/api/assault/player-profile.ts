import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

const ASSAULT_GAME_CODE = "phoenix_vector_assault";

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
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const { data: game, error: gameError } = await supabase
    .from("games")
    .select("id, game_code")
    .eq("game_code", ASSAULT_GAME_CODE)
    .eq("is_active", true)
    .single();

  if (gameError || !game) {
    console.error(
      "Unable to resolve Phoenix Vector: Assault game record:",
      gameError,
    );

    return new Response(
      JSON.stringify({
        error: "Assault game record unavailable",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const {
    data: existingProfile,
    error: existingProfileError,
  } = await supabase
    .from("player_game_profiles")
    .select(
      "id, user_id, game_id, first_played_at, last_played_at, total_sessions, total_playtime_seconds",
    )
    .eq("user_id", user.id)
    .eq("game_id", game.id)
    .maybeSingle();

  if (existingProfileError) {
    console.error(
      "Unable to query Assault player game profile:",
      existingProfileError,
    );

    return new Response(
      JSON.stringify({
        error: "Unable to load player game profile",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  if (existingProfile) {
    return new Response(
      JSON.stringify({
        playerGameProfile: existingProfile,
        created: false,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  const now = new Date().toISOString();

  const {
    data: createdProfile,
    error: createProfileError,
  } = await supabase
    .from("player_game_profiles")
    .insert({
      user_id: user.id,
      game_id: game.id,
      first_played_at: now,
      last_played_at: now,
      total_sessions: 0,
      total_playtime_seconds: 0,
    })
    .select(
      "id, user_id, game_id, first_played_at, last_played_at, total_sessions, total_playtime_seconds",
    )
    .single();

  if (createProfileError || !createdProfile) {
    console.error(
      "Unable to create Assault player game profile:",
      createProfileError,
    );

    return new Response(
      JSON.stringify({
        error: "Unable to create player game profile",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  return new Response(
    JSON.stringify({
      playerGameProfile: createdProfile,
      created: true,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
};