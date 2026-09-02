"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-full bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 sm:px-8 sm:py-5 border-b border-stone-100 bg-[#F9F9F7] shrink-0">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--color-navy)]">
                {title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-black/5 transition-colors text-stone-500 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 flex-1">
              <div className="prose prose-stone max-w-none text-sm sm:text-base text-[var(--color-charcoal)]">
                {children}
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 sm:px-8 sm:py-5 border-t border-stone-100 bg-[#F9F9F7] shrink-0 flex justify-end">
               <button
                 onClick={onClose}
                 className="px-6 py-2.5 bg-[var(--color-navy)] text-white rounded-xl text-sm font-semibold hover:bg-[var(--color-navy)]/90 transition-colors"
               >
                 Close
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
