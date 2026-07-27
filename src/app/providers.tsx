"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/theme-context";

/**
 * App-level providers.
 *
 * Note: I18nProvider (locale + translations) is now provided
 * by [lang]/layout.tsx one level above this tree, so LangProvider
 * is no longer needed here.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
