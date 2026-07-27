import type { Metadata } from "next";

export const slug = "compress-to-target-size";

export function meta(lang: string): Metadata {
  if (lang === "zh") {
    return {
      title: "如何将图片压缩到指定大小（200KB/100KB/50KB）",
      description:
        "完整指南：如何将图片精确压缩到 200KB、100KB、50KB 或任意指定大小。100% 浏览器本地处理，不上传服务器，无水印，完全免费。支持 JPG、PNG、WebP、AVIF。",
      openGraph: {
        title: "如何将图片压缩到指定大小（200KB/100KB/50KB）",
        description:
          "完整指南：将图片精确压缩到任意指定大小，100% 本地处理，不上传服务器。",
      },
    };
  }
  return {
    title: "How to Compress Images to Any Target Size (200KB/100KB/50KB) — Free & Private",
    description:
      "Complete guide: compress images to exactly 200KB, 100KB, 50KB, or any file size. 100% in-browser, no upload, no watermark, free forever. Supports JPG, PNG, WebP, AVIF.",
    openGraph: {
      title: "How to Compress Images to Any Target Size — Free & Private",
      description:
        "Complete guide: compress images to exactly 200KB, 100KB, or any size. No upload, no watermark.",
    },
  };
}
