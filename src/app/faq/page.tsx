import type { Metadata } from "next";
import FaqPage from "./page-client";

export const metadata: Metadata = {
  title: "FAQ · Image Compressor",
  description: "Frequently asked questions about Image Compressor — privacy, compression quality, batch processing, formats, and more.",
  openGraph: {
    title: "FAQ · Image Compressor",
    description: "Frequently asked questions about Image Compressor — privacy, compression quality, batch processing, formats, and more.",
  },
};

export default function Page() {
  return <FaqPage />;
}
