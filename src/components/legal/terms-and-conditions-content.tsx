"use client";

export function TermsAndConditionsContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-1 pb-4 border-b border-stone-200">
        <p className="text-sm font-semibold text-[var(--color-terracotta)] uppercase tracking-wider">
          Queensland Sexual Health &amp; Education Institute (QSHEI)
        </p>
        <p className="text-sm text-stone-500">Last updated: September 2026</p>
      </div>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">1. Acceptance of Terms</h3>
        <p>
          By accessing and browsing this website, you agree to abide by these Terms and Conditions and our Privacy Policy. If you do not agree, please discontinue using the site.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">2. Important Medical Disclaimer (Not Medical Advice)</h3>
        <p>
          The materials, service descriptions, and educational FAQs published on this website are provided strictly for general informational and educational purposes.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Website content does not constitute personalized clinical advice, formal diagnosis, or medical treatment.</li>
          <li>Interacting with this website or submitting an online contact/inquiry form does not establish a formal clinician-patient relationship with Linda or QSHEI.</li>
          <li>A clinical relationship is formed only upon attending a scheduled, formal medical consultation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">3. Emergency &amp; Crisis Situations</h3>
        <p>
          This website and its digital intake forms are not monitored 24/7 and must never be used for acute medical emergencies or crisis triage.
        </p>
        <p>
          If you are experiencing a medical emergency, severe acute pain, or require immediate mental health or crisis support, please immediately:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Call Emergency Services on 000 (Australia).</li>
          <li>Visit your nearest hospital emergency department.</li>
          <li>Contact 13 HEALTH (13 43 25 84) or Lifeline (13 11 14).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">4. Booking, Fees, &amp; Cancellations</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Referrals:</strong> Consultations with Linda (Nurse Practitioner &amp; Clinical Sexologist) do not require a GP referral.</li>
          <li><strong>Cancellations:</strong> Appointment slots are dedicated 1-on-1 sessions. Cancellations or reschedule requests must be communicated at least 24/48 hours in advance, or a cancellation fee may apply as per our practice booking policy.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">5. Intellectual Property</h3>
        <p>
          All website design, written content, logos, workshop outlines, and educational materials are the proprietary property of QSHEI and are protected by Australian copyright laws. Content may not be copied, modified, or reproduced without prior written permission.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">6. Limitation of Liability &amp; Governing Law</h3>
        <p>
          To the maximum extent permitted by Australian Consumer Law, QSHEI is not liable for any direct or indirect loss or damages arising from the use of this website. These terms are governed by the laws of the State of Queensland, Australia.
        </p>
      </section>
    </div>
  );
}
