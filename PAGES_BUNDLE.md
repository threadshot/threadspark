# THREADSPARK — Complete Website Pages Bundle

> **Generated:** 2026-11-23 21:11:18  
> **Live Deployment:** [threadspark.kumirealms.workers.dev](https://threadspark.kumirealms.workers.dev)  
> **Repository:** [github.com/threadshot/threadspark](https://github.com/threadshot/threadspark)

This document aggregates all 7 web application pages and supporting components created for **Threadspark** (*The Source of Truth for Long-Form Fiction*). Each section includes the live route URL, functional purpose, key editorial highlights, and the complete source code.

## Table of Contents

### Application Pages
1. [Homepage / Landing (`/`)](#page-home)
2. [Platform & Architecture (How It Works) (`/platform`)](#page-platform)
3. [Use Cases & Author Workflows (`/use-cases`)](#page-use-cases)
4. [Interactive Studio Demonstration (`/studio`)](#page-studio)
5. [About, Founder Story & Company Facts (`/about`)](#page-about)
6. [Terms of Service (`/terms`)](#page-terms)
7. [Privacy Policy & Plain-Language Data Promise (`/privacy`)](#page-privacy)

### Core Supporting Components & Config
- [Site Configuration & Canonical Constants (`src/lib/site.ts`)](#srclibsitets)
- [Root Layout & Typography (`src/app/layout.tsx`)](#srcapplayouttsx)
- [Global Navigation (Navbar) (`src/components/Navbar.tsx`)](#srccomponentsnavbartsx)
- [Global Footer & Company Identity (`src/components/Footer.tsx`)](#srccomponentsfootertsx)
- [Design Partner Cohort Modal (`src/components/BetaApplicationModal.tsx`)](#srccomponentsbetaapplicationmodaltsx)
- [Command Palette (`src/components/CommandPalette.tsx`)](#srccomponentscommandpalettetsx)

---

<a id="page-home"></a>
## 1. Homepage / Landing

- **Route:** `/`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/](https://threadspark.kumirealms.workers.dev/)
- **Source File:** [`src/app/page.tsx`](src/app/page.tsx)
- **Overview & Key Copy:** Core value proposition for fiction authors, interactive hero story-state radar simulation, 6 core technical capabilities, competitive landscape vs manual bibles & LLM chat, 25-author design partner cohort invitation, preliminary internal experiment (19/20 defect detection), and deterministic continuity definition.

#### Source Code (`src/app/page.tsx`)

```tsx
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
  ExternalLink,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export default function HomePage() {
  const [betaModalOpen, setBetaModalOpen] = useState(false);

  // Hero Interactive Simulation Terminal State
  const [heroSimActive, setHeroSimActive] = useState<"epistemic" | "continuity" | "style">("epistemic");
  const [heroOutput, setHeroOutput] = useState<{
    title: string;
    text: string;
    metricLabel?: string;
    metricVal?: string;
    badgeText: string;
    badgeStatus: "prototype" | "in-development" | "vision";
  }>({
    title: "Epistemic Tracking: Knowledge Leak Intercepted (Chapter 6)",
    text: "Epistemic Violation Flagged: In Chapter 6, paragraph 18, Elena confronts Marcus about Archon Malakar's private execution decree. However, the story-state graph shows this decree is not signed until Chapter 7, and Elena does not learn of it until Chapter 8. Elena cannot know this in Chapter 6 without breaking narrative causality.",
    metricLabel: "Epistemic Boundary",
    metricVal: "Leak Intercepted (Ch 6 vs Ch 7)",
    badgeText: "Prototype (working)",
    badgeStatus: "prototype",
  });

  const handleHeroPreset = (type: "epistemic" | "continuity" | "style") => {
    setHeroSimActive(type);
    if (type === "epistemic") {
      setHeroOutput({
        title: "Epistemic Tracking: Knowledge Leak Intercepted (Chapter 6)",
        text: "Epistemic Violation Flagged: In Chapter 6, paragraph 18, Elena confronts Marcus about Archon Malakar's private execution decree. However, the story-state graph shows this decree is not signed until Chapter 7, and Elena does not learn of it until Chapter 8. Elena cannot know this in Chapter 6 without breaking narrative causality.",
        metricLabel: "Epistemic Boundary",
        metricVal: "Leak Intercepted (Ch 6 vs Ch 7)",
        badgeText: "Prototype (working)",
        badgeStatus: "prototype",
      });
    } else if (type === "continuity") {
      setHeroOutput({
        title: "Temporal State Radar: Item & Physical State Collision",
        text: "Physical Invariant Alert: In Chapter 4, line 82, Marcus drops his grandfather's bronze seal into the bay sludge at Iron Quay. In Chapter 7, line 14, he unlocks the Solarium portal with it. Simultaneously, Elena's right forearm hairline fracture from Chapter 4 is ignored in Chapter 6 as she swings dual iron tongs.",
        metricLabel: "State Invariants",
        metricVal: "2 Collisions (Ch 4 vs Ch 6 & 7)",
        badgeText: "Prototype (working)",
        badgeStatus: "prototype",
      });
    } else if (type === "style") {
      setHeroOutput({
        title: "Voice Fingerprint & Private LoRA Style Adapter",
        text: "Heuristic stylometric profile active (0.76 Type-Token Ratio, 18.4 wps mean sentence cadence). Full private LoRA adapter training pipeline (~25MB .safetensors) is currently in active development to preserve authorial cadence without pooled foundation model drift.",
        metricLabel: "Voice Adapter",
        metricVal: "LoRA Pipeline (~25MB)",
        badgeText: "In development",
        badgeStatus: "in-development",
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
              Threadspark &bull; The Source of Truth for Fiction
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
            Who exists, what&apos;s happened to whom, and who knows what—updating as you write, auditable, and sovereign. Built specifically for indie series authors, serial novelists, and worldbuilders whose continuity burden compounds with every book.
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
              <span>Explore Studio Prototype</span>
            </Link>

            <button
              onClick={() => setBetaModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Join Design Partner Program</span>
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
                    Illustrative Sample Output
                  </span>
                  <span className="text-slate-400 hidden md:inline">
                    {SITE_CONFIG.demoManuscript.wordCount} words preloaded
                  </span>
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
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        heroOutput.badgeStatus === "prototype"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                      }`}
                    >
                      {heroOutput.badgeText}
                    </span>
                  </div>

                  <div className="min-h-[110px] p-4 rounded-xl bg-brand-charcoal/80 border border-brand-border/80 flex items-center">
                    <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                      {heroOutput.text}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-void/50 border border-brand-border/50 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                    <span>Illustrative output on preloaded sample manuscript: <em>The Glass Meridian</em></span>
                    <Link href="/studio" className="text-brand-champagne hover:underline">
                      Inspect in Studio &rarr;
                    </Link>
                  </div>
                </div>

                {/* Right: Metric Indicators */}
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
                      <span>Open Studio Prototype</span>
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

            {/* Core Technical Definition: Deterministic */}
            <div className="p-5 sm:p-6 rounded-2xl bg-brand-charcoal/90 border border-brand-violet/40 text-left mb-8 shadow-xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-champagne block mb-1">
                Core Technical Definition &bull; What &ldquo;Deterministic&rdquo; Means
              </span>
              <p className="text-sm sm:text-base text-slate-200 font-serif leading-relaxed">
                &ldquo;{SITE_CONFIG.deterministicDefinition}&rdquo;
              </p>
              <p className="text-xs text-slate-400 font-mono pt-1">
                Extraction is language-model-assisted and author-confirmed; continuity checks that run over the confirmed graph are rule-based.
              </p>
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

          {/* 6 CONCRETE CAPABILITIES WITH UNIFORM 3 TAGS */}
          <div className="pt-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-2 block">
                The Concrete Mechanics
              </span>
              <h3 className="font-serif text-2xl md:text-4xl font-normal text-white mb-3">
                Six capabilities that make Threadspark a true source of truth.
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Every capability is labeled clearly as <span className="text-emerald-400 font-semibold">Prototype (working)</span>, <span className="text-amber-300 font-semibold">In development</span>, or <span className="text-purple-300 font-semibold">Vision</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Capability 1 */}
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-violet/20 border border-brand-violet/30 text-brand-lavender flex items-center justify-center">
                      <History className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                      Prototype (working)
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">1. Temporal Story-State Graph</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tracks state over story time: physical injuries, item locations, character ages, and faction alliances. We use embeddings for semantic retrieval, but the temporal graph is the deterministic source of truth.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Status: Functional in sample test suite
                </div>
              </div>

              {/* Capability 2 */}
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-300 flex items-center justify-center">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                      Prototype (working)
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">2. Epistemic Tracking (&ldquo;Who Knows What&rdquo;)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The strongest guard against plot holes. Evaluates scenes against the knowledge boundary of present characters, preventing premature secret reveals before an in-world revelation occurs.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Status: Intercepts premature secret leaks
                </div>
              </div>

              {/* Capability 3 */}
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
                      In development
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">3. Story Time vs. Draft Time</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Versions every manuscript draft and lets authors branch counterfactuals (&ldquo;What if Silas dies in Chapter 9?&rdquo;) without corrupting canonical timelines or prior volumes.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Status: Multi-draft branching in development
                </div>
              </div>

              {/* Capability 4 */}
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                      Prototype (working)
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">4. Propose, Then Confirm</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated extraction can make mistakes, so the system proposes entities and timeline events for author approval. Every flagged collision links directly to the exact conflicting manuscript passages.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Status: Author veto on every proposed entity
                </div>
              </div>

              {/* Capability 5 */}
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                      Prototype (working)
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">5. Precision Over Recall</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    A continuity tool that cries wolf gets disabled immediately. Our collision detector is aggressively tuned to prioritize precision over noisy false alarms—alerting you only when real contradictions exist.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Status: 95.0% precision in preliminary test
                </div>
              </div>

              {/* Capability 6 */}
              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-9 h-9 rounded-xl bg-brand-champagne/20 border border-brand-champagne/30 text-brand-champagne flex items-center justify-center">
                      <Feather className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
                      In development
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">6. Private Voice Fingerprint (LoRA)</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Heuristic stylometric profiling works today. Training per-author lightweight style adapters (LoRA, ~25MB .safetensors) that authors own and can deploy privately is currently in development for Phase 2.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-mono text-slate-400">
                  Status: Targeted for Q2 2027
                </div>
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
              Market Positioning (Late 2026)
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Where Incumbents Stop vs. Where Threadspark Begins
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Incumbent writing tools rely on manual story bibles you must type by hand, while general chatbots lack persistent state structure. Threadspark bridges the gap with automated, author-confirmed state tracking.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-charcoal/60 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-dark/95 text-slate-400 uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Capability Dimension</th>
                    <th className="p-4 sm:p-5 text-slate-400">Manual Story Bibles (Sudowrite / Novelcrafter / NovelAI)</th>
                    <th className="p-4 sm:p-5 text-slate-400">General Chatbots (Claude Projects / ChatGPT)</th>
                    <th className="p-4 sm:p-5 text-brand-champagne font-semibold bg-brand-violet/10">THREADSPARK</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Story Knowledge</td>
                    <td className="p-4 sm:p-5 text-slate-400">Sudowrite includes a Story Bible and Chapter Continuity feature to update notes; Novelcrafter uses a manual Codex; NovelAI uses a keyword Lorebook.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Semantic RAG search over uploaded project documents; no temporal state graph or entity timeline.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Auto-extracted from manuscript archive; author confirms proposed entities with 1 click. <span className="text-[10px] font-mono text-emerald-400 block mt-1">[Prototype (working)]</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Continuity &amp; State</td>
                    <td className="p-4 sm:p-5 text-slate-400">Sudowrite checks chapter summaries against character lists; Novelcrafter and NovelAI inject notes into prompt context. None maintain a temporal graph or track epistemic knowledge boundaries (&ldquo;who knows what, when&rdquo;).</td>
                    <td className="p-4 sm:p-5 text-slate-400">Can evaluate chapters when prompted, but recall degrades across full manuscripts and is prone to hallucinating non-errors.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Deterministic temporal story-state &amp; epistemic knowledge tracking; flags collisions with exact passage links. <span className="text-[10px] font-mono text-emerald-400 block mt-1">[Prototype (working)]</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Voice &amp; Stylometrics</td>
                    <td className="p-4 sm:p-5 text-slate-400">Sudowrite offers Muse and genre plugins; Novelcrafter supports prompt-level voice instructions via external LLMs; NovelAI offers fine-tuned fiction models.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Strong baseline prose generation, but defaults to corporate cadence unless actively guided each turn.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Heuristic stylometrics active in prototype; per-author private LoRA adapters (~25MB .safetensors) in development. <span className="text-[10px] font-mono text-amber-300 block mt-1">[In development - Q2 2027]</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Data Sovereignty</td>
                    <td className="p-4 sm:p-5 text-slate-400">Vendor cloud-hosted with standard commercial retention policies and third-party model dependencies.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Public cloud APIs governed by vendor commercial terms and data retention policies.</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium bg-brand-violet/5">
                      Architectural commitments: zero training on user drafts, author-owned adapter weights, local-first export. <span className="text-[10px] font-mono text-brand-champagne block mt-1">[Design commitments]</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-3 text-[11px] font-mono text-slate-400 border-t border-white/5 bg-brand-void/40 flex flex-wrap items-center justify-between gap-2">
              <span>Verified {SITE_CONFIG.competitorVerificationDate} against vendor documentation and public feature releases.</span>
              <span className="text-brand-champagne">Comparative Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PARTNER PROGRAM (REPLACING UNGROUNDED PRICING TIERS) */}
      <section className="py-28 border-t border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Early Access Cohort &bull; {SITE_CONFIG.designPartnerCohort.spotsTakenText} Places Taken
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Design Partner Program for Series Authors
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We are deliberately staying small: selecting {SITE_CONFIG.designPartnerCohortSize} indie and self-published series authors to stress-test automated story bibles and continuity verification on live manuscripts.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-brand-violet/50 shadow-2xl shadow-brand-violet/15 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                  {SITE_CONFIG.designPartnerCohort.spotsTakenText} places taken &bull; {SITE_CONFIG.designPartnerCohort.pricingNote}
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                  What You Receive as a Design Partner:
                </h3>

                <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-sans">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Concierge Manuscript Ingestion:</strong> Solo founder Ezekiel Heretta will personally help parse your previous series volumes to build your initial story-state graph.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Temporal &amp; Epistemic Radar Testing:</strong> Contradiction checking across your books with exact passage citation links in our prototype engine.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Design Commitments:</strong> Zero third-party training, complete data export, and dedicated cloud sandboxing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Direct Engineering Line:</strong> Weekly check-ins with the founder to tune false alarms and adapt to your world rules.
                    </span>
                  </li>
                </ul>

                {/* Business Model Clarification */}
                <div className="p-4 rounded-xl bg-brand-charcoal/90 border border-brand-border/80 space-y-2">
                  <div className="text-xs font-mono uppercase text-brand-champagne font-semibold">
                    Transparent Business Model
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {SITE_CONFIG.businessModel}
                  </p>
                </div>
              </div>

              <div className="md:col-span-5 bg-brand-charcoal/90 p-6 md:p-8 rounded-2xl border border-brand-border space-y-5 text-center">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Design Partner Status</div>
                  <div className="font-serif text-3xl sm:text-4xl text-brand-champagne font-medium">
                    {SITE_CONFIG.designPartnerCohort.spotsTakenText}
                  </div>
                  <div className="text-xs text-emerald-400 font-mono">
                    Apply below &bull; Ezekiel replies within {SITE_CONFIG.designPartnerCohort.replyWindow}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setBetaModalOpen(true)}
                    className="w-full py-3.5 px-6 rounded-full bg-brand-violet hover:bg-purple-600 text-white font-semibold text-xs font-mono transition-all shadow-xl shadow-brand-violet/30"
                  >
                    Apply for Design Partner Cohort
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

      {/* PRELIMINARY INTERNAL EXPERIMENT (RENAMED FROM BENCHMARK STUDY) */}
      <section className="py-24 border-t border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Preliminary Internal Experiment &bull; Tested {SITE_CONFIG.benchmark.testDate}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Preliminary Internal Experiment
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Internal sanity check, not independent. We inserted 20 deliberate continuity defects into one public-domain novel and compared our prototype against prompting {SITE_CONFIG.benchmark.baselineModel} with the full manuscript.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-brand-border gap-2 text-xs font-mono">
              <span className="text-white font-semibold">
                Test Corpus: {SITE_CONFIG.benchmark.author}&apos;s &ldquo;{SITE_CONFIG.benchmark.bookTitle}&rdquo; ({SITE_CONFIG.benchmark.wordCount} words)
              </span>
              <span className="text-emerald-400">{SITE_CONFIG.benchmark.seededErrors} Self-Seeded Errors (Sanity Check, {SITE_CONFIG.benchmark.testDate})</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              We inserted {SITE_CONFIG.benchmark.seededErrors} defects into one public-domain novel (5 healed physical injuries without medical mention, 5 epistemic knowledge leaks, 5 disappearing carried weapons, and 5 timeline slips). We compared our prototype with prompting {SITE_CONFIG.benchmark.baselineModel} with the full text, run on {SITE_CONFIG.benchmark.testDate}. Threadspark found 19 of 20 with 1 false alarm; the baseline found 9 of 20 with 13 false alarms. A held-out test on 3 external manuscripts is in progress, and we will publish the method and results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Threadspark Defect Detection</div>
                <div className="font-serif text-2xl text-emerald-400 font-medium">
                  {SITE_CONFIG.benchmarkComparison.threadsparkDetected}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">vs. {SITE_CONFIG.benchmarkComparison.baselineDetected} for raw LLM prompt pasting</div>
              </div>

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">False Alarm Count</div>
                <div className="font-serif text-2xl text-brand-champagne font-medium">
                  {SITE_CONFIG.benchmarkComparison.threadsparkFalseAlarms}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">vs. {SITE_CONFIG.benchmarkComparison.baselineFalseAlarms} for raw LLM baseline</div>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-slate-400 text-center">
              Internal sanity check, not independent. A held-out test on 3 external manuscripts is in progress, and we will publish the method and results.
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
            Step inside the interactive demonstration of Threadspark Studio or apply for the design partner program to run your own manuscripts.
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
              <span>Apply for Design Partner Program</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

```

---

<a id="page-platform"></a>
## 2. Platform & Architecture (How It Works)

- **Route:** `/platform`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/platform](https://threadspark.kumirealms.workers.dev/platform)
- **Source File:** [`src/app/platform/page.tsx`](src/app/platform/page.tsx)
- **Overview & Key Copy:** Detailed 5-step engine pipeline (Ingestion, Story Bible Propose, Author Confirm, Continuous Verification, Staged LoRA Models), interactive stylometrics analyzer, knowledge relationship inspector, continuity contradiction reports, design commitments (zero training, author-owned LoRA weights), and internal experiment appendix.

#### Source Code (`src/app/platform/page.tsx`)

```tsx
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
import { SITE_CONFIG } from "@/lib/site";

export default function PlatformPage() {
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
      codeSample: `// Step 1: Propose-Then-Confirm Ingestion Pipeline [Prototype (working)]
interface ProposedStoryEntity {
  id: "char-marcus-thorne";
  name: "Marcus Thorne";
  tier: "Primary Protagonist";
  authorConfirmed: true;
  introducedIn: "Chapter 1: The First Tremblor";
  epistemicBoundary: {
    knowsSolariumKeystoneSecret: false,
    revelationChapter: 7
  };
  physicalInvariants: {
    injuries: [],
    carriedItems: ["Grandfather's Bronze Seal (Lost Ch 4)"]
  };
}`,
    },
    {
      id: "propose",
      step: "02",
      name: "2. Propose Story Bible",
      tag: "Prototype (working)",
      headline: "Temporal Story-State Graph & Epistemic Tracking (\"Who Knows What, When\")",
      description:
        "Tracks physical state over story time: injuries, carried possessions, locations, ages, and alliances. Deterministically tracks knowledge propagation so characters never leak secrets they haven't learned yet. Embeddings handle search, but the temporal graph is the source of truth.",
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
      codeSample: `// Step 5: Author LoRA Style Adapter Config [In development - Target: Q2 2027]
const authorStyleAdapter = {
  authorId: "usr_elena_author_77",
  baseModel: "OpenWeight-8B-v2",
  adapterFormat: "LoRA-PEFT (.safetensors)",
  sizeBytes: 26843545, // ~25.6 MB portable weight file
  ownership: "100% Author-Owned (Downloadable / Self-Hostable)",
  lexicalCadence: { ttr: 0.76, sentenceCadence: 18.4 }
};`,
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
              <span>Join Design Partner Program (25 Authors)</span>
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
                01 / INGESTION &bull; Prototype (working)
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
                <span>Multi-Pass Ingestion Pipeline (Prototype Demo)</span>
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
                02 / PERSISTENCE &bull; Prototype (working)
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
              03 / STYLOMETRICS &bull; Staged Implementation
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
                04 / RELATIONS &bull; Prototype (working)
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
                05 / CONTINUITY &bull; Prototype (working)
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

      {/* DESIGN COMMITMENTS (REPLACING UNGROUNDED SHIPPED GUARANTEES) */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-3 block">
              Architectural Standard
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Design Commitments
            </h2>
            <p className="text-slate-400 text-sm">
              These are the architectural principles and security standards we are building toward across every stage of the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">1. Zero Training by Default</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your manuscripts, notes, character dossiers, and scene revisions will never be used to train public foundation models or shared across tenants.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">Core Design Commitment</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-lavender flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">2. Author-Owned LoRA Weights</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                In Phase 2, custom voice fingerprints are packaged into standard PEFT/LoRA weight files (.safetensors). Authors own their weights and can export them anytime.
              </p>
              <div className="pt-2 text-[11px] font-mono text-brand-champagne">Target: Q2 2027</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">3. Private-Cloud &amp; VPC Deployments</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Own models strengthen data sovereignty only when they run inside the author&apos;s environment. We design our containerized backend for private VPCs.
              </p>
              <div className="pt-2 text-[11px] font-mono text-amber-300">Phase 3 Architecture</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">4. Per-Tenant Encryption</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Manuscript chunks, vector indices, and graph relational topologies are designed to be encrypted at rest with per-tenant AES-256 GCM keys.
              </p>
              <div className="pt-2 text-[11px] font-mono text-purple-300">Architectural Goal</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">5. Lossless Export &amp; Deletion</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                One click exports your entire story bible, timeline graph, and dossiers into open JSON, SQLite, and Markdown. Deletion permanently purges all project data.
              </p>
              <div className="pt-2 text-[11px] font-mono text-blue-300">Zero Hostage Data</div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-white">6. Training Data Provenance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Threadspark ensures any future genre base models in Phase 3 are trained strictly on verified public domain or explicitly compensated, opt-in author data.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-400">Verifiable Provenance</div>
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
                  <li><strong>Physical Invariant (5 defects):</strong> Holmes sustains a sprained wrist in Ch 3, then picks a heavy lock with both hands in Ch 5 without mention of healing.</li>
                  <li><strong>Epistemic Leak (5 defects):</strong> Dr. Watson refers to the Agra treasure chest being empty before the chest is unlocked in Ch 11.</li>
                  <li><strong>Inventory Vanishing (5 defects):</strong> A character&apos;s pocket lantern vanishes from inventory during a pursuit sequence.</li>
                  <li><strong>Timeline Slip (5 defects):</strong> A steam launch voyage described as taking 4 hours occurs during a 45-minute window in the city clock log.</li>
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
                    <span>{SITE_CONFIG.benchmarkComparison.threadsparkDetected}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Baseline LLM Defects Detected:</span>
                    <span>{SITE_CONFIG.benchmarkComparison.baselineDetected}</span>
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
                  A held-out test on 3 external manuscripts is in progress, and we will publish the method and results.
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
              <span>Apply for Design Partner Program (25 Authors)</span>
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

```

---

<a id="page-use-cases"></a>
## 3. Use Cases & Author Workflows

- **Route:** `/use-cases`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/use-cases](https://threadspark.kumirealms.workers.dev/use-cases)
- **Source File:** [`src/app/use-cases/page.tsx`](src/app/use-cases/page.tsx)
- **Overview & Key Copy:** Dedicated author workflows tailored to 4 creative segments: Indie Series Authors (compounding backlist continuity), Serial & Web Novelists (high-velocity weekly deadlines), Narrative Game Teams & TTRPG GMs (branching consequence state trees), and Speculative Worldbuilders (hard magic systems and geopolitical treaties).

#### Source Code (`src/app/use-cases/page.tsx`)

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";
import {
  BookOpen,
  Compass,
  FileText,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Quote,
  Activity,
  History,
  Users,
  Feather,
  GitBranch,
  ShieldCheck,
  Gamepad2,
  Scroll,
  UserCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function UseCasesPage() {
  const [selectedCase, setSelectedCase] = useState<string>("series-authors");
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [betaOpen, setBetaOpen] = useState(false);

  const useCases = [
    {
      id: "series-authors",
      icon: BookOpen,
      badge: "Primary Wedge • Multi-Book Sagas",
      title: "Indie Series Authors",
      subtitle: "Where continuity burden compounds across Books 1 through 10.",
      description:
        "Series authors are our sharpest customer wedge because continuity burden grows exponentially with each release. By Book 4, an author must remember dozens of character wounds, broken oaths, carried relics, and secret revelations made three years ago. Threadspark reads your backlist and maintains an automatic, author-confirmed living state machine.",
      keyFeatures: [
        "Cross-book character dossiers and physical invariant tracking (injuries, lost items)",
        "Epistemic boundaries preventing characters from leaking secrets they haven't witnessed",
        "Chronological timeline graph linking plot dependencies across volumes",
        "1-click passage links to conflicting lines in previous drafts and books",
        "Phase 2 author LoRA style adapter preserving voice across multi-year sagas (In development)",
      ],
      studioDeepLink: "/studio?tab=continuity",
      scenarios: [
        {
          title: "Tracking Secrets Across a 3-Book Arc",
          challenge: "In Book 1, Mara secretly poisons the imperial regent. In Book 3, an allied commander references the poison during a war council before Mara ever confesses.",
          resolution: "Threadspark flags an Epistemic Knowledge Collision in the prototype, showing that the allied commander was never present during the poisoning or privy to the discovery.",
          metric: "Epistemic Boundary Enforced",
        },
        {
          title: "Physical State & Carried Weapon Invariant",
          challenge: "In Book 2 Chapter 14, Marcus shatters his grandfather's bronze rapier. In Book 3 Chapter 2, a rough scene mentions him drawing that same rapier.",
          resolution: "The engine highlights the exact Chapter 14 passage where the blade was destroyed, recommending he draw his iron cutlass instead.",
          metric: "Physical Invariant Restored",
        },
      ],
    },
    {
      id: "serial-novelists",
      icon: Feather,
      badge: "High Velocity • Serialization",
      title: "Serial & Web Novelists",
      subtitle: "Weekly release pressure where reader-facing retcons are fatal.",
      description:
        "Serialized writers on Royal Road, Substack, and Patreon produce 5,000 to 15,000 words a week under fierce public scrutiny. Retconning in public ruins reader trust. Threadspark gives serialized authors immediate pre-flight continuity audits before each chapter drops.",
      keyFeatures: [
        "Rapid chapter ingestion checking against the canon graph in seconds",
        "Power scaling and magic rule invariants verification",
        "Character relationship tension matrix that tracks public reader knowledge",
        "Draft branching to test Patreon-exclusive alternative timelines",
        "Zero vendor lock-in with 100% open JSON/Markdown chapter export",
      ],
      studioDeepLink: "/studio?tab=knowledge-graph",
      scenarios: [
        {
          title: "Pre-Publishing Continuity Sanity Check",
          challenge: "Drafting Chapter 142 of an ongoing web serial at 2:00 AM before a weekly release deadline.",
          resolution: "A 10-second audit catches that an antagonist was banished to the Northern Reach 40 chapters earlier and cannot casually appear at a tavern in the Capital.",
          metric: "Zero Public Retcon Needed",
        },
        {
          title: "Magic Cost System Verification",
          challenge: "A protagonist casts high-tier gravity inversion without burning ether stones.",
          resolution: "The radar flags a rule invariant established in Chapter 12: gravity manipulation requires active mineral consumption.",
          metric: "Hard Magic Rule Maintained",
        },
      ],
    },
    {
      id: "narrative-games",
      icon: Gamepad2,
      badge: "Branching Canon • Narrative Studios",
      title: "Narrative Game Teams & TTRPG GMs",
      subtitle: "Managing branching storylines, player state, and world consequence.",
      description:
        "Game writers and dungeon masters manage branching trees where player choices create diverging states of the world. Threadspark tracks state invariants across divergent story branches so dialogue trees and quest logic remain bulletproof.",
      keyFeatures: [
        "Branching state-graph tracking player decisions across narrative nodes",
        "Faction relationship matrix adjusting disposition deterministically",
        "Interactive geography lore linking game locations to key historical events",
        "Quest objective vs. consequence audits for multi-outcome encounters",
        "Exportable canon dossiers formatted for game design documents",
      ],
      studioDeepLink: "/studio?tab=knowledge-graph",
      scenarios: [
        {
          title: "Branching Quest Consequence Audit",
          challenge: "If the player executes the Iron Quay smuggler in Chapter 3, ensure Act 4 dialogue trees don't generate quests dependent on that smuggler's fleet.",
          resolution: "Threadspark flags a Branch Invariant Violation in the Act 4 quest outline, routing dialogue to the smuggler's vengeful first mate instead.",
          metric: "Branching Invariant Enforced",
        },
        {
          title: "Tabletop Campaign Lore Querying",
          challenge: "During an unscripted tabletop session, players ask an obscure magistrate about a 200-year-old border treaty.",
          resolution: "The GM queries Threadspark Studio, which instantly surfaces the exact terms of the Treaty of Iron Quay with associated NPC grudges.",
          metric: "Instant Canon Retrieval",
        },
      ],
    },
    {
      id: "worldbuilders",
      icon: Compass,
      badge: "Speculative Worlds & Lore",
      title: "Speculative Worldbuilders",
      subtitle: "Build consistent magic systems, fictional histories, and political maps.",
      description:
        "Worldbuilding requires rigorous internal coherence. If your magic system has strict gravitational rules in one kingdom, those rules cannot be casually broken in another without explanation. Threadspark turns your world bible into a living, queryable cosmos.",
      keyFeatures: [
        "Canon rule-enforcement engine for magic and technology constraints",
        "Faction relationship matrix tracking diplomatic treaties and feuds",
        "Interactive geography lore linking locations to key historical events",
        "Chronological timeline expansion testing centuries of cause-and-effect",
        "Custom glossary generation with phonetic and etymological consistency",
      ],
      studioDeepLink: "/studio?tab=knowledge-graph",
      scenarios: [
        {
          title: "Validating Magic System Constraints",
          challenge: "Ether resonance requires ambient silicate glass to transmit across distances.",
          resolution: "Threadspark alerts you when an underground dungeon scene in Chapter 6 uses wireless communication without mentioning crystal relays or mineral veins.",
          metric: "Rule Invariant Enforced",
        },
        {
          title: "Faction Treaty History Inspection",
          challenge: "Determining whether the Sunk Hollows dissidents would legally shelter Marcus.",
          resolution: "Instantly surfaces the Treaty of Iron Quay from 40 winters ago, highlighting an obscure extradition immunity clause Marcus's father signed.",
          metric: "Canon Precedent Verified",
        },
      ],
    },
  ];

  const currentCase = useCases.find((c) => c.id === selectedCase) || useCases[0];
  const CurrentIcon = currentCase.icon;
  const activeScenario = currentCase.scenarios[activeScenarioIdx] || currentCase.scenarios[0];

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />
      <BetaApplicationModal isOpen={betaOpen} onClose={() => setBetaOpen(false)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-brand-border/40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Built For Fiction Writers &amp; Narrative Creators
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            How long-form authors rely on Threadspark.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Whether you are maintaining continuity across an 8-book fantasy saga, publishing weekly serialized chapters, or worldbuilding a complex sci-fi setting, Threadspark is your deterministic source of truth.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {useCases.map((c) => {
              const Icon = c.icon;
              const isSelected = selectedCase === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(c.id);
                    setActiveScenarioIdx(0);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isSelected
                      ? "bg-brand-violet text-white shadow-lg shadow-brand-violet/25 font-semibold border border-brand-violet"
                      : "glass-pill text-slate-400 hover:text-white border border-brand-border"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{c.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVE USE CASE SHOWCASE */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Overview & Capabilities */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  <span>{currentCase.badge}</span>
                </div>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                {currentCase.title}
              </h2>

              <p className="text-brand-champagne font-serif text-lg italic">
                &ldquo;{currentCase.subtitle}&rdquo;
              </p>

              <p className="text-slate-300 text-sm leading-relaxed font-light">
                {currentCase.description}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Dedicated Capabilities:
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                  {currentCase.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-violet flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setBetaOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-violet hover:bg-purple-600 text-xs font-mono font-medium text-white transition-all shadow-md"
                >
                  <UserCheck className="w-3.5 h-3.5 text-brand-champagne" />
                  <span>Apply for Design Partner Cohort</span>
                </button>

                <Link
                  href={currentCase.studioDeepLink}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-surface hover:bg-white/10 border border-brand-border text-xs font-mono text-white transition-all shadow-sm"
                >
                  <span>Test in Studio Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-champagne" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive Scenario Simulation Box */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Live Continuity Scenario Simulation
                  </span>
                  <span className="text-xs font-mono text-brand-champagne">
                    Illustrative Sample Output
                  </span>
                </div>

                {/* Scenario Tabs */}
                <div className="flex gap-2">
                  {currentCase.scenarios.map((scen, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScenarioIdx(idx)}
                      className={`flex-1 p-3 rounded-xl border text-left text-xs transition-all ${
                        activeScenarioIdx === idx
                          ? "bg-brand-surface border-brand-violet text-white shadow-md font-medium"
                          : "bg-brand-dark/70 border-brand-border text-slate-400 hover:text-white"
                      }`}
                    >
                      <div className="font-serif font-medium truncate">{scen.title}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">Scenario 0{idx + 1}</div>
                    </button>
                  ))}
                </div>

                {/* Scenario Execution Box */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-red-400 font-semibold block">
                      The Creator&apos;s Continuity Challenge:
                    </span>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {activeScenario.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Threadspark Resolution:
                    </span>
                    <p className="text-xs text-slate-200 font-sans leading-relaxed">
                      {activeScenario.resolution}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-surface/70 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Performance Target: <strong>{activeScenario.metric}</strong></span>
                    <span className="text-brand-champagne">Deterministic Rule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHETYPE GRID COMPARISON */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Dedicated Fiction Workflows
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Built for storytellers who care about canon.
            </h2>
            <p className="text-slate-400 text-sm">
              Explore how each creator archetype integrates with the same persistent memory engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(c.id);
                    setActiveScenarioIdx(0);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="glass-panel-interactive p-6 rounded-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-lavender flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-brand-violet/10 text-brand-lavender border border-brand-violet/20">
                        {c.badge.split("•")[0].trim()}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-white font-medium mb-2">{c.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{c.subtitle}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-brand-champagne font-mono">
                    <span>Inspect Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal mb-6">
            Protect your fictional universe from continuity decay.
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            Threadspark Studio lets you test character dossiers, epistemic boundaries, and continuity radars with the preloaded manuscript of <em>The Glass Meridian</em> ({SITE_CONFIG.demoStats.words.toLocaleString()} words).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBetaOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Apply for 25-Author Design Partner Program</span>
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

```

---

<a id="page-studio"></a>
## 4. Interactive Studio Demonstration

- **Route:** `/studio`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/studio](https://threadspark.kumirealms.workers.dev/studio)
- **Source File:** [`src/app/studio/page.tsx`](src/app/studio/page.tsx)
- **Overview & Key Copy:** Interactive in-browser SaaS studio preloaded with the fictional manuscript 'The Glass Meridian' (36,420 words, 8 chapters, 12 characters, 148 state nodes). Features interactive SVG Knowledge Graph, Epistemic Boundary Radar, Live Diff Rewriter, and Presenter Tour.

#### Source Code (`src/app/studio/page.tsx`)

```tsx
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { StudioSidebar, StudioTab } from "@/components/studio/StudioSidebar";
import { StudioHeader } from "@/components/studio/StudioHeader";
import { ContextualAIPanel } from "@/components/studio/ContextualAIPanel";
import { PresenterTourBar } from "@/components/studio/PresenterTourBar";
import { CommandPalette } from "@/components/CommandPalette";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";
import { Sparkles, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

// Views
import { OverviewView } from "@/components/studio/views/OverviewView";
import { DocumentIntelligenceView } from "@/components/studio/views/DocumentIntelligenceView";
import { StyleIntelligenceView } from "@/components/studio/views/StyleIntelligenceView";
import { CharacterIntelligenceView } from "@/components/studio/views/CharacterIntelligenceView";
import { KnowledgeGraphView } from "@/components/studio/views/KnowledgeGraphView";
import { ContinuityView } from "@/components/studio/views/ContinuityView";
import { AIWorkspaceView } from "@/components/studio/views/AIWorkspaceView";
import { CreativeStudioView } from "@/components/studio/views/CreativeStudioView";
import { SettingsView } from "@/components/studio/views/SettingsView";

function StudioContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<StudioTab>("overview");
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isPresenterTourOpen, setIsPresenterTourOpen] = useState(false);
  const [betaOpen, setBetaOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Sync tab with URL query parameter if provided
  useEffect(() => {
    const tabParam = searchParams.get("tab") as StudioTab;
    if (tabParam && [
      "overview",
      "document-intelligence",
      "style-intelligence",
      "characters",
      "knowledge-graph",
      "continuity",
      "ai-workspace",
      "creative-studio",
      "settings",
    ].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleResetDemo = () => {
    setActiveTab("overview");
    setResetKey((prev) => prev + 1);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewView key={`ov-${resetKey}`} onNavigateTab={setActiveTab} />;
      case "document-intelligence":
        return <DocumentIntelligenceView key={`doc-${resetKey}`} />;
      case "style-intelligence":
        return <StyleIntelligenceView key={`sty-${resetKey}`} />;
      case "characters":
        return <CharacterIntelligenceView key={`char-${resetKey}`} />;
      case "knowledge-graph":
        return <KnowledgeGraphView key={`kg-${resetKey}`} />;
      case "continuity":
        return <ContinuityView key={`cnt-${resetKey}`} />;
      case "ai-workspace":
        return <AIWorkspaceView key={`ai-${resetKey}`} />;
      case "creative-studio":
        return <CreativeStudioView key={`cs-${resetKey}`} />;
      case "settings":
        return <SettingsView key={`set-${resetKey}`} />;
      default:
        return <OverviewView onNavigateTab={setActiveTab} />;
    }
  };

  return (
    <div
      className={`min-h-screen bg-brand-void text-slate-100 flex overflow-hidden ${
        isPresentationMode ? "presentation-mode" : ""
      }`}
    >
      <CommandPalette />

      {/* 1. Left Navigation Sidebar */}
      <StudioSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isPresentationMode={isPresentationMode}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. Main Central Application Shell */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Interactive Sample Manuscript Notice Banner */}
        <div className="bg-gradient-to-r from-brand-violet/20 via-brand-surface to-brand-charcoal px-4 py-2 border-b border-brand-violet/30 flex items-center justify-between text-xs font-mono select-none flex-shrink-0 z-30">
          <div className="flex items-center gap-2 text-slate-300 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-white font-medium">Illustrative Prototype Demo:</span>
            <span className="text-slate-300 truncate">
              Preloaded with <em>{SITE_CONFIG.demoManuscript.title}</em> ({SITE_CONFIG.demoManuscript.wordCount} words &bull; {SITE_CONFIG.demoManuscript.characters} character dossiers &bull; {SITE_CONFIG.demoManuscript.stateNodes} graph nodes).
            </span>
          </div>
          <button
            onClick={() => setBetaOpen(true)}
            className="ml-3 px-3 py-1 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-[11px] font-medium transition-all flex items-center gap-1.5 flex-shrink-0 shadow-sm"
          >
            <UserCheck className="w-3 h-3 text-brand-champagne" />
            <span>Apply to analyze your series &rarr;</span>
          </button>
        </div>

        {/* Top Header */}
        <StudioHeader
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isPresentationMode={isPresentationMode}
          onTogglePresentationMode={() => setIsPresentationMode(!isPresentationMode)}
          isRightPanelOpen={isRightPanelOpen}
          onToggleRightPanel={() => setIsRightPanelOpen(!isRightPanelOpen)}
          onResetDemo={handleResetDemo}
          onStartPresenterTour={() => setIsPresenterTourOpen(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />

        {/* Center Workspace View Scroll Area */}
        <main className="flex-1 overflow-y-auto bg-brand-void/90 relative pb-20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-brand-violet/5 blur-[120px] pointer-events-none rounded-full" />
          {renderActiveView()}
        </main>
      </div>

      {/* 3. Right Persistent Contextual AI Panel */}
      {isRightPanelOpen && (
        <div className="hidden xl:block">
          <ContextualAIPanel
            activeTab={activeTab}
            onSelectTab={setActiveTab}
          />
        </div>
      )}

      {/* 4. Guided Feature Tour Overlay Dock */}
      <PresenterTourBar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpen={isPresenterTourOpen}
        onClose={() => setIsPresenterTourOpen(false)}
      />

      <BetaApplicationModal isOpen={betaOpen} onClose={() => setBetaOpen(false)} />
    </div>
  );
}

export default function StudioPage() {
  return (
    <>
      {/* Search Crawler and Non-JavaScript Accessible Summary */}
      <noscript>
        <div className="p-8 max-w-4xl mx-auto bg-slate-900 text-slate-100 font-sans space-y-6">
          <h1 className="text-3xl font-serif">Threadspark Studio — Interactive Prototype</h1>
          <p className="text-base text-slate-300">
            Threadspark is a deterministic continuity engine and living story bible for fiction authors. This studio prototype is preloaded with the complete sample political fantasy manuscript of <em>The Glass Meridian</em> (36,420 words, 8 chapters).
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-purple-300">Preloaded Prototype Capabilities:</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
              <li><strong>Document Ingestion Pipeline:</strong> Multi-pass lexical parsing, entity identification, and chronological event mapping.</li>
              <li><strong>Stylometrics &amp; Authorship Profiling:</strong> 0.76 Type-Token Ratio, 18.4 avg sentence length, dialogue cadence analysis.</li>
              <li><strong>Character Dossiers &amp; Epistemic Bounds:</strong> 12 character profiles tracking secrets, alliances, and knowledge propagation.</li>
              <li><strong>Relational Knowledge Graph:</strong> 148 state nodes connecting characters, locations, carried artifacts, and political covenants.</li>
              <li><strong>Continuity Radar:</strong> Detection of physical state invariants (broken seal reappearance, ignored forearm fracture) with links to conflicting passages.</li>
            </ul>
          </div>
          <p className="text-sm text-slate-400">
            To participate in the 25-author Design Partner Program, contact founder Ezekiel Heretta at kumirealms@gmail.com.
          </p>
        </div>
      </noscript>

      <Suspense fallback={<div className="min-h-screen bg-brand-void flex items-center justify-center text-xs font-mono text-slate-400">Loading Threadspark Studio Prototype...</div>}>
        <StudioContent />
      </Suspense>
    </>
  );
}

```

---

<a id="page-about"></a>
## 5. About, Founder Story & Company Facts

- **Route:** `/about`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/about](https://threadspark.kumirealms.workers.dev/about)
- **Source File:** [`src/app/about/page.tsx`](src/app/about/page.tsx)
- **Overview & Key Copy:** Founder background (Ezekiel Heretta, solo founder & engineer based in Seattle), company facts, the origin story ('Raw text is not state'), exact deterministic definition, transparent business model & transition plan (free during cohort, subscription post-cohort with 30-day notice), honest 3-phase roadmap, and what we are building next.

#### Source Code (`src/app/about/page.tsx`)

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Cpu,
  Feather,
  Heart,
  Globe,
  BookOpen,
  Anchor,
  GitBranch,
  Lock,
  Layers,
  CheckCircle2,
  Clock,
  Mail,
  User,
  Check,
  UserCheck,
  ExternalLink,
  DollarSign,
  Activity,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function AboutPage() {
  const [betaOpen, setBetaOpen] = useState(false);

  const principles = [
    {
      title: "Context Sovereignty",
      description:
        "Your characters, lore, manuscripts, and outlines belong solely to you. We believe in encrypted, local-first storage, private graph topologies, and an absolute commitment against training public foundation models on private author creations.",
    },
    {
      title: "Symbiosis, Not Ghostwriting",
      description:
        "The goal of AI in fiction should never be to press a button and generate a generic novel. The goal is to preserve memory, enforce continuity, track state, and empower human authors to manage sprawling multi-book universes without fear of plot holes.",
    },
    {
      title: "Deterministic Rule Verification",
      description: SITE_CONFIG.deterministicDefinition,
    },
    {
      title: "Stylistic Sanctity",
      description:
        "An author's voice is their signature. We reject homogenized machine prose. In our staged model architecture, style is captured through private, author-owned lightweight adapters—never pooled into shared foundation models.",
    },
  ];

  const strategicRisks = [
    {
      risk: "Authors' Distrust of AI",
      detail: "Many serious fiction writers view AI as generic ghostwriting that threatens creative integrity and plagiarizes author labor.",
      mitigation: "Positioned strictly as a continuity supervisor and memory engine. Threadspark never ghostwrites your books; text generation is strictly optional and our core product is deterministic state tracking.",
    },
    {
      risk: "Extraction Errors & Hallucinations",
      detail: "Automated NLP pipelines can misidentify character aliases, confuse dialogue attributions, or flag false continuity bugs.",
      mitigation: "Propose-then-confirm workflow gives authors final veto on every entity and timeline event. Continuity checks run as fixed rules over confirmed graphs, minimizing crying-wolf false alarms.",
    },
    {
      risk: "Incumbents Adding Auto-Extraction",
      detail: "Competitors with existing distribution (Sudowrite, Novelcrafter) could attempt to automate their manual story bibles.",
      mitigation: "We compete on temporal story-state & epistemic boundaries ('who knows what, when'), author-owned LoRA weights, and private data sovereignty—not just static character notes.",
    },
    {
      risk: "Inference & Training Unit Economics",
      detail: "High-VRAM GPU compute can quickly drain runway if fine-tuning full foundation models per author.",
      mitigation: "Staged architecture: lightweight PEFT/LoRA adapters (~25MB) served over shared base weights on AWS EC2 GPU instances with smart caching, keeping unit economics sustainable.",
    },
    {
      risk: "Data-Rights & Copyright Concerns",
      detail: "Scrutiny over scraped training data is intensifying across literary communities.",
      mitigation: "Strict zero-training policy on user manuscripts. Any future shared base models are trained strictly on verified public domain or compensated opt-in works.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />
      <BetaApplicationModal isOpen={betaOpen} onClose={() => setBetaOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-brand-border/40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Feather className="w-3.5 h-3.5 text-brand-champagne" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              About Threadspark &bull; Founder &amp; Mission
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            We believe stories deserve an infallible memory.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-6">
            Threadspark was founded to solve the hardest technical problem in long-form storytelling: keeping track of complex canon, physical states, and character secrets across multi-book sagas.
          </p>

          <p className="text-xs font-mono text-emerald-400 mb-10">
            {SITE_CONFIG.designPartnerSpotsTaken} of {SITE_CONFIG.designPartnerTotalSpots} design partner places taken. Apply below and Ezekiel will reply within {SITE_CONFIG.replyWindow}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBetaOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Apply for Design Partner Program</span>
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

      {/* FOUNDER & COMPANY FACTS SECTION */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                <User className="w-3.5 h-3.5" />
                <span>The Founder &amp; Operator</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Ezekiel Heretta
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Solo founder, software engineer, and speculative fiction reader building deterministic continuity tools.
              </p>

              {/* Company Facts Box */}
              <div className="p-5 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-3 font-mono text-xs">
                <div className="text-brand-champagne font-semibold uppercase tracking-wider text-[11px]">
                  Company facts
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Operator:</span>
                    <span>{SITE_CONFIG.founder.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Location:</span>
                    <span>{SITE_CONFIG.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Founded:</span>
                    <span>{SITE_CONFIG.foundedDate}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Funding Stage:</span>
                    <span className="text-emerald-400">Self-funded (Zero outside investors)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Company Domain:</span>
                    <span>{SITE_CONFIG.companyDomain}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Direct Email:</span>
                    <a href={`mailto:${SITE_CONFIG.companyEmail}`} className="text-brand-champagne underline">
                      {SITE_CONFIG.companyEmail}
                    </a>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-slate-400">Founder Profile:</span>
                    <a
                      href={SITE_CONFIG.founder.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-lavender underline inline-flex items-center gap-1"
                    >
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="text-slate-400 text-[11px] pt-1">
                  {SITE_CONFIG.companyIdentity}
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                When generative AI first exploded into creative writing, almost every product rushed toward the same flawed premise: <em className="text-white">&ldquo;Press a button, get a novel.&rdquo;</em>
              </p>
              <p>
                As a software engineer who reads sprawling fantasy and sci-fi series, Ezekiel knew that real authors don&apos;t want an AI ghostwriter. Writing the words is the joy of the craft. The actual nightmare begins when you reach Book 4 of an eight-book series:
              </p>
              <blockquote className="p-4 rounded-xl bg-brand-surface/70 border-l-2 border-brand-violet text-slate-200 font-serif italic text-base">
                &ldquo;Did Marcus lose his bronze seal in Chapter 4 of Book 2, or was it retrieved? When Mara poisoned the regent in Book 1, was Commander Vance in the council room? Why did Elena use her fractured arm to swing an axe three days later?&rdquo;
              </blockquote>
              <p>
                Authors today spend hundreds of hours maintaining manual lore bibles in Scrivener, Notion, or World Anvil. When they try using general chatbots with 1-million-token context windows, the chatbot hallucinates, confuses drafts, and fails to differentiate between what a character knows versus what the reader knows.
              </p>
              <p>
                <strong className="text-white font-medium">Raw text is not state.</strong> Threadspark was engineered to be the missing deterministic state machine for fiction: reading your whole archive, proposing a structured story bible that you confirm, and actively catching continuity collisions with links to the exact conflicting lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT DETERMINISTIC MEANS */}
      <section className="py-16 border-b border-brand-border/40 relative bg-brand-void">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-charcoal/60 border border-brand-violet/40 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne block">
              Core Definition &bull; What &ldquo;Deterministic&rdquo; Means
            </span>
            <p className="font-serif text-xl sm:text-2xl text-white font-medium leading-relaxed">
              &ldquo;{SITE_CONFIG.deterministicDefinition}&rdquo;
            </p>
            <p className="text-xs text-slate-400 font-mono pt-1">
              Language models handle extraction; deterministic rule sets handle verification.
            </p>
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL SECTION */}
      <section className="py-20 border-b border-brand-border/40 relative bg-brand-dark/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 rounded-3xl bg-brand-charcoal/80 border border-brand-border space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Business Model &amp; Pricing Transparency</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              Our Business Model &amp; Transition Plan
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {SITE_CONFIG.businessModel}
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap items-center gap-4 border-t border-white/5">
              <span>&bull; No surprise charges</span>
              <span>&bull; 30-day advance notice</span>
              <span>&bull; Export your data anytime in open formats</span>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST ROADMAP & WHAT WE ARE BUILDING NEXT */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Architectural Roadmap
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              What Works Today vs. What&apos;s Planned
            </h2>
            <p className="text-slate-400 text-sm">
              We reject ungrounded AI claims. Every milestone is marked with its exact implementation status: <span className="text-emerald-400 font-semibold font-mono">Prototype (working)</span>, <span className="text-amber-300 font-semibold font-mono">In development</span>, or <span className="text-purple-300 font-semibold font-mono">Vision</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SITE_CONFIG.roadmap.map((m) => (
              <div
                key={m.phase}
                className={`glass-panel p-6 rounded-2xl border flex flex-col justify-between ${
                  m.tag === "Prototype (working)"
                    ? "border-brand-violet/50 shadow-lg shadow-brand-violet/10"
                    : "border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-semibold text-brand-champagne">
                      {m.phase}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        m.tag === "Prototype (working)"
                          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold"
                          : m.tag === "In development"
                          ? "bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold"
                          : "bg-purple-500/10 border border-purple-500/20 text-purple-300 font-semibold"
                      }`}
                    >
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{m.description}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Target: {m.period}
                </div>
              </div>
            ))}
          </div>

          {/* Development Activity Line */}
          <div className="p-6 rounded-2xl bg-brand-charcoal/80 border border-brand-border text-xs text-slate-300 font-mono leading-relaxed flex items-start gap-3">
            <Activity className="w-4 h-4 text-brand-champagne mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-white block mb-1">Development Activity:</strong>
              {SITE_CONFIG.buildingNext}
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC RISKS & CONCRETE MITIGATIONS */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-2 block">
              Transparent Risk Architecture
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Risks We Name &amp; How We Mitigate Them
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Credibility means confronting hard platform realities openly. Here are the five real risks in creative software and our exact engineering answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicRisks.map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-amber-300 uppercase font-semibold">
                      Risk #{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-medium mb-2">{item.risk}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.detail}</p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1 font-semibold">
                    Engineered Mitigation:
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-2 block">
              Ethical &amp; Engineering Commitments
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
              Our Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/10 space-y-3">
                <span className="text-xs font-mono text-brand-champagne">0{idx + 1} // PRINCIPLE</span>
                <h3 className="font-serif text-2xl text-white font-medium">{pr.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed font-light">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="py-28 relative text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender flex items-center justify-center mx-auto mb-8">
            <Anchor className="w-6 h-6 text-brand-champagne" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-normal leading-snug mb-6">
            &ldquo;We don&apos;t just remember what you write. We remember what your characters know.&rdquo;
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
            Experience how persistent story-state tracking transforms the horizon of what you can write.
          </p>
          <p className="text-xs font-mono text-brand-champagne mb-8">
            {SITE_CONFIG.designPartnerSpotsTaken} of {SITE_CONFIG.designPartnerTotalSpots} cohort spots taken. Ezekiel replies within {SITE_CONFIG.replyWindow}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBetaOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <UserCheck className="w-4 h-4 text-brand-champagne" />
              <span>Apply for Design Partner Program</span>
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

```

---

<a id="page-terms"></a>
## 6. Terms of Service

- **Route:** `/terms`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/terms](https://threadspark.kumirealms.workers.dev/terms)
- **Source File:** [`src/app/terms/page.tsx`](src/app/terms/page.tsx)
- **Overview & Key Copy:** Comprehensive terms of service: operator identification (Ezekiel Heretta), effective date (Nov 23, 2026), 100% author manuscript & adapter IP ownership, design partner program scope, 48-hour data deletion on request, acceptable use, and limitation of liability.

#### Source Code (`src/app/terms/page.tsx`)

```tsx
"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Scale className="w-3.5 h-3.5 text-brand-champagne" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Legal &bull; Terms of Service
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
            Terms of Service
          </h1>

          <div className="text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-brand-border">
            <span>Effective Date: November 23, 2026</span> &bull;{" "}
            <span>Operator &amp; Controller: {SITE_CONFIG.founder.name} ({SITE_CONFIG.location})</span>
          </div>

          <div className="space-y-10 text-slate-300 text-sm leading-relaxed font-light">
            {/* 1. Overview */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">1. Overview and Program Scope</h2>
              <p>
                These Terms of Service govern your access to and use of Threadspark, operated by {SITE_CONFIG.founder.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;Threadspark&rdquo;), based in {SITE_CONFIG.location}. Threadspark is currently operating as a prototype under an active Design Partner Program for indie and self-published fiction authors.
              </p>
              <p>
                By applying for or participating in the Design Partner Program, accessing our prototype studio, or submitting manuscript materials, you agree to these Terms.
              </p>
            </section>

            {/* 2. Intellectual Property & Manuscript Ownership */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">2. Author Ownership &amp; Intellectual Property</h2>
              <p>
                <strong className="text-white">You retain 100% ownership of your manuscripts, characters, worldbuilding lore, and all creative works.</strong> Threadspark claims zero copyright, ownership, or licensing interest in your manuscripts.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 font-mono text-xs">
                <li>We do not train public, pooled, or commercial foundation models on your submitted text.</li>
                <li>Your manuscripts are processed solely to generate your private story-state graph, entity dossiers, and continuity verification flags.</li>
                <li>If you participate in our Phase 2 voice-fingerprinting features, all resulting lightweight style adapter weights (.safetensors) are your exclusive property.</li>
              </ul>
            </section>

            {/* 3. Design Partner Cohort & Service Terms */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">3. Design Partner Cohort &amp; Pricing Notice</h2>
              <p>
                {SITE_CONFIG.businessModel}
              </p>
              <p>
                Participation in the cohort is free of charge. You may terminate your participation at any time by notifying us, and your data will be purged immediately upon request.
              </p>
            </section>

            {/* 4. Prototype Nature & Disclaimers */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">4. Prototype Nature &amp; Disclaimers</h2>
              <p>
                Threadspark is currently an early-stage software prototype. The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While our continuity radar is engineered for precision, we do not guarantee that the software will detect every continuity discrepancy or that all flagged collisions represent errors. Authors remain solely responsible for the final publication of their manuscripts.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Threadspark or its founder be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or manuscripts resulting from your access to or inability to use the service.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="p-6 rounded-2xl bg-brand-charcoal/70 border border-brand-border space-y-2">
              <h3 className="font-serif text-lg text-white font-medium">6. Contact &amp; Questions</h3>
              <p className="text-xs text-slate-400">
                For questions regarding these Terms of Service or to submit requests:
              </p>
              <div className="font-mono text-xs text-slate-300">
                <div>Operator: {SITE_CONFIG.founder.name}</div>
                <div>Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a> / <a href={`mailto:${SITE_CONFIG.companyEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.companyEmail}</a></div>
                <div>Location: {SITE_CONFIG.location}</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

---

<a id="page-privacy"></a>
## 7. Privacy Policy & Plain-Language Data Promise

- **Route:** `/privacy`
- **Live URL:** [https://threadspark.kumirealms.workers.dev/privacy](https://threadspark.kumirealms.workers.dev/privacy)
- **Source File:** [`src/app/privacy/page.tsx`](src/app/privacy/page.tsx)
- **Overview & Key Copy:** Complete Privacy Policy with plain-language commitments: zero training on author manuscripts, isolated per-partner environments, dedicated local compute today with committed migration to AWS VPCs by Q2 2027, 48-hour permanent deletion guarantee, and data controller contact.

#### Source Code (`src/app/privacy/page.tsx`)

```tsx
"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, HardDrive, FileText, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Privacy Policy &amp; Data Promise
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
            Privacy Policy
          </h1>

          <div className="text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-brand-border flex flex-wrap items-center justify-between gap-2">
            <span>Effective Date: November 23, 2026</span>
            <span>Data Controller: {SITE_CONFIG.founder.name} ({SITE_CONFIG.location})</span>
          </div>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12">
            For fiction authors, an unpublished manuscript is an irreplaceable creative asset. Here is our exact, binding privacy policy and data governance standard.
          </p>

          <div className="space-y-12 text-sm text-slate-300 leading-relaxed font-light">
            {/* 1. Controller & Scope */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">1. Data Controller and Contact</h2>
              <p>
                The data controller for Threadspark is solo founder &amp; engineer {SITE_CONFIG.founder.name}, operating from {SITE_CONFIG.location}.
              </p>
              <p>
                For any privacy questions, access requests, or permanent deletion demands, contact Ezekiel directly at:
              </p>
              <div className="p-4 rounded-xl bg-brand-charcoal/80 border border-brand-border font-mono text-xs text-slate-200 space-y-1">
                <div>Primary Privacy Contact: <a href={`mailto:${SITE_CONFIG.privacyEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.privacyEmail}</a></div>
                <div>Alternative Direct Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a></div>
                <div>Entity: {SITE_CONFIG.companyIdentity}</div>
              </div>
            </section>

            {/* 2. Isolated Infrastructure & Exact AWS Plan */}
            <section className="p-8 rounded-3xl bg-brand-charcoal/70 border border-brand-violet/40 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                Cohort Architecture &amp; Hosting Environment
              </div>
              <h2 className="font-serif text-2xl text-white font-medium">
                Manuscript Processing &amp; AWS Infrastructure Roadmap
              </h2>
              <blockquote className="p-4 rounded-xl bg-brand-dark/90 border-l-2 border-brand-violet text-slate-200 font-sans leading-relaxed text-sm">
                During the design partner cohort, the founder supervises all manuscript ingestion and verification. Manuscripts are processed over encrypted connections in an isolated environment for each partner and are never pooled with other authors&apos; work. Today this environment runs on dedicated local workstation compute with per-partner encrypted containers. We plan to move it to AWS, with a separate account or VPC per partner, by Q2 2027.
              </blockquote>
            </section>

            {/* 3. What We Collect and Why */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-white font-medium">2. Information We Collect and Process</h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <strong className="text-white font-mono block mb-1">A. Partner Information</strong>
                  <span>Your name, email address, series genre, volume count, and current continuity workflow submitted through our Design Partner application form. Used solely to manage cohort communications and onboarding.</span>
                </div>
                <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <strong className="text-white font-mono block mb-1">B. Manuscript &amp; Lore Files</strong>
                  <span>EPUB, DOCX, Markdown, or Scrivener text submitted for continuity processing. Used strictly to extract entity dossiers, temporal state graphs, and continuity collision reports.</span>
                </div>
                <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <strong className="text-white font-mono block mb-1">C. Technical Telemetry &amp; Error Logs</strong>
                  <span>Internal model diagnostic counts (e.g. token segment counts, runtime per pass) without recording manuscript text into shared monitoring services.</span>
                </div>
              </div>
            </section>

            {/* 4. Strict Zero-Training Guarantee */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">3. Strict Zero Public Model Training</h2>
              <p>
                <strong className="text-white">We do not train, fine-tune, or evaluate public or third-party foundation models on your submitted manuscripts.</strong>
              </p>
              <p>
                Any future genre-specific base models developed by Threadspark (Phase 3) will be trained exclusively on verified public domain literature or works provided with explicit, compensated author consent.
              </p>
            </section>

            {/* 5. Data Retention & Permanent Deletion Requests */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">4. Data Retention and Deletion Rights</h2>
              <p>
                <strong className="text-white">Retention Period:</strong> Your manuscripts and generated story graphs are retained only for the active duration of the Design Partner Program to provide continuity checking across drafts, or until you request deletion.
              </p>
              <p>
                <strong className="text-white">One-Click Deletion:</strong> You have the right to request immediate and complete deletion of your manuscripts, extracted story-state graphs, vector embeddings, and all diagnostic logs at any time. To execute a deletion request, email <a href={`mailto:${SITE_CONFIG.privacyEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.privacyEmail}</a> or <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a> with the subject &ldquo;Data Deletion Request&rdquo;. Requests are processed and permanently wiped within 48 hours.
              </p>
              <p>
                <strong className="text-white">Lossless Export:</strong> You may request or download an export of your extracted story bible and graph in open JSON, SQLite, or Markdown formats at any time.
              </p>
            </section>

            {/* 6. Legal Rights (GDPR & CCPA) */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">5. Your Legal Rights</h2>
              <p>
                Depending on your location, you may have rights under the GDPR, UK Data Protection Act, or California Consumer Privacy Act (CCPA), including the right to access, rectify, port, or erase your personal information. Because we collect minimal personal data and maintain direct founder contact, any request can be addressed directly by emailing our data controller.
              </p>
            </section>

            {/* 7. Subprocessors & Security */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">6. Security Measures</h2>
              <p>
                All data transfers occur over TLS 1.3 encrypted connections. During the prototype stage, data is maintained on hardware-encrypted disks with per-partner isolated environments.
              </p>
            </section>
          </div>

          <div className="pt-12 border-t border-brand-border/60 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/terms" className="text-xs font-mono text-brand-champagne hover:underline">
              &rarr; Review Terms of Service
            </Link>
            <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

---

## Core Supporting Components & Configuration

<a id="srclibsitets"></a>
### Site Configuration & Canonical Constants (`src/lib/site.ts`)

- **File:** [`src/lib/site.ts`](src/lib/site.ts)

```ts
export const SITE_CONFIG = {
  name: "Threadspark",
  tagline: "The Source of Truth for Long-Form Fiction",
  description:
    "Threadspark reads your manuscripts and builds a living, versioned model of your story: who exists, what's happened to them, and who knows what.",
  companyDomain: "threadspark.app",
  companyType: "Self-funded / Bootstrapped (No outside investors or accelerators)",
  foundedDate: "July 2025",
  foundedYear: 2025,
  location: "Seattle, United States",
  companyIdentity:
    "Threadspark is operated by Ezekiel Heretta, based in Seattle, United States. Founded July 2025. Self-funded, with no outside investors or accelerators. Contact: ezekiel@threadspark.app.",
  founder: {
    name: "Ezekiel Heretta",
    role: "Solo Founder & Engineer",
    bio: "Software engineer and speculative fiction reader building deterministic continuity tools for novelists managing compounding universes.",
    linkedIn: "https://www.linkedin.com/in/ezekiel-heretta",
  },
  contactEmail: "kumirealms@gmail.com",
  companyEmail: "ezekiel@threadspark.app",
  privacyEmail: "privacy@threadspark.app",

  // Design Partner Program Status
  designPartnerCohortSize: 30,
  designPartnerSpotsTaken: 14,
  designPartnerTotalSpots: 30,
  replyWindow: "2 business days",
  programName: "Design Partner Program",
  designPartnerCohort: {
    spotsTaken: 14,
    totalSpots: 30,
    spotsTakenText: "14 of 30",
    replyWindow: "2 business days",
    pricingNote: "100% Free During Cohort • Concierge Onboarding",
  },

  // Business Model & Pricing
  businessModel:
    "Threadspark is free for the 25-author design partner cohort. After the cohort we plan to offer a monthly subscription for individual authors, with a free trial on one book. We will announce prices at least 30 days before the cohort ends.",

  // Benchmark counts comparison
  benchmarkComparison: {
    threadsparkDetected: "19 of 20 defects detected",
    threadsparkFalseAlarms: "1 false alarm",
    baselineDetected: "9 of 20 defects detected",
    baselineFalseAlarms: "13 false alarms",
    testDate: "October 2026",
    corpus: "Arthur Conan Doyle's The Sign of the Four (43,400 words)",
  },

  // Exact definition of deterministic
  deterministicDefinition:
    "Threadspark uses language models to propose characters, events and secrets from your manuscript, and you confirm each one. The continuity checks then run as fixed rules over your confirmed story-state graph, so the same graph produces the same flags.",

  // Sample manuscript preloaded in the prototype
  demoManuscript: {
    title: "The Glass Meridian",
    genre: "Political Fantasy",
    wordCount: "36,420",
    chapters: 8,
    characters: 12,
    events: 24,
    stateNodes: 148,
  },
  demoStats: {
    words: 36420,
    chapters: 8,
    characters: 12,
    events: 24,
    nodes: 148,
  },

  // Preliminary internal sanity check on Arthur Conan Doyle's "The Sign of the Four" (43,400 words)
  benchmark: {
    bookTitle: "The Sign of the Four",
    corpus: "The Sign of the Four",
    author: "Arthur Conan Doyle",
    wordCount: "43,400",
    words: 43400,
    seededErrors: 20,
    detectedErrors: 19,
    falseAlarms: 1,
    threadsparkPrecision: "95.0%",
    threadsparkRecall: "95.0%",
    baselineLLMPrecision: "40.9%",
    baselineLLMRecall: "45.0%",
    testDate: "October 2026",
    baselineModel: "Claude 3.5 Sonnet / GPT-4o (Full-Text Prompt)",
    baselinePrompt:
      "Identify all continuity errors, physical contradictions, timeline slips, and knowledge inconsistencies in this manuscript.",
    baselineDetected: 9,
    baselineFalseAlarms: 13,
    heldOutTestDescription:
      "A held-out test on 3 external author manuscripts is in progress, and we will publish the method and results.",
  },

  competitorVerificationDate: "November 2026",

  // Roadmap & activity
  buildingNext:
    "What we are building next: expanding our temporal state parser to support multi-draft branching comparisons and building export adapters for Scrivener and standard Markdown vaults. Next quarter we are preparing our infrastructure migration to dedicated AWS VPC environments per design partner.",

  roadmap: [
    {
      phase: "Phase 1",
      tag: "Prototype (working)" as const,
      period: "2026",
      status: "Functional Prototype",
      title: "Core Ingestion & Deterministic Story Graph",
      description:
        "Manuscript ingestion, propose-then-confirm entity extraction, temporal state tracking (injuries, items, locations), and epistemic boundary leak detection on open-weight base models.",
    },
    {
      phase: "Phase 2",
      tag: "In development" as const,
      period: "Target: Q2 2027",
      status: "In Development",
      title: "Per-Author LoRA Style Adapters",
      description:
        "Lightweight (~25MB) PEFT/LoRA style adapters trained solely on an author's backlist. Authors own their adapter weights (.safetensors) with 100% portable sovereignty.",
    },
    {
      phase: "Phase 3",
      tag: "Vision" as const,
      period: "Target: 2028",
      status: "Research / Vision",
      title: "Consensual Genre Bases & Studio Sandbox",
      description:
        "Genre- and trope-tuned base models built strictly on public-domain or explicitly compensated, opt-in author archives with verified legal provenance.",
    },
  ],
};

```

---

<a id="srcapplayouttsx"></a>
### Root Layout & Typography (`src/app/layout.tsx`)

- **File:** [`src/app/layout.tsx`](src/app/layout.tsx)

```tsx
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

```

---

<a id="srccomponentsnavbartsx"></a>
### Global Navigation (Navbar) (`src/components/Navbar.tsx`)

- **File:** [`src/components/Navbar.tsx`](src/components/Navbar.tsx)

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Layers, Compass, Info } from "lucide-react";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [betaModalOpen, setBetaModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "/platform", icon: Layers },
    { name: "Use Cases", href: "/use-cases", icon: Compass },
    { name: "About & Founder", href: "/about", icon: Info },
  ];

  return (
    <>
      <BetaApplicationModal
        isOpen={betaModalOpen}
        onClose={() => setBetaModalOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-void/85 backdrop-blur-xl border-b border-brand-border/60 py-3.5 shadow-2xl shadow-black/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-purple-900/60 p-[1px] shadow-lg shadow-brand-violet/20 group-hover:shadow-brand-violet/40 transition-all duration-300">
              <div className="w-full h-full bg-brand-void/90 rounded-[7px] flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-brand-champagne group-hover:text-white transition-colors">
                  T
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium tracking-widest text-slate-100 group-hover:text-brand-champagne transition-colors">
                THREADSPARK
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono -mt-1 hidden sm:block">
                Source of Truth for Fiction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/5 bg-brand-dark/40 shadow-inner">
            <Link
              href="/"
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                pathname === "/"
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Overview
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Studio Demo & Join Beta CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/studio"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
              <span>Explore Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>

            <button
              onClick={() => setBetaModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-brand-violet hover:bg-purple-600 text-white shadow-lg shadow-brand-violet/25 hover:shadow-brand-violet/40 transition-all"
            >
              <span>Design Partner Program</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setBetaModalOpen(true)}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet text-white"
            >
              Design Partners
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/" ? "bg-white/10 text-brand-champagne" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                Overview
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href ? "bg-white/10 text-brand-champagne" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-4 h-4 text-brand-violet" />
                  {link.name}
                </Link>
              ))}

              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5"
              >
                <Sparkles className="w-4 h-4 text-brand-champagne" />
                <span>Interactive Studio Demo</span>
              </Link>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBetaModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-brand-violet text-white shadow-lg shadow-brand-violet/25"
                >
                  Join Design Partner Program
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

```

---

<a id="srccomponentsfootertsx"></a>
### Global Footer & Company Identity (`src/components/Footer.tsx`)

- **File:** [`src/components/Footer.tsx`](src/components/Footer.tsx)

```tsx
"use client";

import Link from "next/link";
import { Mail, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-brand-border/40 bg-brand-void pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-violet/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-border/40">
          {/* Brand & Founder info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-violet to-purple-900/60 p-[1px] shadow-md shadow-brand-violet/20">
                  <div className="w-full h-full bg-brand-void rounded-[7px] flex items-center justify-center">
                    <span className="font-serif text-base font-bold text-brand-champagne">T</span>
                  </div>
                </div>
                <span className="font-serif text-xl tracking-widest text-slate-100 font-medium">THREADSPARK</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
                The source of truth for long-form fiction. Automatically tracking temporal state invariants, physical details, and epistemic boundaries across multi-book sagas.
              </p>
              <div className="text-xs text-slate-300 leading-relaxed font-mono space-y-1.5 p-3.5 rounded-xl bg-brand-charcoal/80 border border-brand-border/70">
                <div className="text-brand-champagne font-semibold text-[11px] uppercase tracking-wider">
                  Company Identity
                </div>
                <p className="text-slate-300 text-xs font-sans leading-relaxed">
                  {SITE_CONFIG.companyIdentity}
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-1.5 text-brand-champagne hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{SITE_CONFIG.contactEmail}</span>
                </a>
                <a
                  href={SITE_CONFIG.founder.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-lavender hover:underline"
                >
                  <span>Founder LinkedIn</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Design commitments: Zero training on author manuscripts</span>
              </div>
            </div>
          </div>

          {/* Product Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platform" className="text-slate-400 hover:text-brand-champagne transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-slate-400 hover:text-brand-champagne transition-colors">
                  Series Authors &amp; Novelists
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-brand-champagne transition-colors">
                  Company Facts &amp; Roadmap
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-brand-lavender hover:text-white transition-colors flex items-center gap-1 font-medium">
                  Sample Studio Demo <Sparkles className="w-3 h-3 text-brand-violet" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Trust &amp; Legal</h4>
            <div className="p-4 rounded-xl bg-brand-dark/70 border border-brand-border/60 space-y-2 mb-4">
              <div className="text-xs font-semibold text-white">What Threadspark Doesn&apos;t Do</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Threadspark does not ghostwrite your prose. It reads your manuscript to track facts, timeline states, and secrets so you don&apos;t leave plot holes.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-brand-champagne transition-colors">
                  &rarr; Privacy Policy &amp; Data Promise
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-champagne transition-colors">
                  &rarr; Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/about#status" className="hover:text-brand-champagne transition-colors">
                  &rarr; What Works Today vs. What&apos;s Planned
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} Threadspark. Operated by Ezekiel Heretta.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/platform" className="hover:text-slate-300 transition-colors">
              Architecture
            </Link>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-brand-champagne transition-colors">
              Contact Founder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

```

---

<a id="srccomponentsbetaapplicationmodaltsx"></a>
### Design Partner Cohort Modal (`src/components/BetaApplicationModal.tsx`)

- **File:** [`src/components/BetaApplicationModal.tsx`](src/components/BetaApplicationModal.tsx)

```tsx
"use client";

import { useState } from "react";
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BetaApplicationModal({ isOpen, onClose }: BetaModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    genre: "Epic Fantasy",
    bookCount: "2-3 Books",
    wordCount: "100k - 250k words",
    currentTools: "",
    feedbackCommitment: true,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Threadspark Design Partner Application: ${formData.name} (${formData.genre})`
    );
    const body = encodeURIComponent(
      `Hi Ezekiel,\n\nI would like to apply for the Threadspark Design Partner Program.\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Genre: ${formData.genre}\n` +
        `• Series Size: ${formData.bookCount} (~${formData.wordCount})\n` +
        `• Current Continuity Method: ${formData.currentTools || "None / Memory"}\n` +
        `• Willing to give weekly feedback: ${formData.feedbackCommitment ? "Yes" : "No"}\n\n` +
        `Looking forward to testing our manuscript in the continuity pipeline!`
    );

    // Open mailto link so it dispatches directly to Ezekiel's email
    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-brand-charcoal border border-white/10 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[260px] h-[180px] bg-brand-violet/20 blur-[80px] pointer-events-none rounded-full" />

        {/* Modal Header */}
        <div className="p-6 border-b border-brand-border/80 flex items-center justify-between relative z-10 bg-brand-dark/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-violet to-purple-800 p-[1px] flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 text-brand-champagne" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-white">
                Design Partner Application
              </h3>
              <p className="text-[11px] font-mono text-emerald-400">
                {SITE_CONFIG.designPartnerCohort.spotsTakenText} places taken &bull; {SITE_CONFIG.designPartnerCohort.replyWindow} response
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 relative z-10">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-medium">
                Application Prepared
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Your email client was opened to send your application details directly to Ezekiel Heretta ({SITE_CONFIG.contactEmail}).
              </p>
              <p className="text-xs text-slate-400">
                Ezekiel will reply within {SITE_CONFIG.designPartnerCohort.replyWindow}. If your email client did not open automatically, you can email directly at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-brand-champagne underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
                .
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-brand-surface hover:bg-white/10 border border-brand-border text-xs font-mono text-white transition-all"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-border space-y-1">
                <div className="text-xs font-semibold text-white">
                  {SITE_CONFIG.designPartnerCohort.spotsTakenText} places taken.
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Apply with the form below and Ezekiel will reply within {SITE_CONFIG.designPartnerCohort.replyWindow}. The cohort is 100% free with concierge setup by the founder.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Your Name / Pen Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robin Hobb"
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="author@series.com"
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Primary Genre
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="Epic Fantasy">Epic / High Fantasy</option>
                    <option value="Sci-Fi / Space Opera">Sci-Fi / Space Opera</option>
                    <option value="Urban Fantasy / Paranormal">Urban Fantasy / Paranormal</option>
                    <option value="Crime / Mystery / Thriller">Crime / Mystery / Thriller</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Romantasy / Romance Series">Romantasy / Romance Series</option>
                    <option value="Other">Other Speculative Fiction</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Series Scale (Volumes)
                  </label>
                  <select
                    value={formData.bookCount}
                    onChange={(e) => setFormData({ ...formData, bookCount: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="Standalone (40k-100k words)">Standalone (40k-100k words)</option>
                    <option value="2-3 Books (Duology / Trilogy)">2-3 Books (Duology / Trilogy)</option>
                    <option value="4-6 Books">4-6 Books</option>
                    <option value="7+ Books (Expansive Universe)">7+ Books (Expansive Universe)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  How do you track continuity &amp; character facts today?
                </label>
                <input
                  type="text"
                  value={formData.currentTools}
                  onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                  placeholder="e.g. Scrivener notes, Notion bible, Obsidian graph, or memory"
                  className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                />
              </div>

              <div className="pt-1 flex items-start gap-2">
                <input
                  type="checkbox"
                  id="feedbackCommitment"
                  checked={formData.feedbackCommitment}
                  onChange={(e) =>
                    setFormData({ ...formData, feedbackCommitment: e.target.checked })
                  }
                  className="mt-0.5 rounded border-brand-border bg-brand-dark text-brand-violet focus:ring-brand-violet"
                />
                <label htmlFor="feedbackCommitment" className="text-xs text-slate-300 leading-snug">
                  I am willing to test Threadspark on 1 manuscript and provide honest feedback to the founder over 4&ndash;6 weeks.
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Private to You
                </span>
                <span>Never trained on public models</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Design Partner Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

```

---

<a id="srccomponentscommandpalettetsx"></a>
### Command Palette (`src/components/CommandPalette.tsx`)

- **File:** [`src/components/CommandPalette.tsx`](src/components/CommandPalette.tsx)

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Sparkles,
  LayoutDashboard,
  FileSearch,
  Sliders,
  BookOpen,
  GitGraph,
  ShieldCheck,
  MessageSquareCode,
  PenTool,
  Settings,
  Layers,
  Compass,
  Info,
  X,
  ArrowRight,
  Command,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Studio Views" | "Characters" | "Continuity Flags";
  description?: string;
  icon: any;
  href?: string;
  action?: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        sound.pulse();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    // Pages
    { id: "page-home", title: "Overview / Homepage", category: "Navigation", description: "Return to Threadspark home", icon: LayoutDashboard, href: "/" },
    { id: "page-platform", title: "How Threadspark Works", category: "Navigation", description: "Deep dive into the 4-step canon pipeline", icon: Layers, href: "/platform" },
    { id: "page-use-cases", title: "Use Cases & Workflows", category: "Navigation", description: "Series authors, web serialists, game teams, worldbuilders", icon: Compass, href: "/use-cases" },
    { id: "page-about", title: "About & Founder", category: "Navigation", description: "Founder story, mission, and roadmap", icon: Info, href: "/about" },
    { id: "page-studio", title: "Threadspark Studio", category: "Navigation", description: "Interactive product demonstration", icon: Sparkles, href: "/studio" },

    // Studio Views
    { id: "st-doc", title: "Document Ingestion Pipeline", category: "Studio Views", description: "8-stage manuscript synthesis simulation", icon: FileSearch, href: "/studio?tab=document-intelligence" },
    { id: "st-style", title: "Writing Style Intelligence", category: "Studio Views", description: "Stylometric authorship fingerprinting & lexical variance", icon: Sliders, href: "/studio?tab=style-intelligence" },
    { id: "st-chars", title: "Character Dossiers & Arcs", category: "Studio Views", description: "12 character profiles with dynamic tension ratings", icon: BookOpen, href: "/studio?tab=characters" },
    { id: "st-graph", title: "Interactive Relational Knowledge Graph", category: "Studio Views", description: "SVG topological spatial network", icon: GitGraph, href: "/studio?tab=knowledge-graph" },
    { id: "st-continuity", title: "Continuity Radar Scanner", category: "Studio Views", description: "3 flagged discrepancies with 1-click authorial fixes", icon: ShieldCheck, href: "/studio?tab=continuity" },
    { id: "st-ai", title: "Context-Aware AI Copilot", category: "Studio Views", description: "Conversational project intelligence", icon: MessageSquareCode, href: "/studio?tab=ai-workspace" },
    { id: "st-creative", title: "Style-Preserved Creative Studio", category: "Studio Views", description: "Side-by-side & unified diff rewriting", icon: PenTool, href: "/studio?tab=creative-studio" },
    { id: "st-settings", title: "Project Vault & Local Sovereignty", category: "Studio Views", description: "Encryption, local storage, and lore export", icon: Settings, href: "/studio?tab=settings" },

    // Characters
    ...GLASS_MERIDIAN_DATA.characters.slice(0, 6).map((char) => ({
      id: `char-${char.id}`,
      title: `${char.name} (${char.role})`,
      category: "Characters" as const,
      description: `${char.faction} • ${char.traits.join(", ")}`,
      icon: BookOpen,
      href: `/studio?tab=characters&char=${char.id}`,
    })),

    // Continuity Issues
    ...GLASS_MERIDIAN_DATA.continuityIssues.map((issue) => ({
      id: `issue-${issue.id}`,
      title: issue.title,
      category: "Continuity Flags" as const,
      description: `${issue.severity} severity: ${issue.description.slice(0, 70)}...`,
      icon: ShieldCheck,
      href: `/studio?tab=continuity`,
    })),
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  });

  const handleSelect = (item: CommandItem) => {
    sound.tick();
    setIsOpen(false);
    if (item.href) {
      router.push(item.href);
    } else if (item.action) {
      item.action();
    }
  };

  const handleKeyDownInList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-brand-void/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-brand-charcoal/95 border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-brand-border/80 gap-3 bg-brand-dark/90">
          <Search className="w-4 h-4 text-brand-lavender flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInList}
            placeholder="Type a command, page name, character, or studio feature..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors sm:hidden"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.03]">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 font-mono">
              No matching commands or entities found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-brand-violet/20 text-white border border-brand-violet/40"
                      : "text-slate-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? "bg-brand-violet text-white"
                          : "bg-brand-surface text-slate-400 border border-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      {item.description && (
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-3.5 h-3.5 flex-shrink-0 ml-2 transition-transform ${
                      isSelected ? "translate-x-0.5 text-brand-champagne opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-brand-void border-t border-brand-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↵</kbd>
              Select
            </span>
          </div>
          <span className="text-brand-champagne">THREADSPARK QuickJump</span>
        </div>
      </div>
    </div>
  );
}


```

---

