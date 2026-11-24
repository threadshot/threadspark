import type { Metadata } from "next";
import { UseCasesClient } from "@/components/use-cases/UseCasesClient";

export const metadata: Metadata = {
  title: "Fiction Author Workflows & Use Cases",
  description:
    "Explore how indie series novelists, web serialists, narrative game writers, and speculative worldbuilders eliminate continuity drift with Threadspark.",
  alternates: {
    canonical: "/use-cases",
  },
  openGraph: {
    title: "Threadspark Use Cases | Dedicated Fiction Author Workflows",
    description:
      "Eliminate continuity decay across multi-book sagas, weekly releases, branching games, and complex worldbuilding.",
    url: "/use-cases",
  },
};

export default function UseCasesPage() {
  return <UseCasesClient />;
}
