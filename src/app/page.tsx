"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";
import { SITE_CONFIG } from "@/lib/site";
import {
  Sparkles,
  ArrowRight,
  Brain,
  History,
  PenTool,
  Network,
  ShieldAlert,
  Layers,
  BookOpen,
  Compass,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Feather,
  FileText,
  Activity,
  Zap,
  Sliders,
  Check,
  RotateCcw,
  Scale,
  ShieldCheck,
  GitBranch,
  Lock,
  Database,
  Target,
  KeyRound,
  EyeOff,
  Mail,
  UserCheck,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export default function HomePage() {
  const [activePillar, setActivePillar] = useState<"understand" | "remember" | "create">("understand");
  const [activePreviewTab, setActivePreviewTab] = useState<"overview" | "characters" | "continuity" | "style">("overview");
  const [betaModalOpen, setBetaModalOpen] = useState(false);

  // Hero Interactive Simulation Terminal State
  const [heroSimActive, setHeroSimActive] = useState<"epistemic" | "continuity" | "style">("epistemic");
  const [heroOutput, setHeroOutput] = useState<{
    title: string;
    text: string;
    metricLabel?: string;
    metricVal?: string;
    badge?: string;
  }>({
    title: "Epistemic Tracking: Knowledge Leak Blocked (Chapter 6)",
    text: "Epistemic Violation Flagged: In Chapter 6, paragraph 18, Elena confronts Marcus about Archon Malakar's private execution decree. However, the story-state graph shows this decree is not signed until Chapter 7, and Elena does not learn of it until Chapter 8. Elena cannot know this in Chapter 6 without breaking narrative causality.",
    metricLabel: "Epistemic Integrity",
    metricVal: "Leak Intercepted (Ch 6 vs Ch 7)",
    badge: "Epistemic Radar • Active",
  });

  const handleHeroPreset = (type: "epistemic" | "continuity" | "style") => {
    setHeroSimActive(type);
    if (type === "epistemic") {
      setHeroOutput({
        title: "Epistemic Tracking: Knowledge Leak Blocked (Chapter 6)",
        text: "Epistemic Violation Flagged: In Chapter 6, paragraph 18, Elena confronts Marcus about Archon Malakar's private execution decree. However, the story-state graph shows this decree is not signed until Chapter 7, and Elena does not learn of it until Chapter 8. Elena cannot know this in Chapter 6 without breaking narrative causality.",
        metricLabel: "Epistemic Integrity",
        metricVal: "Leak Intercepted (Ch 6 vs Ch 7)",
        badge: "Epistemic Radar • Active",
      });
    } else if (type === "continuity") {
      setHeroOutput({
        title: "Temporal State Radar: Item & Physical State Collision",
        text: "Physical Invariant Alert: In Chapter 4, line 82, Marcus drops his grandfather's bronze seal into the bay sludge at Iron Quay. In Chapter 7, line 14, he unlocks the Solarium portal with it. Simultaneously, Elena's right forearm hairline fracture from Chapter 4 is ignored in Chapter 6 as she swings dual iron tongs.",
        metricLabel: "State Invariants",
        metricVal: "2 Collisions (Ch 4 vs Ch 6 & 7)",
        badge: "Temporal Graph • Flagged",
      });
    } else if (type === "style") {
      setHeroOutput({
        title: "Voice Fingerprint & Private LoRA Style Adapter",
        text: "Author Style Matrix Active: 0.76 Type-Token Ratio • 18.4 wps mean sentence cadence • High periodic trailing participial density. The private LoRA adapter preserves unique authorial syntax and tactile metaphors, preventing homogenization into corporate LLM prose.",
        metricLabel: "Voice Match",
        metricVal: "0.76 TTR (Private LoRA)",
        badge: "Sovereign Adapter • 100% Owned",
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />
      <BetaApplicationModal isOpen={betaModalOpen} onClose={() => setBetaModalOpen(false)} />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[550px] bg-brand-violet/15 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-champagne/5 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-brand-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-brand-lavender">
              Threadspark • The Source of Truth for Fiction
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-8">
            Long-form authors don&apos;t need a bigger chat window.{" "}
            <span className="block mt-2 italic font-light text-brand-champagne">
              They need a source of truth for their story.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Who exists, what&apos;s happened to whom, and who knows what—updating as you write, auditable, and sovereign. Built specifically for indie series authors, serial novelists, and worldbuilders whose continuity burden grows with every book.
          </p>

          {/* AI Stance Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-charcoal/70 border border-brand-border text-xs text-slate-300 max-w-xl mx-auto mb-10 text-left sm:text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong>Our stance:</strong> Threadspark does not ghostwrite your prose. It tracks state and catches continuity errors so readers don&apos;t.
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
            <Link
              href="/studio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Explore Studio Demo</span>
            </Link>

            <button
              onClick={() => setBetaModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Apply for Closed Beta</span>
            </button>
          </div>

          {/* INTERACTIVE HERO SIMULATION TERMINAL */}
          <div className="relative mx-auto max-w-5xl rounded-3xl glass-panel p-2 md:p-3 border border-white/10 shadow-2xl shadow-black/90">
            <div className="rounded-2xl overflow-hidden bg-brand-dark/95 border border-brand-border/70">
              {/* Studio Browser Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-brand-charcoal/90 border-b border-brand-border/60 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="font-mono ml-2 text-slate-400 hidden sm:inline">
                    threadspark-demo://the-glass-meridian.story-state
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Sample Manuscript Telemetry
                  </span>
                  <span className="text-slate-400 hidden md:inline">{SITE_CONFIG.demoManuscript.wordCount} words indexed</span>
                </div>
              </div>

              {/* Terminal Quick Presets */}
              <div className="px-5 py-3 bg-brand-void/60 border-b border-brand-border/40 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Select Preloaded Verification Test:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleHeroPreset("epistemic")}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                      heroSimActive === "epistemic"
                        ? "bg-brand-violet text-white shadow-sm font-semibold"
                        : "bg-brand-surface/60 text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    1. Epistemic Tracking (&ldquo;Who Knows What&rdquo;)
                  </button>
                  <button
                    onClick={() => handleHeroPreset("continuity")}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                      heroSimActive === "continuity"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm font-semibold"
                        : "bg-brand-surface/60 text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    2. Physical State &amp; Invariants
                  </button>
                  <button
                    onClick={() => handleHeroPreset("style")}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                      heroSimActive === "style"
                        ? "bg-brand-champagne/20 text-brand-champagne border border-brand-champagne/40 shadow-sm font-semibold"
                        : "bg-brand-surface/60 text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    3. Private LoRA Voice Fingerprint
                  </button>
                </div>
              </div>

              {/* Terminal Output Area */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 text-left items-stretch">
                {/* Left: Telemetry Panel */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-brand-border/50">
                    <span className="text-xs font-mono text-brand-champagne font-semibold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-brand-violet" />
                      {heroOutput.title}
                    </span>
                    {heroOutput.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-white/10 text-brand-lavender">
                        {heroOutput.badge}
                      </span>
                    )}
                  </div>

                  <div className="min-h-[110px] p-4 rounded-xl bg-brand-charcoal/80 border border-brand-border/80 flex items-center">
                    <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                      {heroOutput.text}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-void/50 border border-brand-border/50 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                    <span>Tested on sample political fantasy novel: <em>The Glass Meridian</em></span>
                    <Link href="/studio" className="text-brand-champagne hover:underline">
                      Inspect in Studio &rarr;
                    </Link>
                  </div>
                </div>

                {/* Right: Real-time Metric Indicators */}
                <div className="md:col-span-4 p-5 rounded-xl bg-brand-surface/70 border border-brand-border flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                      Continuity Integrity
                    </div>
                    <div className="font-serif text-2xl text-white font-medium">92% Health</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {heroOutput.metricLabel || "Metric"}:{" "}
                      <span className="text-brand-champagne font-mono font-semibold">
                        {heroOutput.metricVal || "Active"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-border/60">
                    <Link
                      href="/studio"
                      className="w-full py-2.5 px-4 rounded-lg bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white border border-brand-violet/40 text-xs font-medium transition-all flex items-center justify-between"
                    >
                      <span>Open Full Studio Demo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM: RAW TEXT ISN'T STATE */}
      <section className="py-24 border-t border-brand-border/40 relative bg-brand-dark/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              The Fundamental Flaw in Current AI Writing Tools
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-6">
              Raw text isn&apos;t state. Why a 1M-token prompt window still breaks your story.
            </h2>
            <div className="p-6 rounded-2xl bg-brand-charcoal/80 border border-brand-border/80 text-left mb-6 shadow-xl">
              <p className="text-slate-200 text-sm md:text-base leading-relaxed italic font-serif">
                &ldquo;Long-form authors don&apos;t need a bigger chat window. They need a source of truth for their story: who knows what, what&apos;s happened to whom, and when, that updates as they write, that they can audit, and that they own.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-brand-lavender font-semibold">The 1M Context Fallacy:</span>
                <span>Context windows let you paste a book. They cannot tell you if Mara&apos;s sword is broken in Chapter 14.</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Target Wedge: Built specifically for <strong className="text-white">indie and self-published series authors</strong>, serial web novelists, and lore architects—creators whose continuity burden compounds with every new chapter and volume.
            </p>
          </div>

          {/* 4 Sharp Failure Modes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-900/20 border border-red-500/20 text-red-400 flex items-center justify-center mb-5">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Raw Text Isn&apos;t State</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A 200k-token prompt window treats a book like unstructured token soup. It cannot track physical invariants: injuries heal without explanation, carried weapons vanish, and characters change age between scenes.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-red-300">
                Stateless Vector Limitation
              </div>
            </div>

            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-900/20 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                  <EyeOff className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Epistemic Knowledge Leaks</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The most embarrassing fiction error is an epistemic leak—a character referencing a murder, betrayal, or secret they haven&apos;t witnessed yet. Standard LLMs cannot differentiate who knows what at any specific point in story time.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-amber-300">
                Zero Epistemic Boundary
              </div>
            </div>

            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-900/20 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Re-Pasting Fatigue &amp; Drift</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Re-pasting an entire 80,000-word manuscript into Claude or ChatGPT for every revision is expensive, slow, and non-deterministic. It leaves no persistent, auditable record the author can verify or correct.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-purple-300">
                Stochastic &amp; Ephemeral
              </div>
            </div>

            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                  <Feather className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Homogenized Machine Prose</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  General foundation models overwrite your hard-won literary voice with bland, pooled prose filled with ubiquitous adjectives and corporate AI cadence.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-blue-300">
                Voice Degradation
              </div>
            </div>
          </div>

          {/* 6 CONCRETE CAPABILITIES OF THREADSPARK */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-2 block">
                The Concrete Mechanics
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-normal text-white">
                Six capabilities that make Threadspark a true source of truth.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-brand-violet/20 border border-brand-violet/30 text-brand-lavender flex items-center justify-center">
                  <History className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">1. Temporal Story-State Graph</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tracks state over story time: physical injuries, item locations, character ages, and faction alliances. We use embeddings for semantic retrieval, but the temporal graph is the deterministic source of truth.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center">
                  <KeyRound className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">2. Epistemic Tracking (&ldquo;Who Knows What&rdquo;)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The strongest guard against plot holes. Evaluates every scene against the knowledge boundary of present characters, preventing premature secret reveals before an in-world revelation occurs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                  <GitBranch className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">3. Story Time vs. Draft Time</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Versions every manuscript draft and lets authors safely branch counterfactuals (&ldquo;What if Silas dies in Chapter 9?&rdquo;) without corrupting your canonical story timeline or previous drafts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">4. Propose, Then Confirm</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated extraction can make mistakes, so the system proposes entities and timeline events for author approval. Every flagged collision links directly to the exact conflicting manuscript passages.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">5. Precision Over Recall</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A continuity tool that cries wolf gets turned off immediately. Our collision detector is aggressively tuned to prioritize precision over noisy false alarms—only alerting you when a real contradiction exists.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-brand-champagne/20 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center">
                  <Feather className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">6. Private Voice Fingerprint</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Captures cadence, diction, sentence rhythm, and dialogue habits as an inspectable profile powered by per-author lightweight style adapters (LoRA) whose weights you own and can run privately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETITIVE LANDSCAPE & STRATEGIC POSITIONING */}
      <section className="py-24 border-t border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Market Positioning (As of late 2026)
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Where Incumbents Stop vs. Where Threadspark Begins
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Tools like Sudowrite, Novelcrafter, and NovelAI rely on manual story bibles you must type by hand, while general chatbots lack persistent structure. Threadspark bridges the gap with automated, confirmed state tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-charcoal/60 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-dark/95 text-slate-400 uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Capability Dimension</th>
                    <th className="p-4 sm:p-5 text-slate-400">Manual Notebooks (Sudowrite / Novelcrafter / NovelAI)</th>
                    <th className="p-4 sm:p-5 text-red-400">General Chatbots (Claude / ChatGPT)</th>
                    <th className="p-4 sm:p-5 text-brand-champagne font-semibold bg-brand-violet/10">THREADSPARK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Story Knowledge</td>
                    <td className="p-4 sm:p-5 text-slate-400">Author must manually type and maintain the Story Bible, Codex, or Lorebook.</td>
                    <td className="p-4 sm:p-5 text-slate-400">No persistent storage; author must re-paste manuscript every session.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Auto-built from manuscript archive; author confirms proposed entities with 1 click.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Continuity &amp; State</td>
                    <td className="p-4 sm:p-5 text-slate-400">Keyword retrieval of user notes; no temporal state or injury tracking.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Unreliable search across long context; prone to hallucinations and missed facts.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Temporal story-state &amp; epistemic knowledge tracking; flags collisions with exact passage links.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Voice &amp; Stylometrics</td>
                    <td className="p-4 sm:p-5 text-slate-400">Generic fiction model or pooled user fine-tune.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Generic corporate tone; voice imitation fades over session.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Per-author private LoRA style adapter that learns cadence, syntax, and sensory habits.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Data Sovereignty</td>
                    <td className="p-4 sm:p-5 text-slate-400">Vendor cloud-hosted; subject to vendor terms and model providers.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Public cloud API with standard commercial data retention policies.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Sovereign by design: author owns adapter weights, zero training by default, private cloud ready.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SERIES AUTHOR CLOSED BETA (REPLACING UNGROUNDED PRICING TIERS) */}
      <section className="py-28 border-t border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Pilot Program
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Closed Beta for Series Authors
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We are deliberately staying small: selecting {SITE_CONFIG.betaCohortSize} indie and self-published series authors to stress-test automated story bibles and continuity verification on live manuscripts.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-brand-violet/50 shadow-2xl shadow-brand-violet/15 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                  100% Free During Beta • Concierge Setup
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                  What You Receive in the Beta Cohort:
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Concierge Manuscript Ingestion:</strong> Founder Ezekiel Heretta will personally help parse your previous series volumes to build your initial story-state graph.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Full Temporal &amp; Epistemic Radar:</strong> Real-time contradiction checking across all your books with exact passage citation links.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Absolute Privacy Guarantee:</strong> Zero third-party training, complete data export, and dedicated cloud sandboxing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Direct Engineering Line:</strong> Weekly check-ins to fix false alarms and tune the radar to your world rules.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-5 bg-brand-charcoal/90 p-6 md:p-8 rounded-2xl border border-brand-border space-y-5 text-center">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Current Cohort Size</div>
                  <div className="font-serif text-4xl text-brand-champagne font-medium">25 Authors</div>
                  <div className="text-xs text-slate-400">Fantasy, Sci-Fi &amp; Serialized Sagas</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setBetaModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-full bg-brand-violet hover:bg-purple-600 text-white font-semibold text-xs font-mono transition-all shadow-xl shadow-brand-violet/30"
                  >
                    Apply for the Closed Beta
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 font-mono">
                  Questions? Email Ezekiel directly at{" "}
                  <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">
                    {SITE_CONFIG.contactEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPIRICAL BENCHMARK & VALIDATION STUDY */}
      <section className="py-24 border-t border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Empirical Validation Study
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Ground-Truth Continuity Benchmark
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              We turn continuity claims from vendor promises into verifiable science. Here is how our pipeline performs against raw LLM prompt pasting.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-brand-border gap-2 text-xs font-mono">
              <span className="text-white font-semibold">
                Test Suite: {SITE_CONFIG.benchmark.author}&apos;s &ldquo;{SITE_CONFIG.benchmark.bookTitle}&rdquo; ({SITE_CONFIG.benchmark.wordCount} words)
              </span>
              <span className="text-emerald-400">{SITE_CONFIG.benchmark.seededErrors} Realistic Inserted Errors</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              We inserted {SITE_CONFIG.benchmark.seededErrors} deliberate continuity defects into a public-domain novel: 5 healed physical injuries without medical mention, 5 epistemic knowledge leaks (characters speaking of secrets before discovery), 5 disappearing carried weapons, and 5 timeline slips. Because we inserted these errors internally, this is an initial benchmark; a held-out test on a second novel is currently in progress.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Threadspark Detection (Recall)</div>
                <div className="font-serif text-2xl text-emerald-400 font-medium">
                  {SITE_CONFIG.benchmark.threadsparkRecall} ({SITE_CONFIG.benchmark.detectedErrors}/{SITE_CONFIG.benchmark.seededErrors})
                </div>
                <div className="text-[10px] text-slate-400 mt-1">vs. {SITE_CONFIG.benchmark.baselineLLMRecall} for 1M-token prompt pasting</div>
              </div>

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Precision (False Alarm Suppression)</div>
                <div className="font-serif text-2xl text-brand-champagne font-medium">
                  {SITE_CONFIG.benchmark.threadsparkPrecision}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">vs. {SITE_CONFIG.benchmark.baselineLLMPrecision} for raw LLM prompt baseline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-28 border-t border-brand-border/40 relative overflow-hidden bg-brand-void text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-violet/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-8">
            Your story has a history.{" "}
            <span className="italic font-light text-brand-champagne">Give it a memory that doesn&apos;t fade.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Step inside the interactive demonstration of Threadspark Studio or apply for the closed beta to run your own manuscripts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-2xl shadow-brand-violet/30 hover:shadow-brand-violet/50 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Enter Threadspark Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setBetaModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all border border-white/10"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Apply for Beta Cohort</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
