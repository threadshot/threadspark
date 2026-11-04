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
  Send,
  Zap,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA, CreativeStudioSnippet } from "@/data/glassMeridian";

export function CreativeStudioView() {
  const snippets = GLASS_MERIDIAN_DATA.creativeSnippets;
  const [selectedSnippetIndex, setSelectedSnippetIndex] = useState<number>(0);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState<number>(0);
  const [activeDiffView, setActiveDiffView] = useState<"side-by-side" | "inline">("side-by-side");
  const [customPrompt, setCustomPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  // Editable text state
  const activeSnippet = snippets[selectedSnippetIndex];
  const [editableText, setEditableText] = useState(activeSnippet.originalText);
  const [activeVariation, setActiveVariation] = useState(activeSnippet.variations[selectedVariationIndex]);

  const handleSnippetChange = (idx: number) => {
    sound.tick();
    setSelectedSnippetIndex(idx);
    setSelectedVariationIndex(0);
    setEditableText(snippets[idx].originalText);
    setActiveVariation(snippets[idx].variations[0]);
  };

  const handleVariationChange = (idx: number) => {
    sound.tick();
    setSelectedVariationIndex(idx);
    setActiveVariation(activeSnippet.variations[idx]);
  };

  const handleCustomPromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;

    sound.tick();
    setIsGenerating(true);
    const instruction = customPrompt;
    setCustomPrompt("");

    setTimeout(() => {
      sound.success();
      setIsGenerating(false);
      setActiveVariation({
        instruction,
        styleModifier: "Custom Prompt Directive",
        revisedText: `${editableText.slice(0, 80)}... The ambient atmosphere sharpened with the scent of ionizing ether and brackish canal silt, casting long violet-hued shadows against the weathered limestone flagstones as Marcus hesitated before speaking.`,
        editorialExplanation: `Synthesized with custom instruction "${instruction}". Enhanced sensory texture with era-appropriate olfactory descriptors while preserving authorial 18.4 word sentence cadence.`,
      });
    }, 600);
  };

  const handleCopy = (text: string) => {
    sound.tick();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const wordCount = editableText.trim().split(/\s+/).filter(Boolean).length;
  const revisedWordCount = activeVariation.revisedText.trim().split(/\s+/).filter(Boolean).length;

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
              onClick={() => {
                sound.tick();
                setActiveDiffView("side-by-side");
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeDiffView === "side-by-side"
                  ? "bg-brand-violet text-white font-semibold shadow-sm"
                  : "bg-brand-dark text-slate-400 hover:text-white border border-brand-border"
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => {
                sound.tick();
                setActiveDiffView("inline");
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                activeDiffView === "inline"
                  ? "bg-brand-violet text-white font-semibold shadow-sm"
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
                onClick={() => handleSnippetChange(idx)}
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
            Applied Stylistic Modifiers:
          </span>
          <div className="flex flex-wrap gap-2">
            {activeSnippet.variations.map((v, idx) => (
              <button
                key={idx}
                onClick={() => handleVariationChange(idx)}
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

      {/* Custom Prompt Input */}
      <form onSubmit={handleCustomPromptSubmit} className="relative">
        <input
          type="text"
          value={customPrompt}
          onChange={(e) => setCustomPrompt(e.target.value)}
          placeholder="Or type a custom creative instruction (e.g. 'Make the dialogue sharper and heighten sensory smell of sulfur and rain')..."
          className="w-full bg-brand-charcoal border border-brand-border rounded-2xl pl-4 pr-24 py-3 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-violet font-sans"
        />
        <button
          type="submit"
          disabled={isGenerating}
          className="absolute right-2 top-2 bottom-2 px-4 bg-brand-violet hover:bg-purple-600 text-white rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5"
        >
          {isGenerating ? (
            <span>Synthesizing...</span>
          ) : (
            <>
              <Zap className="w-3.5 h-3.5 text-brand-champagne" />
              <span>Apply</span>
            </>
          )}
        </button>
      </form>

      {/* Editor & Comparison Area */}
      {activeDiffView === "side-by-side" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Original Passage (Editable) */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono text-slate-400">
                <span className="text-red-400 uppercase font-semibold">
                  Source Draft Excerpt (Chapter {activeSnippet.chapter})
                </span>
                <span className="text-slate-400">{wordCount} Words</span>
              </div>

              <textarea
                value={editableText}
                onChange={(e) => setEditableText(e.target.value)}
                rows={9}
                className="w-full bg-transparent font-serif text-slate-200 text-sm leading-relaxed border-none focus:outline-none resize-none selection:bg-brand-violet/30"
              />
            </div>

            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Editable Scratchpad</span>
              <button
                onClick={() => setEditableText(activeSnippet.originalText)}
                className="hover:text-white underline"
              >
                Reset to Original
              </button>
            </div>
          </div>

          {/* AI Style-Conditioned Revision */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl flex flex-col justify-between bg-brand-charcoal/80">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono text-slate-400">
                <span className="text-emerald-400 uppercase font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  THREADSPARK Revision ({activeVariation.styleModifier})
                </span>
                <span className="text-brand-champagne">{revisedWordCount} Words</span>
              </div>

              <div className="font-serif text-slate-100 text-sm leading-relaxed italic bg-emerald-950/20 p-4 rounded-2xl border border-emerald-500/20 min-h-[190px]">
                {activeVariation.revisedText}
              </div>

              <div className="p-3 rounded-xl bg-brand-dark/80 border border-brand-border text-xs text-slate-300 space-y-1">
                <strong className="text-brand-champagne font-mono text-[11px] uppercase block">
                  Editorial Stylometric Rationale:
                </strong>
                <p className="font-sans leading-relaxed text-[11px]">
                  {activeVariation.editorialExplanation}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">Voice Integrity: 98.2%</span>
              <button
                onClick={() => handleCopy(activeVariation.revisedText)}
                className="px-3 py-1 rounded-lg bg-brand-surface hover:bg-white/10 border border-brand-border text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy Revision"}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Unified Diff View */
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-brand-border text-xs font-mono text-slate-400">
            <span className="text-brand-champagne uppercase font-semibold">
              Unified Inline Diff Comparison
            </span>
            <span>Style Modifier: {activeVariation.styleModifier}</span>
          </div>

          <div className="space-y-3 font-serif text-sm leading-relaxed">
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 text-red-200 line-through">
              {editableText}
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-slate-100 italic">
              {activeVariation.revisedText}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border text-xs text-slate-300">
            <strong className="text-brand-champagne font-mono text-[11px] uppercase block mb-1">
              Editorial Rationale:
            </strong>
            {activeVariation.editorialExplanation}
          </div>
        </div>
      )}
    </div>
  );
}
