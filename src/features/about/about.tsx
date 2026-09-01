"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-[#F9F9F7]">
      <div className="max-w-[1440px] mx-auto space-y-20 sm:space-y-32 lg:space-y-48">
        
        {/* About QSHEI Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-navy)] mb-6 lg:mb-8">About QSHEI</h2>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
              Welcome to the Queensland Sexual Health & Education Institute (QSHEI). We believe that everyone deserves access to high-quality, empowering healthcare and inclusive, evidence-based education.
            </p>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
              Founded with a commitment to providing trauma-informed, sex-positive, and deeply empathetic care, QSHEI operates on two vital pillars: expert clinical practice and inclusive community education.
            </p>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed">
              By bridging the gap between the consultation room and the community, we aim to improve sexual health outcomes for individuals and foster a culture of respect and understanding for all.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/38ba9150f8562a6ac19a53f5b10d28f0.png"
              alt="Community workshop at QSHEI"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl lg:rounded-[2rem] shadow-xl border border-[var(--color-sage)] overflow-hidden flex flex-col"
          >
            <div className="relative h-40 sm:h-48 lg:h-56 w-full">
              <Image 
                src="/images/reproductive.jpg" 
                alt="QSHEI Clinical Practice" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 sm:p-8 flex-1">
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[var(--color-navy)] mb-3 lg:mb-4">
                Our Clinical Practice:<br/>A Safe Space for Your Body
              </h3>
            <div className="space-y-3 text-sm sm:text-base text-[var(--color-charcoal)] leading-relaxed">
              <p>
                Navigating sexual and reproductive health can be vulnerable. QSHEI&apos;s clinical wing is built to be your safe haven. We provide comprehensive, one-on-one healthcare in an environment that is strictly confidential, gender-affirming, and entirely free of judgment.
              </p>
              <p>
                As a Nurse Practitioner, Linda has an extended clinical scope, allowing her to diagnose, prescribe, and perform procedures independently. Whether you need routine contraceptive care, support through menopause, medical abortion services, or specialized clinical sexology for pelvic pain and sexual dysfunction, you receive unhurried, expert medical care tailored entirely to you.
              </p>
            </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[var(--color-navy)] text-white rounded-2xl lg:rounded-[2rem] shadow-xl overflow-hidden flex flex-col"
          >
            <div className="relative h-40 sm:h-48 lg:h-56 w-full">
              <Image 
                src="/images/a4f1ba5de15aeff3d569f557d3da0203.png" 
                alt="QSHEI Educational Initiatives" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1">
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4">
                Our Educational Initiatives:<br/>Fostering Informed Communities
              </h3>
            <div className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed">
              <p>
                True sexual health goes beyond the clinic walls. QSHEI&apos;s educational wing is dedicated to empowering schools, workplaces, healthcare professionals, and community groups through high-quality, engaging training.
              </p>
              <p className="mt-4">
                Linda takes her extensive clinical experience and translates it into accessible, impactful workshops. Our educational services focus on:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex gap-3">
                  <span className="text-[var(--color-terracotta)] font-bold">•</span>
                  <span><strong>Consent and Respectful Relationships:</strong> Age-appropriate, progressive education for youth and young adults.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-terracotta)] font-bold">•</span>
                  <span><strong>Professional Development:</strong> Training for organizations on adopting trauma-informed and inclusive practices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-terracotta)] font-bold">•</span>
                  <span><strong>Sexual Health Awareness:</strong> Breaking down stigmas and providing accurate, sex-positive information to community groups.</span>
                </li>
              </ul>
              <p className="mt-4">
                Whether you are stepping into the clinic for personalized medical care or booking an educational seminar for your organization, QSHEI is here to provide the expert knowledge, safety, and respect you deserve.
              </p>
            </div>
            </div>
          </motion.div>
        </div>

        {/* About Linda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-2xl z-10">
              <Image 
                src="/images/Linda.jpg"
                alt="Linda Kirby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative element */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-64 h-64 bg-[var(--color-sage)] rounded-[2rem] z-0" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-navy)]">About Linda</h2>
            <h4 className="text-lg lg:text-xl font-medium text-[var(--color-terracotta)]">Linda Kirby (she/her)</h4>
            <div className="space-y-4 text-[var(--color-charcoal)] leading-relaxed">
              <p>
                Linda Kirby is an AHPRA-registered Nurse Practitioner and Clinical Sexologist with extensive specialist knowledge in emergency medicine, forensic medicine, and sexual and reproductive health, with a particular focus on holistic and women&apos;s health.
              </p>
              <p>
                Linda&apos;s diverse nursing background spans working in rural and remote locations from the Kimberley to Mornington Island; collaborating with Australian Immigration to provide compassionate care for refugees; working in offender health (prisons); and delivering reproductive, sexual, and forensic healthcare across Queensland.
              </p>
              <p>
                Known for her passion and advocacy for women&apos;s health equality and intersectional feminism, Linda&apos;s intention is always to provide a safe, inclusive, sex-positive, and judgement-free space for her clients. All of her services are grounded in a trauma-informed, evidence-based, and person-centred approach, applying the fundamental principles of clinical sexology to her practice.
              </p>
              <p>
                She also collaborates closely with specialists and allied health clinicians to ensure truly holistic, participant-centred care.
              </p>
            </div>
            <div className="pt-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">Email us</Button>
              <div className="flex items-center justify-center gap-5 text-[var(--color-navy)] w-full sm:w-auto">
                <a href="#" className="p-2 -ml-2 rounded-full hover:bg-[var(--color-terracotta)]/10 hover:text-[var(--color-terracotta)] transition-colors duration-300" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-[var(--color-terracotta)]/10 hover:text-[var(--color-terracotta)] transition-colors duration-300" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="p-2 rounded-full hover:bg-[var(--color-terracotta)]/10 hover:text-[var(--color-terracotta)] transition-colors duration-300" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Meet The Team */}
        <div className="space-y-12 lg:space-y-16 pt-8 lg:pt-12">
          <div className="text-center space-y-4 lg:space-y-6">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-[var(--color-navy)] mb-4 lg:mb-6">Meet The Team</h2>
            <div className="w-full h-[1px] bg-stone-300 max-w-5xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
            {/* Harriet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              {/* Premium Typographic Avatar */}
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] mb-8 flex items-center justify-center relative border border-stone-100 p-2 group">
                <div className="w-full h-full rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-serif text-5xl text-[var(--color-navy)]/80 group-hover:scale-110 transition-transform duration-500">HB</span>
                </div>
              </div>
              
              <div className="w-full flex flex-col items-center space-y-4">
                <p className="text-[var(--color-charcoal)] font-semibold text-xs lg:text-sm uppercase tracking-[0.15em]">
                  Registered Nurse (Sexual Health & Wellbeing)
                </p>
                <div className="w-full h-[1px] bg-stone-300 max-w-[320px]" />
                <h3 className="font-serif text-2xl lg:text-3xl text-[var(--color-navy)]">Harriet Boyd</h3>
                <p className="text-[var(--color-charcoal)] leading-relaxed text-sm lg:text-base mt-2">
                  As part of our clinical nursing team at QSHEI, Harriet brings a passion for inclusive, trauma-informed, and person-centered healthcare. Operating &quot;In clinic, In Community,&quot; she is dedicated to providing safe, confidential nursing care—ranging from sexual health screening and blood-borne virus testing to contraception counseling and health promotion. Committed to fostering a welcoming and non-judgmental environment, Harriet aligns with QSHEI&apos;s mission to break down stigma and champion health equity for diverse and vulnerable populations.
                </p>
              </div>
            </motion.div>

            {/* Gia-Marie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Premium Typographic Avatar */}
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] mb-8 flex items-center justify-center relative border border-stone-100 p-2 group">
                <div className="w-full h-full rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-serif text-5xl text-[var(--color-terracotta)]/80 group-hover:scale-110 transition-transform duration-500">GM</span>
                </div>
              </div>
              
              <div className="w-full flex flex-col items-center space-y-4">
                <p className="text-[var(--color-charcoal)] font-semibold text-xs lg:text-sm uppercase tracking-[0.15em]">
                  Executive Support
                </p>
                <div className="w-full h-[1px] bg-stone-300 max-w-[320px]" />
                <h3 className="font-serif text-2xl lg:text-3xl text-[var(--color-navy)]">Gia-Marie</h3>
                <p className="text-[var(--color-charcoal)] leading-relaxed text-sm lg:text-base mt-2">
                  As an Executive Support, Gia-Marie is the heartbeat of QSHEI&apos;s day-to-day operations. From managing patient records and delivering exceptional customer service to spearheading marketing campaigns and social media outreach, she ensures that both our digital presence and administrative workflows run seamlessly. Her dedication behind the scenes allows QSHEI to champion inclusive, sex-positive care and community connection effectively.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="relative py-16 px-6 lg:py-24 lg:px-12 bg-[var(--color-sage)]/30 rounded-3xl lg:rounded-[3rem] overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4 lg:mb-6 text-left md:text-center">OUR VISION</h3>
              <p className="text-lg lg:text-xl text-left md:text-center text-[var(--color-charcoal)] leading-relaxed">
                A world where every individual is empowered to make informed decisions about their sexual and reproductive health, completely free from stigma, shame, and judgment. We envision a society that openly champions inclusivity, bodily autonomy, and respectful relationships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-[var(--color-navy)] mb-4 lg:mb-6 text-left md:text-center">OUR MISSION</h3>
              <div className="space-y-6 text-lg lg:text-xl text-left md:text-center text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  To deliver exceptional, trauma-informed clinical care and evidence-based education that elevate sexual and reproductive wellbeing.
                </p>
                <p>
                  By bridging expert, personalized healthcare in the consultation room with comprehensive, progressive education in the community, QSHEI strives to break down barriers to care. We are committed to fostering safe spaces, dismantling health stigmas, and equipping individuals with the knowledge and support they need to take confident control of their bodies and their health.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Abstract Background Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-terracotta)]/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
        </div>

      </div>
    </section>
  );
}
