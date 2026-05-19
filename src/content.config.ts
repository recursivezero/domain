import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/article",
  }),

  schema: z.object({
    author: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
  }),
});

const blog = defineCollection({
  type: "content",

  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),

    // Blog tags for hashtags
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  articles,
  blog,
};