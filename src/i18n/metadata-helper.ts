import type { Metadata } from "next";
import { buildLanguageAlternates } from "./config";
import type { Lang } from "@/lib/lang";

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
 * @param lang  - The locale code from params (e.g. "zh", "en", "ar")
 * @param path  - The path WITHOUT locale prefix (e.g. "/pricing", "/faq")
 */
export function generatePageMetadata(
  lang: string,
  path: string,
): Metadata {
  return {
    alternates: {
      // Always-prefix: canonical points to the final URL the middleware
      // would 301 to (e.g. /zh/pricing, /ar/pricing), never the bare path.
      canonical: `/${lang}${path}`,
      languages: buildLanguageAlternates(
        lang as Lang,
        path,
        SITE_URL,
      ),
    },
  };
}
