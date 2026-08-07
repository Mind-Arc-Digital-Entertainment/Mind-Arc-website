import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url, locals, redirect }) => {
  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");

  console.log("Confirmation endpoint reached");
  console.log("Token present:", !!tokenHash);
  console.log("Type:", type);
  console.log("Supabase present:", !!locals.supabase);

  if (!tokenHash || type !== "email") {
    return redirect("/account/login?error=invalid-confirmation-link");
  }

  try {
    const { data, error } = await locals.supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: "email",
    });

    if (error) {
      console.error("Email confirmation failed:", error.message);
      return redirect("/account/login?error=email-confirmation-failed");
    }

    console.log("Confirmed:", data.user?.email);

    return redirect("/account/profile");
  } catch (error) {
    console.error("Confirmation endpoint exception:", error);

    return redirect("/account/login?error=email-confirmation-exception");
  }
};