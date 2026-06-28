import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://recursivezero.com",
  base: "/",
  devToolbar: {
    enabled: false
  },
  image: {
    service: passthroughImageService()
  },
  integrations: [
    mdx(),
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
