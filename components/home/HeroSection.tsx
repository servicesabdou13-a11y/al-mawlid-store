"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Shield, Leaf, Star } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const stats = [
    { value: tx.hero.stat1Value, label: tx.hero.stat1 },
    { value: tx.hero.stat2Value, label: tx.hero.stat2 },
    { value: tx.hero.stat3Value, label: tx.hero.stat3 },
  ];

  const trustBadges = [
    { icon: Shield, text: lang === "ar" ? "جودة مضمونة" : "Qualité garantie" },
    { icon: Leaf, text: lang === "ar" ? "عضوي 100%" : "100% Bio" },
    { icon: Star, text: lang === "ar" ? "تقييم ⭐ 4.9" : "Note ⭐ 4.9" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient honeycomb-bg">
      {/* Background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-honey-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div
          className={cn(
            "max-w-3xl",
            isRtl ? "mr-auto text-right" : "ml-0 text-left"
          )}
        >
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 bg-honey-500/20 border border-honey-400/30 rounded-full px-4 py-1.5 mb-6",
              "text-honey-300 text-sm font-medium",
              "animate-fade-in"
            )}
          >
            <Leaf className="w-3.5 h-3.5" />
            {tx.hero.badge}
          </div>

          {/* Headline */}
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-200 leading-tight mb-2",
              "animate-slide-up",
              isRtl ? "font-arabic" : "font-serif"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            {tx.hero.title}
          </h1>
          <h1
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6",
              "gradient-text",
              "animate-slide-up",
              isRtl ? "font-arabic" : "font-serif"
            )}
            style={{ animationDelay: "0.2s" }}
          >
            {tx.hero.titleAccent}
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-lg sm:text-xl text-cream-300 leading-relaxed mb-10 max-w-2xl",
              "animate-slide-up",
              isRtl ? "font-arabic" : ""
            )}
            style={{ animationDelay: "0.3s" }}
          >
            {tx.hero.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex gap-4 flex-wrap mb-14",
              "animate-slide-up",
              isRtl ? "flex-row-reverse" : ""
            )}
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="honey"
              size="xl"
              className="shadow-honey group"
              asChild
            >
              <Link href="/products" className={cn("flex items-center gap-2", isRtl ? "flex-row-reverse" : "")}>
                {tx.hero.cta}
                <ArrowIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-cream-300/40 text-cream-200 hover:bg-white/10 hover:text-cream-100"
              asChild
            >
              <Link href="#about">{tx.hero.ctaSecondary}</Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className={cn(
              "flex flex-wrap gap-3 mb-12",
              "animate-slide-up",
              isRtl ? "flex-row-reverse" : ""
            )}
            style={{ animationDelay: "0.5s" }}
          >
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5"
              >
                <Icon className="w-3.5 h-3.5 text-honey-300" />
                <span className="text-xs text-cream-200 font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className={cn(
              "grid grid-cols-3 gap-6 border-t border-white/10 pt-10 max-w-lg",
              "animate-slide-up",
              isRtl ? "text-right" : "text-left"
            )}
            style={{ animationDelay: "0.6s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold text-honey-400">{stat.value}</p>
                <p className="text-xs text-cream-400 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 C360,80 720,0 1440,40 L1440,80 L0,80 Z"
            fill="#FBF0D0"
          />
        </svg>
      </div>
    </section>
  );
}
