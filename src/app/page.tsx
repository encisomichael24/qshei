import { Hero } from "@/features/home/hero";
import { TrustSection } from "@/features/home/trust-section";
import { Services } from "@/features/home/services";
import { FAQSection } from "@/features/home/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSection />
      <Services />
      <FAQSection />
    </div>
  );
}
