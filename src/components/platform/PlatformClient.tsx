"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";
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
  Lock,
  HardDrive,
  FileCode2,
  Terminal,
  Activity,
  BookOpen,
  Check,
  UserCheck,
} from "lucide-react";
import { SITE_CONFIG, getCohortLabel, getBenchmarkMetrics } from "@/lib/site";

export function PlatformClient() {
  const [activeStyleMetric, setActiveStyleMetric] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<string>("Marcus");
  const [activeStackLayer, setActiveStackLayer] = useState<number>(0);
  const [betaOpen, setBetaOpen] = useState(false);

  const styleMetrics = [
    {
      title: "Vocabulary Complexity",
      value: "0.76 Lexical Richness",
      tag: "Prototype (working)",
      description: "Extracts rare sensory descriptors, era-appropriate jargon, and domain-specific terms in the prototype to profile vocabulary depth.",
      example: "Prefers 'vitrification' and 'calcified' over generic terms like 'hardened' or 'stonework'.",
    },
    {
      title: "Sentence Rhythm & Pacing",
      value: "18.4 Avg Word Count",
      tag: "Prototype (working)",
      description: "Profiles structural cadences—periodic sentences, trailing participial phrases, and staccato beats—to mirror natural breathing patterns in prose.",
      example: "Balances high-syllable meditative intros with sharp, kinetic dialogue rejoinders.",
    },
    {
      title: "Dialogue Characteristics",
      value: "38% Dialogue Density",
      tag: "Prototype (working)",
      description: "Catalogs character-specific verbal tics, subtext density, cadence shifts under stress, and dialect markers.",
      example: "Marcus speaks with formal bureaucratic precision; Elena cuts sentences short with sardonic pragmatism.",
    },
    {
      title: "Private LoRA Fine-Tuning Pipeline",
      value: "~25MB .safetensors (Target: Q2 2027)",
      tag: "In development",
      description: "Training an author-owned LoRA adapter over an open-weight base model to generate continuity suggestions in the author's exact voice without shared model drift.",
      example: "Full LoRA weight export (.safetensors) currently in active development for Phase 2.",
    },
  ];

  const workflowSteps = [
    {
      id: "ingest",
      step: "01",
      name: "1. Ingest Archive",
      tag: "Prototype (working)",
      headline: "Reads Your Whole Archive & Builds Your Story Bible Automatically",
      description:
        "Drop in a finished manuscript, messy Scrivener exports, markdown chapter drafts, or a multi-book series. In our working prototype, Threadspark parses text into structured scene boundaries and extracts characters, locations, carried artifacts, and chronological events.",
      telemetry: `${SITE_CONFIG.demoStats.words.toLocaleString()} words indexed • ${SITE_CONFIG.demoStats.characters} dossiers proposed (illustrative sample output)`,
      codeSample: `// Step 1: Proposed Story Entity (Illustrative payload) [Prototype (working)]
{
  "id": "char-marcus-thorne",
  "name": "Marcus Thorne",
  "tier": "Primary Protagonist",
  "authorConfirmed": true,
  "introducedIn": "Chapter 1: The First Tremblor",
  "epistemicBoundary": {
    "knowsSolariumKeystoneSecret": false,
    "revelationChapter": 7
  },
  "physicalInvariants": {
    "injuries": [],
    "carriedItems": ["Grandfather's Bronze Seal (Lost Ch 4)"]
  }
}`,
    },
    {
      id: "propose",
      step: "02",
      name: "2. Propose Story Bible",
      tag: "Prototype (working)",
      headline: "Temporal Story-State Graph & Epistemic Tracking (\"Who Knows What, When\")",
      description:
        "Tracks physical state over story time: injuries, carried possessions, locations, ages, and alliances. Deterministically tracks knowledge propagation, flagging characters referencing secrets before they learn them in the text. Embeddings handle search, but the temporal graph is the source of truth.",
      telemetry: `${SITE_CONFIG.demoStats.nodes} State Nodes • Epistemic Boundaries Enforced (illustrative sample output)`,
      codeSample: `// Step 2: Epistemic Knowledge Boundary Schema [Prototype (working)]
{
  "secretId": "sec-foundation-covenant-defect",
  "originatingEvent": "Ch 1: Subterranean Tremblor",
  "witnesses": ["Silas Ward"],
  "prohibitedKnowledgeHolders": [
    { "character": "Elena Vance", "permittedAfter": "Ch 8: The Solarium Climax" },
    { "character": "Archon Malakar", "permittedAfter": "NEVER" }
  ],
  "enforcementAction": "FLAG_EPISTEMIC_LEAK_ON_PROSE_COLLISION"
}`,
    },
    {
      id: "confirm",
      step: "03",
      name: "3. Author Confirms",
      tag: "Prototype (working)",
      headline: "Human Veto on Every Entity & Canon Rule",
      description:
        "Automated NLP pipelines can misinterpret aliases or misattribute dialogue. Threadspark uses a strict propose-then-confirm model: the engine surfaces proposed entities, aliases, and timeline dependencies, and the author approves or adjusts them with one click. Canon is always author-governed.",
      telemetry: "1-Click Author Approvals • Full Editability • Human-in-the-Loop",
      codeSample: `// Step 3: Author Approval & Alias Consolidation [Prototype (working)]
const entityResolution = {
  aliasDetected: "The Blind Glassmith",
  resolvedTo: "Silas Ward (char-silas-ward)",
  confidence: 0.94,
  authorAction: "CONFIRMED", // Author approved consolidation
  canonLocked: true
};`,
    },
    {
      id: "verify",
      step: "04",
      name: "4. Continuous Verification",
      tag: "Prototype (working)",
      headline: "Precision-First Continuity Radar with Exact Manuscript Anchors",
      description:
        "Versions drafts and lets authors test alternative scenes without corrupting canon. Aggressively tuned for precision over noisy recall—a tool that cries wolf gets disabled. Every flagged collision links directly to the exact conflicting manuscript lines so you can audit without frustration.",
      telemetry: `Preliminary Test: ${SITE_CONFIG.benchmarkComparison.threadsparkDetected} with ${SITE_CONFIG.benchmarkComparison.threadsparkFalseAlarms} • Exact Line Links`,
      codeSample: `// Step 4: Continuity Collision Report #CNT-01 [Prototype (working)]
{
  "collisionType": "PHYSICAL_STATE_INVARIANT",
  "severity": "CRITICAL",
  "passageA": { "chapter": 4, "line": 82, "excerpt": "seal fell into the churning sludge, lost forever." },
  "passageB": { "chapter": 7, "line": 14, "excerpt": "Pressing the bronze relief of his family's seal..." },
  "suggestedResolution": "Have Elena pick lock or rewrite Ch 7 retrieval beat.",
  "confidenceScore": 0.98
}`,
    },
    {
      id: "staged-models",
      step: "05",
      name: "5. Staged Models",
      tag: "In development",
      headline: "Phase 1 Open-Weights Today • Phase 2 Author LoRA Adapters (Target: Q2 2027)",
      description:
        "We reject ungrounded claims of training foundation models from scratch. Today in Phase 1, our prototype runs on open-weight models for extraction and graph building. In Phase 2, authors will receive lightweight, portable style adapters (LoRA-style, ~25MB) trained solely on their prose that they own and can export.",
      telemetry: "~25MB Portable Adapter • Author Owns Weights (.safetensors) • Target: Q2 2027",
      codeSample: `// Step 5: Author LoRA Style Adapter Config (Illustrative payload) [In development - Target: Q2 2027]
{
  "authorId": "usr_elena_author_77",
  "baseModel": "Open-weight base model (e.g. Llama 3 / Mistral family)",
  "adapterFormat": "LoRA-PEFT (.safetensors)",
  "sizeBytes": 26843545,
  "sizeFormatted": "~25.6 MB portable weight file",
  "ownership": "100% Author-Owned (Downloadable / Portable)",
  "lexicalCadence": {
    "ttr": 0.76,
    "meanSentenceCadence": 18.4
  }
}`,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />
      <BetaApplicationModal isOpen={betaOpen} onClose={() => setBetaOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-brand-border/40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Cpu className="w-3.5 h-3.5 text-brand-violet" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              How Threadspark Works &bull; Technical Overview
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            Deterministic memory for long-form fiction.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Raw text isn&apos;t state. Threadspark combines neural document parsing, temporal state graphs, epistemic tracking, and real-time continuity verification into a reliable authoring companion.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBetaOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Join Design Partner Program ({getCohortLabel()})</span>
            </button>

            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-mono font-medium transition-all border border-white/10"
            >
              <BookOpen className="w-4 h-4 text-brand-champagne" />
              <span>Launch Studio Prototype</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5-STEP PIPELINE WALKTHROUGH */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          {/* Deterministic Definition Box */}
          <div className="mb-14 p-6 rounded-2xl glass-panel border border-brand-violet/40 bg-brand-charcoal/70">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-brand-violet/20 border border-brand-violet/30 text-brand-champagne flex items-center justify-center flex-shrink-0 mt-0.5">
                <Brain className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-brand-champagne font-semibold tracking-wider">
                  Core Architecture Definition: Deterministic Continuity
                </span>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  {SITE_CONFIG.deterministicDefinition}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-3 block">
              The Engine Pipeline
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              From Raw Manuscript to Deterministic Canon
            </h2>
            <p className="text-slate-400 text-sm">
              Click each step to inspect its algorithmic mechanics, internal schemas, and illustrative sample outputs. Every stage carries an explicit status tag: <span className="text-emerald-400 font-semibold font-mono">Prototype (working)</span>, <span className="text-amber-300 font-semibold font-mono">In development</span>, or <span className="text-purple-300 font-semibold font-mono">Vision</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Layer Selector */}
            <div className="lg:col-span-5 space-y-2.5">
              {workflowSteps.map((layer, idx) => {
                const isActive = activeStackLayer === idx;
                return (
                  <button
                    key={layer.id}
                    onClick={() => setActiveStackLayer(idx)}
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
                          layer.tag === "Prototype (working)"
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold"
                            : "bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold"
                        }`}
                      >
                        {layer.tag}
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
                    Step {workflowSteps[activeStackLayer].step} &bull; {workflowSteps[activeStackLayer].tag}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium mt-0.5">
                    {workflowSteps[activeStackLayer].headline}
                  </h3>
                </div>
                <span
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full border hidden sm:inline ${
                    workflowSteps[activeStackLayer].tag === "Prototype (working)"
                      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                      : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                  }`}
                >
                  {workflowSteps[activeStackLayer].tag}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {workflowSteps[activeStackLayer].description}
              </p>

              {/* Code / Data Schema Box */}
              <div className="rounded-2xl bg-brand-void/90 border border-brand-border/80 overflow-hidden font-mono text-xs">
                <div className="px-4 py-2.5 bg-brand-charcoal/80 border-b border-brand-border/60 text-slate-400 text-[11px] flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FileCode2 className="w-3.5 h-3.5 text-brand-violet" />
                    Internal Schema / Dispatch Pipeline
                  </span>
                  <span className="text-slate-400">Step {activeStackLayer + 1} of 5</span>
                </div>
                <pre className="p-4 text-brand-lavender overflow-x-auto text-[11px] leading-relaxed">
                  <code>{workflowSteps[activeStackLayer].codeSample}</code>
                </pre>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-brand-border flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Output: <strong>{workflowSteps[activeStackLayer].telemetry}</strong></span>
                <span className="text-slate-400 text-[10px]">Sample Manuscript</span>
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
                CAPABILITY A &bull; Contextual Ingestion &bull; Prototype (working)
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Contextual Ingestion
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                When you upload a manuscript, series backlist, or world atlas, Threadspark does not merely store raw tokens. It parses semantic hierarchies, entity registries, geographic systems, and chronological causality.
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
                <span>5-Pass Ingestion Sequence (Within Step 1 Ingestion)</span>
                <span className="text-emerald-400">Prototype (working)</span>
              </div>

              <div className="space-y-4">
                {[
                  { step: "Pass 1: Tokenization & Lexical Indexing", status: "Prototype (working)", detail: "36,420 words segmented into scene clusters (sample manuscript)" },
                  { step: "Pass 2: Entity & Character Extraction", status: "Prototype (working)", detail: "12 primary entities & 8 world locations identified" },
                  { step: "Pass 3: Chronological Causal Mapping", status: "Prototype (working)", detail: "24 interconnected plot events serialized along the timeline" },
                  { step: "Pass 4: Heuristic Stylometrics", status: "Prototype (working)", detail: "Type-token ratio, sentence variance, and dialogue cadence metrics" },
                  { step: "Pass 5: Private LoRA Style Fine-Tuning", status: "In development", detail: "Per-author ~25MB adapter training pipeline (Target: Q2 2027)" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-white">{item.step}</div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">{item.detail}</div>
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        item.status === "Prototype (working)"
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                          : "bg-amber-500/10 border border-amber-500/20 text-amber-300"
                      }`}
                    >
                      {item.status}
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
                  <span className="text-emerald-400">Prototype (working)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-2">
                    <span className="text-red-400 font-semibold block">Standard Context Windows</span>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      As conversation continues, earlier documents are dropped or truncated. Details from Book 1 fade from recall when drafting Book 4.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
                    <span className="text-emerald-400 font-semibold block">Threadspark Graph Topology</span>
                    <p className="text-slate-400 leading-relaxed font-sans">
                      Information is stored in persistent relational nodes. A Book 4 query traverses deterministic edges back to Book 1 without prompt window loss.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-brand-surface/70 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                  <span>Illustrative Graph Footprint: <strong>{SITE_CONFIG.demoStats.nodes} relational nodes</strong></span>
                  <span className="font-mono text-slate-400">Sample Manuscript</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                CAPABILITY B &bull; Persistent Memory &bull; Prototype (working)
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Persistent Story Memory
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Writing a fantasy or sci-fi saga takes years. Threadspark maintains an unbroken, evolving memory across revisions, brainstorming sessions, and new volumes.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Even if you pause a series for six months and return, the platform preserves your established lore, character physical states, and ongoing covenants without retraining.
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
              CAPABILITY C &bull; Stylometrics &bull; Staged Implementation
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Writing Style Intelligence
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
              Heuristic stylometrics (TTR, sentence length, dialogue density) are active in our working prototype. Full per-author LoRA fine-tuning is currently in development for Phase 2.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Metric Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {styleMetrics.map((metric, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStyleMetric(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                    activeStyleMetric === idx
                      ? "bg-brand-surface border-brand-violet text-white shadow-lg shadow-brand-violet/10"
                      : "bg-brand-dark/50 border-brand-border text-slate-400 hover:text-white hover:bg-brand-surface/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif text-base font-medium">{metric.title}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        metric.tag === "Prototype (working)"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      {metric.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2">{metric.description}</p>
                </button>
              ))}
            </div>

            {/* Metric Detail Viewer */}
            <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Stylometric Diagnostic &bull; {styleMetrics[activeStyleMetric].title}
                </span>
                <span
                  className={`text-xs font-mono px-2.5 py-0.5 rounded ${
                    styleMetrics[activeStyleMetric].tag === "Prototype (working)"
                      ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                  }`}
                >
                  {styleMetrics[activeStyleMetric].tag}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Diagnostic Breakdown</h4>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {styleMetrics[activeStyleMetric].description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-dark border border-brand-border space-y-2">
                  <div className="text-xs font-mono uppercase text-brand-champagne">Manuscript Reference</div>
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
                    <div className="text-brand-lavender font-semibold text-sm mt-0.5">&plusmn;6.2 Words</div>
                  </div>
                  <div className="p-3 rounded-lg bg-brand-surface/40 border border-white/5">
                    <div className="text-slate-400 text-[10px]">LORA WEIGHTS</div>
                    <div className="text-amber-300 font-semibold text-sm mt-0.5">Target: Q2 2027</div>
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
                CAPABILITY D &bull; Knowledge Relationships &bull; Prototype (working)
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Knowledge Relationships
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Nothing in a great story exists in a vacuum. Characters belong to factions, wield ancient artifacts, inhabit physical geography, and harbor historical grudges.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Threadspark traces multidirectional links between characters, locations, artifacts, and political decrees. Clicking any node surfaces its dependencies throughout the timeline.
              </p>
              <div className="flex gap-2">
                {["Marcus", "Elena", "Malakar", "Silas"].map((node) => (
                  <button
                    key={node}
                    onClick={() => setSelectedNode(node)}
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
                  <span className="text-brand-champagne">Node Inspector: {selectedNode}</span>
                  <span className="text-slate-400">Illustrative Sample Output</span>
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
                      Contradiction Detected #CNT-1 (Illustrative Sample)
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
                      Injury Inconsistency #CNT-2 (Illustrative Sample)
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
                CAPABILITY E &bull; Continuity Radar &bull; Prototype (working)
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                Continuity Intelligence
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Even great authors make continuity mistakes when managing complex world states. Threadspark operates like an indefatigable fact-checker and script supervisor.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed">
                The scanner flags item transfers, character eye colors, injury timelines, travel distances, and calendar counts across tens of thousands of words in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN COMMITMENTS (SPLIT: IN EFFECT TODAY VS. PLANNED) */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Architectural Standards
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Design Commitments
            </h2>
            <p className="text-slate-400 text-sm">
              We separate what is active in our working environment today from the architecture and security standards we are building toward.
            </p>
          </div>

          {/* Group 1: In Effect Today */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-brand-border/60">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                In Effect Today &bull; Active During Design Partner Cohort
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-white">1. Zero Public Model Training</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your manuscripts, notes, character dossiers, and scene revisions are never used to train public or third-party foundation models.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400 font-semibold">Active Today &bull; Enforced</div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-white">2. Deletion on Request</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You may request complete data deletion at any time. Manuscripts, extracted graphs, embeddings, and logs are permanently wiped {SITE_CONFIG.deletionWindow}.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400 font-semibold">Active Today &bull; {SITE_CONFIG.deletionWindow}</div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-white">3. Lossless Open Export</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Request an export of your entire story bible, timeline graph, and dossiers in open JSON, SQLite, and Markdown formats at any time.
                </p>
                <div className="pt-2 text-[11px] font-mono text-emerald-400 font-semibold">Active Today &bull; Zero Hostage Data</div>
              </div>
            </div>
          </div>

          {/* Group 2: Planned Architecture Targets */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-brand-border/60">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
                Planned Standards &bull; Architecture Targets
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-lavender flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-white">4. Author-Owned LoRA Weights</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In Phase 2, custom voice style adapters will be packaged into standard PEFT/LoRA weight files (.safetensors). Authors will own their weights and can download them.
                </p>
                <div className="pt-2 text-[11px] font-mono text-brand-champagne">Target: Q2 2027 &bull; In development</div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-white">5. Dedicated Per-Tenant KMS Encryption</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In our planned AWS migration, each partner&apos;s story graph, chunks, and embeddings will be encrypted at rest with dedicated per-tenant AWS KMS keys.
                </p>
                <div className="pt-2 text-[11px] font-mono text-purple-300">Target: Q2 2027 &bull; Architectural Goal</div>
              </div>

              <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-white">6. Private-Cloud &amp; VPC Deployments</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  For large writing studios and publisher backlists, our containerized backend is designed for isolated private VPC deployments with dedicated GPU compute.
                </p>
                <div className="pt-2 text-[11px] font-mono text-amber-300">Phase 3 Architecture &bull; Vision</div>
              </div>
            </div>
          </div>

          {/* PRELIMINARY INTERNAL EXPERIMENT (RENAMED FROM EMPIRICAL BENCHMARK) */}
          <div className="p-8 rounded-3xl bg-brand-charcoal/70 border border-brand-border space-y-6">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-brand-border gap-2">
              <span className="text-sm font-mono text-brand-champagne uppercase font-semibold">
                Technical Appendix: Preliminary Internal Experiment
              </span>
              <span className="text-xs font-mono text-slate-400">
                Internal Sanity Check &bull; Tested {SITE_CONFIG.benchmark.testDate} &bull; {SITE_CONFIG.benchmark.corpus}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-300 leading-relaxed font-sans">
              <div className="space-y-3">
                <h4 className="font-serif text-base text-white font-medium">Methodology &amp; Seeded Anomalies</h4>
                <p>
                  Internal sanity check, not independent. We inserted 20 defects into one public-domain novel (<em>{SITE_CONFIG.benchmark.corpus}</em>, {SITE_CONFIG.benchmark.words.toLocaleString()} words) across 4 categories:
                </p>
                <ul className="list-disc pl-4 space-y-1 font-mono text-[11px] text-slate-400">
                  <li><strong>Physical Invariants (5 defects):</strong> Holmes sustains a sprained wrist in Ch 3, then picks a heavy lock with both hands in Ch 5 without mention of healing.</li>
                  <li><strong>Epistemic Knowledge Leaks (5 defects):</strong> Dr. Watson refers to the Agra treasure chest being empty before the chest is unlocked in Ch 11.</li>
                  <li><strong>Inventory vanishing / carried items (5 defects):</strong> A character&apos;s pocket lantern vanishes from inventory during a pursuit sequence.</li>
                  <li><strong>Timeline slips (5 defects):</strong> A steam launch voyage described as taking 4 hours occurs during a 45-minute window in the city clock log.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif text-base text-white font-medium">Results vs. Baseline LLM Prompt</h4>
                <p>
                  We compared Threadspark with prompting {SITE_CONFIG.benchmark.baselineModel} with the full text, run on {SITE_CONFIG.benchmark.testDate} using the prompt: <em>&ldquo;{SITE_CONFIG.benchmark.baselinePrompt}&rdquo;</em>.
                </p>
                <div className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border font-mono text-[11px] space-y-2">
                  <div className="flex justify-between text-emerald-300">
                    <span>Threadspark Defects Detected:</span>
                    <span>{SITE_CONFIG.benchmarkComparison.threadsparkDetected} ({getBenchmarkMetrics().threadsparkPrecision} precision, {getBenchmarkMetrics().threadsparkRecall} recall)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Baseline LLM Defects Detected:</span>
                    <span>{SITE_CONFIG.benchmarkComparison.baselineDetected} ({getBenchmarkMetrics().baselinePrecision} precision, {getBenchmarkMetrics().baselineRecall} recall)</span>
                  </div>
                  <div className="flex justify-between text-brand-champagne">
                    <span>Threadspark False Alarms:</span>
                    <span>{SITE_CONFIG.benchmarkComparison.threadsparkFalseAlarms}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Baseline LLM False Alarms:</span>
                    <span>{SITE_CONFIG.benchmarkComparison.baselineFalseAlarms}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  Internal sanity check on 20 self-seeded errors, not an independent academic study. Conducted {SITE_CONFIG.benchmark.testDate}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mb-6">
            Ready to test these capabilities on a sample manuscript?
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Threadspark Studio is preloaded with the fictional manuscript of <em>The Glass Meridian</em> ({SITE_CONFIG.demoStats.words.toLocaleString()} words).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBetaOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Apply for Design Partner Program ({getCohortLabel()})</span>
            </button>

            <Link
              href="/studio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-mono font-medium transition-all border border-white/10"
            >
              <BookOpen className="w-4 h-4 text-brand-champagne" />
              <span>Explore Studio Prototype</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
