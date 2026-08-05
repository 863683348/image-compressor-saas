/**
 * Locale definitions shared across the whole app.
 * Kept in a standalone module so both `lib/i18n` (legacy dict) and
 * `lib/translate` (new messages-based dict) can import the type without
 * creating a runtime circular dependency.
 */

export type Lang =
  | "zh"
  | "en"
  | "ar"
  | "es"
  | "pt"
  | "id"
  | "fr"
  | "tr"
  | "vi"
  | "hi"
  | "de"
  | "ja"
  | "ko"
  | "ru";

export const LANGS: Lang[] = [
  "zh", "en", "ar", "es", "pt", "id", "fr", "tr", "vi", "hi", "de", "ja", "ko", "ru",
];

/** Native-language display names for the header language switcher. */
export const LANG_NAMES: Record<Lang, string> = {
  zh: "中文",
  en: "English",
  ar: "العربية",
  es: "Español",
  pt: "Português",
  id: "Bahasa Indonesia",
  fr: "Français",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  hi: "हिन्दी",
  de: "Deutsch",
  ja: "日本語",
  ko: "한국어",
  ru: "Русский",
};

export function isLang(v: string): v is Lang {
  return (LANGS as string[]).includes(v);
}
