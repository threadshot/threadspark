import type { Metadata } from "next";
import { PlatformClient } from "@/components/platform/PlatformClient";

export const metadata: Metadata = {
  title: "Engine Architecture & Pipeline",
  description:
    "How Threadspark converts raw fiction manuscripts into a deterministic temporal story-state graph with epistemic knowledge boundaries and passage verification.",
  alternates: {
    canonical: "/platform",
  },
  openGraph: {
    title: "Threadspark Engine Architecture & 5-Step Pipeline",
    description:
      "Deterministic memory pipeline: ingestion, propose-then-confirm story bible, epistemic tracking, continuous verification, and private LoRA adapters.",
    url: "/platform",
  },
};

export default function PlatformPage() {
  return <PlatformClient />;
}
