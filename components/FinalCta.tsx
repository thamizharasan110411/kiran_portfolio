"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/content";
import ChartBackground from "./ChartBackground";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      {/* chart backdrop */}
      <div className="absolute inset-0 -z-10 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_60%,transparent)]">
        <ChartBackground />
      </div>
      <div className="aura -z-10 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.32em] text-gold-400 uppercase">
            Your next step
          </p>
          <h2 className="mt-5 font-display text-[2.1rem] leading-[1.08] font-extrabold text-white sm:text-5xl">
            READY TO TAKE YOUR TRADING
            <br />
            <span className="gold-text">KNOWLEDGE TO THE NEXT LEVEL?</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-white/60">
            Learn. Practice. Improve. Trade with discipline.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#plans"
              className="gold-cta inline-flex items-center gap-2 rounded-xl px-9 py-4 text-base font-extrabold tracking-wide"
            >
              ENROLL NOW <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-wa/35 bg-wa/10 px-8 py-4 text-base font-bold text-wa transition-all duration-300 hover:-translate-y-0.5 hover:bg-wa/15"
            >
              <MessageCircle className="h-5 w-5" />
              CHAT ON WHATSAPP
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
