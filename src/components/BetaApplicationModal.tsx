"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Send,
  ShieldCheck,
  Mail,
  Copy,
  Check,
  Loader2,
} from "lucide-react";
import { SITE_CONFIG, getCohortLabel, getCohortStatusBadge } from "@/lib/site";

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BetaApplicationModal({ isOpen, onClose }: BetaModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    genre: "Epic Fantasy",
    bookCount: "2-3 Books (Duology / Trilogy)",
    wordCount: "100k - 250k words",
    currentTools: "",
    feedbackCommitment: true,
    agreedToTerms: false,
    hpWebsite: "", // Bot honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  if (!isOpen) return null;

  const mailSubject = encodeURIComponent(
    `Threadspark Design Partner Application: ${formData.name || "Author"} (${formData.genre})`
  );
  const mailBody = encodeURIComponent(
    `Hi Ezekiel,\n\nI would like to apply for the Threadspark Design Partner Program.\n\n` +
      `• Name: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Genre: ${formData.genre}\n` +
      `• Series Scale: ${formData.bookCount}\n` +
      `• Word Count: ${formData.wordCount}\n` +
      `• Current Continuity Method: ${formData.currentTools || "None / Memory"}\n` +
      `• Willing to give weekly feedback: ${formData.feedbackCommitment ? "Yes" : "No"}\n\n` +
      `Looking forward to testing our manuscript in the continuity pipeline!`
  );

  const mailtoLink = `mailto:${SITE_CONFIG.contactEmail}?subject=${mailSubject}&body=${mailBody}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      setErrorMessage("Please review and agree to the Terms of Service and Privacy Policy to apply.");
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      // Honeypot trap check
      if (formData.hpWebsite) {
        setIsSubmitting(false);
        setStatus("success");
        return;
      }

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Request failed with status ${res.status}`);
      }
    } catch (err) {
      console.warn("Application API request failed, falling back to direct email option:", err);
      setErrorMessage(
        "Direct API intake is currently unavailable. You can send your application directly via email or copy the details below."
      );
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyDetails = () => {
    const details =
      `Threadspark Design Partner Application\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Genre: ${formData.genre}\n` +
      `Series Scale: ${formData.bookCount}\n` +
      `Word Count: ${formData.wordCount}\n` +
      `Current Continuity Method: ${formData.currentTools || "None / Memory"}\n` +
      `Weekly Feedback: ${formData.feedbackCommitment ? "Yes" : "No"}`;

    navigator.clipboard.writeText(details);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-brand-charcoal border border-white/10 rounded-3xl shadow-2xl shadow-black/90 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[260px] h-[180px] bg-brand-violet/20 blur-[80px] pointer-events-none rounded-full" />

        {/* Modal Header */}
        <div className="p-6 border-b border-brand-border/80 flex items-center justify-between relative z-10 bg-brand-dark/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-violet to-purple-800 p-[1px] flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4 text-brand-champagne" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium text-white">
                Design Partner Application
              </h3>
              <p className="text-[11px] font-mono text-emerald-400">
                {getCohortLabel()} &bull; {SITE_CONFIG.designPartnerCohort.replyWindow} response
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
        <div className="p-6 relative z-10 max-h-[85vh] overflow-y-auto">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-medium">
                Application Received
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your design partner application for your <strong className="text-brand-champagne">{formData.genre}</strong> project has been submitted directly to Ezekiel Heretta.
              </p>
              <div className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border text-xs text-slate-300 space-y-1 max-w-sm mx-auto text-left font-mono">
                <div>Scale: <span className="text-white">{formData.bookCount}</span></div>
                <div>Word count: <span className="text-white">{formData.wordCount}</span></div>
                <div>Response SLA: <span className="text-emerald-400">Within {SITE_CONFIG.designPartnerCohort.replyWindow}</span></div>
              </div>
              <p className="text-xs text-slate-400">
                Direct questions or manuscript samples can also be emailed to{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-brand-champagne underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
                .
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-brand-surface hover:bg-white/10 border border-brand-border text-xs font-mono text-white transition-all"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Bot Honeypot Input (hidden from human users) */}
              <input
                type="text"
                name="hpWebsite"
                value={formData.hpWebsite}
                onChange={(e) => setFormData({ ...formData, hpWebsite: e.target.value })}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-border space-y-1">
                <div className="text-xs font-semibold text-white">
                  {getCohortStatusBadge()}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Apply below and Ezekiel will reply within {SITE_CONFIG.designPartnerCohort.replyWindow}. The cohort is 100% free with concierge setup by the founder.
                </p>
              </div>

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage || "Submission note"}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={mailtoLink}
                      className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 font-mono text-[11px] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyDetails}
                      className="px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-white/10 text-slate-200 border border-white/10 font-mono text-[11px] inline-flex items-center gap-1.5 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "Copied!" : "Copy Details"}</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Your Name / Pen Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robin Hobb"
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="author@series.com"
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Primary Genre
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="Epic Fantasy">Epic / High Fantasy</option>
                    <option value="Sci-Fi / Space Opera">Sci-Fi / Space Opera</option>
                    <option value="Urban Fantasy / Paranormal">Urban Fantasy</option>
                    <option value="Crime / Mystery / Thriller">Crime / Mystery</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Romantasy / Romance Series">Romantasy</option>
                    <option value="Other">Other Speculative</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Series Scale
                  </label>
                  <select
                    value={formData.bookCount}
                    onChange={(e) => setFormData({ ...formData, bookCount: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="Standalone (40k-100k words)">Standalone (1 Book)</option>
                    <option value="2-3 Books (Duology / Trilogy)">2-3 Books (Trilogy)</option>
                    <option value="4-6 Books">4-6 Books</option>
                    <option value="7+ Books (Expansive Universe)">7+ Books (Universe)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Manuscript Words
                  </label>
                  <select
                    value={formData.wordCount}
                    onChange={(e) => setFormData({ ...formData, wordCount: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="<50k words">&lt;50k words</option>
                    <option value="50k - 100k words">50k – 100k words</option>
                    <option value="100k - 250k words">100k – 250k words</option>
                    <option value="250k - 500k words">250k – 500k words</option>
                    <option value="500k+ words">500k+ words</option>
                    <option value="Not sure / In development">Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">
                  How do you track continuity &amp; character facts today?
                </label>
                <input
                  type="text"
                  value={formData.currentTools}
                  onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                  placeholder="e.g. Scrivener notes, Notion bible, Obsidian graph, or memory"
                  className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                />
              </div>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="feedbackCommitment"
                    checked={formData.feedbackCommitment}
                    onChange={(e) =>
                      setFormData({ ...formData, feedbackCommitment: e.target.checked })
                    }
                    className="mt-0.5 rounded border-brand-border bg-brand-dark text-brand-violet focus:ring-brand-violet"
                  />
                  <label htmlFor="feedbackCommitment" className="text-xs text-slate-300 leading-snug">
                    I am willing to test Threadspark on 1 manuscript and provide honest feedback to the founder over 4&ndash;6 weeks.
                  </label>
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="agreedToTerms"
                    required
                    checked={formData.agreedToTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreedToTerms: e.target.checked })
                    }
                    className="mt-0.5 rounded border-brand-border bg-brand-dark text-brand-violet focus:ring-brand-violet"
                  />
                  <label htmlFor="agreedToTerms" className="text-xs text-slate-300 leading-snug">
                    I have read and agree to the{" "}
                    <Link href="/terms" target="_blank" className="text-brand-champagne underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" target="_blank" className="text-brand-champagne underline">
                      Privacy Policy
                    </Link>
                    . <span className="text-red-400">*</span>
                  </label>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Private to You
                </span>
                <span>Never trained on public models</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.agreedToTerms}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Design Partner Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
