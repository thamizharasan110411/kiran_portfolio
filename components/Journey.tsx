"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { JOURNEY } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 45%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          kicker="Mentorship Journey"
          title="YOUR PATH FROM BASICS TO"
          highlight="DISCIPLINED EXECUTION"
          description="Seven deliberate steps — the same sequence you'll follow inside the program."
        />

        <div ref={trackRef} className="relative mt-16">
          {/* base line + animated progress line */}
          <div
            className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-white/6 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gradient-to-b from-gold-300 via-gold-500 to-cyan-500 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-8 md:space-y-12">
            {JOURNEY.map((j, i) => {
              const left = i % 2 === 0;
              return (
                <li key={j.step} className="relative">
                  <Reveal delay={0.05}>
                    <div
                      className={`flex items-start gap-6 md:w-1/2 ${
                        left ? "md:pr-14" : "md:ml-auto md:flex-row-reverse md:pl-14"
                      }`}
                    >
                      {/* node */}
                      <span
                        className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border font-display text-sm font-extrabold shadow-[0_0_0_6px_rgba(5,6,7,1)] ${
                          i % 2 === 0
                            ? "border-gold-500/40 bg-[#0d0b06] text-gold-400"
                            : "border-cyan-500/40 bg-[#060b0d] text-cyan-300"
                        }`}
                      >
                        {j.step}
                      </span>
                      <div
                        className={`glass card-hover flex-1 px-6 py-5 hover:border-gold-500/40 ${
                          left ? "" : "md:text-left"
                        }`}
                      >
                        <p className="text-[10px] font-bold tracking-[0.3em] text-white/35">
                          STEP {j.step}
                        </p>
                        <p className="mt-1 font-display text-[15.5px] font-bold text-white">
                          {j.title}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
