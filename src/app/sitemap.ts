import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog/posts";

const SITE = "https://image-compressor-saas.shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "zh-CN": `${SITE}/`,
          "x-default": `${SITE}/`,
        },
      },
    },
    { url: `${SITE}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE}/guide.html`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  // Blog posts: each article exists in zh (/blog/{slug}) and en (/en/blog/{slug}).
  // Driven by POSTS so newly added articles are indexed automatically.
  const blogRoutes: MetadataRoute.Sitemap = POSTS.flatMap((post) => {
    const languages = {
      "zh-CN": `${SITE}/blog/${post.slug}`,
      en: `${SITE}/en/blog/${post.slug}`,
      "x-default": `${SITE}/blog/${post.slug}`,
    };
    return [
      {
        url: `${SITE}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages },
      },
      {
        url: `${SITE}/en/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages },
      },
    ];
  });

  return [...staticRoutes, ...blogRoutes];
}
