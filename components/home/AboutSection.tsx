"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Users, Heart, Award, MapPin } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { AlMawlidLogo } from "@/components/ui/AlMawlidLogo";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  const values = [
    { icon: Leaf,   label: lang === "ar" ? "منتجات طبيعية 100%" : "100% Produits naturels" },
    { icon: Users,  label: lang === "ar" ? "تعاونية نسائية" : "Coopérative féminine" },
    { icon: Heart,  label: lang === "ar" ? "شغف بالجودة" : "Passion qualité" },
    { icon: Award,  label: lang === "ar" ? "جودة معتمدة" : "Qualité certifiée" },
  ];

  return (
    <section id="about" className="py-20 bg-cream-200">
      <div className="container mx-auto px-4">
        <div className={cn("grid lg:grid-cols-2 gap-12 items-center", isRtl ? "lg:grid-flow-col-dense" : "")}>
          {/* Image side */}
          <div className={cn("relative", isRtl ? "lg:col-start-2" : "")}>
            <div className="relative h-80 sm:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&w=800&q=80"
                alt={lang === "ar" ? "زيت أركان — تعاونية المولد، أولاد تايمة" : "Huile d'argan — Coopérative Al Mawlid, Ouled Taima"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              {/* Location badge */}
              <div className={cn(
                "absolute top-4 bg-brand-dark/80 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-1.5",
                isRtl ? "right-4" : "left-4"
              )}>
                <MapPin className="w-3.5 h-3.5 text-honey-400" />
                <span className="text-xs text-cream-200 font-arabic">
                  {lang === "ar" ? "أولاد تايمة، المغرب" : "Ouled Taima, Maroc"}
                </span>
              </div>
            </div>
            {/* Floating brand card */}
            <div className={cn(
              "absolute bottom-6 bg-white rounded-xl p-4 shadow-card-hover flex items-center gap-3",
              isRtl ? "left-6" : "right-6"
            )}>
              <div className="rounded-full overflow-hidden ring-2 ring-honey-400/40 flex-shrink-0">
                <AlMawlidLogo size={42} />
              </div>
              <div>
                <p className="text-sm font-bold text-earth-700 font-arabic">تعاونية المولد</p>
                <p className="text-xs text-honey-600">
                  {lang === "ar" ? "+15 سنة خبرة" : "+15 ans d'expérience"}
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className={cn("space-y-6", isRtl ? "text-right lg:col-start-1" : "text-left")}>
            <div>
              <span className="inline-block bg-honey-100 text-honey-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                {tx.about.badge}
              </span>
              <h2 className={cn("text-3xl sm:text-4xl font-bold text-primary-800 mb-4", isRtl ? "font-arabic" : "font-serif")}>
                {tx.about.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {tx.about.description}
              </p>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {values.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl bg-white border border-border/50",
                    isRtl ? "flex-row-reverse" : ""
                  )}
                >
                  <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary-600 w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-primary-700">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
