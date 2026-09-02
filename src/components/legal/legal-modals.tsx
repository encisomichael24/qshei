"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { PrivacyPolicyContent } from "./privacy-policy-content";
import { TermsAndConditionsContent } from "./terms-and-conditions-content";

interface LegalModalsProps {
  className?: string;
  isFooter?: boolean;
}

export function LegalModals({ className, isFooter }: LegalModalsProps) {
  const [activeModal, setActiveModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <div className={className}>
        {isFooter ? (
          <>
            <button 
              onClick={() => setActiveModal("terms")} 
              className="hover:text-white transition-colors"
            >
              Terms &amp; Support
            </button>
            <button 
              onClick={() => setActiveModal("privacy")} 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setActiveModal("terms")}
              className="font-semibold underline hover:text-[var(--color-navy)] transition-colors"
            >
              Terms of Use
            </button>
            {" "}and{" "}
            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
              className="font-semibold underline hover:text-[var(--color-navy)] transition-colors"
            >
              Privacy Policy
            </button>
          </>
        )}
      </div>

      <Modal
        isOpen={activeModal === "privacy"}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
      >
        <PrivacyPolicyContent />
      </Modal>

      <Modal
        isOpen={activeModal === "terms"}
        onClose={() => setActiveModal(null)}
        title="Terms and Conditions"
      >
        <TermsAndConditionsContent />
      </Modal>
    </>
  );
}
