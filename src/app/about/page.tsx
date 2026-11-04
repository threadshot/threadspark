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
      version: "v1.0",
      year: "2024",
      status: "Completed",
      title: "Bedrock Ingestion Engine",
      summary: "First-generation neural entity parser, lexical tokenization, and chapter segmentation for fiction manuscripts.",
    },
    {
      version: "v2.0",
      year: "2025",
      status: "Completed",
      title: "Stylometrics & Continuity Radar",
      summary: "Type-Token Ratio mathematical profiler, physical state collision detection, and automated 1-click authorial fixes.",
    },
    {
      version: "v2.4",
      year: "Current Release",
      status: "Active",
      title: "Spatial Vector Graph & Creative Studio",
      summary: "SVG topological spatial graph, unified diff writing studio, and zero-degradation local vector storage.",
    },
    {
      version: "v3.0",
      year: "2027 Roadmap",
      status: "In Development",
      title: "Multi-Agent World Rooms & Counterfactual Sandbox",
      summary: "Simulated table-reads where autonomous character agents spar in real time under strict canon constraints.",
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
                &ldquo;To give people an AI that understands the things they create, not just the individual questions they ask.&rdquo;
              </p>
              <p className="text-sm">
                For years, software forced creators to conform to the machine: filing documents in rigid directories, tagging notes manually, and constantly re-explaining context to forgetful chatbots. THREADSPARK turns this dynamic inside out. We build systems that adapt to the creator, holding the full mental model of your work in persistent focus.
              </p>
            </div>
          </div>

          {/* Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-brand-border/40">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne block mb-2">
                02 / THE PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Our Philosophy</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-white font-serif italic">
                &ldquo;Creative work, research, and personal knowledge should not exist as disconnected fragments. They should form an interconnected body of knowledge that can grow and evolve.&rdquo;
              </p>
              <p className="text-sm">
                Human creativity is associative. When you write a pivotal scene in a novel, your subconscious recalls an offhand observation from three years ago, a piece of architectural research from last winter, and the subtle emotional temperature of a childhood memory. THREADSPARK provides a computational substrate for that exact associative leap.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-12 border-t border-brand-border/40">
            <div className="md:col-span-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 block mb-2">
                03 / THE VISION
              </span>
              <h2 className="font-serif text-3xl font-normal text-white">Our Vision</h2>
            </div>
            <div className="md:col-span-8 space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-white font-serif italic">
                &ldquo;A future where individuals have access to personal intelligence systems that understand their work, preserve their context, and help them explore ideas more deeply.&rdquo;
              </p>
              <p className="text-sm">
                We envision a world where every novelist, worldbuilder, scholar, and thinker has a persistent intellectual companion—an assistant that has read everything you have ever written, understands your ethical principles, honors your aesthetic voice, and stands ready to help you navigate the labyrinth of long-term creation.
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
