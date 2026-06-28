import {
  enalaPropertyIds,
  roleIds,
  statIds,
  timelineIds,
  valueIds,
  visionPointIds,
  testimonialIds,
  socialLinkIds,
} from "@/lib/data";

export const translations = {
  ar: {
    meta: {
      title: "فالح عبدالله الفالح | رئيس تنفيذي — رئيس لجنة السياحة",
      description:
        "الصفحة التعريفية لأ. فالح عبدالله الفالح — المؤسس والرئيس التنفيذي لمجموعة إناله للفنادق والمنتجعات، رئيس لجنة السياحة والترفيه والفعاليات في غرفة الرياض، وعضو مجلس إدارة نادي الشباب السعودي.",
    },
    nav: {
      brand: "فالح الفالح",
      home: "الرئيسية",
      about: "من هو",
      roles: "مناصبه",
      journey: "مسيرته",
      vision: "رؤيته",
      portfolio: "إناله",
      contact: "تواصل",
      menu: "القائمة",
      langSwitch: "English",
    },
    hero: {
      location: "الرياض، المملكة العربية السعودية",
      honorific: "سعادته",
      officialTitle: "سعادة الرئيس التنفيذي",
      namePrefix: "الأستاذ",
      name: "فالح عبدالله الفالح",
      fullName: "الأستاذ فالح عبدالله الفالح",
      nameSecondary: "Faleh Abdullah Al Falih",
      credentials: [
        "المؤسس والرئيس التنفيذي — مجموعة إناله للفنادق والمنتجعات",
        "رئيس لجنة السياحة والترفيه والفعاليات — غرفة الرياض",
        "عضو مجلس إدارة — نادي الشباب السعودي",
      ],
      tagline: "قائد أعمال • رائد ضيافة • صوت قطاع السياحة",
      ctaExplore: "اكتشف المزيد",
      ctaEnala: "مجموعة إناله",
      scroll: "مرّر للأسفل",
    },
    about: {
      label: "من هو",
      title: "رجل أعمال، رؤية، وإنجاز",
      subtitle:
        "من عصامٍ مثابر إلى قائد يقود قطاع الضيافة والسياحة في المملكة",
      bio: "رجل أعمال سعودي بارز، يجمع بين رؤية استراتيجية عميقة وخبرة عملية واسعة في قطاعي الضيافة والسياحة. مؤسس مجموعة إناله للفنادق والمنتجعات، ورئيس لجنة السياحة والترفيه والفعاليات في غرفة الرياض، وعضو مجلس إدارة نادي الشباب السعودي. يُعرف بأنه رجل الأفعال والوفاء، ويقود بإخلاص نحو تحقيق رؤية المملكة 2030.",
      nickname: "أبو عبدالله",
      shortBio:
        "من عصامٍ مثابر إلى رجل أعمال ناجح، يقود اليوم أحد أبرز مجموعات الضيافة السعودية ويمثل قطاع السياحة والترفيه في غرفة الرياض.",
      gallery: {
        shabab: "عضو مجلس إدارة نادي الشباب",
        election: "عضوية لجنة السياحة — غرفة الرياض",
        character: "رجل الأفعال والوفاء",
      },
    },
    values: {
      [valueIds[0]]: { title: "الإخلاص", description: "العمل بإخلاص لتمثيل القطاعات بما يليق بالمملكة." },
      [valueIds[1]]: { title: "الوفاء", description: "رجل الأفعال والوفاء، معروف بالتزامه تجاه من يخدم." },
      [valueIds[2]]: { title: "التميز", description: "السعي الدائم نحو أعلى المعايير العالمية في الضيافة." },
      [valueIds[3]]: { title: "الريادة", description: "قيادة التغيير في قطاع السياحة والترفيه والفعاليات." },
    },
    roles: {
      label: "مناصبه القيادية",
      title: "أدوار، مسؤوليات، وتأثير",
      subtitle: "قيادة متعددة الأبعاد في الضيافة والسياحة والرياضة",
      visitSite: "زيارة الموقع",
      [roleIds[0]]: {
        title: "المؤسس والرئيس التنفيذي",
        org: "مجموعة إناله للفنادق والمنتجعات",
        description:
          "يقود مجموعة سعودية رائدة في إدارة وتشغيل الفنادق والمنتجعات، تأسست عام 2013، وتغطي وجهات متعددة في المملكة بهوية سعودية ومعايير عالمية.",
      },
      [roleIds[1]]: {
        title: "رئيس لجنة السياحة والترفيه والفعاليات",
        org: "غرفة الرياض",
        description:
          "انتُخب رئيساً للجنة في فبراير 2025، لتمثيل قطاع السياحة والترفيه والفعاليات ودفع نموه بما يتوافق مع مستهدفات رؤية 2030.",
      },
      [roleIds[2]]: {
        title: "عضو مجلس الإدارة",
        org: "نادي الشباب السعودي",
        description:
          "تشرّف بخدمة نادي الشباب، كيان عريق يحمل إرثاً شامخاً، ويسعى لتقديم كل ما لديه لخدمة النادي وجمهوره الوفي.",
      },
      [roleIds[3]]: {
        title: "المؤسس",
        org: "شركة الأثاث المتقدم",
        description:
          "مؤسس شركة متخصصة في حلول الأثاث المتقدمة، تجسّد تنوع رؤية رجل الأعمال السعودي.",
      },
    },
    stats: {
      label: "أرقام تتحدث",
      title: "إنجازات بالأرقام",
      [statIds[0]]: "سنة في قطاع الضيافة",
      [statIds[1]]: "فندق ومنتجع",
      [statIds[2]]: "مدن سعودية",
      [statIds[3]]: "مناصب قيادية رئيسية",
    },
    journey: {
      label: "مسيرته",
      title: "خط زمني للإنجازات",
      subtitle: "من حلم في 1429هـ إلى قيادة قطاع السياحة والضيافة في المملكة",
      [timelineIds[0]]: { title: "بذرة الحلم", description: "كانت إناله حلماً نطمح إليه — رؤية لشركة سعودية رائدة في الضيافة." },
      [timelineIds[1]]: { title: "انطلاق إناله", description: "البداية الفعلية لمجموعة إناله للفنادق والمنتجعات في المملكة العربية السعودية." },
      [timelineIds[2]]: { title: "مشاريع كبرى", description: "استلام مشاريع ضخمة تتماشى مع المعايير العالمية بهوية سعودية أصيلة." },
      [timelineIds[3]]: { title: "عضوية لجنة السياحة", description: "فوز بعضوية لجنة السياحة والترفيه والفعاليات في غرفة الرياض." },
      [timelineIds[4]]: { title: "رئيس اللجنة", description: "انتُخب رئيساً للجنة السياحة والترفيه والفعاليات بغرفة الرياض." },
      [timelineIds[5]]: { title: "مجلس إدارة الشباب", description: "تكلّف عضواً في مجلس إدارة نادي الشباب السعودي — كبير العاصمة." },
    },
    vision: {
      label: "رؤيته",
      title: "نحو مستقبل السياحة السعودية",
      subtitle: "التزام عميق برؤية المملكة 2030 وتمكين السياحة الداخلية",
      [visionPointIds[0]]: { title: "السياحة الداخلية", description: "أن تكون إناله في الصف الأول داعمة للسياحة الداخلية في المملكة." },
      [visionPointIds[1]]: { title: "رؤية 2030", description: "التوافق الكامل مع مستهدفات رؤية المملكة 2030 في قطاع السياحة والضيافة." },
      [visionPointIds[2]]: { title: "الخيار الأول", description: "السعي لأن نكون الخيار الأول لكل سائح وكل فرد من مجتمعنا." },
      [visionPointIds[3]]: { title: "هوية سعودية", description: "تقديم تجربة ضيافة عالمية المستوى بهوية سعودية أصيلة." },
      quote: {
        text: "كانت إناله ومنذ عام 1429 حلماً نطمح إليه، وفي عام 1434 كانت البداية. هدفنا أن تكون إناله من أفضل الشركات لتشغيل الفنادق والمنتجعات بتنوع جغرافي يغطي المملكة بأكملها. والحمد لله، بعد سنوات من العمل المتواصل تحقق الحلم باستلام مشاريع كبرى تتماشى مع المعايير العالمية بهوية سعودية. والآن هدفنا الأسمى أن تكون إناله في الصف الأول داعمة للسياحة الداخلية ومتوافقة مع رؤية المملكة 2030.",
        source: "كلمة الرئيس التنفيذي — enala.sa",
        readMore: "اقرأ المزيد",
      },
    },
    testimonials: {
      label: "شهادات وتقدير",
      title: "كلمات من حوله",
      subtitle: "ما يقوله الآخرون عن فالح الفالح — رجل الأفعال والوفاء",
      [testimonialIds[0]]: {
        quote: "عرفت أخي فالح الفالح عصامياً مثابراً، وهو رجل أعمال ناجح ورجل أفعال ووفاء — جوهرة معطاء نادرة الوجود.",
        author: "عامر الغفيلي",
        context: "تهنئة بمناسبة عضوية مجلس إدارة نادي الشباب",
      },
      [testimonialIds[1]]: {
        quote: "فوز يعكس الالتزام المستمر بتعزيز وتطوير قطاع السياحة ودعم الابتكار والتنمية في هذا المجال.",
        author: "مجموعة إناله للفنادق والمنتجعات",
        context: "تهنئة برئاسة لجنة السياحة — غرفة الرياض",
      },
      [testimonialIds[2]]: {
        quote: "قائد صاحب رؤية حقيقية. نسأل الله له مزيداً من التوفيق والسعادة.",
        author: "Mohammed Imtiaz Nehal",
        context: "تهنئة بعضوية لجنة السياحة — غرفة الرياض",
      },
    },
    portfolio: {
      label: "مجموعة إناله",
      title: "فنادق، منتجعات، ووجهات",
      subtitle: "محفظة متنوعة من الفنادق والمنتجعات في أبرز مدن المملكة",
      explore: "استكشف مجموعة إناله",
      types: { resort: "منتجع", hotel: "فندق", apartments: "شقق فندقية" },
      [enalaPropertyIds[0]]: { name: "منتجع كيو ريزورت", city: "الرياض" },
      [enalaPropertyIds[1]]: { name: "برايفت ريزورت", city: "الرياض" },
      [enalaPropertyIds[2]]: { name: "ذا ون ريزورت", city: "الرياض" },
      [enalaPropertyIds[3]]: { name: "منتجع كلاود ريزورت", city: "الرياض" },
      [enalaPropertyIds[4]]: { name: "فندق إناله الخبر", city: "الخبر" },
      [enalaPropertyIds[5]]: { name: "فندق إناله أملج", city: "أملج" },
      [enalaPropertyIds[6]]: { name: "فندق إرفاد الربيع", city: "الرياض" },
      [enalaPropertyIds[7]]: { name: "إناله للشقق الفندقية — تبوك", city: "تبوك" },
    },
    contact: {
      label: "تواصل",
      title: "ابقَ على تواصل",
      subtitle: "تابع آخر أخبار وإنجازات فالح الفالح",
      followX: "تابع على X",
      social: {
        [socialLinkIds[0]]: "X (تويتر)",
        [socialLinkIds[1]]: "إناله",
        [socialLinkIds[2]]: "إناله — X",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة",
    },
  },
  en: {
    meta: {
      title: "Faleh Abdullah Al Falih | CEO — Tourism Committee Chairman",
      description:
        "Official profile of Mr. Faleh Abdullah Al Falih — Founder & CEO of Enala Hotels & Resorts, Chairman of the Tourism, Entertainment and Events Committee at Riyadh Chamber, and Board Member of Al Shabab Saudi FC.",
    },
    nav: {
      brand: "Faleh Al Falih",
      home: "Home",
      about: "About",
      roles: "Roles",
      journey: "Journey",
      vision: "Vision",
      portfolio: "Enala",
      contact: "Contact",
      menu: "Menu",
      langSwitch: "العربية",
    },
    hero: {
      location: "Riyadh, Kingdom of Saudi Arabia",
      honorific: "His Excellency",
      officialTitle: "Chief Executive Officer",
      namePrefix: "Mr.",
      name: "Faleh Abdullah Al Falih",
      fullName: "Mr. Faleh Abdullah Al Falih",
      nameSecondary: "فالح عبدالله الفالح",
      credentials: [
        "Founder & CEO — Enala Hotels & Resorts",
        "Chairman — Tourism, Entertainment & Events Committee, Riyadh Chamber",
        "Board Member — Al Shabab Saudi FC",
      ],
      tagline: "Business Leader • Hospitality Pioneer • Voice of Tourism",
      ctaExplore: "Discover More",
      ctaEnala: "Enala Group",
      scroll: "Scroll Down",
    },
    about: {
      label: "About",
      title: "Businessman, Vision, Achievement",
      subtitle:
        "From a persevering self-made entrepreneur to a leader shaping hospitality and tourism in the Kingdom",
      bio: "A distinguished Saudi businessman combining deep strategic vision with extensive practical experience in hospitality and tourism. Founder and CEO of Enala Hotels & Resorts, Chairman of the Tourism, Entertainment and Events Committee at Riyadh Chamber, and Board Member of Al Shabab Saudi FC. Known as a man of action and loyalty, he leads with dedication toward Vision 2030.",
      nickname: "Abu Abdullah",
      shortBio:
        "From a persevering self-starter to a successful businessman, he now leads one of Saudi Arabia's foremost hospitality groups and represents the tourism sector at Riyadh Chamber.",
      gallery: {
        shabab: "Al Shabab FC Board Member",
        election: "Tourism Committee — Riyadh Chamber",
        character: "A Man of Action & Loyalty",
      },
    },
    values: {
      [valueIds[0]]: { title: "Dedication", description: "Serving sectors with sincerity befitting the Kingdom." },
      [valueIds[1]]: { title: "Loyalty", description: "A man of action and loyalty, committed to those he serves." },
      [valueIds[2]]: { title: "Excellence", description: "Relentless pursuit of world-class hospitality standards." },
      [valueIds[3]]: { title: "Leadership", description: "Driving change in tourism, entertainment, and events." },
    },
    roles: {
      label: "Leadership Roles",
      title: "Roles, Responsibilities & Impact",
      subtitle: "Multi-dimensional leadership in hospitality, tourism, and sports",
      visitSite: "Visit Website",
      [roleIds[0]]: {
        title: "Founder & CEO",
        org: "Enala Hotels & Resorts",
        description:
          "Leads a pioneering Saudi group in hotel and resort management, founded in 2013, covering multiple destinations across the Kingdom with Saudi identity and global standards.",
      },
      [roleIds[1]]: {
        title: "Chairman, Tourism, Entertainment & Events Committee",
        org: "Riyadh Chamber",
        description:
          "Elected Chairman in February 2025 to represent and grow the tourism, entertainment, and events sector in line with Vision 2030 targets.",
      },
      [roleIds[2]]: {
        title: "Board Member",
        org: "Al Shabab Saudi FC",
        description:
          "Honored to serve Al Shabab, a club with a proud legacy, dedicated to giving his all for the club and its loyal fans.",
      },
      [roleIds[3]]: {
        title: "Founder",
        org: "Advanced Furniture Solutions",
        description:
          "Founder of a company specializing in advanced furniture solutions, reflecting the breadth of a Saudi business vision.",
      },
    },
    stats: {
      label: "By the Numbers",
      title: "Achievements in Numbers",
      [statIds[0]]: "Years in Hospitality",
      [statIds[1]]: "Hotels & Resorts",
      [statIds[2]]: "Saudi Cities",
      [statIds[3]]: "Key Leadership Roles",
    },
    journey: {
      label: "Journey",
      title: "Timeline of Achievements",
      subtitle: "From a dream in 1429 AH to leading tourism and hospitality in the Kingdom",
      [timelineIds[0]]: { title: "Seed of a Dream", description: "Enala began as a dream — a vision for a leading Saudi hospitality company." },
      [timelineIds[1]]: { title: "Enala Launch", description: "The official launch of Enala Hotels & Resorts in the Kingdom of Saudi Arabia." },
      [timelineIds[2]]: { title: "Major Projects", description: "Taking on large-scale projects aligned with global standards and authentic Saudi identity." },
      [timelineIds[3]]: { title: "Committee Membership", description: "Elected to the Tourism, Entertainment and Events Committee at Riyadh Chamber." },
      [timelineIds[4]]: { title: "Committee Chairman", description: "Elected Chairman of the Tourism, Entertainment and Events Committee at Riyadh Chamber." },
      [timelineIds[5]]: { title: "Al Shabab Board", description: "Appointed to the Board of Directors of Al Shabab Saudi FC — the Capital's Giant." },
    },
    vision: {
      label: "Vision",
      title: "Toward the Future of Saudi Tourism",
      subtitle: "Deep commitment to Vision 2030 and domestic tourism empowerment",
      [visionPointIds[0]]: { title: "Domestic Tourism", description: "Enala at the forefront of supporting domestic tourism in the Kingdom." },
      [visionPointIds[1]]: { title: "Vision 2030", description: "Full alignment with Vision 2030 targets in tourism and hospitality." },
      [visionPointIds[2]]: { title: "First Choice", description: "Striving to be the first choice for every traveler and every member of our community." },
      [visionPointIds[3]]: { title: "Saudi Identity", description: "Delivering world-class hospitality with authentic Saudi identity." },
      quote: {
        text: "Since 1429 AH, Enala has been a dream we aspired to, and in 1434 AH it became reality. Our goal is for Enala to be among the best companies operating hotels and resorts with geographic diversity covering the entire Kingdom. By the grace of God, after years of continuous work, the dream was realized through major projects aligned with global standards and Saudi identity. Now our highest goal is for Enala to be at the forefront, supporting domestic tourism in line with Vision 2030.",
        source: "CEO Address — enala.sa",
        readMore: "Read More",
      },
    },
    testimonials: {
      label: "Recognition",
      title: "Words About Him",
      subtitle: "What others say about Faleh Al Falih — a man of action and loyalty",
      [testimonialIds[0]]: {
        quote: "I have known my brother Faleh Al Falih as a persevering self-starter — a successful businessman and man of action and loyalty. A rare, generous gem.",
        author: "Amer Al-Ghfaili",
        context: "Congratulations on Al Shabab FC Board membership",
      },
      [testimonialIds[1]]: {
        quote: "A victory reflecting continuous commitment to developing the tourism sector and supporting innovation and growth.",
        author: "Enala Hotels & Resorts",
        context: "Congratulations on Tourism Committee Chairmanship — Riyadh Chamber",
      },
      [testimonialIds[2]]: {
        quote: "A visionary and true leader. May Allah grant him more success and happiness.",
        author: "Mohammed Imtiaz Nehal",
        context: "Congratulations on Tourism Committee membership — Riyadh Chamber",
      },
    },
    portfolio: {
      label: "Enala Group",
      title: "Hotels, Resorts & Destinations",
      subtitle: "A diverse portfolio of hotels and resorts across the Kingdom's leading cities",
      explore: "Explore Enala Group",
      types: { resort: "Resort", hotel: "Hotel", apartments: "Serviced Apartments" },
      [enalaPropertyIds[0]]: { name: "Q Resort", city: "Riyadh" },
      [enalaPropertyIds[1]]: { name: "Private Resort", city: "Riyadh" },
      [enalaPropertyIds[2]]: { name: "The One Resort", city: "Riyadh" },
      [enalaPropertyIds[3]]: { name: "Cloud Resort", city: "Riyadh" },
      [enalaPropertyIds[4]]: { name: "Enala Al Khobar Hotel", city: "Al Khobar" },
      [enalaPropertyIds[5]]: { name: "Enala Umluj Hotel", city: "Umluj" },
      [enalaPropertyIds[6]]: { name: "Erfad Al Rabie Hotel", city: "Riyadh" },
      [enalaPropertyIds[7]]: { name: "Enala Serviced Apartments — Tabuk", city: "Tabuk" },
    },
    contact: {
      label: "Contact",
      title: "Stay Connected",
      subtitle: "Follow the latest news and achievements of Faleh Al Falih",
      followX: "Follow on X",
      social: {
        [socialLinkIds[0]]: "X (Twitter)",
        [socialLinkIds[1]]: "Enala",
        [socialLinkIds[2]]: "Enala — X",
      },
    },
    footer: {
      rights: "All rights reserved",
    },
  },
} as const;

export type Translations = (typeof translations)["ar"];
