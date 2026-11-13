import type { APIRoute } from "astro";

import { authenticateAssaultApi } from "../../../lib/supabase/assault-api";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  const authentication = await authenticateAssaultApi({ request, cookies });

  if (!authentication) {
    return jsonResponse({ error: "Unauthorized" }, 401);
  }

  const { supabase } = authentication;

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  if (!isCallsignRequest(body)) {
    return jsonResponse({ error: "Invalid callsign" }, 400);
  }

  const callsign = body.callsign.trim();

  // Early host-side validation for useful client feedback.
  // The Supabase RPC remains authoritative.
  if (
    callsign.length < 3 ||
    callsign.length > 16 ||
    !/^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/.test(callsign)
  ) {
    return jsonResponse(
      {
        error:
          "Callsign must be 3 to 16 letters, numbers, or single interior spaces",
      },
      400,
    );
  }

  const { data, error } = await supabase.rpc("set_assault_callsign", {
    p_callsign: callsign,
  });

  if (error) {
    console.error("Unable to update Assault callsign:", error);

    // Exact exhaustion condition raised by set_assault_callsign().
    if (error.message === "No callsign changes remain") {
      return jsonResponse({ error: "No callsign changes remain" }, 409);
    }

    return jsonResponse({ error: "Unable to update callsign" }, 500);
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    console.error(
      "Unable to update Assault callsign: RPC returned no progression object",
    );

    return jsonResponse({ error: "Unable to update callsign" }, 500);
  }

  return jsonResponse(
    {
      success: true,
      progression: data,
    },
    200,
  );
};

function isCallsignRequest(
  value: unknown,
): value is { callsign: string } {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return typeof (value as Record<string, unknown>).callsign === "string";
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