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
  Send,
  Building2,
  Sliders,
  Check,
  AlertTriangle,
  RotateCcw,
  Search,
  Scale,
  ShieldCheck,
  GitBranch,
  Lock,
  Database,
  Target,
  KeyRound,
  EyeOff,
  GitCommit,
  Flame,
  CheckCircle,
  XCircle,
  HelpCircle,
  Award,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";
import { InvestorModal } from "@/components/InvestorModal";

export default function HomePage() {
  const [activePillar, setActivePillar] = useState<"understand" | "remember" | "create">("understand");
  const [activePreviewTab, setActivePreviewTab] = useState<"overview" | "characters" | "continuity" | "style">("overview");
  const [investorOpen, setInvestorOpen] = useState(false);

  // Hero Interactive Simulation Terminal State
  const [heroPrompt, setHeroPrompt] = useState("");
  const [heroSimActive, setHeroSimActive] = useState<"epistemic" | "continuity" | "style" | "custom">("epistemic");
  const [heroThinking, setHeroThinking] = useState(false);
  const [heroOutput, setHeroOutput] = useState<{
    title: string;
    text: string;
    metricLabel?: string;
    metricVal?: string;
    badge?: string;
  }>({
    title: "Epistemic Tracking: Knowledge Leak Blocked (Chapter 6)",
    text: "Epistemic Violation Flagged: In Chapter 6, paragraph 18, Elena accuses Marcus of possessing Archon Malakar's private execution decree. However, causal provenance shows this decree is not signed until Chapter 7, and Elena does not learn of it until Chapter 8. Elena cannot possess this knowledge in Chapter 6 without breaking narrative causality.",
    metricLabel: "Epistemic Integrity",
    metricVal: "Leak Intercepted (Ch 6 vs Ch 7)",
    badge: "Epistemic Radar • Active",
  });

  const handleHeroPreset = (type: "epistemic" | "continuity" | "style") => {
    sound.tick();
    setHeroSimActive(type);
    setHeroThinking(true);

    setTimeout(() => {
      sound.pulse();
      setHeroThinking(false);
      if (type === "epistemic") {
        setHeroOutput({
          title: "Epistemic Tracking: Knowledge Leak Blocked (Chapter 6)",
          text: "Epistemic Violation Flagged: In Chapter 6, paragraph 18, Elena accuses Marcus of possessing Archon Malakar's private execution decree. However, causal provenance shows this decree is not signed until Chapter 7, and Elena does not learn of it until Chapter 8. Elena cannot possess this knowledge in Chapter 6 without breaking narrative causality.",
          metricLabel: "Epistemic Integrity",
          metricVal: "Leak Intercepted (Ch 6 vs Ch 7)",
          badge: "Epistemic Radar • Active",
        });
      } else if (type === "continuity") {
        setHeroOutput({
          title: "Temporal State Radar: Item & Physical State Collision",
          text: "Critical Invariant Alert: In Chapter 4, line 82, Marcus drops his grandfather's bronze seal into the bay sludge at Iron Quay. In Chapter 7, line 14, he unlocks the Solarium portal with it. Simultaneously, Elena's right forearm hairline fracture from Chapter 4 is ignored in Chapter 6 as she swings dual iron tongs.",
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
    }, 400);
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroPrompt.trim()) return;

    sound.tick();
    const query = heroPrompt;
    setHeroPrompt("");
    setHeroSimActive("custom");
    setHeroThinking(true);

    setTimeout(() => {
      sound.pulse();
      setHeroThinking(false);
      setHeroOutput({
        title: `Temporal Story-State Query: "${query}"`,
        text: `Cross-referencing temporal graph across all 36,420 words of The Glass Meridian: State verification confirms that Silas Ward still holds the keystone frequency notes in Chapter 6; Marcus does not receive them until the Iron Quay meeting in Chapter 4. Any scene in Chapter 5 showing Elena with the resonance cipher violates epistemic state bounds.`,
        metricLabel: "Graph Coverage",
        metricVal: "8 Chapters • 148 Nodes Verified",
        badge: "Deterministic Graph Query",
      });
    }, 550);
  };

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />
      <InvestorModal isOpen={investorOpen} onClose={() => setInvestorOpen(false)} />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[550px] bg-brand-violet/15 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-brand-champagne/5 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          {/* Temporary sanity check banner */}
          <div className="mb-8 inline-block px-10 py-4 rounded-2xl bg-emerald-500/25 border-2 border-emerald-400 text-emerald-300 font-mono text-3xl sm:text-5xl md:text-6xl font-black tracking-widest uppercase shadow-2xl shadow-emerald-500/40 animate-pulse">
            UPDATED
          </div>

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-brand-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-brand-lavender">
              THREADSPARK • The Source of Truth for Long-Form Fiction
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
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            Who exists, what&apos;s happened to whom, and who knows what—updating as you write, auditable, and sovereign. Built specifically for indie series authors, serial novelists, and worldbuilders whose continuity burden grows with every book.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Explore The Interactive Studio</span>
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Investor Briefing &amp; Roadmap</span>
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
                    threadspark-terminal://the-glass-meridian.story-state
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Temporal State Synchronized
                  </span>
                  <span className="text-slate-400 hidden md:inline">36,420 words indexed</span>
                </div>
              </div>

              {/* Terminal Quick Presets */}
              <div className="px-5 py-3 bg-brand-void/60 border-b border-brand-border/40 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Select Live Telemetry Test:
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
                    3. Private LoRA Style Adapter
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
                    {heroThinking ? (
                      <div className="flex items-center gap-3 text-xs font-mono text-brand-lavender animate-pulse">
                        <Activity className="w-4 h-4 animate-spin text-brand-champagne" />
                        <span>Traversing 148 relational nodes &amp; 312 chapter vectors...</span>
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                        {heroOutput.text}
                      </p>
                    )}
                  </div>

                  {/* Custom Prompt Input */}
                  <form onSubmit={handleHeroSubmit} className="relative">
                    <input
                      type="text"
                      value={heroPrompt}
                      onChange={(e) => setHeroPrompt(e.target.value)}
                      placeholder="Ask any question about The Glass Meridian (e.g. 'What happens if Marcus reveals the keystone fracture?')..."
                      className="w-full bg-brand-charcoal border border-brand-border/80 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-violet font-sans"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-violet hover:bg-purple-600 text-white rounded-lg text-xs font-mono transition-colors flex items-center gap-1"
                    >
                      <span>Query</span>
                      <Send className="w-3 h-3" />
                    </button>
                  </form>
                </div>

                {/* Right: Real-time Metric Indicators */}
                <div className="md:col-span-4 p-5 rounded-xl bg-brand-surface/70 border border-brand-border flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-1">
                      Context Coherence
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
                      onClick={() => sound.tick()}
                      className="w-full py-2.5 px-4 rounded-lg bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white border border-brand-violet/40 text-xs font-medium transition-all flex items-center justify-between"
                    >
                      <span>Open in Full Studio</span>
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
                <span>Context windows let you paste a book. They cannot tell you if Mara&apos;s sword is broken in Ch 14.</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              Target Wedge: Built specifically for <strong className="text-white">indie and self-published series authors</strong>, serial web novelists, and tabletop worldbuilders—creators whose continuity burden compounds with every new chapter and volume.
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
                  Versions every manuscript draft and lets authors safely branch counterfactuals (&ldquo;What if Silas dies in Ch 9?&rdquo;) without corrupting your canonical story timeline or previous drafts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border space-y-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg text-white font-medium">4. Propose, Then Confirm</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Automated extraction will make mistakes, so the system proposes entities and timeline events for author approval. Every flagged collision links directly to the exact conflicting manuscript passages.
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
              Market Positioning &amp; Incumbent Analysis
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
                    <th className="p-4 sm:p-5 text-slate-400">Incumbents (Sudowrite / Novelcrafter / NovelAI)</th>
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
                    <td className="p-4 sm:p-5 text-slate-400">Generic fiction model (e.g. Muse) or pooled user fine-tune.</td>
                    <td className="p-4 sm:p-5 text-slate-400">Generic RLHF corporate tone; imitation fades over session.</td>
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
                  onClick={() => {
                    sound.tick();
                    setActivePillar(pillar.id as any);
                  }}
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
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
                      Timeline Anchors &amp; Dependencies
                    </div>
                    <div className="text-slate-300 leading-relaxed font-sans text-xs">
                      Event #3 (Descent to Sunk Hollows) is causally dependent on Event #2 (Marcus stealing the silk blueprint). Any change to Event #2 automatically flags downstream impacts in Chapters 4, 6, and 8.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activePillar === "create" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-fade-in">
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
                  <span className="text-xs font-mono text-slate-400">01 / FICTION</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Stories &amp; Novels</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Track 50+ characters across multi-volume series. Maintain character voice fidelity, preserve plot secrets, and detect timeline contradictions before your manuscript reaches an editor.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-lavender font-mono">
                <span>Character dossiers • Plot trees • Voice tuning</span>
                <Link href="/use-cases#novelists" className="hover:text-white flex items-center gap-1">
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
                  <span className="text-xs font-mono text-slate-400">02 / RESEARCH</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Research &amp; Knowledge</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Transform disparate PDFs, historical archives, field notes, and interview transcripts into an interconnected semantic lattice. Ask questions that synthesize across decades of notes.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-lavender font-mono">
                <span>Citation graphs • Cross-document synthesis</span>
                <Link href="/use-cases#researchers" className="hover:text-white flex items-center gap-1">
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
                  <span className="text-xs font-mono text-slate-400">03 / WORLDBUILDING</span>
                </div>
                <h3 className="font-serif text-2xl text-white font-medium mb-3">Worldbuilding &amp; Lore</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Construct fictional civilizations, magic systems, pantheons, and geographical maps. Ensure your lore rules remain consistent whether you are authoring a novel or running a tabletop campaign.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-amber-300 font-mono">
                <span>Magic system rules • Faction hierarchies • Map lore</span>
                <Link href="/use-cases#worldbuilders" className="hover:text-white flex items-center gap-1">
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
                  <span className="text-xs font-mono text-slate-400">04 / SCREENPLAYS</span>
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
              onClick={() => sound.tick()}
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
                  onClick={() => {
                    sound.tick();
                    setActivePreviewTab(tab.id as any);
                  }}
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

      {/* BUSINESS MODEL, TIERS & THE MOAT */}
      <section className="py-28 border-t border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Business Model &amp; Sustainable Economics
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Transparent Tiers Designed for Compounding Value
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Incumbents anchor low ($10&ndash;$12/mo) with manual notebooks. Threadspark is priced for the acute needs of series authors whose multi-book continuity burden commands professional developmental editing tools.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
            {/* Tier 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">Explorer</div>
                <div className="font-serif text-4xl text-white font-medium mb-1">$0</div>
                <div className="text-xs text-slate-400 mb-6">Free forever • 1 Active Project</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Perfect for authors testing the waters on a single manuscript or short-form lore bible.
                </p>
                <ul className="space-y-3 text-xs text-slate-300 font-mono mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                    Up to 40,000 words ingested
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                    Auto-built character &amp; location dossiers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                    Basic timeline dependency graph
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-violet" />
                    Standard open JSON export
                  </li>
                </ul>
              </div>
              <Link
                href="/studio"
                onClick={() => sound.tick()}
                className="w-full py-3 rounded-xl glass-panel hover:bg-white/10 text-white text-xs font-mono text-center block transition-colors border border-white/10"
              >
                Start Free Project
              </Link>
            </div>

            {/* Tier 2: Series Author Pro (Highlighted) */}
            <div className="glass-panel p-8 rounded-3xl border border-brand-violet relative flex flex-col justify-between shadow-2xl shadow-brand-violet/20 bg-brand-surface/80">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-violet text-white text-[10px] font-mono tracking-widest uppercase">
                Most Popular for Series Authors
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-brand-champagne mb-2">Series Author Pro</div>
                <div className="font-serif text-4xl text-white font-medium mb-1">
                  $29 <span className="text-sm font-sans text-slate-400 font-normal">/ month</span>
                </div>
                <div className="text-xs text-slate-400 mb-6">Billed monthly • Unlimited Volumes</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Built for authors managing multi-book fantasy, sci-fi, and crime series where continuity mistakes are fatal.
                </p>
                <ul className="space-y-3 text-xs text-slate-300 font-mono mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                    Unlimited manuscript words &amp; book series
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                    Temporal Story-State Graph &amp; Invariants
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                    Epistemic Tracking (&ldquo;Who Knows What&rdquo;)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                    Precision-first automated collision alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-champagne" />
                    Draft versioning &amp; counterfactual branching
                  </li>
                </ul>
              </div>
              <Link
                href="/studio"
                onClick={() => sound.tick()}
                className="w-full py-3 rounded-xl bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono text-center block transition-colors shadow-lg shadow-brand-violet/30"
              >
                Join Series Closed Beta
              </Link>
            </div>

            {/* Tier 3: Studio Sovereign */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-2">Studio Sovereign</div>
                <div className="font-serif text-4xl text-white font-medium mb-1">
                  $79 <span className="text-sm font-sans text-slate-400 font-normal">/ month</span>
                </div>
                <div className="text-xs text-slate-400 mb-6">Or custom enterprise on-premise</div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  For high-output authors, small presses, and narrative game teams requiring private style adapters and strict data sovereignty.
                </p>
                <ul className="space-y-3 text-xs text-slate-300 font-mono mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lavender" />
                    Per-author private LoRA style adapter
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lavender" />
                    Author owns adapter weights (.safetensors)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lavender" />
                    Private cloud or self-hosted container option
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lavender" />
                    Zero cloud retention &amp; per-tenant encryption
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-lavender" />
                    Dedicated GPU batch ingestion queues
                  </li>
                </ul>
              </div>
              <button
                onClick={() => {
                  sound.tick();
                  setInvestorOpen(true);
                }}
                className="w-full py-3 rounded-xl glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-mono text-center block transition-colors border border-white/10"
              >
                Inquire Studio Sovereign
              </button>
            </div>
          </div>

          {/* Wedge, Moat & Unit Economics Explainer */}
          <div className="p-8 rounded-3xl bg-brand-charcoal/70 border border-brand-border grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <div className="text-xs font-mono uppercase text-brand-champagne mb-1">1. The Wedge Strategy</div>
              <h4 className="font-serif text-lg text-white font-medium mb-2">Series Authors &rarr; Studios</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We start with indie series authors whose continuity burden compounds with every book. Once proven, we expand into freelance editors, book packaging houses, and game narrative teams.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-brand-champagne mb-1">2. Moat of Accumulated Value</div>
              <h4 className="font-serif text-lg text-white font-medium mb-2">Value Over Captivity</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                An author&apos;s story graph and style adapter become exponentially more valuable with every draft. We support 100% open JSON/SQLite export—our moat is built on utility, not vendor lock-in.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono uppercase text-brand-champagne mb-1">3. Razor-Sharp Unit Economics</div>
              <h4 className="font-serif text-lg text-white font-medium mb-2">Lightweight LoRA Adapters</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instead of costly full-model retraining, per-author style models are served as lightweight adapters (~25MB) on shared base weights. This makes inference radically cheaper and margins sustainable.
              </p>
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
              <span className="text-white font-semibold">Test Suite: Arthur Conan Doyle&apos;s &ldquo;The Sign of the Four&rdquo; (43,400 words)</span>
              <span className="text-emerald-400">20 Seeded Real-World Contradictions</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              We injected 20 deliberate continuity errors into a complete public-domain novel: 5 healed physical injuries without medical mention, 5 epistemic knowledge leaks (characters speaking of secrets before discovery), 5 disappearing carried weapons, and 5 timeline slips.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Collision Detection Rate</div>
                <div className="font-serif text-2xl text-emerald-400 font-medium">95% (19/20)</div>
                <div className="text-[10px] text-slate-400 mt-1">vs. 45% (9/20) for 1M-token prompt pasting</div>
              </div>

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">False Alarm Rate</div>
                <div className="font-serif text-2xl text-brand-champagne font-medium">&lt; 5%</div>
                <div className="text-[10px] text-slate-400 mt-1">Precision-first tuning suppresses noise</div>
              </div>

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-border">
                <div className="text-[11px] font-mono text-slate-400 uppercase mb-1">Per-Audit Ingestion Cost</div>
                <div className="font-serif text-2xl text-brand-lavender font-medium">1 / 14th</div>
                <div className="text-[10px] text-slate-400 mt-1">Sub-graph queries vs. repeated full-text prompt calls</div>
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
            Your ideas have a history. Your projects have a story.{" "}
            <span className="italic font-light text-brand-champagne">Give them an intelligence that remembers.</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Step inside the interactive demonstration of THREADSPARK Studio and explore how persistent contextual memory transforms the creative process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-2xl shadow-brand-violet/30 hover:shadow-brand-violet/50 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Enter Threadspark Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all border border-white/10"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Schedule Institutional Walkthrough</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
