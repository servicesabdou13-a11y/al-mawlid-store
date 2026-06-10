import type { Language } from "@/types";

const translations = {
  ar: {
    dir: "rtl" as const,
    nav: {
      home: "الرئيسية",
      products: "منتجاتنا",
      about: "عن الجمعية",
      contact: "اتصل بنا",
      cart: "السلة",
      language: "Français",
    },
    hero: {
      badge: "لإنتاج و تثمين المنتوجات المحلية",
      title: "تعاونية المولد",
      titleAccent: "ذهب المغرب الأصيل",
      subtitle:
        "زيت أركان، عسل طبيعي، وزيوت نباتية مضغوطة على البارد. جودة مضمونة مباشرة من أولاد تايمة إلى بيتك.",
      cta: "اكتشف منتجاتنا",
      ctaSecondary: "تعرف علينا",
      stat1: "منتج طبيعي",
      stat2: "عميل راضٍ",
      stat3: "سنة خبرة",
      stat1Value: "+20",
      stat2Value: "+1000",
      stat3Value: "+15",
    },
    categories: {
      all: "الكل",
      honey: "العسل",
      oils: "الزيوت",
      supplements: "مكملات النحل",
    },
    products: {
      featured: "المنتجات المميزة",
      featuredSubtitle: "اكتشف أفضل ما تقدمه تعاونية المولد من منتجات طبيعية أصيلة",
      viewAll: "عرض جميع المنتجات",
      addToCart: "أضف للسلة",
      buyNow: "اطلب الآن",
      orderWhatsApp: "اطلب عبر واتساب",
      outOfStock: "نفذ المخزون",
      inStock: "متوفر",
      rating: "التقييم",
      reviews: "تقييم",
      weight: "الوزن",
      origin: "المنشأ",
      benefits: "الفوائد الصحية",
      usage: "طريقة الاستخدام",
      nutritional: "القيمة الغذائية",
      relatedProducts: "منتجات ذات صلة",
      backToProducts: "العودة للمنتجات",
      badge: {
        bestseller: "الأكثر مبيعاً",
        new: "جديد",
        organic: "عضوي",
        premium: "مميز",
      },
    },
    cart: {
      title: "سلة التسوق",
      empty: "سلتك فارغة",
      emptySubtitle: "أضف منتجات لتبدأ التسوق",
      total: "المجموع",
      checkout: "إتمام الطلب",
      continueShopping: "مواصلة التسوق",
      remove: "إزالة",
      quantity: "الكمية",
      items: "منتجات",
    },
    checkout: {
      title: "تأكيد الطلب",
      orderSummary: "ملخص الطلب",
      contactInfo: "معلومات التواصل",
      fullName: "الاسم الكامل",
      phone: "رقم الهاتف",
      city: "المدينة",
      address: "العنوان التفصيلي",
      notes: "ملاحظات إضافية",
      notesPlaceholder: "أي تعليمات خاصة للتوصيل...",
      codTitle: "الدفع عند الاستلام",
      codDescription: "ادفع نقداً عند استلام طلبك. سيتواصل معك فريقنا لتأكيد الطلب.",
      whatsappOrder: "أرسل الطلب عبر واتساب",
      whatsappDescription: "سيفتح واتساب مع تفاصيل طلبك جاهزة للإرسال",
      placeOrder: "تأكيد الطلب",
      total: "المجموع",
      shipping: "التوصيل",
      shippingFree: "مجاني",
      subtotal: "المجموع الجزئي",
    },
    benefits: {
      title: "لماذا تختار تعاونية المولد؟",
      subtitle: "التزامنا بالجودة والطبيعة في كل ما نقدم",
      items: [
        {
          title: "100% طبيعي وعضوي",
          description: "جميع منتجاتنا طبيعية خالصة، بدون إضافات أو مواد حافظة.",
        },
        {
          title: "مباشرة من خلايا النحل",
          description: "نعمل مباشرة مع مربي النحل المحليين لضمان أعلى جودة.",
        },
        {
          title: "جودة معتمدة",
          description: "منتجاتنا خضعت للفحص ومعتمدة وفق المعايير المغربية والدولية.",
        },
        {
          title: "توصيل سريع لجميع المدن",
          description: "نوصل لجميع مدن المغرب مع ضمان وصول المنتج بأفضل حالة.",
        },
      ],
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "آلاف العملاء الراضين يثقون في جودة منتجاتنا",
    },
    footer: {
      description:
        "تعاونية المولد — لإنتاج و تثمين المنتوجات المحلية. زيت أركان، عسل طبيعي، وزيوت مضغوطة على البارد من أولاد تايمة.",
      links: "روابط سريعة",
      products: "منتجاتنا",
      contact: "تواصل معنا",
      rights: "جميع الحقوق محفوظة",
      cooperative: "تعاونية المولد",
      honey: "العسل الطبيعي",
      oils: "الزيوت الطبيعية",
      supplements: "مكملات النحل",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      address: "العنوان",
      addressValue: "أولاد تايمة - حي الشليوات - بلوك C",
      followUs: "تابعونا",
    },
    about: {
      badge: "تعاونية مغربية أصيلة — أولاد تايمة",
      title: "قصتنا",
      description:
        "تأسست تعاونية المولد في أولاد تايمة — إقليم تيزنيت — من طرف نساء مغربيات متحمسات لتثمين الثروات الطبيعية المحلية. نحن متخصصون في استخراج وتسويق زيت أركان البيو، الزيوت النباتية المضغوطة على البارد، والعسل الطبيعي الأصيل. هدفنا الحفاظ على الموروث الزراعي المغربي وتحقيق التنمية المستدامة للمرأة القروية.",
    },
  },
  fr: {
    dir: "ltr" as const,
    nav: {
      home: "Accueil",
      products: "Produits",
      about: "À propos",
      contact: "Contact",
      cart: "Panier",
      language: "عربية",
    },
    hero: {
      badge: "Produire et Valoriser les Produits Locaux",
      title: "Coopérative Al Mawlid",
      titleAccent: "L'Or du Maroc Authentique",
      subtitle:
        "Huile d'argan, miel naturel et huiles végétales pressées à froid. Qualité garantie, directement d'Ouled Taima à votre porte.",
      cta: "Découvrir nos produits",
      ctaSecondary: "En savoir plus",
      stat1: "Produits naturels",
      stat2: "Clients satisfaits",
      stat3: "Ans d'expérience",
      stat1Value: "+20",
      stat2Value: "+1000",
      stat3Value: "+15",
    },
    categories: {
      all: "Tout",
      honey: "Miels",
      oils: "Huiles",
      supplements: "Suppléments",
    },
    products: {
      featured: "Produits Vedettes",
      featuredSubtitle:
        "Découvrez les meilleurs produits naturels de la Coopérative Al Mawlid",
      viewAll: "Voir tous les produits",
      addToCart: "Ajouter au panier",
      buyNow: "Commander",
      orderWhatsApp: "Commander via WhatsApp",
      outOfStock: "Rupture de stock",
      inStock: "En stock",
      rating: "Note",
      reviews: "avis",
      weight: "Poids",
      origin: "Origine",
      benefits: "Bienfaits pour la santé",
      usage: "Mode d'emploi",
      nutritional: "Valeur nutritive",
      relatedProducts: "Produits similaires",
      backToProducts: "Retour aux produits",
      badge: {
        bestseller: "Meilleures ventes",
        new: "Nouveau",
        organic: "Bio",
        premium: "Premium",
      },
    },
    cart: {
      title: "Panier",
      empty: "Votre panier est vide",
      emptySubtitle: "Ajoutez des produits pour commencer vos achats",
      total: "Total",
      checkout: "Passer la commande",
      continueShopping: "Continuer les achats",
      remove: "Supprimer",
      quantity: "Quantité",
      items: "articles",
    },
    checkout: {
      title: "Confirmer la commande",
      orderSummary: "Récapitulatif",
      contactInfo: "Vos coordonnées",
      fullName: "Nom complet",
      phone: "Téléphone",
      city: "Ville",
      address: "Adresse complète",
      notes: "Remarques",
      notesPlaceholder: "Instructions particulières pour la livraison...",
      codTitle: "Paiement à la livraison",
      codDescription:
        "Payez en espèces à la réception. Notre équipe vous contactera pour confirmer.",
      whatsappOrder: "Commander via WhatsApp",
      whatsappDescription:
        "WhatsApp s'ouvrira avec les détails de votre commande prêts à envoyer",
      placeOrder: "Confirmer la commande",
      total: "Total",
      shipping: "Livraison",
      shippingFree: "Gratuit",
      subtotal: "Sous-total",
    },
    benefits: {
      title: "Pourquoi choisir Al Mawlid ?",
      subtitle: "Notre engagement envers la qualité et la nature dans tout ce que nous faisons",
      items: [
        {
          title: "100% Naturel et Bio",
          description:
            "Tous nos produits sont purement naturels, sans additifs ni conservateurs.",
        },
        {
          title: "Directement de la ruche",
          description:
            "Nous travaillons directement avec des apiculteurs locaux pour garantir la plus haute qualité.",
        },
        {
          title: "Qualité certifiée",
          description:
            "Nos produits sont testés et certifiés selon les normes marocaines et internationales.",
        },
        {
          title: "Livraison rapide partout au Maroc",
          description: "Livraison dans toutes les villes du Maroc avec garantie de fraîcheur.",
        },
      ],
    },
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "Des milliers de clients satisfaits font confiance à la qualité de nos produits",
    },
    footer: {
      description:
        "Coopérative Al Mawlid — Produire et Valoriser les Produits Locaux. Huile d'argan bio, miels naturels et huiles pressées à froid depuis Ouled Taima.",
      links: "Liens rapides",
      products: "Nos produits",
      contact: "Contactez-nous",
      rights: "Tous droits réservés",
      cooperative: "Coopérative Al Mawlid",
      honey: "Miel naturel",
      oils: "Huiles naturelles",
      supplements: "Suppléments apicoles",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      addressValue: "Ouled Taima - Hay Chleiwat - Bloc C",
      followUs: "Suivez-nous",
    },
    about: {
      badge: "Coopérative authentique — Ouled Taima",
      title: "Notre histoire",
      description:
        "La Coopérative Al Mawlid a été fondée à Ouled Taima — province de Tiznit — par des femmes marocaines passionnées par la valorisation des richesses naturelles locales. Nous sommes spécialisés dans l'extraction et la commercialisation d'huile d'argan bio, d'huiles végétales pressées à froid et de miel naturel authentique. Notre mission : préserver le patrimoine agricole marocain et promouvoir le développement durable de la femme rurale.",
    },
  },
};

export type Translations = typeof translations.ar;

export function t(lang: Language): Translations {
  return translations[lang] as Translations;
}

export default translations;
