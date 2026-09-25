const WEDDING_DATE = new Date('2026-11-18T14:00:00+08:00');

function initCountdown() {
  const root = document.getElementById('countdown');
  if (!root) return;

  const units = {
    days: root.querySelector('[data-unit="days"]'),
    hours: root.querySelector('[data-unit="hours"]'),
    minutes: root.querySelector('[data-unit="minutes"]'),
    seconds: root.querySelector('[data-unit="seconds"]')
  };

  function tick() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) {
      root.innerHTML = '<div style="grid-column:1/-1;border:0"><strong>Today.</strong><span>THE BEGINNING OF FOREVER</span></div>';
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    units.days.textContent = String(days).padStart(2, '0');
    units.hours.textContent = String(hours).padStart(2, '0');
    units.minutes.textContent = String(minutes).padStart(2, '0');
    units.seconds.textContent = String(seconds).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

function initMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('is-open');
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function initPlaceholderImages() {
  document.querySelectorAll('[data-photo]').forEach(el => {
    const src = el.dataset.photo;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url("${src}")`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.classList.remove('placeholder-photo');
      el.removeAttribute('data-photo');
    };
    img.src = src;
  });
}

function initAnimations() {
  if (!window.gsap) {
    document.querySelectorAll('.reveal').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('.preloader__line', { scaleX: 1, duration: .8 })
    .to('.preloader__monogram, .preloader__date', { opacity: 0, y: -15, duration: .45 }, '+=.15')
    .to('.preloader', { yPercent: -100, duration: 1.1, ease: 'power4.inOut' })
    .fromTo('.hero .reveal', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: .9, stagger: .1 }, '-=.35')
    .add(() => document.getElementById('preloader')?.remove());

  gsap.utils.toArray('.reveal').forEach(el => {
    if (el.closest('.hero')) return;
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: .9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true }
    });
  });
}

function initRSVPPlaceholder() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = new FormData(form).get('guest-name')?.trim();
    if (!name) return;
    alert(`RSVP lookup is not connected yet. We received: ${name}`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initMenu();
  initPlaceholderImages();
  initRSVPPlaceholder();
  initAnimations();
});
