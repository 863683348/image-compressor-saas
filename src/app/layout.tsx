import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import FooterClient from "@/components/FooterClient";
import HeaderClient from "@/components/HeaderClient";

export const metadata: Metadata = {
  title: "Image Compressor · 100% Local, Privacy First",
  description: "Free online image compressor — 100% in-browser, private, no upload, no watermark. Compress & convert JPG/PNG/WebP/AVIF, auto-fit a target size (e.g. 200KB), batch compress and export ZIP.",
  metadataBase: new URL("https://image-compressor-saas.vercel.app"),
  alternates: {
    languages: {
      "zh-CN": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Image Compressor · Free, Private, In-Browser",
    description: "100% local image compression. No uploads. No watermark.",
    url: "https://image-compressor-saas.vercel.app",
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
    "max-image-preview": "large",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="canonical" href="https://image-compressor-saas.vercel.app" />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Image Compressor",
              url: "https://image-compressor-saas.vercel.app",
              description: "Free online image compressor — 100% in-browser, private, no upload, no watermark. Compress JPG/PNG/WebP/AVIF.",
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XKHEV8W1T7" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XKHEV8W1T7');`,
        }} />
        <Providers>
          <HeaderClient />
          {children}
          <FooterClient />
        </Providers>
      </body>
    </html>
  );
}
