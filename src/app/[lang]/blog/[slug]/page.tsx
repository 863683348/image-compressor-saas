import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/content/blog";
import { generatePageMetadata } from "@/i18n/metadata-helper";

const SITE_URL = "https://image-compressor-saas.shop";

type Props = { params: Promise<{ lang: string; slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().flatMap((slug) => ["zh", "en"].map((lang) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const postMeta = await post.getMeta(lang);
  const hreflang = generatePageMetadata(lang, `/blog/${slug}`);
  return { ...postMeta, ...hreflang };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = await post.loadContent(lang);

  // Load raw title/description for JSON-LD
  let articleTitle = slug;
  let articleDesc = slug;
  let articleLang = "en";
  try {
    const postMeta = await import(`@/content/blog/${slug}/index`);
    articleTitle = postMeta.titles?.[lang] || postMeta.titles?.en || slug;
    articleDesc = postMeta.descriptions?.[lang] || postMeta.descriptions?.en || slug;
    articleLang = lang === "zh" ? "zh-CN" : "en";
  } catch {}

  const articleUrl = lang === "zh"
    ? `${SITE_URL}/blog/${slug}`
    : `${SITE_URL}/${lang}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleTitle,
    description: articleDesc,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: "Image Compressor",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Image Compressor",
      url: SITE_URL,
    },
    inLanguage: articleLang,
    about: {
      "@type": "Thing",
      name: "Image Compression",
    },
  };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 60px" }}>
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: lang === "zh" ? "首页" : "Home", item: lang === "zh" ? SITE_URL : `${SITE_URL}/${lang}` },
              { "@type": "ListItem", position: 2, name: lang === "zh" ? "博客" : "Blog", item: `${SITE_URL}/${lang}/blog` },
              { "@type": "ListItem", position: 3, name: articleTitle, item: articleUrl },
            ],
          }),
        }}
      />
      {/* Visible breadcrumb */}
      <nav style={{ fontSize: 12, color: "var(--muted, #6b7280)", marginBottom: 20 }}>
        <a href={lang === "zh" ? "/" : `/${lang}`} style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>
          {lang === "zh" ? "首页" : "Home"}
        </a>
        <span style={{ margin: "0 6px" }}>›</span>
        <a href={`/${lang}/blog`} style={{ color: "var(--muted, #6b7280)", textDecoration: "none" }}>
          {lang === "zh" ? "博客" : "Blog"}
        </a>
        <span style={{ margin: "0 6px" }}>›</span>
        <span style={{ color: "var(--text, #1f2430)" }}>{articleTitle}</span>
      </nav>
      <style>{`
        article { line-height: 1.8; color: var(--text, #1f2430); }
        article h1 { font-size: 24px; margin: 0 0 8px; }
        article h2 { font-size: 19px; margin: 32px 0 12px; }
        article h3 { font-size: 16px; margin: 24px 0 8px; }
        article p, article li { font-size: 15px; }
        article ul, article ol { padding-left: 20px; }
        article li { margin-bottom: 6px; }
        article a { color: var(--primary, #4f46e5); text-decoration: underline; }
        article table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px; }
        article th, article td { border: 1px solid var(--border, #e5e7eb); padding: 8px 12px; text-align: left; }
        article th { background: var(--panel, #f9fafb); font-weight: 600; }
        article code { background: var(--panel, #f3f4f6); padding: 2px 6px; border-radius: 4px; font-size: 13px; }
        .meta { font-size: 13px; color: var(--muted, #6b7280); margin-bottom: 24px; }
        .cta { text-align: center; margin: 40px 0 0; }
        .tool-link {
          display: inline-block; padding: 12px 28px;
          background: var(--primary, #4f46e5); color: #fff !important;
          border-radius: 10px; font-weight: 600; font-size: 15px;
          text-decoration: none !important;
        }
        .tool-link:hover { opacity: 0.9; }
      `}</style>
      <Content />
    </div>
  );
}
