import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Plain-language terms of service for Threadspark. You retain 100% ownership of your manuscripts, data, and adapter weights.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Threadspark Terms of Service",
    description: "Author ownership, design partner cohort terms, and legal commitments.",
    url: "/terms",
  },
};

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

          <div className="text-xs font-mono text-slate-400 mb-8 pb-4 border-b border-brand-border flex flex-wrap items-center justify-between gap-2">
            <span>Effective Date: November 23, 2026</span>
            <span>Operator: {SITE_CONFIG.companyIdentity}</span>
          </div>

          <div className="space-y-10 text-slate-300 text-sm leading-relaxed font-light">
            {/* 1. Overview */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">1. Overview and Program Scope</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of Threadspark, operated by {SITE_CONFIG.companyIdentity} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;Threadspark&rdquo;). Threadspark is currently operating as a prototype software service and active Design Partner Program designed for indie novelists, serialized authors, and worldbuilders.
              </p>
              <p>
                By applying for or participating in the Design Partner Program, accessing our prototype studio, or submitting manuscript materials, you agree to be bound by these Terms.
              </p>
            </section>

            {/* 2. Eligibility */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">2. Eligibility and Age Requirements</h2>
              <p>
                You must be at least 18 years of age (or the age of legal majority in your jurisdiction) to apply for the Design Partner Program or use the Threadspark platform. By accessing the service, you represent and warrant that you meet this requirement and possess the legal capacity to enter into these Terms.
              </p>
            </section>

            {/* 3. Intellectual Property & Manuscript Ownership */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">3. Author Ownership &amp; Intellectual Property</h2>
              <p>
                <strong className="text-white">You retain 100% ownership of your manuscripts, characters, lore, worldbuilding outlines, and all original creative works.</strong> Threadspark claims zero copyright, intellectual property ownership, or commercial licensing interest in your manuscripts.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 font-mono text-xs">
                <li>We do not train, evaluate, or fine-tune public, pooled, or commercial foundation models on your submitted text.</li>
                <li>Your manuscripts are processed solely to generate your private story-state graph, entity dossiers, and continuity verification flags.</li>
                <li>When you participate in our voice-fingerprinting features, all resulting lightweight style adapter weights (.safetensors) remain your exclusive, portable property.</li>
              </ul>
            </section>

            {/* 4. Acceptable Use */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">4. Acceptable Use Policy</h2>
              <p>
                You agree to use Threadspark in compliance with all applicable laws and ethical creative standards. Specifically, you agree that you will not:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-400 text-xs">
                <li>Upload manuscripts or materials that you do not own or hold necessary intellectual property rights to process.</li>
                <li>Upload unlawful, harassing, defamatory, or malicious content.</li>
                <li>Attempt to probe, reverse engineer, decompile, or bypass the service, its state extraction algorithms, or its infrastructure boundaries.</li>
                <li>Interfere with or disrupt the integrity, performance, or security of the platform or other partners&apos; isolated environments.</li>
              </ul>
            </section>

            {/* 5. Design Partner Cohort & Pricing Notice */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">5. Design Partner Cohort &amp; Business Model</h2>
              <p>
                {SITE_CONFIG.businessModel}
              </p>
              <p>
                Participation in the cohort is free of charge. You may terminate your participation at any time by notifying us, and your manuscripts, extracted graphs, and diagnostic telemetry will be permanently deleted {SITE_CONFIG.deletionWindow}.
              </p>
            </section>

            {/* 6. Prototype Nature & Disclaimers */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">6. Prototype Nature &amp; Disclaimers</h2>
              <p>
                Threadspark is currently an evolving software prototype. The service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
              </p>
              <p>
                While our continuity radar is engineered for precision over recall, we do not guarantee that the software will catch every narrative discrepancy or that all flagged collisions represent errors. Authors remain solely responsible for the review, editing, and final publication of their literary works.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Threadspark, its founder, or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, creative data, or manuscripts resulting from your access to, use of, or inability to use the service.
              </p>
            </section>

            {/* 8. Changes to Terms */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">8. Changes to these Terms</h2>
              <p>
                We may revise these Terms as our platform evolves. If we make material changes, we will provide at least 30 days&apos; advance notice by updating the effective date on this page and notifying active design partners via email. Your continued use of Threadspark after the effective date constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 9. Termination */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">9. Termination</h2>
              <p>
                You may terminate these Terms and your cohort participation at any time by requesting deletion of your data. We reserve the right to suspend or terminate your access to the prototype at our discretion if you materially violate these Terms, providing written notice where practical.
              </p>
            </section>

            {/* 10. Governing Law & Jurisdiction */}
            <section className="space-y-3">
              <h2 className="font-serif text-2xl text-white font-medium">10. Governing Law and Jurisdiction</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of Washington, United States, without giving effect to any principles of conflicts of law. You agree that any legal action or proceeding arising out of or related to these Terms or the service shall be brought exclusively in the state or federal courts located in King County, Washington, and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            {/* 11. Contact */}
            <section className="p-6 rounded-2xl bg-brand-charcoal/70 border border-brand-border space-y-2">
              <h3 className="font-serif text-lg text-white font-medium">11. Legal Operator &amp; Contact</h3>
              <p className="text-xs text-slate-400">
                For questions regarding these Terms of Service or legal inquiries:
              </p>
              <div className="font-mono text-xs text-slate-300 space-y-1">
                <div>Legal Operator: {SITE_CONFIG.companyIdentity}</div>
                <div>Sole Proprietor: {SITE_CONFIG.founder.name}</div>
                <div>Contact Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-brand-champagne underline">{SITE_CONFIG.contactEmail}</a></div>
                <div>Location: {SITE_CONFIG.location}</div>
              </div>
            </section>
          </div>

          <div className="pt-12 border-t border-brand-border/60 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/privacy" className="text-xs font-mono text-brand-champagne hover:underline">
              &rarr; Review Privacy Policy &amp; Data Promise
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
