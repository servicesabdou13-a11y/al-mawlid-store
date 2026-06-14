"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";
  const total = getTotal();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 cart-sidebar-overlay"
        onClick={closeCart}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 bottom-0 z-50 w-full max-w-sm bg-cream-200 shadow-2xl flex flex-col",
          "animate-slide-in-right",
          isRtl ? "left-0" : "right-0"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary-500" />
            <h2 className="text-lg font-semibold text-earth-800">{tx.cart.title}</h2>
            {items.length > 0 && (
              <span className="bg-honey-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg hover:bg-primary-50 text-primary-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
              <div className="w-20 h-20 bg-cream-300 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-earth-400" />
              </div>
              <div>
                <p className="font-semibold text-primary-700">{tx.cart.empty}</p>
                <p className="text-sm text-muted-foreground mt-1">{tx.cart.emptySubtitle}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={closeCart}
                asChild
              >
                <Link href="/products">{tx.cart.continueShopping}</Link>
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-border/50">
              {items.map((item) => {
                const name = item.product.translations[lang].name;
                return (
                  <div key={item.product.id} className="flex gap-3 p-4 hover:bg-white/50 transition-colors">
                    {/* Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-cream-300">
                      <Image
                        src={item.product.images[0]}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-earth-800 truncate">{name}</p>
                      <p className="text-xs text-earth-500 mt-0.5">{item.product.weight}</p>
                      <p className="text-sm font-bold text-honey-600 mt-1">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-earth-400 hover:text-red-500 transition-colors"
                        aria-label={tx.cart.remove}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <div className="flex items-center gap-1 bg-white border border-border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-primary-50 rounded-l-lg transition-colors text-primary-600"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-primary-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-primary-50 rounded-r-lg transition-colors text-primary-600"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border bg-white p-5 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-primary-700">{tx.cart.total}</span>
              <span className="text-xl font-bold text-honey-600">{formatPrice(total)}</span>
            </div>
            <Button
              variant="honey"
              size="lg"
              className="w-full font-semibold"
              asChild
              onClick={closeCart}
            >
              <Link href="/checkout">{tx.cart.checkout}</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-primary-500"
              onClick={closeCart}
              asChild
            >
              <Link href="/products">{tx.cart.continueShopping}</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
