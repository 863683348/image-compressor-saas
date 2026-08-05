import type { MetadataRoute } from "next";
import { locales, toHreflang, defaultLocale } from "@/i18n/config";
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

  // 2. Locale-specific pages — every locale gets its own prefixed URL
  // (always-prefix strategy, matching the middleware 301 behavior).
  for (const page of staticPages) {
    const langMap: Record<string, string> = {};
    for (const l of locales) {
      langMap[toHreflang(l)] = `${SITE_URL}/${l}${page.path}`;
    }
    langMap["x-default"] = `${SITE_URL}/${defaultLocale}${page.path}`;

    // Use the default-locale version as the primary entry
    entries.push({
      url: `${SITE_URL}/${defaultLocale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
      alternates: { languages: langMap },
    });
  }

  // 3. Blog posts — currently zh + en only (content files only exist for
  // these two locales). Other locales are 404'd at the page level, so they
  // must NOT be listed here.
  const blogSlugs = getAllSlugs();
  for (const slug of blogSlugs) {
    const blogLangMap: Record<string, string> = {
      "zh-CN": `${SITE_URL}/zh/blog/${slug}`,
      en: `${SITE_URL}/en/blog/${slug}`,
      "x-default": `${SITE_URL}/en/blog/${slug}`,
    };

    entries.push({
      url: `${SITE_URL}/en/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: blogLangMap },
    });
  }

  return entries;
}
