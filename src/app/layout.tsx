import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// ── Single source of truth for the production domain ──
const SITE_URL = "https://image-compressor-saas.shop";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Image Compressor · 100% Local, Privacy First",
    template: "%s · Image Compressor",
  },
  description:
    "Free online image compressor — 100% in-browser, private, no upload, no watermark. Compress & convert JPG/PNG/WebP/AVIF, auto-fit a target size (e.g. 200KB), batch compress and export ZIP.",
  applicationName: "Image Compressor",
  keywords: [
    "image compressor",
    "compress image to 200kb",
    "reduce image size",
    "jpg png webp avif converter",
    "batch image compressor",
    "no watermark image compressor",
    "private in-browser image compression",
    "compress photo for email",
  ],
  category: "utilities",
  openGraph: {
    title: "Image Compressor · Free, Private, In-Browser",
    description: "100% local image compression. No uploads. No watermark.",
    url: SITE_URL,
    siteName: "Image Compressor",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor · Free, Private, In-Browser",
    description: "100% local image compression. No uploads. No watermark.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * Root layout — required by Next.js to contain <html>/<body>.
 *
 * The lang attribute is detected from the NEXT_LOCALE cookie (set by
 * middleware.ts) so that even the initial SSR HTML carries the correct
 * language. If no cookie is present, falls back to "zh-CN".
 *
 * All locale-specific content rendering (I18nProvider, hreflang
 * metadata, JSON-LD, analytics) lives in `[lang]/layout.tsx`.
 */
/**
 * 在水合前根据 URL 路径设置 <html lang>，避免服务端 cookies() 读语言把整站拖成动态渲染。
 * defaultLocale = "en"，故裸 / 与 /en 走英文，/zh 走中文；运行于 <head> 内联脚本，
 * 在 body 绘制前完成，无可见闪动。爬虫不带 cookie，SSR 统一输出 lang="en"，SEO 零影响。
 */
const LANG_BOOTSTRAP = `(function(){try{var p=location.pathname;document.documentElement.lang=p.indexOf('/zh')===0?'zh-CN':'en';}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // AdSense publisher ID — set NEXT_PUBLIC_ADSENSE_CLIENT_ID in env
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#4f46e5" />
        {/* 客户端按 URL 设置 lang，避免 cookies() 触发整站 SSR */}
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP }} />
        {/* Google AdSense site verification — production only */}
        {adsenseClient && (
          <meta name="google-adsense-account" content={adsenseClient} />
        )}
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
