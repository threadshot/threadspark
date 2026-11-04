"use client";

import {
  Sparkles,
  Maximize2,
  Minimize2,
  RotateCcw,
  PanelRightClose,
  PanelRightOpen,
  MonitorPlay,
  FileSearch,
  Sliders,
  GitGraph,
  ShieldCheck,
  MessageSquareCode,
  PenTool,
} from "lucide-react";
import { StudioTab } from "./StudioSidebar";

interface StudioHeaderProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
  isRightPanelOpen: boolean;
  onToggleRightPanel: () => void;
  onResetDemo: () => void;
}

export function StudioHeader({
  activeTab,
  onSelectTab,
  isPresentationMode,
  onTogglePresentationMode,
  isRightPanelOpen,
  onToggleRightPanel,
  onResetDemo,
}: StudioHeaderProps) {
  const getTabLabel = (tab: StudioTab) => {
    switch (tab) {
      case "overview":
        return "Project Telemetry & Intelligence Overview";
      case "document-intelligence":
        return "Manuscript Ingestion & Cognitive Analysis";
      case "style-intelligence":
        return "Stylometric Voice & Lexical Intelligence";
      case "characters":
        return "Character Relational Database & Arcs";
      case "knowledge-graph":
        return "Interactive Relational Knowledge Graph";
      case "continuity":
        return "Continuity & Logic Discrepancy Scanner";
      case "ai-workspace":
        return "Context-Aware Project AI Copilot";
      case "creative-studio":
        return "Style-Conditioned Creative Rewriting Studio";
      case "settings":
        return "Project Preferences & Local Vault";
    }
  };

  const presentationJumps: { id: StudioTab; label: string; icon: any }[] = [
    { id: "document-intelligence", label: "1. Ingestion", icon: FileSearch },
    { id: "style-intelligence", label: "2. Style", icon: Sliders },
    { id: "knowledge-graph", label: "3. Graph", icon: GitGraph },
    { id: "continuity", label: "4. Continuity", icon: ShieldCheck },
    { id: "ai-workspace", label: "5. AI Chat", icon: MessageSquareCode },
    { id: "creative-studio", label: "6. Rewrite", icon: PenTool },
  ];

  return (
    <header className="h-16 px-6 border-b border-brand-border/60 bg-brand-charcoal/80 backdrop-blur-xl flex items-center justify-between select-none z-20">
      {/* Left: Breadcrumbs */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">The Glass Meridian</span>
          <span className="text-slate-400">/</span>
          <span className="text-white font-medium capitalize">
            {activeTab.replace("-", " ")}
          </span>
        </div>

        {isPresentationMode && (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-violet text-white text-[10px] font-mono font-bold tracking-wider uppercase animate-pulse">
            <MonitorPlay className="w-3 h-3" />
            Presentation Mode Active
          </span>
        )}
      </div>

      {/* Center: Presentation Shortcuts (Shown prominently in presentation mode or on larger screens) */}
      <div className="hidden lg:flex items-center gap-1 glass-pill px-2 py-1 rounded-full border border-white/5">
        <span className="text-[10px] font-mono uppercase text-slate-400 px-2">Showcase:</span>
        {presentationJumps.map((jump) => {
          const Icon = jump.icon;
          const isActive = activeTab === jump.id;
          return (
            <button
              key={jump.id}
              onClick={() => onSelectTab(jump.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors ${
                isActive
                  ? "bg-brand-violet text-white font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{jump.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2">
        {/* Reset Demonstration */}
        <button
          onClick={onResetDemo}
          title="Reset demonstration state"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-brand-border transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset Demo</span>
        </button>

        {/* Presentation Mode Toggle */}
        <button
          onClick={onTogglePresentationMode}
          title={isPresentationMode ? "Exit Presentation Mode" : "Enter Large-Screen Presentation Mode"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            isPresentationMode
              ? "bg-brand-violet text-white shadow-lg shadow-brand-violet/25 font-semibold"
              : "text-slate-300 hover:text-white hover:bg-white/5 border border-brand-border"
          }`}
        >
          {isPresentationMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span className="hidden md:inline">
            {isPresentationMode ? "Exit Presentation" : "Presentation Mode"}
          </span>
        </button>

        {/* Contextual AI Panel Toggle */}
        <button
          onClick={onToggleRightPanel}
          title={isRightPanelOpen ? "Hide Contextual AI Panel" : "Show Contextual AI Panel"}
          className={`p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border transition-all ${
            isRightPanelOpen ? "border-brand-border bg-white/5 text-brand-lavender" : "border-transparent"
          }`}
        >
          {isRightPanelOpen ? (
            <PanelRightClose className="w-4 h-4" />
          ) : (
            <PanelRightOpen className="w-4 h-4" />
          )}
        </button>
      </div>
    </header>
  );
}

