"use client";

import { useState } from "react";
import {
  Settings,
  ShieldCheck,
  Database,
  Lock,
  Download,
  Trash2,
  Cpu,
  CheckCircle2,
  HardDrive,
  RefreshCw,
} from "lucide-react";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

export function SettingsView() {
  const [localVaultActive, setLocalVaultActive] = useState(true);
  const [zeroTrainingPledge, setZeroTrainingPledge] = useState(true);
  const [autoRescan, setAutoRescan] = useState(true);
  const [exported, setExported] = useState(false);

  const handleExportData = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(GLASS_MERIDIAN_DATA, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "the_glass_meridian_threadspark_lore.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
              <Settings className="w-3.5 h-3.5" />
              <span>Project Configuration &amp; Privacy</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Project Vault Preferences
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Manage your local knowledge vector storage, encryption keys, and export project state.
            </p>
          </div>

          <button
            onClick={handleExportData}
            className="px-5 py-2.5 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-xs font-mono font-medium transition-all shadow-lg shadow-brand-violet/25 flex items-center gap-2"
          >
            {exported ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
            <span>{exported ? "Lore Exported (.json)" : "Export Full Lore Vault"}</span>
          </button>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Privacy & Sovereignty */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 pb-4 border-b border-brand-border">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif text-xl text-white font-medium">
              Data Sovereignty Guarantees
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border flex items-center justify-between">
              <div className="space-y-1 pr-4">
                <div className="text-sm font-medium text-white">Local-First Vector Index</div>
                <div className="text-xs text-slate-400">
                  Embeddings and graph edges are kept on encrypted local disk.
                </div>
              </div>
              <button
                onClick={() => setLocalVaultActive(!localVaultActive)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  localVaultActive ? "bg-emerald-500" : "bg-slate-700"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    localVaultActive ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border flex items-center justify-between">
              <div className="space-y-1 pr-4">
                <div className="text-sm font-medium text-white">Zero Third-Party Training</div>
                <div className="text-xs text-slate-400">
                  Manuscripts are never fed back into public foundation models.
                </div>
              </div>
              <button
                onClick={() => setZeroTrainingPledge(!zeroTrainingPledge)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  zeroTrainingPledge ? "bg-brand-violet" : "bg-slate-700"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    zeroTrainingPledge ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Local Vector Index Metrics */}
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-6 shadow-xl">
          <div className="flex items-center gap-2 pb-4 border-b border-brand-border">
            <HardDrive className="w-5 h-5 text-brand-champagne" />
            <h3 className="font-serif text-xl text-white font-medium">
              Index Footprint
            </h3>
          </div>

          <div className="space-y-3 font-mono text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-brand-dark/80 border border-brand-border flex justify-between">
              <span>Indexed Tokens:</span>
              <span className="text-brand-champagne">36,420 words (5,842 unique)</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-dark/80 border border-brand-border flex justify-between">
              <span>Relational Graph Nodes:</span>
              <span className="text-white">148 Nodes</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-dark/80 border border-brand-border flex justify-between">
              <span>Total Directed Edges:</span>
              <span className="text-white">312 Connected Vectors</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-dark/80 border border-brand-border flex justify-between">
              <span>Storage Footprint:</span>
              <span className="text-emerald-400">4.2 MB (Compressed)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

