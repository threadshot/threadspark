"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, HardDrive, FileText, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Trust &amp; Author Sovereignty
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
            Our Data Commitments &amp; Privacy Architecture
          </h1>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12">
            For fiction writers, an unpublished manuscript is the most sensitive document they possess. Here are the core architectural commitments we design toward to protect your intellectual property.
          </p>

          <div className="space-y-12">
            {/* 1. What the AI does and doesn't do */}
            <div className="p-8 rounded-3xl bg-brand-charcoal/80 border border-brand-border space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                Core Stance
              </div>
              <h2 className="font-serif text-2xl text-white font-medium">
                What Threadspark Does and Doesn&apos;t Do
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-white">Threadspark does not ghostwrite your book.</strong> It reads what you have already written, extracts your characters, physical states, timelines, and secrets, and tells you when something doesn&apos;t add up.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Writing sparring or dialogue generation is strictly optional and separated from the continuity engine. Our primary value is memory, state tracking, and developmental fact-checking.
              </p>
            </div>

            {/* 2. Concrete Commitments */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-white font-medium">Architectural Design Commitments</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-brand-dark/70 border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">1. Zero Public Training</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We will never sell your manuscripts, share them with third parties, or use them to train public foundation models. Your drafts belong solely to you.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-brand-dark/70 border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 text-brand-lavender flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">2. Author-Owned Style Adapters</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    In Phase 2, if you use the optional voice-fingerprint feature, the resulting style adapter weights (.safetensors) are 100% your property. You can download and run them privately anytime.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-brand-dark/70 border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center">
                    <HardDrive className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">3. Lossless Export Anytime</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    You can export your entire extracted story bible, timeline, and character dossiers into open JSON, SQLite, and Markdown with a single click. Zero proprietary lock-in.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-brand-dark/70 border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg text-white font-medium">4. Permanent Deletion on Demand</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    If you choose to leave Threadspark, clicking delete permanently purges your manuscripts, extracted state graphs, and cached vectors from our database.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Design Partner Cohort Transparency */}
            <div className="p-8 rounded-3xl bg-brand-charcoal/50 border border-brand-border space-y-4">
              <h3 className="font-serif text-xl text-white font-medium">Design Partner Cohort Manuscript Handling</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                During the early design partner cohort of {SITE_CONFIG.designPartnerCohortSize} authors, all manuscript ingestion and verification runs are supervised directly by solo founder {SITE_CONFIG.founder.name}. Manuscripts are ingested over encrypted connections into dedicated AWS environments and never pooled.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Ezekiel Heretta directly</span>
                </a>
                <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
                  &larr; Back to Overview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
