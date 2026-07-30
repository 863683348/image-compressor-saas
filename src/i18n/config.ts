export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/** Map our short locale codes to full hreflang values. */
export function toHreflang(locale: Locale): string {
  return locale === "zh" ? "zh-CN" : "en";
}

/** Build the alternates.languages object for metadata export. */
export function buildLanguageAlternates(
  lang: Locale,
  pathWithoutLang: string,
  siteUrl: string,
): Record<string, string> {
  const alts: Record<string, string> = {};
  for (const l of locales) {
    const href = l === defaultLocale ? `${siteUrl}${pathWithoutLang}` : `${siteUrl}/${l}${pathWithoutLang}`;
    alts[toHreflang(l)] = href;
  }
  alts["x-default"] = `${siteUrl}${pathWithoutLang}`;
  return alts;
}
