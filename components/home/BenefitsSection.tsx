"use client";

import React from "react";
import { Shield, Leaf, Award, Truck } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";

const icons = [Leaf, Shield, Award, Truck];

export default function BenefitsSection() {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={cn("text-center mb-14", isRtl ? "font-arabic" : "")}>
          <span className="inline-block bg-primary-50 text-primary-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            {lang === "ar" ? "مزايانا" : "Nos Avantages"}
          </span>
          <h2 className={cn("text-3xl sm:text-4xl font-bold text-primary-800 mb-4", isRtl ? "font-arabic" : "font-serif")}>
            {tx.benefits.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            {tx.benefits.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tx.benefits.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className={cn(
                  "group relative p-6 rounded-2xl border border-border/50",
                  "bg-gradient-to-br from-cream-200 to-cream-100",
                  "hover:shadow-card-hover hover:border-primary-200 transition-all duration-300",
                  isRtl ? "text-right" : "text-left"
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl mb-4 flex items-center justify-center",
                    "bg-green-gradient shadow-green group-hover:scale-110 transition-transform duration-300",
                    isRtl ? "mr-0 ml-auto" : ""
                  )}
                >
                  <Icon className="w-6 h-6 text-honey-300" />
                </div>
                <h3 className={cn("font-semibold text-primary-800 mb-2 text-base", isRtl ? "font-arabic" : "")}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
