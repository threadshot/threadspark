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
  const [heroSimActive, setHeroSimActive] = useState<"tension" | "continuity" | "style" | "custom">("tension");
  const [heroThinking, setHeroThinking] = useState(false);
  const [heroOutput, setHeroOutput] = useState<{
    title: string;
    text: string;
    metricLabel?: string;
    metricVal?: string;
    badge?: string;
  }>({
    title: "Marcus Thorne vs Elena Vance Dynamic Tension",
    text: "Tension Index: 88 (High). Following Chapter 4's rendezvous at Iron Quay, Marcus's linguistic cadence displays a 42% increase in rhythmic curtness. He avoids invoking the Scholasticate keystone covenant in Elena's presence, indicating unconscious cognitive dissonance.",
    metricLabel: "Cadence Shift",
    metricVal: "+42% Staccato",
    badge: "Chapter 4 • Relational Matrix",
  });

  const handleHeroPreset = (type: "tension" | "continuity" | "style") => {
    sound.tick();
    setHeroSimActive(type);
    setHeroThinking(true);

    setTimeout(() => {
      sound.pulse();
      setHeroThinking(false);
      if (type === "tension") {
        setHeroOutput({
          title: "Marcus Thorne vs Elena Vance Dynamic Tension",
          text: "Tension Index: 88 (High). Following Chapter 4's rendezvous at Iron Quay, Marcus's linguistic cadence displays a 42% increase in rhythmic curtness. He avoids invoking the Scholasticate keystone covenant in Elena's presence, indicating unconscious cognitive dissonance.",
          metricLabel: "Cadence Shift",
          metricVal: "+42% Staccato",
          badge: "Chapter 4 • Relational Matrix",
        });
      } else if (type === "continuity") {
        setHeroOutput({
          title: "Continuity Radar: Ancestral Signet Seal Inconsistency",
          text: "Critical Flag: Chapter 4 describes Marcus dropping his grandfather's bronze signet seal into the bay mud under enemy crossbow fire. In Chapter 7, paragraph 14, Marcus unlocks the Solarium portal using that same signet without explanation.",
          metricLabel: "Discrepancy Severity",
          metricVal: "Critical (Ch 4 vs Ch 7)",
          badge: "Logic Collision Flagged",
        });
      } else if (type === "style") {
        setHeroOutput({
          title: "Stylometric Tone Profile & Lexical Richness",
          text: "Lexical Diversity: 0.76 Type-Token Ratio. Average sentence length: 18.4 words with prominent trailing participial clauses. Dominant atmospheric mood: Atmospheric Dread (34%) balanced with Architectural Introspection (28%).",
          metricLabel: "Lexical Variety",
          metricVal: "0.76 TTR (92nd percentile)",
          badge: "Voice Fingerprint Active",
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
        title: `Custom Synthesis: "${query}"`,
        text: `Cross-referencing all 36,420 words of The Glass Meridian: The narrative establishes that any violation of the Meridian's resonance frequency directly accelerates tectonic fissures beneath Oakhaven. Characters within the Scholasticate will react with immediate institutional suppression.`,
        metricLabel: "Coverage",
        metricVal: "8 Chapters Ingested",
        badge: "Custom Neural Query",
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
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-brand-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-brand-violet animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase text-brand-lavender">
              THREADSPARK v2.4 • Persistent Contextual Intelligence
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-8">
            Everything you create deserves an intelligence that{" "}
            <span className="italic font-light text-brand-champagne">understands</span> it.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-12">
            THREADSPARK is a personal AI intelligence platform that develops an ongoing contextual understanding of your creative projects, fictional universes, research archives, and manuscripts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-16">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white font-medium text-sm transition-all duration-300 shadow-xl shadow-brand-violet/25 hover:shadow-brand-violet/40 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Experience The AI Studio</span>
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Investor Briefing</span>
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
                    threadspark-terminal://the-glass-meridian.context
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-[11px]">
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Spatial Graph Synchronized
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
                    onClick={() => handleHeroPreset("tension")}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                      heroSimActive === "tension"
                        ? "bg-brand-violet text-white shadow-sm font-semibold"
                        : "bg-brand-surface/60 text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    1. Character Tension Arc
                  </button>
                  <button
                    onClick={() => handleHeroPreset("continuity")}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                      heroSimActive === "continuity"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm font-semibold"
                        : "bg-brand-surface/60 text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    2. Continuity Discrepancy
                  </button>
                  <button
                    onClick={() => handleHeroPreset("style")}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-all ${
                      heroSimActive === "style"
                        ? "bg-brand-champagne/20 text-brand-champagne border border-brand-champagne/40 shadow-sm font-semibold"
                        : "bg-brand-surface/60 text-slate-400 hover:text-white border border-white/5"
                    }`}
                  >
                    3. Stylometric Profile
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

      {/* THE PROBLEM / ARCHITECTURAL DEFICIT */}
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

      {/* ARCHITECTURAL DEFICIT COMPARISON TABLE (INVESTOR & STRATEGIC APPEAL) */}
      <section className="py-24 border-t border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Architectural Defensibility
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Stateless Chatbots vs. THREADSPARK Context Engine
            </h2>
            <p className="text-slate-400 text-sm">
              Why prompt engineering is fundamentally insufficient for complex, multi-chapter creation.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-brand-charcoal/60 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-dark/90 text-slate-400 uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Capability Dimension</th>
                    <th className="p-4 sm:p-5 text-red-400">Standard LLM Prompt Wrapper</th>
                    <th className="p-4 sm:p-5 text-brand-champagne">THREADSPARK Engine</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300 font-sans">
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Memory Retention</td>
                    <td className="p-4 sm:p-5 text-slate-400">Tokens degrade or truncate as session length expands</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium">Persistent relational graph; Chapter 1 context remains 100% active in Chapter 8</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Continuity Verification</td>
                    <td className="p-4 sm:p-5 text-slate-400">None; generates hallucinations without tracking physical state</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium">Continuous logic radar flagging item losses, injuries, and timeline collisions</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Voice &amp; Stylometrics</td>
                    <td className="p-4 sm:p-5 text-slate-400">Homogenizes prose with repetitive corporate LLM idioms</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium">Extracts authorial Type-Token Ratio, sentence cadence, and vocabulary tiers</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Compute Efficiency</td>
                    <td className="p-4 sm:p-5 text-slate-400">Re-injects massive context windows on every call, driving up costs</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium">Sub-graph traversal extracts only causally relevant nodes (&lt;12ms latency)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-mono text-white text-xs font-medium">Data Sovereignty</td>
                    <td className="p-4 sm:p-5 text-slate-400">Cloud-dependent; user intellectual property stored on public servers</td>
                    <td className="p-4 sm:p-5 text-emerald-300 font-medium">Local-first vector indexing; zero third-party foundation model training</td>
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
