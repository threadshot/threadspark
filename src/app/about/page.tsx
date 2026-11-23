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
