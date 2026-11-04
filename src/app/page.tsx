"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export default function HomePage() {
  const [activePillar, setActivePillar] = useState<"understand" | "remember" | "create">("understand");
  const [activePreviewTab, setActivePreviewTab] = useState<"overview" | "characters" | "continuity" | "style">("overview");

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[500px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-champagne/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-brand-lavender">
              Introducing Threadspark v2.4 • Contextual Personal Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-8">
            Everything you create deserves an intelligence that{" "}
            <span className="italic font-light text-brand-champagne">understands</span> it.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            THREADSPARK is a personal AI intelligence platform that learns from your ideas, documents, research, and creative projects. Giving everything you create the context, memory, and intelligence to evolve.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <Link
              href="/studio"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Experience the AI</span>
            </Link>

            <Link
              href="/platform"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Hero Feature Teaser Mockup */}
          <div className="relative mx-auto max-w-5xl rounded-2xl glass-panel p-2 md:p-3 border border-white/10 shadow-2xl shadow-black/80">
            <div className="rounded-xl overflow-hidden bg-brand-dark/90 border border-brand-border/60">
              {/* Studio Browser Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-brand-charcoal/80 border-b border-brand-border/50 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
                  <span className="font-mono ml-2 text-slate-400 hidden sm:inline">threadspark-studio://the-glass-meridian</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Neural Context Active
                  </span>
                  <span className="text-slate-400 hidden md:inline">36,420 words indexed</span>
                </div>
              </div>

              {/* Preview Dashboard Content */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
                {/* Left Mini Stats */}
                <div className="md:col-span-4 space-y-4">
                  <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border">
                    <div className="text-xs font-mono uppercase text-slate-400 mb-1">Demonstration Project</div>
                    <div className="font-serif text-xl text-brand-champagne font-medium">The Glass Meridian</div>
                    <div className="text-xs text-slate-400 mt-1">High Fantasy / Political Intrigue • 8 Chapters</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-brand-surface/40 border border-brand-border/60">
                      <div className="text-slate-400 text-[10px]">CHARACTERS</div>
                      <div className="text-lg font-semibold text-white">12 Identified</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface/40 border border-brand-border/60">
                      <div className="text-slate-400 text-[10px]">RELATIONSHIPS</div>
                      <div className="text-lg font-semibold text-brand-lavender">28 Mapped</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface/40 border border-brand-border/60">
                      <div className="text-slate-400 text-[10px]">CHRONOLOGY</div>
                      <div className="text-lg font-semibold text-emerald-300">24 Events</div>
                    </div>
                    <div className="p-3 rounded-lg bg-brand-surface/40 border border-brand-border/60">
                      <div className="text-slate-400 text-[10px]">CONTINUITY RISKS</div>
                      <div className="text-lg font-semibold text-amber-400">3 Flagged</div>
                    </div>
                  </div>

                  <Link
                    href="/studio"
                    className="w-full py-2.5 px-4 rounded-lg bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white border border-brand-violet/40 text-xs font-medium transition-all flex items-center justify-between"
                  >
                    <span>Launch Full Interactive Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Right Interactive Telemetry Snippet */}
                <div className="md:col-span-8 p-5 rounded-xl bg-brand-surface/60 border border-brand-border flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 mb-4">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand-violet" />
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                          Active Neural Synthesis • Synthesis Snapshot
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-brand-champagne">Lexical Coherence 92%</span>
                    </div>

                    <div className="space-y-3 text-xs leading-relaxed text-slate-300">
                      <div className="p-3 rounded-lg bg-brand-charcoal/80 border border-brand-border/80">
                        <span className="font-semibold text-brand-lavender">Context Engine Observation: </span>
                        Marcus Thorne&apos;s linguistic cadence shows a marked 42% increase in rhythmic curtness following Chapter 4&apos;s ambush at Iron Quay, reflecting psychological strain before his confrontation with Archon Malakar.
                      </div>

                      <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-200">
                        <span className="font-semibold text-amber-300 flex items-center gap-1.5 mb-1">
                          <ShieldAlert className="w-3.5 h-3.5" /> Continuity Alert Detected:
                        </span>
                        Chapter 4 reports Marcus dropping his grandfather&apos;s Scholasticate signet seal into the bay mud, but Chapter 7 describes him unlocking the east portico with that same seal.
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Engine: ChronoVoxel 3.2</span>
                    <span className="text-brand-champagne">Zero Token Degradation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-24 border-t border-brand-border/40 relative bg-brand-dark/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-3 block">
              The Fundamental Limitation of Modern AI
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-6">
              Conventional models have short memories. Your work deserves an enduring mind.
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Standard chatbots treat every conversation like a blank slate. When you are writing a 300-page manuscript, directing a worldbuilding bible, or curating years of research, ephemeral prompt windows crumble.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-900/20 border border-red-500/20 text-red-400 flex items-center justify-center mb-5">
                  <History className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Contextual Amnesia</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Conventional tools lose track of past decisions, forcing you to re-explain characters, settings, world rules, and plot twists with every new prompt.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-red-300">
                Stateless Prompt Defect
              </div>
            </div>

            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-900/20 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Continuity Fractures</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Without an underlying relational knowledge model, AI blithely contradicts previous chapters, revives slain characters, or swaps key motivations.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-amber-300">
                Zero Structural Awareness
              </div>
            </div>

            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-900/20 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5">
                  <Feather className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Voice Dilution</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Generic models overwrite your distinctive literary voice with bland, homogenized corporate prose filled with ubiquitous adjectives and repetitive tropes.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-purple-300">
                Stylistic Homogenization
              </div>
            </div>

            <div className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-5">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-medium text-white mb-2">Siloed Knowledge</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Notes, research papers, character sketches, and manuscripts live scattered in isolated folders, invisible to each other and unusable in synthesis.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/5 text-[11px] font-mono text-blue-300">
                Fragmented Creation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE PILLARS SECTION */}
      <section className="py-28 border-t border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              The Architecture of THREADSPARK
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Three pillars of persistent intelligence.
            </h2>
            <p className="text-slate-400 text-sm">
              Engineered from the ground up to support long-term creative vision.
            </p>
          </div>

          {/* Pillar Selector Buttons */}
          <div className="flex justify-center gap-3 mb-12">
            {[
              { id: "understand", label: "1. UNDERSTAND", icon: Brain },
              { id: "remember", label: "2. REMEMBER", icon: History },
              { id: "create", label: "3. CREATE", icon: PenTool },
            ].map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillar === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id as any)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-brand-violet text-white shadow-lg shadow-brand-violet/30 border border-brand-violet"
                      : "glass-pill text-slate-400 hover:text-white border border-brand-border"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{pillar.label}</span>
                </button>
              );
            })}
          </div>

          {/* Pillar Content Display */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
            {activePillar === "understand" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                    Cognitive Ingestion Engine
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug">
                    Learn the meaning, structure, and underlying patterns of your work.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    THREADSPARK reads your manuscripts, notes, and world lore not as dead strings of tokens, but as an interconnected ecosystem. It automatically extracts characters, factions, geographic boundaries, emotional dynamics, and narrative tension arcs.
                  </p>
                  <ul className="space-y-3 text-xs text-slate-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                      Multimodal entity recognition and semantic categorization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                      Stylometric authorship profiling (syntax, rhythm, lexicon)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                      Implicit subtext and character motivation extraction
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-6 bg-brand-dark/80 p-6 rounded-2xl border border-brand-border space-y-4">
                  <div className="text-xs font-mono uppercase text-slate-400 pb-2 border-b border-brand-border flex justify-between">
                    <span>Neural Entity Parser</span>
                    <span className="text-emerald-400">100% Ingested</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-brand-surface border border-white/5 flex items-center justify-between">
                      <span className="text-slate-200">Entity: Elena Vance</span>
                      <span className="text-purple-400">Role: Exiled Chronomancer</span>
                    </div>
                    <div className="p-2.5 rounded bg-brand-surface border border-white/5 flex items-center justify-between">
                      <span className="text-slate-200">Linguistic Voice: Sharp, guarded, tactile</span>
                      <span className="text-brand-champagne">Vocab: 88th Percentile</span>
                    </div>
                    <div className="p-2.5 rounded bg-brand-surface border border-white/5 flex items-center justify-between">
                      <span className="text-slate-200">Hidden Arc: Survivor&apos;s Guilt (Silas)</span>
                      <span className="text-amber-400">Subtext Index: High</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePillar === "remember" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                    Persistent Knowledge Fabric
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug">
                    Maintain an unbroken, evolving memory across chapters and years.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Forget arbitrary context limits. THREADSPARK stores every fact, family tree, geographic rule, and plot decision in a persistent vector and graph network. When you begin writing Chapter 8, the system remembers the offhand remark your protagonist made in Chapter 1.
                  </p>
                  <ul className="space-y-3 text-xs text-slate-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Dynamic graph topologies mapping interconnected lore
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Automated continuity radar scanning for timeline discrepancies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Instant contextual retrieval without retraining or forgetting
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-6 bg-brand-dark/80 p-6 rounded-2xl border border-brand-border space-y-4">
                  <div className="text-xs font-mono uppercase text-slate-400 pb-2 border-b border-brand-border flex justify-between">
                    <span>Active Memory Graph</span>
                    <span className="text-brand-lavender">24 Events Linked</span>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-charcoal/60 border border-brand-border/60 text-xs space-y-2">
                    <div className="flex items-center gap-2 text-brand-champagne font-semibold font-serif text-sm">
                      <History className="w-4 h-4 text-brand-violet" />
                      Timeline Anchors & Dependencies
                    </div>
                    <div className="text-slate-300 leading-relaxed font-sans text-xs">
                      Event #3 (Descent to Sunk Hollows) is causally dependent on Event #2 (Marcus stealing the silk blueprint). Any change to Event #2 automatically flags downstream impacts in Chapters 4, 6, and 8.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePillar === "create" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/20 border border-brand-champagne/40 text-brand-champagne text-xs font-mono">
                    Symbiotic Synthesis Studio
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug">
                    Develop, refine, and brainstorm in your authentic literary voice.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Collaborate with an assistant that writes with your vocabulary, honors your established lore, and understands the exact emotional temperature of your scene. Generate dialogue options, test hypothetical plot developments, and polish prose without sacrificing your authorship.
                  </p>
                  <ul className="space-y-3 text-xs text-slate-300 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                      Style-conditioned scene rewriting and pacing adjustment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                      Context-aware character dialogue sparring and interrogation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                      Before-and-after diff tracking with detailed stylistic rationale
                    </li>
                  </ul>
                </div>

                <div className="md:col-span-6 bg-brand-dark/80 p-6 rounded-2xl border border-brand-border space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-400 pb-2 border-b border-brand-border flex justify-between">
                    <span>Creative Studio Simulation</span>
                    <span className="text-brand-champagne">Diff View</span>
                  </div>
                  <div className="p-3 rounded-lg bg-red-950/20 border border-red-900/30 text-[11px] text-slate-400 font-serif line-through">
                    Marcus stopped at the edge of the water. Elena looked up and sneered at him.
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-slate-200 font-serif leading-relaxed">
                    Marcus halted where the flagstones surrendered to the brackish canal, the waterline lapping against the soles of his calfskin boots with a quiet, sucking cadence.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHAT CAN YOU CREATE WITH THREADSPARK? */}
      <section className="py-24 border-t border-brand-border/40 relative bg-brand-dark/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-3 block">
              Diverse Applications
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              What can you build with THREADSPARK?
            </h2>
            <p className="text-slate-400 text-sm">
              Designed for creators managing expansive, interconnected bodies of work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Stories & Fiction */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-brand-violet/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-lavender flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">01 / FICTION</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Stories &amp; Novels</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Track 50+ characters across multi-volume series. Maintain character voice fidelity, preserve plot secrets, and detect timeline contradictions before your manuscript reaches an editor.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-lavender font-mono">
                <span>Character dossiers • Plot trees • Voice tuning</span>
                <Link href="/use-cases#fiction" className="hover:text-white flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Research & Knowledge */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-brand-violet/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">02 / RESEARCH</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Research &amp; Knowledge</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Transform disparate PDFs, historical archives, field notes, and interview transcripts into an interconnected semantic lattice. Ask questions that synthesize across decades of notes.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-lavender font-mono">
                <span>Citation graphs • Cross-document synthesis</span>
                <Link href="/use-cases#research" className="hover:text-white flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 3. Worldbuilding */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-brand-violet/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-900/20 border border-amber-500/30 text-amber-300 flex items-center justify-center">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">03 / WORLDBUILDING</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Worldbuilding &amp; Lore</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Construct fictional civilizations, magic systems, pantheons, and geographical maps. Ensure your lore rules remain consistent whether you are authoring a novel or running a tabletop campaign.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-amber-300 font-mono">
                <span>Magic system rules • Faction hierarchies • Map lore</span>
                <Link href="/use-cases#worldbuilding" className="hover:text-white flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4. Screenplays & Drama */}
            <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col justify-between group hover:border-brand-violet/40 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">04 / SCREENPLAYS</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Scripts &amp; Screenplays</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Audit beat sheets, dialogue cadences, and scene tension. Identify scenes where subtext is lacking and explore alternative narrative turns while preserving scene constraints.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-emerald-300 font-mono">
                <span>Subtext radar • Scene beat analysis • Dialogue pacing</span>
                <Link href="/use-cases#screenwriters" className="hover:text-white flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PRODUCT PREVIEW / STUDIO SHOWCASE */}
      <section className="py-28 border-t border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-2 block">
                Flagship Experience
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-normal text-white">
                Inside Threadspark Studio
              </h2>
            </div>
            <Link
              href="/studio"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-violet text-white text-xs font-medium hover:bg-purple-600 transition-colors shadow-lg shadow-brand-violet/25"
            >
              <span>Launch Studio Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Preview Container */}
          <div className="glass-panel rounded-3xl border border-white/10 p-6 md:p-8">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 pb-6 mb-6 border-b border-brand-border/60">
              {[
                { id: "overview", label: "Project Telemetry" },
                { id: "characters", label: "Character Dossiers" },
                { id: "continuity", label: "Continuity Radar" },
                { id: "style", label: "Writing Style Engine" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePreviewTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                    activePreviewTab === tab.id
                      ? "bg-white/15 text-white border border-white/20 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activePreviewTab === "overview" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                <div className="p-5 rounded-2xl bg-brand-dark/80 border border-brand-border">
                  <div className="text-xs font-mono uppercase text-slate-400 mb-2">Lexical Variance</div>
                  <div className="text-3xl font-serif text-brand-champagne mb-1">0.76 TTR</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Type-token ratio indicates exceptionally rich vocabulary with low word redundancy.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-brand-dark/80 border border-brand-border">
                  <div className="text-xs font-mono uppercase text-slate-400 mb-2">Narrative Velocity</div>
                  <div className="text-3xl font-serif text-emerald-400 mb-1">18.4 wps</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Average sentence length aligns with classic literary intrigue and rhythmic tension.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-brand-dark/80 border border-brand-border">
                  <div className="text-xs font-mono uppercase text-slate-400 mb-2">Continuity Integrity</div>
                  <div className="text-3xl font-serif text-amber-300 mb-1">92 / 100</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    3 potential narrative contradictions detected across 8 chapters requiring review.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Characters */}
            {activePreviewTab === "characters" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
                {GLASS_MERIDIAN_DATA.characters.slice(0, 4).map((char) => (
                  <div key={char.id} className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-serif text-lg text-white font-medium">{char.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-white/5 text-brand-lavender">
                          {char.faction}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3">{char.role}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{char.description}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex gap-1 flex-wrap">
                      {char.traits.map((trait) => (
                        <span key={trait} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Continuity */}
            {activePreviewTab === "continuity" && (
              <div className="space-y-4 animate-fade-in">
                {GLASS_MERIDIAN_DATA.continuityIssues.map((issue) => (
                  <div key={issue.id} className="p-5 rounded-xl bg-brand-dark/80 border border-brand-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-base text-white font-medium">{issue.title}</span>
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded ${
                        issue.severity === "Critical"
                          ? "bg-red-950/60 text-red-300 border border-red-500/30"
                          : "bg-amber-950/60 text-amber-300 border border-amber-500/30"
                      }`}>
                        {issue.severity}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">{issue.description}</p>
                    <div className="p-3 rounded-lg bg-brand-surface/60 border border-white/5 text-xs text-brand-champagne">
                      <strong>AI Suggestion:</strong> {issue.suggestedFixes[0]}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Style */}
            {activePreviewTab === "style" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 animate-fade-in">
                <div className="md:col-span-5 p-5 rounded-2xl bg-brand-dark/80 border border-brand-border space-y-4">
                  <div className="text-xs font-mono uppercase text-slate-400 pb-2 border-b border-brand-border">
                    Tone Distribution
                  </div>
                  {Object.entries(GLASS_MERIDIAN_DATA.styleAnalysis.toneDistribution).map(([tone, pct]) => (
                    <div key={tone} className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span>{tone}</span>
                        <span className="font-mono text-brand-champagne">{pct}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-brand-charcoal overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-violet to-brand-champagne rounded-full"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="md:col-span-7 p-5 rounded-2xl bg-brand-dark/80 border border-brand-border space-y-4">
                  <div className="text-xs font-mono uppercase text-slate-400 pb-2 border-b border-brand-border">
                    Signature Stylistic Patterns
                  </div>
                  {GLASS_MERIDIAN_DATA.styleAnalysis.signaturePatterns.map((pat, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-brand-surface/50 border border-white/5 text-xs space-y-1">
                      <div className="font-semibold text-brand-lavender">{pat.pattern}</div>
                      <div className="font-serif italic text-slate-300">{pat.example}</div>
                      <div className="text-[11px] text-slate-400">{pat.notes}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-28 border-t border-brand-border/40 relative overflow-hidden bg-brand-void text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-violet/10 blur-[130px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal leading-tight mb-8">
            Your ideas have a history. Your projects have a story.{" "}
            <span className="italic font-light text-brand-champagne">Give them an intelligence that remembers.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Step inside the interactive demonstration of THREADSPARK Studio and explore how persistent contextual memory transforms the creative process.
          </p>
          <Link
            href="/studio"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-2xl shadow-brand-violet/30 hover:shadow-brand-violet/50 hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-brand-champagne" />
            <span>Enter Threadspark Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

