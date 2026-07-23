import type { Metadata } from "next";
import PrivacyPage from "./page-client";

export const metadata: Metadata = {
  title: "Privacy Policy · Image Compressor",
  description: "Image Compressor is 100% local — your images are never uploaded to any server. Read our privacy policy to understand how we handle your data.",
  openGraph: {
    title: "Privacy Policy · Image Compressor",
    description: "100% local image compression. Your images are never uploaded to any server.",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
