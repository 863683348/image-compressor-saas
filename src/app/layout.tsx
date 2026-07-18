import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import FooterClient from "@/components/FooterClient";
import HeaderClient from "@/components/HeaderClient";

export const metadata: Metadata = {
  title: "Image Compressor · 100% Local, Privacy First",
  description: "Free online image compressor — 100% in-browser, private, no upload, no watermark. Compress & convert JPG/PNG/WebP/AVIF, auto-fit a target size (e.g. 200KB), batch compress and export ZIP.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="canonical" href="https://image-compressor-saas.vercel.app" />
        <meta property="og:title" content="Image Compressor · Free, Private, In-Browser" />
        <meta property="og:description" content="100% local image compression. No uploads. No watermark." />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <Providers>
          <HeaderClient />
          {children}
          <FooterClient />
        </Providers>
      </body>
    </html>
  );
}
