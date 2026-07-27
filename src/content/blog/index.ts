import type { Metadata } from "next";

export interface BlogPost {
  slug: string;
  /** Load metadata for a given locale (async, used inside generateMetadata). */
  getMeta: (lang: string) => Promise<Metadata>;
  /** Load the content component for a given locale. */
  loadContent: (lang: string) => Promise<{ default: React.ComponentType }>;
}

// ── Static registry ──
const registry: BlogPost[] = [];

function define(slug: string) {
  const post: BlogPost = {
    slug,
    getMeta: async (lang: string) => {
      try {
        const mod = await import(`./${slug}/index`);
        return mod.meta(lang);
      } catch {
        return {};
      }
    },
    loadContent: async (lang: string) => {
      try {
        return await import(`./${slug}/${lang}`);
      } catch {
        return await import(`./${slug}/en`);
      }
    },
  };
  registry.push(post);
}

// ── Register all blog posts here ──
define("compress-to-target-size");

export function getPost(slug: string): BlogPost | null {
  return registry.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return registry.map((p) => p.slug);
}

/** Convenience: load a post's content component. */
export async function loadPostContent(slug: string, lang: string) {
  const post = getPost(slug);
  if (!post) throw new Error(`Blog post not found: ${slug}`);
  return post.loadContent(lang);
}
