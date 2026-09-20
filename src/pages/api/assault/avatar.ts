import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

const AVATAR_KEYS = new Set([
  "default",
  "atlas",
  "classified",
  "g",
  "kestrel_pilot",
  "locke",
  "mercer",
  "mindarc",
  "ntdc",
  "rook",
  "thorne",
]);

export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient({ request, cookies });

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const contentType = request.headers
    .get("Content-Type")
    ?.split(";")[0]
    .trim()
    .toLowerCase();
  if (contentType !== "application/json") {
    return jsonResponse({ error: "Content-Type must be application/json" }, 400);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  if (!isAvatarRequest(body)) {
    return jsonResponse({ error: "Invalid avatarKey" }, 400);
  }

  const requestedKey = body.avatarKey.trim().toLowerCase();
  const avatarKey = AVATAR_KEYS.has(requestedKey) ? requestedKey : "default";

  const { data, error } = await supabase.rpc("set_assault_avatar", {
    p_avatar_key: avatarKey,
  });

  if (error || !data || typeof data !== "object" || Array.isArray(data)) {
    console.error(
      "Unable to update Assault avatar:",
      error ?? "RPC returned no progression object",
    );
    return jsonResponse({ error: "Unable to update Assault avatar" }, 500);
  }

  return jsonResponse({ success: true, progression: data }, 200);
};

function isAvatarRequest(value: unknown): value is { avatarKey: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return typeof (value as Record<string, unknown>).avatarKey === "string";
}

function jsonResponse(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "private, no-store",
    },
  });
}
