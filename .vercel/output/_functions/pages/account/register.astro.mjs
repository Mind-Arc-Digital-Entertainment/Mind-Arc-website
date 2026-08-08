import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBvZ5zkf.mjs';
export { renderers } from '../../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Create Account | Mind Arc Games" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="account-page"> <section class="account-panel"> <p class="account-kicker">Mind Arc Games</p> <h1>Create Account</h1> <p>
Create a free Mind Arc Games account to play Phoenix Vector: Assault and
        save your progress.
</p> <form id="register-form"> <div class="form-field"> <label for="email">Email Address</label> <input id="email" name="email" type="email" autocomplete="email" required> </div> <div class="form-field"> <label for="password">Password</label> <input id="password" name="password" type="password" autocomplete="new-password" minlength="8" required> </div> <div class="form-field"> <label for="confirm-password">Confirm Password</label> <input id="confirm-password" name="confirmPassword" type="password" autocomplete="new-password" minlength="8" required> </div> <button id="submit-button" type="submit"> Create Account </button> </form> <p id="form-message" aria-live="polite"></p> <p>
Already have an account?
<a href="/account/login">Sign in</a> </p> </section> </main> ${renderScript($$result2, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/register.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/register.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/register.astro";
const $$url = "/account/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
