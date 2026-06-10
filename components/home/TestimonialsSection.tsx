"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { testimonials } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden honeycomb-bg">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-honey-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={cn("text-center mb-14", isRtl ? "font-arabic" : "")}>
          <span className="inline-block bg-honey-500/20 text-honey-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-honey-500/30">
            {lang === "ar" ? "شهادات العملاء" : "Témoignages"}
          </span>
          <h2 className={cn("text-3xl sm:text-4xl font-bold text-cream-200 mb-4", isRtl ? "font-arabic" : "font-serif")}>
            {tx.testimonials.title}
          </h2>
          <p className="text-cream-400 max-w-xl mx-auto">
            {tx.testimonials.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className={cn(
                "relative p-6 rounded-2xl bg-primary-800/60 border border-primary-700/50",
                "backdrop-blur-sm hover:bg-primary-800/80 transition-all duration-300",
                "hover:shadow-xl hover:shadow-primary-900/50",
                isRtl ? "text-right" : "text-left"
              )}
            >
              {/* Quote icon */}
              <div className={cn("absolute top-4", isRtl ? "left-4" : "right-4")}>
                <Quote className="w-8 h-8 text-honey-500/30" />
              </div>

              {/* Stars */}
              <div className={cn("flex gap-0.5 mb-4", isRtl ? "flex-row-reverse" : "")}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-honey-400 text-honey-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-cream-300 text-sm leading-relaxed mb-5 italic">
                &ldquo;{testimonial.translations[lang].text}&rdquo;
              </p>

              {/* Author */}
              <div className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse" : "")}>
                <div className="w-10 h-10 bg-honey-gradient rounded-full flex items-center justify-center text-primary-800 font-bold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-cream-200 font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-cream-500 text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
