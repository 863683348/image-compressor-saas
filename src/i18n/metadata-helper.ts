import type { Metadata } from "next";
import { buildLanguageAlternates } from "./config";

const SITE_URL = "https://image-compressor-saas.shop";

/**
 * Generate per-page hreflang metadata for a [lang] route segment.
 *
 * Usage in `app/[lang]/some-page/page.tsx`:
 * ```tsx
 * export async function generateMetadata({ params }: Props): Promise<Metadata> {
 *   const { lang } = await params;
 *   return generatePageMetadata(lang, "/some-page");
 * }
 * ```
 *
 * @param lang  - The locale code from params (e.g. "zh", "en")
 * @param path  - The path WITHOUT locale prefix (e.g. "/pricing", "/faq")
 */
export function generatePageMetadata(lang: string, path: string): Metadata {
  return {
    alternates: {
      canonical: lang === "zh" ? path : `/${lang}${path}`,
      languages: buildLanguageAlternates(lang, path, SITE_URL),
    },
  };
}
