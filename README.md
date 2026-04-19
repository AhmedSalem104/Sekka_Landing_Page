# سِكّة — Sekka Landing Page

صفحة هبوط (Landing Page) احترافية لتطبيق **سِكّة** — شريك شغل سائقي الديليفري في مصر.

## المميزات

- **ثنائي اللغة:** عربي (RTL) + إنجليزي (LTR) بتبديل فوري
- **Dark Mode:** مع حفظ الاختيار في localStorage
- **Animations احترافية:** scroll reveals, 3D tilt, counters, typewriter, SVG road animation
- **Responsive:** من الموبايل للديسكتوب
- **أيقونات Iconsax:** نفس عائلة الأيقونات في التطبيق
- **خط Tajawal:** للعربي + Inter للإنجليزي (Google Fonts)

## التقنيات المستخدمة

- **HTML5** — بناء الصفحة
- **Tailwind CSS** (CDN) — التنسيق
- **Vanilla JavaScript** — التفاعلات والـ animations
- **jQuery** — smooth scroll + counters
- **Iconify** — أيقونات Iconsax
- **بدون أي Framework**

## الهوية البصرية

- **اللون الأساسي:** `#FC5D01` (برتقالي)
- **اللون الثانوي:** `#2D3748` (Navy)
- **Gradient:** `#FC5D01` → `#FF8534`
- **الخط:** Tajawal (AR) + Inter (EN)

## البنية

```
.
├── index.html         # الصفحة الرئيسية
├── css/
│   └── style.css      # animations مخصصة + dark mode
├── js/
│   ├── main.js        # interactions + animations
│   ├── i18n.js        # نظام تبديل اللغة
│   └── theme.js       # Dark Mode toggle
└── assets/
    └── logo.png       # لوجو التطبيق
```

## تشغيل الموقع محلياً

ما يحتاج build — فقط افتح `index.html` في المتصفح، أو شغّل سيرفر محلي:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
```

ثم افتح `http://localhost:8000`.

## الأقسام

1. **Navbar** — sticky glassmorphism + lang/theme toggle
2. **Hero** — phone 3D mockup + typewriter + road animation
3. **Problem vs Solution** — مقارنة قبل/بعد
4. **Features Grid** — 8 مميزات
5. **How It Works** — 3 خطوات
6. **Stats** — أرقام متحركة
7. **Testimonials** — آراء السائقين
8. **Download CTA** — روابط المتاجر
9. **Footer** — روابط + تواصل
10. **Sticky Mobile Download** — شريط تحميل للموبايل

## ملاحظات

- روابط Google Play و App Store حالياً `#` (placeholder) — هتتحدّث لما اللينكات تتاح
- الموقع يدعم `prefers-reduced-motion` لاحترام تفضيلات المستخدم

---

صُنع بـ ❤️ في مصر
