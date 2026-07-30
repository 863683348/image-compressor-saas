"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  type ReactNode,
} from "react";

// 预载双语言全部 messages，实现 in-place 语言切换（不导航，即时生效）。
import zhCommon from "./messages/zh.common.json";
import zhTool from "./messages/zh.tool.json";
import zhFaq from "./messages/zh.faq.json";
import zhPricing from "./messages/zh.pricing.json";
import zhAuth from "./messages/zh.auth.json";
import zhLegal from "./messages/zh.legal.json";
import zhContact from "./messages/zh.contact.json";
import zhMisc from "./messages/zh.misc.json";
import enCommon from "./messages/en.common.json";
import enTool from "./messages/en.tool.json";
import enFaq from "./messages/en.faq.json";
import enPricing from "./messages/en.pricing.json";
import enAuth from "./messages/en.auth.json";
import enLegal from "./messages/en.legal.json";
import enContact from "./messages/en.contact.json";
import enMisc from "./messages/en.misc.json";

const ALL_MSGS: Record<string, Record<string, string>> = {
  zh: {
    ...zhCommon, ...zhTool, ...zhFaq, ...zhPricing,
    ...zhAuth, ...zhLegal, ...zhContact, ...zhMisc,
  },
  en: {
    ...enCommon, ...enTool, ...enFaq, ...enPricing,
    ...enAuth, ...enLegal, ...enContact, ...enMisc,
  },
};

/* ------------------------------------------------------------------ */
/*  Context shape                                                     */
/* ------------------------------------------------------------------ */
interface I18nContextValue {
  lang: string;
  dict: Record<string, string>;
  setLang: (newLang: string) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "zh",
  dict: ALL_MSGS.zh,
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
