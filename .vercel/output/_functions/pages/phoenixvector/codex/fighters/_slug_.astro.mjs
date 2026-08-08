import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$NTDCTerminal } from '../../../../chunks/NTDCTerminal_CuJkDYUO.mjs';
import { f as fighters } from '../../../../chunks/fighters_Buqwcc-D.mjs';
/* empty css                                           */
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return fighters.map((fighter) => ({
    params: {
      slug: fighter.slug
    },
    props: {
      fighter
    }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { fighter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "NTDCTerminal", $$NTDCTerminal, { "title": fighter.name, "subtitle": fighter.designation, "status": fighter.status }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="fighter-entry"> <div class="fighter-entry__header"> <h1>${fighter.name}</h1> </div> <div class="fighter-entry__hero"> <img${addAttribute(fighter.image, "src")}${addAttribute(fighter.name, "alt")}> </div> <div class="fighter-entry__content"> <div class="fighter-entry__description"> ${fighter.description.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> </div> </article> ` })}`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/fighters/[slug].astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/fighters/[slug].astro";
const $$url = "/phoenixvector/codex/fighters/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
