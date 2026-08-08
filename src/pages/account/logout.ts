// src/pages/account/logout.ts

import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../lib/supabase/server";

export const prerender = false;

export const POST: APIRoute = async ({
  request,
  cookies,
  redirect,
}) => {
  const supabase = createSupabaseServerClient({
    request,
    cookies,
  });

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout failed:", error.message);

    return redirect("/?error=logout-failed");
  }

  return redirect("/");
};