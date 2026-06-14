"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Globe } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogoImage } from "@/components/ui/LogoImage";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useLanguageStore();
  const { getItemCount, toggleCart } = useCartStore();
  const tx = t(lang);
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: tx.nav.home },
    { href: "/products", label: tx.nav.products },
    { href: "#about", label: tx.nav.about },
    { href: "#contact", label: tx.nav.contact },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-white/96 backdrop-blur-md shadow-md border-b border-earth-100"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 h-[68px] flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
          {/* SVG brand logo — matches actual ALMAWLID circle logo */}
          <div
            className={cn(
              "rounded-full overflow-hidden transition-all duration-300",
              "group-hover:scale-105",
              isScrolled ? "" : "ring-2 ring-honey-400/30"
            )}
          >
            <LogoImage size={44} />
          </div>
          {/* Brand text name */}
          <div
            className={cn(
              "hidden sm:flex flex-col leading-tight",
              lang === "ar" ? "items-end" : "items-start"
            )}
          >
            <span
              className={cn(
                "font-bold text-sm font-arabic transition-colors",
                isScrolled ? "text-earth-700" : "text-cream-200"
              )}
              style={{ fontFamily: "var(--font-arabic)" }}
            >
              تعاونية المولد
            </span>
            <span
              className={cn(
                "text-[9px] tracking-[0.2em] uppercase font-sans transition-colors",
                isScrolled ? "text-honey-600" : "text-honey-300"
              )}
            >
              Cooperative
            </span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ─────────────────────────────── */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isScrolled
                  ? "text-earth-700 hover:text-primary-500 hover:bg-primary-50"
                  : "text-cream-200 hover:text-honey-300 hover:bg-white/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Actions ───────────────────────────────────────── */}
        <div className="flex items-center gap-1.5">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "ar" ? "fr" : "ar")}
            className={cn(
              "flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all",
              isScrolled
                ? "text-primary-600 hover:bg-primary-50 border border-primary-200"
                : "text-cream-200 hover:bg-white/10 border border-white/20"
            )}
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{tx.nav.language}</span>
          </button>

          {/* Cart */}
          <button
            onClick={toggleCart}
            className={cn(
              "relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all",
              isScrolled
                ? "text-earth-700 hover:bg-primary-50 hover:text-primary-600"
                : "text-cream-200 hover:bg-white/10"
            )}
            aria-label="Shopping cart"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline">{tx.nav.cart}</span>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-honey-400 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-honey">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-earth-700 hover:bg-primary-50"
                : "text-cream-200 hover:bg-white/10"
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-border shadow-lg animate-fade-in">
          {/* Logo row in mobile menu */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-earth-100">
            <LogoImage size={36} />
            <div>
              <p className="text-sm font-bold text-earth-700 font-arabic">تعاونية المولد</p>
              <p className="text-[10px] text-honey-600 tracking-widest uppercase">Cooperative Almawlid</p>
            </div>
          </div>
          <div className="container mx-auto px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-4 py-3 rounded-xl text-earth-700 hover:bg-primary-50 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setLang(lang === "ar" ? "fr" : "ar");
                  setIsMenuOpen(false);
                }}
                className="w-full justify-center gap-2 border-primary-300 text-primary-600"
              >
                <Globe className="w-4 h-4" />
                {tx.nav.language}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
