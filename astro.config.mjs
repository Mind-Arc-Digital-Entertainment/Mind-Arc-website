// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  adapter: vercel(),

  vite: {
    plugins: [{
      name: "assault-webgl-wasm-mime",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // This bundle contains raw WASM despite its retained .unityweb suffix.
          // Leave Content-Encoding unset; Vercel can negotiate transport compression.
          if (req.url?.split("?", 1)[0] === "/assault/play/Build/WebGL.wasm.unityweb") {
            res.setHeader("Content-Type", "application/wasm");
          }
          next();
        });
      },
    }],
  },

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