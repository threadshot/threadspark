"use client";

import { useState } from "react";
import { StudioSidebar, StudioTab } from "@/components/studio/StudioSidebar";
import { StudioHeader } from "@/components/studio/StudioHeader";
import { ContextualAIPanel } from "@/components/studio/ContextualAIPanel";

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

export default function StudioPage() {
  const [activeTab, setActiveTab] = useState<StudioTab>("overview");
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [resetKey, setResetKey] = useState(0);

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
      {/* 1. Left Navigation Sidebar */}
      <StudioSidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isPresentationMode={isPresentationMode}
      />

      {/* 2. Main Central Application Shell */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <StudioHeader
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          isPresentationMode={isPresentationMode}
          onTogglePresentationMode={() => setIsPresentationMode(!isPresentationMode)}
          isRightPanelOpen={isRightPanelOpen}
          onToggleRightPanel={() => setIsRightPanelOpen(!isRightPanelOpen)}
          onResetDemo={handleResetDemo}
        />

        {/* Center Workspace View Scroll Area */}
        <main className="flex-1 overflow-y-auto bg-brand-void/90 relative">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-brand-violet/5 blur-[120px] pointer-events-none rounded-full" />
          {renderActiveView()}
        </main>
      </div>

      {/* 3. Right Persistent Contextual AI Panel */}
      {isRightPanelOpen && (
        <ContextualAIPanel
          activeTab={activeTab}
          onSelectTab={setActiveTab}
        />
      )}
    </div>
  );
}

