import type { Metadata } from "next";
import TermsPage from "./page-client";

export const metadata: Metadata = {
  title: "Terms of Service · Image Compressor",
  description: "Terms of Service for Image Compressor — free tier with 10 daily compressions, Pro subscription via PayPal. Cancel anytime.",
  openGraph: {
    title: "Terms of Service · Image Compressor",
    description: "Terms of Service for Image Compressor. Free tier, Pro subscription via PayPal.",
  },
};

export default function Page() {
  return <TermsPage />;
}
