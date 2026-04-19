/* ============================================
   Sekka - i18n (Bilingual AR/EN)
   ============================================ */

const translations = {
  ar: {
    // Meta
    "meta.title": "سِكّة — شريك شغلك في الديليفري",

    // Nav
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.how": "إزاي يشتغل",
    "nav.testimonials": "آراء السائقين",
    "nav.download": "حمّل التطبيق",
    "nav.cta": "حمّل دلوقتي",

    // Hero
    "hero.title1": "شريك شغلك",
    "hero.title2": "في الديليفري",
    "hero.subtitle": "سكّة مش مجرد تطبيق لتتبع الطلبات — هو ",
    "hero.typewriter.1": "شريك شغل يفكّر معاك",
    "hero.typewriter.2": "بيوفّرلك وقت",
    "hero.typewriter.3": "بيحمي فلوسك",
    "hero.typewriter.4": "بيزوّد دخلك",
    "hero.cta.primary": "حمّل التطبيق",
    "hero.cta.secondary": "اعرف أكتر",
    "hero.store.google.label": "حمّل من",
    "hero.store.google.name": "Google Play",
    "hero.store.apple.label": "حمّل من",
    "hero.store.apple.name": "App Store",
    "hero.badge.rating": "4.9",
    "hero.badge.rating.label": "تقييم السائقين",
    "hero.badge.orders": "+18",
    "hero.badge.orders.label": "طلب يومياً",
    "hero.badge.hours": "-3",
    "hero.badge.hours.label": "ساعات توفير",

    // Phone Mockup UI
    "phone.greeting": "أهلاً يا أحمد 👋",
    "phone.title": "يوم جديد في سكّة",
    "phone.stat.orders.label": "طلبات النهاردة",
    "phone.stat.orders.value": "18/20",
    "phone.stat.earnings.label": "المكسب",
    "phone.stat.earnings.value": "450 ج",
    "phone.order.name": "أحمد محمد",
    "phone.order.addr": "15 ش النصر، المعادي",
    "phone.order.price": "200 ج",
    "phone.order.status": "في السكة",
    "phone.order2.name": "سارة علي",
    "phone.order2.addr": "7 ش التحرير، الدقي",
    "phone.order2.price": "150 ج",
    "phone.order2.status": "جديد",
    "phone.progress.label": "إنجاز النهاردة",
    "phone.progress.value": "85%",
    "phone.nav.home": "الرئيسية",
    "phone.nav.orders": "الطلبات",
    "phone.nav.map": "الخريطة",
    "phone.nav.profile": "حسابي",

    // Problem vs Solution (stat-bar compare)
    "compare.title": "الفرق بيبان في اليوم الأول",
    "compare.subtitle": "شوف يوم السائق بدون سكّة ومعاها",
    "compare.bad.title": "بدون سكّة",
    "compare.good.title": "مع سكّة",
    "compare.metric.orders": "عدد الطلبات اليومي",
    "compare.metric.distance": "المسافة المقطوعة",
    "compare.metric.hours": "ساعات العمل",
    "compare.metric.failed": "طلبات فاشلة",
    "compare.metric.earnings": "معرفة الأرباح",
    "compare.unit.orders": "طلبات",
    "compare.unit.km": "كم",
    "compare.unit.hrs": "ساعات",
    "compare.earnings.bad": "مش متأكد",
    "compare.earnings.good": "لحظية ودقيقة",
    "compare.summary": "ضعف الدخل بنص المجهود",

    // Features
    "features.tag": "إيه اللي يخليك تختار سكّة",
    "features.title": "مميزات مصممة ",
    "features.title.highlight": "للسائق المصري",
    "features.subtitle": "كل ميزة محلولة من مشكلة حقيقية بتقابلك كل يوم",
    "feature.1.title": "نسخ من الواتساب",
    "feature.1.desc": "الصق رسالة الواتساب والتطبيق يقراها ويسجّل الطلب في ثانية — اسم، عنوان، موبايل، مبلغ",
    "feature.2.title": "ترتيب المسار الذكي",
    "feature.2.desc": "بيرتبلك الطلبات بالأقرب والأعجل — وفّر نص المسافة ونص البنزين",
    "feature.3.title": "الإدخال الصوتي",
    "feature.3.desc": "كلّمه وأنت سايق وهو يسجّل — إضافة طلب، تغيير حالة، ملاحظات",
    "feature.4.title": "يشتغل بدون نت",
    "feature.4.desc": "السائق مش دايماً online — التطبيق بيحفظ كل حاجة ويكاملها لما النت يرجع",
    "feature.5.title": "محاسبة دقيقة",
    "feature.5.desc": "تعرف كسبان كام لحظة بلحظة — كاش، تحويل، انستاباي، فودافون كاش",
    "feature.6.title": "حماية من النصب",
    "feature.6.desc": "صور للتسليم، geofencing، توثيق كامل — حقك محفوظ",
    "feature.7.title": "الخرائط المفضلة",
    "feature.7.desc": "Google Maps أو Waze — ضغطة واحدة والعنوان جاهز",
    "feature.8.title": "زر الاستغاثة",
    "feature.8.desc": "SOS button — أمانك أولاً، بيشارك موقعك مع أشخاص تثق فيهم",

    // How It Works
    "how.tag": "3 خطوات بسيطة",
    "how.title": "إزاي سكّة ",
    "how.title.highlight": "بتشتغل",
    "how.subtitle": "من الصبح للمسا بـ 3 خطوات بس",
    "how.1.title": "ضيف الطلبات",
    "how.1.desc": "الصق من الواتساب، أو كلّمه صوتياً، أو اكتب يدوي — براحتك",
    "how.2.title": "التطبيق يرتبلك",
    "how.2.desc": "المسار الأذكى، الطلب الأقرب، التوقيت الأمثل — كله بـ AI",
    "how.3.title": "توصل وتكسب أكتر",
    "how.3.desc": "+10 طلبات يومياً، محاسبة دقيقة، وأنت مرتاح البال",

    // Stats
    "stats.title": "الأرقام بتتكلم",
    "stats.subtitle": "نتايج حقيقية من سائقين بيستخدموا سكّة",
    "stats.1.value": "3",
    "stats.1.prefix": "+",
    "stats.1.suffix": " ساعات",
    "stats.1.label": "توفير يومي",
    "stats.2.value": "10",
    "stats.2.prefix": "+",
    "stats.2.suffix": " طلبات",
    "stats.2.label": "إضافية يومياً",
    "stats.3.value": "50",
    "stats.3.prefix": "-",
    "stats.3.suffix": "%",
    "stats.3.label": "مسافة أقل",
    "stats.4.value": "2",
    "stats.4.prefix": "",
    "stats.4.suffix": "x",
    "stats.4.label": "ضعف الدخل",

    // Testimonials
    "testimonials.tag": "آراء حقيقية",
    "testimonials.title": "السائقين ",
    "testimonials.title.highlight": "بيحبوا سكّة",
    "testimonials.subtitle": "شوف إيه اللي بيقولوه سائقينا عن التطبيق",
    "t.1.name": "أحمد محمد",
    "t.1.role": "سائق مستقل — القاهرة",
    "t.1.quote": "وفرت ساعتين في اليوم، وبعرف كسبي بالظبط. ده بقى شريك شغلي الحقيقي.",
    "t.2.name": "محمود علي",
    "t.2.role": "سائق طلبات — المعادي",
    "t.2.quote": "النسخ من الواتساب غيّر حياتي. بعمل 30 طلب في اليوم بدل 15، ومفيش تعب.",
    "t.3.name": "سارة حسن",
    "t.3.role": "سائقة مستقلة — الإسكندرية",
    "t.3.quote": "لما بسوق، بكلّمه بس وهو بيسجّل كل حاجة. أمان + سرعة = سكّة.",
    "t.rating": "⭐⭐⭐⭐⭐",

    // Download CTA
    "cta.tag": "ابدأ دلوقتي",
    "cta.title": "جاهز تبدأ يومك مع ",
    "cta.title.highlight": "سِكّة؟",
    "cta.subtitle": "حمّل التطبيق دلوقتي وابدأ توفّر وقتك وتزوّد دخلك من أول يوم",
    "cta.note": "مجاني للسائقين — مفيش اشتراكات مخفية",

    // Footer
    "footer.about.title": "عن سِكّة",
    "footer.about.desc": "شريك شغلك في الديليفري. بنخلي يومك أسهل، أسرع، وأكتر ربحاً.",
    "footer.links.title": "روابط سريعة",
    "footer.contact.title": "تواصل معانا",
    "footer.contact.email": "appsekka@gmail.com",
    "footer.contact.phone": "01015819700",
    "footer.download.title": "حمّل التطبيق",
    "footer.copyright": "© 2026 سِكّة — جميع الحقوق محفوظة",
    "footer.made": "صُنع بـ ❤️ في مصر",

    // Sticky
    "sticky.text": "حمّل التطبيق",
    "sticky.cta": "حمّل دلوقتي",
  },

  en: {
    // Meta
    "meta.title": "Sekka — Your Delivery Work Partner",

    // Nav
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.how": "How It Works",
    "nav.testimonials": "Testimonials",
    "nav.download": "Download",
    "nav.cta": "Download Now",

    // Hero
    "hero.title1": "Your Delivery",
    "hero.title2": "Work Partner",
    "hero.subtitle": "Sekka is more than a tracking app — it's ",
    "hero.typewriter.1": "A partner that thinks with you",
    "hero.typewriter.2": "Saves your time",
    "hero.typewriter.3": "Protects your money",
    "hero.typewriter.4": "Boosts your income",
    "hero.cta.primary": "Download App",
    "hero.cta.secondary": "Learn More",
    "hero.store.google.label": "GET IT ON",
    "hero.store.google.name": "Google Play",
    "hero.store.apple.label": "Download on the",
    "hero.store.apple.name": "App Store",
    "hero.badge.rating": "4.9",
    "hero.badge.rating.label": "Driver Rating",
    "hero.badge.orders": "+18",
    "hero.badge.orders.label": "Orders / day",
    "hero.badge.hours": "-3",
    "hero.badge.hours.label": "Hours Saved",

    // Phone Mockup UI
    "phone.greeting": "Hi Ahmed 👋",
    "phone.title": "A new day with Sekka",
    "phone.stat.orders.label": "Today's Orders",
    "phone.stat.orders.value": "18/20",
    "phone.stat.earnings.label": "Earnings",
    "phone.stat.earnings.value": "450 EGP",
    "phone.order.name": "Ahmed Mohamed",
    "phone.order.addr": "15 Nasr St., Maadi",
    "phone.order.price": "200 EGP",
    "phone.order.status": "En route",
    "phone.order2.name": "Sara Ali",
    "phone.order2.addr": "7 Tahrir St., Dokki",
    "phone.order2.price": "150 EGP",
    "phone.order2.status": "New",
    "phone.progress.label": "Today's Progress",
    "phone.progress.value": "85%",
    "phone.nav.home": "Home",
    "phone.nav.orders": "Orders",
    "phone.nav.map": "Map",
    "phone.nav.profile": "Profile",

    // Problem vs Solution (stat-bar compare)
    "compare.title": "See the Difference on Day One",
    "compare.subtitle": "A driver's day — with and without Sekka",
    "compare.bad.title": "Without Sekka",
    "compare.good.title": "With Sekka",
    "compare.metric.orders": "Daily Orders",
    "compare.metric.distance": "Distance Traveled",
    "compare.metric.hours": "Working Hours",
    "compare.metric.failed": "Failed Deliveries",
    "compare.metric.earnings": "Earnings Visibility",
    "compare.unit.orders": "orders",
    "compare.unit.km": "km",
    "compare.unit.hrs": "hrs",
    "compare.earnings.bad": "Uncertain",
    "compare.earnings.good": "Live & accurate",
    "compare.summary": "2× income with half the effort",

    // Features
    "features.tag": "Why Choose Sekka",
    "features.title": "Features built for the ",
    "features.title.highlight": "real driver",
    "features.subtitle": "Every feature solves a problem you face every day",
    "feature.1.title": "Paste from WhatsApp",
    "feature.1.desc": "Paste a message and Sekka reads it — name, address, phone, amount — in one second",
    "feature.2.title": "Smart Routing",
    "feature.2.desc": "Orders sorted by closest and most urgent — save half your distance and fuel",
    "feature.3.title": "Voice Input",
    "feature.3.desc": "Talk while driving — add orders, change status, write notes, all hands-free",
    "feature.4.title": "Works Offline",
    "feature.4.desc": "Drivers aren't always online — Sekka saves everything and syncs when you reconnect",
    "feature.5.title": "Accurate Accounting",
    "feature.5.desc": "Track earnings live — cash, transfer, InstaPay, Vodafone Cash, all in one view",
    "feature.6.title": "Fraud Protection",
    "feature.6.desc": "Delivery photos, geofencing, full documentation — your rights are protected",
    "feature.7.title": "Your Favorite Maps",
    "feature.7.desc": "Google Maps or Waze — one tap and the address is ready to navigate",
    "feature.8.title": "SOS Button",
    "feature.8.desc": "Your safety first — share your location with trusted contacts instantly",

    // How It Works
    "how.tag": "3 Simple Steps",
    "how.title": "How ",
    "how.title.highlight": "Sekka works",
    "how.subtitle": "From morning to evening in just 3 steps",
    "how.1.title": "Add Your Orders",
    "how.1.desc": "Paste from WhatsApp, speak them, or type manually — your choice",
    "how.2.title": "Sekka Plans It",
    "how.2.desc": "Smartest route, closest order, best timing — all powered by AI",
    "how.3.title": "Deliver & Earn More",
    "how.3.desc": "+10 orders a day, accurate accounting, and total peace of mind",

    // Stats
    "stats.title": "The Numbers Speak",
    "stats.subtitle": "Real results from drivers using Sekka",
    "stats.1.value": "3",
    "stats.1.prefix": "+",
    "stats.1.suffix": " hrs",
    "stats.1.label": "Saved Daily",
    "stats.2.value": "10",
    "stats.2.prefix": "+",
    "stats.2.suffix": "",
    "stats.2.label": "Extra Orders / Day",
    "stats.3.value": "50",
    "stats.3.prefix": "-",
    "stats.3.suffix": "%",
    "stats.3.label": "Less Distance",
    "stats.4.value": "2",
    "stats.4.prefix": "",
    "stats.4.suffix": "x",
    "stats.4.label": "More Income",

    // Testimonials
    "testimonials.tag": "Real Reviews",
    "testimonials.title": "Drivers ",
    "testimonials.title.highlight": "love Sekka",
    "testimonials.subtitle": "See what our drivers say about the app",
    "t.1.name": "Ahmed Mohamed",
    "t.1.role": "Independent Driver — Cairo",
    "t.1.quote": "I save 2 hours a day and know my earnings exactly. This is my real work partner.",
    "t.2.name": "Mahmoud Ali",
    "t.2.role": "Delivery Driver — Maadi",
    "t.2.quote": "Paste-from-WhatsApp changed my life. 30 orders a day instead of 15 — no stress.",
    "t.3.name": "Sara Hassan",
    "t.3.role": "Independent Driver — Alexandria",
    "t.3.quote": "While driving, I just talk and it logs everything. Safety + speed = Sekka.",
    "t.rating": "⭐⭐⭐⭐⭐",

    // Download CTA
    "cta.tag": "Get Started Now",
    "cta.title": "Ready to start your day with ",
    "cta.title.highlight": "Sekka?",
    "cta.subtitle": "Download now and start saving time and boosting your income from day one",
    "cta.note": "Free for drivers — no hidden subscriptions",

    // Footer
    "footer.about.title": "About Sekka",
    "footer.about.desc": "Your delivery work partner. We make your day easier, faster, and more profitable.",
    "footer.links.title": "Quick Links",
    "footer.contact.title": "Contact Us",
    "footer.contact.email": "appsekka@gmail.com",
    "footer.contact.phone": "01015819700",
    "footer.download.title": "Get the App",
    "footer.copyright": "© 2026 Sekka — All rights reserved",
    "footer.made": "Made with ❤️ in Egypt",

    // Sticky
    "sticky.text": "Get the App",
    "sticky.cta": "Download",
  }
};

const SekkaI18n = {
  current: 'ar',

  init() {
    const saved = localStorage.getItem('sekka-lang');
    this.current = saved === 'en' ? 'en' : 'ar';
    this.apply(this.current, false);
    this.bindToggle();
  },

  bindToggle() {
    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-lang-switch');
        if (target && target !== this.current) {
          this.apply(target, true);
        }
      });
    });
  },

  apply(lang, animate) {
    this.current = lang;
    const isRtl = lang === 'ar';
    const html = document.documentElement;
    const body = document.body;

    html.setAttribute('lang', lang);
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    body.classList.toggle('rtl', isRtl);
    body.classList.toggle('ltr', !isRtl);

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = translations[lang][key];
      if (value !== undefined) {
        el.textContent = value;
      }
    });

    // Attribute translations (placeholder, aria-label, title, alt)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const raw = el.getAttribute('data-i18n-attr');
      raw.split(',').forEach(pair => {
        const [attr, key] = pair.trim().split(':');
        const value = translations[lang][key];
        if (value !== undefined && attr) {
          el.setAttribute(attr.trim(), value);
        }
      });
    });

    // Update active language button
    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-switch') === lang);
    });

    // Update title
    document.title = translations[lang]['meta.title'] || document.title;

    // Animate transition
    if (animate) {
      body.style.opacity = '0';
      body.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        body.style.opacity = '1';
      }, 100);
    }

    localStorage.setItem('sekka-lang', lang);

    // Broadcast
    document.dispatchEvent(new CustomEvent('sekka:langchange', { detail: { lang } }));
  },

  t(key) {
    return translations[this.current][key] || key;
  }
};

document.addEventListener('DOMContentLoaded', () => SekkaI18n.init());
