"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  reasonForInquiry: z.array(z.string()).min(1, "Please select at least one reason."),
  details: z.string().min(10, "Please provide a bit more detail (at least 10 characters)."),
  fullName: z.string().min(2, "Full name is required."),
  preferredName: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  preferredContactMethod: z.array(z.string()).min(1, "Please select a preferred contact method."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const reasons = [
  "Clinical Consultation / Sexual Health",
  "Clinical Sexology / Pelvic Pain",
  "Contraception or Procedure (IUD / Implanon)",
  "Pregnancy Options Support",
  "Educational Workshops / Consulting",
  "General Inquiry"
];

const contactMethods = ["Email", "Phone Call", "Text"];

export function ContactSection() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      reasonForInquiry: [],
      details: "",
      fullName: "",
      preferredName: "",
      email: "",
      phone: "",
      preferredContactMethod: [],
    },
  });

  const watchReasons = watch("reasonForInquiry");
  const watchContactMethods = watch("preferredContactMethod");

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["reasonForInquiry"];
    if (step === 2) fieldsToValidate = ["details"];
    
    const isStepValid = await trigger(fieldsToValidate as any);
    if (isStepValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const toggleArrayItem = (field: "reasonForInquiry" | "preferredContactMethod", value: string, currentValues: string[]) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setValue(field, newValues, { shouldValidate: true });
  };

  return (
    <section id="contact" className="pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[var(--color-navy)] text-white overflow-hidden relative flex-1 flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        
        {/* Left Side Content */}
        <div className="lg:col-span-2 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              Get in Touch
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Whether you need to schedule a clinical appointment, have a confidential question about our services, or are looking to book an educational workshop, we are here to help.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Reaching out about sexual and reproductive health can feel like a big step, but QSHEI provides a safe, compassionate, and strictly confidential environment from your very first message.
            </p>

            {/* Direct Contact Pills */}
            <div className="pt-6 space-y-3 max-w-lg">
              {/* Phone Capsule */}
              <motion.a
                href="tel:0468129226"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-between px-6 py-4 rounded-full bg-[var(--color-sage)] text-[var(--color-navy)] shadow-md hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">Phone</span>
                <span className="text-sm sm:text-base font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-terracotta)] transition-colors">
                  0468 129 226
                </span>
              </motion.a>

              {/* Email Capsule */}
              <motion.a
                href="mailto:contactus@qshei.com.au"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-between px-6 py-4 rounded-full bg-[var(--color-sage)] text-[var(--color-navy)] shadow-md hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">Email</span>
                <span className="text-xs sm:text-sm font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-terracotta)] transition-colors truncate pl-3">
                  contactus@qshei.com.au
                </span>
              </motion.a>

              {/* Social Capsule */}
              <motion.a
                href="https://instagram.com/qshei.au"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group flex items-center justify-between px-6 py-4 rounded-full bg-[var(--color-sage)] text-[var(--color-navy)] shadow-md hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <span className="font-serif text-lg sm:text-xl font-medium tracking-wide">Social</span>
                <span className="text-sm sm:text-base font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-terracotta)] transition-colors">
                  @qshei.au
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-3 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white text-[var(--color-navy)] rounded-3xl lg:rounded-[2rem] p-6 sm:p-8 lg:p-12 shadow-2xl relative min-h-[500px] flex flex-col"
          >
            {isSuccess ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center h-full space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-24 h-24 text-[var(--color-terracotta)]" />
                </motion.div>
                <h3 className="font-serif text-2xl lg:text-3xl font-bold">Request Sent</h3>
                <p className="text-[var(--color-charcoal)] max-w-md">
                  Thank you for reaching out. A member of our team will be in touch with you shortly in a strictly confidential manner.
                </p>
                <Button variant="primary" onClick={() => { setIsSuccess(false); setStep(1); }}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-2 rounded-full transition-all duration-500",
                          step >= i ? "w-12 bg-[var(--color-terracotta)]" : "w-4 bg-gray-200"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-400">Step {step} of 3</span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 flex flex-col relative">
                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      
                      {/* STEP 1 */}
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-xl lg:text-2xl font-semibold">How can we support you?</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {reasons.map((reason) => (
                              <button
                                type="button"
                                key={reason}
                                onClick={() => toggleArrayItem("reasonForInquiry", reason, watchReasons)}
                                className={cn(
                                  "text-left p-3 lg:p-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium",
                                  watchReasons.includes(reason)
                                    ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)]/5 text-[var(--color-navy)]"
                                    : "border-gray-200 hover:border-gray-300 text-gray-600"
                                )}
                              >
                                {reason}
                              </button>
                            ))}
                          </div>
                          {errors.reasonForInquiry && (
                            <p className="text-red-500 text-sm">{errors.reasonForInquiry.message}</p>
                          )}
                        </motion.div>
                      )}

                      {/* STEP 2 */}
                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-xl lg:text-2xl font-semibold">Tell us a bit more</h3>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--color-charcoal)]">How can we help you? (Confidential)</label>
                            <textarea
                              {...register("details")}
                              rows={6}
                              className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[var(--color-terracotta)] focus:ring-0 outline-none transition-colors resize-none"
                              placeholder="Please provide any relevant details..."
                            />
                            {errors.details && (
                              <p className="text-red-500 text-sm">{errors.details.message}</p>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3 */}
                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <h3 className="font-serif text-xl lg:text-2xl font-semibold">Your Details</h3>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[var(--color-charcoal)]">Full Name</label>
                              <input
                                {...register("fullName")}
                                type="text"
                                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-terracotta)] outline-none transition-colors"
                              />
                              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[var(--color-charcoal)]">Preferred Name & Pronouns</label>
                              <input
                                {...register("preferredName")}
                                type="text"
                                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-terracotta)] outline-none transition-colors"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[var(--color-charcoal)]">Email Address</label>
                              <input
                                {...register("email")}
                                type="email"
                                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-terracotta)] outline-none transition-colors"
                              />
                              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[var(--color-charcoal)]">Phone Number</label>
                              <input
                                {...register("phone")}
                                type="tel"
                                className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--color-terracotta)] outline-none transition-colors"
                              />
                              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                            </div>
                          </div>

                          <div className="space-y-3 pt-2">
                            <label className="text-sm font-medium text-[var(--color-charcoal)]">Preferred Contact Method</label>
                            <div className="flex flex-wrap gap-3">
                              {contactMethods.map((method) => (
                                <button
                                  type="button"
                                  key={method}
                                  onClick={() => toggleArrayItem("preferredContactMethod", method, watchContactMethods)}
                                  className={cn(
                                    "px-4 py-2 rounded-full border-2 transition-all duration-200 text-sm font-medium",
                                    watchContactMethods.includes(method)
                                      ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)] text-white"
                                      : "border-gray-200 hover:border-gray-300 text-gray-600"
                                  )}
                                >
                                  {method}
                                </button>
                              ))}
                            </div>
                            {errors.preferredContactMethod && (
                              <p className="text-red-500 text-sm">{errors.preferredContactMethod.message}</p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                    {step > 1 ? (
                      <Button type="button" variant="ghost" onClick={prevStep} className="pl-2">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back
                      </Button>
                    ) : (
                      <div /> // Spacer
                    )}

                    {step < 3 ? (
                      <Button type="button" variant="primary" onClick={nextStep}>
                        Continue <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="primary" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                      </Button>
                    )}
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Background Element */}
      <div className="absolute -bottom-1/2 -right-1/4 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
