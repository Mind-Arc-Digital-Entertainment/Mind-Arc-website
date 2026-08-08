// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),

  security: {
    allowedDomains: [
      {
        protocol: "https",
        hostname: "www.mindarcgames.com",
      },
      {
        protocol: "https",
        hostname: "mindarcgames.com",
      },
    ],
  },
});