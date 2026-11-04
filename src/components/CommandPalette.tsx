"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Sparkles,
  LayoutDashboard,
  FileSearch,
  Sliders,
  BookOpen,
  GitGraph,
  ShieldCheck,
  MessageSquareCode,
  PenTool,
  Settings,
  Layers,
  Compass,
  Info,
  X,
  ArrowRight,
  Command,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Studio Views" | "Characters" | "Continuity Flags";
  description?: string;
  icon: any;
  href?: string;
  action?: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        sound.pulse();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    // Pages
    { id: "page-home", title: "Overview / Homepage", category: "Navigation", description: "Return to THREADSPARK home", icon: LayoutDashboard, href: "/" },
    { id: "page-platform", title: "Platform Architecture", category: "Navigation", description: "Deep dive into the 6 cognitive pillars", icon: Layers, href: "/platform" },
    { id: "page-use-cases", title: "Use Cases & Case Studies", category: "Navigation", description: "Novelists, Worldbuilders, Screenwriters, Researchers", icon: Compass, href: "/use-cases" },
    { id: "page-about", title: "Manifesto & Thesis", category: "Navigation", description: "Our mission, philosophy, and principles", icon: Info, href: "/about" },
    { id: "page-studio", title: "Launch THREADSPARK Studio", category: "Navigation", description: "Interactive product demonstration", icon: Sparkles, href: "/studio" },

    // Studio Views
    { id: "st-doc", title: "Document Ingestion Pipeline", category: "Studio Views", description: "8-stage manuscript synthesis simulation", icon: FileSearch, href: "/studio?tab=document-intelligence" },
    { id: "st-style", title: "Writing Style Intelligence", category: "Studio Views", description: "Stylometric authorship fingerprinting & lexical variance", icon: Sliders, href: "/studio?tab=style-intelligence" },
    { id: "st-chars", title: "Character Dossiers & Arcs", category: "Studio Views", description: "12 character profiles with dynamic tension ratings", icon: BookOpen, href: "/studio?tab=characters" },
    { id: "st-graph", title: "Interactive Relational Knowledge Graph", category: "Studio Views", description: "SVG topological spatial network", icon: GitGraph, href: "/studio?tab=knowledge-graph" },
    { id: "st-continuity", title: "Continuity Radar Scanner", category: "Studio Views", description: "3 flagged discrepancies with 1-click authorial fixes", icon: ShieldCheck, href: "/studio?tab=continuity" },
    { id: "st-ai", title: "Context-Aware AI Copilot", category: "Studio Views", description: "Conversational project intelligence", icon: MessageSquareCode, href: "/studio?tab=ai-workspace" },
    { id: "st-creative", title: "Style-Preserved Creative Studio", category: "Studio Views", description: "Side-by-side & unified diff rewriting", icon: PenTool, href: "/studio?tab=creative-studio" },
    { id: "st-settings", title: "Project Vault & Local Sovereignty", category: "Studio Views", description: "Encryption, local storage, and lore export", icon: Settings, href: "/studio?tab=settings" },

    // Characters
    ...GLASS_MERIDIAN_DATA.characters.slice(0, 6).map((char) => ({
      id: `char-${char.id}`,
      title: `${char.name} (${char.role})`,
      category: "Characters" as const,
      description: `${char.faction} • ${char.traits.join(", ")}`,
      icon: BookOpen,
      href: `/studio?tab=characters&char=${char.id}`,
    })),

    // Continuity Issues
    ...GLASS_MERIDIAN_DATA.continuityIssues.map((issue) => ({
      id: `issue-${issue.id}`,
      title: issue.title,
      category: "Continuity Flags" as const,
      description: `${issue.severity} severity: ${issue.description.slice(0, 70)}...`,
      icon: ShieldCheck,
      href: `/studio?tab=continuity`,
    })),
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q))
    );
  });

  const handleSelect = (item: CommandItem) => {
    sound.tick();
    setIsOpen(false);
    if (item.href) {
      router.push(item.href);
    } else if (item.action) {
      item.action();
    }
  };

  const handleKeyDownInList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-brand-void/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-brand-charcoal/95 border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-brand-border/80 gap-3 bg-brand-dark/90">
          <Search className="w-4 h-4 text-brand-lavender flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDownInList}
            placeholder="Type a command, page name, character, or studio feature..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
            ESC
          </kbd>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors sm:hidden"
            aria-label="Close Command Palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.03]">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400 font-mono">
              No matching commands or entities found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-brand-violet/20 text-white border border-brand-violet/40"
                      : "text-slate-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected
                          ? "bg-brand-violet text-white"
                          : "bg-brand-surface text-slate-400 border border-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium truncate flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      {item.description && (
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-3.5 h-3.5 flex-shrink-0 ml-2 transition-transform ${
                      isSelected ? "translate-x-0.5 text-brand-champagne opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-brand-void border-t border-brand-border/60 flex items-center justify-between text-[11px] font-mono text-slate-400 select-none">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↓</kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[9px]">↵</kbd>
              Select
            </span>
          </div>
          <span className="text-brand-champagne">THREADSPARK QuickJump</span>
        </div>
      </div>
    </div>
  );
}

