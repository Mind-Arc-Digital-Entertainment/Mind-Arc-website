import { e as createComponent, f as createAstro, m as maybeRenderHead, k as renderComponent, r as renderTemplate, o as Fragment, l as renderScript, n as renderSlot, p as renderHead } from './astro/server_CvNkiJ_b.mjs';
import 'piccolore';
/* empty css                                   */
import 'clsx';

const $$Astro = createAstro();
const $$UtilityBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UtilityBar;
  const {
    data: { user }
  } = await Astro2.locals.supabase.auth.getUser();
  let mindArcId = null;
  if (user) {
    const { data: profile, error } = await Astro2.locals.supabase.from("profiles").select("username").eq("id", user.id).maybeSingle();
    if (error) {
      console.error("Unable to load player profile:", error.message);
    }
    mindArcId = profile?.username ?? null;
  }
  return renderTemplate`${maybeRenderHead()}<div class="utility-bar" data-astro-cid-7kfxatlb> <div class="utility-left" data-astro-cid-7kfxatlb> <div class="logo" data-astro-cid-7kfxatlb> <a href="/" class="utility-link" aria-label="Go to homepage" data-astro-cid-7kfxatlb> <img src="/images/mindarcNoplanelogo.png" alt="Mind Arc Logo" data-astro-cid-7kfxatlb> </a> </div> </div> <nav class="utility-nav" aria-label="Primary" data-astro-cid-7kfxatlb> <a href="/phoenixvector" class="nav-link" data-astro-cid-7kfxatlb>Phoenix Vector</a> <a href="/assault" class="nav-link" data-astro-cid-7kfxatlb>Assault</a> </nav> <div class="utility-right" data-astro-cid-7kfxatlb> ${user ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-7kfxatlb": true }, { "default": async ($$result2) => renderTemplate` <a href="/account/profile" class="player-link" data-astro-cid-7kfxatlb> <span class="player-label" data-astro-cid-7kfxatlb>Mind Arc ID</span> <span class="player-name" data-astro-cid-7kfxatlb>${mindArcId ?? "Player"}</span> </a> <form method="POST" action="/account/logout" class="logout-form" data-astro-cid-7kfxatlb> <button type="submit" class="utility-link logout-button" data-astro-cid-7kfxatlb>
Log Out
</button> </form> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-7kfxatlb": true }, { "default": async ($$result2) => renderTemplate` <button type="button" class="utility-link utility-login-button" data-login-open data-astro-cid-7kfxatlb>
Sign-In
</button> ` })}`} </div> </div> `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/components/UtilityBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" role="contentinfo" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <p class="build-note" data-astro-cid-sz7xmlte>A Mind Arc Games Production</p> <nav class="footer-nav" aria-label="Footer links" data-astro-cid-sz7xmlte> <ul class="link-grid" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a class="support-link" href="/support" data-astro-cid-sz7xmlte>Support Development</a> </li> <li data-astro-cid-sz7xmlte><a href="/terms" data-astro-cid-sz7xmlte>Terms of Use</a></li> <li data-astro-cid-sz7xmlte><a href="/privacy" data-astro-cid-sz7xmlte>Privacy</a></li> </ul> </nav> <p class="footer-contact" data-astro-cid-sz7xmlte>
Get in touch:
<a href="mailto:contact@mindarcgames.com" data-astro-cid-sz7xmlte>contact@mindarcgames.com</a> </p> <div class="social-links" aria-label="Social media links" data-astro-cid-sz7xmlte> <a href="https://youtube.com/@mindarcgames" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <img src="/icons/youtube.svg" alt="YouTube" data-astro-cid-sz7xmlte> </a> <a href="https://tiktok.com/@mindarcgames" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <img src="/icons/tiktok.svg" alt="TikTok" data-astro-cid-sz7xmlte> </a> <a href="https://twitter.com/mindarcgames" target="_blank" rel="noopener" data-astro-cid-sz7xmlte> <img src="/icons/x.svg" alt="X / Twitter" data-astro-cid-sz7xmlte> </a> </div> <p class="footer-subtext" data-astro-cid-sz7xmlte>
© ${year} Mind Arc Digital Entertainment LLC. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/components/Footer.astro", void 0);

const $$LoginModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="login-modal" id="login-modal" aria-hidden="true" data-astro-cid-o4dbeirz> <div class="login-backdrop" data-login-close data-astro-cid-o4dbeirz></div> <section class="login-panel" role="dialog" aria-modal="true" aria-labelledby="login-title" data-astro-cid-o4dbeirz> <button class="login-close" type="button" aria-label="Close login" data-login-close data-astro-cid-o4dbeirz>
×
</button> <div class="login-header" data-astro-cid-o4dbeirz> <p class="login-eyebrow" data-astro-cid-o4dbeirz>Mind Arc Games</p> <h2 id="login-title" data-astro-cid-o4dbeirz>Sign In</h2> <p class="login-subtitle" id="login-status" role="status" aria-live="polite" data-astro-cid-o4dbeirz></p> </div> <form method="POST" action="/account/login" class="login-form" data-astro-cid-o4dbeirz> <label class="field" data-astro-cid-o4dbeirz> <span data-astro-cid-o4dbeirz>Email</span> <input id="login-email" type="email" name="email" autocomplete="email" required data-astro-cid-o4dbeirz> </label> <label class="field" data-astro-cid-o4dbeirz> <span data-astro-cid-o4dbeirz>Password</span> <input id="login-password" type="password" name="password" autocomplete="current-password" required data-astro-cid-o4dbeirz> </label> <button type="submit" class="login-submit" data-astro-cid-o4dbeirz> Log In </button> </form> <a href="/account/forgot-password" class="forgot-link" data-astro-cid-o4dbeirz>
Forgot password?
</a> <div class="account-divider" data-astro-cid-o4dbeirz></div> <div class="create-account" data-astro-cid-o4dbeirz> <p data-astro-cid-o4dbeirz>New to Mind Arc?</p> <a href="/account/register" class="create-account-button" data-astro-cid-o4dbeirz>
Create Account
</a> </div> </section> </div> ${renderScript($$result, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/components/LoginModal.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/components/LoginModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-37fxchfa> <head><meta name="color-scheme" content="light dark"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Mind Arc</title><script>\n      (() => {\n        const KEY = "ma-theme";\n        const saved = localStorage.getItem(KEY);\n        const prefersDark = window.matchMedia(\n          "(prefers-color-scheme: dark)",\n        ).matches;\n        const theme = saved || (prefersDark ? "dark" : "light");\n        document.documentElement.setAttribute("data-theme", theme);\n      })();\n    <\/script><link rel="icon" type="image/png" href="/favicon.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Michroma&family=Orbitron:wght@400..900&display=swap" rel="stylesheet">', '</head> <body data-astro-cid-37fxchfa> <div class="site-shell" data-astro-cid-37fxchfa> ', " ", ' <main class="site-main" data-astro-cid-37fxchfa> ', " </main> ", " </div> </body></html>"])), renderHead(), renderComponent($$result, "UtilityBar", $$UtilityBar, { "data-astro-cid-37fxchfa": true }), renderComponent($$result, "LoginModal", $$LoginModal, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }));
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
