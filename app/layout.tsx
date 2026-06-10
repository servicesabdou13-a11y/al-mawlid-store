import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/layout/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartSidebar from "@/components/layout/CartSidebar";

export const metadata: Metadata = {
  title: {
    default: "تعاونية المولد | Coopérative Al Mawlid - عسل حر وزيوت طبيعية",
    template: "%s | تعاونية المولد",
  },
  description:
    "تعاونية المولد - منتجات النحل الطبيعية والزيوت الأصيلة من المغرب. عسل حر، زيوت طبيعية، حبوب لقاح، غذاء ملكات النحل. جودة مضمونة وتوصيل لجميع المدن المغربية.",
  keywords: [
    "عسل حر", "زيوت طبيعية", "منتجات الخلية", "عسل مغربي",
    "زيت أركان", "زيت الحبة السوداء", "تعاونية المولد",
    "miel naturel maroc", "huile argan", "produits apicoles",
    "gelée royale", "pollen abeilles", "coopérative Al Mawlid",
  ],
  authors: [{ name: "Coopérative Al Mawlid" }],
  creator: "Coopérative Al Mawlid",
  publisher: "Coopérative Al Mawlid",
  openGraph: {
    type: "website",
    locale: "ar_MA",
    alternateLocale: ["fr_MA"],
    siteName: "تعاونية المولد | Coopérative Al Mawlid",
    title: "تعاونية المولد - عسل حر وزيوت طبيعية من المغرب",
    description:
      "منتجات النحل الطبيعية والزيوت الأصيلة من قلب المغرب. جودة، أصالة، ومصداقية.",
  },
  twitter: {
    card: "summary_large_image",
    title: "تعاونية المولد | Coopérative Al Mawlid",
    description: "منتجات النحل والزيوت الطبيعية من المغرب الأصيل",
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
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartSidebar />
        </Providers>
      </body>
    </html>
  );
}
