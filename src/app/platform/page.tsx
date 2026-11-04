"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Brain,
  History,
  PenTool,
  Network,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Cpu,
  Fingerprint,
  BarChart3,
  GitBranch,
  Layers,
  Search,
  Eye,
  Zap,
  Building2,
  Lock,
  HardDrive,
  FileCode2,
  Terminal,
  Activity,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";
import { InvestorModal } from "@/components/InvestorModal";

export default function PlatformPage() {
  const [activeStyleMetric, setActiveStyleMetric] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<string>("Marcus");
  const [activeStackLayer, setActiveStackLayer] = useState<number>(0);
  const [investorOpen, setInvestorOpen] = useState(false);

  const styleMetrics = [
    {
      title: "Vocabulary Complexity",
      value: "0.76 Lexical Richness",
      description: "Extracts rare sensory descriptors, era-appropriate jargon, and domain-specific terms to ensure generated prose matches authorial vocabulary depth.",
      example: "Prefers 'vitrification' and 'calcified' over generic terms like 'hardened' or 'stonework'.",
    },
    {
      title: "Sentence Rhythm & Pacing",
      value: "18.4 Avg Word Count",
      description: "Profiles structural cadences—periodic sentences, trailing participial phrases, and staccato beats—to mirror your natural breathing patterns in prose.",
      example: "Balances high-syllable meditative intros with sharp, kinetic dialogue rejoinders.",
    },
    {
      title: "Dialogue Characteristics",
      value: "38% Dialogue Density",
      description: "Catalogs character-specific verbal tics, subtext density, cadence shifts under stress, and dialect markers.",
      example: "Marcus speaks with formal bureaucratic precision; Elena cuts sentences short with sardonic pragmatism.",
    },
    {
      title: "Emotional Valence & Atmosphere",
      value: "Atmospheric Dread (34%)",
      description: "Tracks ambient mood shifts across chapters, evaluating psychological resonance and scene tension before and after pivotal turning points.",
      example: "Maintains brooding, somber tension leading up to the Solarium infiltration.",
    },
  ];

  const stackLayers = [
    {
      id: "ingest",
      name: "1. Cognitive Ingestion Engine",
      badge: "Parsing Layer",
      headline: "Multi-Pass Tokenization & Entity Extraction",
      description:
        "Translates raw unstructured text into structured semantic tokens. Automatically disambiguates named entities, detects chapter breaks, and isolates descriptive passages from spoken dialogue.",
      telemetry: "36,420 words segmented • 84 proper nouns • 12 characters indexed",
      codeSample: `// Ingestion Pipeline Pass 2: Entity Disambiguation
interface IngestedEntity {
  id: "char-marcus-thorne";
  name: "Marcus Thorne";
  tier: "Primary Protagonist";
  lexicalCadence: { ttr: 0.76, avgWordLen: 4.8 };
  faction: "The Meridian Scholasticate";
}`,
    },
    {
      id: "spatial",
      name: "2. Persistent Relational Graph",
      badge: "Memory Layer",
      headline: "Lossless Graph Topology & Vector Fabric",
      description:
        "Maintains an unbroken causal network across chapters. Relationships are stored as bidirectional weighted edges with dynamic tension ratings, ensuring long-term continuity without token degradation.",
      telemetry: "148 Relational Nodes • 312 Vector Embeddings • Zero Drift Rate",
      codeSample: `// Spatial Vector Relationship Schema
{
  "source": "Elena Vance",
  "target": "Archon Malakar",
  "relationType": "Vengeful Vendetta",
  "tensionScore": 94, // Hostile
  "causalAnchors": ["Ch 1: The First Tremblor", "Ch 4: Iron Quay Betrayal"]
}`,
    },
    {
      id: "style",
      name: "3. Stylometric Profiler",
      badge: "Voice Layer",
      headline: "Type-Token Ratios & Structural Rhythm",
      description:
        "Builds a multidimensional mathematical model of authorial style. Measures sentence length variance, part-of-speech distributions, and figurative language habits to prevent LLM prose flattening.",
      telemetry: "0.76 TTR • 18.4 wps mean • 4.2 sensory metaphors / 1k words",
      codeSample: `// Stylometric Authorship Matrix
const authorSignature = {
  lexicalDiversity: 0.76, // High
  dialogueProseRatio: 0.38,
  preferredSensoryModality: "Tactile / Architectural",
  syntaxConstraint: "Periodic trailing participial clauses"
};`,
    },
    {
      id: "verification",
      name: "4. Logic & Continuity Radar",
      badge: "Constraint Layer",
      headline: "Real-Time Contradiction Resolution",
      description:
        "Tracks physical state invariants—character locations, physical injuries, carried items, and calendar timelines. Instantly flags contradictions across draft iterations with recommended fixes.",
      telemetry: "3 Critical Flags Identified • 100% Causal Provenance Mapped",
      codeSample: `// Continuity Discrepancy Alert #CNT-01
{
  "entity": "Ancestral Signet Bronze Seal",
  "stateA": { "chapter": 4, "status": "Dropped in Iron Quay sludge" },
  "stateB": { "chapter": 7, "status": "Used to open Solarium door" },
  "verdict": "CRITICAL_LOGIC_COLLISION"
}`,
    },
    {
      id: "synthesis",
      name: "5. Symbiotic Creative Studio",
      badge: "Synthesis Layer",
      headline: "Style-Preserved Rewriting & Counterfactuals",
      description:
        "Allows authors to adjust scene tension, brainstorm divergent plot branches, and rewrite dialogue while strictly honoring established lore constraints and personal literary voice.",
      telemetry: "Unified & Side-by-Side Diff Engine • Multi-Octave Voice Tuning",
      codeSample: `// Creative Studio Scene Transform
applyStylisticRewrite({
  sourceScene: "Chapter 4: Iron Quay meeting",
  instruction: "Elevate restrained emotional subtext",
  voiceProfile: authorSignature,
  preserveLoreConstraints: ["Elena's forearm fracture", "Malakar's patrol"]
});`,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />
      <InvestorModal isOpen={investorOpen} onClose={() => setInvestorOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-brand-border/40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Cpu className="w-3.5 h-3.5 text-brand-violet" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Under The Hood • Platform Architecture
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            A persistent cognitive engine for long-form creative ambition.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
            THREADSPARK combines deep neural document parsing, persistent graph memory, stylometric profiling, and real-time narrative verification into a unified intelligence ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Launch Studio Simulator</span>
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-medium transition-all border border-white/10"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Institutional Architecture Briefing</span>
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURE STACK INSPECTOR */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-3 block">
              Interactive Stack Inspector
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Explore The 5-Layer Cognitive Pipeline
            </h2>
            <p className="text-slate-400 text-sm">
              Click each layer to inspect its algorithmic mechanics, internal schemas, and live telemetry outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              {stackLayers.map((layer, idx) => {
                const isActive = activeStackLayer === idx;
                return (
                  <button
                    key={layer.id}
                    onClick={() => {
                      sound.tick();
                      setActiveStackLayer(idx);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                      isActive
                        ? "bg-brand-surface border-brand-violet text-white shadow-lg shadow-brand-violet/15"
                        : "bg-brand-dark/70 border-brand-border/70 text-slate-400 hover:text-white hover:bg-brand-surface/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif text-sm font-medium">{layer.name}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isActive
                            ? "bg-brand-violet text-white"
                            : "bg-brand-dark text-slate-400 border border-white/5"
                        }`}
                      >
                        {layer.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-1">{layer.headline}</p>
                  </button>
                );
              })}
            </div>

            {/* Layer Deep-Dive Display */}
            <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                <div>
                  <span className="text-xs font-mono text-brand-champagne uppercase">
                    {stackLayers[activeStackLayer].badge}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium mt-0.5">
                    {stackLayers[activeStackLayer].headline}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 hidden sm:inline">
                  Active in Studio
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {stackLayers[activeStackLayer].description}
              </p>

              {/* Code / Data Schema Box */}
              <div className="rounded-2xl bg-brand-void/90 border border-brand-border/80 overflow-hidden font-mono text-xs">
                <div className="px-4 py-2.5 bg-brand-charcoal/80 border-b border-brand-border/60 text-slate-400 text-[11px] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-brand-violet" />
                    Internal Schema / Dispatch Pipeline
                  </span>
                  <span className="text-slate-400">Layer {activeStackLayer + 1} of 5</span>
                </div>
                <pre className="p-4 text-brand-lavender overflow-x-auto text-[11px] leading-relaxed">
                  <code>{stackLayers[activeStackLayer].codeSample}</code>
                </pre>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-brand-border flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Telemetry: <strong>{stackLayers[activeStackLayer].telemetry}</strong></span>
                <span className="text-brand-champagne">Zero Drift</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: Contextual Intelligence */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                01 / INGESTION
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Contextual Intelligence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                When you upload a manuscript, pitch deck, world atlas, or notebook, THREADSPARK does not merely store raw tokens. It parses semantic hierarchies, entity registries, geographic systems, and thematic motifs.
              </p>
              <div className="space-y-3 text-xs text-slate-300 font-mono">
                <div className="p-3 rounded-lg bg-brand-surface/60 border border-brand-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-violet mt-0.5 flex-shrink-0" />
                  <span><strong>Deep Entity Disambiguation:</strong> Separates historical lore from current dialogue, distinguishing between legendary figures and living characters.</span>
                </div>
                <div className="p-3 rounded-lg bg-brand-surface/60 border border-brand-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-violet mt-0.5 flex-shrink-0" />
                  <span><strong>Implicit Lore Extraction:</strong> Discovers unspoken relationships, institutional corruption, and faction allegiances inferred between the lines.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 text-xs font-mono text-slate-400 mb-6">
                <span>Multi-Pass Ingestion Pipeline</span>
                <span className="text-emerald-400">Status: Synthesized</span>
              </div>

              <div className="space-y-4">
                {[
                  { step: "Pass 1: Tokenization & Lexical Indexing", time: "0.4s", detail: "36,420 words segmented into thematic clusters" },
                  { step: "Pass 2: Entity & Character Extraction", time: "1.2s", detail: "12 primary entities & 8 world locations identified" },
                  { step: "Pass 3: Chronological Causal Mapping", time: "2.1s", detail: "24 interconnected plot events serialized along the Equinox timeline" },
                  { step: "Pass 4: Stylometric Fingerprinting", time: "1.8s", detail: "Synthesizing tone radar, average cadence, and vocabulary distribution" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-white">{item.step}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{item.detail}</div>
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-brand-surface border border-white/5 text-brand-champagne">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: Persistent Project Memory */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl">
              <div className="p-5 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-4">
                <div className="flex items-center justify-between border-b border-brand-border pb-3 text-xs font-mono">
                  <span className="text-slate-300">Memory Graph vs. Context Window</span>
                  <span className="text-brand-violet">No Degradation Over Time</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <span className="text-red-400 font-semibold block">Standard Context Windows</span>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      As conversation continues, earlier documents are dropped or truncated. Details from Chapter 1 fade from recall when generating Chapter 8.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <span className="text-emerald-400 font-semibold block">THREADSPARK Graph Topology</span>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      Information is stored in persistent relational nodes. Chapter 8 query automatically traverses edges back to Chapter 1 with 100% precision.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                  <span>Current Graph Footprint: <strong>148 active relational edges</strong></span>
                  <span className="font-mono text-brand-champagne">Zero Drift Rate</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                02 / PERSISTENCE
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Persistent Project Memory
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Most creative projects take months or years to complete. THREADSPARK maintains an unbroken, evolving memory across revisions, brainstorming sessions, and new chapters.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Even if you pause a novel for six months and return, the platform preserves your established rules, character motivations, and ongoing plot covenants without retraining.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: Writing Style Intelligence */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/40 text-purple-300 text-xs font-mono mb-4">
              03 / STYLOMETRICS
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Writing Style Intelligence
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Every author has an unmistakable stylistic fingerprint. THREADSPARK decodes yours, so any assistance feels like an extension of your mind, not a generic robot.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Metric Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {styleMetrics.map((metric, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sound.tick();
                    setActiveStyleMetric(idx);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    activeStyleMetric === idx
                      ? "bg-brand-surface border-brand-violet text-white shadow-lg shadow-brand-violet/10"
                      : "bg-brand-dark/50 border-brand-border text-slate-400 hover:text-white hover:bg-brand-surface/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base font-medium">{metric.title}</span>
                    <span className="text-xs font-mono text-brand-champagne">{metric.value}</span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">{metric.description}</p>
                </button>
              ))}
            </div>

            {/* Metric Detail Viewer */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Active Stylometric Radar • {styleMetrics[activeStyleMetric].title}
                </span>
                <span className="text-xs font-mono text-brand-lavender">Fingerprint Match 98.4%</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Diagnostic Breakdown</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {styleMetrics[activeStyleMetric].description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-dark border border-brand-border space-y-2">
                  <div className="text-xs font-mono uppercase text-brand-champagne">Manuscript Evidence</div>
                  <p className="font-serif italic text-sm text-slate-300">
                    &ldquo;{styleMetrics[activeStyleMetric].example}&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-brand-border text-center font-mono text-xs">
                  <div className="p-3 rounded-lg bg-brand-surface/40 border border-white/5">
                    <div className="text-slate-400 text-[10px]">TTR METRIC</div>
                    <div className="text-white font-semibold text-sm mt-0.5">0.76 (High)</div>
                  </div>
                  <div className="p-3 rounded-lg bg-brand-surface/40 border border-white/5">
                    <div className="text-slate-400 text-[10px]">SENTENCE VAR</div>
                    <div className="text-brand-lavender font-semibold text-sm mt-0.5">±6.2 Words</div>
                  </div>
                  <div className="p-3 rounded-lg bg-brand-surface/40 border border-white/5">
                    <div className="text-slate-400 text-[10px]">SYNTAX DRIFT</div>
                    <div className="text-emerald-400 font-semibold text-sm mt-0.5">&lt; 1.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: Knowledge Relationships */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/40 text-blue-300 text-xs font-mono">
                04 / RELATIONS
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Knowledge Relationships
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nothing in a great story exists in a vacuum. Characters belong to factions, wield ancient artifacts, inhabit physical geography, and harbor historical grudges.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                THREADSPARK traces multidirectional links between characters, locations, artifacts, and political decrees. Clicking any node instantly surfaces its dependencies throughout the timeline.
              </p>
              <div className="flex gap-2">
                {["Marcus", "Elena", "Malakar", "Silas"].map((node) => (
                  <button
                    key={node}
                    onClick={() => {
                      sound.tick();
                      setSelectedNode(node);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      selectedNode === node
                        ? "bg-brand-violet text-white"
                        : "bg-brand-surface border border-brand-border text-slate-400 hover:text-white"
                    }`}
                  >
                    {node}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl">
              <div className="p-5 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono">
                  <span className="text-brand-champagne">Interactive Node Inspector: {selectedNode}</span>
                  <span className="text-slate-400">Linked to 4 Entities</span>
                </div>

                {selectedNode === "Marcus" && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Direct Relation: Elena Vance</div>
                      <div className="text-slate-400 mt-1">Former intellectual rival turned uneasy ally; mutual guilt over the First Tremblor.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Adversary: Archon Corvus Malakar</div>
                      <div className="text-slate-400 mt-1">Superordinate inquisitor issuing covert execution ultimatums.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Key Geographic Anchor: The Imperial Archives</div>
                      <div className="text-slate-400 mt-1">Marcus&apos;s sanctuary and repository of the forbidden Foundation Covenant.</div>
                    </div>
                  </div>
                )}

                {selectedNode === "Elena" && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Direct Relation: Silas Ward</div>
                      <div className="text-slate-400 mt-1">Elder glassmith who took the blame for Elena&apos;s experiment; surrogate father figure.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Key Location: The Sunk Hollows</div>
                      <div className="text-slate-400 mt-1">Flooded subterranean sanctuary where Elena fabricates black-market resonance regulators.</div>
                    </div>
                  </div>
                )}

                {selectedNode === "Malakar" && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Patronage: Lady Seraphina Voss</div>
                      <div className="text-slate-400 mt-1">Financial symbiosis; exchanging suppressed shipping manifests for private security.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Strategic Citadel: The Obsidian Bastion</div>
                      <div className="text-slate-400 mt-1">Headquarters of clandestine interrogations and civic ether rationing.</div>
                    </div>
                  </div>
                )}

                {selectedNode === "Silas" && (
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Protector: Elena Vance</div>
                      <div className="text-slate-400 mt-1">Shares ancient glass-blowing formulas to craft the emergency resonance dampener.</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface border border-white/5">
                      <div className="font-semibold text-brand-lavender">Sacred Knowledge: The Keystone Covenant</div>
                      <div className="text-slate-400 mt-1">Holds the true architectural secret: the Meridian was designed to self-destruct after 500 years.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: Continuity Intelligence */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-red-400 font-semibold">
                      Critical Contradiction Detected #CNT-1
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-900/40 text-red-300">
                      High Impact
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-2 mb-3">
                    <div>
                      <strong className="text-slate-200">Chapter 4:</strong> &ldquo;Marcus watched in horror as his grandfather&apos;s Scholasticate seal fell into the churning sludge of the Quay dock, lost forever.&rdquo;
                    </div>
                    <div>
                      <strong className="text-slate-200">Chapter 7:</strong> &ldquo;Pressing the cold bronze relief of his family&apos;s seal into the brass aperture, the pneumatic tumblers groaned open.&rdquo;
                    </div>
                  </div>
                  <div className="pt-3 border-t border-red-500/20 flex items-center justify-between text-xs text-amber-300 font-mono">
                    <span>Suggested Fix: Have Elena pick the lock with her tuning pin.</span>
                    <Link href="/studio?tab=continuity" className="text-emerald-400 hover:underline">
                      Inspect in Studio &rarr;
                    </Link>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono uppercase text-amber-400 font-semibold">
                      Injury Inconsistency #CNT-2
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-900/40 text-amber-300">
                      Medium
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Elena fractures right forearm in Ch 4, but wields heavy blacksmith tongs with both hands 36 hours later in Ch 6.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono">
                05 / CONTINUITY
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Continuity Intelligence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Even great authors make continuity mistakes when managing complex world states. THREADSPARK operates like an indefatigable fact-checker and script supervisor.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                The scanner flags item transfers, character eye colors, injury timelines, travel distances, and calendar counts across tens of thousands of words in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: Creative Collaboration */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/20 border border-brand-champagne/40 text-brand-champagne text-xs font-mono mb-4">
              06 / CREATIVE CO-PILOT
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Creative Collaboration
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              When writer&apos;s block strikes, brainstorm with an assistant that knows every secret in your universe. Test hypothetical &ldquo;what if&rdquo; turns, generate alternate dialogue, and refine pacing while preserving creative ownership.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto text-left space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono">
              <span className="text-slate-300">Hypothetical Simulation: &ldquo;What if Elena betrays Marcus in Chapter 6?&rdquo;</span>
              <span className="text-brand-champagne">Simulation Depth: 3 Chapters</span>
            </div>

            <div className="p-4 rounded-xl bg-brand-dark border border-brand-border text-xs text-slate-300 leading-relaxed font-sans">
              <strong className="text-brand-lavender block mb-1">Downstream Ripple Analysis:</strong>
              If Elena absconds with the focusing prism in Chapter 6 to bargain directly with Seraphina Voss, the Lower City rebellion loses its moral anchor. Marcus would be forced into an emergency pact with Captain Vane of the City Watch, altering the Chapter 7 Gala infiltration from an intellectual sting into an armed military mutiny.
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 font-mono">
              <span>Estimated Tone Impact: +28% Kinetic Urgency</span>
              <Link href="/studio?tab=creative-studio" className="text-brand-champagne hover:underline flex items-center gap-1">
                Try in Threadspark Studio <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE & TECHNICAL SPECIFICATIONS */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Enterprise Specifications
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Hardware, Latency &amp; Privacy Protocol
            </h2>
            <p className="text-slate-400 text-sm">
              Grounded, verifiable technical specifications for publishers, game studios, and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">Local-First Vault</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Project indexes are stored locally with AES-256 GCM encryption. Intellectual property never trains third-party public foundation models.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">Zero Cloud Data Retention</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-lavender flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">Sub-15ms Spatial Search</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Relational graph queries execute via lightweight C-accelerated spatial vector matrices, returning cross-chapter causal paths in milliseconds.
              </p>
              <div className="pt-2 text-[11px] font-mono text-brand-champagne">&lt;12ms Average Sub-Graph Traversal</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/10 border border-purple-500/20 text-purple-300 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">Lossless Portability</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete project states—character dossiers, causal timelines, stylometrics, and knowledge graphs—export into open JSON, SQLite, and Markdown bundles.
              </p>
              <div className="pt-2 text-[11px] font-mono text-purple-300">Zero Vendor Lock-In</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mb-6">
            Ready to experience these capabilities in real time?
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            THREADSPARK Studio is fully interactive and preloaded with the complete fictional manuscript of <em>The Glass Meridian</em>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Enter Threadspark Studio</span>
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-medium transition-all border border-white/10"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Request Strategic Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
