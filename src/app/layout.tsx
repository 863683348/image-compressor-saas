import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";

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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let htmlLang = "zh-CN";
  try {
    const store = await cookies();
    const locale = store.get("NEXT_LOCALE")?.value;
    if (locale === "en") htmlLang = "en";
  } catch {
    // cookies() may throw during build / static generation
  }

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body>{children}</body>
    </html>
  );
}
