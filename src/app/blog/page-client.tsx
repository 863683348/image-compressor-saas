"use client";

import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";
import { POSTS } from "@/lib/blog/posts";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

// 数据层驱动：全部文章按日期倒序（最新在前）
const posts = [...POSTS]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .map((p) => ({
    title: p.title,
    desc: p.description,
    link: `/blog/${p.slug}`,
    enLink: `/en/blog/${p.slug}`,
  }));

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
                  {post.title[lang as "zh" | "en"]}
                </a>
              ) : (
                post.title[lang as "zh" | "en"]
              )}
            </h2>
            <p style={{ fontSize: 13, color: "var(--muted, #6b7280)", margin: 0, lineHeight: 1.6 }}>
              {post.desc[lang as "zh" | "en"]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
