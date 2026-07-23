import type { Metadata } from "next";
import BlogPage from "./page-client";

export const metadata: Metadata = {
  title: "Blog · Image Compressor",
  description: "Practical guides on image compression, web optimization, and privacy protection. WebP vs AVIF comparison, target size compression tips, and more.",
  openGraph: {
    title: "Blog · Image Compressor",
    description: "Practical guides on image compression, web optimization, and privacy protection.",
  },
};

export default function Page() {
  return <BlogPage />;
}
