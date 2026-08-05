"use client";

import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

// 真实文章列表（来自数据层；此处内联以保持 SSR/客户端兼容）
const posts = [
  {
    title: "blog1Title",
    desc: "blog1Desc",
    link: "/blog/compress-jpg-under-100kb",
    enLink: "/en/blog/compress-jpg-under-100kb",
  },
  { title: "blog2Title", desc: "blog2Desc", link: "/blog/compress-png-without-losing-quality", enLink: "/en/blog/compress-png-without-losing-quality" },
  { title: "blog3Title", desc: "blog3Desc" },
];

export default function BlogPage() {
  const { lang } = useLang();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 20px" }}>
      <h1 style={{ fontSize: 24, margin: "0 0 4px", color: "var(--text, #1f2430)" }}>{s(lang, "blogTitle")}</h1>
      <p style={{ fontSize: 14, color: "var(--muted, #6b7280)", marginBottom: 32 }}>{s(lang, "blogSub")}</p>
      {posts.map((post, i) => {
        const href = post.link ? (lang === "en" && post.enLink ? post.enLink : post.link) : null;
        return (
          <div
            key={i}
            style={{
              background: "var(--panel, #fff)",
              borderRadius: 14,
              padding: 20,
              marginBottom: 16,
              border: "1px solid var(--border, #e5e7eb)",
              cursor: href ? "pointer" : "default",
            }}
            onClick={() => href && (window.location.href = href)}
          >
            <h2 style={{ fontSize: 16, margin: "0 0 6px", color: "var(--text, #1f2430)" }}>
              {href ? (
                <a href={href} style={{ color: "var(--primary, #4f46e5)", textDecoration: "none" }}>
                  {s(lang, post.title)}
                </a>
              ) : (
                s(lang, post.title)
              )}
            </h2>
            <p style={{ fontSize: 13, color: "var(--muted, #6b7280)", margin: 0, lineHeight: 1.6 }}>
              {s(lang, post.desc)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
