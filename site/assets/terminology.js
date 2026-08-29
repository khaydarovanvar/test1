/* The terminology page. Reads the lesson data files and data/glossary.js and
   renders three views of the same vocabulary: by grade and topic, as an A–Z
   index, and by theme. Nothing is translated at runtime — the three columns
   are written by hand in the data files, which is the whole point of them. */
(function (w, d) {
  'use strict';

  /* The single-file build has no app.js, so AKM_allTopics may not exist. Walk
     the data globals directly rather than depending on it. */
  function allTopics() {
    if (w.AKM_allTopics) return w.AKM_allTopics();
    var out = [], g = [8, 10, 11], i;
    for (i = 0; i < g.length; i++) {
      out = out.concat(w['G' + g[i] + '_ALG'] || [], w['G' + g[i] + '_GEO'] || []);
    }
    return out;
  }
  var TOPICS = allTopics();
  var GLOSS = w.GLOSSARY || [];

  var STREAM = { alg: 'Algebra', geo: 'Geometry' };
  var QNAME = { 1: 'Quarter I', 2: 'Quarter II', 3: 'Quarter III', 4: 'Quarter IV' };

  /* ---------- the A–Z index -------------------------------------------
     One row per distinct English term. Where the same word is used in more
     than one lesson we keep every reference, so a learner can see where it
     was introduced and where it came back. */
  function buildIndex() {
    var map = {};
    TOPICS.forEach(function (t) {
      (t.terms || []).forEach(function (r) {
        var key = String(r[0]).replace(/<[^>]*>/g, '').trim().toLowerCase();
        if (!map[key]) map[key] = { en: r[0], uz: r[1], ru: r[2], where: [] };
        map[key].where.push(t);
      });
    });
    GLOSS.forEach(function (g) {
      g.rows.forEach(function (r) {
        var key = String(r[0]).replace(/<[^>]*>/g, '').trim().toLowerCase();
        if (!map[key]) map[key] = { en: r[0], uz: r[1], ru: r[2], where: [], theme: g.theme };
        else if (!map[key].theme) map[key].theme = g.theme;
      });
    });
    return Object.keys(map).sort(function (a, b) {
      return a.localeCompare(b, 'en');
    }).map(function (k) { return map[k]; });
  }

  var INDEX = buildIndex();

  /* ---------- search ---------------------------------------------------
     Matches any of the three languages. Uzbek is written with ‘ and ’ in the
     data; a learner typing an apostrophe should still find the word, so both
     are folded to a plain quote before comparing. */
  function fold(s) {
    return String(s).replace(/<[^>]*>/g, '')
      .replace(/[‘’ʻʼ`]/g, "'")
      .toLowerCase();
  }
  function hit(row, q) {
    if (!q) return true;
    return fold(row[0]).indexOf(q) > -1 || fold(row[1]).indexOf(q) > -1 || fold(row[2]).indexOf(q) > -1;
  }
  function mark(s, q) {
    if (!q) return s;
    var plain = String(s);
    var i = fold(plain).indexOf(q);
    if (i < 0) return plain;
    return plain.slice(0, i) + '<mark>' + plain.slice(i, i + q.length) + '</mark>' + plain.slice(i + q.length);
  }

  function table(rows, q) {
    return '<div class="tablewrap terms notranslate" translate="no"><table>' +
      '<thead><tr><th>English</th><th>O‘zbekcha</th><th>Русский</th></tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr><td>' + mark(r[0], q) + '</td>' +
          '<td class="uz" lang="uz">' + mark(r[1], q) + '</td>' +
          '<td class="ru" lang="ru">' + mark(r[2], q) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  /* ---------- state ---------------------------------------------------- */
  var state = { view: 'topic', q: '', grade: 'all' };

  var GRADES_WITH_CONTENT = (function () {
    var seen = {}, out = [];
    TOPICS.forEach(function (t) { if (!seen[t.grade]) { seen[t.grade] = 1; out.push(t.grade); } });
    return out.sort(function (a, b) { return a - b; });
  })();

  function filters() {
    if (state.view === 'theme') return '';
    if (state.view === 'az') return '';
    var chips = ['<button class="tchip' + (state.grade === 'all' ? ' on' : '') +
      '" data-grade="all">All grades</button>'];
    GRADES_WITH_CONTENT.forEach(function (g) {
      chips.push('<button class="tchip' + (state.grade === String(g) ? ' on' : '') +
        '" data-grade="' + g + '">Grade ' + g + '</button>');
    });
    return chips.join('');
  }

  /* ---------- view 1: by grade and topic ------------------------------- */
  function viewTopic(q) {
    var shown = 0, words = 0;
    var html = '';
    GRADES_WITH_CONTENT.forEach(function (g) {
      if (state.grade !== 'all' && state.grade !== String(g)) return;
      var inGrade = TOPICS.filter(function (t) { return t.grade === g; });
      var gradeHtml = '';
      ['alg', 'geo'].forEach(function (s) {
        [1, 2, 3, 4].forEach(function (qu) {
          var list = inGrade.filter(function (t) { return t.stream === s && t.quarter === qu; });
          if (!list.length) return;
          var blocks = '';
          list.forEach(function (t) {
            var rows = (t.terms || []).filter(function (r) { return hit(r, q); });
            if (!rows.length) return;
            shown++; words += rows.length;
            blocks += '<article class="tblock">' +
              '<h4><a href="lesson.html?t=' + t.id + '">' + t.title + '</a>' +
              '<span class="tles">Lesson' + (t.hours > 1 ? 's' : '') + ' ' + t.lessons + '</span></h4>' +
              table(rows, q) + '</article>';
          });
          if (!blocks) return;
          gradeHtml += '<div class="tgroup"><h3>' + STREAM[s] + ' · ' + QNAME[qu] + '</h3>' + blocks + '</div>';
        });
      });
      if (gradeHtml) {
        html += '<section class="tgrade"><h2 class="tgh">Grade ' + g + '</h2>' + gradeHtml + '</section>';
      }
    });
    return { html: html, note: shown + ' topic' + (shown === 1 ? '' : 's') + ' · ' + words + ' terms' };
  }

  /* ---------- view 2: A–Z ---------------------------------------------- */
  function viewAZ(q) {
    var rows = INDEX.filter(function (r) { return hit([r.en, r.uz, r.ru], q); });
    var byLetter = {};
    rows.forEach(function (r) {
      var L = String(r.en).replace(/<[^>]*>/g, '').charAt(0).toUpperCase();
      (byLetter[L] = byLetter[L] || []).push(r);
    });
    var letters = Object.keys(byLetter).sort();
    if (!letters.length) return { html: '', note: '0 terms' };
    var jump = '<div class="tjump notranslate" translate="no">' + letters.map(function (L) {
      return '<a href="#az-' + L + '">' + L + '</a>';
    }).join('') + '</div>';
    var html = jump + letters.map(function (L) {
      return '<section class="tletter" id="az-' + L + '"><h2 class="tgh">' + L + '</h2>' +
        '<div class="tablewrap terms notranslate" translate="no"><table>' +
        '<thead><tr><th>English</th><th>O‘zbekcha</th><th>Русский</th><th>Where</th></tr></thead><tbody>' +
        byLetter[L].map(function (r) {
          var where = r.where.length
            ? r.where.slice(0, 3).map(function (t) {
                return '<a href="lesson.html?t=' + t.id + '" title="' + t.title + '">G' + t.grade +
                  ' ' + (t.stream === 'alg' ? 'A' : 'G') + ' L' + t.lessons + '</a>';
              }).join(' ') + (r.where.length > 3 ? ' <em>+' + (r.where.length - 3) + '</em>' : '')
            : '<em>' + (r.theme || 'vocabulary') + '</em>';
          return '<tr><td>' + mark(r.en, q) + '</td>' +
            '<td class="uz" lang="uz">' + mark(r.uz, q) + '</td>' +
            '<td class="ru" lang="ru">' + mark(r.ru, q) + '</td>' +
            '<td class="twhere">' + where + '</td></tr>';
        }).join('') + '</tbody></table></div></section>';
    }).join('');
    return { html: html, note: rows.length + ' distinct term' + (rows.length === 1 ? '' : 's') };
  }

  /* ---------- view 3: by theme ----------------------------------------- */
  function viewTheme(q) {
    var total = 0;
    var html = GLOSS.map(function (g) {
      var rows = g.rows.filter(function (r) { return hit(r, q); });
      if (!rows.length) return '';
      total += rows.length;
      return '<section class="tgrade"><h2 class="tgh">' + g.theme + '</h2>' +
        (g.note ? '<p class="tnote">' + g.note + '</p>' : '') +
        table(rows, q) + '</section>';
    }).join('');
    return { html: html, note: total + ' term' + (total === 1 ? '' : 's') };
  }

  /* ---------- render ---------------------------------------------------- */
  function render() {
    var q = fold(state.q).trim();
    var out = state.view === 'az' ? viewAZ(q) : state.view === 'theme' ? viewTheme(q) : viewTopic(q);
    d.getElementById('tfilters').innerHTML = filters();
    d.getElementById('tcount').textContent = out.note;
    d.getElementById('tbody').innerHTML = out.html ||
      '<p class="tnone">Nothing matches <b>' + (state.q || '') + '</b> in any of the three languages.</p>';
    /* The single-file build rewrites page links into hash routes; this markup
       arrives after its pass, so ask it to run again over what we just wrote. */
    if (w.AKM_fixLinks) w.AKM_fixLinks(d.getElementById('tbody'));
  }

  function stats() {
    var perLesson = 0;
    TOPICS.forEach(function (t) { perLesson += (t.terms || []).length; });
    var extra = 0;
    GLOSS.forEach(function (g) { extra += g.rows.length; });
    return [
      [INDEX.length, 'distinct terms'],
      [perLesson, 'in the lessons'],
      [extra, 'in the themed vocabulary'],
      [3, 'languages']
    ].map(function (s) {
      return '<div class="tstat"><b class="tnum">' + s[0] + '</b><span>' + s[1] + '</span></div>';
    }).join('');
  }

  function boot() {
    d.getElementById('tstats').innerHTML = stats();
    render();

    var box = d.getElementById('tsearch');
    var timer = null;
    box.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { state.q = box.value; render(); }, 110);
    });
    /* Escape clears rather than closing anything — there is no overlay here. */
    box.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.value) { box.value = ''; state.q = ''; render(); }
    });

    Array.prototype.forEach.call(d.querySelectorAll('.tview'), function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(d.querySelectorAll('.tview'), function (o) {
          o.classList.remove('on'); o.setAttribute('aria-selected', 'false');
        });
        b.classList.add('on'); b.setAttribute('aria-selected', 'true');
        state.view = b.getAttribute('data-view');
        render();
      });
    });

    /* The grade chips are rebuilt on every render, so the listener lives on
       their container rather than on each button. */
    d.getElementById('tfilters').addEventListener('click', function (e) {
      var b = e.target.closest('.tchip');
      if (!b) return;
      state.grade = b.getAttribute('data-grade');
      render();
    });
  }

  /* The single-file build injects this markup after load and calls boot again
     on every visit to the route, so boot must be idempotent and reachable. */
  w.AKM_terminology = boot;
  function start() { if (d.getElementById('tbody')) boot(); }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', start);
  else start();
})(window, document);
