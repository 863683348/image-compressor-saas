"use client";

import { useLang } from "@/components/lang-context";
import { dict } from "@/lib/i18n";

const s = (lang: string, key: string): string => {
  const d = dict[lang as "zh" | "en"] as Record<string, any>;
  return d?.[key] ?? key;
};

const posts = [
  { title: "blog1Title", desc: "blog1Desc", link: "/guide.html" },
  { title: "blog2Title", desc: "blog2Desc" },
  { title: "blog3Title", desc: "blog3Desc" },
];

export default function BlogPage() {
  const { lang } = useLang();

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 20px" }}>
      <h1 style={{ fontSize: 24, margin: "0 0 4px", color: "var(--text, #1f2430)" }}>{s(lang, "blogTitle")}</h1>
      <p style={{ fontSize: 14, color: "var(--muted, #6b7280)", marginBottom: 32 }}>{s(lang, "blogSub")}</p>
      {posts.map((post, i) => (
        <div key={i} style={{
          background: "var(--panel, #fff)", borderRadius: 14, padding: 20, marginBottom: 16,
          border: "1px solid var(--border, #e5e7eb)", cursor: post.link ? "pointer" : "default",
        }} onClick={() => post.link && window.open(post.link, "_blank")}>
          <h2 style={{ fontSize: 16, margin: "0 0 6px", color: "var(--text, #1f2430)" }}>
            {post.link ? <a href={post.link} style={{ color: "var(--primary, #4f46e5)", textDecoration: "none" }}>{s(lang, post.title)}</a> : s(lang, post.title)}
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted, #6b7280)", margin: 0, lineHeight: 1.6 }}>{s(lang, post.desc)}</p>
        </div>
      ))}
    </div>
  );
}
