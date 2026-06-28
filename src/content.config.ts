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

const research = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/research"
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    isActive: z.boolean().default(true)
  })
});

export const collections = {
  articles,
  blog,
  research
};
