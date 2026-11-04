"use client";

import { useState, useEffect } from "react";
import {
  FileSearch,
  UploadCloud,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Cpu,
  Layers,
  ArrowRight,
  Database,
  FileText,
  Activity,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export function DocumentIntelligenceView() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(7); // default completed
  const [progress, setProgress] = useState(100);

  const stages = [
    { name: "Document Recognition", desc: "Recognized manuscript 'The Glass Meridian.docx' (8 chapters, UTF-8 encoded text stream)", time: "0.2s" },
    { name: "Text Structure & Chapter Segmentation", desc: "Divided manuscript into 8 scene blocks, identified 28 scene boundaries and 4 act breaks", time: "0.5s" },
    { name: "Entity & Artifact Extraction", desc: "Identified 84 proper nouns, 8 distinct world locations, and 4 legendary resonance relics", time: "0.9s" },
    { name: "Character Identification & Voice Profiling", desc: "Mapped 12 characters; generated speech cadence baselines for Marcus, Elena, Malakar", time: "1.3s" },
    { name: "Relationship & Allegiance Mapping", desc: "Synthesized 28 direct relationships; mapped tension index and political alignments", time: "1.7s" },
    { name: "Narrative & Timeline Causality Analysis", desc: "Constructed 24 chronological events with causal dependencies along the Equinox countdown", time: "2.1s" },
    { name: "Writing Style & Lexical Fingerprinting", desc: "Computed lexical diversity (0.76 TTR), average sentence length (18.4 wps), and tone distribution", time: "2.5s" },
    { name: "Knowledge Graph Integration & Verification", desc: "Committed 148 nodes and 312 relational vectors to local memory vault without drift", time: "2.8s" },
  ];

  const runSimulation = () => {
    setIsProcessing(true);
    setCurrentStageIndex(0);
    setProgress(5);

    let stage = 0;
    const interval = setInterval(() => {
      stage += 1;
      if (stage < stages.length) {
        setCurrentStageIndex(stage);
        setProgress(Math.round(((stage + 1) / stages.length) * 100));
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        setProgress(100);
      }
    }, 600);
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Header Banner */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              <span>Multi-Pass Ingestion Engine</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Manuscript Ingestion &amp; Processing
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Watch how CHRONICLE ingests raw manuscripts, breaks down syntax and narrative causality, and builds a persistent cognitive graph.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={runSimulation}
              disabled={isProcessing}
              className={`px-5 py-3 rounded-full text-xs font-mono font-medium flex items-center gap-2 transition-all shadow-lg ${
                isProcessing
                  ? "bg-brand-surface text-slate-400 border border-brand-border cursor-not-allowed"
                  : "bg-brand-violet hover:bg-purple-600 text-white shadow-brand-violet/25"
              }`}
            >
              {isProcessing ? (
                <>
                  <Activity className="w-4 h-4 animate-spin text-brand-champagne" />
                  <span>Processing Stage {currentStageIndex + 1}/8...</span>
                </>
              ) : (
                <>
                  <RotateCcw className="w-4 h-4 text-brand-champagne" />
                  <span>Re-Run Ingestion Simulation</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">
              {isProcessing
                ? `Active: ${stages[currentStageIndex].name}`
                : "Manuscript Status: 100% Ingested & Synchronized"}
            </span>
            <span className="text-brand-champagne font-semibold">{progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-brand-dark overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-brand-violet via-purple-500 to-brand-champagne transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Upload Zone / Document Spec */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">Source Manuscript</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Verified
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-white font-medium text-sm">The Glass Meridian.docx</div>
                <div className="text-[11px] font-mono text-slate-400">36,420 words • 1.4 MB</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Total Chapters:</span>
                <span className="text-white">8 Chapters</span>
              </div>
              <div className="flex justify-between">
                <span>Unique Lexicon:</span>
                <span className="text-brand-champagne">5,842 Tokens</span>
              </div>
              <div className="flex justify-between">
                <span>Identified Scenes:</span>
                <span className="text-white">28 Sequences</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-brand-surface/40 border border-white/5 text-xs text-slate-300 space-y-2 leading-relaxed">
            <strong className="text-brand-lavender block">Zero Hallucination Protocol:</strong>
            Ingestion creates verifiable provenance pointers linking every character trait, timeline event, and relationship back to specific chapter paragraphs.
          </div>
        </div>

        {/* 8-Stage Pipeline Details */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">
              8-Stage Neural Ingestion Sequence
            </span>
            <span className="text-xs font-mono text-brand-champagne">
              Elapsed Time: 2.8s
            </span>
          </div>

          <div className="space-y-2.5">
            {stages.map((stage, idx) => {
              const isPast = idx < currentStageIndex || (!isProcessing && progress === 100);
              const isCurrent = idx === currentStageIndex && isProcessing;

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isCurrent
                      ? "bg-brand-surface border-brand-violet shadow-lg shadow-brand-violet/15"
                      : isPast
                      ? "bg-brand-dark/70 border-brand-border text-slate-300"
                      : "bg-brand-void/40 border-brand-border/40 text-slate-600"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {isCurrent ? (
                        <Activity className="w-4 h-4 text-brand-champagne animate-spin" />
                      ) : isPast ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-700" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase text-slate-400">
                          Stage 0{idx + 1}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            isCurrent ? "text-brand-champagne" : isPast ? "text-white" : "text-slate-600"
                          }`}
                        >
                          {stage.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{stage.desc}</p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-500 hidden sm:inline flex-shrink-0">
                    {stage.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

