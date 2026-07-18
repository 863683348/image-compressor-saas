"use client";

import { useLang } from "./lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

export default function Footer() {
  const { lang } = useLang();

  const columns = [
    {
      title: "brand",
      links: [
        { href: "/", key: "brand" },
        { href: "/pricing", key: "pricing" },
        { href: "/blog", key: "footerBlog" },
      ],
    },
    {
      title: "brand",
      links: [
        { href: "/privacy", key: "footerPrivacy" },
        { href: "/terms", key: "footerTerms" },
        { href: "/faq", key: "footerFaq" },
      ],
    },
    {
      title: "brand",
      links: [
        { href: "/contact", key: "footerContact" },
      ],
    },
  ];

  return (
    <footer style={{
      marginTop: 64, padding: "40px 20px 24px",
      borderTop: "1px solid var(--border, #e5e7eb)",
      background: "var(--panel, #fff)", color: "var(--muted, #6b7280)",
      fontSize: 13, lineHeight: 1.7,
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 28, marginBottom: 32,
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={{ fontWeight: 700, color: "var(--text, #1f2430)", marginBottom: 10, fontSize: 15 }}>
              {s(lang, "brand")}
            </div>
            <p style={{ margin: 0, maxWidth: 300, lineHeight: 1.6 }}>{s(lang, "footerDesc")}</p>
          </div>
          {/* Link columns */}
          {columns.map((col, ci) => (
            <div key={ci}>
              <div style={{ fontWeight: 600, color: "var(--text, #1f2430)", marginBottom: 10, fontSize: 14 }}>
                {s(lang, "brand")}
              </div>
              {col.links.map((link, li) => (
                <div key={li}>
                  <a
                    href={link.href}
                    style={{ color: "var(--muted, #6b7280)", textDecoration: "none", display: "inline-block", padding: "3px 0", transition: "color .15s" }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--primary, #4f46e5)"}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--muted, #6b7280)"}
                  >{s(lang, link.key)}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border, #e5e7eb)", paddingTop: 16, textAlign: "center", fontSize: 12 }}>
          {s(lang, "footerRights")}
        </div>
      </div>
    </footer>
  );
}
