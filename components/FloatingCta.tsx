"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { BRAND } from "@/lib/content";

export default function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp bubble (all sizes) */}
      <AnimatePresence>
        {show && (
          <motion.a
            key="wa"
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ duration: 0.3, ease: "backOut" }}
            className="fixed right-5 bottom-24 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#2fe072] to-[#1aa851] text-[#05240f] shadow-[0_14px_40px_-10px_rgba(37,211,102,0.7)] transition-transform hover:scale-105 sm:bottom-8"
          >
            <MessageCircle className="h-6.5 w-6.5" strokeWidth={2} />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.4s]" />
          </motion.a>
        )}
      </AnimatePresence>

      {/* Sticky mobile enroll bar */}
      <AnimatePresence>
        {show && (
          <motion.div
            key="bar"
            initial={{ y: 90 }}
            animate={{ y: 0 }}
            exit={{ y: 90 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#050607]/92 px-4 pt-3 pb-3 backdrop-blur-xl sm:hidden" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
          >
            <div className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold tracking-[0.2em] text-white/45 uppercase">
                  Mentorship from
                </p>
                <p className="font-display text-lg leading-tight font-extrabold text-white">
                  ₹2,999
                </p>
              </div>
              <a
                href="#plans"
                className="gold-cta flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-extrabold"
              >
                ENROLL NOW <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
