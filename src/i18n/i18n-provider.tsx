"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// 预载全部 14 语种 messages，实现 in-place 语言切换（不导航，即时生效）。
// 复用 lib/translate 的 DICT，避免重复 import 96 个 JSON。
import { DICT } from "@/lib/translate";

const ALL_MSGS: Record<string, Record<string, string>> = DICT;

/* ------------------------------------------------------------------ */
/*  Context shape                                                     */
/* ------------------------------------------------------------------ */
interface I18nContextValue {
  lang: string;
  dict: Record<string, string>;
  setLang: (newLang: string) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  dict: ALL_MSGS.en,
  setLang: () => {},
});

export function useLang(): I18nContextValue {
  return useContext(I18nContext);
}

/* ------------------------------------------------------------------ */
/*  Provider — provides lang / dict / setLang                          */
/*  setLang now switches messages in-place (no router.push), making     */
/*  language changes instant — no full page navigation overhead.        */
/*  Language preference is persisted to cookie for SSR consistency.     */
/* ------------------------------------------------------------------ */
export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  const [lang, setLangState] = useState(locale);

  const setLang = useCallback(
    (newLang: string) => {
      if (newLang === lang) return;
      setLangState(newLang);
      // Persist language preference for SSR / next visit
      document.cookie = `NEXT_LOCALE=${newLang};path=/;max-age=${365 * 24 * 60 * 60};samesite=lax`;
    },
    [lang],
  );

  const dict = ALL_MSGS[lang] || ALL_MSGS.zh;

  const value = useMemo(
    () => ({ lang, dict, setLang }),
    [lang, dict, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
