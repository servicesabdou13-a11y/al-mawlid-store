"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, ShoppingCart, MessageCircle,
  Star, CheckCircle, ChevronRight, Minus, Plus, Package, Leaf
} from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/products/ProductCard";
import { formatPrice, getWhatsAppOrderUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function ProductDetailPage() {
  const { id: slug } = useParams<{ id: string }>();
  const { lang } = useLanguageStore();
  const { addItem } = useCartStore();
  const tx = t(lang);
  const isRtl = lang === "ar";
  const ArrowBack = isRtl ? ArrowRight : ArrowLeft;

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-cream-200">
        <div className="text-center">
          <p className="text-xl text-muted-foreground mb-4">
            {lang === "ar" ? "المنتج غير موجود" : "Produit introuvable"}
          </p>
          <Button asChild variant="default">
            <Link href="/products">{tx.products.backToProducts}</Link>
          </Button>
        </div>
      </div>
    );
  }

  const translation = product.translations[lang];
  const related = getRelatedProducts(product);
  const whatsappUrl = getWhatsAppOrderUrl(translation.name, quantity, lang);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-cream-200 pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", isRtl ? "flex-row-reverse" : "")}>
          <Link href="/" className="hover:text-primary-600 transition-colors">{tx.nav.home}</Link>
          <ChevronRight className={cn("w-3.5 h-3.5", isRtl ? "rotate-180" : "")} />
          <Link href="/products" className="hover:text-primary-600 transition-colors">{tx.nav.products}</Link>
          <ChevronRight className={cn("w-3.5 h-3.5", isRtl ? "rotate-180" : "")} />
          <span className="text-primary-700 font-medium truncate max-w-[180px]">{translation.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        {/* Back link */}
        <Link
          href="/products"
          className={cn(
            "inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-500 mb-6 transition-colors",
            isRtl ? "flex-row-reverse" : ""
          )}
        >
          <ArrowBack className="w-4 h-4" />
          {tx.products.backToProducts}
        </Link>

        {/* Main product section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-80 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden bg-cream-300 shadow-card">
              <Image
                src={imgSrcs[activeImage] ?? product.images[activeImage] ?? product.images[0]}
                alt={translation.name}
                fill
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                onError={() => {
                  const fallback = product.images[1];
                  if (fallback) {
                    setImgSrcs((prev) => {
                      const next = [...prev];
                      next[activeImage] = fallback;
                      return next;
                    });
                  }
                }}
              />
              {product.badge && (
                <div className={cn("absolute top-4", isRtl ? "right-4" : "left-4")}>
                  <Badge variant={product.badge as "premium" | "bestseller" | "new" | "organic"}>
                    {tx.products.badge[product.badge as keyof typeof tx.products.badge]}
                  </Badge>
                </div>
              )}
            </div>

            {/* Thumbnail strip */}
            {product.images.length > 1 && (
              <div className={cn("flex gap-3", isRtl ? "flex-row-reverse" : "")}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
                      activeImage === i
                        ? "border-primary-500 shadow-green"
                        : "border-border hover:border-primary-300"
                    )}
                  >
                    <Image src={img} alt={`view ${i + 1}`} fill className="object-cover" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className={cn("space-y-5", isRtl ? "text-right" : "text-left")}>
            {/* Category + Name */}
            <div>
              <span className="text-sm text-primary-500 font-medium uppercase tracking-wide">
                {tx.categories[product.category]}
              </span>
              <h1 className={cn("text-2xl sm:text-3xl font-bold text-earth-800 mt-1.5 mb-2", isRtl ? "font-arabic" : "font-serif")}>
                {translation.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed text-base">
                {translation.shortDescription}
              </p>
            </div>

            {/* Rating */}
            <div className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse" : "")}>
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.floor(product.rating)
                        ? "fill-honey-400 text-honey-400"
                        : "text-gray-200"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary-700">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount} {tx.products.reviews})</span>
            </div>

            {/* Price */}
            <div className={cn("flex items-end gap-3", isRtl ? "flex-row-reverse" : "")}>
              <span className="text-3xl font-bold text-honey-600">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="text-lg text-muted-foreground line-through pb-0.5">
                  {formatPrice(product.comparePrice)}
                </span>
              )}
            </div>

            {/* Meta: weight + origin */}
            <div className={cn("flex flex-wrap gap-3", isRtl ? "flex-row-reverse" : "")}>
              <div className="flex items-center gap-1.5 bg-white border border-border rounded-lg px-3 py-2">
                <Package className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-primary-700">{product.weight}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white border border-border rounded-lg px-3 py-2">
                <Leaf className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-primary-700">{translation.origin}</span>
              </div>
              <div className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium",
                product.inStock
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              )}>
                <CheckCircle className="w-4 h-4" />
                {product.inStock ? tx.products.inStock : tx.products.outOfStock}
              </div>
            </div>

            {/* Quantity selector */}
            <div className={cn("flex items-center gap-4", isRtl ? "flex-row-reverse" : "")}>
              <span className="text-sm font-medium text-primary-700">{tx.cart.quantity}:</span>
              <div className="flex items-center bg-white border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-primary-50 transition-colors text-primary-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-bold text-primary-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-primary-50 transition-colors text-primary-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm font-bold text-honey-600">
                = {formatPrice(product.price * quantity)}
              </span>
            </div>

            {/* Action buttons */}
            <div className={cn("flex flex-col sm:flex-row gap-3", isRtl ? "sm:flex-row-reverse" : "")}>
              <Button
                variant="default"
                size="lg"
                className="flex-1 gap-2 shadow-green"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5" />
                {tx.products.addToCart}
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                className="flex-1 gap-2 whatsapp-btn"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {tx.products.orderWhatsApp}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Details tabs: description, benefits, usage */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Description */}
          <div className={cn("lg:col-span-1 bg-white rounded-2xl p-6 border border-border/50", isRtl ? "text-right" : "text-left")}>
            <h2 className={cn("text-lg font-semibold text-earth-800 mb-4 flex items-center gap-2", isRtl ? "flex-row-reverse justify-end" : "")}>
              <Leaf className="w-5 h-5 text-primary-500" />
              {lang === "ar" ? "وصف المنتج" : "Description"}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{translation.description}</p>
            {translation.nutritionalInfo && (
              <div className="mt-4 pt-4 border-t border-border/50">
                <h3 className="text-sm font-semibold text-primary-700 mb-2">{tx.products.nutritional}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{translation.nutritionalInfo}</p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className={cn("bg-white rounded-2xl p-6 border border-border/50", isRtl ? "text-right" : "text-left")}>
            <h2 className={cn("text-lg font-semibold text-earth-800 mb-4 flex items-center gap-2", isRtl ? "flex-row-reverse justify-end" : "")}>
              <CheckCircle className="w-5 h-5 text-honey-500" />
              {tx.products.benefits}
            </h2>
            <ul className="space-y-2.5">
              {translation.benefits.map((benefit, i) => (
                <li key={i} className={cn("flex items-start gap-2.5 text-sm text-primary-700", isRtl ? "flex-row-reverse" : "")}>
                  <span className="w-5 h-5 rounded-full bg-honey-100 text-honey-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className={cn("bg-primary-800 rounded-2xl p-6 text-cream-200", isRtl ? "text-right" : "text-left")}>
            <h2 className={cn("text-lg font-semibold mb-4 flex items-center gap-2 text-cream-100", isRtl ? "flex-row-reverse justify-end" : "")}>
              <MessageCircle className="w-5 h-5 text-honey-400" />
              {tx.products.usage}
            </h2>
            <p className="text-sm text-cream-300 leading-relaxed">{translation.usage}</p>

            {/* Quick order CTA */}
            <div className="mt-6 pt-5 border-t border-primary-700">
              <p className="text-xs text-cream-400 mb-3">
                {lang === "ar" ? "هل لديك سؤال عن هذا المنتج؟" : "Vous avez une question sur ce produit ?"}
              </p>
              <Button variant="whatsapp" size="sm" asChild className="w-full gap-2 whatsapp-btn">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {tx.products.orderWhatsApp}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className={cn("text-2xl font-bold text-earth-800 mb-8", isRtl ? "text-right font-arabic" : "font-serif")}>
              {tx.products.relatedProducts}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
