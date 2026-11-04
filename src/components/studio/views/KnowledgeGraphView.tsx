"use client";

import { useState, useMemo } from "react";
import {
  GitGraph,
  Sparkles,
  Search,
  Filter,
  Maximize2,
  Minimize2,
  Info,
  Users,
  MapPin,
  Clock,
  Box,
  Layers,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  ArrowRight,
  MessageSquareCode,
  ShieldAlert,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA } from "@/data/glassMeridian";

interface GraphNode {
  id: string;
  label: string;
  type: "character" | "location" | "event" | "artifact" | "faction";
  x: number;
  y: number;
  summary: string;
  connections: string[];
}

export function KnowledgeGraphView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("marcus");
  const [searchQuery, setSearchQuery] = useState("");
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Prepared topological graph nodes
  const nodes: GraphNode[] = [
    {
      id: "marcus",
      label: "Marcus Thorne",
      type: "character",
      x: 320,
      y: 200,
      summary: "Consul of Archival Records. Discovers harmonic frequency tampering in Chapter 1.",
      connections: ["elena", "malakar", "archives", "meridian", "seal", "evt-infiltrate"],
    },
    {
      id: "elena",
      label: "Elena Vance",
      type: "character",
      x: 480,
      y: 220,
      summary: "Exiled Chronomancer living in the Sunk Hollows. Co-conspirator with Marcus.",
      connections: ["marcus", "silas", "hollows", "prism", "malakar"],
    },
    {
      id: "malakar",
      label: "Archon Malakar",
      type: "character",
      x: 200,
      y: 100,
      summary: "High Inquisitor of the Obsidian Directorate. Seeks weaponized control over the Meridian.",
      connections: ["marcus", "bastion", "seraphina", "directorate"],
    },
    {
      id: "silas",
      label: "Silas Ward",
      type: "character",
      x: 620,
      y: 320,
      summary: "Elder glassmith who built the Spire's keystone 50 winters ago.",
      connections: ["elena", "hollows", "prism", "meridian"],
    },
    {
      id: "meridian",
      label: "The Glass Meridian",
      type: "location",
      x: 400,
      y: 120,
      summary: "A 400-foot obelisk of crystallized silicate anchoring the city's seismic plate.",
      connections: ["marcus", "silas", "evt-fracture", "vault14"],
    },
    {
      id: "hollows",
      label: "The Sunk Hollows",
      type: "location",
      x: 580,
      y: 240,
      summary: "Flooded subterranean tier housing dissidents and black-market resonance labs.",
      connections: ["elena", "silas", "quay"],
    },
    {
      id: "archives",
      label: "Imperial Archives",
      type: "location",
      x: 220,
      y: 260,
      summary: "Five centuries of sealed royal covenants and harmonic blueprints.",
      connections: ["marcus", "scholasticate"],
    },
    {
      id: "bastion",
      label: "Obsidian Bastion",
      type: "location",
      x: 140,
      y: 180,
      summary: "Fortress of the secret police and detention vaults.",
      connections: ["malakar", "directorate"],
    },
    {
      id: "prism",
      label: "Focusing Prism",
      type: "artifact",
      x: 540,
      y: 360,
      summary: "Hand-blown harmonic dampening lens forged by Silas and Elena in Chapter 6.",
      connections: ["silas", "elena", "vault14"],
    },
    {
      id: "seal",
      label: "Ancestral Signet",
      type: "artifact",
      x: 260,
      y: 340,
      summary: "Scholasticate bronze key dropped in Chapter 4 muck; continuity flag.",
      connections: ["marcus", "quay"],
    },
    {
      id: "quay",
      label: "The Iron Quay",
      type: "location",
      x: 360,
      y: 360,
      summary: "Industrial docklands where ether shipments are intercepted in Chapter 4.",
      connections: ["marcus", "elena", "seal"],
    },
    {
      id: "vault14",
      label: "Sunken Vault 14",
      type: "location",
      x: 460,
      y: 420,
      summary: "Bedrock chamber housing the primal harmonic fork where the climax occurs.",
      connections: ["prism", "meridian", "marcus", "elena"],
    },
    {
      id: "evt-fracture",
      label: "Ch 1: The Fracture",
      type: "event",
      x: 520,
      y: 80,
      summary: "At noon chime, the Meridian produces discordant tone and cracks.",
      connections: ["meridian", "marcus"],
    },
    {
      id: "evt-infiltrate",
      label: "Ch 7: Equinox Gala",
      type: "event",
      x: 180,
      y: 360,
      summary: "Marcus and Elena infiltrate the Solarium disguised as archivists.",
      connections: ["marcus", "malakar", "seal"],
    },
  ];

  const filteredNodes = useMemo(() => {
    return nodes.filter((node) => {
      const matchesFilter = activeFilter === "all" || node.type === activeFilter;
      const matchesSearch =
        !searchQuery.trim() ||
        node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [nodes, activeFilter, searchQuery]);

  // Derive links between visible nodes
  const links = useMemo(() => {
    const list: { source: GraphNode; target: GraphNode }[] = [];
    nodes.forEach((source) => {
      source.connections.forEach((targetId) => {
        const target = nodes.find((n) => n.id === targetId);
        if (target && source.id < target.id) {
          list.push({ source, target });
        }
      });
    });
    return list;
  }, [nodes]);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0];

  const getNodeColor = (type: string) => {
    switch (type) {
      case "character":
        return { fill: "#8B5CF6", stroke: "#DDD6FE", badge: "bg-purple-950/60 text-purple-300 border-purple-500/40" };
      case "location":
        return { fill: "#10B981", stroke: "#A7F3D0", badge: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40" };
      case "artifact":
        return { fill: "#F59E0B", stroke: "#FDE68A", badge: "bg-amber-950/60 text-amber-300 border-amber-500/40" };
      case "event":
        return { fill: "#EC4899", stroke: "#FBCFE8", badge: "bg-pink-950/60 text-pink-300 border-pink-500/40" };
      default:
        return { fill: "#64748B", stroke: "#CBD5E1", badge: "bg-slate-800 text-slate-300 border-slate-600" };
    }
  };

  const handleNodeClick = (nodeId: string) => {
    sound.tick();
    setSelectedNodeId(nodeId);
  };

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Top Banner */}
      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
              <GitGraph className="w-3.5 h-3.5" />
              <span>Relational Topology Visualizer</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Interactive Knowledge Graph
            </h1>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Explore interconnected nodes representing characters, geographical locations, artifacts, factions, and narrative events across <em>The Glass Meridian</em>. Click any node to inspect its local cluster.
            </p>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search input */}
            <div className="relative w-full sm:w-48">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search nodes..."
                className="w-full bg-brand-dark/90 border border-brand-border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-violet font-sans"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1 p-1.5 rounded-2xl bg-brand-dark/90 border border-brand-border">
              {[
                { id: "all", label: "All" },
                { id: "character", label: "Characters" },
                { id: "location", label: "Locations" },
                { id: "artifact", label: "Relics" },
                { id: "event", label: "Events" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    sound.tick();
                    setActiveFilter(f.id);
                  }}
                  className={`px-3 py-1 rounded-xl text-xs font-mono transition-colors ${
                    activeFilter === f.id
                      ? "bg-brand-violet text-white font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Canvas & Detail Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive SVG Canvas */}
        <div className="lg:col-span-8 glass-panel p-4 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[520px]">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-brand-border/60">
            <span>Spatial Projection: Harmonic Coordinate Mesh</span>
            <div className="flex items-center gap-2">
              <span className="text-brand-champagne">{filteredNodes.length} Visible Nodes</span>
              <div className="flex items-center gap-1 border-l border-brand-border pl-2">
                <button
                  onClick={() => setZoomScale((prev) => Math.min(prev + 0.15, 1.45))}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoomScale((prev) => Math.max(prev - 0.15, 0.75))}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* SVG Network Visualizer */}
          <div className="w-full h-[460px] relative flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 760 500"
              className="w-full h-full select-none cursor-crosshair transition-transform duration-300"
              style={{ transform: `scale(${zoomScale})` }}
            >
              {/* Grid background lines */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Edge lines */}
              {links.map((link, idx) => {
                const isConnectedToSelected =
                  link.source.id === selectedNodeId || link.target.id === selectedNodeId;
                return (
                  <line
                    key={idx}
                    x1={link.source.x}
                    y1={link.source.y}
                    x2={link.target.x}
                    y2={link.target.y}
                    stroke={
                      isConnectedToSelected
                        ? "rgba(167, 139, 250, 0.85)"
                        : "rgba(255, 255, 255, 0.12)"
                    }
                    strokeWidth={isConnectedToSelected ? 2.5 : 1}
                    strokeDasharray={isConnectedToSelected ? "none" : "3,3"}
                    className={isConnectedToSelected ? "animate-pulse" : ""}
                  />
                );
              })}

              {/* Nodes */}
              {filteredNodes.map((node) => {
                const colors = getNodeColor(node.type);
                const isSelected = node.id === selectedNodeId;
                const isNeighbor = selectedNode.connections.includes(node.id);

                return (
                  <g
                    key={node.id}
                    onClick={() => handleNodeClick(node.id)}
                    className="cursor-pointer group"
                  >
                    {/* Pulsing ring on selected */}
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={24}
                        fill="none"
                        stroke={colors.fill}
                        strokeWidth={2}
                        className="animate-ping opacity-75"
                      />
                    )}

                    {/* Neighbor highlight aura */}
                    {isNeighbor && !isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={18}
                        fill="none"
                        stroke="#A78BFA"
                        strokeWidth={1.5}
                        strokeDasharray="2,2"
                        className="opacity-80"
                      />
                    )}

                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? 16 : isNeighbor ? 13 : 11}
                      fill={colors.fill}
                      stroke={colors.stroke}
                      strokeWidth={isSelected ? 3 : 1.5}
                      className="transition-all duration-200 group-hover:scale-125"
                    />

                    {/* Label */}
                    <text
                      x={node.x}
                      y={node.y + 24}
                      textAnchor="middle"
                      fill={isSelected ? "#FFFFFF" : isNeighbor ? "#DDD6FE" : "#94A3B8"}
                      fontSize={isSelected ? 12 : 10}
                      fontFamily="var(--font-mono)"
                      fontWeight={isSelected ? "bold" : "normal"}
                      className="pointer-events-none drop-shadow"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-brand-border/60">
            <span>Tip: Click any circle node to focus its relational dependencies and neighbors.</span>
            <span className="text-brand-lavender">Force-Directed Topology Active</span>
          </div>
        </div>

        {/* Node Inspector Detail Panel */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 space-y-6 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
              <span className="text-xs font-mono uppercase text-slate-400">Node Inspector</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getNodeColor(selectedNode.type).badge}`}>
                {selectedNode.type.toUpperCase()}
              </span>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-white font-medium mb-1">
                {selectedNode.label}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {selectedNode.summary}
              </p>
            </div>

            {/* Connections List */}
            <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-border space-y-3">
              <div className="text-xs font-mono uppercase text-brand-champagne flex items-center justify-between">
                <span>First-Order Connections</span>
                <span>{selectedNode.connections.length} Edges</span>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {selectedNode.connections.map((targetId) => {
                  const target = nodes.find((n) => n.id === targetId);
                  if (!target) return null;
                  return (
                    <div
                      key={targetId}
                      onClick={() => handleNodeClick(targetId)}
                      className="p-2.5 rounded-xl bg-brand-surface/60 hover:bg-brand-surface border border-white/5 cursor-pointer flex items-center justify-between text-xs transition-colors"
                    >
                      <span className="text-slate-200 font-medium">{target.label}</span>
                      <span className="text-[10px] font-mono text-slate-400 capitalize">
                        {target.type}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-brand-surface/40 border border-white/5 text-[11px] text-slate-400 leading-relaxed">
              <strong>Spatial Anchoring:</strong> Inquiries made in the AI Workspace concerning {selectedNode.label} automatically traverse these {selectedNode.connections.length} connected edges without token drift.
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="pt-4 border-t border-brand-border/60">
            <button
              onClick={() => {
                sound.pulse();
                alert(`AI Copilot initialized for focus node "${selectedNode.label}". Head over to the AI Workspace tab to query.`);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-violet/20 hover:bg-brand-violet text-brand-lavender hover:text-white border border-brand-violet/40 text-xs font-mono transition-all flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>Query {selectedNode.label.split(" ")[0]} in AI Workspace</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
