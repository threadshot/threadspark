import type { Metadata } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Threadspark | The Source of Truth for Long-Form Fiction",
  description:
    "Deterministic continuity engine and living story bible for indie series authors. Tracks character states, physical invariants, and epistemic secrets across multi-book sagas.",
  keywords: [
    "fiction continuity",
    "story bible",
    "series authors",
    "epistemic tracking",
    "novel writing assistant",
    "Threadspark",
    "worldbuilding",
    "continuity checker",
  ],
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.founder.linkedIn }],
  creator: SITE_CONFIG.founder.name,
  openGraph: {
    title: "Threadspark | The Source of Truth for Long-Form Fiction",
    description:
      "Deterministic continuity engine and living story bible for indie series authors. Tracks character states, physical invariants, and epistemic secrets across multi-book sagas.",
    url: `https://${SITE_CONFIG.companyDomain}`,
    siteName: "Threadspark",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Threadspark | The Source of Truth for Long-Form Fiction",
    description:
      "Deterministic continuity engine and living story bible for indie series authors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-brand-void text-slate-200 antialiased selection:bg-brand-violet/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
