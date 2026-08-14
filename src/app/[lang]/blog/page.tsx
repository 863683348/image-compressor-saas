import type { Metadata } from "next";
import BlogPage from "./page-client";

const SITE_URL = "https://image-compressor-saas.shop";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "zh";
  return {
    title: "Blog · Image Compressor",
    description:
      "Practical guides on image compression, web optimization, and privacy protection. WebP vs AVIF comparison, target size compression tips, and more.",
    alternates: {
      canonical: `${SITE_URL}/${locale}/blog`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/blog`,
        en: `${SITE_URL}/en/blog`,
        "x-default": `${SITE_URL}/zh/blog`,
      },
    },
  };
}

export default async function Page(_props: Props) {
  return <BlogPage />;
}
