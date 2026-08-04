import type { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata-helper";
import RootPage from "@/app/auth/signin/page";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return generatePageMetadata(lang, "/auth/signin");
}

export default async function Page(_props: Props) {
  return <RootPage />;
}
