#!/usr/bin/env python3
"""Assemble the whole site into one self-contained HTML file with hash routing."""
import pathlib, html
root = pathlib.Path(__file__).parent
R = lambda p: (root / p).read_text()

CSS = R('assets/styles.css') + "\n" + R('assets/pages.css')
JS_LIBS = "\n".join(R(f) for f in [
    'assets/mathfmt.js', 'assets/figures.js', 'assets/interactive.js',
    'assets/lesson.js', 'data/grades.js', 'data/g8-alg.js', 'data/g8-geo.js'])

# the home hero + sections, lifted from index.html
idx = R('index.html')
HOME = idx.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
grd = R('grade.html')
GRADE = grd.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
abt = R('about.html')
ABOUT = abt.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
grs = R('grades.html')
GRADES = grs.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
LESSON = ('<div class="lhead" id="lhead"></div><div class="lbody">'
          '<main class="lmain" id="lmain"></main><aside class="lside" id="lside"></aside></div>')

LOGO = """<svg viewBox="0 0 64 64" role="img" aria-label="Anvarbek Khaydarov Mathematics">\
<circle cx="32" cy="32" r="26" fill="none" stroke="var(--brass)" stroke-width="1.9"/>\
<path d="M32 14 L18.5 47.5 M32 14 L45.5 47.5 M23.4 38.5 H40.6" fill="none" stroke="currentColor" \
stroke-width="3.1" stroke-linecap="round" stroke-linejoin="round"/>\
<path d="M28.6 22.3 Q32 24.8 35.4 22.3" fill="none" stroke="var(--brass)" stroke-width="1.7" \
stroke-linecap="round"/><circle cx="32" cy="14" r="2.4" fill="var(--brass)"/></svg>"""

def js(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

OUT = f"""<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Anvarbek Khaydarov · Mathematics</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
{CSS}
</style>

<div id="chrome-head"></div>
<div id="view"></div>
<div id="chrome-foot"></div>

<script>
{JS_LIBS}
</script>

<script>
(function () {{
  'use strict';
  var LOGO = `{js(LOGO)}`;
  window.AKM_lessonHref = function (id) {{ return '#/lesson/' + id; }};
  var VIEWS = {{
    home:   `{js(HOME)}`,
    grades: `{js(GRADES)}`,
    grade:  `{js(GRADE)}`,
    about:  `{js(ABOUT)}`,
    lesson: `{js(LESSON)}`
  }};
  var NAV = [['#/', 'Home'], ['#/grades', 'Grades 5–11'], ['#/grade/8', 'Grade 8'], ['#/about', 'About the course']];

  function brandmark(sub) {{
    return '<a class="brandmark" href="#/">' + LOGO + '<span><span class="bn">Anvarbek Khaydarov</span>' +
      '<span class="bs">' + (sub || 'Mathematics') + '</span></span></a>';
  }}
  window.AKM_initHero = function () {{
    var scene = document.getElementById('scene');
    if (!scene) return;
    var stage = scene.querySelector('.stage3d');
    var ext = scene.querySelector('.extrude');
    if (ext && !ext.childElementCount) {{
      var N = 18, i, html = '';
      for (i = N - 1; i >= 0; i--) {{
        var t = i / (N - 1);
        html += '<div class="layer" style="transform:translateZ(' + (-i * 2.1).toFixed(1) + 'px);' +
          'color:' + (i === 0 ? 'var(--ink)' : 'var(--extrude)') + ';' +
          'filter:brightness(' + (1 - t * 0.42).toFixed(2) + ')">' + LOGO + '</div>';
      }}
      ext.innerHTML = html;
    }}
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !stage) return;
    var rx = 0, ry = 0, tx = 0, ty = 0, raf = null;
    function loop() {{
      rx += (tx - rx) * 0.08; ry += (ty - ry) * 0.08;
      stage.style.setProperty('--rx', rx.toFixed(2) + 'deg');
      stage.style.setProperty('--ry', ry.toFixed(2) + 'deg');
      raf = (Math.abs(tx - rx) > 0.01 || Math.abs(ty - ry) > 0.01) ? requestAnimationFrame(loop) : null;
    }}
    function kick() {{ if (!raf) raf = requestAnimationFrame(loop); }}
    var host = scene.closest('.hero') || scene;
    host.addEventListener('pointermove', function (e) {{
      var r = host.getBoundingClientRect();
      ty = ((e.clientX - r.left) / r.width - 0.5) * 26;
      tx = -((e.clientY - r.top) / r.height - 0.5) * 18;
      kick();
    }});
    host.addEventListener('pointerleave', function () {{ tx = 0; ty = 0; kick(); }});
  }};

  function chrome() {{
    document.getElementById('chrome-head').innerHTML =
      '<header class="site-head"><div class="bar">' + brandmark() +
      '<div class="navwrap"><nav class="nav" id="navlinks">' +
      NAV.map(function (n) {{ return '<a href="' + n[0] + '" data-h="' + n[0] + '">' + n[1] + '</a>'; }}).join('') +
      '</nav><button class="themebtn" id="themebtn" type="button" aria-label="Switch colour theme">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>' +
      '<button class="menubtn" id="menubtn" type="button" aria-label="Menu" aria-expanded="false">' +
      '<span></span><span></span><span></span></button></div></div></header>';
    document.getElementById('chrome-foot').innerHTML =
      '<footer class="site-foot"><div class="inner"><div>' + brandmark('Grades 5–11 · Uzbekistan &amp; Cambridge') + '</div>' +
      '<p class="fnote">Lesson resources for the Uzbekistan national programme and Cambridge Lower Secondary ' +
      'Mathematics. Built around 40-minute lessons: explanation, guided practice, 21 graded problems and short homework.</p>' +
      '</div></footer>';
    var head = document.querySelector('.site-head');
    var mb = document.getElementById('menubtn');
    if (mb) mb.addEventListener('click', function () {{
      var open = head.classList.toggle('open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    }});
    var onScroll = function () {{ head.classList.toggle('scrolled', window.scrollY > 8); }};
    window.addEventListener('scroll', onScroll, {{ passive: true }}); onScroll();
    head.addEventListener('click', function (e) {{ if (e.target.tagName === 'A') head.classList.remove('open'); }});
    var b = document.getElementById('themebtn');
    var KEY = 'akm-theme', saved = null;
    try {{ saved = localStorage.getItem(KEY); }} catch (e) {{ }}
    if (saved === 'dark' || saved === 'light') document.documentElement.setAttribute('data-theme', saved);
    b.addEventListener('click', function () {{
      var cur = document.documentElement.getAttribute('data-theme');
      if (!cur) cur = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {{ localStorage.setItem(KEY, next); }} catch (e) {{ }}
    }});
  }}

  /* rewrite the multi-page links the shared renderers emit into hash routes */
  function fixLinks(scope) {{
    [].forEach.call(scope.querySelectorAll('a[href]'), function (a) {{
      var h = a.getAttribute('href');
      if (/^lesson\\.html\\?t=/.test(h)) a.setAttribute('href', '#/lesson/' + h.split('t=')[1]);
      else if (/^grade\\.html\\?g=/.test(h)) a.setAttribute('href', '#/grade/' + h.split('g=')[1]);
      else if (h === 'index.html') a.setAttribute('href', '#/');
      else if (h === 'grades.html') a.setAttribute('href', '#/grades');
      else if (h === 'about.html') a.setAttribute('href', '#/about');
    }});
  }}

  var ALG = window.G8_ALG || [], GEO = window.G8_GEO || [];
  var ALL = [].concat(ALG, GEO);
  var view = document.getElementById('view');
  var QUARTERS = [
    {{ q: 1, label: 'Quarter I',
       alg: 'Chapter I of <em>Algebra 8</em> — algebraic fractions and the function y = k/x.',
       geo: 'Chapter I of <em>Geometry 8</em> — quadrilaterals, Thales’ theorem and midlines.' }},
    {{ q: 2, label: 'Quarter II',
       alg: 'Chapter I §§8–10 and Chapter II of <em>Algebra 8</em> — roots, rational exponents and numerical inequalities.',
       geo: 'Chapter II of <em>Geometry 8</em> — Pythagoras’ theorem and the trigonometry of the right triangle.' }},
    {{ q: 3, label: 'Quarter III',
       alg: 'Inequalities with one unknown, modulus, approximation and quadratic equations.',
       geo: 'The coordinate method, vectors and the areas of polygons.' }},
    {{ q: 4, label: 'Quarter IV',
       alg: 'Statistics, combinatorics and the Cambridge revision block.',
       geo: 'Circle theorems, transformations and solids.' }}
  ];

  function tile(g) {{
    var live = g.status === 'live';
    return '<a class="gtile ' + (live ? 'live' : 'soon') + '" href="' + (live ? '#/grade/' + g.g : '#/grades') + '">' +
      '<span class="gtag chip ' + (live ? 'solid' : '') + '">' + (live ? 'Open' : 'Soon') + '</span>' +
      '<div class="gnum">' + g.g + '</div><div class="gname">' + g.name + '</div>' +
      '<div class="gmeta">' + g.meta + '</div></a>';
  }}
  function rows(list) {{
    return list.map(function (t) {{
      return '<a class="lrow" href="#/lesson/' + t.id + '"><span class="ln">' + t.lessons + '</span>' +
        '<span><span class="lt">' + t.title + '</span><span class="lm">' + t.hours + ' × 40 min · ' +
        (t.uz || '') + (t.cam ? ' · ' + t.cam : '') + '</span></span>' +
        '<svg class="lgo" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>';
    }}).join('');
  }}

  function render() {{
    var h = (location.hash || '#/').replace(/^#/, '');
    var parts = h.split('/').filter(Boolean);
    var page = parts[0] || 'home';
    var q = function (s) {{ return view.querySelector(s); }};

    if (page === 'lesson') {{
      var T = ALL.filter(function (x) {{ return x.id === parts[1]; }})[0];
      view.innerHTML = VIEWS.lesson;
      if (!T) {{ q('#lmain').innerHTML = '<div style="padding:60px 0"><h2>Lesson not found</h2></div>'; }}
      else {{
        var IDX = ALL.filter(function (x) {{ return x.stream === T.stream && x.quarter === T.quarter; }})
          .map(function (x) {{ return {{ id: x.id, title: x.title, group: 'L ' + x.lessons }}; }});
        window.renderTopic(T, IDX);
      }}
    }} else if (page === 'grade') {{
      view.innerHTML = VIEWS.grade;
      var has = function (n) {{ return ALG.some(function (t) {{ return t.quarter === n; }}); }};
      var hours = function (l) {{ return l.reduce(function (s2, t) {{ return s2 + t.hours; }}, 0); }};
      q('#qtabs').innerHTML = QUARTERS.map(function (Q) {{
        var live = has(Q.q);
        return '<button class="qtab" data-q="' + Q.q + '" aria-pressed="false"' + (live ? '' : ' disabled') +
          '>' + Q.label + ' · ' + (live ? 'live' : 'soon') + '</button>';
      }}).join('');
      var showQ = function (n) {{
        var Q = QUARTERS[n - 1];
        var a = ALG.filter(function (t) {{ return t.quarter === n; }});
        var g = GEO.filter(function (t) {{ return t.quarter === n; }});
        q('#alg-eyebrow').textContent = Q.label; q('#geo-eyebrow').textContent = Q.label;
        q('#alg-head').textContent = 'Algebra — ' + hours(a) + ' hours';
        q('#geo-head').textContent = 'Geometry — ' + hours(g) + ' hours';
        q('#alg-sub').innerHTML = Q.alg; q('#geo-sub').innerHTML = Q.geo;
        q('#alglist').innerHTML = rows(a); q('#geolist').innerHTML = rows(g);
        [].forEach.call(view.querySelectorAll('.qtab'), function (b2) {{
          b2.setAttribute('aria-pressed', +b2.dataset.q === n ? 'true' : 'false');
        }});
        fixLinks(view);
        try {{ sessionStorage.setItem('akm-q', n); }} catch (e) {{ }}
      }};
      [].forEach.call(view.querySelectorAll('.qtab'), function (b2) {{
        b2.addEventListener('click', function () {{ showQ(+b2.dataset.q); }});
      }});
      var st = 1; try {{ var sv = +sessionStorage.getItem('akm-q'); if (sv && has(sv)) st = sv; }} catch (e) {{ }}
      showQ(st);
      q('#gsub').textContent = ALL.length + ' topic pages written so far, each with an explanation, ' +
        'figures, an interactive model, three-language terminology, 21 graded problems and homework.';
    }} else if (page === 'grades') {{
      view.innerHTML = VIEWS.grades;
      q('#gradegrid').innerHTML = GRADES.map(tile).join('');
      q('#roadmap').innerHTML = GRADES.map(function (g) {{
        var live = g.status === 'live';
        return '<tr><td><b>Grade ' + g.g + '</b></td><td>' + g.name + '</td><td><span class="chip ' +
          (live ? 'c-easy' : '') + '">' + (live ? 'Quarter I live' : 'In preparation') + '</span></td><td>' +
          g.meta + '</td></tr>';
      }}).join('');
    }} else if (page === 'about') {{
      view.innerHTML = VIEWS.about;
    }} else {{
      view.innerHTML = VIEWS.home;
      var st2 = q('#stat-topics b'); if (st2) st2.textContent = ALL.length;
      var CLOCK = [[5, 'Warm-up', 'var(--faint)'], [12, 'Explanation', 'var(--brand)'],
                   [8, 'Interactive', 'var(--brass)'], [13, 'Practice', 'var(--easy)'], [2, 'HW', 'var(--hard)']];
      q('#clock').innerHTML = CLOCK.map(function (c) {{
        return '<div style="flex:' + c[0] + ';background:' + c[2] + '">' + c[1] + ' · ' + c[0] + "'</div>";
      }}).join('');
      q('#gradegrid').innerHTML = GRADES.map(tile).join('');
    }}
    fixLinks(view);
    if (window.AKM_initHero) window.AKM_initHero();
    var cur = '#/' + (page === 'home' ? '' : parts.join('/'));
    [].forEach.call(document.querySelectorAll('#navlinks a'), function (a) {{
      a.classList.toggle('on', a.getAttribute('data-h') === cur ||
        (page === 'lesson' && a.getAttribute('data-h') === '#/grade/8'));
    }});
    window.scrollTo(0, 0);
  }}

  chrome();
  window.addEventListener('hashchange', render);
  render();
}})();
</script>
"""
(root / 'standalone.html').write_text(OUT)
print('standalone.html', len(OUT), 'bytes')
