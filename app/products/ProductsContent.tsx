"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { products } from "@/lib/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import { cn } from "@/lib/utils";

export default function ProductsContent() {
  const searchParams = useSearchParams();
  const initCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initCategory);
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-cream-200 pt-20">
      {/* Page Header */}
      <div className="bg-green-gradient py-14">
        <div className={cn("container mx-auto px-4", isRtl ? "text-right" : "text-left")}>
          <h1 className={cn("text-3xl sm:text-4xl font-bold text-cream-200 mb-3", isRtl ? "font-arabic" : "font-serif")}>
            {tx.nav.products}
          </h1>
          <p className="text-cream-400 text-base max-w-lg">
            {tx.products.featuredSubtitle}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Filters */}
        <div className="mb-8">
          <ProductFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Count */}
        <p className={cn("text-sm text-muted-foreground mb-6", isRtl ? "text-right" : "text-left")}>
          {filtered.length} {lang === "ar" ? "منتج" : "produits"}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              {lang === "ar" ? "لا توجد منتجات في هذه الفئة." : "Aucun produit dans cette catégorie."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
