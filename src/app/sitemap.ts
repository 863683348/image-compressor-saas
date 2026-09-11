import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog/posts";

const SITE = "https://image-compressor-saas.shop";

// 2026-09-11 修正：原 sitemap 提交的是**不带语言前缀**的静态页 URL
// （/pricing、/faq、/privacy、/terms、/contact），而 middleware 是
// always-prefix 策略 —— 这些 URL 全部 301 到 /en/*，真正 200 的
// /en/pricing 等页面反而没有被提交。站点地图里放重定向 URL 会让 GSC 报
// 「站点地图包含重定向的网址」，拉低整张地图可信度，
// 表现为「已提交的网址数 ≫ 已编入索引」。
// 现在只提交真实返回 200 的带前缀 URL，并补齐 en / zh 两个版本。
const STATIC_PATHS: { path: string; priority: number; freq: "monthly" | "yearly" }[] = [
  { path: "/pricing", priority: 0.9, freq: "monthly" },
  { path: "/faq", priority: 0.8, freq: "monthly" },
  { path: "/privacy", priority: 0.5, freq: "yearly" },
  { path: "/terms", priority: 0.5, freq: "yearly" },
  { path: "/contact", priority: 0.5, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          en: `${SITE}/`,
          "zh-CN": `${SITE}/zh`,
          "x-default": `${SITE}/`,
        },
      },
    },
    {
      url: `${SITE}/guide.html`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...STATIC_PATHS.flatMap(({ path, priority, freq }) =>
      (["en", "zh"] as const).map((l) => ({
        url: `${SITE}/${l}${path}`,
        lastModified: new Date(),
        changeFrequency: freq,
        priority,
        alternates: {
          languages: {
            en: `${SITE}/en${path}`,
            "zh-CN": `${SITE}/zh${path}`,
            "x-default": `${SITE}/en${path}`,
          },
        },
      })),
    ),
    // 博客索引页：两种语言都提交（原来只提交了 /zh/blog，漏掉 /en/blog）
    ...(["en", "zh"] as const).map((l) => ({
      url: `${SITE}/${l}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          en: `${SITE}/en/blog`,
          "zh-CN": `${SITE}/zh/blog`,
          "x-default": `${SITE}/en/blog`,
        },
      },
    })),
  ];

  // Blog posts: each article exists in zh (/zh/blog/{slug}) and en (/en/blog/{slug}).
  // Driven by POSTS so newly added articles are indexed automatically.
  const blogRoutes: MetadataRoute.Sitemap = POSTS.flatMap((post) => {
    const languages = {
      "zh-CN": `${SITE}/zh/blog/${post.slug}`,
      en: `${SITE}/en/blog/${post.slug}`,
      "x-default": `${SITE}/zh/blog/${post.slug}`,
    };
    return [
      {
        url: `${SITE}/zh/blog/${post.slug}`,
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
