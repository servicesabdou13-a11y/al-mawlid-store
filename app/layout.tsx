import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/layout/CartSidebar";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://al-mawlid-store.netlify.app"),
  title: {
    default: "تعاونية المولد | Coopérative Al Mawlid — زيت أركان وأملو طبيعي من أولاد تايمة",
    template: "%s | تعاونية المولد",
  },
  description:
    "تعاونية المولد — زيت أركان للتجميل والأكل، أملو اللوز والكاواكاو، زيت الخروع والسمسم. منتجات طبيعية 100% من أولاد تايمة، إقليم تيزنيت، المغرب. جودة مضمونة وتوصيل لجميع المدن.",
  keywords: [
    "زيت أركان", "زيت أركان تجميل", "زيت أركان للأكل", "أملو اللوز", "أملو كاواكاو",
    "زيت الخروع", "زيت السمسم", "زنين أركان", "تعاونية المولد", "أولاد تايمة",
    "huile argan maroc", "huile d'argan cosmétique", "amlou amande", "amlou cacahuetes",
    "huile de ricin", "huile de sésame", "coopérative Al Mawlid", "Ouled Taima",
    "produits naturels maroc", "منتجات طبيعية مغربية",
  ],
  authors: [{ name: "Coopérative Al Mawlid" }],
  creator: "Coopérative Al Mawlid",
  publisher: "Coopérative Al Mawlid",
  openGraph: {
    type: "website",
    locale: "ar_MA",
    alternateLocale: ["fr_MA"],
    siteName: "تعاونية المولد | Coopérative Al Mawlid",
    title: "تعاونية المولد — زيت أركان وأملو طبيعي، أولاد تايمة",
    description:
      "زيت أركان للتجميل والأكل، أملو اللوز والكاواكاو وزيوت نباتية طبيعية من تعاونية المولد — أولاد تايمة، المغرب.",
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: "تعاونية المولد" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تعاونية المولد | Coopérative Al Mawlid",
    description: "زيت أركان وأملو طبيعي من أولاد تايمة — المغرب",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "تعاونية المولد — Coopérative Al Mawlid",
    description:
      "تعاونية نسائية متخصصة في زيت الأركان والمنتجات الطبيعية من أولاد تايمة، إقليم تيزنيت، المغرب.",
    url: "https://al-mawlid-store.netlify.app",
    logo: "https://al-mawlid-store.netlify.app/images/logo.png",
    image: "https://al-mawlid-store.netlify.app/images/logo.png",
    telephone: "+212605925032",
    email: "cooperativealmawlid@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "حي الشليوات بلوك C",
      addressLocality: "أولاد تايمة",
      addressRegion: "تيزنيت",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.034,
      longitude: -8.874,
    },
    sameAs: [
      "https://www.instagram.com/cop.al_mawlid",
      "https://www.facebook.com/tawouniytalmwld",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "35 MAD – 750 MAD",
    currenciesAccepted: "MAD",
    paymentAccepted: "Cash on Delivery",
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartSidebar />
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  );
}
