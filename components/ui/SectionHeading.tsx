import type { ReactNode } from "react";

export default function SectionHeading({
  kicker,
  title,
  highlight,
  description,
  align = "center",
}: {
  kicker?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      {kicker ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-gold-400 uppercase">
          <span className="h-1 w-1 rounded-full bg-gold-400" aria-hidden="true" />
          {kicker}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-[1.08] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="gold-text">{highlight}</span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
