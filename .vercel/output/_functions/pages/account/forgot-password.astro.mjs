import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                                              */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ForgotPassword;
  let submitted = false;
  let email = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    email = String(formData.get("email") ?? "").trim();
    if (email) {
      try {
        const redirectTo = new URL(
          "/account/confirm",
          Astro2.url.origin
        ).toString();
        const { error } = await Astro2.locals.supabase.auth.resetPasswordForEmail(
          email,
          {
            redirectTo
          }
        );
        if (error) {
          console.error("Password reset request failed:", error.message);
        }
      } catch (error) {
        console.error("Password reset request exception:", error);
      }
    }
    submitted = true;
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-uiamiayn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="forgot-password-page" data-astro-cid-uiamiayn> <div class="forgot-password-panel" data-astro-cid-uiamiayn> <div class="forgot-password-header" data-astro-cid-uiamiayn> <p class="forgot-password-eyebrow" data-astro-cid-uiamiayn>Mind Arc Games</p> <h1 data-astro-cid-uiamiayn>Reset Password</h1> ${submitted ? renderTemplate`<p class="forgot-password-message success" role="status" data-astro-cid-uiamiayn>
If an account exists for this email, we'll send a reset link.
</p>` : renderTemplate`<p class="forgot-password-message" data-astro-cid-uiamiayn>
Enter the email address associated with your Mind Arc account.
</p>`} </div> ${!submitted && renderTemplate`<form method="POST" class="forgot-password-form" data-astro-cid-uiamiayn> <label class="field" data-astro-cid-uiamiayn> <span data-astro-cid-uiamiayn>Email</span> <input type="email" name="email" autocomplete="email" required${addAttribute(email, "value")} data-astro-cid-uiamiayn> </label> <button type="submit" class="reset-submit" data-astro-cid-uiamiayn>
Send Reset Link
</button> </form>`} ${submitted && renderTemplate`<div class="submitted-actions" data-astro-cid-uiamiayn> <a href="/?login=1" class="primary-link" data-astro-cid-uiamiayn>
Return to Sign In
</a> </div>`} ${!submitted && renderTemplate`<a href="/?login=1" class="back-link" data-astro-cid-uiamiayn>
← Back to Sign In
</a>`} </div> </section> ` })} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/forgot-password.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/forgot-password.astro";
const $$url = "/account/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
