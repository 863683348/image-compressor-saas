import type { Metadata } from "next";

export const slug = "webp-avif-jpeg-comparison";

// Raw strings for JSON-LD structured data
export const titles: Record<string, string> = {
  zh: "WebP vs AVIF vs JPEG：2026 年该选哪种图片格式？",
  en: "WebP vs AVIF vs JPEG: Which Image Format Should You Use in 2026?",
};
export const descriptions: Record<string, string> = {
  zh: "三种主流图片格式的全面对比——压缩率、浏览器兼容性、最佳使用场景分析。帮你做出最适合的选择。",
  en: "A comprehensive comparison of WebP, AVIF, and JPEG — compression ratio, browser support, and best use cases to help you choose the right format for your project.",
};

export function meta(lang: string): Metadata {
  if (lang === "zh") {
    return {
      title: titles.zh,
      description: descriptions.zh,
      openGraph: { title: titles.zh, description: descriptions.zh },
    };
  }
  return {
    title: titles.en,
    description: descriptions.en,
    openGraph: { title: titles.en, description: descriptions.en },
  };
}
