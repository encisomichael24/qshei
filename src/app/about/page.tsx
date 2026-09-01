import { About } from "@/features/about/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | QSHEI",
  description: "Learn about the Queensland Sexual Health & Education Institute, our clinical practice, and our educational initiatives.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <About />
    </div>
  );
}
