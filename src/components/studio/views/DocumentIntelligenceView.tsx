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
  Terminal,
  Code2,
  Check,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export function DocumentIntelligenceView() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStageIndex, setCurrentStageIndex] = useState(7); // default completed
  const [selectedInspectStage, setSelectedInspectStage] = useState(0);
  const [progress, setProgress] = useState(100);
  const [activeManuscript, setActiveManuscript] = useState<"glass-meridian" | "neon-meridian" | "cinnabar-treaty">("glass-meridian");

  const manuscripts = {
    "glass-meridian": {
      title: "The Glass Meridian.docx",
      genre: "High Fantasy / Political Intrigue",
      wordCount: "36,420 words",
      size: "1.4 MB",
      chapters: "8 Chapters",
      entitiesCount: 84,
      charactersCount: 12,
    },
    "neon-meridian": {
      title: "Neon_Meridian_Neuromancer_2099.pdf",
      genre: "Cyberpunk Noir / Speculative Fiction",
      wordCount: "42,100 words",
      size: "2.1 MB",
      chapters: "10 Chapters",
      entitiesCount: 106,
      charactersCount: 15,
    },
    "cinnabar-treaty": {
      title: "The_Cinnabar_Treaty_Archive.docx",
      genre: "Historical Intrigue / Alternate History",
      wordCount: "28,500 words",
      size: "1.1 MB",
      chapters: "6 Chapters",
      entitiesCount: 62,
      charactersCount: 9,
    },
  };

  const stages = [
    {
      name: "Document Recognition",
      desc: "Recognized manuscript formatted text stream with UTF-8 character encoding.",
      time: "0.2s",
      payload: {
        format: "DOCX_ARCHIVE",
        encoding: "UTF-8",
        tokenLength: 36420,
        compressionRatio: "1.8x",
        headingsDetected: 8,
      },
    },
    {
      name: "Text Structure & Chapter Segmentation",
      desc: "Divided manuscript into 8 scene blocks, identified 28 scene boundaries and 4 act breaks.",
      time: "0.5s",
      payload: {
        actBreaks: ["Ch 2: The Edict", "Ch 4: Iron Quay", "Ch 6: Silas's Kiln", "Ch 8: The Shattered Meridian"],
        sceneBoundaries: 28,
        narrationRatio: "62%",
        dialogueRatio: "38%",
      },
    },
    {
      name: "Entity & Artifact Extraction",
      desc: "Identified 84 proper nouns, 8 distinct world locations, and 4 legendary resonance relics.",
      time: "0.9s",
      payload: {
        locations: ["The Glass Meridian", "Imperial Archives", "Obsidian Bastion", "Sunk Hollows", "Iron Quay"],
        relics: ["Ancestral Signet", "Focusing Prism", "Sunken Harmonic Fork", "Obsidian Seal"],
      },
    },
    {
      name: "Character Identification & Voice Profiling",
      desc: "Mapped 12 characters; generated speech cadence baselines for Marcus, Elena, Malakar.",
      time: "1.3s",
      payload: {
        primaryCast: ["Marcus Thorne", "Elena Vance", "Archon Corvus Malakar", "Silas Ward"],
        voiceTags: {
          Marcus: "Analytical, bureaucratic, periodic",
          Elena: "Sardonic, clipped, tactile",
          Malakar: "Zealous, formal, authoritarian",
        },
      },
    },
    {
      name: "Relationship & Allegiance Mapping",
      desc: "Synthesized 28 direct relationships; mapped tension index and political alignments.",
      time: "1.7s",
      payload: {
        activeFactions: ["The Meridian Scholasticate", "Obsidian Directorate", "Sunk Hollows Dissidents"],
        highTensionPairs: ["Marcus Thorne ↔ Elena Vance", "Elena Vance ↔ Archon Malakar"],
      },
    },
    {
      name: "Narrative & Timeline Causality Analysis",
      desc: "Constructed 24 chronological events with causal dependencies along the Equinox countdown.",
      time: "2.1s",
      payload: {
        anchorEvent: "Event 01: The Noon Chime Fracture",
        climacticEvent: "Event 24: The Shattered Spire Resonance",
        causalEdges: 34,
      },
    },
    {
      name: "Writing Style & Lexical Fingerprinting",
      desc: "Computed lexical diversity (0.76 TTR), average sentence length (18.4 wps), and tone distribution.",
      time: "2.5s",
      payload: {
        lexicalDiversityTTR: 0.76,
        avgSentenceLength: 18.4,
        dominantMood: "Atmospheric Dread (34%)",
      },
    },
    {
      name: "Knowledge Graph Integration & Verification",
      desc: "Committed 148 nodes and 312 relational vectors to local memory vault without drift.",
      time: "2.8s",
      payload: {
        vaultStatus: "LOCAL_AES256_COMMITTED",
        vectorNodes: 148,
        vectorEdges: 312,
        zeroDegradationCheck: "PASSED",
      },
    },
  ];

  const runSimulation = () => {
    sound.tick();
    setIsProcessing(true);
    setCurrentStageIndex(0);
    setProgress(12);

    let stage = 0;
    const interval = setInterval(() => {
      stage += 1;
      if (stage < stages.length) {
        setCurrentStageIndex(stage);
        setProgress(Math.round(((stage + 1) / stages.length) * 100));
        sound.tick();
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        setProgress(100);
        sound.success();
      }
    }, 500);
  };

  const activeDoc = manuscripts[activeManuscript];

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
              Watch how THREADSPARK ingests raw manuscripts, breaks down syntax and narrative causality, and builds a persistent cognitive graph.
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
                ? `Active Stage: ${stages[currentStageIndex].name}`
                : "Manuscript Status: 100% Ingested & Synchronized with Local Graph"}
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

      {/* Manuscript Switcher & Upload Specification */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono uppercase text-slate-400">Source Manuscript File</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Verified
            </span>
          </div>

          {/* Sample Switcher */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
              Select Manuscript Corpus:
            </span>
            {[
              { id: "glass-meridian", label: "The Glass Meridian", badge: "Fantasy Core" },
              { id: "neon-meridian", label: "Neon Meridian 2099", badge: "Cyberpunk" },
              { id: "cinnabar-treaty", label: "The Cinnabar Treaty", badge: "Alternate Hist" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  sound.tick();
                  setActiveManuscript(m.id as any);
                }}
                className={`w-full p-2.5 rounded-xl border text-left text-xs font-mono transition-all flex items-center justify-between ${
                  activeManuscript === m.id
                    ? "bg-brand-surface border-brand-violet text-white shadow-sm font-semibold"
                    : "bg-brand-dark/70 border-brand-border text-slate-400 hover:text-white"
                }`}
              >
                <span>{m.label}</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
                  {m.badge}
                </span>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-serif text-white font-medium text-sm truncate">{activeDoc.title}</div>
                <div className="text-[11px] font-mono text-slate-400">{activeDoc.wordCount} • {activeDoc.size}</div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex justify-between">
                <span>Genre:</span>
                <span className="text-white">{activeDoc.genre}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Chapters:</span>
                <span className="text-white">{activeDoc.chapters}</span>
              </div>
              <div className="flex justify-between">
                <span>Entities Discovered:</span>
                <span className="text-brand-champagne">{activeDoc.entitiesCount} Entities</span>
              </div>
              <div className="flex justify-between">
                <span>Cast Dossiers:</span>
                <span className="text-brand-lavender">{activeDoc.charactersCount} Characters</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stages Inspector */}
        <div className="lg:col-span-8 glass-panel p-6 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border text-xs font-mono text-slate-400">
            <span>Staged Processing Pipeline (Click to Inspect Payload)</span>
            <span className="text-brand-champagne">Stage {selectedInspectStage + 1} of 8</span>
          </div>

          {/* Stages List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {stages.map((stage, idx) => {
              const isSelected = selectedInspectStage === idx;
              const isDone = idx <= currentStageIndex;
              return (
                <div
                  key={stage.name}
                  onClick={() => {
                    sound.tick();
                    setSelectedInspectStage(idx);
                  }}
                  className={`p-3 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-brand-surface border-brand-violet shadow-md"
                      : "bg-brand-dark/60 border-brand-border/70 hover:bg-brand-dark"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white flex items-center gap-1.5">
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <Activity className="w-3.5 h-3.5 text-slate-500 animate-spin flex-shrink-0" />
                      )}
                      <span className="truncate">{stage.name}</span>
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-brand-dark text-brand-champagne">
                      {stage.time}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{stage.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Selected Stage Payload Preview */}
          <div className="p-4 rounded-2xl bg-brand-void/90 border border-brand-border space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1.5 text-brand-champagne">
                <Code2 className="w-3.5 h-3.5 text-brand-violet" />
                Raw Extraction Payload: {stages[selectedInspectStage].name}
              </span>
              <span className="text-emerald-400">Validated</span>
            </div>
            <pre className="text-xs font-mono text-brand-lavender overflow-x-auto leading-relaxed p-2">
              <code>{JSON.stringify(stages[selectedInspectStage].payload, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
