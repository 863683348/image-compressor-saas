import type { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata-helper";
import BlogPage from "./page-client";

type Props = { params: Promise<{ lang: string }> };

// 2026-09-11：改为走统一的 generatePageMetadata —— 原来 title 硬编码 "Blog"
// 且中文版也是英文标题，x-default 还错指 /zh/blog（默认语言是 en）。
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "/blog");
}

export default async function Page(_props: Props) {
  return <BlogPage />;
}
