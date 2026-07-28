import type { MetadataRoute } from "next";
import { locales, toHreflang } from "@/i18n/config";
import { getAllSlugs } from "@/content/blog";

const SITE_URL = "https://image-compressor-saas.shop";

const staticPages = [
  { path: "", priority: 1.0, changefreq: "weekly" as const },
  { path: "/pricing", priority: 0.9, changefreq: "monthly" as const },
  { path: "/faq", priority: 0.8, changefreq: "monthly" as const },
  { path: "/blog", priority: 0.7, changefreq: "weekly" as const },
  { path: "/privacy", priority: 0.5, changefreq: "yearly" as const },
  { path: "/terms", priority: 0.5, changefreq: "yearly" as const },
  { path: "/contact", priority: 0.5, changefreq: "yearly" as const },
  { path: "/auth/signin", priority: 0.3, changefreq: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // 1. Guide (English-only static page)
  entries.push({
    url: `${SITE_URL}/guide.html`,
    lastModified: new Date("2026-07-24"),
    changeFrequency: "monthly",
    priority: 0.8,
  });

  // 2. Locale-specific pages (zh + en)
  for (const page of staticPages) {
    const langMap: Record<string, string> = {};
    for (const l of locales) {
      const url = l === "zh" ? `${SITE_URL}${page.path}` : `${SITE_URL}/${l}${page.path}`;
      langMap[toHreflang(l)] = url;
    }
    langMap["x-default"] = `${SITE_URL}${page.path}`;

    // Use zh version as the primary entry
    entries.push({
      url: `${SITE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
      alternates: { languages: langMap },
    });
  }

  // 3. Blog posts (zh + en)
  const blogSlugs = getAllSlugs();
  for (const slug of blogSlugs) {
    const blogLangMap: Record<string, string> = {};
    for (const l of locales) {
      const url = l === "zh"
        ? `${SITE_URL}/blog/${slug}`
        : `${SITE_URL}/${l}/blog/${slug}`;
      blogLangMap[toHreflang(l)] = url;
    }
    blogLangMap["x-default"] = `${SITE_URL}/blog/${slug}`;

    entries.push({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: blogLangMap },
    });
  }

  return entries;
}
