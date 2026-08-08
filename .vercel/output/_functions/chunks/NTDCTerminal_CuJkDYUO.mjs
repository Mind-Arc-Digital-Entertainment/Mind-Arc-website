import { e as createComponent, f as createAstro, m as maybeRenderHead, n as renderSlot, r as renderTemplate } from './astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$NTDCTerminal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NTDCTerminal;
  const { subtitle = "Phoenix Vector Archive", status = "Archive Node Online" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="ntdc-frame" data-astro-cid-mb4u5j5k> <header class="ntdc-nav-zone" data-astro-cid-mb4u5j5k> <nav class="codex-nav" aria-label="Codex navigation" data-astro-cid-mb4u5j5k> <button class="codex-nav__button" type="button" onclick="history.back()" data-astro-cid-mb4u5j5k>
Back
</button> <a class="codex-nav__button" href="/phoenixvector/codex/" data-astro-cid-mb4u5j5k>Codex Home</a> <a class="codex-nav__button" href="/phoenixvector/" data-astro-cid-mb4u5j5k>Phoenix Vector</a> <a class="codex-nav__button" href="/" data-astro-cid-mb4u5j5k>Mind Arc</a> </nav> </header> <div class="ntdc-display" data-astro-cid-mb4u5j5k> ${renderSlot($$result, $$slots["default"])} </div> </section> `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/components/codex/NTDCTerminal.astro", void 0);

export { $$NTDCTerminal as $ };
