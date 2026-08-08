import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const justVerified = Astro2.url.searchParams.get("verified") === "true";
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
  const showVerificationWelcome = justVerified && !!user;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Mind Arc Games | Home", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-page" data-astro-cid-j7pv25f6> <div class="home-shell" data-astro-cid-j7pv25f6> <section class="hero" data-astro-cid-j7pv25f6> <img src="../images/mindarcNoplanelogo.png" alt="Mind Arc Games" class="mindarc-wordmark" data-astro-cid-j7pv25f6> </section> ${showVerificationWelcome && renderTemplate`<div class="verification-welcome" data-astro-cid-j7pv25f6> <span class="verification-check" aria-hidden="true" data-astro-cid-j7pv25f6>
✓
</span> <div data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>Welcome${mindArcId ? `, ${mindArcId}` : ""}.</strong> <span data-astro-cid-j7pv25f6>Your Mind Arc account is verified and ready.</span> </div> </div>`} <section class="panel intro-panel" data-astro-cid-j7pv25f6> <div class="panel-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Welcome to Mind Arc Games</h2> </div> <p data-astro-cid-j7pv25f6>
Mind Arc Games is an independent creative studio dedicated to building
          atmospheric sci-fi experiences with a unique visual identity,
          responsive gameplay, and a sense of nostalgia.
</p> <p data-astro-cid-j7pv25f6>
Each project shares a common philosophy: polished gameplay, immersive
          worlds, and experiences designed for player enjoyment.
</p> </section> <section class="game-grid" data-astro-cid-j7pv25f6> <article class="game-card" data-astro-cid-j7pv25f6> <div class="game-card-image" data-astro-cid-j7pv25f6> <img src="../images/kestrelHero.png" alt="Phoenix Vector: Assault" data-astro-cid-j7pv25f6> </div> <div class="game-card-content" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Assault</h2> <p data-astro-cid-j7pv25f6></p> <a href="/assault" class="btn btn-primary" data-astro-cid-j7pv25f6> Explore </a> </div> </article> <article class="game-card" data-astro-cid-j7pv25f6> <div class="game-card-image" data-astro-cid-j7pv25f6> <img src="../images/BrandCoreTitlePage.png" alt="Phoenix Vector" data-astro-cid-j7pv25f6> </div> <div class="game-card-content" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Phoenix Vector</h2> <p data-astro-cid-j7pv25f6></p> <a href="/phoenixvector" class="btn btn-primary" data-astro-cid-j7pv25f6> Explore </a> </div> </article> </section> </div> </main> ` })} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/index.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
