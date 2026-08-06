import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getPostSlugs, POSTS, type PostBlock } from "@/lib/blog/posts";
import { buildLanguageAlternates } from "@/i18n/config";

const SITE_URL = "https://image-compressor-saas.shop";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().flatMap((slug) => [{ lang: "zh", slug }, { lang: "en", slug }]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = lang === "en" ? "en" : "zh";
  const post = getPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title[locale]} | Image Compressor`,
    description: post.description[locale],
    keywords: post.keywords,
    alternates: {
      canonical:
        locale === "zh" ? `${SITE_URL}/blog/${post.slug}` : `${SITE_URL}/en/blog/${post.slug}`,
      languages: buildLanguageAlternates(locale, `/blog/${post.slug}`, SITE_URL),
    },
    openGraph: {
      title: post.title[locale],
      description: post.description[locale],
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/${locale === "zh" ? "" : "en/"}blog/${post.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  const locale = lang === "en" ? "en" : "zh";
  const post = getPost(slug);
  if (!post) notFound();

  const blocks = post.content[locale] as PostBlock[];
  const faqItems = blocks
    .filter((b): b is { type: "faq"; items: { q: string; a: string }[] } => typeof b !== "string" && b.type === "faq")
    .flatMap((b) => b.items);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title[locale],
        description: post.description[locale],
        datePublished: post.date,
        dateModified: post.date,
        url: `${SITE_URL}/${locale === "zh" ? "" : "en/"}blog/${post.slug}`,
        mainEntityOfPage: `${SITE_URL}/${locale === "zh" ? "" : "en/"}blog/${post.slug}`,
        publisher: { "@type": "Organization", name: "Image Compressor", url: SITE_URL },
      },
      ...(faqItems.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqItems.map((it) => ({
                "@type": "Question",
                name: it.q,
                acceptedAnswer: { "@type": "Answer", text: it.a },
              })),
            },
          ]
        : []),
    ],
  };

  const renderBlock = (b: PostBlock, i: number) => {
    if (typeof b === "string")
      return (
        <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text, #1f2430)", margin: "0 0 16px" }}>
          {b}
        </p>
      );
    if (b.type === "h2")
      return (
        <h2 key={i} style={{ fontSize: 22, fontWeight: 600, color: "var(--text, #1f2430)", margin: "28px 0 12px" }}>
          {b.text}
        </h2>
      );
    if (b.type === "ul")
      return (
        <ul key={i} style={{ paddingLeft: 24, margin: "0 0 16px", color: "var(--text, #1f2430)" }}>
          {b.items.map((it, j) => (
            <li key={j} style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 6 }}>
              {it}
            </li>
          ))}
        </ul>
      );
    if (b.type === "faq")
      return (
        <div key={i} style={{ margin: "0 0 16px" }}>
          {b.items.map((it, j) => (
            <details
              key={j}
              style={{ border: "1px solid var(--border, #e5e7eb)", borderRadius: 10, padding: "12px 16px", marginBottom: 8 }}
            >
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--text, #1f2430)" }}>{it.q}</summary>
              <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.7, color: "var(--muted, #4b5563)" }}>{it.a}</p>
            </details>
          ))}
        </div>
      );
    if (b.type === "cta")
      return (
        <div key={i} style={{ textAlign: "center", margin: "24px 0" }}>
          <a
            href={b.href}
            style={{
              display: "inline-block",
              background: "var(--primary, #4f46e5)",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            {b.text}
          </a>
        </div>
      );
    return null;
  };

  const blogPath = locale === "zh" ? "/blog" : "/en/blog";

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 20px" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href={blogPath} style={{ fontSize: 14, color: "var(--primary, #4f46e5)", textDecoration: "none" }}>
        ← {locale === "zh" ? "返回博客" : "Back to Blog"}
      </a>
      <h1 style={{ fontSize: 28, margin: "12px 0 8px", color: "var(--text, #1f2430)" }}>{post.title[locale]}</h1>
      <p style={{ fontSize: 13, color: "var(--muted, #6b7280)", margin: "0 0 24px" }}>{post.date}</p>
      {blocks.map(renderBlock)}
      <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--border, #e5e7eb)" }}>
        <p style={{ fontSize: 14, color: "var(--muted, #6b7280)" }}>
          {locale === "zh" ? "阅读更多：" : "More reads: "}
          {POSTS.filter((p) => p.slug !== post.slug)
            .slice(0, 3)
            .map((p) => (
              <a key={p.slug} href={`${blogPath}/${p.slug}`} style={{ color: "var(--primary, #4f46e5)", marginRight: 12 }}>
                {p.title[locale]}
              </a>
            ))}
        </p>
      </div>
    </div>
  );
}
