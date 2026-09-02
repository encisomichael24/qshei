"use client";

export function PrivacyPolicyContent() {
  return (
    <div className="space-y-6">
      <div className="space-y-1 pb-4 border-b border-stone-200">
        <p className="text-sm font-semibold text-[var(--color-terracotta)] uppercase tracking-wider">
          Queensland Sexual Health &amp; Education Institute (QSHEI)
        </p>
        <p className="text-sm text-stone-500">Last updated: September 2026</p>
      </div>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">1. Introduction &amp; Commitment to Privacy</h3>
        <p>
          Queensland Sexual Health &amp; Education Institute ("QSHEI", "we", "us", or "our") is dedicated to protecting the privacy, confidentiality, and sensitive health information of our clients and website visitors. We comply strictly with the Australian Privacy Principles (APPs) outlined in the Privacy Act 1988 (Cth) and relevant Queensland health records legislation.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">2. Collection of Personal &amp; Health Information</h3>
        <p>
          We collect personal and sensitive health details only when reasonably necessary to provide our clinical, therapeutic, and educational services. This information is collected when you fill out our digital contact or intake forms, book an appointment, or contact us directly. This may include:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Contact information (e.g., name, phone number, email address).</li>
          <li>Demographic details (e.g., date of birth, gender identity).</li>
          <li>Sensitive health details submitted via inquiries (e.g., symptoms, reason for inquiry, pelvic pain, or pregnancy support queries).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">3. Use and Disclosure of Your Information</h3>
        <p>
          Your information is handled with strict medical confidentiality and is used exclusively to:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Assess your intake needs, respond to inquiries, and triage consultations.</li>
          <li>Deliver clinical sexology, reproductive health, and nurse practitioner services.</li>
          <li>Comply with mandatory legal, regulatory, and AHPRA compliance standards.</li>
        </ul>
        <p>
          We do not sell, rent, or disclose your personal details to third parties for marketing purposes. Your health information is only disclosed to external parties (such as pathology laboratories or referring medical practitioners) with your express consent, or where mandated by Australian law.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">4. Data Security &amp; Third-Party Platforms</h3>
        <p>
          We implement reasonable physical, technical, and organizational measures to safeguard your data from unauthorized access, loss, or misuse. When you schedule an appointment or submit payment, your data may be processed through accredited, Australian-compliant clinical practice management software (e.g., Halaxy, Cliniko).
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">5. Website Analytics &amp; Cookies</h3>
        <p>
          Our website may use basic cookies or privacy-respecting analytics tools to evaluate web traffic and ensure accessibility. These tools do not record individual clinical inquiry data.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-serif text-lg font-bold text-[var(--color-navy)]">6. Access, Correction, and Inquiries</h3>
        <p>
          You have the right under Australian law to request access to the personal information we hold about you and request corrections. For any privacy queries or complaints, please reach out to:
        </p>
        <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 text-sm mt-3 space-y-1">
          <p className="font-semibold text-[var(--color-navy)]">Practice: Queensland Sexual Health &amp; Education Institute (QSHEI)</p>
          <p>Location: Yeppoon, Queensland, Australia</p>
          <p>
            Contact:{" "}
            <a href="mailto:contactus@qshei.com.au" className="text-[var(--color-terracotta)] hover:underline">
              contactus@qshei.com.au
            </a>{" "}
            |{" "}
            <a href="tel:0468129226" className="text-[var(--color-terracotta)] hover:underline">
              0468 129 226
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
