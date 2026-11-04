"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  Compass,
  ArrowRight,
  ShieldAlert,
  Lightbulb,
  BookOpen,
  Sliders,
  ChevronRight,
  Bot,
  User,
} from "lucide-react";
import { StudioTab } from "./StudioSidebar";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

interface ContextualAIPanelProps {
  activeTab: StudioTab;
  onSelectTab: (tab: StudioTab) => void;
  onSendWorkspacePrompt?: (prompt: string) => void;
}

export function ContextualAIPanel({
  activeTab,
  onSelectTab,
  onSendWorkspacePrompt,
}: ContextualAIPanelProps) {
  const [quickInput, setQuickInput] = useState("");
  const [panelHistory, setPanelHistory] = useState<
    { role: "user" | "ai"; text: string }[]
  >([
    {
      role: "ai",
      text: "I am actively monitoring the full 36,420 words of The Glass Meridian. Ask me anything about character allegiances, timeline causality, or stylistic tone.",
    },
  ]);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickInput.trim()) return;

    const query = quickInput;
    setQuickInput("");
    setPanelHistory((prev) => [...prev, { role: "user", text: query }]);

    // Find closest preset or generate contextual answer
    setTimeout(() => {
      const match = GLASS_MERIDIAN_DATA.aiPresets.find((p) =>
        query.toLowerCase().includes(p.question.toLowerCase().slice(0, 15))
      );

      let reply = match
        ? match.answer
        : `Analyzing across Chapters 1-8: Regarding "${query}", the manuscript establishes that Marcus and Elena's actions at the Iron Quay set off an irreversible harmonic cascade. All archival evidence points to Directorate tampering.`;

      setPanelHistory((prev) => [...prev, { role: "ai", text: reply }]);
    }, 600);
  };

  const getTabContextTip = () => {
    switch (activeTab) {
      case "overview":
        return {
          title: "Manuscript Health 92%",
          note: "3 continuity warnings identified. Overall stylistic coherence is high with consistent 18.4 word pacing.",
        };
      case "document-intelligence":
        return {
          title: "Ingestion Pipeline",
          note: "8 discrete analysis stages applied. Ingestion vector topology anchored at bedrock core.",
        };
      case "style-intelligence":
        return {
          title: "Voice Characteristics",
          note: "Author relies on tactile architectural metaphors (4.2/1k words). High lexical variety (0.76 TTR).",
        };
      case "characters":
        return {
          title: "Key Character Friction",
          note: "Elena Vance and Marcus Thorne have highest dynamic tension (Score: 88). Silas Ward holds unresolved guilt.",
        };
      case "knowledge-graph":
        return {
          title: "Graph Traversal",
          note: "Click any node to see first-order relationships and chapter event causality.",
        };
      case "continuity":
        return {
          title: "Critical Inconsistency",
          note: "Chapter 4 seal loss vs Chapter 7 Solarium door bypass is the most severe flaw.",
        };
      case "creative-studio":
        return {
          title: "Style-Preserved Rewriter",
          note: "Select an instruction to transform scene tension without flattening literary voice.",
        };
      default:
        return {
          title: "Context Active",
          note: "Ready to assist with narrative craft, world lore, and character dialogue.",
        };
    }
  };

  const currentTip = getTabContextTip();

  return (
    <aside className="w-80 border-l border-brand-border/60 bg-brand-charcoal/90 backdrop-blur-xl flex flex-col justify-between select-none z-20">
      {/* Header */}
      <div>
        <div className="p-4 border-b border-brand-border/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-brand-lavender" />
            </div>
            <span className="font-serif text-sm font-medium text-white">
              Chronicle Assistant
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Aware
          </span>
        </div>

        {/* Dynamic Context Notification */}
        <div className="p-3">
          <div className="p-3 rounded-xl bg-brand-dark/90 border border-brand-border text-xs space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1.5 text-brand-champagne font-mono text-[11px] font-semibold">
              <Lightbulb className="w-3.5 h-3.5 text-brand-violet" />
              <span>{currentTip.title}</span>
            </div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {currentTip.note}
            </p>
          </div>
        </div>

        {/* Quick Suggested Questions */}
        <div className="px-3 pb-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
            Contextual Inquiries
          </div>
          <div className="space-y-1.5">
            {GLASS_MERIDIAN_DATA.aiPresets.slice(0, 3).map((preset) => (
              <button
                key={preset.id}
                onClick={() => {
                  setPanelHistory((prev) => [
                    ...prev,
                    { role: "user", text: preset.question },
                    { role: "ai", text: preset.answer },
                  ]);
                }}
                className="w-full text-left p-2 rounded-lg bg-brand-surface/40 hover:bg-brand-surface border border-white/5 text-[11px] text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
              >
                <span className="line-clamp-1">{preset.question}</span>
                <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-brand-champagne flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mini Chat Stream */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[140px] max-h-[300px] border-t border-b border-brand-border/40">
        {panelHistory.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-2 text-xs leading-relaxed ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "ai" && (
              <div className="w-5 h-5 rounded-full bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-3 h-3 text-brand-lavender" />
              </div>
            )}
            <div
              className={`p-2.5 rounded-xl max-w-[85%] ${
                msg.role === "user"
                  ? "bg-brand-violet text-white font-medium"
                  : "bg-brand-dark/90 text-slate-300 border border-white/5"
              }`}
            >
              <p className="text-[11px] leading-relaxed">{msg.text}</p>
            </div>
            {msg.role === "user" && (
              <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <User className="w-3 h-3 text-slate-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="p-3">
        <form onSubmit={handleQuickSubmit} className="relative">
          <input
            type="text"
            value={quickInput}
            onChange={(e) => setQuickInput(e.target.value)}
            placeholder="Ask anything about this project..."
            className="w-full bg-brand-dark border border-brand-border text-slate-200 text-xs pl-3 pr-8 py-2 rounded-xl focus:outline-none focus:border-brand-violet transition-colors placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 px-2 bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white rounded-lg transition-all flex items-center justify-center"
          >
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    </aside>
  );
}

