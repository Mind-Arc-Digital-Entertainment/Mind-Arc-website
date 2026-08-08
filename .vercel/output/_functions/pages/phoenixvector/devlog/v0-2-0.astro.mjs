import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "v0.2.0 Dev Log | Phoenix Vector" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="log-page"> <article class="log-shell"> <a href="/phoenixvector/devlog/" class="back-link">← Back to Dev Logs</a> <header class="log-hero"> <p class="log-meta">v0.2.0 • Interface Update</p> <p class="log-date">May 11, 2026</p> <h1>N.T.D.C. Interface Overhaul</h1> <p class="log-summary">
A focused development pass on the Phoenix Vector front-end experience,
          introducing the new N.T.D.C. visual language and correcting the start
          button flash issue.
</p> </header> <section class="log-section"> <h2>Overview</h2> <p>
Version 0.2.0 marks the beginning of a stronger, more unique visual
          identity for Phoenix Vector. This update introduces a unified N.T.D.C.
          interface style built around darker themed military sci-fi panels,
          gold command interface accents, sharper button look and action, and a
          more deliberate presentation layer.
</p> </section> <section class="log-section"> <h2>What Changed</h2> <ul> <li>Introduced the new congruent N.T.D.C. menu styling.</li> <li>
Updated button presentation to better match the command interface
            theme.
</li> <li>Fixed the start button flash bug during menu transitions.</li> <li>
Continued moving Phoenix Vector toward a stronger branded visual
            identity.
</li> </ul> </section> <section class="log-section"> <h2>Development Notes</h2> <p>
The original interface direction helped establish the foundation of
          the game, but the new N.T.D.C. direction gives Phoenix Vector a
          clearer identity. This pass is less about decoration and more about
          creating a recognizable command-layer style that can carry through
          menus, codex entries, patch notes, screenshots, and future systems.
</p> </section> <section class="log-section"> <h2>Next Objectives</h2> <p>
Upcoming work will continue expanding this visual language while
          improving the game’s presentation, adding more screenshots, refining
          the front-end flow, and preparing the next internal testing build.
</p> </section> </article> </main> ` })}`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/devlog/v0-2-0/index.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/devlog/v0-2-0/index.astro";
const $$url = "/phoenixvector/devlog/v0-2-0";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
