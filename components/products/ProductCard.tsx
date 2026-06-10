"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const badgeVariantMap: Record<string, "premium" | "bestseller" | "new" | "organic"> = {
  premium: "premium",
  bestseller: "bestseller",
  new: "new",
  organic: "organic",
};

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCartStore();
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  const name = product.translations[lang].name;
  const shortDesc = product.translations[lang].shortDescription;
  const discount = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  return (
    <div
      className={cn(
        "product-card group relative bg-white rounded-2xl border border-border/50",
        "shadow-card hover:shadow-card-hover transition-all duration-300",
        "flex flex-col overflow-hidden",
        className
      )}
    >
      {/* Image Container */}
      <Link href={`/products/${product.slug}`} className="relative h-52 overflow-hidden bg-cream-300 block">
        <Image
          src={product.images[0]}
          alt={name}
          fill
          className="product-image object-cover transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className={cn("absolute top-3 flex flex-col gap-1", isRtl ? "right-3" : "left-3")}>
          {product.badge && (
            <Badge variant={badgeVariantMap[product.badge] || "default"}>
              {tx.products.badge[product.badge as keyof typeof tx.products.badge]}
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="honey">-{discount}%</Badge>
          )}
        </div>

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-earth-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
              {tx.products.outOfStock}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className={cn("flex flex-col flex-1 p-4", isRtl ? "text-right" : "text-left")}>
        {/* Category */}
        <span className="text-xs text-primary-500 font-medium uppercase tracking-wide mb-1">
          {tx.categories[product.category]}
        </span>

        {/* Name */}
        <Link href={`/products/${product.slug}`}>
          <h3 className={cn(
            "font-semibold text-primary-800 text-base mb-1.5 line-clamp-2 hover:text-primary-600 transition-colors",
            isRtl ? "font-arabic" : ""
          )}>
            {name}
          </h3>
        </Link>

        {/* Short description */}
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed flex-1">
          {shortDesc}
        </p>

        {/* Rating */}
        <div className={cn("flex items-center gap-1.5 mb-3", isRtl ? "flex-row-reverse justify-end" : "")}>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3.5 h-3.5",
                  i < Math.floor(product.rating)
                    ? "fill-honey-400 text-honey-400"
                    : "text-gray-200"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount} {tx.products.reviews})
          </span>
        </div>

        {/* Price + weight */}
        <div className={cn("flex items-end justify-between mb-3", isRtl ? "flex-row-reverse" : "")}>
          <div>
            <span className="text-lg font-bold text-honey-600">
              {formatPrice(product.price)}
            </span>
            {product.comparePrice && (
              <span className="text-xs text-muted-foreground line-through ml-1.5">
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
          <span className="text-xs text-earth-500 bg-cream-300 px-2 py-0.5 rounded-full">
            {product.weight}
          </span>
        </div>

        {/* Add to cart */}
        <Button
          variant="default"
          size="sm"
          className="w-full gap-2 group-hover:bg-primary-600 transition-colors"
          disabled={!product.inStock}
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="w-4 h-4" />
          {product.inStock ? tx.products.addToCart : tx.products.outOfStock}
        </Button>
      </div>
    </div>
  );
}
