/* Shared chrome: logo, header, footer, theme. No dependencies. */
(function (w) {
  'use strict';

  /* The mark: a pair of compasses part way through its sweep. The ring is left
     open at the lower right, where the nib still rests — geometry caught
     mid-construction. The arc carries a class so the preloader can draw it. */
  var ARC_D = 'M40.03 56.73 A26 26 0 1 1 54.96 44.21';
  var A_D = 'M32 15 L20 47 M32 15 L44 47 M24.2 36 H39.8';
  var LOGO = '<svg viewBox="0 0 64 64" role="img" aria-label="Anvarbek Khaydarov Mathematics">' +
    '<path class="lg-arc" d="' + ARC_D + '" fill="none" stroke="var(--brass)" ' +
      'stroke-width="2.6" stroke-linecap="round"/>' +
    '<circle class="lg-nib" cx="54.96" cy="44.21" r="2.9" fill="var(--brass)"/>' +
    '<path class="lg-a" d="' + A_D + '" fill="none" stroke="currentColor" ' +
      'stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round"/>' +
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

  var GRADES_MENU = [5, 6, 7, 8, 9, 10, 11];

  var NAV = [
    ['index.html', 'Home'],
    ['grades.html', 'Grades 5–11', 'grades'],
    ['grade.html?g=8', 'Grade 8'],
    ['about.html', 'About the course']
  ];

  function header(active) {
    var links = NAV.map(function (n) {
      var on = n[0].split('?')[0] === active || n[0] === active ? ' class="on"' : '';
      if (n[2] !== 'grades') return '<a href="' + ROOT + n[0] + '"' + on + '>' + n[1] + '</a>';
      /* Grades gets a drop-down, so any year is one click from anywhere. */
      return '<span class="hasmenu"><a href="' + ROOT + n[0] + '"' + on + '>' + n[1] +
        '<svg class="caret" width="10" height="10" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true">' +
        '<path d="M6 9l6 6 6-6"/></svg></a>' +
        '<span class="submenu">' + GRADES_MENU.map(function (g) {
          return '<a href="' + ROOT + 'grade.html?g=' + g + '">Grade ' + g +
            (g === 8 ? '<em>all 95 lessons</em>' : '<em>coming</em>') + '</a>';
        }).join('') + '</span></span>';
    }).join('');
    return '<header class="site-head" id="sitehead"><div class="bar">' + brandmark() +
      '<div class="navwrap"><nav class="nav" id="navlinks">' + links + '</nav>' +
      '<div class="findwrap"><button class="findbtn" id="findbtn" type="button" ' +
      'aria-label="Search the topics" title="Search the topics">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/>' +
      '<path d="M20 20l-4.3-4.3"/></svg></button></div>' +
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

  /* ---------- topic search ----------
     Ninety-five topics is more than a menu can hold. The search reads whatever
     lesson data the page has loaded and matches on title, subtitle, the
     terminology in all three languages, and the textbook reference — so
     "vatar", "хорда" and "chord" all find the same lesson. */

  function searchIndex() {
    var all = allTopics();
    return all.map(function (t) {
      var terms = (t.terms || []).map(function (r) { return r.join(' '); }).join(' ');
      return {
        id: t.id,
        title: t.title,
        lcTitle: t.title.toLowerCase(),
        lcSub: (t.subtitle || '').toLowerCase(),
        meta: 'Grade ' + t.grade + ' · ' + (t.stream === 'alg' ? 'Algebra' : 'Geometry') +
          ' · Quarter ' + t.quarter + ' · L' + t.lessons,
        hay: (t.title + ' ' + (t.subtitle || '') + ' ' + terms + ' ' +
              (t.uz || '') + ' ' + (t.cam || '')).toLowerCase()
      };
    });
  }

  function openSearch() {
    var idx = searchIndex();
    if (!idx.length) { w.location.href = ROOT + 'grade.html?g=8'; return; }

    var box = document.createElement('div');
    box.className = 'findlayer';
    box.innerHTML =
      '<div class="findbox" role="dialog" aria-modal="true" aria-label="Search the topics">' +
      '<div class="findtop">' +
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/>' +
      '<path d="M20 20l-4.3-4.3"/></svg>' +
      '<input type="search" id="findin" placeholder="Search 95 topics — try “chord”, “vatar”, “хорда”" ' +
      'autocomplete="off" spellcheck="false">' +
      '<kbd>Esc</kbd></div><div class="findlist" id="findlist"></div></div>';
    document.body.appendChild(box);

    var input = box.querySelector('#findin'), list = box.querySelector('#findlist'), sel = 0, hits = [];

    function draw() {
      if (!hits.length) {
        list.innerHTML = '<p class="findnone">Nothing matched. Try a shorter word.</p>';
        return;
      }
      list.innerHTML = hits.map(function (h, i) {
        return '<a class="findrow' + (i === sel ? ' on' : '') + '" href="' +
          ROOT + 'lesson.html?t=' + h.id + '"><span class="ft">' + esc(h.title) +
          '</span><span class="fm">' + esc(h.meta) + '</span></a>';
      }).join('');
      var on = list.querySelector('.on');
      if (on) on.scrollIntoView({ block: 'nearest' });
    }
    function run() {
      var q = input.value.trim().toLowerCase();
      hits = idx.slice();
      if (q) {
        hits = [];
        for (var i = 0; i < idx.length; i++) {
          var t = idx[i], score = 0;
          if (t.lcTitle.indexOf(q) === 0) score = 4;          /* title starts with it */
          else if (t.lcTitle.indexOf(q) > -1) score = 3;      /* title contains it    */
          else if (t.lcSub.indexOf(q) > -1) score = 2;        /* subtitle             */
          else if (t.hay.indexOf(q) > -1) score = 1;          /* terminology or refs  */
          if (score) hits.push({ t: t, s: score, i: i });
        }
        hits.sort(function (a, b) { return b.s - a.s || a.i - b.i; });
        hits = hits.map(function (h) { return h.t; });
      }
      hits = hits.slice(0, 40);
      sel = 0; draw();
    }
    function shut() { if (box.parentNode) box.parentNode.removeChild(box); }

    input.addEventListener('input', run);
    box.addEventListener('click', function (e) { if (e.target === box) shut(); });
    document.addEventListener('keydown', function onKey(e) {
      if (!box.parentNode) { document.removeEventListener('keydown', onKey); return; }
      if (e.key === 'Escape') { shut(); }
      else if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, hits.length - 1); draw(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); draw(); }
      else if (e.key === 'Enter' && hits[sel]) { w.location.href = ROOT + 'lesson.html?t=' + hits[sel].id; }
    });
    run();
    input.focus();
  }

  function searchBehaviour() {
    var b = document.getElementById('findbtn');
    if (b) b.addEventListener('click', openSearch);
    /* "/" opens search, the way most documentation sites do. */
    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.ctrlKey || e.metaKey) return;
      var t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
      if (document.querySelector('.findlayer')) return;
      e.preventDefault(); openSearch();
    });
  }

  /* ---------- preloader ----------
     Rules, in order of importance: never delay the reader, never flash, and
     never be the reason a page looks broken.

       - gone as soon as the page has loaded, but shown for at least MIN so it
         does not blink on a fast machine;
       - gone at MAX regardless, even if some asset hangs;
       - skipped completely on later pages in the same visit, and for anyone
         who has asked for reduced motion.

     The CSS carries its own failsafe too, so the overlay clears even if this
     script never runs. */

  var PRELOAD_MIN = 1150;   /* long enough for the mark to finish drawing */
  var PRELOAD_MAX = 2400;

  function preloader() {
    var el = document.getElementById('preload');
    if (!el) return;

    var seen = false;
    try { seen = sessionStorage.getItem('akm-seen') === '1'; } catch (e) { /* private mode */ }
    var still = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seen || still) { el.parentNode.removeChild(el); return; }
    try { sessionStorage.setItem('akm-seen', '1'); } catch (e) { /* ignore */ }

    var start = Date.now(), gone = false;
    function dismiss() {
      if (gone) return;
      gone = true;
      el.classList.add('done');
      setTimeout(function () {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 460);
    }
    function whenReady() {
      setTimeout(dismiss, Math.max(0, PRELOAD_MIN - (Date.now() - start)));
    }
    if (document.readyState === 'complete') whenReady();
    else w.addEventListener('load', whenReady);
    setTimeout(dismiss, PRELOAD_MAX);
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
    preloader();
    navBehaviour();
    searchBehaviour();
    initHero();
    initTranslate();
  }

  /* Every topic the page has loaded, whatever grade. Data files register
     themselves as G8_ALG, G10_GEO and so on, so adding a grade is one more
     <script> tag and one more entry here. */
  var GRADE_KEYS = [8, 10, 11];
  function allTopics() {
    var out = [];
    for (var i = 0; i < GRADE_KEYS.length; i++) {
      out = out.concat(w['G' + GRADE_KEYS[i] + '_ALG'] || [],
                       w['G' + GRADE_KEYS[i] + '_GEO'] || []);
    }
    return out;
  }

  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(w.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  w.AKM_allTopics = allTopics;
  w.AKM_initTranslate = initTranslate;
  w.AKM_protectMath = protectMath;
  w.AKM = { LOGO: LOGO, ROOT: ROOT, mount: mount, qs: qs, esc: esc, brandmark: brandmark };
})(window);
