"use client";

import { WHY_US } from "@/lib/content";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="The Difference"
          title="WHY"
          highlight="ICT KIRAN?"
          description="A mentorship built on structure, discipline and support — not hype."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="glass card-hover group h-full p-7 hover:border-gold-500/40">
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-gold-500/25 bg-gold-500/8 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500/15">
                    <Icon name={item.icon} />
                  </div>
                  <div>
                    <h3 className="font-display text-[15.5px] font-bold tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
