import type { Metadata } from "next";
import { AboutClient } from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Threadspark | Founder Story & Company Facts",
  description:
    "Founded by solo engineer Ezekiel Heretta. Building deterministic, author-confirmed memory and continuity systems for long-form fiction authors.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Threadspark | Founder Story & Company Facts",
    description:
      "Why raw text isn't state, our transparent business model, company facts, and honest development roadmap.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
