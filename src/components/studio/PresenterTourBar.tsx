"use client";

import { useState } from "react";
import {
  MonitorPlay,
  ChevronLeft,
  ChevronRight,
  X,
  FileSearch,
  Sliders,
  GitGraph,
  ShieldCheck,
  MessageSquareCode,
  PenTool,
  Volume2,
  VolumeX,
} from "lucide-react";
import { StudioTab } from "./StudioSidebar";
import { sound } from "@/lib/sound";

interface PresenterTourBarProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function PresenterTourBar({
  activeTab,
  onSelectTab,
  isOpen,
  onClose,
}: PresenterTourBarProps) {
  const [showNotes, setShowNotes] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const tourSteps: {
    tab: StudioTab;
    stepNumber: number;
    title: string;
    icon: any;
    presenterScript: string;
    keyTakeaway: string;
  }[] = [
    {
      tab: "document-intelligence",
      stepNumber: 1,
      title: "Manuscript Ingestion",
      icon: FileSearch,
      presenterScript:
        "Point to the 8 staged passes. Notice that THREADSPARK doesn't just embed text; it isolates dialogue from narration, profiles character speech rhythms, and serializes the 24-event chronology.",
      keyTakeaway: "Cognitive parsing extracts structure, not just raw text tokens.",
    },
    {
      tab: "style-intelligence",
      stepNumber: 2,
      title: "Writing Style Profiling",
      icon: Sliders,
      presenterScript:
        "Highlight the 0.76 Type-Token Ratio and the tactile architectural metaphor density. Explain that this model protects the author's unique voice from being diluted into generic corporate prose.",
      keyTakeaway: "Mathematical stylometrics preserve authorial cadence.",
    },
    {
      tab: "knowledge-graph",
      stepNumber: 3,
      title: "Spatial Knowledge Graph",
      icon: GitGraph,
      presenterScript:
        "Click on Marcus or Elena to demonstrate live neighbor illumination. Emphasize that this graph is stored locally and never degrades across drafts.",
      keyTakeaway: "Relational graph topology solves context window amnesia.",
    },
    {
      tab: "continuity",
      stepNumber: 4,
      title: "Continuity Radar",
      icon: ShieldCheck,
      presenterScript:
        "Demonstrate the Ancestral Signet discrepancy between Chapters 4 and 7. Click 'Apply Suggested Fix' to show the 1-click authorial patch and health score increase to 96%.",
      keyTakeaway: "Automated logic radar prevents costly plot holes before editing.",
    },
    {
      tab: "ai-workspace",
      stepNumber: 5,
      title: "Contextual AI Copilot",
      icon: MessageSquareCode,
      presenterScript:
        "Click one of the suggested inquiries, like 'Would Marcus forgive Elena?'. Point out the persistent chapter citations that prove the response is grounded in real lore.",
      keyTakeaway: "Conversational project mind with verifiable citation provenance.",
    },
    {
      tab: "creative-studio",
      stepNumber: 6,
      title: "Style-Preserved Rewriter",
      icon: PenTool,
      presenterScript:
        "Show the Side-by-Side and Unified Diff views. Demonstrate how selecting 'Restrained Emotional Tension' sharpens the prose while preserving the author's sensory vocabulary.",
      keyTakeaway: "Symbiotic drafting without replacing human authorial ownership.",
    },
  ];

  if (!isOpen) return null;

  const currentStepIdx = tourSteps.findIndex((s) => s.tab === activeTab);
  const currentStep =
    currentStepIdx !== -1 ? tourSteps[currentStepIdx] : tourSteps[0];

  const handleNext = () => {
    sound.tick();
    const nextIdx = (currentStepIdx + 1) % tourSteps.length;
    onSelectTab(tourSteps[nextIdx].tab);
  };

  const handlePrev = () => {
    sound.tick();
    const prevIdx = (currentStepIdx - 1 + tourSteps.length) % tourSteps.length;
    onSelectTab(tourSteps[prevIdx].tab);
  };

  const toggleSound = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) sound.tick();
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-4xl bg-brand-charcoal/95 border border-brand-violet/50 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/80 p-4 transition-all animate-in slide-in-from-bottom-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Step indicator */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-violet text-white flex items-center justify-center font-mono font-bold text-xs shadow-md shadow-brand-violet/30">
            {currentStep.stepNumber}/6
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-brand-champagne">
                Presenter Guided Walkthrough
              </span>
              <button
                onClick={() => setShowNotes(!showNotes)}
                className="text-[10px] font-mono text-slate-400 hover:text-white underline"
              >
                {showNotes ? "Hide Notes" : "Show Speaker Notes"}
              </button>
            </div>
            <div className="font-serif text-base font-medium text-white flex items-center gap-2">
              <currentStep.icon className="w-4 h-4 text-brand-lavender" />
              <span>{currentStep.title}</span>
            </div>
          </div>
        </div>

        {/* Center: Step jumping buttons */}
        <div className="hidden md:flex items-center gap-1">
          {tourSteps.map((step, idx) => {
            const isActive = step.tab === activeTab;
            return (
              <button
                key={step.tab}
                onClick={() => {
                  sound.tick();
                  onSelectTab(step.tab);
                }}
                className={`w-7 h-7 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                  isActive
                    ? "bg-brand-violet text-white shadow-md shadow-brand-violet/30 scale-105"
                    : "bg-brand-dark/70 text-slate-400 hover:text-white hover:bg-brand-surface border border-white/5"
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSound}
            title={isMuted ? "Unmute UI Audio" : "Mute UI Audio"}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          <button
            onClick={handlePrev}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 transition-colors"
            title="Previous Showcase Step"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-brand-violet/25"
          >
            <span>Next Step</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors ml-1"
            title="Exit Presentation Tour"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Expandable Presenter Notes Box */}
      {showNotes && (
        <div className="mt-3 pt-3 border-t border-brand-border/60 grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
          <div className="md:col-span-8 p-3 rounded-xl bg-brand-dark/90 border border-brand-border/80 text-slate-300 font-sans leading-relaxed">
            <strong className="text-brand-champagne font-mono block text-[11px] mb-1">
              Presenter Talking Points:
            </strong>
            {currentStep.presenterScript}
          </div>
          <div className="md:col-span-4 p-3 rounded-xl bg-brand-violet/10 border border-brand-violet/30 text-brand-lavender font-mono text-[11px] flex flex-col justify-between">
            <strong className="text-white block">Key Investor / Audience Takeaway:</strong>
            <span className="mt-1">{currentStep.keyTakeaway}</span>
          </div>
        </div>
      )}
    </div>
  );
}

