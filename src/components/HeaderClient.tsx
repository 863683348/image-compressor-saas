"use client";

import { useLang } from "@/components/lang-context";

export default function HeaderClient() {
  const { lang, setLang } = useLang();
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      maxWidth: 980, margin: "0 auto", padding: "16px 18px 0",
    }}>
      <a href="/" style={{ fontWeight: 700, fontSize: 18, color: "var(--text, #1f2430)", textDecoration: "none" }}>
        Image Compressor
      </a>
      <div style={{ display: "flex", gap: 8 }}>
        <a href="/pricing" style={{ fontSize: 13, color: "var(--muted, #6b7280)", textDecoration: "none", padding: "4px 10px" }}>Pricing</a>
        <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} style={{
          border: "1px solid var(--border, #e5e7eb)", background: "var(--panel, #fff)",
          color: "var(--text, #1f2430)", padding: "6px 12px", borderRadius: 8,
          cursor: "pointer", fontSize: 12, fontWeight: 600,
        }}>
          {lang === "zh" ? "中" : "EN"}
        </button>
      </div>
    </header>
  );
}
