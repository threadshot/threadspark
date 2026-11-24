import type { Metadata } from "next";
import { HomeClient } from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "Threadspark | The Source of Truth for Long-Form Fiction",
  description:
    "Deterministic continuity engine and living story bible for indie series authors. Tracks character states, physical invariants, and epistemic secrets across multi-book sagas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Threadspark | The Source of Truth for Long-Form Fiction",
    description:
      "Deterministic continuity engine and living story bible for indie series authors. Tracks character states, physical invariants, and epistemic secrets across multi-book sagas.",
    url: "/",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
