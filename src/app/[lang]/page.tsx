import type { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata-helper";
import { CompressorTool } from "@/components/CompressorTool";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "/");
}

// Note: this MUST be a server component (it has generateMetadata above).
// We render <CompressorTool /> — a client component that contains ONLY the
// tool UI (no Header/Footer). The Header/Footer are provided by
// [lang]/layout.tsx one level above, so the [lang] route gets exactly one
// header — no duplicates.
export default async function Page(_props: Props) {
  return <CompressorTool />;
}
