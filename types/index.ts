export type Language = "ar" | "fr";

export type ProductCategory = "honey" | "oils" | "supplements";

export interface ProductTranslation {
  name: string;
  description: string;
  shortDescription: string;
  benefits: string[];
  usage: string;
  origin: string;
  nutritionalInfo?: string;
}

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  price: number;
  comparePrice?: number;
  weight: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  images: string[];
  badge?: "bestseller" | "new" | "organic" | "premium";
  translations: {
    ar: ProductTranslation;
    fr: ProductTranslation;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  avatar?: string;
  translations: {
    ar: { text: string };
    fr: { text: string };
  };
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
}
