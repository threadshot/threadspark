"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { StudioSidebar, StudioTab } from "@/components/studio/StudioSidebar";
import { StudioHeader } from "@/components/studio/StudioHeader";
import { ContextualAIPanel } from "@/components/studio/ContextualAIPanel";
import { PresenterTourBar } from "@/components/studio/PresenterTourBar";
import { CommandPalette } from "@/components/CommandPalette";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";
import { Sparkles, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

// Views
import { OverviewView } from "@/components/studio/views/OverviewView";
import { DocumentIntelligenceView } from "@/components/studio/views/DocumentIntelligenceView";
import { StyleIntelligenceView } from "@/components/studio/views/StyleIntelligenceView";
import { CharacterIntelligenceView } from "@/components/studio/views/CharacterIntelligenceView";
import { KnowledgeGraphView } from "@/components/studio/views/KnowledgeGraphView";
import { ContinuityView } from "@/components/studio/views/ContinuityView";
import { AIWorkspaceView } from "@/components/studio/views/AIWorkspaceView";
import { CreativeStudioView } from "@/components/studio/views/CreativeStudioView";
import { SettingsView } from "@/components/studio/views/SettingsView";

function StudioContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<StudioTab>("overview");
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isPresenterTourOpen, setIsPresenterTourOpen] = useState(false);
  const [betaOpen, setBetaOpen] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Sync tab with URL query parameter if provided
  useEffect(() => {
    const tabParam = searchParams.get("tab") as StudioTab;
    if (tabParam && [
      "overview",
      "document-intelligence",
      "style-intelligence",
      "characters",
      "knowledge-graph",
      "continuity",
      "ai-workspace",
      "creative-studio",
      "settings",
    ].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleResetDemo = () => {
    setActiveTab("overview");
    setResetKey((prev) => prev + 1);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewView key={`ov-${resetKey}`} onNavigateTab={setActiveTab} />;
      case "document-intelligence":
        return <DocumentIntelligenceView key={`doc-${resetKey}`} />;
      case "style-intelligence":
        return <StyleIntelligenceView key={`sty-${resetKey}`} />;
      case "characters":
        return <CharacterIntelligenceView key={`char-${resetKey}`} />;
      case "knowledge-graph":
        return <KnowledgeGraphView key={`kg-${resetKey}`} />;
      case "continuity":
        return <ContinuityView key={`cnt-${resetKey}`} />;
      case "ai-workspace":
        return <AIWorkspaceView key={`ai-${resetKey}`} />;
      case "creative-studio":
        return <CreativeStudioView key={`cs-${resetKey}`} />;
      case "settings":
        return <SettingsView key={`set-${resetKey}`} />;
      default:
        return <OverviewView onNavigateTab={setActiveTab} />;
    }
  };

  return (
    <div
      className={`min-h-screen bg-brand-void text-slate-100 flex overflow-hidden ${
        isPresentationMode ? "presentation-mode" : ""
      }`}
    >
      <CommandPalette />

      {/* 1. Left Navigation Sidebar */}
      <StudioSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isPresentationMode={isPresentationMode}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* 2. Main Central Application Shell */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Interactive Sample Manuscript Notice Banner */}
        <div className="bg-gradient-to-r from-brand-violet/20 via-brand-surface to-brand-charcoal px-4 py-2 border-b border-brand-violet/30 flex items-center justify-between text-xs font-mono select-none flex-shrink-0 z-30">
          <div className="flex items-center gap-2 text-slate-300 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-white font-medium">Illustrative Prototype Demo:</span>
            <span className="text-slate-300 truncate">
              Preloaded with <em>{SITE_CONFIG.demoManuscript.title}</em> ({SITE_CONFIG.demoManuscript.wordCount} words &bull; {SITE_CONFIG.demoManuscript.characters} character dossiers &bull; {SITE_CONFIG.demoManuscript.stateNodes} graph nodes).
            </span>
          </div>
          <button
            onClick={() => setBetaOpen(true)}
            className="ml-3 px-3 py-1 rounded-full bg-brand-violet hover:bg-purple-600 text-white text-[11px] font-medium transition-all flex items-center gap-1.5 flex-shrink-0 shadow-sm"
          >
            <UserCheck className="w-3 h-3 text-brand-champagne" />
            <span>Apply to analyze your series &rarr;</span>
          </button>
        </div>

        {/* Top Header */}
        <StudioHeader
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isPresentationMode={isPresentationMode}
          onTogglePresentationMode={() => setIsPresentationMode(!isPresentationMode)}
          isRightPanelOpen={isRightPanelOpen}
          onToggleRightPanel={() => setIsRightPanelOpen(!isRightPanelOpen)}
          onResetDemo={handleResetDemo}
          onStartPresenterTour={() => setIsPresenterTourOpen(true)}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />

        {/* Center Workspace View Scroll Area */}
        <main className="flex-1 overflow-y-auto bg-brand-void/90 relative pb-20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-brand-violet/5 blur-[120px] pointer-events-none rounded-full" />
          {renderActiveView()}
        </main>
      </div>

      {/* 3. Right Persistent Contextual AI Panel */}
      {isRightPanelOpen && (
        <div className="hidden xl:block">
          <ContextualAIPanel
            activeTab={activeTab}
            onSelectTab={setActiveTab}
          />
        </div>
      )}

      {/* 4. Guided Feature Tour Overlay Dock */}
      <PresenterTourBar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpen={isPresenterTourOpen}
        onClose={() => setIsPresenterTourOpen(false)}
      />

      <BetaApplicationModal isOpen={betaOpen} onClose={() => setBetaOpen(false)} />
    </div>
  );
}

export default function StudioPage() {
  return (
    <>
      {/* Search Crawler and Non-JavaScript Accessible Summary */}
      <noscript>
        <div className="p-8 max-w-4xl mx-auto bg-slate-900 text-slate-100 font-sans space-y-6">
          <h1 className="text-3xl font-serif">Threadspark Studio — Interactive Prototype</h1>
          <p className="text-base text-slate-300">
            Threadspark is a deterministic continuity engine and living story bible for fiction authors. This studio prototype is preloaded with the complete sample political fantasy manuscript of <em>The Glass Meridian</em> (36,420 words, 8 chapters).
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-medium text-purple-300">Preloaded Prototype Capabilities:</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
              <li><strong>Document Ingestion Pipeline:</strong> Multi-pass lexical parsing, entity identification, and chronological event mapping.</li>
              <li><strong>Stylometrics &amp; Authorship Profiling:</strong> 0.76 Type-Token Ratio, 18.4 avg sentence length, dialogue cadence analysis.</li>
              <li><strong>Character Dossiers &amp; Epistemic Bounds:</strong> 12 character profiles tracking secrets, alliances, and knowledge propagation.</li>
              <li><strong>Relational Knowledge Graph:</strong> 148 state nodes connecting characters, locations, carried artifacts, and political covenants.</li>
              <li><strong>Continuity Radar:</strong> Detection of physical state invariants (broken seal reappearance, ignored forearm fracture) with links to conflicting passages.</li>
            </ul>
          </div>
          <p className="text-sm text-slate-400">
            To participate in the {SITE_CONFIG.designPartnerCohort.totalSpots}-author Design Partner Program, contact founder Ezekiel Heretta at {SITE_CONFIG.contactEmail}.
          </p>
        </div>
      </noscript>

      <Suspense
        fallback={
          <div className="min-h-screen bg-brand-void text-slate-200 flex flex-col items-center justify-center p-6 text-center space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-brand-violet/20 border border-brand-violet/40 text-brand-champagne flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>
            <h1 className="font-serif text-2xl text-white font-medium">Threadspark Studio Prototype</h1>
            <p className="text-sm text-slate-400 max-w-md">
              Loading the interactive story-state engine preloaded with <em>The Glass Meridian</em> (36,420 words, 8 chapters, 148 state nodes)...
            </p>
            <div className="text-xs font-mono text-brand-lavender/60">Initializing relational knowledge graph &amp; epistemic radar...</div>
          </div>
        }
      >
        <StudioContent />
      </Suspense>
    </>
  );
}
