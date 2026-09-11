export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/** Map our short locale codes to full hreflang values. */
export function toHreflang(locale: Locale): string {
  return locale === "zh" ? "zh-CN" : "en";
}

/** Build the alternates.languages object for metadata export. */
/**
 * Build the `alternates.languages` map (hreflang) for one page.
 *
 * 2026-09-11 修正：原实现假设「默认语言不带前缀」，于是把 `en` 与 `x-default`
 * 指向 `https://site/path`（无前缀）。但 middleware 是 always-prefix 策略，
 * 无前缀 URL 一律 301 到 `/en/path`。结果每个页面都在声明
 * `hreflang="en" → 一个会跳转的 URL`，GSC 判为无效 hreflang。
 * 现在所有语言都输出带前缀的 200 URL；x-default 指向默认语言（en）。
 */
export function buildLanguageAlternates(
  _lang: Locale,
  pathWithoutLang: string,
  siteUrl: string,
): Record<string, string> {
  const isRoot = pathWithoutLang === "/" || pathWithoutLang === "";
  const seg = isRoot ? "" : pathWithoutLang;
  const alts: Record<string, string> = {};
  for (const l of locales) {
    // 站点把「英文首页」定在裸域名 `/`（根 page.tsx 自渲染 Header/Footer，
    // 且线上排名最好）。因此根路径的 en / x-default 指向 siteUrl 本身，
    // 而不是 /en —— 否则 / 与 /en 会以两个自指 canonical 互相竞争。
    alts[toHreflang(l)] =
      isRoot && l === defaultLocale ? siteUrl : `${siteUrl}/${l}${seg}`;
  }
  alts["x-default"] = isRoot ? siteUrl : `${siteUrl}/${defaultLocale}${seg}`;
  return alts;
}
