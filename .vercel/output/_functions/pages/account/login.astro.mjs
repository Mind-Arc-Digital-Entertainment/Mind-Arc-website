import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBvZ5zkf.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    if (!email || !password) {
      return Astro2.redirect(
        `/?login=error&reason=missing&email=${encodeURIComponent(email)}`
      );
    }
    const { error } = await Astro2.locals.supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.error("Login failed:", error.message);
      const reason = error.message.toLowerCase().includes("email not confirmed") ? "unconfirmed" : "invalid";
      return Astro2.redirect(
        `/?login=error&reason=${reason}&email=${encodeURIComponent(email)}`
      );
    }
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate`  ` })}`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/login.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/account/login.astro";
const $$url = "/account/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
