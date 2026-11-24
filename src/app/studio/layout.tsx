import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Studio Prototype",
  description:
    "Explore the interactive demonstration of Threadspark Studio preloaded with The Glass Meridian manuscript. Inspect the relational knowledge graph, epistemic tracking radar, and style intelligence profiler.",
  alternates: {
    canonical: "/studio",
  },
  openGraph: {
    title: "Threadspark Studio Prototype | Interactive Story State Demo",
    description:
      "Interactive demonstration of Threadspark Studio with The Glass Meridian (36,420 words, 148 state nodes).",
    url: "/studio",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
