"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Lang } from "@/lib/i18n";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "zh",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");
  useEffect(() => {
    const saved = localStorage.getItem("ic_lang") as Lang | null;
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);
  const syncLang = useCallback((l: Lang) => {
    setLang(l);
    try { localStorage.setItem("ic_lang", l); } catch {}
  }, []);
  return <LangContext.Provider value={{ lang, setLang: syncLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
