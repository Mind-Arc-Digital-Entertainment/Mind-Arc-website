import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "404 | Signal Lost", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="not-found-page" data-astro-cid-zetdm5md> <div class="not-found-shell" data-astro-cid-zetdm5md> <section class="not-found-panel" data-astro-cid-zetdm5md> <p class="eyebrow" data-astro-cid-zetdm5md>Mind Arc Games // Navigation Error</p> <p class="status-code" data-astro-cid-zetdm5md>404</p> <h1 data-astro-cid-zetdm5md>Access Denied</h1> <p class="lead" data-astro-cid-zetdm5md>
The page you’re attempting to access is unavailable.
</p> <p class="subcopy" data-astro-cid-zetdm5md>
Clearance level inadequate. Access to this sector is restricted.
</p> <div class="actions" data-astro-cid-zetdm5md> <a href="/" class="btn btn-primary" data-astro-cid-zetdm5md>Return Home</a> <a href="/phoenixvector/" class="btn btn-secondary" data-astro-cid-zetdm5md>Enter Phoenix Vector</a> <a href="/phoenixvector/codex/" class="btn btn-secondary" data-astro-cid-zetdm5md>Open Codex</a> </div> <div class="status-strip" aria-hidden="true" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md>LINK FAILURE</span> <span data-astro-cid-zetdm5md>ARCHIVE UNAVAILABLE</span> <span data-astro-cid-zetdm5md>SECTOR UNKNOWN</span> </div> </section> </div> </main> ` })} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/404.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
