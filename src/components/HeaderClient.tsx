"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useLang } from "@/components/lang-context";
import { useTheme } from "@/components/theme-context";

export default function HeaderClient() {
  const { lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const { data: session, status } = useSession();

  const btnStyle = {
    padding: "5px 8px", borderRadius: 8,
    border: "1px solid var(--border, #e5e7eb)",
    background: "var(--panel, #fff)", color: "var(--text, #1f2430)",
    cursor: "pointer", fontSize: 11, fontWeight: 600,
    whiteSpace: "nowrap" as const, height: 28,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
  };

  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      maxWidth: 980, margin: "0 auto", padding: "16px 18px 0",
      gap: 8,
    }}>
      <a href="/" style={{ fontWeight: 700, fontSize: 18, color: "var(--text, #1f2430)", textDecoration: "none" }}>
        Image Compressor
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {/* Auth */}
        {status === "authenticated" ? (
          <button onClick={() => signOut()} style={btnStyle}>
            {session.user?.name || "Sign out"}
          </button>
        ) : (
          <button onClick={() => signIn("google")} style={{
            ...btnStyle,
            background: "var(--primary, #4f46e5)", color: "#fff",
            border: "1px solid var(--primary, #4f46e5)", padding: "5px 10px",
            boxShadow: "0 1px 3px rgba(79,70,229,.3)",
          }}>
            <svg width="12" height="12" viewBox="0 0 48 48" aria-hidden="true" style={{ marginRight: 4 }}>
              <path fill="#FFC107" d="M43.6 20H24v8.5h11.3a10 10 0 0 1-4.4 6.5l6.9 5.3c4-3.7 6.3-9.2 6.3-15.7 0-1.5-.1-2.9-.4-4.2z"/>
              <path fill="#FF3D00" d="M10.3 28.5A10 10 0 0 1 9.5 24c0-1.6.3-3.1.8-4.5L3.5 14a17.8 17.8 0 0 0 0 20l6.8-5.5z"/>
              <path fill="#4CAF50" d="M24 44c4.9 0 9-1.6 12-4.3l-6.9-5.3a9.6 9.6 0 0 1-5.1 1.5c-3.9 0-7.3-2.6-8.5-6.2l-6.8 5.3A17.8 17.8 0 0 0 24 44z"/>
              <path fill="#1976D2" d="M24 14.3c2.6 0 5 1 6.8 2.6l5.2-5.2A17.8 17.8 0 0 0 7.5 19l6.8 5.3c1.2-3.6 4.6-6.1 8.5-6z"/>
            </svg>
            {lang === "zh" ? "登录" : "Sign in"}
          </button>
        )}
        {/* Pricing link */}
        <a href="/pricing" style={{
          fontSize: 12, color: "var(--muted, #6b7280)", textDecoration: "none",
          padding: "0 8px", fontWeight: 500, height: 28, display: "inline-flex", alignItems: "center",
          whiteSpace: "nowrap",
        }}>
          {lang === "zh" ? "定价" : "Pricing"}
        </a>
        {/* Lang toggle */}
        <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} style={btnStyle}>
          {lang === "zh" ? "中" : "EN"}
        </button>
        {/* Theme toggle */}
        <button onClick={toggleTheme} style={{ ...btnStyle, width: 28, padding: 0 }} title={lang === "zh" ? "切换暗色/亮色" : "Toggle dark/light"}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}