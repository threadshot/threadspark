"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Cpu, Terminal, Compass, CheckCircle2, Building2, Search } from "lucide-react";
import { sound } from "@/lib/sound";
import { InvestorModal } from "@/components/InvestorModal";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      sound.success();
      setSubscribed(true);
      setEmail("");
    }
  };

  const triggerCommandPalette = () => {
    sound.tick();
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <>
      <InvestorModal isOpen={investorOpen} onClose={() => setInvestorOpen(false)} />

      <footer className="relative border-t border-brand-border/40 bg-brand-void pt-20 pb-12 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-violet/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-border/40">
            {/* Brand info */}
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
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                  Personal intelligence for everything you create. An ongoing contextual mind that understands the nuances, characters, histories, and stylistic cadence of your work.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero Model Training
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-brand-violet" /> Local Vector Vault
                  </span>
                  <button
                    onClick={() => {
                      sound.tick();
                      setInvestorOpen(true);
                    }}
                    className="flex items-center gap-1.5 text-brand-champagne hover:underline"
                  >
                    <Building2 className="w-3.5 h-3.5" /> Institutional Inquiries
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={triggerCommandPalette}
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-brand-surface/40 border border-brand-border/60 hover:border-brand-border transition-colors"
                  >
                    <Search className="w-3 h-3 text-brand-lavender" />
                    <span>Open QuickJump Palette</span>
                    <kbd className="text-[10px] bg-white/5 px-1 py-0.2 rounded text-slate-400">⌘K</kbd>
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Architecture</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/platform" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Context Engine
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Style Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Knowledge Graph
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Continuity Scanner
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="text-brand-lavender hover:text-white transition-colors flex items-center gap-1 font-medium">
                    Studio Live Demo <Sparkles className="w-3 h-3 text-brand-violet" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Explorations</h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/use-cases#novelists" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Fiction &amp; Novelists
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases#worldbuilders" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Worldbuilders &amp; RPG
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases#screenwriters" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Screenwriters
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases#researchers" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Researchers &amp; PKM
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-brand-champagne transition-colors">
                    Our Manifesto &amp; Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter / Early Access */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4">Private Dispatch</h4>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Receive quarterly architectural essays on contextual personal intelligence and cognitive memory synthesis.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>You are registered for the private dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="creator@studio.com"
                      required
                      className="w-full bg-brand-dark/90 border border-brand-border text-slate-200 text-xs px-3.5 py-2.5 rounded-lg focus:outline-none focus:border-brand-violet transition-colors placeholder:text-slate-600"
                    />
                    <button
                      type="submit"
                      className="absolute right-1 top-1 bottom-1 px-3 bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white rounded-md transition-all text-xs flex items-center justify-center"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">No spam. Dispatches are strictly conceptual.</span>
                </form>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
            <div>
              &copy; {new Date().getFullYear()} THREADSPARK Intelligence Systems Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  sound.tick();
                  setInvestorOpen(true);
                }}
                className="hover:text-brand-champagne transition-colors"
              >
                Investor Briefing
              </button>
              <Link href="/about" className="hover:text-slate-300 transition-colors">
                Context Sovereignty
              </Link>
              <Link href="/platform" className="hover:text-slate-300 transition-colors">
                Telemetry Protocol
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
