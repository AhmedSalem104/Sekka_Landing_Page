/* ============================================
   Sekka - Main JavaScript
   ============================================ */

$(document).ready(function() {

  /* ============================================
     1. Scroll Reveal (IntersectionObserver)
     ============================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Trigger counter if this reveal has counters inside
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(c => animateCounter(c));
        // Trigger compare bar fill
        const bars = entry.target.querySelectorAll('.compare-bar-fill[data-fill]');
        bars.forEach(bar => {
          const pct = bar.getAttribute('data-fill');
          setTimeout(() => { bar.style.width = pct + '%'; }, 150);
        });
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


  /* ============================================
     2. Counter Animation
     ============================================ */
  function animateCounter($el) {
    const el = $el instanceof HTMLElement ? $el : $el.get(0);
    if (!el || el.dataset.counted === '1') return;
    el.dataset.counted = '1';

    const target = parseFloat(el.dataset.count);
    const duration = parseInt(el.dataset.duration || '1800');
    const decimals = parseInt(el.dataset.decimals || '0');
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = target * eased;
      el.textContent = decimals > 0 ? current.toFixed(decimals) : Math.round(current);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals > 0 ? target.toFixed(decimals) : target;
    }
    requestAnimationFrame(tick);
  }


  /* ============================================
     3. Navbar Scroll Effect + Scroll-Spy Active Link
     ============================================ */
  const $navbar = $('#navbar');
  const $progress = $('#scroll-progress');

  // Collect sections and their matching nav links
  const sectionIds = ['home', 'features', 'how', 'testimonials', 'download'];
  const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function updateActiveLink(scrollTop) {
    const viewportMid = scrollTop + window.innerHeight * 0.3;
    let currentId = sectionIds[0];
    for (const sec of sections) {
      const top = sec.offsetTop;
      if (top <= viewportMid) currentId = sec.id;
    }
    navLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      const target = href.replace('#', '');
      link.classList.toggle('active', target === currentId);
    });
  }

  function onScroll() {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height() - $(window).height();
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    $progress.css('width', progress + '%');

    if (scrollTop > 40) $navbar.addClass('scrolled');
    else $navbar.removeClass('scrolled');

    // Sticky download on mobile
    if (scrollTop > 400) $('#sticky-download').addClass('visible');
    else $('#sticky-download').removeClass('visible');

    // Update active nav link based on section in view
    updateActiveLink(scrollTop);
  }
  $(window).on('scroll', onScroll);
  onScroll();


  /* ============================================
     4. Smooth Scroll for Anchor Links
     ============================================ */
  $('a[href^="#"]').on('click', function(e) {
    const href = $(this).attr('href');
    if (href === '#' || href.length < 2) return;
    const $target = $(href);
    if ($target.length) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $target.offset().top - 70
      }, 700, 'swing');
      closeMobileDrawer();
    }
  });


  /* ============================================
     5. Mobile Nav Drawer
     ============================================ */
  const $drawer = $('#mobile-drawer');
  const $backdrop = $('#mobile-backdrop');

  function openMobileDrawer() {
    $drawer.addClass('open');
    $backdrop.addClass('open');
    $('body').addClass('no-scroll');
  }
  function closeMobileDrawer() {
    $drawer.removeClass('open');
    $backdrop.removeClass('open');
    $('body').removeClass('no-scroll');
  }

  $('#hamburger-btn').on('click', openMobileDrawer);
  $('#drawer-close, #mobile-backdrop').on('click', closeMobileDrawer);


  /* ============================================
     6. Phone Mockup 3D Tilt
     ============================================ */
  const phone = document.getElementById('phone-frame');
  if (phone) {
    const wrap = phone.parentElement;
    let rafId = null;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = y * -16;
      targetY = x * 16;
      if (!rafId) rafId = requestAnimationFrame(update);
    });

    wrap.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(update);
    });

    function update() {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      phone.style.transform = `perspective(1200px) rotateX(${currentX}deg) rotateY(${currentY}deg)`;
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(update);
      } else {
        rafId = null;
      }
    }
  }


  /* ============================================
     7. Typewriter Effect (moderate, readable pace)
     ============================================ */
  const typewriterEl = document.getElementById('typewriter');
  if (typewriterEl) {
    const phrasesKeys = ['hero.typewriter.1', 'hero.typewriter.2', 'hero.typewriter.3', 'hero.typewriter.4'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let loopTimer = null;

    // Tuned for moderate, readable pace — same feel typing AND deleting:
    const TYPE_SPEED = 90;      // ms per char while typing
    const DELETE_SPEED = 75;    // ms per char while deleting (nearly equal to typing)
    const END_PAUSE = 2200;     // pause after finishing a phrase (so the reader can absorb it)
    const START_PAUSE = 500;    // pause before starting next phrase

    function getPhrases() {
      return phrasesKeys.map(k => SekkaI18n.t(k));
    }

    function typeLoop() {
      const phrases = getPhrases();
      const current = phrases[phraseIndex] || '';

      if (!isDeleting) {
        charIndex++;
        typewriterEl.textContent = current.substring(0, charIndex);
        if (charIndex >= current.length) {
          isDeleting = true;
          loopTimer = setTimeout(typeLoop, END_PAUSE);
          return;
        }
        loopTimer = setTimeout(typeLoop, TYPE_SPEED);
      } else {
        charIndex--;
        typewriterEl.textContent = current.substring(0, Math.max(charIndex, 0));
        if (charIndex <= 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          loopTimer = setTimeout(typeLoop, START_PAUSE);
          return;
        }
        loopTimer = setTimeout(typeLoop, DELETE_SPEED);
      }
    }

    function restartTypewriter() {
      if (loopTimer) clearTimeout(loopTimer);
      charIndex = 0;
      isDeleting = false;
      phraseIndex = 0;
      typewriterEl.textContent = '';
      loopTimer = setTimeout(typeLoop, 400);
    }

    document.addEventListener('sekka:langchange', restartTypewriter);
    setTimeout(typeLoop, 700);
  }


  /* ============================================
     8. Cursor Follower (Desktop only)
     ============================================ */
  if (window.matchMedia('(min-width: 1025px)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.classList.add('active');
    });

    document.addEventListener('mouseleave', () => cursor.classList.remove('active'));

    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button, .feature-card, .testimonial-card, .store-badge, .icon-btn').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
  }


  /* ============================================
     9. Parallax on Hero Blobs
     ============================================ */
  const blobs = document.querySelectorAll('.hero-blob');
  if (blobs.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      blobs.forEach((blob, i) => {
        const multiplier = (i + 1) * 0.4;
        blob.style.transform = `translate(${x * multiplier}px, ${y * multiplier}px)`;
      });
    });
  }


  /* ============================================
     10. Logo hover rotate
     ============================================ */
  $('.logo-img').on('mouseenter', function() {
    $(this).css('transform', 'rotate(-8deg) scale(1.08)');
  }).on('mouseleave', function() {
    $(this).css('transform', 'rotate(0) scale(1)');
  });


  /* ============================================
     11. Feature Card Tilt
     ============================================ */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.feature-card, .testimonial-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-8px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }


  /* ============================================
     12. Scooter Ride along Road
     ============================================ */
  // Scooter animation triggered by scroll
  const scooterEl = document.getElementById('scooter-sprite');
  const roadSection = document.getElementById('road-section');
  if (scooterEl && roadSection) {
    const scooterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          scooterEl.classList.add('ride');
        }
      });
    }, { threshold: 0.3 });
    scooterObserver.observe(roadSection);
  }


});


/* ============================================
   Export a helper in case other scripts need it
   ============================================ */
window.SekkaMain = {
  closeMobileDrawer: function() {
    document.getElementById('mobile-drawer')?.classList.remove('open');
    document.getElementById('mobile-backdrop')?.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
};
