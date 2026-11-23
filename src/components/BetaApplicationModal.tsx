"use client";

import { useState } from "react";
import { X, CheckCircle2, Sparkles, Send, ShieldCheck, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site";

interface BetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BetaApplicationModal({ isOpen, onClose }: BetaModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    genre: "Epic Fantasy",
    bookCount: "2-3 Books",
    wordCount: "100k - 250k words",
    currentTools: "",
    feedbackCommitment: true,
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Threadspark Design Partner Application: ${formData.name} (${formData.genre})`
    );
    const body = encodeURIComponent(
      `Hi Ezekiel,\n\nI would like to apply for the Threadspark Design Partner Program.\n\n` +
        `• Name: ${formData.name}\n` +
        `• Email: ${formData.email}\n` +
        `• Genre: ${formData.genre}\n` +
        `• Series Size: ${formData.bookCount} (~${formData.wordCount})\n` +
        `• Current Continuity Method: ${formData.currentTools || "None / Memory"}\n` +
        `• Willing to give weekly feedback: ${formData.feedbackCommitment ? "Yes" : "No"}\n\n` +
        `Looking forward to testing our manuscript in the continuity pipeline!`
    );

    // Open mailto link so it dispatches directly to Ezekiel's email
    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setSubmitted(false);
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
                {SITE_CONFIG.designPartnerCohort.spotsTakenText} places taken &bull; {SITE_CONFIG.designPartnerCohort.replyWindow} response
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
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl text-white font-medium">
                Application Prepared
              </h4>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, {formData.name}. Your email client was opened to send your application details directly to Ezekiel Heretta ({SITE_CONFIG.contactEmail}).
              </p>
              <p className="text-xs text-slate-400">
                Ezekiel will reply within {SITE_CONFIG.designPartnerCohort.replyWindow}. If your email client did not open automatically, you can email directly at{" "}
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
              <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-border space-y-1">
                <div className="text-xs font-semibold text-white">
                  {SITE_CONFIG.designPartnerCohort.spotsTakenText} places taken.
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Apply with the form below and Ezekiel will reply within {SITE_CONFIG.designPartnerCohort.replyWindow}. The cohort is 100% free with concierge setup by the founder.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Your Name / Pen Name *
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
                    Your Email *
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Primary Genre
                  </label>
                  <select
                    value={formData.genre}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="Epic Fantasy">Epic / High Fantasy</option>
                    <option value="Sci-Fi / Space Opera">Sci-Fi / Space Opera</option>
                    <option value="Urban Fantasy / Paranormal">Urban Fantasy / Paranormal</option>
                    <option value="Crime / Mystery / Thriller">Crime / Mystery / Thriller</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Romantasy / Romance Series">Romantasy / Romance Series</option>
                    <option value="Other">Other Speculative Fiction</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-mono text-slate-400 block mb-1">
                    Series Scale (Volumes)
                  </label>
                  <select
                    value={formData.bookCount}
                    onChange={(e) => setFormData({ ...formData, bookCount: e.target.value })}
                    className="w-full bg-brand-dark/90 border border-brand-border rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-violet font-sans"
                  >
                    <option value="Standalone (40k-100k words)">Standalone (40k-100k words)</option>
                    <option value="2-3 Books (Duology / Trilogy)">2-3 Books (Duology / Trilogy)</option>
                    <option value="4-6 Books">4-6 Books</option>
                    <option value="7+ Books (Expansive Universe)">7+ Books (Expansive Universe)</option>
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

              <div className="pt-1 flex items-start gap-2">
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

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Private to You
                </span>
                <span>Never trained on public models</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-brand-violet to-purple-600 hover:from-purple-500 hover:to-brand-violet text-white text-xs font-mono font-medium transition-all shadow-xl shadow-brand-violet/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Design Partner Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
