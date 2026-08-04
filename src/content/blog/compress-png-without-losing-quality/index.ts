import type { Metadata } from "next";

export const slug = "compress-png-without-losing-quality";

export const titles: Record<string, string> = {
  zh: "如何无损压缩 PNG（2026 完整指南）",
  en: "How to Compress PNG Without Losing Quality (2026 Guide)",
};
export const descriptions: Record<string, string> = {
  zh: "PNG 无损压缩指南：浏览器工具、pngquant/optipng 命令行、PNG-8 vs PNG-24，像素完全一致体积减 30-70%。100% 本地处理不上传。",
  en: "Compress PNG without losing quality — browser tool, pngquant/optipng CLI, PNG-8 vs PNG-24. Identical pixels, 30-70% smaller. 100% local, no upload.",
};

export function meta(lang: string): Metadata {
  if (lang === "zh") {
    return {
      title: "如何无损压缩 PNG（2026 完整指南）",
      description:
        "PNG 无损压缩指南：浏览器工具、pngquant/optipng 命令行、PNG-8 vs PNG-24，像素完全一致体积减 30-70%。100% 本地处理不上传。",
      openGraph: {
        title: "如何无损压缩 PNG（2026 完整指南）",
        description: "无损压缩 PNG——像素一致、体积减半，浏览器本地完成。",
      },
    };
  }
  return {
    title: "How to Compress PNG Without Losing Quality (2026 Guide)",
    description:
      "Compress PNG without losing quality — browser tool, pngquant/optipng CLI, PNG-8 vs PNG-24. Identical pixels, 30-70% smaller. 100% local, no upload.",
    openGraph: {
      title: "How to Compress PNG Without Losing Quality (2026 Guide)",
      description: "Lossless PNG compression — identical pixels, half the size, done in your browser.",
    },
  };
}
