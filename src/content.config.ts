import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const collections = {
  articles: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/article" }),
    schema: z.object({
      title: z.string(),
      author: z.string(),
      description: z.string().optional(),
      date: z.date().optional()
    })
  }),

  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      image: z.string().url(),
      description: z.string().optional(),
      author: z.string().optional()
    })
  })
};
