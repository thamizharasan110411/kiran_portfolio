import type { ComponentType } from "react";
import { Instagram, Youtube } from "lucide-react";
import { SOCIALS, BRAND, type Social } from "@/lib/content";

type GlyphProps = { className?: string };

function InstagramMark({ className }: GlyphProps) {
  return <Instagram className={className} strokeWidth={1.6} aria-hidden="true" />;
}

function YoutubeMark({ className }: GlyphProps) {
  return <Youtube className={className} strokeWidth={1.6} aria-hidden="true" />;
}

/** Official Telegram brand mark (lucide has no brand glyph). */
function TelegramMark({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

/** Official X (Twitter) brand mark. */
function XMark({ className }: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

const MARKS: Record<Social["id"], ComponentType<GlyphProps>> = {
  instagram: InstagramMark,
  telegram: TelegramMark,
  x: XMark,
  youtube: YoutubeMark,
};

const SIZES = {
  sm: { box: "h-9 w-9", icon: "h-4 w-4" },
  md: { box: "h-10 w-10", icon: "h-4.5 w-4.5" },
  lg: { box: "h-11 w-11", icon: "h-5 w-5" },
} as const;

export default function SocialLinks({
  size = "md",
  className = "",
  ariaLabel = "Social media",
}: {
  size?: keyof typeof SIZES;
  className?: string;
  ariaLabel?: string;
}) {
  const s = SIZES[size];
  return (
    <ul aria-label={ariaLabel} className={`flex flex-wrap items-center gap-3 ${className}`}>
      {SOCIALS.map((social) => {
        const Mark = MARKS[social.id];
        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} — ${BRAND.name} (opens in a new tab)`}
              title={social.label}
              className={`grid ${s.box} place-items-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-gold-500/40 hover:text-gold-400 focus-visible:border-gold-500/60 focus-visible:text-gold-400 focus-visible:outline-none`}
            >
              <Mark className={s.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
