import type { Product } from "@/types";

// Image paths: place files in public/images/products/ with the names below.
// Fallback Unsplash URLs are the second element in each images[] array.

export const products: Product[] = [
  // ── AMLOU ─────────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "amlou-cacahuetes",
    category: "honey",
    price: 50,
    weight: "1kg",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 312,
    badge: "bestseller",
    images: [
      "/images/products/amlou-cacahuetes.jpg",
      "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "أملو كاواكاو بزيت نباتية",
        shortDescription: "مربى أملو تقليدي بالفول السوداني وزيت نباتي طبيعي — 1 كيلو",
        description:
          "أملو كاواكاو من تعاونية المولد، مُعدّ بالطريقة التقليدية المغربية من الفول السوداني المحمص والزيت النباتي الطبيعي وقليل من العسل. منتج 100% طبيعي بدون مواد حافظة أو إضافات صناعية، مثالي للفطور أو الوجبات الخفيفة.",
        benefits: [
          "غني بالبروتين النباتي والطاقة",
          "مصدر ممتاز للدهون الصحية",
          "مناسب للأطفال والرياضيين",
          "خالٍ من المواد الحافظة الصناعية",
          "يعزز القدرة على التحمل",
        ],
        usage:
          "يُؤكل مع الخبز أو المسمن أو البسكويت. يمكن خلطه مع الحليب أو الزبادي. يُحفظ في مكان بارد بعد الفتح.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Amlou Cacahuètes à l'huile végétale",
        shortDescription: "Pâte d'amlou traditionnelle aux cacahuètes et huile végétale — 1 kg",
        description:
          "L'Amlou Cacahuètes de la Coopérative Al Mawlid est préparé selon la recette traditionnelle marocaine, à base de cacahuètes grillées, d'huile végétale naturelle et de miel. Produit 100% naturel sans conservateurs ni additifs artificiels, idéal pour le petit déjeuner ou les collations.",
        benefits: [
          "Riche en protéines végétales et en énergie",
          "Excellente source de graisses saines",
          "Convient aux enfants et aux sportifs",
          "Sans conservateurs artificiels",
          "Améliore l'endurance",
        ],
        usage:
          "À déguster avec du pain, msemen ou biscuits. Peut être mélangé avec du lait ou du yaourt. Conserver dans un endroit frais après ouverture.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },
  {
    id: "2",
    slug: "amlou-amande",
    category: "honey",
    price: 190,
    weight: "1kg",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 218,
    badge: "premium",
    images: [
      "/images/products/amlou-amande.jpg",
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "أملو اللوز بزيت أركان",
        shortDescription: "مربى أملو فاخر باللوز وزيت الأركان الأصيل — 1 كيلو",
        description:
          "أملو اللوز الفاخر من تعاونية المولد، مُحضَّر من اللوز المحمص بزيت أركان بكر معصور على البارد وعسل طبيعي. وصفة أمازيغية موروثة تجمع بين قوة اللوز وكنوز زيت الأركان الأصيل من أولاد تايمة.",
        benefits: [
          "مصدر ممتاز للأحماض الدهنية أوميغا-9",
          "يقوي الجهاز المناعي والأعصاب",
          "يعطي طاقة مستدامة طوال اليوم",
          "يحتوي على فيتامين E الطبيعي",
          "مفيد للبشرة والشعر من الداخل",
        ],
        usage:
          "ملعقة كبيرة صباحاً مع الخبز أو على الريق. يمكن استخدامه كبديل صحي لزبدة الفول السوداني. يُحفظ بعيداً عن الرطوبة.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Amlou Amande à l'huile d'argan",
        shortDescription: "Pâte d'amlou premium aux amandes et huile d'argan authentique — 1 kg",
        description:
          "L'Amlou Amande premium de la Coopérative Al Mawlid est préparé à partir d'amandes grillées, d'huile d'argan vierge pressée à froid et de miel naturel. Une recette amazighe héritée qui marie la puissance des amandes aux trésors de l'huile d'argan authentique d'Ouled Taima.",
        benefits: [
          "Excellente source d'acides gras oméga-9",
          "Renforce le système immunitaire et nerveux",
          "Procure une énergie durable toute la journée",
          "Contient de la vitamine E naturelle",
          "Bénéfique pour la peau et les cheveux",
        ],
        usage:
          "Une cuillère à soupe le matin avec du pain ou à jeun. Peut remplacer sainement le beurre de cacahuète. Conserver à l'abri de l'humidité.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },

  // ── HUILES ────────────────────────────────────────────────────────────
  {
    id: "3",
    slug: "zit-argan-tajmil",
    category: "oils",
    price: 45,
    weight: "30ml",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 445,
    badge: "bestseller",
    images: [
      "/images/products/zit-argan-tajmil.jpg",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت أركان تجميل",
        shortDescription: "زيت أركان بكر للتجميل — Argania spinosa kernel oil — 30مل",
        description:
          "زيت أركان التجميل من تعاونية المولد، مُعصَر على البارد من نوى أشجار الأركان في أولاد تايمة. يُعدّ من أغلى الزيوت التجميلية في العالم لما يحتويه من أحماض دهنية أساسية وفيتامين E. يُمتص بسرعة دون أثر دهني.",
        benefits: [
          "يرطب ويغذي البشرة الجافة في العمق",
          "يقلل التجاعيد وعلامات الشيخوخة",
          "يعالج الشعر الجاف والمتقصف",
          "يوحد لون البشرة ويشرّق الوجه",
          "Argania spinosa kernel oil — نقي 100%",
        ],
        usage:
          "للبشرة: قطرتان على الوجه صباحاً ومساءً بعد التنظيف. للشعر: يُوزَّع على الأطراف الجافة. للجسم: يُمزَج مع كريم الترطيب.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Huile d'Argan Cosmétique",
        shortDescription: "Huile d'argan vierge cosmétique — Argania spinosa kernel oil — 30 ml",
        description:
          "L'huile d'argan cosmétique de la Coopérative Al Mawlid est pressée à froid à partir des noix d'arganiers d'Ouled Taima. Considérée comme l'un des huiles cosmétiques les plus précieuses au monde, elle est riche en acides gras essentiels et en vitamine E. S'absorbe rapidement sans laisser de résidu gras.",
        benefits: [
          "Hydrate et nourrit les peaux sèches en profondeur",
          "Réduit les rides et les signes du vieillissement",
          "Traite les cheveux secs et cassants",
          "Unifie le teint et illumine le visage",
          "Argania spinosa kernel oil — 100% pur",
        ],
        usage:
          "Visage: 2 gouttes matin et soir après nettoyage. Cheveux: appliquer sur les pointes sèches. Corps: mélanger avec une crème hydratante.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },
  {
    id: "4",
    slug: "zit-argan-akl",
    category: "oils",
    price: 750,
    weight: "1L",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 187,
    badge: "organic",
    images: [
      "/images/products/zit-argan-akl.jpg",
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت أركان للأكل",
        shortDescription: "زيت أركان غذائي أصيل معصور بارداً — Huile d'Argan Alimentaire — 1 لتر",
        description:
          "زيت أركان الأكل من تعاونية المولد، معصور من نوى الأركان المحمصة يدوياً من طرف نساء تعاونية المولد في أولاد تايمة. له طعم مميز يشبه البندق ورائحة زكية. غني بالأوميغا-9 ومضادات الأكسدة.",
        benefits: [
          "يخفض الكوليسترول الضار ويحمي القلب",
          "غني بالأوميغا-9 والفيتامينات",
          "يُحسِّن الهضم ويعالج القولون",
          "يقوي المناعة ويحارب الالتهابات",
          "طعم فريد يشبه البندق",
        ],
        usage:
          "يُضاف على السلطات والأطباق الباردة. يُدهن على الخبز أو يُخلط مع الأطباق التقليدية. لا يُستخدم للقلي على النار الشديدة للحفاظ على خصائصه.",
        origin: "تعاونية المولد — أولاد تايمة",
        nutritionalInfo:
          "لكل 100مل: طاقة 884 kcal، دهون 100غ، أحماض أوليك (أوميغا-9) 45%، لينوليك (أوميغا-6) 35%.",
      },
      fr: {
        name: "Huile d'Argan Alimentaire",
        shortDescription: "Huile d'argan alimentaire authentique pressée à froid — 1 litre",
        description:
          "L'huile d'argan alimentaire de la Coopérative Al Mawlid est extraite des noix d'arganiers torréfiées à la main par les femmes de la coopérative à Ouled Taima. Elle a un goût distinctif rappelant la noisette et une odeur agréable. Riche en oméga-9 et antioxydants.",
        benefits: [
          "Réduit le mauvais cholestérol et protège le cœur",
          "Riche en oméga-9 et vitamines",
          "Améliore la digestion",
          "Renforce le système immunitaire",
          "Goût unique de noisette",
        ],
        usage:
          "Ajouter sur les salades et plats froids. Tartiner sur du pain ou mélanger à des plats traditionnels. Ne pas utiliser pour les fritures à haute température.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
        nutritionalInfo:
          "Pour 100 ml: énergie 884 kcal, lipides 100 g, acide oléique (oméga-9) 45%, linoléique (oméga-6) 35%.",
      },
    },
  },
  {
    id: "5",
    slug: "zit-janjalan",
    category: "oils",
    price: 35,
    weight: "30ml",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 134,
    badge: "new",
    images: [
      "/images/products/zit-janjalan.jpg",
      "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت جنجلان (السمسم)",
        shortDescription: "زيت السمسم الطبيعي المعصور بارداً — Sesamum indicum seed oil — 30مل",
        description:
          "زيت جنجلان (السمسم) من تعاونية المولد، معصور بارداً من بذور السمسم الطبيعية عالية الجودة. معروف بخصائصه العلاجية والتجميلية منذ آلاف السنين. يتميز برائحته العطرية المميزة.",
        benefits: [
          "يرطب ويصلح الشعر الجاف والتالف",
          "يقوي البصيلات الشعرية ويمنع التساقط",
          "مضاد طبيعي للبكتيريا والفطريات",
          "يصلح تشققات القدمين واليدين",
          "يخفض ضغط الدم بالاستهلاك المنتظم",
        ],
        usage:
          "للشعر: يُدهن على فروة الرأس ويُترك ساعة ثم يُغسل. للبشرة: يُستخدم مرطباً يومياً. للمطبخ: يُضاف على الأطباق الباردة.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Huile de Sésame (Janjalan)",
        shortDescription: "Huile de sésame naturelle pressée à froid — Sesamum indicum seed oil — 30 ml",
        description:
          "L'huile de sésame (janjalan) de la Coopérative Al Mawlid est pressée à froid à partir de graines de sésame naturelles de haute qualité. Connue pour ses propriétés thérapeutiques et cosmétiques depuis des millénaires, elle se distingue par son arôme caractéristique.",
        benefits: [
          "Hydrate et répare les cheveux secs et abîmés",
          "Renforce les follicules capillaires, réduit la chute",
          "Antibactérien et antifongique naturel",
          "Répare les crevasses des pieds et des mains",
          "Réduit la tension artérielle avec une consommation régulière",
        ],
        usage:
          "Cheveux: appliquer sur le cuir chevelu, laisser 1h puis rincer. Peau: utiliser comme hydratant quotidien. Cuisine: ajouter sur les plats froids.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },
  {
    id: "6",
    slug: "zit-khrou",
    category: "oils",
    price: 35,
    weight: "30ml",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 98,
    badge: "organic",
    images: [
      "/images/products/zit-khrou.jpg",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت الخروع",
        shortDescription: "زيت الخروع الطبيعي البكر — Ricinus communis seed oil — 30مل",
        description:
          "زيت الخروع من تعاونية المولد، معصور بارداً من بذور نبتة الخروع (Ricinus communis). يُعدّ من أقوى الزيوت الطبيعية لتقوية الشعر والرموش والحواجب. يحتوي على نسبة عالية من حمض الريسينوليك.",
        benefits: [
          "يُطيل الشعر ويكثّفه بشكل ملحوظ",
          "يقوي الرموش والحواجب ويزيد كثافتها",
          "يُعالج قشرة الرأس والشعر الهش",
          "يُرطب البشرة الجافة جداً",
          "مُعالج طبيعي للإمساك عند الاستخدام الداخلي",
        ],
        usage:
          "للشعر: يُدهن على الجذور يومياً أو مرتين أسبوعياً. للرموش: يُوضع بالقطن قبل النوم. للمسامير والجلد: يُطبَّق مباشرة.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Huile de Ricin",
        shortDescription: "Huile de ricin vierge naturelle — Ricinus communis seed oil — 30 ml",
        description:
          "L'huile de ricin de la Coopérative Al Mawlid est pressée à froid à partir des graines du Ricinus communis. Considérée comme l'une des huiles naturelles les plus puissantes pour renforcer les cheveux, les cils et les sourcils. Riche en acide ricinoléique.",
        benefits: [
          "Allonge et épaissit les cheveux de manière notable",
          "Renforce les cils et les sourcils",
          "Traite les pellicules et les cheveux fragiles",
          "Hydrate les peaux très sèches",
          "Laxatif naturel en usage interne",
        ],
        usage:
          "Cheveux: appliquer sur les racines quotidiennement ou 2x/semaine. Cils: appliquer avec du coton avant de dormir. Peau: appliquer directement sur les zones sèches.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },
  {
    id: "7",
    slug: "znin-argan",
    category: "oils",
    price: 260,
    weight: "1kg",
    inStock: true,
    featured: false,
    rating: 4.8,
    reviewCount: 76,
    badge: "organic",
    images: [
      "/images/products/znin-argan.jpg",
      "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زنين أركان",
        shortDescription: "نوى أركان خام عالي الجودة من أولاد تايمة — 1 كيلو",
        description:
          "زنين (نوى) أركان من تعاونية المولد، مجمَّع يدوياً من ثمار أشجار الأركان في منطقة أولاد تايمة. مادة خام استثنائية يمكن استخدامها لاستخلاص زيت الأركان في المنزل أو كمكمل غذائي.",
        benefits: [
          "مادة خام نقية بدون أي معالجة",
          "صالحة لعصر زيت الأركان منزلياً",
          "غنية بالدهون الأساسية وفيتامين E",
          "يمكن طحنها لتحضير أملو بيتي",
          "100% طبيعي من أشجار الأركان الأصيلة",
        ],
        usage:
          "للعصر: تُطحن النوى وتُعصر لاستخراج الزيت. لأملو محلي الصنع: تُحمَّص النوى ثم تُطحن مع العسل والزيت. تُحفظ في مكان جاف وبارد.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Noix d'Argan (Znin)",
        shortDescription: "Noix d'argan brutes de haute qualité d'Ouled Taima — 1 kg",
        description:
          "Les noix d'argan (znin) de la Coopérative Al Mawlid sont collectées à la main à partir des fruits des arganiers de la région d'Ouled Taima. Matière première exceptionnelle, elles peuvent être utilisées pour extraire l'huile d'argan à domicile ou comme complément alimentaire.",
        benefits: [
          "Matière première pure sans aucun traitement",
          "Permet de presser l'huile d'argan à domicile",
          "Riche en graisses essentielles et vitamine E",
          "Peut être moulue pour préparer un amlou maison",
          "100% naturel, issus d'arganiers authentiques",
        ],
        usage:
          "Pour l'extraction: moudre et presser pour obtenir l'huile. Pour un amlou maison: torréfier les noix puis moudre avec du miel et de l'huile. Conserver dans un endroit sec et frais.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (category: string) =>
  category === "all" ? products : products.filter((p) => p.category === category);

export const getRelatedProducts = (product: Product, limit = 3) =>
  products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
