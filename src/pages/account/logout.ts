// src/pages/account/logout.ts

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ locals, redirect }) => {
  const { error } = await locals.supabase.auth.signOut();

  if (error) {
    console.error("Logout failed:", error.message);

    return redirect("/?error=logout-failed");
  }

  return redirect("/");
};