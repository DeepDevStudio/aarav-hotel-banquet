/* Aarav Hotel & Banquet — shared header, footer and page behaviour */
const PHONE = '9999991554';
const WA = '919999991554';
const ADDRESS = 'Plot No. E-12, Rameshwar Park, Near Jagmohan Hospital, Main Road, Loni, Ghaziabad';
const OPENING = new Date('2026-12-25T00:00:00+05:30'); // 30-day countdown from 24 Nov 2026

const I = {
  phone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h16M4 12h16M10 17h10"/></svg>',
  prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};
const PAGES = [
  ['index.html', 'Home'],
  ['about.html', 'About'],
  ['banquet-halls.html', 'Halls'],
  ['occasions.html', 'Occasions'],
  ['packages.html', 'Packages'],
  ['menu.html', 'Menu'],
  ['rooms.html', 'Rooms'],
  ['gallery.html', 'Gallery'],
  ['contact.html', 'Contact'],
];
// Social pages: put the real profile links here when the client shares them
const SOCIAL = [
  ['Facebook', '#', '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/></svg>'],
  ['Instagram', '#', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'],
  ['YouTube', '#', '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8zM10 15V9l5.2 3z"/></svg>'],
];
// Without a real link ('#') the icon is shown as a plain logo, not a link
const socials = (cls) => `<div class="${cls}">${SOCIAL.map(([name, href, icon]) => (href && href !== '#'
  ? `<a href="${href}" aria-label="${name}" title="${name}" target="_blank" rel="noopener">${icon}</a>`
  : `<span aria-label="${name}" title="${name}">${icon}</span>`)).join('')}</div>`;
const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
const brand = `<a href="index.html" class="brand" aria-label="Aarav Hotel and Banquet">
    <span class="brand-mono">A</span>
    <span class="brand-name"><b>AARAV</b><span>Hotel &amp; Banquet</span></span>
  </a>`;
const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const store = {
  get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* private mode */ } },
};

function preloader() {
  const el = document.createElement('div');
  el.className = 'preloader';
  el.innerHTML = '<div class="mark"><div class="mono">A</div><div class="word">AARAV</div><div class="bar"></div></div>';
  if (store.get('aarav-seen')) return; // only the first page of a visit
  document.body.prepend(el);
  store.set('aarav-seen', '1');
  const done = () => { el.classList.add('done'); setTimeout(() => el.remove(), 800); };
  window.addEventListener('load', () => setTimeout(done, 600));
  setTimeout(done, 3500);
}

function header() {
  const el = document.getElementById('site-header');
  if (!el) return;
  el.outerHTML = `
  <div class="ann"><div class="container ann-in">
    <a class="ann-phone" href="tel:+91${PHONE}">${I.phone}<span>+91 99999 91554</span></a>
    <span class="ann-text">✦ Opening Soon in Loni • <b>Bookings open from 1st January</b></span>
    ${socials('socials')}
  </div></div>
  <header class="site-header">
    <div class="container">
      ${brand}
      <nav class="nav" id="nav">
        <button class="nav-close" aria-label="Close menu">&times;</button>
        ${PAGES.map(([href, label]) => `<a href="${href}" class="${href === here ? 'active' : ''}">${label}</a>`).join('')}
        <a href="contact.html#enquiry" class="btn btn-dark">Book a Visit</a>
      </nav>
      <button class="menu-btn" aria-label="Open menu">${I.menu}</button>
    </div>
  </header>`;
  const nav = document.getElementById('nav');
  const setMenu = (open) => { nav.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); };
  document.querySelector('.menu-btn').onclick = () => setMenu(true);
  document.querySelector('.nav-close').onclick = () => setMenu(false);
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
  const h = document.querySelector('.site-header');
  const onScroll = () => h.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function footer() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.outerHTML = `
  <footer class="site-footer">
    <div class="container foot-grid">
      <div>
        ${brand}
        <p class="about">A grand new venue for weddings, receptions and every celebration in Loni, Ghaziabad. Elegant AC halls, beautiful décor, delicious food and warm hospitality.</p>
        <a href="contact.html#enquiry" class="btn btn-dark">Enquire Now</a>
        ${socials('socials foot-socials')}
      </div>
      <div>
        <h4>Explore</h4>
        <ul>${PAGES.slice(0, 5).map(([href, label]) => `<li><a href="${href}">${label === 'Halls' ? 'Banquet Halls' : label}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>More</h4>
        <ul>${PAGES.slice(5).map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}<li><a href="contact.html#faq">FAQs</a></li></ul>
      </div>
      <div>
        <h4>Visit Us</h4>
        <ul class="foot-contact">
          <li>${I.pin}<span>${ADDRESS}</span></li>
          <li>${I.phone}<a href="tel:+91${PHONE}">+91 99999 91554</a></li>
          <li>${I.wa}<a href="https://wa.me/${WA}" target="_blank" rel="noopener">WhatsApp us</a></li>
          <li>${I.cal}<span>Bookings open from 1st January</span></li>
        </ul>
      </div>
    </div>
    <div class="container foot-bottom">
      <span class="script">Your Special Events… Our Grand Celebration</span>
      <span>© ${new Date().getFullYear()} Aarav Hotel &amp; Banquet. All rights reserved.</span>
    </div>
  </footer>
  <div class="fabs">
    <a class="fab wa" href="${waLink('Hello Aarav Hotel & Banquet, I want to know about bookings.')}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
    <a class="fab call" href="tel:+91${PHONE}" aria-label="Call">${I.phone}</a>
  </div>`;
}

// Desktop hero: the slide text always sits above the date box. The space under the text = the
// date box + stats height (measured), and the hero is tall enough for the longest slide.
function fitHero() {
  const hero = document.querySelector('.hero');
  const bottom = document.querySelector('.hero-bottom');
  if (!hero || !bottom) return;
  if (window.innerWidth <= 1024) { hero.style.removeProperty('--hb'); hero.style.minHeight = ''; return; }
  const hb = bottom.offsetHeight + 34 + 30;
  hero.style.setProperty('--hb', `${hb}px`);
  const tallest = Math.max(...[...hero.querySelectorAll('.slide-text')].map((t) => {
    const kids = [...t.children];
    return kids.length ? kids[kids.length - 1].getBoundingClientRect().bottom - kids[0].getBoundingClientRect().top : 0;
  }));
  hero.style.minHeight = `${Math.ceil(tallest + hb + 70)}px`;
}

// Home hero: one slide per occasion, 6 s each, arrows + counter + progress line
function slider() {
  const slides = [...document.querySelectorAll('.slide')];
  if (!slides.length) return;
  const num = document.querySelector('.slide-nav .num');
  const bar = document.querySelector('.progress');
  let i = 0;
  let timer;
  const show = (n) => {
    slides[i].classList.remove('active');
    i = (n + slides.length) % slides.length;
    slides[i].classList.add('active');
    if (num) num.innerHTML = `<b>0${i + 1}</b> / 0${slides.length}`;
    if (bar) { bar.classList.remove('run'); void bar.offsetWidth; bar.classList.add('run'); }
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(i + 1), 4000); };
  const p = document.querySelector('.slide-nav .prev');
  const n = document.querySelector('.slide-nav .next');
  if (p) p.onclick = () => { show(i - 1); start(); };
  if (n) n.onclick = () => { show(i + 1); start(); };
  show(0);
  start();
}

// "Check your date" box and all enquiry forms: open WhatsApp with the details filled in
const niceDate = (v) => (v ? new Date(v).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Not decided yet');
function forms() {
  const today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('input[type=date]').forEach((d) => { d.min = today; });
  document.querySelectorAll('form[data-wa]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = (name) => ((form.elements[name] || {}).value || '').trim();
      const intro = [
        'Namaste Aarav Hotel & Banquet 🙏',
        form.dataset.wa === 'date' ? 'Is this date available for booking?' : 'I would like to enquire about a booking.',
        '',
      ];
      const details = [
        v('name') && `Name: ${v('name')}`,
        v('phone') && `Phone: ${v('phone')}`,
        v('occasion') && `Occasion: ${v('occasion')}`,
        `Event date: ${niceDate(v('date'))}`,
        v('guests') && `Guests: ${v('guests')}`,
        v('package') && `Package: ${v('package')}`,
        v('rooms') && `Rooms needed: ${v('rooms')}`,
        v('message') && `Message: ${v('message')}`,
      ].filter(Boolean);
      window.open(waLink([...intro, ...details].join('\n')), '_blank', 'noopener');
    });
  });
  // package / occasion buttons that pre-fill the contact form
  const params = new URLSearchParams(location.search);
  ['package', 'occasion'].forEach((k) => {
    const val = params.get(k);
    const field = document.querySelector(`form[data-wa] [name=${k}]`);
    if (val && field) {
      if (field.tagName === 'SELECT' && ![...field.options].some((o) => o.value === val)) field.add(new Option(val, val));
      field.value = val;
    }
  });
}

function countdown() {
  document.querySelectorAll('[data-countdown]').forEach((el) => {
    const tick = () => {
      const ms = Math.max(0, OPENING - Date.now());
      const parts = [[Math.floor(ms / 864e5), 'Days'], [Math.floor(ms / 36e5) % 24, 'Hours'], [Math.floor(ms / 6e4) % 60, 'Mins'], [Math.floor(ms / 1e3) % 60, 'Secs']];
      el.innerHTML = parts.map(([v, l]) => `<div><b>${String(v).padStart(2, '0')}</b><span>${l}</span></div>`).join('');
    };
    tick();
    setInterval(tick, 1000);
  });
}

function reveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { items.forEach((e) => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach((e) => io.observe(e));
}

function counters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const end = Number(e.target.dataset.count);
    const suf = e.target.dataset.suffix || '';
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 1600);
      e.target.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }), { threshold: 0.5 });
  els.forEach((e) => io.observe(e));
}

function quotes() {
  const items = [...document.querySelectorAll('.tst')];
  const dots = document.querySelector('.tst-dots');
  if (!items.length || !dots) return;
  let i = 0;
  dots.innerHTML = items.map((_, n) => `<button aria-label="Quote ${n + 1}"></button>`).join('');
  const show = (n) => {
    items[i].classList.remove('active'); dots.children[i].classList.remove('active');
    i = (n + items.length) % items.length;
    items[i].classList.add('active'); dots.children[i].classList.add('active');
  };
  [...dots.children].forEach((b, n) => { b.onclick = () => show(n); });
  show(0);
  setInterval(() => show(i + 1), 6500);
}

function lightbox() {
  const links = [...document.querySelectorAll('[data-lightbox]')];
  if (!links.length) return;
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous">&#8249;</button><img alt=""><button class="lb-next" aria-label="Next">&#8250;</button><div class="cap"></div>';
  document.body.appendChild(box);
  const img = box.querySelector('img');
  const cap = box.querySelector('.cap');
  let list = links;
  let i = 0;
  const open = (n) => {
    i = (n + list.length) % list.length;
    img.src = list[i].getAttribute('href');
    cap.textContent = list[i].dataset.title || '';
    box.classList.add('open');
  };
  links.forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault();
    list = links.filter((l) => !l.classList.contains('hide'));
    open(list.indexOf(a));
  }));
  const close = () => box.classList.remove('open');
  box.querySelector('.lb-close').onclick = close;
  box.querySelector('.lb-prev').onclick = () => open(i - 1);
  box.querySelector('.lb-next').onclick = () => open(i + 1);
  box.addEventListener('click', (e) => { if (e.target === box) close(); });
  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') open(i - 1);
    if (e.key === 'ArrowRight') open(i + 1);
  });
}

function filters() {
  const bar = document.querySelector('.filters');
  if (!bar) return;
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    bar.querySelectorAll('button').forEach((x) => x.classList.toggle('active', x === b));
    document.querySelectorAll('.masonry a').forEach((a) => a.classList.toggle('hide', b.dataset.filter !== 'all' && a.dataset.cat !== b.dataset.filter));
  });
}

// Once per visit, 18 s after the home page opens
function popup() {
  if (here !== 'index.html' || store.get('aarav-popup')) return;
  const el = document.createElement('div');
  el.className = 'popup';
  el.innerHTML = `<div class="popup-box">
      <img src="images/stage-sofa-flowers.jpg" alt="">
      <div class="in">
        <span class="pill">Opening Offer</span>
        <h3>Reserve your <em class="g">dream date</em> early</h3>
        <p>Bookings open from 1st January. Wedding season dates go fast. Share your date on WhatsApp and we will hold it for you first.</p>
        <a class="btn btn-wa" href="${waLink('Hello Aarav Hotel & Banquet, I want to reserve a date. Please share details.')}" target="_blank" rel="noopener">${I.wa} WhatsApp Us</a>
      </div>
      <button class="x" aria-label="Close">&times;</button>
    </div>`;
  document.body.appendChild(el);
  const close = () => el.classList.remove('open');
  el.querySelector('.x').onclick = close;
  el.addEventListener('click', (e) => { if (e.target === el) close(); });
  setTimeout(() => { el.classList.add('open'); store.set('aarav-popup', '1'); }, 18000);
}

document.addEventListener('DOMContentLoaded', () => {
  preloader();
  header();
  footer();
  slider();
  fitHero();
  window.addEventListener('resize', fitHero);
  window.addEventListener('load', fitHero);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitHero);
  forms();
  countdown();
  reveal();
  counters();
  quotes();
  lightbox();
  filters();
  popup();
});
