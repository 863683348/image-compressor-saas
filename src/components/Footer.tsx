"use client";

import { useLang } from "./lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

export const allLinks = [
  { href: "/", key: "brand" },
  { href: "/pricing", key: "pricing" },
  { href: "/blog", key: "footerBlog" },
  { href: "/privacy", key: "footerPrivacy" },
  { href: "/terms", key: "footerTerms" },
  { href: "/faq", key: "footerFaq" },
  { href: "/contact", key: "footerContact" },
];

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer style={{
      marginTop: 64, padding: "32px 20px 24px",
      borderTop: "1px solid var(--border, #e5e7eb)",
      background: "var(--panel, #fff)", color: "var(--muted, #6b7280)",
      fontSize: 13, lineHeight: 1.7,
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* Brand + description */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontWeight: 700, color: "var(--text, #1f2430)", fontSize: 15, marginBottom: 6 }}>
            {s(lang, "brand")}
          </div>
          <p style={{ margin: "0 0 4px", maxWidth: 480, lineHeight: 1.6, color: "var(--muted, #6b7280)" }}>
            {s(lang, "footerDesc")}
          </p>
          <a href="mailto:ahmedlzany423@gmail.com" style={{ color: "var(--muted, #6b7280)", fontSize: 12, textDecoration: "none" }}>
            ahmedlzany423@gmail.com
          </a>
        </div>

        {/* Horizontal link list — no duplicate brand titles */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: "10px 18px", marginBottom: 20,
        }}>
          {allLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--muted, #6b7280)", textDecoration: "none",
                fontWeight: 500, fontSize: 13, transition: "color .15s",
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--primary, #4f46e5)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--muted, #6b7280)"}
            >{s(lang, link.key)}</a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ borderTop: "1px solid var(--border, #e5e7eb)", paddingTop: 14, textAlign: "center", fontSize: 12 }}>
          {s(lang, "footerRights")}
        </div>
      </div>
    </footer>
  );
}
