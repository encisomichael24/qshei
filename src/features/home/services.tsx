"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Sexual & Reproductive Healthcare",
    description: "From routine health checks to managing life transitions, you can access expert, evidence-based care tailored to your body.",
    bullets: [
      "Comprehensive STI testing and treatment",
      "Contraceptive counselling and procedures, including IUD and implanon insertions",
      "Menstrual health management",
      "Peri-menopause and menopause care"
    ],
    image: "/images/reprodhealthcare.jpg",
  },
  {
    title: "Clinical Sexology & Pelvic Pain Management",
    description: (
      <>
        If you are experiencing discomfort or navigating complex sexual health concerns, Linda provides specialised, deeply empathetic support.
        <br />
        <br />
        Her clinical sexology services focus on:
      </>
    ),
    bullets: [
      "Management of endometriosis and pelvic pain",
      "Treatment for painful sex ",
      "Holistic support integrating the fundamental principles of sexology to improve your overall sexual wellbeing and comfort"
    ],
    image: "/images/Pelvic.jpg",
  },
  {
    title: "Pregnancy Options & Support",
    description: "Navigating pregnancy decisions requires a supportive, strictly confidential space. QSHEI is here to help you understand your choices so you can make the decision that is best for you. ",
    bullets: [
      "Compassionate pregnancy options support",
      "Medical abortion services (no referral necessary)"
    ],
    image: "/images/pregnancy.jpg",
  },
  {
    title: "Inclusive Education & Consulting",
    description: (
      <>
        Beyond the clinic, QSHEI is committed to fostering safe, informed communities.
        <br />
        <br />
        Linda brings her expertise to schools, workplaces, and community groups, offering:
      </>

    ),
    bullets: [
      "Respectful relationships and consent education",
      "Customised workshops designed to promote inclusivity, trauma-informed practices, and sexual health awareness "
    ],
    image: "/images/InclusiveEducation.jpg",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-[#F9F9F7] scroll-mt-20">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-navy)]">
            Our Services
          </h2>
          <p className="mt-6 text-lg text-[var(--color-charcoal)]">
            Comprehensive, evidence-based care in a safe and supportive environment.
          </p>
        </motion.div>

        {/* Standard, Highly Accessible Alternating Layout */}
        <div className="space-y-12 lg:space-y-16 mt-12">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center bg-white p-6 lg:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[var(--color-sage)]/50`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video lg:aspect-[4/3] w-full rounded-[1.5rem] overflow-hidden group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[var(--color-navy)] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base lg:text-lg text-[var(--color-charcoal)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--color-charcoal)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] mt-2 shrink-0" />
                        <span className="text-sm lg:text-base leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
