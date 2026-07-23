import type { Metadata } from "next";
import PricingPage from "./page-client";

export const metadata: Metadata = {
  title: "Pricing · Image Compressor",
  description: "Free tier with 10 compressions/day. Pro plan at $4.99/month or $49.99/year — unlimited compressions, ZIP export, AVIF support. Cancel anytime.",
  openGraph: {
    title: "Pricing · Image Compressor",
    description: "Free tier with 10/day. Pro: $4.99/month — unlimited compressions, ZIP export, AVIF. Cancel anytime.",
  },
};

export default function Page() {
  return <PricingPage />;
}
