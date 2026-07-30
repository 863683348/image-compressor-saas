"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { locales } from "./config";

/* ------------------------------------------------------------------ */
/*  Context shape — mirrors the old `useLang()` API exactly            */
/* ------------------------------------------------------------------ */
interface I18nContextValue {
  lang: string;
  dict: Record<string, string>;
  setLang: (newLang: string) => void;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "zh",
  dict: {},
  setLang: () => {},
});

export function useLang(): I18nContextValue {
  return useContext(I18nContext);
}

/* ------------------------------------------------------------------ */
/*  Provider — wraps the app tree inside [lang]/layout.tsx             */
/* ------------------------------------------------------------------ */
export function I18nProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode;
  locale: string;
  messages: Record<string, string>;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLang = useCallback(
    (newLang: string) => {
      // Extract the path without the current locale prefix
      const segments = pathname.split("/").filter(Boolean);
      let pathWithoutLocale: string;

      if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
        pathWithoutLocale = "/" + segments.slice(1).join("/");
      } else {
        pathWithoutLocale = pathname;
      }

      // Build the new URL
      const normalized = pathWithoutLocale || "/";
      const newPath = newLang === "zh" ? normalized : `/${newLang}${normalized}`;

      router.push(newPath);
    },
    [pathname, router],
  );

  const value = useMemo(
    () => ({
      lang: locale,
      dict: messages,
      setLang,
    }),
    [locale, messages, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
