import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$NTDCTerminal } from '../../chunks/NTDCTerminal_CuJkDYUO.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const codexHome = [
	{
		id: "fighters",
		title: "Fighters",
		status: "Online",
		fileCount: 3,
		description: "",
		source: "/data/codex/fighters.json"
	},
	{
		id: "personnel",
		title: "Personnel",
		status: "Online",
		fileCount: 0,
		description: "",
		source: "/data/codex/personnel.json"
	},
	{
		id: "vessels",
		title: "Vessels",
		status: "Online",
		fileCount: 0,
		description: "",
		source: "/data/codex/vessels.json"
	},
	{
		id: "factions",
		title: "Factions",
		status: "Online",
		fileCount: 1,
		description: "",
		source: "/data/codex/factions.json"
	},
	{
		id: "locations",
		title: "Locations",
		status: "Offline",
		fileCount: 0,
		description: "",
		source: "/data/codex/locations.json"
	}
];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "NTDCTerminal", $$NTDCTerminal, { "title": "", "subtitle": "Command Archive", "status": "Status: Online", "data-astro-cid-b7qgswjd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="codex-home" data-astro-cid-b7qgswjd> <nav class="codex-archive-list" aria-label="Codex categories" data-astro-cid-b7qgswjd> ${codexHome.map((item) => renderTemplate`<a class="codex-archive-item"${addAttribute(`/phoenixvector/codex/${item.id}/`, "href")} data-astro-cid-b7qgswjd> <div class="codex-archive-item__main" data-astro-cid-b7qgswjd> <span class="codex-archive-item__status" data-astro-cid-b7qgswjd>${item.status}</span> <h2 class="codex-archive-item__title" data-astro-cid-b7qgswjd>${item.title}</h2> </div> <span class="codex-archive-item__meta" data-astro-cid-b7qgswjd> ${item.fileCount} ${item.fileCount === 1 ? "File" : "Files"} </span> </a>`)} </nav> </section> ` })} `;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/index.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/codex/index.astro";
const $$url = "/phoenixvector/codex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
