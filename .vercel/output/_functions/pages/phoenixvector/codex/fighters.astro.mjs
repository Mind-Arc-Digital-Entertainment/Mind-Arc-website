import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$NTDCTerminal } from '../../../chunks/NTDCTerminal_CuJkDYUO.mjs';
import { f as fighters } from '../../../chunks/fighters_Buqwcc-D.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NTDCTerminal", $$NTDCTerminal, { "title": "Fighters", "subtitle": "Combat Craft Archive", "status": "Status: Declassified" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="fighter-archive"> <div class="fighter-grid" aria-label="Fighter archive entries"> ${fighters.map((fighter) => renderTemplate`<a class="fighter-card"${addAttribute(fighter.href, "href")}> <img class="fighter-card__image"${addAttribute(fighter.image, "src")}${addAttribute(`${fighter.name} fighter craft`, "alt")} loading="lazy"> <div class="fighter-card__shade"></div> <div class="fighter-card__content"> <span class="fighter-card__meta"> ${fighter.designation} / ${fighter.class} Class
</span> <h2>${fighter.name}</h2> <span class="fighter-card__status">${fighter.status}</span> </div> </a>`)} </div> </section> ` })}`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/fighters/index.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/fighters/index.astro";
const $$url = "/phoenixvector/codex/fighters";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
