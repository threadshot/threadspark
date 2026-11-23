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
              Privacy Policy &amp; Data Promise
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
            Privacy Policy
          </h1>

          <div className="text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-brand-border flex flex-wrap items-center justify-between gap-2">
            <span>Effective Date: November 23, 2026</span>
            <span>Data Controller: {SITE_CONFIG.founder.name} ({SITE_CONFIG.location})</span>
          </div>

          <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12">
            For fiction authors, an unpublished manuscript is an irreplaceable creative asset. Here is our exact, binding privacy policy and data governance standard.
          </p>

          <div className="space-y-12 text-sm text-slate-300 leading-relaxed font-light">
            {/* 1. Controller & Scope */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">1. Data Controller and Contact</h2>
              <p>
                The data controller for Threadspark is solo founder &amp; engineer {SITE_CONFIG.founder.name}, operating from {SITE_CONFIG.location}.
              </p>
              <p>
                For any privacy questions, access requests, or permanent deletion demands, contact Ezekiel directly at:
              </p>
              <div className="p-4 rounded-xl bg-brand-charcoal/80 border border-brand-border font-mono text-xs text-slate-200 space-y-1">
                <div>Primary Privacy Contact: <a href={`mailto:${SITE_CONFIG.privacyEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.privacyEmail}</a></div>
                <div>Alternative Direct Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a></div>
                <div>Entity: {SITE_CONFIG.companyIdentity}</div>
              </div>
            </section>

            {/* 2. Isolated Infrastructure & Exact AWS Plan */}
            <section className="p-8 rounded-3xl bg-brand-charcoal/70 border border-brand-violet/40 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
                Cohort Architecture &amp; Hosting Environment
              </div>
              <h2 className="font-serif text-2xl text-white font-medium">
                Manuscript Processing &amp; AWS Infrastructure Roadmap
              </h2>
              <blockquote className="p-4 rounded-xl bg-brand-dark/90 border-l-2 border-brand-violet text-slate-200 font-sans leading-relaxed text-sm">
                During the design partner cohort, the founder supervises all manuscript ingestion and verification. Manuscripts are processed over encrypted connections in an isolated environment for each partner and are never pooled with other authors&apos; work. Today this environment runs on dedicated local workstation compute with per-partner encrypted containers. We plan to move it to AWS, with a separate account or VPC per partner, by Q2 2027.
              </blockquote>
            </section>

            {/* 3. What We Collect and Why */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl text-white font-medium">2. Information We Collect and Process</h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <strong className="text-white font-mono block mb-1">A. Partner Information</strong>
                  <span>Your name, email address, series genre, volume count, and current continuity workflow submitted through our Design Partner application form. Used solely to manage cohort communications and onboarding.</span>
                </div>
                <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <strong className="text-white font-mono block mb-1">B. Manuscript &amp; Lore Files</strong>
                  <span>EPUB, DOCX, Markdown, or Scrivener text submitted for continuity processing. Used strictly to extract entity dossiers, temporal state graphs, and continuity collision reports.</span>
                </div>
                <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border">
                  <strong className="text-white font-mono block mb-1">C. Technical Telemetry &amp; Error Logs</strong>
                  <span>Internal model diagnostic counts (e.g. token segment counts, runtime per pass) without recording manuscript text into shared monitoring services.</span>
                </div>
              </div>
            </section>

            {/* 4. Strict Zero-Training Guarantee */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">3. Strict Zero Public Model Training</h2>
              <p>
                <strong className="text-white">We do not train, fine-tune, or evaluate public or third-party foundation models on your submitted manuscripts.</strong>
              </p>
              <p>
                Any future genre-specific base models developed by Threadspark (Phase 3) will be trained exclusively on verified public domain literature or works provided with explicit, compensated author consent.
              </p>
            </section>

            {/* 5. Data Retention & Permanent Deletion Requests */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">4. Data Retention and Deletion Rights</h2>
              <p>
                <strong className="text-white">Retention Period:</strong> Your manuscripts and generated story graphs are retained only for the active duration of the Design Partner Program to provide continuity checking across drafts, or until you request deletion.
              </p>
              <p>
                <strong className="text-white">One-Click Deletion:</strong> You have the right to request immediate and complete deletion of your manuscripts, extracted story-state graphs, vector embeddings, and all diagnostic logs at any time. To execute a deletion request, email <a href={`mailto:${SITE_CONFIG.privacyEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.privacyEmail}</a> or <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a> with the subject &ldquo;Data Deletion Request&rdquo;. Requests are processed and permanently wiped within 48 hours.
              </p>
              <p>
                <strong className="text-white">Lossless Export:</strong> You may request or download an export of your extracted story bible and graph in open JSON, SQLite, or Markdown formats at any time.
              </p>
            </section>

            {/* 6. Legal Rights (GDPR & CCPA) */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">5. Your Legal Rights</h2>
              <p>
                Depending on your location, you may have rights under the GDPR, UK Data Protection Act, or California Consumer Privacy Act (CCPA), including the right to access, rectify, port, or erase your personal information. Because we collect minimal personal data and maintain direct founder contact, any request can be addressed directly by emailing our data controller.
              </p>
            </section>

            {/* 7. Subprocessors & Security */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">6. Security Measures</h2>
              <p>
                All data transfers occur over TLS 1.3 encrypted connections. During the prototype stage, data is maintained on hardware-encrypted disks with per-partner isolated environments.
              </p>
            </section>
          </div>

          <div className="pt-12 border-t border-brand-border/60 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/terms" className="text-xs font-mono text-brand-champagne hover:underline">
              &rarr; Review Terms of Service
            </Link>
            <Link href="/" className="text-xs font-mono text-slate-400 hover:text-white transition-colors">
              &larr; Return to Homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
