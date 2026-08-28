#!/usr/bin/env python3
"""Assemble the whole site into one self-contained HTML file with hash routing."""
import pathlib, html
root = pathlib.Path(__file__).parent
R = lambda p: (root / p).read_text()

CSS = R('assets/styles.css') + "\n" + R('assets/pages.css')
JS_LIBS = "\n".join(R(f) for f in [
    'assets/mathfmt.js', 'assets/figures.js', 'assets/interactive.js',
    'assets/lesson.js', 'data/grades.js', 'data/g8-alg-q1.js', 'data/g8-geo-q1.js'])

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

OUT = f"""<title>Anvarbek Khaydarov · Mathematics</title>
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
  function chrome() {{
    document.getElementById('chrome-head').innerHTML =
      '<header class="site-head"><div class="bar">' + brandmark() + '<nav class="nav" id="navlinks">' +
      NAV.map(function (n) {{ return '<a href="' + n[0] + '" data-h="' + n[0] + '">' + n[1] + '</a>'; }}).join('') +
      '<button class="themebtn" id="themebtn" type="button" aria-label="Switch colour theme">' +
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button>' +
      '</nav></div></header>';
    document.getElementById('chrome-foot').innerHTML =
      '<footer class="site-foot"><div class="inner"><div>' + brandmark('Grades 5–11 · Uzbekistan &amp; Cambridge') + '</div>' +
      '<p class="fnote">Lesson resources for the Uzbekistan national programme and Cambridge Lower Secondary ' +
      'Mathematics. Built around 40-minute lessons: explanation, guided practice, 21 graded problems and short homework.</p>' +
      '<p class="fnote">Textbooks referenced — <em>Algebra 8</em>, Alimov · Xalmuxamedov · Mirzaxmedov (O‘qituvchi, 2019) · ' +
      '<em>Geometry 8</em>, Rahimkariev · Toxtaxodjaeva (2019) · <em>Cambridge Lower Secondary Mathematics 9</em>, ' +
      'Learner’s Book &amp; Workbook.</p></div></footer>';
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

  var ALL = [].concat(window.G8_ALG_Q1 || [], window.G8_GEO_Q1 || []);
  var INDEX = ALL.map(function (t) {{ return {{ id: t.id, title: t.title }}; }});
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
      else window.renderTopic(T, INDEX);
    }} else if (page === 'grade') {{
      view.innerHTML = VIEWS.grade;
      q('#alglist').innerHTML = rows(window.G8_ALG_Q1 || []);
      q('#geolist').innerHTML = rows(window.G8_GEO_Q1 || []);
      q('#gsub').textContent = 'Quarter I is complete: ' + ALL.length +
        ' topic pages covering 45 lessons, each with an explanation, figures, an interactive model, ' +
        '21 graded problems and homework.';
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
      q('#heromark').innerHTML = LOGO;
      var CLOCK = [[5, 'Warm-up', 'var(--faint)'], [12, 'Explanation', 'var(--brand)'],
                   [8, 'Interactive', 'var(--brass)'], [13, 'Practice', 'var(--easy)'], [2, 'HW', 'var(--hard)']];
      q('#clock').innerHTML = CLOCK.map(function (c) {{
        return '<div style="flex:' + c[0] + ';background:' + c[2] + '">' + c[1] + ' · ' + c[0] + "'</div>";
      }}).join('');
      q('#gradegrid').innerHTML = GRADES.map(tile).join('');
    }}
    fixLinks(view);
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
