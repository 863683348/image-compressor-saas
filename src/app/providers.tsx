"use client";

import { SessionProvider } from "next-auth/react";
import { LangProvider } from "@/components/lang-context";
import { ThemeProvider } from "@/components/theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <LangProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </LangProvider>
    </SessionProvider>
  );
}
