import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  locales,
  isValidLocale,
  buildLanguageAlternates,
} from "@/i18n/config";
import { I18nProvider } from "@/i18n/i18n-provider";
import HeaderClient from "@/components/HeaderClient";
import FooterClient from "@/components/FooterClient";

const SITE_URL = "https://image-compressor-saas.shop";

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  // Default path is "/"; individual pages can override via page-level metadata.
  // Always-prefix: canonical is the final prefixed URL (e.g. /en/, /ar/).
  return {
    alternates: {
      canonical: `/${lang}`,
      languages: buildLanguageAlternates(lang, "/", SITE_URL),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();

  const isProd =
    process.env.NODE_ENV === "production" &&
    process.env.VERCEL_ENV !== "preview";

  return (
    <>
      {/* JSON-LD — WebApplication structured data */}
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
      {/* JSON-LD — BreadcrumbList (homepage root) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/${lang}`,
              },
            ],
          }),
        }}
      />
      {isProd && (
        <>
          {/* Google tag (gtag.js) — production only */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-XKHEV8W1T7"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XKHEV8W1T7');`,
            }}
          />
          {/* Google AdSense — Auto Ads, production only */}
          {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
              crossOrigin="anonymous"
            />
          )}
        </>
      )}
      <I18nProvider locale={lang}>
        <HeaderClient />
        {children}
        <FooterClient />
      </I18nProvider>
    </>
  );
}
