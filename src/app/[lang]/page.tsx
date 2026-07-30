import type { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata-helper";
import HomePage from "@/app/page";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "/");
}

// Note: this MUST be a server component (it has generateMetadata above).
// We import the client HomePage and render it as a child. Re-exporting
// `export { default } from "@/app/page"` is forbidden by Next.js when the
// source is a "use client" module — that's what caused the prior /zh 404.
export default async function Page(_props: Props) {
  return <HomePage />;
}
