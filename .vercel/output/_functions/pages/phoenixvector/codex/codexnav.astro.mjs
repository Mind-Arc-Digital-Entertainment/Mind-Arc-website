import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from '../../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$CodexNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CodexNav;
  const { backHref = "/phoenixvector/codex/" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="codex-nav" aria-label="Codex navigation"> <a class="codex-nav__button"${addAttribute(backHref, "href")}>Back</a> <a class="codex-nav__button" href="/phoenixvector/codex/">Codex Home</a> <a class="codex-nav__button" href="/phoenixvector/">Phoenix Vector</a> <a class="codex-nav__button" href="/">Mind Arc</a> </nav>`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/CodexNav.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/CodexNav.astro";
const $$url = "/phoenixvector/codex/CodexNav";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CodexNav,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
