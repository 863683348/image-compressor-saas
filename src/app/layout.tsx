import type { Metadata } from "next";
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
 * Root layout — serves as the outermost shell.
 *
 * The actual <html>/<body> tags, locale-specific metadata (hreflang,
 * canonical), I18nProvider, and analytics scripts live in
 * `[lang]/layout.tsx` so that the lang attribute and hreflang values
 * are server-rendered correctly for each locale.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
