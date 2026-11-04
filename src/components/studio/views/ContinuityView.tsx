"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  BookOpen,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA, ContinuityIssue } from "@/data/glassMeridian";

export function ContinuityView() {
  const [issues, setIssues] = useState<
    (ContinuityIssue & { status: "open" | "resolved" | "dismissed"; appliedFix?: string })[]
  >(
    GLASS_MERIDIAN_DATA.continuityIssues.map((issue) => ({
      ...issue,
      status: "open",
    }))
  );

  const [selectedIssueId, setSelectedIssueId] = useState<string>(
    GLASS_MERIDIAN_DATA.continuityIssues[0].id
  );

  const handleApplyFix = (issueId: string, fixText: string) => {
    setIssues((prev) =>
      prev.map((i) =>
        i.id === issueId ? { ...i, status: "resolved", appliedFix: fixText } : i
      )
    );
  };

  const handleDismiss = (issueId: string) => {
    setIssues((prev) =>
      prev.map((i) => (i.id === issueId ? { ...i, status: "dismissed" } : i))
    );
  };

  const handleResetIssues = () => {
    setIssues(
      GLASS_MERIDIAN_DATA.continuityIssues.map((issue) => ({
        ...issue,
        status: "open",
      }))
    );
  };

  const activeIssue = issues.find((i) => i.id === selectedIssueId) || issues[0];
  const openCount = issues.filter((i) => i.status === "open").length;
  const resolvedCount = issues.filter((i) => i.status === "resolved").length;

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Logic &amp; Timeline Audit Radar</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Continuity Intelligence Scanner
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              THREADSPARK continuously cross-references physical objects, character bodily injuries, timeline schedules, and geography across all 8 chapters to flag discrepancies before publication.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-brand-dark/90 border border-brand-border/80 flex items-center gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px]">OPEN FLAGS</span>
                <span className="text-amber-400 font-serif text-xl font-medium">{openCount} Pending</span>
              </div>
              <div className="border-l border-brand-border pl-4">
                <span className="text-slate-400 block text-[10px]">RESOLVED</span>
                <span className="text-emerald-400 font-serif text-xl font-medium">{resolvedCount} Fixed</span>
              </div>
            </div>

            <button
              onClick={handleResetIssues}
              title="Reset Continuity States"
              className="p-3 rounded-2xl bg-brand-dark hover:bg-brand-surface border border-brand-border text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout: List & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Issue Cards Column */}
        <div className="lg:col-span-5 space-y-3">
          {issues.map((issue) => {
            const isSelected = issue.id === selectedIssueId;
            return (
              <div
                key={issue.id}
                onClick={() => setSelectedIssueId(issue.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-brand-surface border-brand-violet shadow-lg shadow-brand-violet/15"
                    : "bg-brand-charcoal/60 hover:bg-brand-charcoal border-brand-border/70 hover:border-brand-border"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                        issue.severity === "Critical"
                          ? "bg-red-950/60 text-red-300 border-red-500/40"
                          : issue.severity === "Warning"
                          ? "bg-amber-950/60 text-amber-300 border-amber-500/40"
                          : "bg-blue-950/60 text-blue-300 border-blue-500/40"
                      }`}
                    >
                      {issue.severity}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {issue.conflictingPassages.map((p) => `Ch ${p.chapter}`).join(" vs ")}
                    </span>
                  </div>

                  {issue.status === "resolved" && (
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Resolved
                    </span>
                  )}
                  {issue.status === "dismissed" && (
                    <span className="text-[10px] font-mono text-slate-500">Dismissed</span>
                  )}
                </div>

                <h3 className={`font-serif text-base font-medium ${isSelected ? "text-brand-champagne" : "text-white"}`}>
                  {issue.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {issue.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Issue Deep Dive */}
        <div className="lg:col-span-7 glass-panel p-6 md:p-8 rounded-3xl border border-white/10 space-y-6 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
            <div>
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                Discrepancy Audit Inspector
              </div>
              <h2 className="font-serif text-2xl text-white font-medium">
                {activeIssue.title}
              </h2>
            </div>
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                activeIssue.severity === "Critical"
                  ? "bg-red-950/60 text-red-300 border-red-500/40"
                  : "bg-amber-950/60 text-amber-300 border-amber-500/40"
              }`}
            >
              {activeIssue.severity} Priority
            </span>
          </div>

          {/* Conflicting Passages Comparison */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Conflicting Text Evidence Across Manuscript
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeIssue.conflictingPassages.map((cp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-brand-champagne font-semibold">
                      Chapter 0{cp.chapter}
                    </span>
                    <span className="text-slate-500">{cp.context}</span>
                  </div>
                  <p className="font-serif italic text-xs text-slate-200 leading-relaxed border-l-2 border-brand-violet pl-3">
                    {cp.passage}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 text-xs text-slate-300 leading-relaxed space-y-1">
              <strong className="text-red-300 block font-mono text-[11px] uppercase">
                Logical Contradiction Analysis:
              </strong>
              {activeIssue.explanation}
            </div>
          </div>

          {/* AI Resolution Suggestions */}
          <div className="pt-4 border-t border-brand-border/60 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-champagne">
              Automated Authorial Resolutions (1-Click Apply)
            </h4>

            {activeIssue.status === "resolved" ? (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-300">
                  <CheckCircle2 className="w-4 h-4" /> Applied Resolution:
                </div>
                <p className="font-sans leading-relaxed">{activeIssue.appliedFix}</p>
              </div>
            ) : (
              <div className="space-y-2">
                {activeIssue.suggestedFixes.map((fix, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-brand-surface/70 border border-white/5 hover:border-brand-violet/40 transition-all flex items-center justify-between gap-4 text-xs"
                  >
                    <span className="text-slate-200 leading-relaxed">{fix}</span>
                    <button
                      onClick={() => handleApplyFix(activeIssue.id, fix)}
                      className="px-3 py-1.5 rounded-lg bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white border border-brand-violet/30 text-xs font-mono flex-shrink-0 transition-colors flex items-center gap-1"
                    >
                      <span>Apply Fix</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end gap-3 pt-3">
              {activeIssue.status !== "dismissed" && (
                <button
                  onClick={() => handleDismiss(activeIssue.id)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-brand-border transition-colors"
                >
                  Dismiss Flag
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

