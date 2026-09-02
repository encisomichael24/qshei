import Link from "next/link";
import { LegalModals } from "@/components/legal/legal-modals";
export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white/90 py-16 px-6 lg:px-12 mt-auto">
      <div className="max-w-[1440px] mx-auto space-y-12">
        
        {/* Important Crisis Note - Prominent Full-Width Banner at the Top */}
        <div className="bg-white/5 p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 backdrop-blur-sm">
          <div className="space-y-1.5 max-w-3xl">
            <h4 className="text-[#E89E8A] font-medium text-base sm:text-lg font-serif flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E89E8A] shrink-0" />
              Important Crisis Note
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-white/80">
              QSHEI is not a crisis or emergency response service. If you require immediate medical attention, emergency advice, or urgent support, please dial <strong>000</strong> for emergency services, call <strong>13 HEALTH (13 43 25 84)</strong> for 24/7 health guidance, or reach out to <strong>1800RESPECT (1800 737 732)</strong>.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
            <a
              href="tel:000"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#E89E8A]/15 text-[#E89E8A] border border-[#E89E8A]/30 text-xs font-semibold hover:bg-[#E89E8A] hover:text-[var(--color-navy)] transition-colors"
            >
              Call 000 (Emergency)
            </a>
          </div>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pt-2">
          
          {/* Brand & Mission */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-4 pr-0 lg:pr-8">
            <Link href="/" className="font-serif text-3xl sm:text-4xl font-bold text-white block mb-3">
              QSHEI
            </Link>
            <p className="text-sm leading-relaxed text-white/80 max-w-md">
              Queensland Sexual Health &amp; Education Institute.
              Inclusive, Sex-Positive Healthcare &amp; Education for Everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1 lg:col-span-3 space-y-4">
            <h4 className="text-white font-medium text-lg font-serif">Quick Links</h4>
            <ul className="space-y-3 text-sm flex flex-col">
              <li><Link href="/" className="hover:text-white transition-colors w-fit block">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors w-fit block">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors w-fit block">Contact Us</Link></li>
              <li>
                <a 
                  href="https://www.hotdoc.com.au/medical-centres/yeppoon-QLD-4703/queensland-sexual-health-education-institute/doctors" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors w-fit block"
                >
                  Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1 lg:col-span-4 space-y-4">
            <h4 className="text-white font-medium text-lg font-serif">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="block text-white/50 text-xs mb-1">Phone</span>
                <a href="tel:0468129226" className="hover:text-white transition-colors font-medium">0468 129 226</a>
              </li>
              <li className="mt-3">
                <span className="block text-white/50 text-xs mb-1">Email</span>
                <a href="mailto:contactus@qshei.com.au" className="hover:text-white transition-colors break-all sm:break-words font-medium block">
                  contactus@qshei.com.au
                </a>
              </li>
              <li className="mt-3">
                <span className="block text-white/50 text-xs mb-1">Social</span>
                <a href="https://instagram.com/qshei.au" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium block">
                  @qshei.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {new Date().getFullYear()} QSHEI. All rights reserved.</p>
          <LegalModals className="flex items-center gap-6" isFooter />
        </div>
      </div>
    </footer>
  );
}
