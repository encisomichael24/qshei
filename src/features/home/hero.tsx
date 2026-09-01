"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-32 lg:pb-24 xl:pb-32 px-6 lg:px-12 bg-[var(--color-sage)]/30">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-8 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl leading-[1.1] sm:leading-[1.1] text-[var(--color-navy)] font-semibold tracking-tight"
          >
            Inclusive, <span className="sm:whitespace-nowrap">Sex-Positive</span> Healthcare <span className="italic text-[var(--color-terracotta)]">&amp;</span> Education.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mt-6 text-base sm:text-lg xl:text-xl text-[var(--color-charcoal)] leading-relaxed max-w-lg"
          >
            At QSHEI, we care about you and your sexual health. We embrace diversity and welcome everyone of all genders, sex, age, cultural background, sexual orientation, religion, and ability.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Button size="lg" variant="primary" className="w-full sm:w-auto" onClick={() => window.open("https://www.hotdoc.com.au/medical-centres/yeppoon-QLD-4703/queensland-sexual-health-education-institute/doctors", "_blank")}>
              Book an Appointment
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => router.push("/about")}>
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Asymmetrical Image Composition */}
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[520px] xl:h-[580px] z-0 mt-8 lg:mt-0">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 w-[90%] lg:w-[85%] h-[85%] rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl z-0"
          >
            <Image 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
              alt="Warm, compassionate healthcare practitioner"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="absolute bottom-2 left-0 sm:left-4 max-w-[280px] sm:max-w-[320px] bg-white/95 backdrop-blur-md p-5 rounded-2xl sm:rounded-3xl shadow-xl border border-white/80 z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-sage)]/60 flex items-center justify-center text-[var(--color-navy)] shrink-0 font-serif font-bold text-lg">
                Q
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)]">Safe & Confidential</p>
                <p className="text-sm font-semibold text-[var(--color-navy)] mt-0.5">AHPRA Registered Practitioner</p>
              </div>
            </div>
            <p className="text-xs text-[var(--color-charcoal)]/80 mt-2.5 leading-relaxed">
              Evidence-based clinical care &amp; sexology tailored to your unique journey.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
