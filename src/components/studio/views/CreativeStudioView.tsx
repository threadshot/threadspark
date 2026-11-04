"use client";

import { useState } from "react";
import {
  PenTool,
  Sparkles,
  ArrowRight,
  Sliders,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
  Split,
  Eye,
  Feather,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA, CreativeStudioSnippet } from "@/data/glassMeridian";

export function CreativeStudioView() {
  const snippets = GLASS_MERIDIAN_DATA.creativeSnippets;
  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState<number>(0);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState<number>(0);
  const [activeDiffView, setActiveDiffView] = useState<"side-by-side" | "inline">("side-by-side");
  const [copied, setCopied] = useState(false);

  const activeSnippet = snippets[selectedSnippetIndex];
  const activeVariation = activeSnippet.variations[selectedVariationIndex];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-champagne/20 border border-brand-champagne/40 text-brand-champagne text-xs font-mono">
              <PenTool className="w-3.5 h-3.5" />
              <span>Style-Preserving Prose Rewriter</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Creative Studio &amp; Scene Synthesis
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Experiment with style-conditioned scene rewriting. Watch how THREADSPARK adjusts emotional restraint, sensory pacing, and subtext while preserving your authentic authorial lexicon.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveDiffView("side-by-side")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeDiffView === "side-by-side"
                  ? "bg-brand-violet text-white font-semibold"
                  : "bg-brand-dark text-slate-400 hover:text-white border border-brand-border"
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setActiveDiffView("inline")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeDiffView === "inline"
                  ? "bg-brand-violet text-white font-semibold"
                  : "bg-brand-dark text-slate-400 hover:text-white border border-brand-border"
              }`}
            >
              Unified Diff
            </button>
          </div>
        </div>
      </div>

      {/* Snippet & Variation Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Snippet Picker */}
        <div className="md:col-span-5 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Select Demonstration Scene:
          </span>
          <div className="flex gap-2">
            {snippets.map((snip, idx) => (
              <button
                key={snip.id}
                onClick={() => {
                  setSelectedSnippetIndex(idx);
                  setSelectedVariationIndex(0);
                }}
                className={`flex-1 p-3 rounded-2xl border text-left text-xs transition-all ${
                  selectedSnippetIndex === idx
                    ? "bg-brand-surface border-brand-violet text-white shadow-lg shadow-brand-violet/15 font-medium"
                    : "bg-brand-dark/70 border-brand-border text-slate-400 hover:text-white hover:bg-brand-surface/40"
                }`}
              >
                <div className="font-serif font-medium truncate">{snip.title}</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">Chapter 0{snip.chapter}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Variation Picker */}
        <div className="md:col-span-7 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Applied Stylistic Prompt:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeSnippet.variations.map((v, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVariationIndex(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                  selectedVariationIndex === idx
                    ? "bg-brand-champagne/20 border border-brand-champagne text-brand-champagne font-semibold shadow-md"
                    : "bg-brand-dark/80 border border-brand-border text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{v.styleModifier}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editor & Comparison Area */}
      {activeDiffView === "side-by-side" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Original Passage */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono text-slate-400">
              <span className="text-red-400 uppercase font-semibold">
                Original Draft Excerpt (Chapter {activeSnippet.chapter})
              </span>
              <span>Raw Draft</span>
            </div>

            <div className="p-5 rounded-2xl bg-brand-dark/95 border border-brand-border font-serif text-sm text-slate-300 leading-relaxed min-h-[260px] whitespace-pre-line">
              {activeSnippet.originalText}
            </div>

            <div className="text-[11px] font-mono text-slate-500">
              Diagnostic: Flat declarative statements; lacks sensory texture and subtext.
            </div>
          </div>

          {/* AI-Revised Passage */}
          <div className="glass-panel p-6 rounded-3xl border border-brand-violet/30 space-y-4 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-brand-violet/10 blur-[80px] pointer-events-none rounded-full" />

            <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono">
              <span className="text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
                Style-Conditioned Revision
              </span>

              <button
                onClick={() => handleCopy(activeVariation.revisedText)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-[10px]"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-brand-dark/95 border border-brand-violet/40 font-serif text-sm text-slate-100 leading-relaxed min-h-[260px] whitespace-pre-line shadow-inner">
              {activeVariation.revisedText}
            </div>

            <div className="text-[11px] font-mono text-brand-champagne">
              Active Modifier: <strong>{activeVariation.styleModifier}</strong>
            </div>
          </div>
        </div>
      ) : (
        /* Unified Diff View */
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono text-slate-400">
            <span className="text-brand-champagne">Unified Stylistic Transformation</span>
            <span>Before / After</span>
          </div>

          <div className="space-y-4 font-serif text-sm leading-relaxed">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-red-300/80 line-through">
              {activeSnippet.originalText}
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200">
              {activeVariation.revisedText}
            </div>
          </div>
        </div>
      )}

      {/* Detailed Editorial Explanation of Stylistic Decisions */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-champagne">
          <Feather className="w-4 h-4 text-brand-violet" />
          <span>Stylometric Editorial Rationale</span>
        </div>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
          {activeVariation.editorialExplanation}
        </p>
      </div>
    </div>
  );
}

