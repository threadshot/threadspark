"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Layers, Compass, Info } from "lucide-react";
import { BetaApplicationModal } from "@/components/BetaApplicationModal";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [betaModalOpen, setBetaModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "How It Works", href: "/platform", icon: Layers },
    { name: "Use Cases", href: "/use-cases", icon: Compass },
    { name: "About & Founder", href: "/about", icon: Info },
  ];

  return (
    <>
      <BetaApplicationModal
        isOpen={betaModalOpen}
        onClose={() => setBetaModalOpen(false)}
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
          <Link href="/" className="flex items-center gap-3 group">
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
                Source of Truth for Fiction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/5 bg-brand-dark/40 shadow-inner">
            <Link
              href="/"
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

          {/* Right Controls: Studio Demo & Join Beta CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/studio"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-champagne" />
              <span>Explore Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Link>

            <button
              onClick={() => setBetaModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-brand-violet hover:bg-purple-600 text-white shadow-lg shadow-brand-violet/25 hover:shadow-brand-violet/40 transition-all"
            >
              <span>Design Partner Program</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setBetaModalOpen(true)}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet text-white"
            >
              Design Partners
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                onClick={() => setMobileMenuOpen(false)}
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
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-colors ${
                    pathname === link.href ? "bg-white/10 text-brand-champagne" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <link.icon className="w-4 h-4 text-brand-violet" />
                  {link.name}
                </Link>
              ))}

              <Link
                href="/studio"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 p-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/5"
              >
                <Sparkles className="w-4 h-4 text-brand-champagne" />
                <span>Interactive Studio Demo</span>
              </Link>

              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setBetaModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-brand-violet text-white shadow-lg shadow-brand-violet/25"
                >
                  Join Design Partner Program
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
