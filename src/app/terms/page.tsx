"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-void text-slate-100 flex flex-col selection:bg-brand-violet/30 selection:text-white">
      <Navbar />

      <main className="flex-1 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-brand-border mb-6">
            <Scale className="w-3.5 h-3.5 text-brand-champagne" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lavender">
              Legal &bull; Terms of Service
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-tight">
            Terms of Service
          </h1>

          <div className="text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-brand-border">
            <span>Effective Date: November 23, 2026</span> &bull;{" "}
            <span>Operator &amp; Controller: {SITE_CONFIG.founder.name} ({SITE_CONFIG.location})</span>
          </div>

          <div className="space-y-10 text-slate-300 text-sm leading-relaxed font-light">
            {/* 1. Overview */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">1. Overview and Program Scope</h2>
              <p>
                These Terms of Service govern your access to and use of Threadspark, operated by {SITE_CONFIG.founder.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;Threadspark&rdquo;), based in {SITE_CONFIG.location}. Threadspark is currently operating as a prototype under an active Design Partner Program for indie and self-published fiction authors.
              </p>
              <p>
                By applying for or participating in the Design Partner Program, accessing our prototype studio, or submitting manuscript materials, you agree to these Terms.
              </p>
            </section>

            {/* 2. Intellectual Property & Manuscript Ownership */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">2. Author Ownership &amp; Intellectual Property</h2>
              <p>
                <strong className="text-white">You retain 100% ownership of your manuscripts, characters, worldbuilding lore, and all creative works.</strong> Threadspark claims zero copyright, ownership, or licensing interest in your manuscripts.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 font-mono text-xs">
                <li>We do not train public, pooled, or commercial foundation models on your submitted text.</li>
                <li>Your manuscripts are processed solely to generate your private story-state graph, entity dossiers, and continuity verification flags.</li>
                <li>If you participate in our Phase 2 voice-fingerprinting features, all resulting lightweight style adapter weights (.safetensors) are your exclusive property.</li>
              </ul>
            </section>

            {/* 3. Design Partner Cohort & Service Terms */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">3. Design Partner Cohort &amp; Pricing Notice</h2>
              <p>
                {SITE_CONFIG.businessModel}
              </p>
              <p>
                Participation in the cohort is free of charge. You may terminate your participation at any time by notifying us, and your data will be purged immediately upon request.
              </p>
            </section>

            {/* 4. Prototype Nature & Disclaimers */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">4. Prototype Nature &amp; Disclaimers</h2>
              <p>
                Threadspark is currently an early-stage software prototype. The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While our continuity radar is engineered for precision, we do not guarantee that the software will detect every continuity discrepancy or that all flagged collisions represent errors. Authors remain solely responsible for the final publication of their manuscripts.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Threadspark or its founder be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or manuscripts resulting from your access to or inability to use the service.
              </p>
            </section>

            {/* 6. Contact */}
            <section className="p-6 rounded-2xl bg-brand-charcoal/70 border border-brand-border space-y-2">
              <h3 className="font-serif text-lg text-white font-medium">6. Contact &amp; Questions</h3>
              <p className="text-xs text-slate-400">
                For questions regarding these Terms of Service or to submit requests:
              </p>
              <div className="font-mono text-xs text-slate-300">
                <div>Operator: {SITE_CONFIG.founder.name}</div>
                <div>Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a> / <a href={`mailto:${SITE_CONFIG.companyEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.companyEmail}</a></div>
                <div>Location: {SITE_CONFIG.location}</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
