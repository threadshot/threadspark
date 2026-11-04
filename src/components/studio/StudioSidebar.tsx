"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileSearch,
  Sparkles,
  GitGraph,
  MessageSquareCode,
  PenTool,
  Settings,
  ChevronLeft,
  BookOpen,
  ShieldCheck,
  Maximize2,
  Minimize2,
  RotateCcw,
  Sliders,
  CheckCircle2,
  X,
} from "lucide-react";
import { sound } from "@/lib/sound";

export type StudioTab =
  | "overview"
  | "document-intelligence"
  | "style-intelligence"
  | "characters"
  | "knowledge-graph"
  | "continuity"
  | "ai-workspace"
  | "creative-studio"
  | "settings";

interface StudioSidebarProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  isPresentationMode: boolean;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function StudioSidebar({
  activeTab,
  onSelectTab,
  isPresentationMode,
  isMobileOpen = false,
  onCloseMobile,
}: StudioSidebarProps) {
  const menuItems: { id: StudioTab; label: string; icon: any; badge?: string }[] = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "document-intelligence", label: "Document Ingestion", icon: FileSearch, badge: "8 Stages" },
    { id: "style-intelligence", label: "Writing Style AI", icon: Sliders },
    { id: "characters", label: "Character Dossiers", icon: BookOpen, badge: "12" },
    { id: "knowledge-graph", label: "Knowledge Graph", icon: GitGraph, badge: "Interactive" },
    { id: "continuity", label: "Continuity Radar", icon: ShieldCheck, badge: "3 Flags" },
    { id: "ai-workspace", label: "AI Workspace", icon: MessageSquareCode, badge: "Active" },
    { id: "creative-studio", label: "Creative Studio", icon: PenTool },
    { id: "settings", label: "Project Settings", icon: Settings },
  ];

  const handleTabClick = (tabId: StudioTab) => {
    sound.tick();
    onSelectTab(tabId);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 flex flex-col justify-between border-r border-brand-border/60 bg-brand-charcoal/95 backdrop-blur-xl transition-all duration-300 select-none ${
          isMobileOpen
            ? "translate-x-0 w-72"
            : "-translate-x-full md:translate-x-0 w-64"
        }`}
      >
        <div>
          {/* Brand & Project Switcher */}
          <div className="p-4 border-b border-brand-border/60">
            <div className="flex items-center justify-between mb-3">
              <Link
                href="/"
                onClick={() => sound.tick()}
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Back to Overview</span>
              </Link>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-violet/20 text-brand-lavender border border-brand-violet/30">
                  Demo Studio
                </span>
                {onCloseMobile && (
                  <button
                    onClick={onCloseMobile}
                    className="p-1 rounded md:hidden text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-brand-dark/90 border border-brand-border/80 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-purple-800 flex items-center justify-center font-serif text-white font-bold text-sm shadow-md">
                GM
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-serif font-medium text-white truncate">The Glass Meridian</div>
                <div className="text-[10px] font-mono text-slate-400 truncate">Draft 3 • 36.4k words</div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Navigation
            </div>

            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-brand-violet text-white shadow-md shadow-brand-violet/25 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                        isActive ? "bg-white/20 text-white" : "bg-brand-surface text-slate-400 border border-white/5"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Info */}
        <div className="p-3 border-t border-brand-border/60">
          <div className="p-2.5 rounded-xl bg-brand-dark/60 border border-white/5 text-[11px] space-y-1.5">
            <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
              <span>ENGINE STATUS</span>
              <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Synchronized
              </span>
            </div>
            <div className="text-slate-300 font-sans text-[11px]">
              All 8 chapters parsed with 100% relational fidelity.
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
