"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Queensland+Sexual+Health+%26+Education+Institute/@-23.1288306,150.7433833,17z/data=!3m1!4b1!4m6!3m5!1s0x6bc2e70e1b4f46d1:0xf086daeeb536adbc!8m2!3d-23.1288306!4d150.7433833!16s%2Fg%2F11ywvzc_0w?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D";
const HOTDOC_URL = "https://www.hotdoc.com.au/medical-centres/yeppoon-QLD-4703/queensland-sexual-health-education-institute/doctors";

export function ClinicLocationSection() {
  return (
    <section className="py-20 sm:py-28 px-6 lg:px-12 bg-[#F9F9F7] text-[var(--color-navy)] border-t border-stone-200/70">
      <div className="max-w-[1440px] mx-auto space-y-12 lg:space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-navy)] tracking-tight"
          >
            QSHEI Location
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-base sm:text-lg text-[var(--color-charcoal)] leading-relaxed"
          >
            Providing compassionate, confidential, and trauma-informed healthcare in a private, welcoming space in Yeppoon.
          </motion.p>
        </div>

        {/* Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Both Photos Side-by-Side (Unblocked & Fully Visible) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[440px] sm:h-[480px] lg:h-[520px]">
              {/* Photo 1: Building Exterior & Signage */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 group">
                <Image 
                  src="/images/office2.jpg"
                  alt="QSHEI Building Exterior and Signage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-[center_30%] transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 text-white">
                  <p className="text-sm font-semibold">QSHEI Location</p>
                  <p className="text-xs text-white/80">Building facade &amp; signage</p>
                </div>
              </div>

              {/* Photo 2: QSHEI Entrance Door */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 bg-stone-100 group">
                <Image 
                  src="/images/office1.jpg"
                  alt="QSHEI Entrance Door"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 text-white">
                  <p className="text-sm font-semibold">QSHEI Entrance</p>
                  <p className="text-xs text-white/80">Private entry door</p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-500 italic pl-1">
              Yeppoon, Queensland • Look for the QSHEI signage on the facade.
            </p>
          </motion.div>

          {/* Right: Architectural Map & Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col h-full rounded-2xl lg:rounded-3xl overflow-hidden border border-stone-200/90 shadow-lg bg-white"
          >
            {/* Map Container - zoomed out to z=14, with footer clutter cleanly cropped */}
            <div className="relative w-full h-[300px] sm:h-[340px] lg:h-[360px] bg-stone-100 overflow-hidden">
              <iframe
                title="Queensland Sexual Health & Education Institute Map"
                src="https://maps.google.com/maps?q=-23.1288306,150.7433833&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[calc(100%+36px)] -mb-[36px]"
              />
            </div>

            {/* Location Info & CTAs */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-6">
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-navy)]">
                  Queensland Sexual Health &amp; Education Institute (QSHEI)
                </h3>
                <p className="text-sm sm:text-base text-[var(--color-charcoal)] font-medium">
                  Yeppoon, Queensland 4703
                </p>
              </div>

              <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  size="md"
                  variant="primary"
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer")}
                >
                  Open in Google Maps <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button
                  size="md"
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => window.open(HOTDOC_URL, "_blank", "noopener,noreferrer")}
                >
                  Book Appointment <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
