import type { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata-helper";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "/privacy");
}

export { default } from "@/app/privacy/page";
