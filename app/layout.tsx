import type { Metadata, Viewport } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ictkiran.example.com"),
  title: {
    default: "ICT Kiran — Trading Mentorship Program | CFD & Futures",
    template: "%s | ICT Kiran",
  },
  description:
    "Learn structured ICT-based trading — concepts, entry models, psychology and risk management — with practical mentorship and ongoing support. From basics to profitable trader. CFD & Futures.",
  keywords: [
    "trading mentorship",
    "ICT concepts",
    "CFD trading course",
    "futures trading course",
    "trading education",
    "entry models",
    "risk management",
    "trading psychology",
  ],
  openGraph: {
    type: "website",
    url: "https://ictkiran.example.com",
    siteName: "ICT Kiran",
    title: "ICT Kiran — Trading Mentorship Program | CFD & Futures",
    description:
      "From basics to profitable trader. Structured ICT mentorship covering concepts, entry models, psychology and risk management for CFD & Futures.",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "ICT Kiran — Trading Mentorship Program" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICT Kiran — Trading Mentorship Program | CFD & Futures",
    description:
      "From basics to profitable trader. Structured ICT mentorship for CFD & Futures.",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050607",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
