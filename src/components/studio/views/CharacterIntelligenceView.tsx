"use client";

import { useState, useMemo } from "react";
import {
  Users,
  Sparkles,
  Shield,
  Heart,
  Swords,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Tag,
  Clock,
  Compass,
  Search,
  MessageSquareCode,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA, Character } from "@/data/glassMeridian";

export function CharacterIntelligenceView() {
  const characters = GLASS_MERIDIAN_DATA.characters;
  const [selectedCharId, setSelectedCharId] = useState<string>(characters[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [factionFilter, setFactionFilter] = useState("all");

  const selectedChar = characters.find((c) => c.id === selectedCharId) || characters[0];

  const filteredCharacters = useMemo(() => {
    return characters.filter((c) => {
      const matchesSearch =
        !searchQuery.trim() ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.traits.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFaction =
        factionFilter === "all" ||
        c.faction.toLowerCase().includes(factionFilter.toLowerCase());

      return matchesSearch && matchesFaction;
    });
  }, [characters, searchQuery, factionFilter]);

  const getTensionBadge = (level: string) => {
    switch (level) {
      case "Hostile":
        return "bg-red-950/60 text-red-300 border-red-500/40";
      case "High":
        return "bg-amber-950/60 text-amber-300 border-amber-500/40";
      case "Moderate":
        return "bg-purple-950/60 text-brand-lavender border-purple-500/40";
      default:
        return "bg-emerald-950/60 text-emerald-300 border-emerald-500/40";
    }
  };

  const handleSelectChar = (id: string) => {
    sound.tick();
    setSelectedCharId(id);
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
              <Users className="w-3.5 h-3.5" />
              <span>Entity Relational Registry</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Character Dossiers &amp; Trajectory Arcs
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              12 primary characters extracted from <em>The Glass Meridian</em>. Select any figure to examine their psychological traits, hidden motivations, dynamic tension matrix, and chapter appearances.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-brand-dark/90 border border-brand-border/80 flex items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">TOTAL CHARACTERS</span>
                <span className="text-white font-serif text-xl font-medium">12 Extracted</span>
              </div>
              <div className="border-l border-brand-border pl-4">
                <span className="text-slate-400 block text-[10px]">ACTIVE CONFLICTS</span>
                <span className="text-red-400 font-serif text-xl font-medium">7 High Friction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Roster, Right Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Character List Column */}
        <div className="lg:col-span-4 space-y-3">
          {/* Search & Filter */}
          <div className="space-y-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name or trait..."
                className="w-full bg-brand-dark/90 border border-brand-border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-violet font-sans"
              />
            </div>

            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px] font-mono">
              {[
                { id: "all", label: "All" },
                { id: "scholasticate", label: "Scholasticate" },
                { id: "directorate", label: "Directorate" },
                { id: "hollows", label: "Hollows" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    sound.tick();
                    setFactionFilter(f.id);
                  }}
                  className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap ${
                    factionFilter === f.id
                      ? "bg-brand-violet text-white font-semibold"
                      : "bg-brand-dark/60 text-slate-400 hover:text-white"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2 max-h-[680px] overflow-y-auto pr-1">
            {filteredCharacters.map((char) => {
              const isSelected = char.id === selectedCharId;
              return (
                <div
                  key={char.id}
                  onClick={() => handleSelectChar(char.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? "bg-brand-surface border-brand-violet shadow-lg shadow-brand-violet/15"
                      : "bg-brand-charcoal/60 hover:bg-brand-charcoal border-brand-border/70 hover:border-brand-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-serif text-base font-medium ${isSelected ? "text-brand-champagne" : "text-white"}`}>
                      {char.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-dark border border-white/5 text-slate-400">
                      {char.faction.split(" ")[0]}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 line-clamp-1">{char.role}</div>
                  <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                    {char.traits.slice(0, 3).map((trait) => (
                      <span key={trait} className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Character Dossier Detail */}
        <div className="lg:col-span-8 space-y-6">
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-brand-border/60 gap-4">
              <div>
                <div className="text-xs font-mono text-brand-lavender uppercase mb-1">
                  {selectedChar.faction}
                </div>
                <h2 className="font-serif text-3xl text-white font-medium">
                  {selectedChar.name}
                </h2>
                <div className="text-sm text-slate-400 mt-0.5">{selectedChar.role}</div>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:max-w-xs justify-start sm:justify-end">
                {selectedChar.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-brand-surface border border-white/10 text-brand-champagne"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Description & Arc */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Psychological &amp; Physical Profile
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed font-sans">
                  {selectedChar.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-champagne uppercase font-semibold">
                  <TrendingUp className="w-4 h-4 text-brand-violet" />
                  <span>Developmental Character Arc</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedChar.developmentArc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Core Motivations &amp; Internal Stakes
                </h4>
                <ul className="space-y-2">
                  {selectedChar.motivations.map((mot, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-violet mt-1.5 flex-shrink-0" />
                      <span>{mot}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Relationships Matrix with Clickable Jumps */}
            <div className="pt-4 border-t border-brand-border/60 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Dynamic Relationship Network (Click to Jump)
                </h4>
                <span className="text-[10px] font-mono text-slate-400">Interactive Links</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedChar.relationships.map((rel, idx) => {
                  const targetChar = characters.find((c) => c.name === rel.targetName || c.id === rel.targetId);
                  return (
                    <div
                      key={idx}
                      onClick={() => targetChar && handleSelectChar(targetChar.id)}
                      className="p-3.5 rounded-xl bg-brand-dark/80 hover:bg-brand-dark border border-brand-border hover:border-brand-violet/40 cursor-pointer space-y-2 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-medium text-white group-hover:text-brand-champagne transition-colors flex items-center gap-1.5">
                          <span>{rel.targetName}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getTensionBadge(rel.tensionLevel)}`}>
                          {rel.tensionLevel} Friction
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans">
                        {rel.relation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chapter Appearances */}
            <div className="pt-4 border-t border-brand-border/60 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Story Beats &amp; Chapter Appearances
              </h4>
              <div className="space-y-2">
                {selectedChar.appearances.map((app, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-brand-surface/50 border border-white/5 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-brand-champagne font-semibold">
                        Chapter 0{app.chapter}
                      </span>
                      <span className="text-slate-300 font-sans">{app.roleInScene}</span>
                    </div>
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
