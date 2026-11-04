"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  BookOpen,
  Compass,
  FileText,
  Layers,
  Database,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Quote,
  Activity,
  History,
  Users,
  Feather,
  GitBranch,
  Play,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { InvestorModal } from "@/components/InvestorModal";

export default function UseCasesPage() {
  const [selectedCase, setSelectedCase] = useState<string>("novelists");
  const [activeScenarioIdx, setActiveScenarioIdx] = useState<number>(0);
  const [investorOpen, setInvestorOpen] = useState(false);

  const useCases = [
    {
      id: "novelists",
      icon: BookOpen,
      badge: "Fiction & Long-form Narrative",
      title: "Writers & Novelists",
      subtitle: "Never lose the thread of a 400-page manuscript or multi-book saga.",
      description:
        "When writing complex fiction, the cognitive burden of tracking dozens of characters, timeline constraints, emotional arcs, and subtextual motifs can derail creative momentum. THREADSPARK acts as your personal script supervisor and developmental editor.",
      keyFeatures: [
        "Dynamic character dossiers that update with every chapter",
        "Chronological plot-dependency graph detecting logic traps",
        "Stylometric voice analyzer checking for tone consistency",
        "Automated continuity radar flagging item losses and physical injuries",
        "Dialogue sparring engine to test conversations before drafting",
      ],
      studioDeepLink: "/studio?tab=continuity",
      scenarios: [
        {
          title: "Tracking a Subplot Across 7 Chapters",
          challenge: "In Chapter 2, Marcus steals an encrypted silk blueprint. In Chapter 5, he is interrogated by Malakar.",
          resolution: "THREADSPARK reminds you where the blueprint was hidden, who knows he possesses it, and suggests how his dialogue should reflect fear of discovery without overt confession.",
          metric: "4 Causal Edges Mapped",
        },
        {
          title: "Character Motivation Drift Detection",
          challenge: "In Draft 1, Elena acts purely out of spite. In Draft 3, you introduce survivor's guilt over Silas.",
          resolution: "The engine flags 3 scenes in Chapters 3, 5, and 7 where her harsh dialogue reflects old spite rather than the newly established protective guilt.",
          metric: "3 Tone Inconsistencies Resolved",
        },
      ],
    },
    {
      id: "worldbuilders",
      icon: Compass,
      badge: "Speculative Worlds & Lore",
      title: "Worldbuilders & RPG Creators",
      subtitle: "Build consistent magic systems, fictional histories, and political maps.",
      description:
        "Worldbuilding requires rigorous internal coherence. If your magic system has strict gravitational rules in one kingdom, those rules cannot be casually broken in another without explanation. THREADSPARK turns your world bible into a living, queryable cosmos.",
      keyFeatures: [
        "Canon rule-enforcement engine for magic and technology constraints",
        "Faction relationship matrix tracking diplomatic treaties and feuds",
        "Interactive geography lore linking locations to key historical events",
        "Generative timeline expansion testing centuries of historical cause-and-effect",
        "Custom glossary generation with phonetic and etymological consistency",
      ],
      studioDeepLink: "/studio?tab=knowledge-graph",
      scenarios: [
        {
          title: "Validating Magic System Constraints",
          challenge: "Ether resonance requires ambient silicate glass to transmit across distances.",
          resolution: "THREADSPARK alerts you when an underground dungeon scene in Chapter 6 uses wireless communication without mentioning crystal relays or mineral veins.",
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
    {
      id: "screenwriters",
      icon: FileText,
      badge: "Dramatic Structure & Dialogue",
      title: "Screenwriters & Dramatists",
      subtitle: "Hone scene beats, character subtext, and dialogue cadences.",
      description:
        "Screenplays demand economy of language, ruthless scene pacing, and unmistakable character voices. THREADSPARK examines your scenes for subtextual depth, rhythmic variety, and structural beat alignment.",
      keyFeatures: [
        "Dialogue cadence radar comparing speech patterns across cast members",
        "Scene objective vs. obstacle audit for every sequence",
        "Alternative beat generator exploring diverging story choices",
        "Format-aware script ingestion preserving sluglines and stage direction",
        "Actor table-read simulation predicting line delivery rhythm",
      ],
      studioDeepLink: "/studio?tab=creative-studio",
      scenarios: [
        {
          title: "Preventing Dialogue Homogenization",
          challenge: "Two characters from opposing social tiers start using similar polysyllabic vocabulary.",
          resolution: "The engine highlights 14 shared phrases and recommends shorter, tactile contractions for the street-level protagonist to restore verbal contrast.",
          metric: "Voice Differentiation: +34%",
        },
        {
          title: "Subtext Density Audit",
          challenge: "A pivotal confrontation feels melodramatic because both characters state their feelings too explicitly.",
          resolution: "Creative Studio generates a rewritten draft where the tension is transferred onto physical action and interrupted sentences.",
          metric: "Restraint Metric: High",
        },
      ],
    },
    {
      id: "researchers",
      icon: Layers,
      badge: "Academic & Cross-Domain Synthesis",
      title: "Researchers & Academics",
      subtitle: "Connect disparate papers, interview transcripts, and archival fragments.",
      description:
        "Academic and investigative research often involves synthesizing hundreds of papers, source interviews, and archival notes. THREADSPARK discovers invisible bridges between findings across diverse disciplines.",
      keyFeatures: [
        "Multi-document thematic clustering across PDFs, notes, and citations",
        "Contradiction detection across experimental findings and literature reviews",
        "Evidence provenance mapping linking conclusions to original source lines",
        "Automated structured briefing generator for literature reviews",
        "Exploratory querying that surfaces overlooked cross-citations",
      ],
      studioDeepLink: "/studio?tab=document-intelligence",
      scenarios: [
        {
          title: "Cross-Synthesizing 100+ Field Notes",
          challenge: "Finding where economic records contradict personal archival journals.",
          resolution: "THREADSPARK correlates municipal expenditure ledgers with private diary entries, highlighting the exact discrepancies in harbor tariff collections.",
          metric: "Cross-Document Match: 96%",
        },
        {
          title: "Citation Provenance Validation",
          challenge: "Verifying whether a secondary source misquoted an original 18th-century covenant.",
          resolution: "Traverses the semantic provenance graph back to the verbatim archival passage, highlighting omitted qualifying clauses.",
          metric: "Exact Provenance Edge",
        },
      ],
    },
    {
      id: "pkm",
      icon: Database,
      badge: "Personal Knowledge Management",
      title: "Personal Knowledge Management",
      subtitle: "A second brain that truly understands the evolution of your ideas.",
      description:
        "Instead of maintaining a graveyard of static markdown notes and forgotten bookmark folders, THREADSPARK creates an active, evolving neural library that surfaces relevant past thinking right when you need it.",
      keyFeatures: [
        "Effortless ingestion of daily notes, bookmarks, journal entries, and drafts",
        "Automated bidirectional linking without tedious manual tagging",
        "Cognitive trajectory tracking showing how your opinions have shifted over time",
        "Context-sensitive ideation assistant recommending related historical thoughts",
        "Local-first vector storage with absolute privacy guarantees",
      ],
      studioDeepLink: "/studio?tab=ai-workspace",
      scenarios: [
        {
          title: "Resurfacing Forgotten Insights",
          challenge: "Wrestling with a conceptual paradox while drafting an essay on civic architecture.",
          resolution: "THREADSPARK automatically pulls in an unfinished thesis from two years ago that solved the exact philosophical dilemma with supporting diagrams.",
          metric: "Associative Leap Identified",
        },
        {
          title: "Intellectual Trajectory Tracking",
          challenge: "Seeing how your perspective on decentralized institutions has evolved over 3 years.",
          resolution: "Generates an annotated timeline comparing your notes across 2024, 2025, and 2026, marking pivotal moments of paradigm shift.",
          metric: "3-Year Trajectory Mapped",
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
      <InvestorModal isOpen={investorOpen} onClose={() => setInvestorOpen(false)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-brand-border/40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Tailored For Deep Thinkers &amp; Storytellers
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            How visionary creators use persistent intelligence.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Whether you are maintaining continuity across a multi-book fantasy saga, organizing decades of research, or polishing screenplay dialogue, THREADSPARK adapts to your workflow.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {useCases.map((c) => {
              const Icon = c.icon;
              const isSelected = selectedCase === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    sound.tick();
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>{currentCase.badge}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight">
                {currentCase.title}
              </h2>

              <p className="text-brand-champagne font-serif text-lg italic">
                &ldquo;{currentCase.subtitle}&rdquo;
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
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

              <div className="pt-4">
                <Link
                  href={currentCase.studioDeepLink}
                  onClick={() => sound.tick()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-surface hover:bg-white/10 border border-brand-border text-xs font-mono text-white transition-all shadow-sm"
                >
                  <span>Launch {currentCase.title.split("&")[0]} Workflow in Studio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-champagne" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive Scenario Simulation Box */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Live Workflow Scenario Simulation
                  </span>
                  <span className="text-xs font-mono text-brand-champagne">
                    Interactive Walkthrough
                  </span>
                </div>

                {/* Scenario Tabs */}
                <div className="flex gap-2">
                  {currentCase.scenarios.map((scen, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.tick();
                        setActiveScenarioIdx(idx);
                      }}
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
                      The Creator&apos;s Bottleneck:
                    </span>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {activeScenario.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      THREADSPARK Contextual Resolution:
                    </span>
                    <p className="text-xs text-slate-200 font-sans leading-relaxed">
                      {activeScenario.resolution}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-surface/70 border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Performance Metric: <strong>{activeScenario.metric}</strong></span>
                    <span className="text-brand-champagne">100% Deterministic</span>
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
              Universal Ecosystem
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Built for interconnected knowledge.
            </h2>
            <p className="text-slate-400 text-sm">
              Explore how each creator archetype integrates with the same unified memory engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  onClick={() => {
                    sound.tick();
                    setSelectedCase(c.id);
                    setActiveScenarioIdx(0);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  className="glass-panel-interactive p-6 rounded-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-lavender flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-white font-medium mb-2">{c.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{c.subtitle}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-brand-champagne font-mono">
                    <span>Test Workflow</span>
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
            Bring your creative universe into persistent focus.
          </h2>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed">
            THREADSPARK Studio lets you test character dossiers, continuity radars, and style-conditioned rewriting in a real sandbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Launch Studio Experience</span>
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-medium transition-all border border-white/10"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Institutional Studio Pilot</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
