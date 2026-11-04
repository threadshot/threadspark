"use client";

import { useState } from "react";
import {
  X,
  Sparkles,
  ShieldCheck,
  Building2,
  Mail,
  Send,
  CheckCircle2,
  Lock,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { sound } from "@/lib/sound";

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InvestorModal({ isOpen, onClose }: InvestorModalProps) {
  const [inquiryType, setInquiryType] = useState<
    "institutional-capital" | "studio-pilot" | "technology-licensing" | "academic"
  >("institutional-capital");
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.success();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", organization: "", email: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-void/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl bg-brand-charcoal border border-white/10 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-brand-violet/15 blur-[80px] pointer-events-none rounded-full" />

        {/* Modal Header */}
        <div className="p-6 border-b border-brand-border/80 flex items-center justify-between relative z-10 bg-brand-dark/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-violet to-purple-800 p-[1px] flex items-center justify-center shadow-md">
              <Building2 className="w-4 h-4 text-brand-champagne" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-white">
                Strategic &amp; Institutional Inquiry
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                THREADSPARK Architecture &amp; Corporate Inquiries
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 relative z-10">
          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-medium">
                Inquiry Dispatch Received
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name || "partner"}. Your inquiry regarding{" "}
                <span className="text-brand-champagne font-mono text-xs">
                  {inquiryType.replace("-", " ")}
                </span>{" "}
                has been logged in our secure confidential pipeline. Our executive team will reply within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-brand-surface hover:bg-white/10 border border-brand-border text-xs font-mono text-white transition-all"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Pill Selector */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Inquiry Track
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "institutional-capital", label: "Strategic Capital / VC" },
                    { id: "studio-pilot", label: "Enterprise Studio Pilot" },
                    { id: "technology-licensing", label: "Core Engine Licensing" },
                    { id: "academic", label: "Research & Academic Lab" },
                  ].map((track) => (
                    <button
                      type="button"
                      key={track.id}
                      onClick={() => {
                        setInquiryType(track.id as any);
                        sound.tick();
                      }}
                      className={`p-2.5 rounded-xl border text-left text-xs font-mono transition-all ${
                        inquiryType === track.id
                          ? "bg-brand-violet/20 border-brand-violet text-brand-champagne shadow-sm font-semibold"
                          : "bg-brand-dark/70 border-brand-border text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {track.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Chen"
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Organization / Firm *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Venture Capital / Studio"
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Institutional Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="partner@venturefund.com"
                  className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  Brief Strategic Objectives / Scope (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your interest in THREADSPARK's persistent context architecture, pilot deployment scope, or investor syndicate..."
                  className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans resize-none"
                />
              </div>

              {/* Security & Disclaimers */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Lock className="w-3.5 h-3.5" /> Confidential Protocol
                </span>
                <span>Private Encrypted Vault</span>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Strategic Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

