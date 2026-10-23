/* Olympiad Mathematics — site behaviour.

   Everything here is progressive: with JavaScript off the pages still read,
   the reveals simply start visible (the CSS failsafe below runs first) and
   the 3-D hero is absent.

   Sections:
     1. preloader        4. reveals and split text
     2. header state     5. counters
     3. menu overlay     6. tilt, marquee, hero mount                        */
(function (w, d) {
  'use strict';

  var reduced = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };

  /* ---------------- 1. preloader ---------------- */
  (function () {
    var pre = $('.preloader');
    if (!pre) return;
    var n = $('.pre-count b', pre), bar = $('.pre-bar i', pre);
    var pct = 0, done = false, started = Date.now();

    var tick = setInterval(function () {
      pct = Math.min(99, pct + Math.random() * 13);
      paint();
    }, 110);

    function paint() {
      if (n) n.textContent = Math.round(pct);
      if (bar) bar.style.width = pct + '%';
    }

    function finish() {
      if (done) return;
      done = true;
      clearInterval(tick);
      pct = 100; paint();
      /* shown for at least 900 ms so it does not blink, and never past 2.6 s */
      var wait = Math.max(0, 900 - (Date.now() - started));
      setTimeout(function () {
        pre.classList.add('done');
        d.body.classList.add('loaded');
        setTimeout(function () { if (pre.parentNode) pre.parentNode.removeChild(pre); }, 700);
      }, wait);
    }

    w.addEventListener('load', finish);
    setTimeout(finish, 2600);
    if (reduced) finish();
  })();

  /* ---------------- 2. header state ---------------- */
  (function () {
    var nav = $('.nav');
    if (!nav) return;
    var last = -1;
    function onScroll() {
      var y = w.scrollY || d.documentElement.scrollTop;
      var stuck = y > 40;
      if (stuck !== last) { nav.classList.toggle('stuck', stuck); last = stuck; }
    }
    w.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ---------------- 3. menu overlay ---------------- */
  (function () {
    var burger = $('.burger'), overlay = $('.menu-overlay');
    if (!burger || !overlay) return;
    function set(open) {
      d.body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      overlay.setAttribute('aria-hidden', open ? 'false' : 'true');
      var lbl = $('.burger-label', burger);
      if (lbl) lbl.textContent = open ? 'Close' : 'Menu';
    }
    burger.addEventListener('click', function () {
      set(!d.body.classList.contains('menu-open'));
    });
    overlay.addEventListener('click', function (e) {
      if (e.target.closest('a')) set(false);
    });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && d.body.classList.contains('menu-open')) set(false);
    });
  })();

  /* ---------------- 4. reveals and split text ---------------- */
  (function () {
    /* split each [data-split] into words that rise out of their own box */
    $$('[data-split]').forEach(function (el) {
      var words = el.textContent.trim().split(/\s+/);
      el.textContent = '';
      words.forEach(function (word, i) {
        var span = d.createElement('span');
        span.className = 'w';
        span.style.setProperty('--wi', i);
        var inner = d.createElement('i');
        inner.textContent = word;
        span.appendChild(inner);
        el.appendChild(span);
        if (i < words.length - 1) el.appendChild(d.createTextNode(' '));
      });
    });

    var targets = $$('[data-reveal],[data-split]');
    if (!targets.length) return;

    if (!w.IntersectionObserver || reduced) {
      targets.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    targets.forEach(function (el) { io.observe(el); });
  })();

  /* ---------------- 5. counters ---------------- */
  (function () {
    var els = $$('[data-counter]');
    if (!els.length) return;

    function run(el) {
      var to = parseFloat(el.getAttribute('data-counter')) || 0;
      if (reduced) { el.textContent = to.toLocaleString('en-US'); return; }
      var dur = 1500, t0 = 0;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / dur);
        /* ease-out cubic, so it lands softly on the number */
        var v = Math.round(to * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString('en-US');
        if (p < 1) w.requestAnimationFrame(step);
      }
      w.requestAnimationFrame(step);
    }

    if (!w.IntersectionObserver) { els.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        run(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  })();

  /* ---------------- 6. tilt ---------------- */
  (function () {
    if (reduced || !w.matchMedia('(hover:hover)').matches) return;
    $$('[data-tilt]').forEach(function (el) {
      var raf = 0, rx = 0, ry = 0;
      function paint() {
        raf = 0;
        el.style.transform = 'perspective(900px) rotateX(' + rx.toFixed(2) +
          'deg) rotateY(' + ry.toFixed(2) + 'deg) translateY(-4px)';
      }
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        ry = ((e.clientX - r.left) / r.width - .5) * 9;
        rx = -((e.clientY - r.top) / r.height - .5) * 9;
        if (!raf) raf = w.requestAnimationFrame(paint);
      });
      el.addEventListener('pointerleave', function () {
        el.style.transform = '';
      });
    });
  })();

  /* ---------------- 7. marquee ---------------- */
  /* Each .marquee-track needs its content twice for the -50% loop to be
     seamless. Authoring it once and cloning keeps the HTML short and means
     the two copies can never drift apart. */
  (function () {
    $$('.marquee-track').forEach(function (track) {
      if (track.children.length > 1) return;
      track.appendChild(track.firstElementChild.cloneNode(true));
    });
    $$('.stats-ghost').forEach(function (g) {
      if (g.children.length) return;
      var text = g.textContent.trim();
      g.textContent = '';
      for (var i = 0; i < 2; i++) {
        var s = d.createElement('span');
        s.textContent = text;
        g.appendChild(s);
      }
    });
  })();

  /* ---------------- 8. hero ---------------- */
  (function () {
    var host = d.getElementById('hero3d');
    if (host && w.HERO3D) w.HERO3D.mount(host);
  })();

  /* ---------------- 9. smooth in-page links ---------------- */
  (function () {
    d.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var target = d.getElementById(id.slice(1));
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + w.scrollY - 80;
      w.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
    });
  })();

})(window, document);
