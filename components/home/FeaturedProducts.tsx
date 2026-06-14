"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";
import { cn } from "@/lib/utils";

export default function FeaturedProducts() {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 bg-cream-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={cn("flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12", isRtl ? "sm:flex-row-reverse text-right" : "text-left")}>
          <div>
            <span className="inline-block bg-honey-100 text-honey-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              {lang === "ar" ? "منتجاتنا" : "Nos Produits"}
            </span>
            <h2 className={cn("text-3xl sm:text-4xl font-bold text-earth-800 mb-3", isRtl ? "font-arabic" : "font-serif")}>
              {tx.products.featured}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {tx.products.featuredSubtitle}
            </p>
          </div>
          <Button variant="outline" size="default" asChild className="flex-shrink-0 gap-2 border-primary-300 text-primary-600 hover:bg-primary-500 hover:text-white">
            <Link href="/products" className={cn("flex items-center gap-2", isRtl ? "flex-row-reverse" : "")}>
              {tx.products.viewAll}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="honey" size="lg" asChild className="shadow-honey">
            <Link href="/products" className={cn("flex items-center gap-2", isRtl ? "flex-row-reverse" : "")}>
              {tx.products.viewAll}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
