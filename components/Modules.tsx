"use client";

import { MODULES } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const ACCENT = {
  gold: {
    border: "hover:border-gold-500/45",
    icon: "border-gold-500/25 bg-gold-500/10 text-gold-400",
    num: "text-gold-500/25",
  },
  cyan: {
    border: "hover:border-cyan-500/45",
    icon: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300",
    num: "text-cyan-500/25",
  },
} as const;

export default function Modules() {
  return (
    <section id="mentorship" className="relative overflow-x-clip py-24 sm:py-28">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(34,184,212,0.13),rgba(34,184,212,0.05)_55%,transparent)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Curriculum"
          title="WHAT YOU WILL"
          highlight="LEARN"
          description="Six focused modules that take you from market fundamentals to disciplined execution."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => {
            const a = ACCENT[m.accent];
            return (
              <Reveal key={m.no} delay={(i % 3) * 0.08}>
                <article
                  className={`glass card-hover group relative h-full overflow-hidden p-7 ${a.border}`}
                >
                  {/* ghost number */}
                  <span
                    className={`pointer-events-none absolute -top-3 right-4 font-display text-[86px] leading-none font-extrabold ${a.num} select-none`}
                    aria-hidden="true"
                  >
                    {m.no}
                  </span>

                  <div className={`mb-6 grid h-12 w-12 place-items-center rounded-xl border ${a.icon}`}>
                    <Icon name={m.icon} />
                  </div>

                  <p className="text-[10.5px] font-bold tracking-[0.3em] text-white/35">
                    MODULE {m.no}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-white">{m.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/55">
                    {m.description}
                  </p>

                  {/* bottom accent line */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${
                      m.accent === "gold" ? "from-gold-400 to-gold-600" : "from-cyan-400 to-cyan-600"
                    }`}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
