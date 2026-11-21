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
      title: "State Is More Than Raw Text",
      description:
        "A 1-million-token context window is not a state machine. It cannot reliably remember whether a character's left arm is broken in Chapter 14 or whether they've learned a secret yet. True narrative intelligence requires structured, deterministic temporal graphs.",
    },
    {
      title: "Stylistic Sanctity",
      description:
        "An author's voice is their signature. We reject homogenized machine prose. In our staged model architecture, style is captured through private, author-owned lightweight adapters—never pooled into shared foundation models.",
    },
  ];

  const milestones = [
    {
      version: "Phase 1: Working Prototype",
      tag: "Prototype (working)",
      period: "2026",
      status: "Functional Prototype",
      title: "Temporal Graph & Ingestion Engine",
      summary: "Validated on open-weight models: automated manuscript ingestion, propose-then-confirm story bible extraction, temporal state invariants (injuries, items, locations), and epistemic leak detection on sample manuscripts.",
    },
    {
      version: "Phase 2: In Development",
      tag: "In development",
      period: "Target: Q2 2027",
      status: "In Development",
      title: "Per-Author LoRA Style Adapters",
      summary: "Lightweight (~25MB) PEFT/LoRA style adapters trained solely on an author's backlist. Authors own their adapter weights (.safetensors) with 100% portable sovereignty. Currently in active model pipeline development.",
    },
    {
      version: "Phase 3: Long-Term Vision",
      tag: "Vision",
      period: "Target: 2028",
      status: "Vision / Research",
      title: "Consensual Genre Bases & Studio Sandbox",
      summary: "Genre- and trope-tuned base models built strictly on public-domain or explicitly compensated, opt-in author archives with verified legal provenance.",
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
      mitigation: "Propose-then-confirm workflow gives authors final veto on every entity and timeline event. Collision detection is aggressively tuned for precision over recall to eliminate crying-wolf false alarms.",
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
              About Threadspark &bull; The Founder &amp; The Thesis
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            We believe stories deserve an infallible memory.
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Threadspark was founded to solve the hardest technical problem in long-form storytelling: keeping track of complex canon, physical states, and character secrets across multi-book sagas.
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
                <span>The Founder &amp; Company Facts</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Ezekiel Heretta
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Solo founder, software engineer, and lifelong speculative fiction reader building deterministic continuity tools.
              </p>

              {/* Verified Company Facts Box for AWS & Reviewers */}
              <div className="p-5 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-3 font-mono text-xs">
                <div className="text-brand-champagne font-semibold uppercase tracking-wider text-[11px]">
                  Verified Company Facts:
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Founded:</span>
                    <span>{SITE_CONFIG.foundedYear}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Structure:</span>
                    <span>Solo Founder &amp; Engineer</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Funding Stage:</span>
                    <span className="text-emerald-400">{SITE_CONFIG.companyType}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Company Domain:</span>
                    <span>{SITE_CONFIG.companyDomain}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1">
                    <span className="text-slate-400">Direct Email:</span>
                    <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">
                      {SITE_CONFIG.contactEmail}
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
                  Personally onboarding the initial 25 series author design partner cohort.
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

      {/* THE THREE CORE PILLARS: MISSION, WEDGE, SOVEREIGNTY */}
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
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Threadspark is the source of truth for long-form fiction. It reads an author&apos;s entire archive and builds a living, versioned model of their story: who exists, what&apos;s happened to them, and who knows what.&rdquo;
              </p>
              <p className="text-sm text-slate-400">
                Authors don&apos;t need a bigger chat window; they need a persistent, auditable state machine. By automating story-state extraction, confirming entities with authors, and flagging continuity collisions with exact line links, Threadspark preserves the canon of long-form universes.
              </p>
            </div>
          </div>

          {/* Wedge to Expansion */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-brand-border/40">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne block mb-2">
                02 / THE CUSTOMER WEDGE
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Wedge to Expansion</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Start where the continuity burden is acute: indie series authors managing multi-book universes.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs font-mono">
                <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border">
                  <div className="text-brand-champagne font-semibold mb-1">Primary Wedge: Series Authors</div>
                  <div className="text-slate-400">Indie and self-published novelists whose lore and character arcs compound across 3&ndash;10 books.</div>
                </div>
                <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border">
                  <div className="text-brand-lavender font-semibold mb-1">Stage 2: Serial Novelists</div>
                  <div className="text-slate-400">High-velocity web fiction authors on Royal Road &amp; Substack where public retcons ruin reader trust.</div>
                </div>
                <div className="p-4 rounded-xl bg-brand-charcoal/70 border border-brand-border">
                  <div className="text-emerald-400 font-semibold mb-1">Stage 3: Narrative Studios</div>
                  <div className="text-slate-400">Game narrative designers and screenwriters managing episodic lore bibles and branching player states.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sovereignty & Moat */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-brand-border/40">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                03 / THE SOVEREIGNTY PROMISE
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Sovereignty &amp; Moat</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Lock-in comes from compounding value, never from held-hostage data.&rdquo;
              </p>
              <p className="text-sm text-slate-400">
                We believe in 100% open export (SQLite, JSON, and Markdown) and author-owned style adapter weights (.safetensors). The more an author writes, the more valuable their private story graph and voice fingerprint become. You stay because Threadspark protects your canon, not because you can&apos;t leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HONEST ROADMAP: WITH UPDATED DATES AND UNIFORM 3 TAGS */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div
                key={m.version}
                className={`glass-panel p-6 rounded-2xl border flex flex-col justify-between ${
                  m.tag === "Prototype (working)"
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
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{m.summary}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Target: {m.period}
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
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Experience how persistent story-state tracking transforms the horizon of what you can write.
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
              <span>Explore Studio Prototype</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
