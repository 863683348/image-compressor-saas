import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getAllSlugs } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return post.getMeta("zh");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { default: Content } = await post.loadContent("zh");

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 18px 60px" }}>
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
