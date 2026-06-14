"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguageStore } from "@/lib/store/languageStore";
import { t } from "@/lib/i18n/translations";
import { LogoImage } from "@/components/ui/LogoImage";
import { cn } from "@/lib/utils";

// WhatsApp SVG inline
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("fill-current", className)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const { lang } = useLanguageStore();
  const tx = t(lang);
  const isRtl = lang === "ar";

  const productLinks = [
    { href: "/products?category=honey",       label: tx.footer.honey },
    { href: "/products?category=oils",        label: tx.footer.oils },
    { href: "/products?category=supplements", label: tx.footer.supplements },
  ];
  const quickLinks = [
    { href: "/",          label: tx.nav.home },
    { href: "/products",  label: tx.nav.products },
    { href: "#about",     label: tx.nav.about },
    { href: "#contact",   label: tx.nav.contact },
  ];

  return (
    <footer className="bg-brand-dark text-cream-200">

      {/* ── Ornament top border ──────────────────────────── */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-honey-500/50 to-transparent" />

      {/* ── Main content ────────────────────────────────── */}
      <div className="container mx-auto px-4 py-16">
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10", isRtl ? "text-right" : "text-left")}>

          {/* Brand column */}
          <div className="lg:col-span-1 space-y-5">
            <div className={cn("flex items-center gap-3", isRtl ? "flex-row-reverse justify-end" : "")}>
              <div className="rounded-full overflow-hidden ring-2 ring-honey-500/30 flex-shrink-0">
                <LogoImage size={48} />
              </div>
              <div>
                <p className="font-bold text-cream-100 font-arabic text-base">تعاونية المولد</p>
                <p className="text-xs text-honey-400 tracking-widest uppercase font-sans">Cooperative</p>
              </div>
            </div>

            <p className="text-sm text-cream-400 leading-relaxed">{tx.footer.description}</p>

            {/* Tagline */}
            <div className="ornament-divider text-xs text-honey-500/70">
              <span className="font-arabic text-xs whitespace-nowrap">لإنتاج و تثمين المنتوجات المحلية</span>
            </div>

            {/* Social links */}
            <div className={cn("flex gap-2.5", isRtl ? "flex-row-reverse" : "")}>
              {[
                {
                  href: "https://www.instagram.com/cop.al_mawlid",
                  label: "Instagram",
                  hoverClass: "hover:bg-[#E1306C]",
                  icon: <InstagramIcon className="w-4 h-4" />,
                },
                {
                  href: "https://www.facebook.com/tawouniytalmwld",
                  label: "Facebook",
                  hoverClass: "hover:bg-[#1877F2]",
                  icon: <FacebookIcon className="w-4 h-4" />,
                },
                {
                  href: "https://wa.me/212605925032",
                  label: "WhatsApp",
                  hoverClass: "hover:bg-[#25D366]",
                  icon: <WhatsAppIcon className="w-4 h-4" />,
                },
              ].map(({ href, label, hoverClass, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-200",
                    hoverClass,
                    "hover:scale-110"
                  )}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-5 text-sm uppercase tracking-wide">{tx.footer.links}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-400 hover:text-honey-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-cream-100 mb-5 text-sm uppercase tracking-wide">{tx.footer.products}</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-400 hover:text-honey-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Contact Info */}
          <div id="contact">
            <h3 className="font-semibold text-cream-100 mb-5 text-sm uppercase tracking-wide">{tx.footer.contact}</h3>
            <ul className="space-y-3.5">
              {/* Phone / WhatsApp */}
              <li className={cn("flex items-start gap-3", isRtl ? "flex-row-reverse" : "")}>
                <Phone className="w-4 h-4 text-honey-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-cream-500 mb-0.5">{tx.footer.phone}</p>
                  <a
                    href="tel:+212605925032"
                    className="text-sm text-cream-300 hover:text-honey-400 transition-colors font-mono"
                    dir="ltr"
                  >
                    +212 605 92 50 32
                  </a>
                </div>
              </li>
              {/* Email */}
              <li className={cn("flex items-start gap-3", isRtl ? "flex-row-reverse" : "")}>
                <Mail className="w-4 h-4 text-honey-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-cream-500 mb-0.5">{tx.footer.email}</p>
                  <a
                    href="mailto:cooperativealmawlid@gmail.com"
                    className="text-sm text-cream-300 hover:text-honey-400 transition-colors break-all"
                  >
                    cooperativealmawlid@gmail.com
                  </a>
                </div>
              </li>
              {/* Address */}
              <li className={cn("flex items-start gap-3", isRtl ? "flex-row-reverse" : "")}>
                <MapPin className="w-4 h-4 text-honey-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-cream-500 mb-0.5">{tx.footer.address}</p>
                  <p className="text-sm text-cream-300 leading-relaxed font-arabic">
                    {tx.footer.addressValue}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────── */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream-500">
          <p>
            © {new Date().getFullYear()} {tx.footer.cooperative}. {tx.footer.rights}.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-honey-400 animate-pulse" />
            100% Naturel &nbsp;•&nbsp; طبيعي 100%
          </p>
        </div>
      </div>
    </footer>
  );
}
