"use client";

import { TrendingUp } from "lucide-react";
import { BRAND } from "@/lib/content";

const ITEMS = [
  "CFD & FUTURES",
  "INDEXES",
  "GOLD",
  "FOREX",
  "CRYPTO",
  "ICT CONCEPTS",
  "ENTRY MODELS",
  "RISK MANAGEMENT",
  "TRADING PSYCHOLOGY",
  "FUNDED ACCOUNT APPROACH",
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-white/5 bg-[#07080a] py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050607] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050607] to-transparent" />
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="ticker-track">
          {row.map((item, i) => (
            <span
              key={i}
              className="mx-6 flex items-center gap-2.5 text-[11.5px] font-semibold tracking-[0.24em] whitespace-nowrap text-white/40"
            >
              {i % 2 === 0 ? (
                <TrendingUp className="h-3.5 w-3.5 text-gold-400" />
              ) : (
                <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden="true" />
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
      <span className="sr-only">{BRAND.markets} trading mentorship — ICT Kiran</span>
    </div>
  );
}
