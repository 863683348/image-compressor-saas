import type { Metadata } from "next";
import ContactPage from "./page-client";

export const metadata: Metadata = {
  title: "Contact Us · Image Compressor",
  description: "Have questions or suggestions about Image Compressor? Contact us — we'd love to hear from you. Email: ahmedlzany423@gmail.com",
  openGraph: {
    title: "Contact Us · Image Compressor",
    description: "Have questions or suggestions about Image Compressor? Get in touch.",
  },
};

export default function Page() {
  return <ContactPage />;
}
