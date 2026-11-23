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
