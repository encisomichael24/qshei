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
        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[500px] xl:h-[600px] z-0 mt-8 lg:mt-0">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 right-0 w-[85%] lg:w-[80%] h-[80%] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl z-0"
          >
            <Image 
              src="/images/office2.jpg"
              alt="QSHEI Clinic Exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-[60%] lg:w-[55%] h-[45%] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-xl border-4 border-[#F9F9F7] z-10"
          >
            <Image 
              src="/images/office1.jpg"
              alt="QSHEI Clinic Storefront"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
