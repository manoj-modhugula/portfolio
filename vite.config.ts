import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    // src/server.ts wraps the SSR handler so server errors keep their stack.
    tanstackStart({
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: false, autoSubfolderIndex: true },
      pages: [{ path: "/" }, { path: "/work" }],
    }),
    nitro(),
    viteReact(),
  ],
  resolve: { tsconfigPaths: true, dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"] },
  server: {
    // Set a hostname explicitly when sharing local previews over a private network.
    allowedHosts: process.env['PORTFOLIO_PREVIEW_HOST'] ? [process.env['PORTFOLIO_PREVIEW_HOST']] : [],
  },
});
