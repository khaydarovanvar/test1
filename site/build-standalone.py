#!/usr/bin/env python3
"""Assemble the whole site into one self-contained HTML file with hash routing."""
import pathlib, html
root = pathlib.Path(__file__).parent
R = lambda p: (root / p).read_text()

CSS = R('assets/styles.css') + "\n" + R('assets/pages.css')
JS_LIBS = "\n".join(R(f) for f in [
    'assets/mathfmt.js', 'assets/figures.js', 'assets/interactive.js',
    'assets/lesson.js', 'data/grades.js',
    'data/g6-mat.js', 'data/g7-mat.js',
    'data/g8-alg.js', 'data/g8-geo.js',
    'data/g9-alg.js', 'data/g9-geo.js',
    'data/g10-alg.js', 'data/g10-geo.js',
    'data/g11-alg.js', 'data/g11-geo.js', 'data/glossary.js'])

# the home hero + sections, lifted from index.html
idx = R('index.html')
HOME = idx.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
grd = R('grade.html')
GRADE = grd.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
abt = R('about.html')
ABOUT = abt.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
grs = R('grades.html')
GRADES = grs.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
trm = R('terminology.html')
TERMS = trm.split('<div id="site-header"></div>', 1)[1].split('<div id="site-footer"></div>', 1)[0].strip()
# the page script runs itself on DOMContentLoaded, which has already fired inside
# the single file — so it is appended after the router and re-run on each visit.
TERMS_JS = R('assets/terminology.js')
LESSON = ('<div class="lhead" id="lhead"></div><div class="lbody">'
          '<main class="lmain" id="lmain"></main><aside class="lside" id="lside"></aside></div>')

LOGO = """<svg viewBox="0 0 64 64" role="img" aria-label="Anvarbek Khaydarov Mathematics">\
<path class="lg-arc" d="M40.03 56.73 A26 26 0 1 1 54.96 44.21" fill="none" stroke="var(--brass)" \
stroke-width="2.6" stroke-linecap="round"/>\
<circle class="lg-nib" cx="54.96" cy="44.21" r="2.9" fill="var(--brass)"/>\
<path class="lg-a" d="M32 15 L20 47 M32 15 L44 47 M24.2 36 H39.8" fill="none" stroke="currentColor" \
stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round"/></svg>"""

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

<div class="preload" id="preload" role="status" aria-live="polite">
  <div class="pl-in">
    <svg class="pl-mark" viewBox="0 0 64 64" aria-hidden="true">
      <path class="pl-arc" d="M40.03 56.73 A26 26 0 1 1 54.96 44.21" fill="none"
            stroke="var(--brass)" stroke-width="2.6" stroke-linecap="round"/>
      <circle class="pl-nib" cx="54.96" cy="44.21" r="2.9" fill="var(--brass)"/>
      <path class="pl-a" d="M32 15 L20 47 M32 15 L44 47 M24.2 36 H39.8" fill="none"
            stroke="currentColor" stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <p class="pl-name">Anvarbek Khaydarov</p>
    <p class="pl-sub">Mathematics &middot; Grades 5&ndash;11</p>
    <div class="pl-bar"><i></i></div>
  </div>
</div>

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
    terms:  `{js(TERMS)}`,
    lesson: `{js(LESSON)}`
  }};
  var NAV = [['#/', 'Home'], ['#/grades', 'Grades 5–11'], ['#/terminology', 'Terminology'], ['#/about', 'About the course']];

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

  /* Preloader and topic search, matching assets/app.js. See the comments there
     for why the preloader has both a minimum and a hard maximum. */
  function standalonePreloader() {{
    var el = document.getElementById('preload');
    if (!el) return;
    var seen = false;
    try {{ seen = sessionStorage.getItem('akm-seen') === '1'; }} catch (e) {{ }}
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || still) {{ el.parentNode.removeChild(el); return; }}
    try {{ sessionStorage.setItem('akm-seen', '1'); }} catch (e) {{ }}
    var start = Date.now(), gone = false;
    function dismiss() {{
      if (gone) return;
      gone = true;
      el.classList.add('done');
      setTimeout(function () {{ if (el.parentNode) el.parentNode.removeChild(el); }}, 460);
    }}
    function whenReady() {{ setTimeout(dismiss, Math.max(0, 1150 - (Date.now() - start))); }}
    if (document.readyState === 'complete') whenReady();
    else window.addEventListener('load', whenReady);
    setTimeout(dismiss, 2400);
  }}

  function standaloneSearch() {{
    var btn = document.getElementById('findbtn');
    if (!btn) return;
    var idx = ALL_TOPICS().map(function (t) {{
      var terms = (t.terms || []).map(function (r) {{ return r.join(' '); }}).join(' ');
      return {{
        id: t.id, title: t.title,
        lcTitle: t.title.toLowerCase(),
        lcSub: (t.subtitle || '').toLowerCase(),
        meta: 'Grade ' + t.grade + ' · ' + (t.stream === 'alg' ? 'Algebra' : 'Geometry') +
          ' · Quarter ' + t.quarter + ' · L' + t.lessons,
        hay: (t.title + ' ' + (t.subtitle || '') + ' ' + terms + ' ' +
              (t.uz || '') + ' ' + (t.cam || '')).toLowerCase()
      }};
    }});
    function open() {{
      if (!idx.length || document.querySelector('.findlayer')) return;
      var box = document.createElement('div');
      box.className = 'findlayer';
      box.innerHTML =
        '<div class="findbox" role="dialog" aria-modal="true" aria-label="Search the topics">' +
        '<div class="findtop"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" ' +
        'stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/>' +
        '<path d="M20 20l-4.3-4.3"/></svg>' +
        '<input type="search" id="findin" placeholder="Search 95 topics — try &quot;chord&quot;, &quot;vatar&quot;, &quot;хорда&quot;" ' +
        'autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>' +
        '<div class="findlist" id="findlist"></div></div>';
      document.body.appendChild(box);
      var input = box.querySelector('#findin'), list = box.querySelector('#findlist'), sel = 0, hits = [];
      function draw() {{
        if (!hits.length) {{ list.innerHTML = '<p class="findnone">Nothing matched. Try a shorter word.</p>'; return; }}
        list.innerHTML = hits.map(function (h, i) {{
          return '<a class="findrow' + (i === sel ? ' on' : '') + '" href="#/lesson/' + h.id +
            '"><span class="ft">' + h.title + '</span><span class="fm">' + h.meta + '</span></a>';
        }}).join('');
        var on = list.querySelector('.on');
        if (on) on.scrollIntoView({{ block: 'nearest' }});
      }}
      function run() {{
        var q = input.value.trim().toLowerCase();
        hits = idx.slice();
        if (q) {{
          hits = [];
          for (var i = 0; i < idx.length; i++) {{
            var t = idx[i], score = 0;
            if (t.lcTitle.indexOf(q) === 0) score = 4;
            else if (t.lcTitle.indexOf(q) > -1) score = 3;
            else if (t.lcSub.indexOf(q) > -1) score = 2;
            else if (t.hay.indexOf(q) > -1) score = 1;
            if (score) hits.push({{ t: t, s: score, i: i }});
          }}
          hits.sort(function (a, b) {{ return b.s - a.s || a.i - b.i; }});
          hits = hits.map(function (h) {{ return h.t; }});
        }}
        hits = hits.slice(0, 40);
        sel = 0; draw();
      }}
      function shut() {{ if (box.parentNode) box.parentNode.removeChild(box); }}
      input.addEventListener('input', run);
      box.addEventListener('click', function (e) {{ if (e.target === box) shut(); }});
      list.addEventListener('click', function () {{ setTimeout(shut, 0); }});
      document.addEventListener('keydown', function onKey(e) {{
        if (!box.parentNode) {{ document.removeEventListener('keydown', onKey); return; }}
        if (e.key === 'Escape') shut();
        else if (e.key === 'ArrowDown') {{ e.preventDefault(); sel = Math.min(sel + 1, hits.length - 1); draw(); }}
        else if (e.key === 'ArrowUp') {{ e.preventDefault(); sel = Math.max(sel - 1, 0); draw(); }}
        else if (e.key === 'Enter' && hits[sel]) {{ window.location.hash = '#/lesson/' + hits[sel].id; shut(); }}
      }});
      run(); input.focus();
    }}
    btn.addEventListener('click', open);
    document.addEventListener('keydown', function (e) {{
      if (e.key !== '/' || e.ctrlKey || e.metaKey) return;
      var t = e.target.tagName;
      if (t === 'INPUT' || t === 'TEXTAREA' || t === 'SELECT') return;
      e.preventDefault(); open();
    }});
  }}

  function chrome() {{
    document.getElementById('chrome-head').innerHTML =
      '<header class="site-head"><div class="bar">' + brandmark() +
      '<div class="navwrap"><nav class="nav" id="navlinks">' +
      NAV.map(function (n) {{
        if (n[0] !== '#/grades') return '<a href="' + n[0] + '" data-h="' + n[0] + '">' + n[1] + '</a>';
        return '<span class="hasmenu"><a href="' + n[0] + '" data-h="' + n[0] + '">' + n[1] +
          '<svg class="caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
          'stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a>' +
          '<span class="submenu">' + [5,6,7,8,9,10,11].map(function (g) {{
            return '<a href="#/grade/' + g + '">Grade ' + g +
              (g === 8 ? '<em>all 95 lessons</em>' : '<em>coming</em>') + '</a>';
          }}).join('') + '</span></span>';
      }}).join('') +
      '</nav><div class="findwrap"><button class="findbtn" id="findbtn" type="button" ' +
      'aria-label="Search the topics" title="Search the topics">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/>' +
      '<path d="M20 20l-4.3-4.3"/></svg></button></div>' +
      '<button class="themebtn" id="themebtn" type="button" aria-label="Switch colour theme">' +
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
    standalonePreloader();
    standaloneSearch();
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
  window.AKM_fixLinks = fixLinks;
  function fixLinks(scope) {{
    [].forEach.call(scope.querySelectorAll('a[href]'), function (a) {{
      var h = a.getAttribute('href');
      if (/^lesson\\.html\\?t=/.test(h)) a.setAttribute('href', '#/lesson/' + h.split('t=')[1]);
      else if (/^grade\\.html\\?g=/.test(h)) a.setAttribute('href', '#/grade/' + h.split('g=')[1]);
      else if (h === 'index.html') a.setAttribute('href', '#/');
      else if (h === 'grades.html') a.setAttribute('href', '#/grades');
      else if (h === 'about.html') a.setAttribute('href', '#/about');
      else if (h === 'terminology.html') a.setAttribute('href', '#/terminology');
    }});
  }}

  var GRADE_KEYS = [8, 10, 11];
  function ALL_TOPICS() {{
    var out = [];
    for (var gi = 0; gi < GRADE_KEYS.length; gi++) {{
      out = out.concat(window['G' + GRADE_KEYS[gi] + '_ALG'] || [],
                       window['G' + GRADE_KEYS[gi] + '_GEO'] || []);
    }}
    return out;
  }}
  var ALL = ALL_TOPICS();
  var view = document.getElementById('view');

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
        var IDX = ALL.filter(function (x) {{ return x.grade === T.grade && x.stream === T.stream && x.quarter === T.quarter; }})
          .map(function (x) {{ return {{ id: x.id, title: x.title, group: 'L ' + x.lessons }}; }});
        window.renderTopic(T, IDX);
      }}
    }} else if (page === 'grade') {{
      view.innerHTML = VIEWS.grade;
      var GN = +(parts[1] || 8);
      var INFO = (window.GRADE_INFO || {{}})[GN];
      if (!INFO) {{ location.hash = '#/grades'; return; }}
      var QUARTERS = INFO.quarters;
      var ALG = window['G' + GN + '_ALG'] || [], GEO = window['G' + GN + '_GEO'] || [];
      var gc = q('#gcrumb'); if (gc) gc.textContent = 'Grade ' + GN;
      var gt = q('#gtitle'); if (gt) gt.textContent = INFO.title;
      var ql = q('#qlede'); if (ql) ql.innerHTML = INFO.lede;
      var sg = q('#streamgrid');
      if (sg) sg.innerHTML = INFO.streams.map(function (sd) {{
        return '<div class="scard" style="--sc:var(--' + sd[0] + ')"><div class="lbl">' + sd[1] +
          '</div><h3>' + sd[2] + '</h3><p>' + sd[3] + '</p><div class="figs">' + sd[4] + '</div></div>';
      }}).join('');
      var has = function (n) {{
        return ALG.some(function (t) {{ return t.quarter === n; }}) ||
               GEO.some(function (t) {{ return t.quarter === n; }});
      }};
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
        try {{ sessionStorage.setItem('akm-q-' + GN, n); }} catch (e) {{ }}
      }};
      [].forEach.call(view.querySelectorAll('.qtab'), function (b2) {{
        b2.addEventListener('click', function () {{ showQ(+b2.dataset.q); }});
      }});
      var st = 0;
      for (var qq = 1; qq <= 4; qq++) {{ if (has(qq)) {{ st = qq; break; }} }}
      try {{ var sv = +sessionStorage.getItem('akm-q-' + GN); if (sv && has(sv)) st = sv; }} catch (e) {{ }}
      showQ(st || 1);
      q('#gsub').textContent = (ALG.length + GEO.length) + ' topic pages written so far, each with an explanation, ' +
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
    }} else if (page === 'terminology') {{
      view.innerHTML = VIEWS.terms;
      if (window.AKM_terminology) window.AKM_terminology();
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
{TERMS_JS}
</script>
"""
(root / 'standalone.html').write_text(OUT)
print('standalone.html', len(OUT), 'bytes')
