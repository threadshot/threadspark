"use client";

import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  Building2,
  GitBranch,
  Lock,
  Layers,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { InvestorModal } from "@/components/InvestorModal";

export default function AboutPage() {
  const [investorOpen, setInvestorOpen] = useState(false);

  const principles = [
    {
      title: "Context Sovereignty",
      description:
        "Your thoughts, characters, research, and stories belong solely to you. We believe in local-first storage, encrypted relational graphs, and a strict commitment against training third-party public foundation models on private user creations.",
    },
    {
      title: "Symbiosis, Not Replacement",
      description:
        "The goal of AI in creative work should never be to press a button and generate a generic book. The goal is to illuminate connections, preserve memory, spark lateral thinking, and empower human authors to reach heights of complexity previously unmanageable.",
    },
    {
      title: "Long-Horizon Intelligence",
      description:
        "Ephemeral prompt windows are fundamentally incompatible with ambitious intellectual projects. True personal intelligence requires an architecture built for years, remembering early fragments as clearly as recent drafts.",
    },
    {
      title: "Stylistic Sanctity",
      description:
        "An author's voice is their soul. We reject homogenized, bland machine prose. Our system studies and respects your syntax, rhythm, vocabulary, and tonal choices, acting as a true mirror to your unique literary style.",
    },
  ];

  const milestones = [
    {
      version: "Phase 1",
      year: "2024",
      status: "Completed",
      title: "Core Graph & Ingestion Engine",
      summary: "Validated on open-weight models: manuscript chunking, entity extraction, temporal story-state mapping, and epistemic boundary enforcement.",
    },
    {
      version: "Phase 2",
      year: "Current Release",
      status: "Active",
      title: "Per-Author LoRA Style Adapters",
      summary: "Lightweight (~25MB) style adapters trained solely on an author's prose. Authors own their adapter weights (.safetensors) with 100% portable sovereignty.",
    },
    {
      version: "Phase 3",
      year: "2026-2027",
      status: "In Development",
      title: "Consensual Genre Bases & Studio Sandbox",
      summary: "Genre- and theme-tuned base models built strictly on public-domain or explicitly compensated, opt-in author datasets with verified provenance.",
    },
  ];

  const strategicRisks = [
    {
      risk: "Authors' Distrust of AI",
      detail: "Many serious fiction writers view AI as generic ghostwriting that undermines creative integrity.",
      mitigation: "Positioned strictly as a memory assistant, temporal fact-checker, and developmental editor. Text generation is strictly optional; our primary value is state tracking.",
    },
    {
      risk: "Extraction Errors & Hallucinations",
      detail: "Automated NLP pipelines can misidentify aliases, misattribute dialogue, or flag false continuity bugs.",
      mitigation: "Propose-then-confirm workflow gives authors final veto on every entity. Collision radar is tuned for precision over recall to eliminate annoying false alarms.",
    },
    {
      risk: "Incumbents Adding Auto-Extraction",
      detail: "Competitors with existing distribution (Sudowrite, Novelcrafter) could try to automate their story bibles.",
      mitigation: "We compete on temporal story-state & epistemic boundaries, author-owned LoRA weights, and private-cloud data sovereignty—not just note summaries.",
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
      <InvestorModal isOpen={investorOpen} onClose={() => setInvestorOpen(false)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-brand-border/40">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-violet/15 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Feather className="w-3.5 h-3.5 text-brand-champagne" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Our Manifesto &amp; Creative Thesis
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            We believe ideas have history.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            THREADSPARK was founded on a simple conviction: artificial intelligence should not be a disposable vending machine for quick answers, but an enduring personal memory for everything you create.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25"
            >
              <Sparkles className="w-4 h-4 text-brand-champagne" />
              <span>Explore The Live Platform</span>
            </Link>

            <button
              onClick={() => {
                sound.tick();
                setInvestorOpen(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass-panel hover:bg-white/10 text-slate-200 hover:text-white text-xs font-mono font-medium transition-all border border-white/10"
            >
              <Building2 className="w-4 h-4 text-brand-champagne" />
              <span>Institutional Inquiries</span>
            </button>
          </div>
        </div>
      </section>

      {/* THE THREE CORE PILLARS: MISSION, PHILOSOPHY, VISION */}
      <section className="py-24 border-b border-brand-border/40 relative">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-violet block mb-2">
                01 / THE MISSION
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Our Mission</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Threadspark is the source of truth for long-form fiction. It reads an author&apos;s entire archive and builds a living, versioned model of their story: who exists, what&apos;s happened to them, and who knows what.&rdquo;
              </p>
              <p className="text-sm">
                Authors don&apos;t need a bigger chat window; they need a persistent, auditable state machine. By automating story-state extraction, confirming entities with authors, and flagging continuity collisions with exact line links, Threadspark preserves the canon of long-form universes.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-brand-border/40">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne block mb-2">
                02 / THE WEDGE
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Wedge to Expansion</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Start where the continuity burden is acute: indie series authors managing multi-book universes.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border">
                  <div className="text-brand-champagne font-semibold mb-1">Wedge: Series Authors</div>
                  <div className="text-slate-400">Indie and self-published novelists whose lore and character arcs compound across 3&ndash;10 books.</div>
                </div>
                <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border">
                  <div className="text-brand-lavender font-semibold mb-1">Stage 2: Small Presses</div>
                  <div className="text-slate-400">Freelance developmental editors and book packaging houses auditing client manuscripts.</div>
                </div>
                <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border">
                  <div className="text-emerald-400 font-semibold mb-1">Stage 3: Narrative Studios</div>
                  <div className="text-slate-400">Game narrative designers and screenwriters managing episodic lore bibles.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-brand-border/40">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                03 / THE VISION
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Sovereignty &amp; Moat</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Lock-in comes from compounding value, never from held-hostage data.&rdquo;
              </p>
              <p className="text-sm">
                We believe in 100% open export (SQLite, JSON, and Markdown) and author-owned style adapter weights (.safetensors). The more an author writes, the more valuable their private story graph and voice fingerprint become. You stay because Threadspark makes you a better author, not because you can&apos;t leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY ROADMAP */}
      <section className="py-24 border-b border-brand-border/40 relative bg-brand-dark/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne mb-3 block">
              Architectural Roadmap
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight mb-4">
              Evolution of the Platform
            </h2>
            <p className="text-slate-400 text-sm">
              Our engineering milestones from bedrock token parsing to multi-agent counterfactual sandboxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={m.version}
                className={`glass-panel p-6 rounded-2xl border flex flex-col justify-between ${
                  m.status === "Active"
                    ? "border-brand-violet/50 shadow-lg shadow-brand-violet/10"
                    : "border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-semibold text-brand-champagne">
                      {m.version}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        m.status === "Active"
                          ? "bg-brand-violet text-white font-semibold"
                          : m.status === "Completed"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-brand-surface text-slate-400"
                      }`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-medium text-white mb-2">{m.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{m.summary}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Target: {m.year}
                </div>
              </div>
            ))}
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
              Credibility means confronting hard platform realities openly. Here are the five existential risks in creative AI software and our exact engineering answers.
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
                  <p className="text-xs text-slate-200 leading-relaxed">{item.mitigation}</p>
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
                <p className="text-slate-300 text-sm leading-relaxed">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLISHED CLOSING STATEMENT */}
      <section className="py-28 relative text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender flex items-center justify-center mx-auto mb-8">
            <Anchor className="w-6 h-6 text-brand-champagne" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-normal leading-snug mb-6">
            &ldquo;We don&apos;t just remember what you write. We remember why you wrote it.&rdquo;
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Experience how persistent personal intelligence transforms the horizon of what you can build.
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
              <span>Institutional Briefing</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
