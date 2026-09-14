"use client";

import { Crown } from "lucide-react";
import { PREMIUM_MODULES } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PremiumModules() {
  return (
    <section className="relative py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[300px] bg-[radial-gradient(50%_60%_at_50%_50%,rgba(212,175,55,0.09),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Premium Advantage"
          title="EXCLUSIVE"
          highlight="PREMIUM MODULES"
          description="Advanced modules reserved for Premium members who want deeper structure, precision and long-term support."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PREMIUM_MODULES.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <article className="card-hover group relative h-full overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-b from-[#100d07] to-[#08090c] p-8 transition-colors duration-300 hover:border-gold-500/60 hover:shadow-[0_30px_80px_-30px_rgba(212,175,55,0.5)]">
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.18),rgba(212,175,55,0.06)_55%,transparent)] transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl border border-gold-500/30 bg-gold-500/10 text-gold-400">
                    <Icon name={m.icon} className="h-7 w-7" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-gold-500/30 bg-gold-500/8 px-3 py-1 text-[9.5px] font-extrabold tracking-[0.22em] text-gold-400">
                    <Crown className="h-3 w-3" />
                    {m.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-wide text-white">
                  {m.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/55">{m.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
