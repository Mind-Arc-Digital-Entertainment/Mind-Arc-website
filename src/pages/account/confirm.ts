import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../lib/supabase/server";

export const prerender = false;

export const GET: APIRoute = async ({
  request,
  cookies,
  url,
  redirect,
}) => {
  const supabase = createSupabaseServerClient({
    request,
    cookies,
  });

  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");

  console.log("Auth confirmation endpoint reached");
  console.log("Token present:", !!tokenHash);
  console.log("Type:", type);

  if (!tokenHash) {
    console.error("Auth confirmation failed: missing token hash.");

    return redirect("/?login=error&reason=invalid-auth-link");
  }

  try {
    switch (type) {
      case "email": {
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "email",
        });

        if (error) {
          console.error("Email confirmation failed:", error.message);

          return redirect(
            "/?login=error&reason=email-confirmation-failed",
          );
        }

        console.log("Email confirmed:", data.user?.email);
        console.log("Session created:", !!data.session);

        return redirect("/?verified=true");
      }

      case "recovery": {
        const { data, error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "recovery",
        });

        if (error) {
          console.error(
            "Password recovery verification failed:",
            error.message,
          );

          return redirect(
            "/?login=error&reason=password-reset-link-invalid",
          );
        }

        console.log("Password recovery verified:", data.user?.email);
        console.log("Recovery session created:", !!data.session);

        return redirect("/account/reset-password");
      }

      default: {
        console.error(
          "Auth confirmation failed: unsupported type:",
          type,
        );

        return redirect("/?login=error&reason=invalid-auth-link");
      }
    }
  } catch (error) {
    console.error("Auth confirmation endpoint exception:", error);

    return redirect(
      "/?login=error&reason=auth-confirmation-exception",
    );
  }
};