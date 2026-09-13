"use client";

import { HIGHLIGHTS } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";

const ACCENTS = {
  gold: {
    ring: "hover:border-gold-500/45",
    glow: "hover:shadow-[0_24px_60px_-24px_rgba(212,175,55,0.45)]",
    icon: "border-gold-500/25 bg-gold-500/10 text-gold-400",
    bar: "from-gold-400 to-gold-600",
  },
  cyan: {
    ring: "hover:border-cyan-500/45",
    glow: "hover:shadow-[0_24px_60px_-24px_rgba(72,214,238,0.4)]",
    icon: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300",
    bar: "from-cyan-400 to-cyan-600",
  },
  green: {
    ring: "hover:border-wa/45",
    glow: "hover:shadow-[0_24px_60px_-24px_rgba(37,211,102,0.35)]",
    icon: "border-wa/25 bg-wa/10 text-wa",
    bar: "from-[#25d366] to-[#128c4a]",
  },
} as const;

export default function Highlights() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => {
            const a = ACCENTS[h.accent];
            return (
              <Reveal key={h.title} delay={i * 0.08}>
                <div
                  className={`glass card-hover group relative h-full overflow-hidden p-6 ${a.ring} ${a.glow}`}
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r ${a.bar} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />
                  <div
                    className={`mb-5 grid h-12 w-12 place-items-center rounded-xl border ${a.icon}`}
                  >
                    <Icon name={h.icon} />
                  </div>
                  <h3 className="font-display text-[15px] font-bold tracking-[0.12em] text-white">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-semibold text-gold-300/90">{h.subtitle}</p>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-white/50">{h.caption}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
