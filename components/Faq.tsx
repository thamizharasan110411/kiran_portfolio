"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          kicker="FAQ"
          title="QUESTIONS,"
          highlight="ANSWERED"
          description="Everything you need to know before enrolling in the mentorship."
        />

        <div className="mt-12 space-y-3.5">
          {FAQS.map((item, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={item.q} delay={Math.min(i * 0.04, 0.24)}>
                <div className="faq-item" data-open={open}>
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[11px] text-gold-500/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-[15px] font-semibold text-white/90">
                          {item.q}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border ${
                          open ? "border-gold-500/50 bg-gold-500/15 text-gold-400" : "border-white/15 text-white/50"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-[68px] text-[14px] leading-relaxed text-white/60">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
