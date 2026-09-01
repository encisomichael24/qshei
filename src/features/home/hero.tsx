"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const servicesList = [
  "Sexual & Reproductive Healthcare",
  "Clinical Sexology & Pelvic Pain",
  "Pregnancy Options & Support",
  "Inclusive Education & Consulting"
];

export function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 px-5 sm:px-6 lg:px-12 bg-[#F9F9F7]">
      {/* Authentic Clinic Ambient Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/blurred-image.jpg"
          alt="QSHEI welcoming clinical practice"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 select-none pointer-events-none"
        />
        {/* Editorial Gradients for Flawless Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F9F9F7]/95 via-[#F9F9F7]/90 to-[#F9F9F7] lg:bg-gradient-to-r lg:from-[#F9F9F7] lg:via-[#F9F9F7]/95 lg:via-45% lg:to-[#F9F9F7]/40 xl:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F7] via-transparent to-[#F9F9F7]/40" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-10 items-center">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-8">
          
          {/* Subtle Eyebrow / Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-start sm:items-center gap-2.5 sm:gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)] shrink-0 mt-1 sm:mt-0" />
            <p className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[var(--color-charcoal)] leading-relaxed">
              Queensland Sexual Health &amp; Education Institute
            </p>
          </motion.div>

          {/* Editorial Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] sm:leading-[1.1] text-[var(--color-navy)] font-bold tracking-tight"
          >
            Inclusive, <span className="inline-block">Sex-Positive</span> Healthcare <span className="italic font-normal text-[var(--color-terracotta)]">&amp;</span> Education.
          </motion.h1>
          
          {/* Compassionate Narrative */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-[var(--color-charcoal)] leading-relaxed font-normal max-w-xl"
          >
            At QSHEI, we care about you and your sexual health. We embrace diversity and welcome everyone of all genders, sex, age, cultural background, sexual orientation, religion, and ability.
          </motion.p>
          
          {/* Clean Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              variant="primary" 
              className="w-full sm:w-auto" 
              onClick={() => window.open("https://www.hotdoc.com.au/medical-centres/yeppoon-QLD-4703/queensland-sexual-health-education-institute/doctors", "_blank")}
            >
              Book an Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto bg-white/60 hover:bg-white backdrop-blur-sm" 
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </motion.div>

          {/* Integrated Editorial Trust Details - Clean, Responsive, No Stray Bullets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pt-6 sm:pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-5 text-xs sm:text-sm text-[var(--color-charcoal)] font-medium"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
              <span>Trauma-Informed &amp; Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
              <span>AHPRA Registered Practitioner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
              <span>Yeppoon, Queensland</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Architectural Frosted Glass Consultation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="w-full max-w-md rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_20px_50px_rgba(26,36,51,0.06)] p-6 sm:p-7 space-y-5">
            {/* Card Header */}
            <div className="space-y-1 pb-3 border-b border-stone-200/60">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-terracotta)]">
                Care at QSHEI
              </p>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-navy)]">
                Specialised Consultations
              </h2>
            </div>

            {/* 4 Clean Service Items */}
            <div className="space-y-2">
              {servicesList.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-50/80 border border-stone-200/50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
                  <span className="text-sm font-semibold text-[var(--color-navy)]">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Footer */}
            <div className="pt-1 flex items-center justify-end text-xs">
              <button 
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    router.push("/#services");
                  }
                }}
                className="font-medium text-[var(--color-terracotta)] hover:underline flex items-center gap-1"
              >
                Explore all services &rarr;
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
