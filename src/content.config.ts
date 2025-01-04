import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      date: z.date(),
      image: z.string().url(),
      description: z.string().optional(),
      author: z.string().optional()
    })
  }),
  work: defineCollection({
    loader: glob({ pattern: "**/*.astro", base: "/src/pages/work/" }),
    schema: z.object({
      title: z.string(),
      image: z.string().url(),
      description: z.string()
    })
  })
};
