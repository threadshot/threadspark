"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquareCode,
  Sparkles,
  Send,
  Bot,
  User,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Compass,
  Layers,
  CheckCircle2,
  Copy,
  Check,
  Tag,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { GLASS_MERIDIAN_DATA, AIResponsePreset } from "@/data/glassMeridian";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  citations?: { chapter: number; context: string }[];
  timestamp: string;
}

export function AIWorkspaceView() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "ai",
      text: "Welcome to the Threadspark AI Workspace. I have complete persistent understanding of the 36,420 words of *The Glass Meridian*, including all 12 character dossiers, political covenants, and 8 narrative chapters. How can I assist your writing today?",
      timestamp: "Just now",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    sound.tick();
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsThinking(true);

    setTimeout(() => {
      sound.pulse();
      // Find matching preset or formulate contextual answer
      const normalized = text.toLowerCase();
      const presetMatch = GLASS_MERIDIAN_DATA.aiPresets.find((p) =>
        normalized.includes(p.question.toLowerCase().slice(0, 15)) ||
        p.question.toLowerCase().includes(normalized.slice(0, 15))
      );

      let replyText = "";
      let replyCitations: { chapter: number; context: string }[] = [];

      if (presetMatch) {
        replyText = presetMatch.answer;
        replyCitations = presetMatch.citations;
      } else if (normalized.includes("marcus") || normalized.includes("elena")) {
        replyText =
          "Regarding Marcus and Elena's dynamic: Throughout Chapters 1-4, their relationship is defined by mutual intellectual skepticism. Marcus views Elena as an unpredictable radical whose unsanctioned resonance tuning provoked the First Tremblor, while Elena perceives Marcus as a compromised archivist clinging to institutional falsehoods. Their ideological synthesis in Chapter 6 in Silas Ward's kiln marks the true climax of their character arc.";
        replyCitations = [
          { chapter: 3, context: "Initial confrontation at the flooded canal" },
          { chapter: 6, context: "Forging the harmonic dampener" },
        ];
      } else if (normalized.includes("ending") || normalized.includes("climax")) {
        replyText =
          "In Chapter 8, the physical Spire of the Glass Meridian shatters into crystalline dust, but Marcus and Elena successfully internalize the resonance frequency into the bedrock. This averts catastrophic seismic destruction while permanently dismantling the Obsidian Directorate's energy monopoly.";
        replyCitations = [{ chapter: 8, context: "The Shattered Meridian climax" }];
      } else {
        replyText = `Synthesizing across the established lore of *The Glass Meridian*: In response to your inquiry regarding "${text}", the manuscript suggests that any further divergence from the Keystone Covenant will directly accelerate seismic tension before the Winter Equinox. The Free Guilds and the Scholasticate will be forced to renegotiate terms once the true cause of the fracture is made public.`;
        replyCitations = [
          { chapter: 2, context: "The Archon's Edict & forbidden shipping manifests" },
          { chapter: 7, context: "The Grand Solarium infiltration" },
        ];
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: replyText,
        citations: replyCitations,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsThinking(false);
    }, 650);
  };

  const handleCopyMessage = (msgId: string, text: string) => {
    sound.tick();
    navigator.clipboard.writeText(text);
    setCopiedId(msgId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    sound.tick();
    setMessages([
      {
        id: "initial-reset",
        sender: "ai",
        text: "Workspace conversation reset. All 8 chapters and character relationship graphs remain synchronized in memory. Select a suggested prompt or ask your own question.",
        timestamp: "Just now",
      },
    ]);
  };

  const filteredPresets = GLASS_MERIDIAN_DATA.aiPresets.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto animate-fade-in">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-lavender text-xs font-mono">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Contextual Copilot Environment</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl text-white font-medium">
            AI Workspace &amp; Lore Interrogation
          </h1>
        </div>

        <button
          onClick={handleResetChat}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-dark hover:bg-brand-surface border border-brand-border text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear Chat</span>
        </button>
      </div>

      {/* Suggested Prompt Category Selector */}
      <div className="space-y-2.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Curated Manuscript Queries (Click to Run):
          </span>
          <div className="flex gap-1 text-[11px] font-mono">
            {[
              { id: "all", label: "All" },
              { id: "character", label: "Character Arc" },
              { id: "world", label: "World Lore" },
              { id: "continuity", label: "Continuity" },
              { id: "narrative", label: "Craft" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.tick();
                  setActiveCategory(cat.id);
                }}
                className={`px-2.5 py-0.5 rounded-lg transition-colors ${
                  activeCategory === cat.id
                    ? "bg-brand-violet text-white font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSend(preset.question)}
              className="px-3.5 py-1.5 rounded-full bg-brand-charcoal/80 hover:bg-brand-surface border border-brand-border/70 hover:border-brand-violet text-xs text-slate-300 hover:text-white transition-all text-left flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 text-brand-violet flex-shrink-0" />
              <span>{preset.question}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Stream */}
      <div className="glass-panel p-6 rounded-3xl border border-white/10 shadow-2xl min-h-[480px] max-h-[580px] overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 text-xs leading-relaxed ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "ai" && (
              <div className="w-8 h-8 rounded-xl bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                <Bot className="w-4 h-4 text-brand-lavender" />
              </div>
            )}

            <div
              className={`p-4 rounded-2xl max-w-[80%] space-y-3 ${
                msg.sender === "user"
                  ? "bg-brand-violet text-white font-medium"
                  : "bg-brand-dark/95 border border-brand-border/80 text-slate-200"
              }`}
            >
              <div className="whitespace-pre-line font-sans text-sm leading-relaxed">
                {msg.text}
              </div>

              {msg.citations && msg.citations.length > 0 && (
                <div className="pt-3 border-t border-white/10 space-y-1.5 font-mono text-[11px]">
                  <span className="text-brand-champagne uppercase font-bold tracking-wider block">
                    Manuscript Provenance Citations:
                  </span>
                  {msg.citations.map((c, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-lg bg-brand-surface/60 border border-white/5 text-slate-300 flex items-start gap-2"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-brand-lavender mt-0.5 flex-shrink-0" />
                      <span>
                        <strong className="text-white">Chapter {c.chapter}:</strong> {c.context}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-1 text-[10px] opacity-60 font-mono">
                <span>{msg.timestamp}</span>
                {msg.sender === "ai" && (
                  <button
                    onClick={() => handleCopyMessage(msg.id, msg.text)}
                    className="hover:opacity-100 flex items-center gap-1 transition-opacity text-slate-400 hover:text-white"
                  >
                    {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedId === msg.id ? "Copied" : "Copy"}</span>
                  </button>
                )}
              </div>
            </div>

            {msg.sender === "user" && (
              <div className="w-8 h-8 rounded-xl bg-slate-700 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-slate-200" />
              </div>
            )}
          </div>
        ))}

        {isThinking && (
          <div className="flex gap-3 items-center text-xs text-brand-lavender font-mono">
            <div className="w-8 h-8 rounded-xl bg-brand-violet/20 border border-brand-violet/40 flex items-center justify-center">
              <Bot className="w-4 h-4 text-brand-lavender animate-pulse" />
            </div>
            <div className="p-3 rounded-2xl bg-brand-dark/90 border border-brand-border flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-violet animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-brand-champagne animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
              <span>Traversing 36,420 words of relational context...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputVal);
        }}
        className="relative"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask a question about characters, plot, worldbuilding rules, or scene arcs..."
          className="w-full bg-brand-dark/95 border border-brand-border/80 text-slate-100 text-sm pl-4 pr-12 py-3.5 rounded-2xl focus:outline-none focus:border-brand-violet shadow-2xl placeholder:text-slate-500 font-sans"
        />
        <button
          type="submit"
          disabled={!inputVal.trim() || isThinking}
          className="absolute right-2 top-2 bottom-2 px-4 bg-brand-violet hover:bg-purple-600 disabled:opacity-40 text-white rounded-xl transition-all flex items-center justify-center shadow-md shadow-brand-violet/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
