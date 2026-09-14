import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

export const GET: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient({ request, cookies });

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  // The RPC initializes missing profile/stats and returns a JSONB snapshot.

  const { data, error } = await supabase.rpc("get_assault_progression");

  if (error || !data || typeof data !== "object" || Array.isArray(data)) {
    console.error("Unable to load Assault progression:", error ?? "RPC returned no progression object");
    return jsonResponse({ error: "Unable to load Assault progression" }, 500);
  }

  return jsonResponse({ success: true, progression: data }, 200);
};

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "private, no-store",
    },
  });
}

