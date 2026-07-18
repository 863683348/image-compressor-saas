"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

export default function ContactPage() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <div style={{ maxWidth: 560, margin: "0 auto", padding: "40px 18px 20px" }}>
      <h1 style={{ fontSize: 24, margin: "0 0 4px", color: "var(--text, #1f2430)" }}>{s(lang, "contactTitle")}</h1>
      <p style={{ fontSize: 14, color: "var(--muted, #6b7280)", marginBottom: 32 }}>{s(lang, "contactSub")}</p>

      {sent ? (
        <div style={{ padding: 24, background: "var(--panel, #fff)", borderRadius: 14, border: "1px solid var(--border, #e5e7eb)", textAlign: "center", fontSize: 15, color: "var(--ok, #16a34a)" }}>
          {s(lang, "contactSuccess")}
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted, #6b7280)", display: "block", marginBottom: 4 }}>{s(lang, "contactName")}</label>
            <input required style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border, #e5e7eb)", background: "var(--panel, #fff)", color: "var(--text, #1f2430)", fontSize: 14, boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted, #6b7280)", display: "block", marginBottom: 4 }}>{s(lang, "contactEmail")}</label>
            <input type="email" required style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border, #e5e7eb)", background: "var(--panel, #fff)", color: "var(--text, #1f2430)", fontSize: 14, boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "var(--muted, #6b7280)", display: "block", marginBottom: 4 }}>{s(lang, "contactMsg")}</label>
            <textarea required rows={5} style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border, #e5e7eb)", background: "var(--panel, #fff)", color: "var(--text, #1f2430)", fontSize: 14, boxSizing: "border-box", resize: "vertical" }} />
          </div>
          <button type="submit" style={{ padding: "12px 24px", borderRadius: 999, border: "none", background: "var(--primary, #4f46e5)", color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            {s(lang, "contactSend")}
          </button>
        </form>
      )}
    </div>
  );
}
