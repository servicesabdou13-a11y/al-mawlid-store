"use client";

import React from "react";
import { Filter } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/types";

const categories: Array<"all" | ProductCategory> = ["all", "honey", "oils", "supplements"];

interface ProductFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProductFilters({ activeCategory, onCategoryChange }: ProductFiltersProps) {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  return (
    <div className={cn("flex flex-wrap items-center gap-2", isRtl ? "flex-row-reverse" : "")}>
      <span className={cn("flex items-center gap-1.5 text-sm text-muted-foreground mr-2", isRtl ? "flex-row-reverse mr-0 ml-2" : "")}>
        <Filter className="w-4 h-4" />
        {lang === "ar" ? "فلتر:" : "Filtrer:"}
      </span>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            activeCategory === cat
              ? "bg-primary-500 text-cream-200 shadow-green"
              : "bg-white border border-border text-primary-600 hover:border-primary-400 hover:text-primary-500"
          )}
        >
          {tx.categories[cat as keyof typeof tx.categories]}
        </button>
      ))}
    </div>
  );
}
