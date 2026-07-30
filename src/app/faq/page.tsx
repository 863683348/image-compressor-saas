import type { Metadata } from "next";
import { dict } from "@/lib/i18n";
import FaqPage from "./page-client";

const SITE_URL = "https://image-compressor-saas.shop";

export const metadata: Metadata = {
  title: "FAQ · Image Compressor",
  description: "Frequently asked questions about Image Compressor — privacy, compression quality, batch processing, formats, and more.",
  openGraph: {
    title: "FAQ · Image Compressor",
    description: "Frequently asked questions about Image Compressor — privacy, compression quality, batch processing, formats, and more.",
  },
};

const faqPairs = [
  ["faq1Q", "faq1A"],
  ["faq2Q", "faq2A"],
  ["faq3Q", "faq3A"],
  ["faq4Q", "faq4A"],
  ["faq5Q", "faq5A"],
  ["faq6Q", "faq6A"],
  ["faq7Q", "faq7A"],
  ["faq8Q", "faq8A"],
];

/** Build FAQPage JSON-LD for a given locale. */
function faqSchema(lang: "zh" | "en") {
  const d = dict[lang] as Record<string, string>;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPairs.map(([q, a]) => ({
      "@type": "Question",
      name: d[q] || q,
      acceptedAnswer: {
        "@type": "Answer",
        text: d[a] || a,
      },
    })),
  };
}

export default function Page() {
  return (
    <>
      {/* FAQPage JSON-LD — zh */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema("zh")),
        }}
      />
      {/* FAQPage JSON-LD — en */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema("en")),
        }}
      />
      <FaqPage />
    </>
  );
}
