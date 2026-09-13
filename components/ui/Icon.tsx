import {
  Globe,
  Target,
  Shield,
  ShieldCheck,
  Users,
  CandlestickChart,
  Crosshair,
  Brain,
  Briefcase,
  Banknote,
  BookOpen,
  LifeBuoy,
  Clock,
  Activity,
} from "lucide-react";

const ICONS = {
  globe: Globe,
  target: Target,
  shield: Shield,
  "shield-check": ShieldCheck,
  users: Users,
  "candlestick-chart": CandlestickChart,
  crosshair: Crosshair,
  brain: Brain,
  briefcase: Briefcase,
  banknote: Banknote,
  "book-open": BookOpen,
  "life-buoy": LifeBuoy,
  clock: Clock,
  activity: Activity,
} as const;

export type IconName = keyof typeof ICONS;

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name as IconName] ?? Target;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden="true" />;
}
