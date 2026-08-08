import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Dev Logs | Phoenix Vector", "data-astro-cid-bw45uiho": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="devlog-page" data-astro-cid-bw45uiho> <section class="devlog-hero" data-astro-cid-bw45uiho> <h1 data-astro-cid-bw45uiho>Dev Logs</h1> <p data-astro-cid-bw45uiho>
Development notes, build updates, design changes, and behind-the-scenes
        progress from Mind Arc Games.
</p> </section> <section class="devlog-grid" aria-label="Phoenix Vector development logs" data-astro-cid-bw45uiho> <article class="devlog-card" data-astro-cid-bw45uiho> <p class="devlog-meta" data-astro-cid-bw45uiho>v0.1.1 • Profile / Energy Update</p> <h2 data-astro-cid-bw45uiho>Profile & Energy Systems</h2> <p data-astro-cid-bw45uiho>
A foundational update focused on first-time player setup, persistent
          progression data, mission energy usage, and internal testing
          stability.
</p> <a href="/phoenixvector/devlog/v0-1-1/" class="devlog-link" data-astro-cid-bw45uiho>
Read Log
</a> </article> <article class="devlog-card" data-astro-cid-bw45uiho> <p class="devlog-meta" data-astro-cid-bw45uiho>v0.2.0 • UI / Bug Fix</p> <h2 data-astro-cid-bw45uiho>N.T.D.C. Interface Overhaul</h2> <p data-astro-cid-bw45uiho>
A visual redesign pass focused on establishing the new N.T.D.C.
          interface language, including menu styling, button treatment, and a
          fix for the start button flash issue.
</p> <a href="/phoenixvector/devlog/v0-2-0/" class="devlog-link" data-astro-cid-bw45uiho>
Read Log
</a> </article> </section> <section class="devlog-footer" data-astro-cid-bw45uiho> <a href="https://mindarcgames.com" class="back-home-link" target="_blank" rel="noopener noreferrer" data-astro-cid-bw45uiho>
← MindArcGames.com
</a> <a href="/phoenixvector/" class="back-home-link" data-astro-cid-bw45uiho> ↗ Phoenix Vector </a> </section> </main> ` })} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/devlog/index.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/devlog/index.astro";
const $$url = "/phoenixvector/devlog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
