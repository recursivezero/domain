import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const articles = defineCollection({
  // Modern Content Layer Loader
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/article"
  }),
  schema: z.object({
    author: z.string(),
    description: z.string().optional(),
    date: z.date().optional()
  })
});

const blog = defineCollection({
  // REMOVED: type: "content" (Legacy)
  // ADDED: loader (Modern)
  loader: glob({
    pattern: "**/*.{md,mdx}", // Supports both Markdown and MDX
    base: "./src/content/blog"
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional().default([])
  })
});

export const collections = {
  articles,
  blog
};
