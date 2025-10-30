import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://recursivezero.com",
  base: "/",
  devToolbar: {
    enabled: false
  },
  experimental: {
    svg: true
  },
  image: {
    service: passthroughImageService()
  },
  integrations: [
    mdx(),
    react({
      experimentalReactChildren: true
    }),
    tailwind({
      applyBaseStyles: false,
      nesting: true
    })
  ],
  //adapter: node({ mode: "standalone" }),
  output: "static",
  build: {
    format: "directory",
    assets: "assets"
  },
  prefetch: {
    prefetchAll: true
  },
  style: {
    global: true // Ensure global styles are applied
  },
  vite: {
    plugins: [],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});
