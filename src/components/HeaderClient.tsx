"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useLang } from "@/components/lang-context";

export default function HeaderClient() {
  const { lang, setLang } = useLang();
  const { data: session, status } = useSession();

  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      maxWidth: 980, margin: "0 auto", padding: "16px 18px 0",
    }}>
      <a href="/" style={{ fontWeight: 700, fontSize: 18, color: "var(--text, #1f2430)", textDecoration: "none" }}>
        Image Compressor
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {/* Auth */}
        {status === "authenticated" ? (
          <button onClick={() => signOut()} style={{
            padding: "5px 10px", borderRadius: 8, border: "1px solid var(--border, #e5e7eb)",
            background: "var(--panel, #fff)", color: "var(--text, #1f2430)",
            cursor: "pointer", fontSize: 12, fontWeight: 600,
          }}>
            {session.user?.name || "Sign out"}
          </button>
        ) : (
          <button onClick={() => signIn("google")} style={{
            padding: "5px 10px", borderRadius: 8, border: "1px solid var(--primary, #4f46e5)",
            background: "var(--primary, #4f46e5)", color: "#fff",
            cursor: "pointer", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap",
          }}>
            {lang === "zh" ? "登录" : "Sign in"}
          </button>
        )}
        {/* Pricing link */}
        <a href="/pricing" style={{
          fontSize: 12, color: "var(--muted, #6b7280)", textDecoration: "none",
          padding: "5px 8px", fontWeight: 500,
        }}>
          {lang === "zh" ? "定价" : "Pricing"}
        </a>
        {/* Lang toggle */}
        <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} style={{
          padding: "5px 8px", borderRadius: 8, border: "1px solid var(--border, #e5e7eb)",
          background: "var(--panel, #fff)", color: "var(--text, #1f2430)",
          cursor: "pointer", fontSize: 11, fontWeight: 600,
        }}>
          {lang === "zh" ? "中" : "EN"}
        </button>
      </div>
    </header>
  );
}
