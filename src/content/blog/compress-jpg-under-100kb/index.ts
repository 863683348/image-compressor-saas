import type { Metadata } from "next";

export const slug = "compress-jpg-under-100kb";

export const titles: Record<string, string> = {
  zh: "如何将 JPG 压缩到 100KB 以下（免费在线，无需注册）",
  en: "How to Compress JPG to Under 100KB Online (Free, 2026)",
};
export const descriptions: Record<string, string> = {
  zh: "30 秒把 JPG 压缩到 100KB 以内——免费、无需注册、100% 浏览器本地处理，不上传服务器。适合邮件附件、签证照片、求职系统上传。",
  en: "Compress JPG to under 100KB in 30 seconds — free, no sign-up, 100% local in your browser. Works for email attachments, visa photos & job portals.",
};

export function meta(lang: string): Metadata {
  if (lang === "zh") {
    return {
      title: "如何将 JPG 压缩到 100KB 以下（免费在线，无需注册）",
      description:
        "30 秒把 JPG 压缩到 100KB 以内——免费、无需注册、100% 浏览器本地处理，不上传服务器。适合邮件附件、签证照片、求职系统上传。",
      openGraph: {
        title: "如何将 JPG 压缩到 100KB 以下（免费在线，无需注册）",
        description: "免费在线 JPG 压缩，100% 本地处理不上传服务器，30 秒压到 100KB 以内。",
      },
    };
  }
  return {
    title: "How to Compress JPG to Under 100KB Online (Free, 2026)",
    description:
      "Compress JPG to under 100KB in 30 seconds — free, no sign-up, 100% local in your browser. Works for email attachments, visa photos & job portals.",
    openGraph: {
      title: "How to Compress JPG to Under 100KB Online (Free, 2026)",
      description: "Compress JPG to under 100KB in your browser — no upload, no sign-up.",
    },
  };
}
