"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Do I need a referral from a doctor to book an appointment?",
    answer: "No, you do not need a referral. As an endorsement-qualified Nurse Practitioner, Linda can be accessed directly for all clinical care, medical abortion services, contraceptive procedures, STI testing, and clinical sexology consultations."
  },
  {
    question: "Is my visit completely confidential?",
    answer: "Yes, 100%. Privacy and confidentiality are at the heart of QSHEI. Your personal health information, medical history, and consultation details are strictly protected under Australian privacy legislation and professional healthcare standards."
  },
  {
    question: "What does a Nurse Practitioner actually do?",
    answer: "An AHPRA-registered Nurse Practitioner has advanced clinical training and an extended scope of practice. Linda can independently diagnose conditions, order and interpret diagnostic tests, prescribe medications, perform clinical procedures (such as IUD and Implanon insertions), and provide specialized medical care."
  },
  {
    question: "Is QSHEI an LGBTQIA+ inclusive practice?",
    answer: "An absolute yes. QSHEI is dedicated to providing a safe, sex- positive, gender-affirming, and completely non-judgmental environment for individuals of all sexualities, genders, and bodies."
  },
  {
    question: "What should I expect during my first consultation?",
    answer: "Your initial visit is a relaxed, supportive space dedicated to listening to your concerns. Linda will discuss your health history, answer your questions thoroughly, and work with you to create a personalized care plan that you feel completely comfortable with."
  },
  {
    question: "Do you offer telehealth appointments?",
    answer: "Yes. Telehealth (video or phone) consultations are available for many non-procedural services, including sexual health advice, contraceptive planning, pregnancy options counseling, and clinical sexology sessions."
  },
  {
    question: "How do I book an appointment?",
    answer: "Booking is simple and can be done securely online. You can schedule your appointment directly via the HotDoc app or website. Please note that a deposit may be required at the time of booking to secure your appointment."
  },
  {
    question: "Are your services eligible for a Medicare rebate?",
    answer: "Yes. Because Linda is an endorsed Nurse Practitioner, many of our clinical services and consultations are eligible for a Medicare rebate. If you have a valid Medicare card, you will receive a rebate for eligible items, which we can usually process for you electronically at the time of your appointment."
  },
  {
    question: "What are your fees, and will I have an out-of-pocket cost?",
    answer: "QSHEI is a private billing clinic. Our fees reflect the specialized, extended, and personalized care provided during your consultation. Because we allocate dedicated, unhurried time for every patient, there is an out-of-pocket fee for most services. A full estimate of your fees—including what your Medicare rebate will be—can be provided prior to your appointment so there are no surprises."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-[var(--color-sage)] rounded-[2rem] bg-[#F9F9F7] overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors hover:bg-[var(--color-sage)]/20"
      >
        <h3 className="font-serif text-lg md:text-xl font-semibold text-[var(--color-navy)] pr-8">{question}</h3>
        <ChevronDown className={cn("w-6 h-6 text-[var(--color-terracotta)] transition-transform duration-300 flex-shrink-0", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 md:p-8 pt-0 text-[var(--color-charcoal)] leading-relaxed text-sm md:text-base border-t border-[var(--color-sage)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-navy)]">
            FAQs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
          {/* Right Column */}
          <div className="space-y-6">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
              const actualIndex = index + Math.ceil(faqs.length / 2);
              return (
                <FAQItem
                  key={actualIndex}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === actualIndex}
                  onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
