"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Deterministic pseudo-random so SSR and client match */
function rand(seed: number) {
  const x = Math.sin(seed * 9973) * 43758.5453;
  return x - Math.floor(x);
}

const CANDLES = Array.from({ length: 22 }, (_, i) => ({
  up: rand(i + 1) > 0.42,
  h: 14 + rand(i + 7) * 34,
  wick: 8 + rand(i + 13) * 16,
}));

const POINTS = Array.from({ length: 40 }, (_, i) => {
  const x = (i / 39) * 1440;
  const y = 200 - (Math.sin(i * 0.55) * 46 + Math.sin(i * 0.21) * 30 + i * 1.1);
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}).join(" ");

export default function ChartBackground({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#b8952e" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="cc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#48d6ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1591a8" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint grid */}
      <g opacity="0.5">
        {Array.from({ length: 6 }, (_, i) => (
          <line key={i} x1="0" y1={i * 70} x2="1440" y2={i * 70} stroke="#ffffff" strokeOpacity="0.04" />
        ))}
        {Array.from({ length: 15 }, (_, i) => (
          <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="#ffffff" strokeOpacity="0.03" />
        ))}
      </g>

      {/* trend line */}
      <motion.polyline
        points={POINTS}
        fill="none"
        stroke="url(#cg)"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
      />
      <polygon points={`0,400 ${POINTS} 1440,400`} fill="url(#lineFill)" />

      {/* candles */}
      <g transform="translate(0,300)">
        {CANDLES.map((c, i) => {
          const x = 40 + i * 64;
          const color = c.up ? "url(#cg)" : "url(#cc)";
          const anim = reduce
            ? {}
            : { scaleY: [0.82, 1.12, 0.9], opacity: [0.8, 1, 0.8] };
          return (
            <motion.g
              key={i}
              style={{ originY: 1 }}
              animate={anim}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                delay: (i % 7) * 0.45,
                ease: "easeInOut",
              }}
            >
              <line x1={x} y1={-c.h - c.wick} x2={x} y2={0} stroke={color} strokeWidth="1.4" />
              <rect
                x={x - 7}
                y={-c.h}
                width="14"
                height={c.h}
                rx="1.5"
                fill={c.up ? color : "none"}
                stroke={color}
                strokeWidth="1.4"
              />
            </motion.g>
          );
        })}
      </g>
    </svg>
  );
}
