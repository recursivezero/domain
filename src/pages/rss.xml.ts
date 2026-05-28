import { siteConfig } from "@/site-config";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET = async (context: any) => {
  const posts = await getCollection("blog");

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    // Use context.site if defined in astro.config.mjs,
    // otherwise fallback to import.meta.env.SITE
    site: context.site || import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      // Ensure the link is an absolute URL or formatted correctly
      link: `/blogs/${post.id}`
    }))
  });
};
