"use client";

/**
 * ⚠️ Compatibility bridge — file kept for backward compatibility.
 *
 * All `useLang()` consumers across the app still import from this path.
 * Do not delete; this re-exports from the new I18nProvider so
 * existing components (page-client.tsx, Footer.tsx, etc.) work
 * without modification.
 *
 * The old `LangProvider` is no longer used — `I18nProvider` in
 * `[lang]/layout.tsx` replaces it.
 */

export { useLang } from "@/i18n/i18n-provider";
export type { Locale } from "@/i18n/config";
