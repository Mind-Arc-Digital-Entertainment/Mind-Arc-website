import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CvNkiJ_b.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_CBvZ5zkf.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "v0.1.1 Dev Log | Phoenix Vector" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="log-page"> <article class="log-shell"> <a href="/phoenixvector/devlog/" class="back-link">← Back to Dev Logs</a> <header class="log-hero"> <p class="log-meta">v0.1.1 • Profile / Energy Update</p> <p class="log-date">May 8, 2026</p> <h1>Profile & Energy Systems</h1> <p class="log-summary">
A foundational update focused on first-time pilot setup, clean player
          save initialization, mission energy usage, offline energy
          regeneration, and internal testing stability.
</p> </header> <section class="log-section"> <h2>Overview</h2> <p>
A foundational update focused on first-time pilot setup, clean player
          save initialization, mission energy usage, offline energy
          regeneration, and internal testing stability.
</p> </section> <section class="log-section"> <h2>What Changed</h2> <ul> <li>Added first-time pilot name creation for new players.</li> <li>
Created a cleaner new-player initialization flow for fresh installs.
</li> <li>
Corrected the issue where internal test player data could appear in
            deployed builds.
</li> <li>
Ensured Tech Shards, upgrades, and progression data begin from zero
            for new save data.
</li> <li>Added the first version of the mission energy system.</li> <li>Set the player’s maximum energy capacity to 10 cells.</li> <li>Configured each stage launch to consume 1 energy cell.</li> <li>Implemented energy regeneration at 1 cells every 12 minutes.</li> <li>
Allowed energy to regenerate while the app is closed using
            device-time tracking.
</li> <li>Prepared the flow for future rewarded-ad energy recovery.</li> </ul> </section> <section class="log-section"> <h2>Development Notes</h2> <p>
This update was a critical step toward making Phoenix Vector behave
          like a real deployed game rather than a local development build. The
          previous test data issue revealed the need for a cleaner new-player
          flow, proper save initialization, and stronger separation between
          development testing data and live player progression.
</p> <p>
The energy system also began taking shape in this version. Players now
          have a limited mission launch resource that regenerates over time,
          creating the foundation for future ad rewards, pacing, and mobile
          progression tuning.
</p> </section> <section class="log-section"> <h2>Next Objectives</h2> <p>
Upcoming work will continue refining the front-end experience,
          improving menu flow, strengthening the N.T.D.C. interface direction,
          and preparing Phoenix Vector for smoother internal testing updates.
</p> </section> </article> </main> ` })}`;
}, "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/devlog/v0-1-1/index.astro", void 0);

const $$file = "C:/Users/JoeyM/Mind Arc/MindArcGames/src/pages/phoenixvector/devlog/v0-1-1/index.astro";
const $$url = "/phoenixvector/devlog/v0-1-1";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
