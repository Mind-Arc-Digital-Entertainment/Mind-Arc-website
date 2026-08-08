import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                                             */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  let errorMessage = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");
    if (!password || !confirmPassword) {
      errorMessage = "Enter and confirm your new password.";
    } else if (password !== confirmPassword) {
      errorMessage = "Passwords do not match.";
    } else if (password.length < 8) {
      errorMessage = "Your new password must be at least 8 characters.";
    } else {
      const {
        data: { user }
      } = await Astro2.locals.supabase.auth.getUser();
      if (!user) {
        return Astro2.redirect(
          "/?login=error&reason=password-reset-session-expired"
        );
      }
      const { error } = await Astro2.locals.supabase.auth.updateUser({
        password
      });
      if (error) {
        console.error("Password update failed:", error.message);
        errorMessage = "We couldn't update your password. Please try again.";
      } else {
        const { error: signOutError } = await Astro2.locals.supabase.auth.signOut();
        if (signOutError) {
          console.error("Post-reset sign out failed:", signOutError.message);
        }
        return Astro2.redirect("/?login=success&reason=password-updated");
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-y5qrvboc": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="reset-password-page" data-astro-cid-y5qrvboc> <div class="reset-password-panel" data-astro-cid-y5qrvboc> <div class="reset-password-header" data-astro-cid-y5qrvboc> <p class="reset-password-eyebrow" data-astro-cid-y5qrvboc>Mind Arc Games</p> <h1 data-astro-cid-y5qrvboc>Reset Password</h1> <p class="reset-password-message" data-astro-cid-y5qrvboc>
Choose a new password for your Mind Arc account.
</p> ${errorMessage && renderTemplate`<p class="reset-password-error" role="alert" data-astro-cid-y5qrvboc> ${errorMessage} </p>`} </div> <form method="POST" class="reset-password-form" data-astro-cid-y5qrvboc> <label class="field" data-astro-cid-y5qrvboc> <span data-astro-cid-y5qrvboc>New Password</span> <input type="password" name="password" autocomplete="new-password" minlength="8" required data-astro-cid-y5qrvboc> </label> <label class="field" data-astro-cid-y5qrvboc> <span data-astro-cid-y5qrvboc>Confirm Password</span> <input type="password" name="confirmPassword" autocomplete="new-password" minlength="8" required data-astro-cid-y5qrvboc> </label> <button type="submit" class="reset-submit" data-astro-cid-y5qrvboc> Update Password </button> </form> </div> </section> ` })} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/reset-password.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/reset-password.astro";
const $$url = "/account/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
