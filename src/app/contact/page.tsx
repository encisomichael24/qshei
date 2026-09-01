import { ContactSection } from "@/features/contact/contact-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | QSHEI",
  description: "Get in touch with the Queensland Sexual Health & Education Institute.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-[var(--color-navy)]">
      <ContactSection />
    </div>
  );
}
