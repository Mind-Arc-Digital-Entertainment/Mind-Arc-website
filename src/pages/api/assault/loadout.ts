import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

// All selections reference assault_unlocks.unlock_key, whose CHECK limit is 80.
const LOADOUT_KEY_MAX_LENGTH = 80;

export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient({ request, cookies });

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const contentType = request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return jsonResponse({ error: "Content-Type must be application/json" }, 400);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonResponse({ error: "Request body must be an object" }, 400);
  }

  const selections = body as Record<string, unknown>;
  const copilotKey = parseSelection(selections.copilotKey);
  const secondaryWeaponKey = parseSelection(selections.secondaryWeaponKey);
  const fighterKey = parseSelection(selections.fighterKey);

  if (copilotKey === undefined) {
    return jsonResponse({ error: "Invalid copilotKey" }, 400);
  }
  if (secondaryWeaponKey === undefined) {
    return jsonResponse({ error: "Invalid secondaryWeaponKey" }, 400);
  }
  if (fighterKey === undefined) {
    return jsonResponse({ error: "Invalid fighterKey" }, 400);
  }

  const { data, error } = await supabase.rpc("set_assault_loadout", {
    p_copilot_key: copilotKey,
    p_secondary_weapon_key: secondaryWeaponKey,
    p_fighter_key: fighterKey,
  });

  if (error || !data || typeof data !== "object" || Array.isArray(data)) {
    console.error("Unable to update Assault loadout:", error ?? "RPC returned no progression object");
    return jsonResponse({ error: "Unable to update Assault loadout" }, 500);
  }

  return jsonResponse({ success: true, progression: data }, 200);
};

function parseSelection(value: unknown): string | null | undefined {
  if (value === null) return null;
  if (typeof value !== "string") return undefined;

  const key = value.trim();
  // Match PostgreSQL char_length for non-BMP characters as well.
  return key && Array.from(key).length <= LOADOUT_KEY_MAX_LENGTH ? key : undefined;
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

