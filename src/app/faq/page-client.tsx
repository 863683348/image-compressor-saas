"use client";

import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

const faqKeys = [
  ["faq1Q", "faq1A"],
  ["faq2Q", "faq2A"],
  ["faq3Q", "faq3A"],
  ["faq4Q", "faq4A"],
  ["faq5Q", "faq5A"],
  ["faq6Q", "faq6A"],
  ["faq7Q", "faq7A"],
  ["faq8Q", "faq8A"],
];

export default function FaqPage() {
  const { lang } = useLang();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 20px" }}>
      <h1 style={{ fontSize: 24, margin: "0 0 24px", color: "var(--text, #1f2430)" }}>{s(lang, "faqTitle")}</h1>
      {faqKeys.map(([q, a], i) => (
        <div key={i} style={{
          marginBottom: 16, padding: "16px 20px",
          background: "var(--panel, #fff)", borderRadius: 12,
          border: "1px solid var(--border, #e5e7eb)",
        }}>
          <h2 style={{ fontSize: 15, margin: "0 0 6px", color: "var(--text, #1f2430)", fontWeight: 600 }}>{s(lang, q)}</h2>
          <p style={{ fontSize: 13, margin: 0, color: "var(--muted, #6b7280)", lineHeight: 1.6 }}>{s(lang, a)}</p>
        </div>
      ))}
    </div>
  );
}
