"use client";

import {
  Activity,
  BookOpen,
  Users,
  MapPin,
  Clock,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Sliders,
  CheckCircle2,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";
import { StudioTab } from "../StudioSidebar";

interface OverviewViewProps {
  onNavigateTab: (tab: StudioTab) => void;
}

export function OverviewView({ onNavigateTab }: OverviewViewProps) {
  const meta = GLASS_MERIDIAN_DATA.meta;
  const overview = GLASS_MERIDIAN_DATA.overview;

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner Card */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-[450px] h-[300px] bg-brand-violet/10 blur-[90px] pointer-events-none rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender">
                Active Project Workspace
              </span>
              <span className="text-xs font-mono text-slate-400">
                Last Analyzed: {meta.analyzedTimestamp}
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              {meta.title}
            </h1>
            <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
              {overview.synopsis}
            </p>
          </div>

          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 p-4 rounded-2xl bg-brand-dark/90 border border-brand-border/80 flex-shrink-0">
            <div className="text-left lg:text-right">
              <div className="text-[10px] font-mono uppercase text-slate-400">Manuscript Health</div>
              <div className="font-serif text-3xl font-semibold text-brand-champagne">
                {meta.overallHealthScore} <span className="text-sm font-sans text-slate-400">/ 100</span>
              </div>
            </div>
            <button
              onClick={() => onNavigateTab("continuity")}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>3 Flags Detected</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Statistics Matrix */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
          <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-brand-violet" />
            <span>WORD COUNT</span>
          </div>
          <div className="font-serif text-2xl text-white font-medium">
            {meta.wordCount.toLocaleString()}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">8 Full Chapters</div>
        </div>

        <div className="p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
          <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-brand-lavender" />
            <span>CHARACTERS</span>
          </div>
          <div className="font-serif text-2xl text-white font-medium">
            {GLASS_MERIDIAN_DATA.characters.length}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">12 Key Profiles</div>
        </div>

        <div className="p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
          <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>LOCATIONS</span>
          </div>
          <div className="font-serif text-2xl text-white font-medium">
            {GLASS_MERIDIAN_DATA.locations.length}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">Geographic Lore</div>
        </div>

        <div className="p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
          <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>TIMELINE</span>
          </div>
          <div className="font-serif text-2xl text-white font-medium">
            {GLASS_MERIDIAN_DATA.storyEvents.length}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">Causal Events</div>
        </div>

        <div className="p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
          <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <span>LEXICAL TTR</span>
          </div>
          <div className="font-serif text-2xl text-white font-medium">
            {GLASS_MERIDIAN_DATA.styleAnalysis.lexicalDiversity}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">High Vocabulary</div>
        </div>

        <div className="p-4 rounded-2xl bg-brand-charcoal/80 border border-brand-border space-y-1">
          <div className="text-slate-400 text-xs font-mono flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-brand-champagne" />
            <span>AVG SENTENCE</span>
          </div>
          <div className="font-serif text-2xl text-white font-medium">
            {GLASS_MERIDIAN_DATA.styleAnalysis.averageSentenceLength}
          </div>
          <div className="text-[10px] text-slate-400 font-mono">Words / Sentence</div>
        </div>
      </div>

      {/* Middle Section: Recent Insights & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent AI-Generated Insights */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-violet" />
              <h3 className="font-serif text-lg text-white font-medium">
                Active Neural Insights
              </h3>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live Vector Stream
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-lavender font-serif text-sm">
                  Thematic Subtext: Institutional Complicity
                </span>
                <span className="text-[10px] font-mono text-slate-400">Chapters 1-3</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Marcus Thorne&apos;s internal dialogue demonstrates an escalating moral dissonance between his loyalty to the Scholasticate and the archaeological records proving deliberate ether diversion.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-brand-champagne font-serif text-sm">
                  Relational Friction Peak: Elena &amp; Silas
                </span>
                <span className="text-[10px] font-mono text-slate-400">Chapter 6</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The forging sequence in the underground kiln balances technical glassmaking precision against Elena&apos;s unvoiced grief over Silas&apos;s impending blindness.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-border space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-300 font-serif text-sm">
                  Vocabulary Fingerprint Milestone
                </span>
                <span className="text-[10px] font-mono text-slate-400">Full Text</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Architectural and vitrification terminology (&ldquo;calcified&rdquo;, &ldquo;keystone&rdquo;, &ldquo;fissure&rdquo;, &ldquo;silicate&rdquo;) occurs at 16% density, establishing an authentic tactile identity.
              </p>
            </div>
          </div>
        </div>

        {/* AI-Generated Recommendations */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-champagne" />
                <h3 className="font-serif text-lg text-white font-medium">
                  Authorial Actions
                </h3>
              </div>
              <span className="text-[10px] font-mono text-slate-400">3 Priority Items</span>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => onNavigateTab("continuity")}
                className="p-3.5 rounded-xl bg-red-950/20 hover:bg-red-950/30 border border-red-500/30 cursor-pointer transition-colors space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-red-300">Resolve Signet Seal Contradiction</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-400" />
                </div>
                <p className="text-[11px] text-slate-300">
                  Seal lost at Iron Quay in Chapter 4 reappears at Solarium door in Chapter 7.
                </p>
              </div>

              <div
                onClick={() => onNavigateTab("creative-studio")}
                className="p-3.5 rounded-xl bg-purple-950/20 hover:bg-purple-950/30 border border-purple-500/30 cursor-pointer transition-colors space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-lavender">Pacing Adjustment: Chapter 5</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <p className="text-[11px] text-slate-300">
                  Compress lower-city supply logistics dialogue to preserve narrative momentum.
                </p>
              </div>

              <div
                onClick={() => onNavigateTab("ai-workspace")}
                className="p-3.5 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-white/5 cursor-pointer transition-colors space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-champagne">Explore Elena&apos;s Backstory</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-champagne" />
                </div>
                <p className="text-[11px] text-slate-300">
                  Spar with AI assistant regarding Elena&apos;s true motives during the First Tremblor.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Next Scheduled Scan: Continuous</span>
            <span className="text-emerald-400">Auto-Index Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

