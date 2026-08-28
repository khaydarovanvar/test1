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
    return '<header class="site-head"><div class="bar">' + brandmark() +
      '<nav class="nav">' + links +
      '<button class="themebtn" id="themebtn" type="button" aria-label="Switch colour theme" title="Switch colour theme">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
      '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>' +
      '</nav></div></header>';
  }

  function footer() {
    return '<footer class="site-foot"><div class="inner">' +
      '<div>' + brandmark('Grades 5–11 · Uzbekistan &amp; Cambridge') + '</div>' +
      '<p class="fnote">Lesson resources for the Uzbekistan national programme and Cambridge Lower ' +
      'Secondary Mathematics. Built around 40-minute lessons: explanation, guided practice, ' +
      '21 graded problems and short homework.</p>' +
      '<p class="fnote">Textbooks referenced — <em>Algebra 8</em>, Alimov · Xalmuxamedov · Mirzaxmedov ' +
      '(O‘qituvchi, 2019) · <em>Geometry 8</em>, Rahimkariev · Toxtaxodjaeva (2019) · ' +
      '<em>Cambridge Lower Secondary Mathematics 9</em>, Learner’s Book &amp; Workbook.</p>' +
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
  }

  function qs(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(w.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  w.AKM = { LOGO: LOGO, ROOT: ROOT, mount: mount, qs: qs, esc: esc, brandmark: brandmark };
})(window);
