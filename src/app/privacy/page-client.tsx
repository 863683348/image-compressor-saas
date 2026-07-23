"use client";

import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

export default function PrivacyPage() {
  const { lang } = useLang();
  const keys = ["privacyP1", "privacyP2", "privacyP3", "privacyP4", "privacyP5", "privacyP6", "privacyP7"];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 20px" }}>
      <h1 style={{ fontSize: 24, margin: "0 0 4px", color: "var(--text, #1f2430)" }}>{s(lang, "privacyTitle")}</h1>
      <p style={{ fontSize: 13, color: "var(--muted, #6b7280)", marginBottom: 24 }}>{s(lang, "privacyUpdated")}</p>
      {keys.map((k, i) => (
        <p key={i} style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text, #1f2430)", margin: "0 0 12px" }}>
          {s(lang, k)}
        </p>
      ))}
    </div>
  );
}
