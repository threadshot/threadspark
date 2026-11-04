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
  Menu,
  X,
  Play,
} from "lucide-react";
import { StudioTab } from "./StudioSidebar";
import { sound } from "@/lib/sound";

interface StudioHeaderProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
  isRightPanelOpen: boolean;
  onToggleRightPanel: () => void;
  onResetDemo: () => void;
  onStartPresenterTour?: () => void;
  onToggleMobileSidebar?: () => void;
}

export function StudioHeader({
  activeTab,
  onSelectTab,
  isPresentationMode,
  onTogglePresentationMode,
  isRightPanelOpen,
  onToggleRightPanel,
  onResetDemo,
  onStartPresenterTour,
  onToggleMobileSidebar,
}: StudioHeaderProps) {
  const presentationJumps: { id: StudioTab; label: string; icon: any }[] = [
    { id: "document-intelligence", label: "1. Ingestion", icon: FileSearch },
    { id: "style-intelligence", label: "2. Style", icon: Sliders },
    { id: "knowledge-graph", label: "3. Graph", icon: GitGraph },
    { id: "continuity", label: "4. Continuity", icon: ShieldCheck },
    { id: "ai-workspace", label: "5. AI Chat", icon: MessageSquareCode },
    { id: "creative-studio", label: "6. Rewrite", icon: PenTool },
  ];

  return (
    <header className="h-16 px-4 sm:px-6 border-b border-brand-border/60 bg-brand-charcoal/80 backdrop-blur-xl flex items-center justify-between select-none z-20">
      {/* Left: Mobile Menu & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {onToggleMobileSidebar && (
          <button
            onClick={() => {
              sound.tick();
              onToggleMobileSidebar();
            }}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400 hidden sm:inline">The Glass Meridian</span>
          <span className="text-slate-400 hidden sm:inline">/</span>
          <span className="text-white font-medium capitalize truncate max-w-[140px] sm:max-w-none">
            {activeTab.replace("-", " ")}
          </span>
        </div>

        {isPresentationMode && (
          <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-violet text-white text-[10px] font-mono font-bold tracking-wider uppercase animate-pulse">
            <MonitorPlay className="w-3 h-3" />
            Presentation Mode Active
          </span>
        )}
      </div>

      {/* Center: Presentation Showcase Shortcuts */}
      <div className="hidden lg:flex items-center gap-1 glass-pill px-2 py-1 rounded-full border border-white/5">
        <span className="text-[10px] font-mono uppercase text-slate-400 px-2">Showcase:</span>
        {presentationJumps.map((jump) => {
          const Icon = jump.icon;
          const isActive = activeTab === jump.id;
          return (
            <button
              key={jump.id}
              onClick={() => {
                sound.tick();
                onSelectTab(jump.id);
              }}
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
        {/* Presenter Tour Launch Button */}
        {onStartPresenterTour && (
          <button
            onClick={() => {
              sound.pulse();
              onStartPresenterTour();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white border border-brand-violet/30 text-xs font-mono font-medium transition-all"
            title="Launch 6-Step Presenter Guided Walkthrough"
          >
            <Play className="w-3 h-3 text-brand-champagne fill-brand-champagne" />
            <span className="hidden sm:inline">Guided Tour</span>
          </button>
        )}

        {/* Reset Demonstration */}
        <button
          onClick={() => {
            sound.tick();
            onResetDemo();
          }}
          title="Reset demonstration state"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-brand-border transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>

        {/* Presentation Mode Toggle */}
        <button
          onClick={() => {
            sound.tick();
            onTogglePresentationMode();
          }}
          title={isPresentationMode ? "Exit Presentation Mode" : "Enter Large-Screen Presentation Mode"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
            isPresentationMode
              ? "bg-brand-violet text-white shadow-lg shadow-brand-violet/25 font-semibold"
              : "text-slate-300 hover:text-white hover:bg-white/5 border border-brand-border"
          }`}
        >
          {isPresentationMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          <span className="hidden md:inline">
            {isPresentationMode ? "Exit" : "Present"}
          </span>
        </button>

        {/* Contextual AI Panel Toggle */}
        <button
          onClick={() => {
            sound.tick();
            onToggleRightPanel();
          }}
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
