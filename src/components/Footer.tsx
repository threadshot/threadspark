"use client";

import Link from "next/link";
import { Mail, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-brand-border/40 bg-brand-void pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-violet/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-border/40">
          {/* Brand & Founder info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-violet to-purple-900/60 p-[1px] shadow-md shadow-brand-violet/20">
                  <div className="w-full h-full bg-brand-void rounded-[7px] flex items-center justify-center">
                    <span className="font-serif text-base font-bold text-brand-champagne">T</span>
                  </div>
                </div>
                <span className="font-serif text-xl tracking-widest text-slate-100 font-medium">THREADSPARK</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-4">
                The source of truth for long-form fiction. Automatically tracking temporal state invariants, physical details, and epistemic boundaries across multi-book sagas.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Founded by <strong className="text-white">{SITE_CONFIG.founder.name}</strong>. Built with care for novelists and lore architects.
              </p>
            </div>

            <div className="pt-6 space-y-2">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-brand-champagne hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero training on author manuscripts</span>
              </div>
            </div>
          </div>

          {/* Product Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/platform" className="text-slate-400 hover:text-brand-champagne transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/use-cases" className="text-slate-400 hover:text-brand-champagne transition-colors">
                  Series Authors &amp; Novelists
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-brand-champagne transition-colors">
                  Founder Story &amp; Roadmap
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-brand-lavender hover:text-white transition-colors flex items-center gap-1 font-medium">
                  Sample Studio Demo <Sparkles className="w-3 h-3 text-brand-violet" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Trust &amp; Ethics</h4>
            <div className="p-4 rounded-xl bg-brand-dark/70 border border-brand-border/60 space-y-2 mb-4">
              <div className="text-xs font-semibold text-white">What Threadspark Doesn&apos;t Do</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Threadspark does not ghostwrite your prose. It reads your manuscript to track facts, timeline states, and secrets so you don&apos;t leave plot holes.
              </p>
            </div>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-brand-champagne transition-colors">
                  &rarr; Plain-Language Data Promise &amp; Privacy
                </Link>
              </li>
              <li>
                <Link href="/about#status" className="hover:text-brand-champagne transition-colors">
                  &rarr; What Works Today vs. What&apos;s Planned
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} Threadspark. Founded by Ezekiel Heretta.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Data Promise
            </Link>
            <Link href="/platform" className="hover:text-slate-300 transition-colors">
              Architecture
            </Link>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="hover:text-brand-champagne transition-colors">
              Contact Founder
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
