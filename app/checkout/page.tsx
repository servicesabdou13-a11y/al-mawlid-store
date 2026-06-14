"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, MessageCircle, Truck, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatPrice, getWhatsAppCheckoutUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { OrderFormData } from "@/types";

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore();
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";
  const ArrowBack = isRtl ? ArrowRight : ArrowLeft;
  const total = getTotal();

  const [form, setForm] = useState<OrderFormData>({
    fullName: "",
    phone: "",
    city: "",
    address: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappItems = items.map((i) => ({
    name: i.product.translations[lang].name,
    qty: i.quantity,
    price: i.product.price,
  }));
  const whatsappUrl = getWhatsAppCheckoutUrl(whatsappItems, total, lang);

  const handleWhatsAppOrder = () => {
    window.open(whatsappUrl, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream-200 pt-20 flex items-center justify-center">
        <div className={cn("text-center space-y-4", isRtl ? "font-arabic" : "")}>
          <div className="w-20 h-20 bg-cream-300 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-10 h-10 text-earth-400" />
          </div>
          <p className="text-xl font-semibold text-primary-700">{tx.cart.empty}</p>
          <Button asChild variant="honey">
            <Link href="/products">{tx.cart.continueShopping}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-200 pt-20">
      {/* Header */}
      <div className="bg-green-gradient py-12">
        <div className={cn("container mx-auto px-4", isRtl ? "text-right" : "text-left")}>
          <h1 className={cn("text-3xl sm:text-4xl font-bold text-cream-200 mb-2", isRtl ? "font-arabic" : "font-serif")}>
            {tx.checkout.title}
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <Link
          href="/products"
          className={cn("inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-500 mb-6 transition-colors", isRtl ? "flex-row-reverse" : "")}
        >
          <ArrowBack className="w-4 h-4" />
          {tx.cart.continueShopping}
        </Link>

        <div className={cn("grid lg:grid-cols-3 gap-8", isRtl ? "" : "")}>
          {/* Left: Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <div className={cn("bg-white rounded-2xl p-6 border border-border/50", isRtl ? "text-right" : "text-left")}>
              <h2 className={cn("text-lg font-semibold text-earth-800 mb-6 flex items-center gap-2", isRtl ? "flex-row-reverse justify-end" : "")}>
                <CheckCircle className="w-5 h-5 text-primary-500" />
                {tx.checkout.contactInfo}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName">{tx.checkout.fullName} *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder={lang === "ar" ? "أدخل اسمك الكامل" : "Votre nom complet"}
                    dir={isRtl ? "rtl" : "ltr"}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">{tx.checkout.phone} *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="06 XX XX XX XX"
                    dir="ltr"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city">{tx.checkout.city} *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder={lang === "ar" ? "مدينتك" : "Votre ville"}
                    dir={isRtl ? "rtl" : "ltr"}
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="address">{tx.checkout.address} *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder={lang === "ar" ? "الحي، الشارع، رقم المنزل..." : "Quartier, rue, numéro..."}
                    dir={isRtl ? "rtl" : "ltr"}
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="notes">{tx.checkout.notes}</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder={tx.checkout.notesPlaceholder}
                    rows={3}
                    dir={isRtl ? "rtl" : "ltr"}
                  />
                </div>
              </div>
            </div>

            {/* Payment method: COD */}
            <div className={cn("bg-white rounded-2xl p-6 border border-border/50", isRtl ? "text-right" : "text-left")}>
              <h2 className={cn("text-lg font-semibold text-earth-800 mb-4 flex items-center gap-2", isRtl ? "flex-row-reverse justify-end" : "")}>
                <Truck className="w-5 h-5 text-honey-500" />
                {tx.checkout.codTitle}
              </h2>
              <div className="flex items-start gap-3 p-4 bg-honey-50 border border-honey-200 rounded-xl">
                <div className="w-10 h-10 bg-honey-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Truck className="w-5 h-5 text-honey-600" />
                </div>
                <p className="text-sm text-honey-800 leading-relaxed">{tx.checkout.codDescription}</p>
              </div>
            </div>

            {/* WhatsApp Order CTA */}
            <div className={cn("bg-primary-800 rounded-2xl p-6 text-cream-200", isRtl ? "text-right" : "text-left")}>
              <div className={cn("flex items-start gap-4 mb-5", isRtl ? "flex-row-reverse" : "")}>
                <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-cream-100 text-base mb-1">{tx.checkout.whatsappOrder}</h3>
                  <p className="text-sm text-cream-400">{tx.checkout.whatsappDescription}</p>
                </div>
              </div>
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full gap-2 whatsapp-btn font-semibold"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="w-5 h-5" />
                {tx.checkout.whatsappOrder}
              </Button>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-1">
            <div className={cn("bg-white rounded-2xl p-6 border border-border/50 sticky top-24", isRtl ? "text-right" : "text-left")}>
              <h2 className="text-lg font-semibold text-earth-800 mb-5">{tx.checkout.orderSummary}</h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className={cn("flex gap-3", isRtl ? "flex-row-reverse" : "")}>
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-cream-300 flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.translations[lang].name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-earth-800 truncate">
                        {item.product.translations[lang].name}
                      </p>
                      <p className="text-xs text-muted-foreground">× {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-honey-600 flex-shrink-0">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2.5 border-t border-border pt-4">
                <div className={cn("flex justify-between text-sm", isRtl ? "flex-row-reverse" : "")}>
                  <span className="text-muted-foreground">{tx.checkout.subtotal}</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                <div className={cn("flex justify-between text-sm", isRtl ? "flex-row-reverse" : "")}>
                  <span className="text-muted-foreground">{tx.checkout.shipping}</span>
                  <span className="font-medium text-green-600">{tx.checkout.shippingFree}</span>
                </div>
                <div className={cn("flex justify-between text-base font-bold text-earth-800 border-t border-border pt-2.5", isRtl ? "flex-row-reverse" : "")}>
                  <span>{tx.checkout.total}</span>
                  <span className="text-honey-600 text-lg">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Confirm button */}
              <Button
                variant="honey"
                size="lg"
                className="w-full mt-5 shadow-honey font-semibold"
                onClick={handleWhatsAppOrder}
              >
                {tx.checkout.placeOrder}
              </Button>

              {/* Trust signals */}
              <div className="mt-4 space-y-2">
                {[
                  lang === "ar" ? "✅ دفع آمن عند الاستلام" : "✅ Paiement sécurisé à la livraison",
                  lang === "ar" ? "🚚 توصيل لجميع المدن" : "🚚 Livraison partout au Maroc",
                  lang === "ar" ? "🔄 ضمان استرجاع المنتج" : "🔄 Garantie de retour produit",
                ].map((item) => (
                  <p key={item} className="text-xs text-muted-foreground text-center">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
