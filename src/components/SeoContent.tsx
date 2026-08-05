"use client";

import { type Lang } from "@/lib/lang";
import { t } from "@/lib/translate";

// Features / use-cases are read from the messages dictionaries via t(),
// so every locale (en/zh + 12 new ones) gets its own translated copy.
const FEATURE_KEYS = ["feature1", "feature2", "feature3", "feature4", "feature5", "feature6"];
const USECASE_KEYS = ["usecase1", "usecase2", "usecase3", "usecase4"];

export function SeoContent({ lang }: { lang: Lang }) {
  const features = FEATURE_KEYS.map((k) => t(lang, k));
  const useCases = USECASE_KEYS.map((k) => t(lang, k));

  return (
    <>
      <div
        style={{
          marginTop: 36,
          padding: "24px 22px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          lineHeight: 1.7,
        }}
      >
        <h1 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px", color: "var(--text)" }}>
          {t(lang, "seoH1")}
        </h1>
        <p style={{ fontSize: 14, color: "var(--text)", margin: "0 0 16px" }}>
          {t(lang, "seoDesc")}
        </p>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {t(lang, "seoFeaturesTitle")}
        </h2>
        <ul style={{ fontSize: 13, color: "var(--text)", paddingLeft: 18, margin: 0 }}>
          {features.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>

        <h2 style={{ fontSize: 15, fontWeight: 700, margin: "20px 0 8px", color: "var(--text)" }}>
          {t(lang, "seoUseCasesTitle")}
        </h2>
        <ul style={{ fontSize: 13, color: "var(--text)", paddingLeft: 18, margin: 0 }}>
          {useCases.map((item, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={{
          marginTop: 32,
          padding: "20px 22px",
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
        }}
      >
        <div style={{ fontWeight: 700, color: "var(--text)", fontSize: 14, marginBottom: 12 }}>
          {t(lang, "brand")}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px" }}>
          <a href="/pricing" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "pricing")}
          </a>
          <a href="/blog" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerBlog")}
          </a>
          <a href="/faq" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerFaq")}
          </a>
          <a href="/privacy" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerPrivacy")}
          </a>
          <a href="/terms" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerTerms")}
          </a>
          <a href="/contact" style={{ color: "var(--muted)", textDecoration: "none", fontSize: 13, fontWeight: 500 }}>
            {t(lang, "footerContact")}
          </a>
        </div>
      </div>
    </>
  );
}
