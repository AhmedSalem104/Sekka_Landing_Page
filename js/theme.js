/* ============================================
   Sekka - Theme (Dark Mode)
   ============================================ */

const SekkaTheme = {
  init() {
    const saved = localStorage.getItem('sekka-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');

    this.apply(initial, false);
    this.bindToggle();
  },

  apply(theme, animate) {
    const html = document.documentElement;
    html.classList.toggle('dark', theme === 'dark');

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('data-theme', theme);
      const sun = btn.querySelector('[data-icon="sun"]');
      const moon = btn.querySelector('[data-icon="moon"]');
      if (sun && moon) {
        sun.style.display = theme === 'dark' ? 'block' : 'none';
        moon.style.display = theme === 'dark' ? 'none' : 'block';
      }
    });

    if (animate) {
      document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    }

    localStorage.setItem('sekka-theme', theme);
    document.dispatchEvent(new CustomEvent('sekka:themechange', { detail: { theme } }));
  },

  toggle() {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    this.apply(current === 'dark' ? 'light' : 'dark', true);
  },

  bindToggle() {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    });
  }
};

// Apply saved theme BEFORE DOMContentLoaded to prevent flash
(function earlyTheme() {
  try {
    const saved = localStorage.getItem('sekka-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((saved || (prefersDark ? 'dark' : 'light')) === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', () => SekkaTheme.init());
