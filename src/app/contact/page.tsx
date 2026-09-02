import { ContactSection } from "@/features/contact/contact-section";
import { ClinicLocationSection } from "@/features/contact/clinic-location-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Location",
  description: "Get in touch with the Queensland Sexual Health & Education Institute. Visit QSHEI in Yeppoon or reach out online.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1">
      <ContactSection />
      <ClinicLocationSection />
    </div>
  );
}

