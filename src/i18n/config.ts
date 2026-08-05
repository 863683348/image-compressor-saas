import { LANGS } from "@/lib/lang";
import type { Lang } from "@/lib/lang";

export const locales = LANGS as readonly Lang[];
export type Locale = Lang;
export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

/** Map our short locale codes to full hreflang values. */
const HREFLANG_MAP: Record<Locale, string> = {
  zh: "zh-CN",
  en: "en",
  ar: "ar",
  es: "es",
  pt: "pt-BR",
  id: "id",
  fr: "fr",
  tr: "tr",
  vi: "vi",
  hi: "hi",
  de: "de",
  ja: "ja",
  ko: "ko",
  ru: "ru",
};

export function toHreflang(locale: Locale): string {
  return HREFLANG_MAP[locale];
}

/**
 * Build the alternates.languages object for metadata export.
 *
 * Strategy (always-prefix): EVERY locale gets a `/{locale}` prefix, matching
 * the middleware's 301 redirect behavior — `/pricing` always ends up as
 * `/en/pricing`, `/zh/pricing`, `/ar/pricing`, etc. Canonicals must point to
 * the final prefixed URL, otherwise they bounce through a 301.
 *
 * `x-default` points to the bare path, which the root route renders directly.
 */
export function buildLanguageAlternates(
  lang: Locale,
  pathWithoutLang: string,
  siteUrl: string,
): Record<string, string> {
  const alts: Record<string, string> = {};
  for (const l of locales) {
    alts[toHreflang(l)] = `${siteUrl}/${l}${pathWithoutLang}`;
  }
  alts["x-default"] = `${siteUrl}${pathWithoutLang}`;
  return alts;
}
