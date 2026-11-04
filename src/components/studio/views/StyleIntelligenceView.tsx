"use client";

import { useState } from "react";
import {
  Sliders,
  Sparkles,
  BarChart3,
  Feather,
  Activity,
  Layers,
  BookOpen,
  PieChart,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export function StyleIntelligenceView() {
  const style = GLASS_MERIDIAN_DATA.styleAnalysis;
  const [selectedPassage, setSelectedPassage] = useState<number>(0);

  const samplePassages = [
    {
      title: "Tactile Sensory Contrast (Chapter 1)",
      text: "The frost on the iron sill burned against his knuckles, while the core below thrummed with a feverish, violet warmth.",
      breakdown: [
        { phrase: "The frost on the iron sill", tag: "Tactile Anchor", color: "text-blue-400 bg-blue-950/40 border-blue-500/30" },
        { phrase: "burned against his knuckles", tag: "Physical Sensation", color: "text-amber-400 bg-amber-950/40 border-amber-500/30" },
        { phrase: "feverish, violet warmth", tag: "Synesthetic Metaphor", color: "text-purple-400 bg-purple-950/40 border-purple-500/30" },
      ],
      commentary: "Establishes institutional chill versus volatile ether power within a single balanced compound sentence.",
    },
    {
      title: "Periodic Scholarly Rhythm (Chapter 3)",
      text: "He watched the amber silt settle through the glass vial, noting the faint concentric rings where the vibration had arrested its descent.",
      breakdown: [
        { phrase: "amber silt settle through the glass vial", tag: "Material Precision", color: "text-brand-champagne bg-amber-950/40 border-amber-500/30" },
        { phrase: "noting the faint concentric rings", tag: "Scholarly Observer Voice", color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30" },
        { phrase: "where the vibration had arrested its descent", tag: "Trailing Participle", color: "text-purple-400 bg-purple-950/40 border-purple-500/30" },
      ],
      commentary: "Reflects Marcus Thorne's analytical disposition: calm observational tracking even amidst crisis.",
    },
    {
      title: "Architectural Emotion Metaphor (Chapter 4)",
      text: "Her silence was not an absence of intent, but a load-bearing arch waiting for the keystones to buckle.",
      breakdown: [
        { phrase: "Her silence was not an absence of intent", tag: "Litotes / Restraint", color: "text-slate-300 bg-slate-800/40 border-slate-600/30" },
        { phrase: "a load-bearing arch", tag: "Structural Motif", color: "text-brand-lavender bg-purple-950/40 border-purple-500/30" },
        { phrase: "waiting for the keystones to buckle", tag: "Pending Catastrophe", color: "text-red-400 bg-red-950/40 border-red-500/30" },
      ],
      commentary: "Maps the city's failing architecture directly onto human psychological vulnerability.",
    },
  ];

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
              <Sliders className="w-3.5 h-3.5" />
              <span>Stylometric Neural Profiler</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Writing Style Intelligence
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              CHRONICLE analyzes your vocabulary tiering, sentence rhythms, and descriptive hallmarks so generated or revised text preserves your authentic voice.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border/80 flex items-center gap-6">
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400">Dominant Voice</div>
              <div className="font-serif text-lg text-brand-champagne font-medium">
                {style.dominantTone}
              </div>
            </div>
            <div className="border-l border-brand-border pl-6">
              <div className="text-[10px] font-mono uppercase text-slate-400">Lexical Richness</div>
              <div className="font-serif text-2xl text-white font-medium">0.76 TTR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Row: Pacing & Sentence Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pacing Composition */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">Narrative Pacing Matrix</span>
            <span className="text-xs font-mono text-brand-lavender">Across 8 Chapters</span>
          </div>

          <div className="space-y-3">
            {[
              { label: "Action & Conflict", pct: style.pacingScore.action, color: "bg-red-500" },
              { label: "Exposition & Lore", pct: style.pacingScore.exposition, color: "bg-brand-violet" },
              { label: "Dialogue & Negotiation", pct: style.pacingScore.dialogue, color: "bg-brand-champagne" },
              { label: "Internal Reflection", pct: style.pacingScore.reflection, color: "bg-emerald-400" },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{item.label}</span>
                  <span className="font-mono text-brand-champagne font-semibold">{item.pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-brand-charcoal overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-brand-border/60 text-xs text-slate-400 font-mono">
            Ratio: <strong>38% Dialogue</strong> / <strong>62% Prose &amp; Narration</strong>
          </div>
        </div>

        {/* Tone Distribution */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">Emotional Valence Spectrum</span>
            <span className="text-xs font-mono text-emerald-400">Multi-Octave Tone</span>
          </div>

          <div className="space-y-3">
            {Object.entries(style.toneDistribution).map(([tone, pct]) => (
              <div key={tone} className="space-y-1">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>{tone}</span>
                  <span className="font-mono text-white font-semibold">{pct}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-brand-charcoal overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-violet to-brand-champagne rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-brand-border/60 text-xs text-slate-400 font-mono">
            Peak Tension Point: <strong>Chapter 7 (The Solarium Gala)</strong>
          </div>
        </div>
      </div>

      {/* Vocabulary Breakdown & Signature Patterns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vocabulary Tiers */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">Vocabulary Tier Distribution</span>
            <span className="text-xs font-mono text-brand-champagne">5,842 Lexical Tokens</span>
          </div>

          <div className="space-y-4">
            {style.vocabularyBreakdown.map((tier, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-brand-dark/80 border border-brand-border space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-white">{tier.tier}</span>
                  <span className="font-mono text-brand-champagne">{tier.percentage}%</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tier.sampleTerms.map((term) => (
                    <span
                      key={term}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-white/5 text-slate-300"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Sample Passage Inspector */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">
              Passage Stylistic Parsing Demonstration
            </span>
            <div className="flex gap-1">
              {samplePassages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPassage(idx)}
                  className={`w-6 h-6 rounded text-xs font-mono transition-colors ${
                    selectedPassage === idx
                      ? "bg-brand-violet text-white font-bold"
                      : "bg-brand-surface text-slate-400 hover:text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono text-brand-lavender uppercase mb-1">
                {samplePassages[selectedPassage].title}
              </div>
              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-border font-serif text-base text-slate-200 leading-relaxed italic">
                &ldquo;{samplePassages[selectedPassage].text}&rdquo;
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400">Extracted Syntax Components:</span>
              <div className="space-y-2">
                {samplePassages[selectedPassage].breakdown.map((item, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-xl border flex items-center justify-between text-xs ${item.color}`}
                  >
                    <span className="font-serif italic">&ldquo;{item.phrase}&rdquo;</span>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider">{item.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-brand-surface/40 border border-white/5 text-xs text-slate-300 leading-relaxed">
              <strong className="text-brand-champagne font-mono text-[11px] block mb-0.5">Stylistic Commentary:</strong>
              {samplePassages[selectedPassage].commentary}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

