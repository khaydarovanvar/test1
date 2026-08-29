/* Shared chrome: logo, header, footer, theme. No dependencies. */
(function (w) {
  'use strict';

  var LOGO = '<svg viewBox="0 0 64 64" role="img" aria-label="Anvarbek Khaydarov Mathematics">' +
    '<circle cx="32" cy="32" r="26" fill="none" stroke="var(--brass)" stroke-width="1.9"/>' +
    '<path d="M32 14 L18.5 47.5 M32 14 L45.5 47.5 M23.4 38.5 H40.6" fill="none" ' +
      'stroke="currentColor" stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M28.6 22.3 Q32 24.8 35.4 22.3" fill="none" stroke="var(--brass)" ' +
      'stroke-width="1.7" stroke-linecap="round"/>' +
    '<circle cx="32" cy="14" r="2.4" fill="var(--brass)"/>' +
    '</svg>';

  // path prefix so the site works from any folder depth
  var ROOT = (function () {
    var d = document.currentScript && document.currentScript.getAttribute('data-root');
    return d || './';
  })();

  function brandmark(sub) {
    return '<a class="brandmark" href="' + ROOT + 'index.html">' + LOGO +
      '<span><span class="bn">Anvarbek Khaydarov</span>' +
      '<span class="bs">' + (sub || 'Mathematics') + '</span></span></a>';
  }

  var NAV = [
    ['index.html', 'Home'],
    ['grades.html', 'Grades 5–11'],
    ['grade.html?g=8', 'Grade 8'],
    ['about.html', 'About the course']
  ];

  function header(active) {
    var links = NAV.map(function (n) {
      var on = n[0].split('?')[0] === active || n[0] === active ? ' class="on"' : '';
      return '<a href="' + ROOT + n[0] + '"' + on + '>' + n[1] + '</a>';
    }).join('');
    return '<header class="site-head" id="sitehead"><div class="bar">' + brandmark() +
      '<div class="navwrap"><nav class="nav" id="navlinks">' + links + '</nav>' +
      '<div class="langpick notranslate" id="langpick" translate="no" hidden>' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
      'stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/>' +
      '<path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"/></svg>' +
      '<div id="google_translate_element"></div></div>' +
      '<button class="themebtn" id="themebtn" type="button" aria-label="Switch colour theme" title="Switch colour theme">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
      '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>' +
      '<button class="menubtn" id="menubtn" type="button" aria-label="Menu" aria-expanded="false">' +
      '<span></span><span></span><span></span></button></div></div></header>';
  }

  function navBehaviour() {
    var mb = document.getElementById('menubtn'), head = document.getElementById('sitehead');
    if (mb) mb.addEventListener('click', function () {
      var open = head.classList.toggle('open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    if (head) {
      var onScroll = function () { head.classList.toggle('scrolled', w.scrollY > 8); };
      w.addEventListener('scroll', onScroll, { passive: true }); onScroll();
      head.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') head.classList.remove('open');
      });
    }
  }

  /* ---------- Google Translate ----------
     Free, no API key, about 130 languages. Two things matter here:

     1. Mathematics must NOT be translated. Every .m span, equation, figure
        and — above all — the English/Uzbek/Russian terminology table is
        marked translate="no", or the machine would "translate" the very
        words the table exists to teach.
     2. The script may not load at all: no internet, a school firewall, or a
        page served somewhere with a strict content policy. In that case the
        picker stays hidden rather than sitting there broken.                */

  var TRANSLATE_SRC = 'https://translate.google.com/translate_a/element.js' +
    '?cb=__akmTranslateReady';

  function protectMath(root) {
    var sel = '.m,.eq,.frac,.sqrt,.terms,.fig,.stage,.brandmark,.clock,' +
      '.ln,.chip,code,svg';
    var nodes = (root || document).querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].setAttribute('translate', 'no');
      nodes[i].classList.add('notranslate');
    }
    return nodes.length;
  }

  function initTranslate() {
    var host = document.getElementById('langpick');
    if (!host || !document.getElementById('google_translate_element')) return;

    protectMath();
    /* Anything drawn after the header — a lesson body, a rebuilt list —
       needs the same protection, so watch for it. */
    if (w.MutationObserver) {
      new w.MutationObserver(function (muts) {
        for (var i = 0; i < muts.length; i++) {
          for (var j = 0; j < muts[i].addedNodes.length; j++) {
            var n = muts[i].addedNodes[j];
            if (n.nodeType === 1) protectMath(n);
          }
        }
      }).observe(document.body, { childList: true, subtree: true });
    }

    w.__akmTranslateReady = function () {
      if (!(w.google && w.google.translate && w.google.translate.TranslateElement)) return;
      new w.google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
      }, 'google_translate_element');
      /* The select is built a moment after the constructor returns. */
      var tries = 0;
      (function reveal() {
        if (document.querySelector('#google_translate_element select')) {
          host.hidden = false;
          document.documentElement.classList.add('has-translate');
        } else if (tries++ < 40) {
          setTimeout(reveal, 100);
        }
      })();
    };

    var sc = document.createElement('script');
    sc.src = TRANSLATE_SRC;
    sc.async = true;
    sc.onerror = function () { host.hidden = true; };   /* offline, or blocked */
    document.head.appendChild(sc);
  }

  /* ---------- 3D hero ---------- */
  function initHero() {
    var scene = document.getElementById('scene');
    if (!scene) return;
    var stage = scene.querySelector('.stage3d');
    var ext = scene.querySelector('.extrude');
    if (ext && !ext.childElementCount) {
      var N = 18, i, html = '';
      for (i = N - 1; i >= 0; i--) {
        var t = i / (N - 1);
        html += '<div class="layer" style="transform:translateZ(' + (-i * 2.1).toFixed(1) + 'px);' +
          'opacity:' + (i === 0 ? 1 : 1) + ';color:' + (i === 0 ? 'var(--ink)' : 'var(--extrude)') + ';' +
          'filter:brightness(' + (1 - t * 0.42).toFixed(2) + ')">' + LOGO + '</div>';
      }
      ext.innerHTML = html;
    }
    var reduce = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !stage) return;
    var rx = 0, ry = 0, tx = 0, ty = 0, raf = null;
    function loop() {
      rx += (tx - rx) * 0.08; ry += (ty - ry) * 0.08;
      stage.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      stage.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      raf = (Math.abs(tx - rx) > 0.01 || Math.abs(ty - ry) > 0.01) ? requestAnimationFrame(loop) : null;
    }
    function kick() { if (!raf) raf = requestAnimationFrame(loop); }
    var host = scene.closest('.hero') || scene;
    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect();
      ty = ((e.clientX - r.left) / r.width - 0.5) * 26;
      tx = -((e.clientY - r.top) / r.height - 0.5) * 18;
      kick();
    });
    host.addEventListener('pointerleave', function () { tx = 0; ty = 0; kick(); });
  }

  w.AKM_initHero = initHero;

  function footer() {
    return '<footer class="site-foot"><div class="inner">' +
      '<div>' + brandmark('Grades 5–11 · Uzbekistan &amp; Cambridge') + '</div>' +
      '<p class="fnote">Lesson resources for the Uzbekistan national programme and Cambridge Lower ' +
      'Secondary Mathematics. Built around 40-minute lessons: explanation, guided practice, ' +
      '21 graded problems and short homework.</p>' +
      '</div></footer>';
  }

  function theme() {
    var KEY = 'akm-theme';
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { }
    if (saved === 'dark' || saved === 'light') document.documentElement.setAttribute('data-theme', saved);
    var b = document.getElementById('themebtn');
    if (!b) return;
    b.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      if (!cur) {
        cur = w.matchMedia && w.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) { }
    });
  }

  function mount(active) {
    var h = document.getElementById('site-header');
    if (h) h.outerHTML = header(active);
    var f = document.getElementById('site-footer');
    if (f) f.outerHTML = footer();
    theme();
    navBehaviour();
    initHero();
    initTranslate();
  }

  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(w.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  w.AKM_initTranslate = initTranslate;
  w.AKM_protectMath = protectMath;
  w.AKM = { LOGO: LOGO, ROOT: ROOT, mount: mount, qs: qs, esc: esc, brandmark: brandmark };
})(window);
