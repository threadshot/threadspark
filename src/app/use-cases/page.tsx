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
} from "lucide-react";

export default function UseCasesPage() {
  const [selectedCase, setSelectedCase] = useState<string>("novelists");

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
      sampleScenario: {
        headline: "Tracking a Subplot Across 7 Chapters",
        detail:
          "In Chapter 2, Marcus steals an encrypted silk blueprint. When he is interrogated in Chapter 5, THREADSPARK reminds you where the blueprint was hidden, who knows he possesses it, and how his dialogue should reflect fear of discovery.",
      },
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
      sampleScenario: {
        headline: "Validating Magic System Constraints",
        detail:
          "If ether resonance requires ambient silicate glass to transmit, THREADSPARK warns you if an underground dungeon scene in Chapter 6 uses wireless communication without mentioning crystal relays.",
      },
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
      sampleScenario: {
        headline: "Preventing Dialogue Homogenization",
        detail:
          "The engine flags when two characters with opposing backgrounds start sounding identical, pointing out shared syntax habits and recommending dialect adjustments.",
      },
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
      sampleScenario: {
        headline: "Cross-Synthesizing 100+ Field Notes",
        detail:
          "Ask: 'Where do the economic records from 1922 directly contradict the personal journals of the municipal commissioner?' THREADSPARK highlights exact excerpts in seconds.",
      },
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
      sampleScenario: {
        headline: "Resurfacing Forgotten Insights",
        detail:
          "While writing a new essay on decentralization, THREADSPARK automatically pulls in a half-written thesis from two years ago that solved the exact philosophical dilemma you are wrestling with today.",
      },
    },
  ];

  const currentCase = useCases.find((c) => c.id === selectedCase) || useCases[0];
  const CurrentIcon = currentCase.icon;

  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />

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
            Architected for every form of long-range creative work.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            From epic novel series and intricate fictional universes to investigative research and screenwriting, discover how THREADSPARK adapts to your discipline.
          </p>

          {/* Navigation Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {useCases.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedCase === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedCase(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-brand-violet text-white shadow-lg shadow-brand-violet/25 border border-brand-violet"
                      : "glass-pill text-slate-400 hover:text-white border border-brand-border"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Use Case Deep Dive */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glass-panel p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                  <CurrentIcon className="w-3.5 h-3.5" />
                  {currentCase.badge}
                </div>

                <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
                  {currentCase.title}
                </h2>

                <p className="font-serif italic text-lg text-brand-champagne">
                  &ldquo;{currentCase.subtitle}&rdquo;
                </p>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {currentCase.description}
                </p>

                <div className="pt-4 border-t border-brand-border/60">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                    Key Capabilities for this Discipline:
                  </h4>
                  <ul className="space-y-3">
                    {currentCase.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-200 font-mono">
                        <CheckCircle2 className="w-4 h-4 text-brand-violet mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Interactive Scenario Box */}
              <div className="lg:col-span-6 space-y-6">
                <div className="p-6 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono text-slate-400">
                    <span className="text-brand-champagne flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-brand-violet" />
                      Live Scenario Simulation
                    </span>
                    <span>Discipline: {currentCase.id.toUpperCase()}</span>
                  </div>

                  <h3 className="font-serif text-xl text-white font-medium">
                    {currentCase.sampleScenario.headline}
                  </h3>

                  <div className="p-4 rounded-xl bg-brand-surface/70 border border-white/5 text-xs text-slate-300 leading-relaxed font-sans">
                    {currentCase.sampleScenario.detail}
                  </div>

                  <div className="p-4 rounded-xl bg-brand-charcoal/80 border border-brand-border/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Simulation Status:</span>
                    <span className="text-emerald-400 font-semibold">Active in Threadspark Studio</span>
                  </div>
                </div>

                <div className="p-6 rounded-2xl glass-panel-interactive border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-lg text-white font-medium">Want to test this use case?</div>
                    <div className="text-xs text-slate-400 mt-1">Experience it preloaded with The Glass Meridian manuscript.</div>
                  </div>
                  <Link
                    href="/studio"
                    className="px-5 py-2.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-medium transition-colors flex items-center gap-1.5 shadow-lg shadow-brand-violet/20"
                  >
                    <span>Try Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All 5 Use Cases at a Glance */}
      <section className="py-24 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-violet mb-2 block">
              Cross-Disciplinary Power
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-normal">
              Compare All Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedCase(item.id);
                    window.scrollTo({ top: 350, behavior: "smooth" });
                  }}
                  className="glass-panel-interactive p-6 rounded-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-lavender flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.subtitle}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-brand-lavender">
                    <span>Inspect Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

