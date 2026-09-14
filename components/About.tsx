"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TIMELINE } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="relative overflow-x-clip py-24 sm:py-28">
      {/* faint side glow */}
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.13),rgba(212,175,55,0.05)_55%,transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
        {/* copy */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            align="left"
            kicker="About the program"
            title="MASTER THE MARKET WITH"
            highlight="STRUCTURED LEARNING"
            description="Learn the fundamentals and advanced concepts of ICT-based trading through a structured mentorship program designed to help you understand the market, improve your execution and develop disciplined trading habits."
          />

          <Reveal delay={0.15} className="mt-8">
            <a
              href="#plans"
              className="ghost-cta inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
            >
              Explore the curriculum <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="relative">
          <div
            className="absolute top-2 bottom-2 left-[22px] w-px bg-gradient-to-b from-gold-500/60 via-white/10 to-transparent"
            aria-hidden="true"
          />
          <ol className="space-y-4">
            {TIMELINE.map((item, i) => (
              <li key={item.no}>
                <motion.div
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-5"
                >
                  <span
                    className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/35 bg-[#0b0d10] font-display text-[12px] font-bold text-gold-400 shadow-[0_0_0_5px_rgba(5,6,7,1),0_0_18px_rgba(212,175,55,0.25)]"
                  >
                    {item.no}
                  </span>
                  <div className="glass card-hover flex-1 px-5 py-4 group-hover:border-gold-500/40">
                    <p className="font-display text-[15px] font-bold tracking-wide text-white">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
