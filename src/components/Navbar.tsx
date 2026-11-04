"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Search, Building2, Layers, Compass, Info, Command } from "lucide-react";
import { sound } from "@/lib/sound";
import { CommandPalette } from "@/components/CommandPalette";
import { InvestorModal } from "@/components/InvestorModal";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investorModalOpen, setInvestorModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Platform", href: "/platform", icon: Layers },
    { name: "Use Cases", href: "/use-cases", icon: Compass },
    { name: "About", href: "/about", icon: Info },
  ];

  const triggerCommandPalette = () => {
    sound.tick();
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <>
      <CommandPalette />
      <InvestorModal
        isOpen={investorModalOpen}
        onClose={() => setInvestorModalOpen(false)}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-brand-void/85 backdrop-blur-xl border-b border-brand-border/60 py-3.5 shadow-2xl shadow-black/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => sound.tick()}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-purple-900/60 p-[1px] shadow-lg shadow-brand-violet/20 group-hover:shadow-brand-violet/40 transition-all duration-300">
              <div className="w-full h-full bg-brand-void/90 rounded-[7px] flex items-center justify-center">
                <span className="font-serif text-lg font-bold text-brand-champagne group-hover:text-white transition-colors">
                  T
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium tracking-widest text-slate-100 group-hover:text-brand-champagne transition-colors">
                THREADSPARK
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono -mt-1 hidden sm:block">
                Personal Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/5 bg-brand-dark/40 shadow-inner">
            <Link
              href="/"
              onClick={() => sound.tick()}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                pathname === "/"
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Overview
            </Link>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => sound.tick()}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? "bg-white/10 text-white shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Controls: Command Palette Search & Studio CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* QuickSearch trigger button */}
            <button
              onClick={triggerCommandPalette}
              title="Quick Search & Navigation (⌘K)"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-surface/60 hover:bg-brand-surface border border-brand-border text-xs font-mono text-slate-400 hover:text-white transition-all shadow-sm"
            >
              <Search className="w-3.5 h-3.5 text-brand-lavender" />
              <span className="hidden lg:inline text-[11px]">QuickJump</span>
              <kbd className="text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.2 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            {/* Investor Inquiry Link */}
            <button
              onClick={() => {
                sound.tick();
                setInvestorModalOpen(true);
              }}
              className="text-xs font-mono text-slate-400 hover:text-brand-champagne transition-colors px-2 py-1 flex items-center gap-1"
            >
              <Building2 className="w-3.5 h-3.5 text-brand-champagne" />
              <span className="hidden xl:inline">Investor Briefing</span>
            </button>

            {/* Launch Studio */}
            <Link
              href="/studio"
              onClick={() => sound.tick()}
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-brand-violet/20 to-purple-600/30 hover:from-brand-violet hover:to-purple-600 text-brand-lavender hover:text-white border border-brand-violet/30 hover:border-brand-violet transition-all duration-300 shadow-lg shadow-brand-violet/10 hover:shadow-brand-violet/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-lavender group-hover:text-white group-hover:rotate-12 transition-transform duration-300" />
              <span>Enter Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle & Search */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={triggerCommandPalette}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                sound.tick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel mt-3 mx-4 p-5 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                onClick={() => {
                  sound.tick();
                  setMobileMenuOpen(false);
                }}
                className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === "/" ? "bg-white/10 text-brand-champagne" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                Overview
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    sound.tick();
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href ? "bg-white/10 text-brand-champagne" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-4 h-4 text-brand-violet" />
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  sound.tick();
                  setMobileMenuOpen(false);
                  setInvestorModalOpen(true);
                }}
                className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5 text-left transition-colors"
              >
                <Building2 className="w-4 h-4 text-brand-champagne" />
                <span>Investor &amp; Institutional Inquiry</span>
              </button>

              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/studio"
                  onClick={() => {
                    sound.tick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-brand-violet text-white shadow-lg shadow-brand-violet/25"
                >
                  <Sparkles className="w-4 h-4" />
                  Enter Threadspark Studio
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
