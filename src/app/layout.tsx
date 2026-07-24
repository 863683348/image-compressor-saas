import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import FooterClient from "@/components/FooterClient";
import HeaderClient from "@/components/HeaderClient";

// Single source of truth for the production canonical domain.
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
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      "x-default": "/",
    },
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only load analytics in real production (avoid localhost/preview data pollution)
  const isProd =
    process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#4f46e5" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body>
        {isProd && (
          <>
            {/* Google tag (gtag.js) — production only */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XKHEV8W1T7" />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XKHEV8W1T7');`,
              }}
            />
          </>
        )}
        <Providers>
          <HeaderClient />
          {children}
          <FooterClient />
        </Providers>
      </body>
    </html>
  );
}
