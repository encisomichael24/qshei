"use client";

import { motion } from "framer-motion";

const trustReasons = [
  {
    number: "1",
    title: "Specialized, Expert Care",
    description: "You are in highly qualified hands. As an AHPRA-registered Nurse Practitioner and Clinical Sexologist, Linda brings specialized, advanced knowledge spanning sexual health, forensic medicine, and emergency care. You receive expert guidance grounded in extensive, real-world clinical experience."
  },
  {
    number: "2",
    title: "A Safe, Sex-Positive Space",
    description: "Your comfort and peace of mind are the top priorities. QSHEI is built on providing an inclusive, sex-positive, and completely non-judgmental environment. Whatever your health journey looks like, you will always be met with empathy, respect, and absolute confidentiality."
  },
  {
    number: "3",
    title: "Dedicated, One-on-One Attention",
    description: "At QSHEI, you aren't just a file passed between different doctors in a busy clinic. Because you work directly with Linda every single time, you get true continuity of care. Your history is understood, your appointments are deeply personalized, and your treatment is handled with the undivided attention you deserve."
  }
];

export function TrustSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-navy)] mb-16"
        >
          Why Patients trust us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[var(--color-charcoal)] text-white p-10 rounded-[2rem] text-left hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
            >
              <h3 className="font-serif text-2xl font-semibold mb-6">
                {reason.number}. {reason.title}
              </h3>
              <p className="text-white/80 leading-relaxed text-sm flex-1">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
