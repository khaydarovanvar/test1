/* Anvarbek Khaydarov · Mathematics — the motion layer.

   Everything here is progressive: the page is complete and readable with this
   file removed, and every effect is skipped outright when the visitor asks for
   reduced motion.

     · marquee      — a strip of text that scrolls forever
     · split        — a heading whose words rise into place
     · reveal       — anything that fades up as it enters the viewport
     · count        — a number that runs up to its value once
     · tilt         — a card that leans towards the pointer
     · progress     — the reading bar along the bottom of the header

   Reveal and tilt are applied by rule rather than by hand, so a new card in
   the mark-up joins in without another attribute.                           */
(function (w, d) {
  'use strict';

  var reduced = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function all(sel, root) {
    return Array.prototype.slice.call((root || d).querySelectorAll(sel));
  }

  /* ---------------- 1. marquee ----------------
     The track holds its content twice, so translating it by -50% lands on an
     identical frame and the loop is seamless. Duplicating in script keeps the
     mark-up to one copy. */
  function marquees() {
    all('.marquee-track').forEach(function (track) {
      if (track.dataset.doubled) return;
      track.dataset.doubled = '1';
      var copy = track.firstElementChild;
      if (!copy) return;
      var clone = copy.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  }

  /* ---------------- 2. split headings ----------------
     Each word gets a clipping box and an inner span that starts below it. The
     stagger is a custom property so the CSS owns the timing. */
  function split(el) {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = '1';
    var out = [], wi = 0;
    Array.prototype.forEach.call(el.childNodes, function (node) {
      if (node.nodeType === 3) {
        node.nodeValue.split(/(\s+)/).forEach(function (part) {
          if (!part) return;
          if (/^\s+$/.test(part)) { out.push(' '); return; }
          out.push('<span class="w" style="--wi:' + (wi++) + '"><i>' + esc(part) + '</i></span>');
        });
      } else if (node.nodeType === 1) {
        /* an <em> inside the heading keeps its own styling, one box per word */
        var tag = node.tagName.toLowerCase();
        var open = '<' + tag + (node.className ? ' class="' + node.className + '"' : '') + '>';
        var inner = node.textContent.split(/(\s+)/).map(function (part) {
          if (!part) return '';
          if (/^\s+$/.test(part)) return ' ';
          return '<span class="w" style="--wi:' + (wi++) + '"><i>' + esc(part) + '</i></span>';
        }).join('');
        out.push(open + inner + '</' + tag + '>');
      }
    });
    el.innerHTML = out.join('');
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------------- 3. reveal on scroll ----------------
     One observer for the whole page. Elements leave the observer once shown,
     so nothing re-animates on the way back up. */
  var io = null;
  function observer() {
    if (io || !w.IntersectionObserver) return io;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        if (e.target.hasAttribute('data-count')) run(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    return io;
  }

  function watch(el) {
    var ob = observer();
    if (ob) ob.observe(el); else el.classList.add('in');
  }

  /* Reveal is applied by rule: the cards and headings a page already has, in
     document order, with a short stagger inside each group. */
  var REVEAL = ['.sechead', '.gtile', '.acard', '.scard', '.qcard', '.pcard',
                '.tcard', '.dcard', '.card', '.stat', '.clock .cseg', '.figbox'];
  function reveals() {
    REVEAL.forEach(function (sel) {
      all(sel).forEach(function (el, i) {
        if (el.hasAttribute('data-reveal') || el.closest('.hero')) return;
        el.setAttribute('data-reveal', '');
        el.style.setProperty('--rd', (i % 6) * 70 + 'ms');
      });
    });
    all('[data-reveal]').forEach(watch);
  }

  /* ---------------- 4. counters ---------------- */
  function run(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (!isFinite(target)) return;
    var suffix = el.getAttribute('data-count-suffix') || '';
    if (reduced) { el.textContent = target + suffix; return; }
    var t0 = 0, dur = 1100;
    function step(now) {
      if (!t0) t0 = now;
      var k = Math.min(1, (now - t0) / dur);
      /* ease-out cubic: fast first, so the number reads early */
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * e) + suffix;
      if (k < 1) w.requestAnimationFrame(step);
    }
    w.requestAnimationFrame(step);
  }

  /* Any stat whose value is a plain number counts up. Written as an attribute
     at run time so the mark-up keeps the real number for a reader with no
     JavaScript. */
  function counters() {
    all('.stat b, .kfig b, [data-countable]').forEach(function (el) {
      var txt = el.textContent.trim();
      if (el.hasAttribute('data-count') || !/^\d+$/.test(txt)) return;
      el.setAttribute('data-count', txt);
      el.textContent = reduced ? txt : '0';
      watch(el);
    });
  }

  /* ---------------- 5. tilt ----------------
     A few degrees, damped, and only where a pointer can actually hover. */
  function tilt() {
    if (reduced || !w.matchMedia || !w.matchMedia('(hover: hover)').matches) return;
    all('.gtile, .acard, .scard, .stat').forEach(function (el) {
      if (el.classList.contains('tilty')) return;
      el.classList.add('tilty');
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - .5;
        var py = (e.clientY - r.top) / r.height - .5;
        el.style.setProperty('--tx', (-py * 4.5).toFixed(2) + 'deg');
        el.style.setProperty('--ty', (px * 5.5).toFixed(2) + 'deg');
      });
      el.addEventListener('pointerleave', function () {
        el.style.setProperty('--tx', '0deg');
        el.style.setProperty('--ty', '0deg');
      });
    });
  }

  /* ---------------- 6. reading progress ---------------- */
  function progress() {
    var bar = d.getElementById('readbar');
    if (!bar) return;
    var tick = function () {
      var h = d.documentElement.scrollHeight - w.innerHeight;
      var k = h > 0 ? w.scrollY / h : 0;
      bar.style.transform = 'scaleX(' + (k < 0 ? 0 : k > 1 ? 1 : k).toFixed(4) + ')';
    };
    w.addEventListener('scroll', tick, { passive: true });
    w.addEventListener('resize', tick, { passive: true });
    tick();
  }

  /* ---------------- 7. the 3-D scene ----------------
     index.html carries a full-height hero and names its own host. Every other
     page gets the quiet band variant, inserted behind the first heading so no
     page has to ask for it. */
  function scene() {
    if (!w.HERO3D) return;
    var full = d.getElementById('hero3d');
    if (full) { w.HERO3D.mount(full); return; }
    var first = d.querySelector('main .section, body > .section');
    if (!first) return;
    /* A page heads its first section either with a .sechead block or, on the
       prose pages, with a plain h1. Either one earns the band. */
    var head = first.querySelector('.sechead, .prose > h1');
    if (!head || first.querySelector('.hero3d')) return;
    first.classList.add('headband');
    var host = d.createElement('div');
    host.className = 'hero3d hero3d--band';
    host.setAttribute('aria-hidden', 'true');
    first.insertBefore(host, first.firstChild);
    w.HERO3D.mount(host, { band: true });
  }

  /* ---------------- start ---------------- */
  function init() {
    marquees();
    all('[data-split]').forEach(function (el) { split(el); watch(el); });
    reveals();
    counters();
    tilt();
    progress();
    scene();
  }

  /* Every step above is guarded, so init() may be called again after a page
     has built its content from data. That is what refresh() is for. */
  w.AKM_MOTION = { init: init, refresh: init, split: split, watch: watch };
})(window, document);
