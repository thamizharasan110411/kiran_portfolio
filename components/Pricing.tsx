"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { BRAND, PLANS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="plans" className="relative overflow-x-clip py-24 sm:py-28">
      <div className="aura opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Pricing"
          title="CHOOSE YOUR"
          highlight="MENTORSHIP PLAN"
          description="One curriculum. Two levels of depth. Every plan includes full support until you get your first payout."
        />

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {PLANS.map((plan, idx) => {
            const featured = Boolean(plan.featured);
            return (
              <Reveal key={plan.id} delay={idx * 0.12} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex h-full flex-col rounded-[26px] p-[1.5px] ${
                    featured
                      ? "bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 shadow-[0_30px_90px_-30px_rgba(212,175,55,0.55)]"
                      : "bg-gradient-to-b from-cyan-500/40 via-white/8 to-white/5"
                  }`}
                >
                  {featured && (
                    <div
                      className="pointer-events-none absolute -inset-1 -z-10 rounded-[30px] bg-[radial-gradient(58%_48%_at_50%_0%,rgba(212,175,55,0.26),rgba(212,175,55,0.08)_50%,transparent_78%)]"
                      aria-hidden="true"
                    />
                  )}

                  <div
                    className={`relative flex h-full flex-col rounded-[24.5px] p-8 sm:p-10 ${
                      featured ? "bg-[#0d0b06]" : "bg-[#080a0d]"
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-300 to-gold-600 px-5 py-1.5 text-[10.5px] font-extrabold tracking-[0.22em] text-[#14100a] shadow-[0_10px_30px_-10px_rgba(212,175,55,0.8)]">
                        {plan.badge}
                      </span>
                    )}

                    <p
                      className={`text-[11px] font-bold tracking-[0.3em] ${
                        featured ? "text-gold-400" : "text-cyan-400"
                      }`}
                    >
                      {plan.name}
                    </p>

                    <div className="mt-5 flex items-end gap-3">
                      <span
                        className={`font-display text-[3.4rem] leading-none font-extrabold tracking-tight ${
                          featured ? "gold-text" : "cyan-text"
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span className="pb-2 text-[12px] font-medium text-white/40">
                        {plan.perMonth}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-bold tracking-wide text-white">
                      {plan.title}
                    </h3>
                    <p
                      className={`mt-1 text-[11px] font-bold tracking-[0.26em] ${
                        featured ? "text-gold-400/80" : "text-cyan-400/80"
                      }`}
                    >
                      {plan.subtitle}
                    </p>

                    <div
                      className={`my-7 h-px w-full bg-gradient-to-r ${
                        featured
                          ? "from-gold-500/50 via-gold-500/15 to-transparent"
                          : "from-cyan-500/50 via-cyan-500/15 to-transparent"
                      }`}
                    />

                    <ul className="mb-9 flex-1 space-y-3.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-[13.5px] leading-snug text-white/70">
                          <span
                            className={`mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full ${
                              featured
                                ? "bg-gold-500/15 text-gold-400"
                                : "bg-cyan-500/15 text-cyan-300"
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={BRAND.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn mt-auto inline-flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-extrabold tracking-wide transition-all duration-300 ${
                        featured
                          ? "gold-cta"
                          : "border border-cyan-500/40 bg-cyan-500/10 text-cyan-200 hover:-translate-y-0.5 hover:bg-cyan-500/20 hover:shadow-[0_14px_40px_-14px_rgba(72,214,238,0.5)]"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[12px] text-white/35">
            Educational program only — trading involves risk. No profits are guaranteed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
