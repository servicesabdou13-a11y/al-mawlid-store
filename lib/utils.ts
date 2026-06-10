import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Language, Product } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2)} MAD`;
}

export function getProductName(product: Product, lang: Language): string {
  return product.translations[lang].name;
}

export function getProductDescription(product: Product, lang: Language): string {
  return product.translations[lang].description;
}

export function getProductShortDescription(product: Product, lang: Language): string {
  return product.translations[lang].shortDescription;
}

export function getWhatsAppOrderUrl(
  productName: string,
  quantity: number,
  lang: Language
): string {
  const phone = "212605925032";
  const message =
    lang === "ar"
      ? `مرحباً، أريد طلب: ${productName} - الكمية: ${quantity}`
      : `Bonjour, je souhaite commander: ${productName} - Quantité: ${quantity}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppCheckoutUrl(
  items: { name: string; qty: number; price: number }[],
  total: number,
  lang: Language
): string {
  const phone = "212605925032";
  const itemsText = items
    .map((i) =>
      lang === "ar"
        ? `• ${i.name} × ${i.qty} = ${formatPrice(i.price * i.qty)}`
        : `• ${i.name} × ${i.qty} = ${formatPrice(i.price * i.qty)}`
    )
    .join("\n");
  const message =
    lang === "ar"
      ? `🍯 طلب جديد - تعاونية المولد\n\n${itemsText}\n\nالمجموع: ${formatPrice(total)}\n\nأرجو التواصل لتأكيد الطلب.`
      : `🍯 Nouvelle commande - Coopérative Al Mawlid\n\n${itemsText}\n\nTotal: ${formatPrice(total)}\n\nMerci de me contacter pour confirmer la commande.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function generateStars(rating: number): { filled: number; empty: number } {
  return {
    filled: Math.floor(rating),
    empty: 5 - Math.floor(rating),
  };
}
