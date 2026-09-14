import type { APIRoute } from "astro";

import { createSupabaseServerClient } from "../../../lib/supabase/server";

export const prerender = false;

// Matches the assault_events.event_key CHECK constraint.
const EVENT_KEY_MAX_LENGTH = 100;

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

  const value = (body as Record<string, unknown>).eventKey;
  if (typeof value !== "string") {
    return jsonResponse({ error: "Invalid eventKey" }, 400);
  }

  const eventKey = value.trim();
  // PostgreSQL char_length counts Unicode characters, not UTF-16 code units.
  if (!eventKey || Array.from(eventKey).length > EVENT_KEY_MAX_LENGTH) {
    return jsonResponse({ error: "Invalid eventKey" }, 400);
  }

  const { data, error } = await supabase.rpc("complete_assault_event", {
    p_event_key: eventKey,
  });

  if (error || !data || typeof data !== "object" || Array.isArray(data)) {
    console.error("Unable to complete Assault event:", error ?? "RPC returned no progression object");
    return jsonResponse({ error: "Unable to complete Assault event" }, 500);
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

