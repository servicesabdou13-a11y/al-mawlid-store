import type { Product } from "@/types";

export const products: Product[] = [
  // ── HONEY ─────────────────────────────────────────────
  {
    id: "1",
    slug: "sidr-honey",
    category: "honey",
    price: 280,
    comparePrice: 320,
    weight: "500g",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 147,
    badge: "premium",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "عسل السدر الجبلي",
        shortDescription: "عسل نادر من أشجار السدر في جبال الأطلس بالمغرب",
        description:
          "عسل السدر هو من أرقى وأغلى أنواع العسل في العالم، يُستخرج من أزهار شجرة السدر (النبق) في جبال الأطلس المغربية. يتميز بلونه الداكن وطعمه الغني الفريد ورائحته العطرية الخاصة. يُعدّ من أكثر أنواع العسل قيمة علاجية وغذائية.",
        benefits: [
          "تقوية المناعة وحماية الجسم من الأمراض",
          "علاج التهابات المعدة والقرحة المعدية",
          "تحسين جودة النوم وتخفيف التوتر",
          "تعزيز صحة الجهاز الهضمي",
          "مضاد طبيعي للبكتيريا والفطريات",
          "علاج الجروح والحروق والالتهابات الجلدية",
        ],
        usage:
          "يُؤخذ ملعقة كبيرة على الريق صباحاً مع ماء دافئ أو حليب. يمكن استخدامه في الشاي أو مباشرة. للأطفال فوق سنة: نصف ملعقة صغيرة يومياً.",
        origin: "جبال الأطلس - المغرب",
        nutritionalInfo:
          "لكل 100غ: طاقة 304 كيلو كالوري، كربوهيدرات 82.4غ، سكريات طبيعية 78.8غ، بروتين 0.3غ.",
      },
      fr: {
        name: "Miel de Sidr de Montagne",
        shortDescription: "Miel rare des jujubiers des montagnes de l'Atlas au Maroc",
        description:
          "Le miel de Sidr est l'un des miels les plus rares et les plus précieux au monde, extrait des fleurs du jujubier dans les montagnes de l'Atlas marocain. Il se distingue par sa couleur foncée, son goût riche et unique et son arôme particulier. C'est l'un des miels les plus précieux sur le plan thérapeutique et nutritionnel.",
        benefits: [
          "Renforcement de l'immunité et protection contre les maladies",
          "Traitement des inflammations gastriques et des ulcères",
          "Amélioration de la qualité du sommeil et réduction du stress",
          "Amélioration de la santé digestive",
          "Antibactérien et antifongique naturel",
          "Cicatrisation des plaies, brûlures et inflammations cutanées",
        ],
        usage:
          "Prenez une grande cuillère à jeun le matin avec de l'eau tiède ou du lait. Peut être utilisé dans le thé ou directement. Pour les enfants de plus d'un an: une demi-cuillère à café par jour.",
        origin: "Montagnes de l'Atlas - Maroc",
        nutritionalInfo:
          "Pour 100g: énergie 304 kcal, glucides 82,4g, sucres naturels 78,8g, protéines 0,3g.",
      },
    },
  },
  {
    id: "2",
    slug: "thyme-honey",
    category: "honey",
    price: 180,
    weight: "500g",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 203,
    badge: "bestseller",
    images: [
      "https://images.unsplash.com/photo-1598449426314-8b02525e8733?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "عسل الزعتر البري",
        shortDescription: "عسل عطري من أزهار الزعتر البري المغربي الجبلي",
        description:
          "يُستخرج عسل الزعتر البري من أزهار الزعتر التي تنمو في المناطق الجبلية بالمغرب. يتميز بلونه الذهبي اللامع ورائحته العطرية القوية وطعمه المميز. يُعدّ من أكثر أنواع العسل شيوعاً واستخداماً في الطب التقليدي المغربي والعربي.",
        benefits: [
          "مضاد قوي للبكتيريا والفيروسات",
          "علاج نزلات البرد والسعال والإنفلونزا",
          "تعزيز صحة الجهاز التنفسي",
          "تحسين الهضم وتهدئة القولون",
          "مصدر غني بمضادات الأكسدة",
          "تقوية الذاكرة والتركيز",
        ],
        usage:
          "ملعقة كبيرة مع الشاي الأخضر أو الزعتر المطبوخ لعلاج البرد. يمكن تناوله مباشرة أو مع الماء الدافئ صباحاً.",
        origin: "جبال الريف والأطلس - المغرب",
      },
      fr: {
        name: "Miel de Thym Sauvage",
        shortDescription: "Miel aromatique des fleurs de thym sauvage des montagnes marocaines",
        description:
          "Le miel de thym sauvage est extrait des fleurs de thym qui poussent dans les régions montagneuses du Maroc. Il se distingue par sa couleur dorée brillante, son arôme fort et distinctif et son goût caractéristique. C'est l'un des miels les plus couramment utilisés dans la médecine traditionnelle marocaine et arabe.",
        benefits: [
          "Puissant antibactérien et antiviral",
          "Traitement des rhumes, toux et grippes",
          "Renforcement de la santé respiratoire",
          "Amélioration de la digestion et apaisement du côlon",
          "Riche source d'antioxydants",
          "Amélioration de la mémoire et de la concentration",
        ],
        usage:
          "Une grande cuillère avec du thé vert ou de la tisane de thym pour traiter le rhume. Peut être pris directement ou avec de l'eau tiède le matin.",
        origin: "Montagnes du Rif et de l'Atlas - Maroc",
      },
    },
  },
  {
    id: "3",
    slug: "wildflower-honey",
    category: "honey",
    price: 120,
    weight: "500g",
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 89,
    badge: "organic",
    images: [
      "https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "عسل الأزهار البرية",
        shortDescription: "مزيج متناسق من عشرات أنواع الأزهار البرية المغربية",
        description:
          "عسل الأزهار البرية هو مزيج طبيعي رائع يجمع رحيق عشرات الأنواع من الأزهار البرية التي تنمو في أرجاء المغرب. يتميز بطعمه المتوازن ورائحته الزهرية المنعشة ولونه الذهبي الجميل. يحمل خصائص كل الأزهار التي زارتها النحل.",
        benefits: [
          "تقوية الجهاز المناعي العام",
          "مصدر طبيعي للطاقة والحيوية",
          "فوائد متعددة بفضل تنوع مصادر الرحيق",
          "مفيد للبشرة والشعر",
          "يحتوي على مضادات الأكسدة المتنوعة",
        ],
        usage:
          "ملعقتان كبيرتان يومياً للبالغين، ملعقة صغيرة للأطفال. ممتاز مع الإفطار أو في المشروبات الساخنة.",
        origin: "مناطق متعددة - المغرب",
      },
      fr: {
        name: "Miel de Fleurs Sauvages",
        shortDescription: "Mélange harmonieux de dizaines de fleurs sauvages marocaines",
        description:
          "Le miel de fleurs sauvages est un merveilleux mélange naturel qui rassemble le nectar de dizaines d'espèces de fleurs sauvages qui poussent à travers le Maroc. Il se distingue par son goût équilibré, son arôme floral rafraîchissant et sa belle couleur dorée.",
        benefits: [
          "Renforcement général du système immunitaire",
          "Source naturelle d'énergie et de vitalité",
          "Multiples bienfaits grâce à la diversité des sources de nectar",
          "Bénéfique pour la peau et les cheveux",
          "Contient des antioxydants variés",
        ],
        usage:
          "Deux grandes cuillères par jour pour les adultes, une petite cuillère pour les enfants. Excellent au petit-déjeuner ou dans les boissons chaudes.",
        origin: "Plusieurs régions - Maroc",
      },
    },
  },
  {
    id: "4",
    slug: "black-seed-honey",
    category: "honey",
    price: 150,
    comparePrice: 175,
    weight: "500g",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 134,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "عسل الحبة السوداء",
        shortDescription: "عسل طبيعي ممزوج بزيت الحبة السوداء الأصيل",
        description:
          "مزيج فريد من العسل الطبيعي وزيت الحبة السوداء المعصور على البارد. الحبة السوداء (النيجيلا) تُعدّ من أعظم الأعشاب الطبية في التراث العربي الإسلامي، وقد قال عنها النبي ﷺ: 'في الحبة السوداء شفاء من كل داء إلا السام'.",
        benefits: [
          "تعزيز المناعة وحماية الجسم",
          "علاج الحساسية والربو",
          "تنشيط الدورة الدموية",
          "تحسين صحة الجهاز التنفسي",
          "مكافحة الالتهابات والجراثيم",
          "دعم صحة المفاصل",
        ],
        usage:
          "ملعقة صغيرة في الصباح على الريق مع ماء دافئ. يُنصح بالاستمرار لمدة 40 يوماً للحصول على أفضل النتائج.",
        origin: "المغرب",
      },
      fr: {
        name: "Miel à la Nigelle",
        shortDescription: "Miel naturel mélangé à l'huile de nigelle authentique",
        description:
          "Un mélange unique de miel naturel et d'huile de nigelle pressée à froid. La nigelle (Nigella sativa) est considérée comme l'une des plus grandes herbes médicinales du patrimoine arabo-islamique.",
        benefits: [
          "Renforcement de l'immunité",
          "Traitement des allergies et de l'asthme",
          "Stimulation de la circulation sanguine",
          "Amélioration de la santé respiratoire",
          "Combat les inflammations et les germes",
          "Soutien de la santé articulaire",
        ],
        usage:
          "Une petite cuillère le matin à jeun avec de l'eau tiède. Il est conseillé de continuer pendant 40 jours pour obtenir les meilleurs résultats.",
        origin: "Maroc",
      },
    },
  },

  // ── OILS ──────────────────────────────────────────────
  {
    id: "5",
    slug: "argan-oil",
    category: "oils",
    price: 220,
    comparePrice: 260,
    weight: "100ml",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 312,
    badge: "premium",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت أركان المعصور البارد",
        shortDescription: "ذهب المغرب السائل - زيت أركان أصيل معصور على البارد",
        description:
          "زيت أركان، المعروف بـ'ذهب المغرب'، يُستخرج من لوز شجرة الأركان النادرة التي تنمو حصرياً في المناطق الجنوبية الغربية للمغرب. يُعدّ من أغلى وأثمن الزيوت الطبيعية في العالم، وهو محمي باليونسكو كإرث إنساني. غني جداً بالأحماض الدهنية الأساسية وفيتامين E.",
        benefits: [
          "ترطيب البشرة الجاف والتشققات",
          "تغذية الشعر وإصلاح التالف منه",
          "مكافحة علامات التقدم في السن",
          "تقليل التجاعيد وتحسين مرونة الجلد",
          "علاج أكزيما الجلد والصدفية",
          "تقوية الأظافر الهشة",
          "مفيد للاستخدام الغذائي في السلطات",
        ],
        usage:
          "للبشرة: ضعي بضع قطرات مساءً على الوجه والرقبة. للشعر: دهني الأطراف وشاملة الشعر ساعة قبل الاستحمام. للأكل: أضيفي للسلطات والأطباق.",
        origin: "مناطق سوس - ماسة - درعة، المغرب",
        nutritionalInfo:
          "غني بفيتامين E، أحماض أوليك (45%)، لينوليك (35%)، ستيارك وبالميتيك.",
      },
      fr: {
        name: "Huile d'Argan Pressée à Froid",
        shortDescription: "L'or liquide du Maroc - Huile d'argan authentique pressée à froid",
        description:
          "L'huile d'argan, connue sous le nom d'or du Maroc, est extraite des amandes de l'arganier, un arbre rare qui pousse exclusivement dans les régions sud-ouest du Maroc. C'est l'une des huiles naturelles les plus précieuses au monde, protégée par l'UNESCO comme patrimoine humain. Très riche en acides gras essentiels et en vitamine E.",
        benefits: [
          "Hydratation de la peau sèche et des gerçures",
          "Nutrition des cheveux et réparation des pointes",
          "Combat les signes du vieillissement",
          "Réduction des rides et amélioration de l'élasticité",
          "Traitement de l'eczéma et du psoriasis",
          "Renforcement des ongles cassants",
          "Peut être utilisée en cuisine pour les salades",
        ],
        usage:
          "Pour la peau: appliquez quelques gouttes le soir sur le visage et le cou. Pour les cheveux: appliquez sur les pointes une heure avant le shampooing. En cuisine: ajoutez aux salades et aux plats.",
        origin: "Régions de Souss-Massa-Drâa, Maroc",
        nutritionalInfo:
          "Riche en vitamine E, acides oléique (45%), linoléique (35%), stéarique et palmitique.",
      },
    },
  },
  {
    id: "6",
    slug: "black-seed-oil",
    category: "oils",
    price: 130,
    weight: "100ml",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 198,
    badge: "bestseller",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت الحبة السوداء المعصور",
        shortDescription: "زيت الحبة السوداء الأصيل معصور على البارد بدون إضافات",
        description:
          "زيت الحبة السوداء (النيجيلا ساتيفا) هو أحد أعظم الأدوية الطبيعية المعروفة في تاريخ الطب البشري. يُستخرج من بذور النيجيلا بالعصر البارد للحفاظ على كل فوائده الطبية. يحتوي على أكثر من 100 مركب كيميائي نشط.",
        benefits: [
          "تعزيز جهاز المناعة بشكل قوي",
          "علاج الحساسية والربو والجهاز التنفسي",
          "خفض ضغط الدم والكوليسترول",
          "مكافحة السرطان (بحوث واعدة)",
          "علاج داء السكري وتنظيم السكر",
          "حماية الكبد والكلى",
          "مضاد للبكتيريا والفيروسات والفطريات",
        ],
        usage:
          "ملعقة صغيرة (5 مل) مرتين يومياً مع عصير ليمون أو عسل. يُفضل على الريق. للأطفال: نصف ملعقة صغيرة مرة يومياً.",
        origin: "المغرب - بذور نيجيلا محلية",
        nutritionalInfo:
          "يحتوي على التيموكينون وهو المادة الفعالة الرئيسية، بالإضافة لأحماض دهنية غير مشبعة.",
      },
      fr: {
        name: "Huile de Nigelle Pressée à Froid",
        shortDescription: "Huile de nigelle authentique pressée à froid sans additifs",
        description:
          "L'huile de nigelle (Nigella sativa) est l'un des plus grands remèdes naturels connus dans l'histoire de la médecine humaine. Elle est extraite par pressage à froid pour préserver tous ses bienfaits médicinaux. Contient plus de 100 composés chimiques actifs.",
        benefits: [
          "Puissant renforcement du système immunitaire",
          "Traitement des allergies, de l'asthme et des voies respiratoires",
          "Réduction de la tension artérielle et du cholestérol",
          "Propriétés anticancéreuses (recherches prometteuses)",
          "Traitement du diabète et régulation du sucre",
          "Protection du foie et des reins",
          "Antibactérien, antiviral et antifongique",
        ],
        usage:
          "Une petite cuillère (5 ml) deux fois par jour avec du jus de citron ou du miel. De préférence à jeun. Pour les enfants: une demi-cuillère une fois par jour.",
        origin: "Maroc - graines de nigelle locales",
        nutritionalInfo:
          "Contient la thymoquinone, le principal principe actif, ainsi que des acides gras insaturés.",
      },
    },
  },
  {
    id: "7",
    slug: "prickly-pear-oil",
    category: "oils",
    price: 350,
    comparePrice: 420,
    weight: "30ml",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 76,
    badge: "premium",
    images: [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت الهندية (صبار الهندي)",
        shortDescription: "زيت نادر من بذور الصبار المغربي - مضاد فريد للشيخوخة",
        description:
          "زيت الهندية أو زيت بذور الصبار المغربي هو من أكثر الزيوت التجميلية ندرة وثمناً في العالم. يحتاج استخراج لتر واحد منه إلى أكثر من مليون بذرة صبار. يحتوي على أعلى نسبة من فيتامين E في أي زيت طبيعي معروف.",
        benefits: [
          "أقوى مضاد للشيخوخة في الطبيعة",
          "تفتيح البشرة وتوحيد لونها",
          "علاج الهالات السوداء والتجاعيد",
          "ترطيب عميق للبشرة الجافة",
          "تقليل ظهور التشققات والندبات",
          "تغذية الشعر وتحفيز نموه",
          "يمتص بسرعة دون ترك أثر دهني",
        ],
        usage:
          "ضعي قطرتين أو ثلاثاً مساءً بعد تنظيف البشرة. للشعر: ضعي بضع قطرات على فروة الرأس وامسحي. نتائج ملموسة بعد 4-6 أسابيع.",
        origin: "مناطق الصبار - المغرب",
        nutritionalInfo:
          "أعلى نسبة فيتامين E في أي زيت (900 mg/100g)، غني بالأوميغا 6 و9.",
      },
      fr: {
        name: "Huile de Figue de Barbarie",
        shortDescription: "Huile rare des graines de cactus marocain - Anti-âge unique",
        description:
          "L'huile de figue de barbarie est l'une des huiles cosmétiques les plus rares et les plus précieuses au monde. L'extraction d'un litre nécessite plus d'un million de graines de cactus. Elle contient la plus haute teneur en vitamine E de tous les huiles naturelles connues.",
        benefits: [
          "Le plus puissant anti-âge de la nature",
          "Éclaircissement et uniformisation du teint",
          "Traitement des cernes et des rides",
          "Hydratation profonde de la peau sèche",
          "Réduction des vergetures et des cicatrices",
          "Nutrition des cheveux et stimulation de leur croissance",
          "Absorption rapide sans résidu gras",
        ],
        usage:
          "Appliquez deux à trois gouttes le soir après le nettoyage. Pour les cheveux: appliquez quelques gouttes sur le cuir chevelu. Résultats visibles après 4-6 semaines.",
        origin: "Régions de cactus - Maroc",
        nutritionalInfo:
          "Teneur en vitamine E la plus élevée (900 mg/100g), riche en oméga 6 et 9.",
      },
    },
  },
  {
    id: "8",
    slug: "olive-oil",
    category: "oils",
    price: 90,
    weight: "500ml",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 445,
    badge: "organic",
    images: [
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "زيت الزيتون البكر الممتاز",
        shortDescription: "زيت زيتون بكر ممتاز معصور بارد من بساتين المغرب",
        description:
          "زيت زيتون بكر ممتاز من أجود الزيتون المغربي، يُستخرج بالعصر البارد مباشرة من ثمار الزيتون الطازجة دون أي معالجة حرارية. يتميز بلونه الذهبي الأخضر ورائحته الزكية وطعمه المميز.",
        benefits: [
          "حماية القلب والأوعية الدموية",
          "خفض الكوليسترول الضار",
          "مضاد الأكسدة القوي",
          "تحسين الهضم وصحة الأمعاء",
          "ترطيب البشرة وتغذية الشعر",
          "مفيد لتنظيم ضغط الدم",
        ],
        usage:
          "للأكل: ملعقتان كبيرتان يومياً في السلطات أو مع الخبز. للبشرة: ضعي قليلاً مساءً كمرطب.",
        origin: "مناطق الشاوية - بني ملال - المغرب",
      },
      fr: {
        name: "Huile d'Olive Extra Vierge",
        shortDescription: "Huile d'olive extra vierge pressée à froid des vergers marocains",
        description:
          "Huile d'olive extra vierge de la meilleure olive marocaine, extraite par pressage à froid directement des fruits frais sans aucun traitement thermique. Elle se distingue par sa couleur dorée-verte, son arôme parfumé et son goût caractéristique.",
        benefits: [
          "Protection du cœur et des vaisseaux sanguins",
          "Réduction du mauvais cholestérol",
          "Puissant antioxydant",
          "Amélioration de la digestion et de la santé intestinale",
          "Hydratation de la peau et nutrition des cheveux",
          "Utile pour réguler la tension artérielle",
        ],
        usage:
          "Pour l'alimentation: deux grandes cuillères par jour dans les salades ou avec du pain. Pour la peau: appliquez un peu le soir comme hydratant.",
        origin: "Régions de Chaouia - Béni Mellal - Maroc",
      },
    },
  },

  // ── SUPPLEMENTS ───────────────────────────────────────
  {
    id: "9",
    slug: "bee-pollen",
    category: "supplements",
    price: 160,
    weight: "250g",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 167,
    badge: "new",
    images: [
      "https://images.unsplash.com/photo-1612387290123-e30af0e6afc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "حبوب لقاح النحل الطازجة",
        shortDescription: "حبوب لقاح طازجة مجمعة يدوياً من خلايا النحل المغربية",
        description:
          "حبوب لقاح النحل هي من أكثر الأغذية تكاملاً من الناحية الغذائية، تحتوي على جميع العناصر الغذائية الضرورية للجسم البشري. تُجمع يدوياً من خلايا النحل في المناطق النظيفة بعيداً عن التلوث. تحتوي على أكثر من 250 مادة فعالة.",
        benefits: [
          "تعزيز الطاقة والحيوية الجسمية",
          "دعم جهاز المناعة",
          "تحسين الخصوبة وصحة الجهاز التناسلي",
          "مساعدة في فقدان الوزن وتنظيم الشهية",
          "تغذية بشرة وشعر رائعة",
          "مضاد للحساسية الموسمية",
          "تحسين وظائف الدماغ والتركيز",
        ],
        usage:
          "ملعقة صغيرة (5-10 غ) في الصباح قبل الإفطار. يمكن إضافتها للعصائر أو الزبادي. ابدأ بكميات صغيرة ثم زِد تدريجياً.",
        origin: "مناطق متعددة - المغرب",
        nutritionalInfo:
          "يحتوي على 22 حمض أميني، 27 معدن، 16 فيتامين، و18 إنزيم.",
      },
      fr: {
        name: "Pollen d'Abeilles Frais",
        shortDescription: "Pollen frais collecté manuellement des ruches marocaines",
        description:
          "Le pollen d'abeilles est l'un des aliments les plus nutritionnellement complets, contenant tous les nutriments essentiels au corps humain. Collecté manuellement dans des zones éloignées de la pollution. Contient plus de 250 composés actifs.",
        benefits: [
          "Boost d'énergie et de vitalité",
          "Soutien du système immunitaire",
          "Amélioration de la fertilité et de la santé reproductive",
          "Aide à la perte de poids et régulation de l'appétit",
          "Excellent pour la peau et les cheveux",
          "Antiallergique saisonnier",
          "Amélioration des fonctions cérébrales et de la concentration",
        ],
        usage:
          "Une petite cuillère (5-10 g) le matin avant le petit-déjeuner. Peut être ajouté aux jus ou aux yaourts. Commencez par de petites quantités puis augmentez progressivement.",
        origin: "Plusieurs régions - Maroc",
        nutritionalInfo:
          "Contient 22 acides aminés, 27 minéraux, 16 vitamines et 18 enzymes.",
      },
    },
  },
  {
    id: "10",
    slug: "royal-jelly",
    category: "supplements",
    price: 380,
    comparePrice: 440,
    weight: "100g",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 92,
    badge: "premium",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "غذاء ملكات النحل الطازج",
        shortDescription: "غذاء الملكات الطازج - المادة السحرية التي تُحول النحلة إلى ملكة",
        description:
          "غذاء الملكات أو الجيلي الملكي هو مادة حيوية لبنية يُفرزها النحل لتغذية يرقات الملكات. يُعدّ أحد أكثر المواد الطبيعية استثنائية من الناحية البيولوجية. يحتوي على مادة 10-HDA الفريدة التي لا توجد في أي مصدر طبيعي آخر.",
        benefits: [
          "تقوية المناعة ومقاومة الأمراض",
          "تحسين الخصوبة وتنظيم الهرمونات",
          "تعزيز صحة الجلد ومكافحة الشيخوخة",
          "تحسين الذاكرة ووظائف الدماغ",
          "دعم صحة القلب والأوعية الدموية",
          "تقليل أعراض انقطاع الطمث",
          "تعزيز النشاط الجنسي",
        ],
        usage:
          "نصف ملعقة صغيرة (0.5-1 غ) يومياً على الريق. تحت اللسان للامتصاص الأسرع. يحفظ في الثلاجة.",
        origin: "خلايا نحل مراقبة - المغرب",
        nutritionalInfo:
          "يحتوي على حمض 10-هيدروكسي-2-ديسينويك (10-HDA)، بروتينات، فيتامينات B، معادن.",
      },
      fr: {
        name: "Gelée Royale Fraîche",
        shortDescription: "Gelée royale fraîche - la substance magique qui transforme une abeille en reine",
        description:
          "La gelée royale est une substance biologique laiteuse sécrétée par les abeilles pour nourrir les larves de reines. C'est l'une des substances naturelles les plus exceptionnelles sur le plan biologique. Contient le composé unique 10-HDA qui n'existe dans aucune autre source naturelle.",
        benefits: [
          "Renforcement de l'immunité et résistance aux maladies",
          "Amélioration de la fertilité et régulation des hormones",
          "Amélioration de la santé de la peau et anti-âge",
          "Amélioration de la mémoire et des fonctions cérébrales",
          "Soutien de la santé cardiovasculaire",
          "Réduction des symptômes de la ménopause",
          "Renforcement de la vitalité",
        ],
        usage:
          "Une demi-cuillère à café (0,5-1 g) par jour à jeun. Sous la langue pour une absorption plus rapide. Conserver au réfrigérateur.",
        origin: "Ruches surveillées - Maroc",
        nutritionalInfo:
          "Contient l'acide 10-hydroxy-2-décénoïque (10-HDA), protéines, vitamines B, minéraux.",
      },
    },
  },
  {
    id: "11",
    slug: "propolis",
    category: "supplements",
    price: 110,
    weight: "30ml",
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 88,
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "البروبوليس (صمغ النحل)",
        shortDescription: "خلاصة البروبوليس - المضاد الحيوي الطبيعي من خلية النحل",
        description:
          "البروبوليس هو مادة راتنجية تجمعها النحل من البراعم والأشجار وتستخدمها لتعقيم خليتها وحمايتها من الجراثيم. يُعدّ من أقوى المضادات الحيوية الطبيعية المعروفة، ويحتوي على أكثر من 300 مركب مفيد.",
        benefits: [
          "مضاد حيوي طبيعي قوي جداً",
          "علاج التهابات الحلق والفم",
          "تقوية الجهاز المناعي",
          "علاج الجروح والحروق والقروح",
          "مضاد للفيروسات والفطريات",
          "تحسين صحة الأسنان واللثة",
        ],
        usage:
          "10-15 قطرة في كوب ماء ثلاث مرات يومياً. للجروح: ضع مباشرة على المنطقة المصابة. لصحة الفم: اشطف بالمحلول المخفف.",
        origin: "خلايا نحل نقية - المغرب",
      },
      fr: {
        name: "Propolis (Résine d'abeilles)",
        shortDescription: "Extrait de propolis - l'antibiotique naturel de la ruche",
        description:
          "La propolis est une substance résineuse collectée par les abeilles des bourgeons et des arbres, utilisée pour stériliser et protéger leur ruche des germes. C'est l'un des antibiotiques naturels les plus puissants connus, contenant plus de 300 composés bénéfiques.",
        benefits: [
          "Très puissant antibiotique naturel",
          "Traitement des inflammations de la gorge et de la bouche",
          "Renforcement du système immunitaire",
          "Traitement des plaies, brûlures et ulcères",
          "Antiviral et antifongique",
          "Amélioration de la santé dentaire et gingivale",
        ],
        usage:
          "10-15 gouttes dans un verre d'eau trois fois par jour. Pour les plaies: appliquez directement sur la zone affectée. Pour la santé bucco-dentaire: rincez avec la solution diluée.",
        origin: "Ruches pures - Maroc",
      },
    },
  },
  // ── ARGAN COSMETICS (from business card) ─────────────
  {
    id: "12",
    slug: "savon-argan",
    category: "oils",
    price: 45,
    weight: "100g",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 241,
    badge: "organic",
    images: [
      "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "صابون الأركان البيو",
        shortDescription: "صابون طبيعي عضوي مصنوع يدوياً بزيت الأركان الأصيل",
        description:
          "صابون الأركان البيو من تعاونية المولد مصنوع يدوياً بطريقة التبريد البارد (Cold Process) للحفاظ على كل خصائص زيت الأركان. يحتوي على نسبة عالية من زيت الأركان البكر المعصور بارداً، دون مواد كيميائية ضارة. مناسب لجميع أنواع البشرة بما فيها الحساسة.",
        benefits: [
          "ينظف البشرة بلطف دون تجفيفها",
          "يرطب ويغذي البشرة الجافة والحساسة",
          "يقلل من حب الشباب والالتهابات الجلدية",
          "يوحد لون البشرة ويشرّق الوجه",
          "مناسب للبشرة الحساسة والأطفال",
          "100% طبيعي بدون مواد حافظة",
        ],
        usage:
          "يُستخدم يومياً لغسيل الوجه والجسم. رغّدي الصابون بين يديك مع الماء الفاتر وامسحي برفق على البشرة. اشطفي بالماء واتركي البشرة تجف. لأفضل النتائج استخدميه صباحاً ومساءً.",
        origin: "تعاونية المولد — أولاد تايمة",
      },
      fr: {
        name: "Savon d'Argan Bio",
        shortDescription: "Savon naturel bio fait main à l'huile d'argan authentique",
        description:
          "Le savon d'argan bio de la Coopérative Al Mawlid est fabriqué artisanalement par la méthode Cold Process pour préserver toutes les propriétés de l'huile d'argan. Il contient une teneur élevée en huile d'argan vierge pressée à froid, sans produits chimiques nocifs. Convient à tous les types de peau, y compris les peaux sensibles.",
        benefits: [
          "Nettoie la peau en douceur sans la dessécher",
          "Hydrate et nourrit les peaux sèches et sensibles",
          "Réduit l'acné et les inflammations cutanées",
          "Unifie le teint et illumine le visage",
          "Convient aux peaux sensibles et aux enfants",
          "100% naturel sans conservateurs",
        ],
        usage:
          "À utiliser quotidiennement pour le visage et le corps. Faites mousser le savon entre les mains avec de l'eau tiède, appliquez doucement sur la peau. Rincez à l'eau et laissez sécher. Pour de meilleurs résultats, utilisez matin et soir.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
      },
    },
  },
  {
    id: "13",
    slug: "creme-argan",
    category: "oils",
    price: 120,
    comparePrice: 150,
    weight: "50ml",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 183,
    badge: "premium",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    ],
    translations: {
      ar: {
        name: "كريم الأركان البيو",
        shortDescription: "كريم ترطيب فاخر بزيت الأركان المعصور بارداً من أولاد تايمة",
        description:
          "كريم الأركان البيو من تعاونية المولد مُصاغ بتركيز عالٍ من زيت الأركان البكر المعصور على البارد من أشجار الأركان في منطقة أولاد تايمة. يتميز بقوامه الخفيف الذي يُمتص بسرعة دون ترك أثر دهني. مثالي للترطيب اليومي للوجه واليدين والجسم.",
        benefits: [
          "ترطيب عميق ومستدام للبشرة طوال اليوم",
          "تقليل التجاعيد وعلامات التقدم في السن",
          "تفتيح الهالات السوداء وتوحيد اللون",
          "تغذية وتلطيف البشرة الجافة والمتشققة",
          "حماية البشرة من العوامل البيئية",
          "يُمتص بسرعة بدون آثار دهنية",
          "مناسب للاستخدام اليومي صباحاً ومساءً",
        ],
        usage:
          "ضعي كمية صغيرة على أطراف أصابعك ودلّكي برفق على الوجه والرقبة بحركات دائرية صاعدة. يُستخدم صباحاً بعد غسيل الوجه وليلاً قبل النوم. لليدين والجسم: ضعي الكمية المناسبة ودلّكي حتى التشرّب الكامل.",
        origin: "تعاونية المولد — أولاد تايمة",
        nutritionalInfo:
          "مكونات: زيت أركان بكر (40%)، ماء زهر، شمع النحل الطبيعي، زيت جوز الهند، فيتامين E.",
      },
      fr: {
        name: "Crème d'Argan Bio",
        shortDescription: "Crème hydratante luxueuse à l'huile d'argan pressée à froid d'Ouled Taima",
        description:
          "La Crème d'Argan Bio de la Coopérative Al Mawlid est formulée avec une haute concentration d'huile d'argan vierge pressée à froid, issue des arganiers de la région d'Ouled Taima. Sa texture légère s'absorbe rapidement sans laisser de résidu gras. Idéale pour l'hydratation quotidienne du visage, des mains et du corps.",
        benefits: [
          "Hydratation profonde et durable toute la journée",
          "Réduction des rides et signes du vieillissement",
          "Atténuation des cernes et uniformisation du teint",
          "Nourrit et adoucit les peaux sèches et gercées",
          "Protège la peau des agressions environnementales",
          "Absorption rapide sans effet gras",
          "Convient à une utilisation quotidienne matin et soir",
        ],
        usage:
          "Appliquez une petite quantité sur le bout des doigts et massez doucement le visage et le cou par mouvements circulaires ascendants. Le matin après le nettoyage, le soir avant de dormir. Pour les mains et le corps: appliquez la quantité nécessaire et massez jusqu'à absorption complète.",
        origin: "Coopérative Al Mawlid — Ouled Taima",
        nutritionalInfo:
          "Ingrédients: huile d'argan vierge (40%), eau de fleur, cire d'abeille naturelle, huile de coco, vitamine E.",
      },
    },
  },
];

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getProductsByCategory = (category: string) =>
  category === "all" ? products : products.filter((p) => p.category === category);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug) || null;

export const getProductById = (id: string) =>
  products.find((p) => p.id === id) || null;

export const getRelatedProducts = (product: { id: string; category: string }, limit = 3) =>
  products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit);
