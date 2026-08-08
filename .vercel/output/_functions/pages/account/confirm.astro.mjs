export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url, locals, redirect }) => {
  const tokenHash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");
  console.log("Auth confirmation endpoint reached");
  console.log("Token present:", !!tokenHash);
  console.log("Type:", type);
  console.log("Supabase present:", !!locals.supabase);
  if (!tokenHash) {
    console.error("Auth confirmation failed: missing token hash.");
    return redirect(
      "/?login=error&reason=invalid-auth-link"
    );
  }
  try {
    switch (type) {
      /*
       * New account email confirmation
       */
      case "email": {
        const { data, error } = await locals.supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "email"
        });
        if (error) {
          console.error(
            "Email confirmation failed:",
            error.message
          );
          return redirect(
            "/?login=error&reason=email-confirmation-failed"
          );
        }
        console.log("Email confirmed:", data.user?.email);
        console.log("Session created:", !!data.session);
        return redirect("/?verified=true");
      }
      /*
       * Password recovery
       */
      case "recovery": {
        const { data, error } = await locals.supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: "recovery"
        });
        if (error) {
          console.error(
            "Password recovery verification failed:",
            error.message
          );
          return redirect(
            "/?login=error&reason=password-reset-link-invalid"
          );
        }
        console.log(
          "Password recovery verified:",
          data.user?.email
        );
        console.log(
          "Recovery session created:",
          !!data.session
        );
        return redirect("/account/reset-password");
      }
      /*
       * Unsupported / malformed auth link
       */
      default: {
        console.error(
          "Auth confirmation failed: unsupported type:",
          type
        );
        return redirect(
          "/?login=error&reason=invalid-auth-link"
        );
      }
    }
  } catch (error) {
    console.error(
      "Auth confirmation endpoint exception:",
      error
    );
    return redirect(
      "/?login=error&reason=auth-confirmation-exception"
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
