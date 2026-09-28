// Professional, subtle motion built on anime.js (animejs.com).
// One-shot entrances only: fade + rise, outExpo easing. No loops, no bounce.
import { animate, stagger } from 'animejs';

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Scroll-direction tracker (single passive listener, rAF-throttled) ---- */
let scrollDirection = 'down';
let trackerInit = false;
function ensureScrollTracker() {
  if (trackerInit || typeof window === 'undefined') return;
  trackerInit = true;
  let lastY = window.scrollY;
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) > 4) {
          scrollDirection = y > lastY ? 'down' : 'up';
          lastY = y;
        }
        ticking = false;
      });
    },
    { passive: true }
  );
}

/** Staggered entrance for hero content. Run once on mount. */
export function heroEntrance(root) {
  if (!root || prefersReduced()) return;
  const items = root.querySelectorAll('[data-hero]');
  if (items.length) {
    animate(items, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 850,
      delay: stagger(95),
      easing: 'outExpo',
    });
  }
  const media = root.querySelector('[data-hero-media]');
  if (media) {
    animate(media, {
      opacity: [0, 1],
      scale: [1.045, 1],
      duration: 1200,
      easing: 'outExpo',
    });
  }
}

/** Fade-on-scroll for `.reveal` elements.
 *  Direction-aware: scrolling down → content rises up;
 *  scrolling up → content settles down from above.
 *  Returns a cleanup fn. */
export function initScrollReveals() {
  ensureScrollTracker();
  const els = Array.from(
    document.querySelectorAll('.reveal:not([data-animated])')
  );
  if (!els.length) return () => {};
  if (prefersReduced()) {
    els.forEach((el) => {
      el.setAttribute('data-animated', 'true');
      el.classList.add('visible');
    });
    return () => {};
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.setAttribute('data-animated', 'true');
        io.unobserve(el);
        // Subtle stagger: position among sibling reveals
        const siblings = Array.from(el.parentElement?.children ?? []).filter(
          (c) => c.classList && c.classList.contains('reveal')
        );
        const idx = Math.max(0, siblings.indexOf(el));
        const fromY = scrollDirection === 'up' ? -28 : 28;
        animate(el, {
          opacity: [0, 1],
          translateY: [fromY, 0],
          duration: 750,
          delay: Math.min(idx, 5) * 80,
          easing: 'outExpo',
          onComplete: () => el.classList.add('visible'),
        });
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/** Navbar tucks away when scrolling down, slides back when scrolling up.
 *  Stays visible near the top and while the mobile menu is open. */
export function initNavbarScroll() {
  if (typeof window === 'undefined' || prefersReduced()) return () => {};
  ensureScrollTracker();
  const nav = document.querySelector('.navbar');
  if (!nav) return () => {};
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const menuOpen = document.querySelector('.nav-links.open');
      if (y > 260 && scrollDirection === 'down' && !menuOpen) {
        nav.classList.add('navbar-hidden');
      } else {
        nav.classList.remove('navbar-hidden');
      }
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}
