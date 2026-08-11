import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/i18n-provider";
import { buildLanguageAlternates } from "@/i18n/config";
import HeaderClient from "@/components/HeaderClient";
import FooterClient from "@/components/FooterClient";
import { CompressorTool } from "@/components/CompressorTool";

// 根路径（/）渲染：Header + 内容 + Footer。
// 语言设为静态默认 "en"（defaultLocale），不再读 cookies() —— 避免整站被拖成动态渲染。
// 带 NEXT_LOCALE=zh cookie 的用户由 I18nProvider 的 setLang 在客户端即时切换为中文。
// [lang]/* 路由不要复用此 page —— 它们直接 render <CompressorTool />，
// Header/Footer 由 [lang]/layout.tsx 提供，避免重复渲染。
//
// 注：首页（裸 /）此前既无 canonical、也无 JSON-LD、更无 hreflang，
// 因为那些都在 [lang]/layout.tsx 里，而 / 走的是本文件 + 根 layout。
// 这里补齐，确保直接访问域名首页时也具备完整结构化数据与 hreflang。
const SITE_URL = "https://image-compressor-saas.shop";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: buildLanguageAlternates("en", "/", SITE_URL),
  },
};

export default function HomePage() {
  const locale = "en"; // 静态默认（defaultLocale），SSR 不再依赖 cookie

  const webAppLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Compressor",
    url: SITE_URL,
    description:
      "Free online image compressor — 100% in-browser, private, no upload, no watermark. Compress JPG/PNG/WebP/AVIF.",
    applicationCategory: "Multimedia",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Compress images locally in browser",
      "No upload to server",
      "No watermark",
      "Batch compression",
      "ZIP export",
      "JPG / PNG / WebP / AVIF support",
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD — WebApplication structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
      />
      {/* JSON-LD — BreadcrumbList (homepage root) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <I18nProvider locale={locale}>
        <HeaderClient />
        <CompressorTool />
        <FooterClient />
      </I18nProvider>
    </>
  );
}
