import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://app.com",
  prefetch: true,
  output: "server",
  devToolbar: {
    enabled: false
  },
  experimental: {
    svg: true
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
  adapter: node({ mode: "standalone" }),
  style: {
    global: true // Ensure global styles are applied
  },
  vite: {
    plugins: [rawFonts([".ttf"])],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});

function rawFonts(ext) {
  return {
    name: "vite-plugin-raw-fonts",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null
        };
      }
    }
  };
}
