/* Renders one lesson from window.LESSONS, in Russian or English.

   Russian is the default: a first-time visitor gets `ru`, and the choice is
   remembered afterwards.  `?lang=en` in the address always wins, so a link can
   point at either version.

   Text carries a very small amount of markup — **bold**, *italic* — and TeX
   between $…$ or $$…$$, which KaTeX renders after the page is built.        */
(function (w, d) {
  'use strict';

  var LANGS = ['ru', 'en'];
  var KEY = 'ml-lang';

  /* ---------------- interface strings ---------------- */
  var UI = {
    ru: {
      home: 'Темы', topics: 'Темы', lessons: 'Олимпиада · 8 класс',
      crumbTopics: 'Темы',
      goals: 'Чему вы научитесь',
      contents: 'Содержание',
      theory: 'Теория',
      problems: 'Задачи',
      problemsWords: ['задача', 'задачи', 'задач'],
      sectionWords: ['раздел', 'раздела', 'разделов'],
      example: 'Пример',
      answer: 'Ответ',
      def: 'Определение', thm: 'Теорема', lemma: 'Лемма', proof: 'Доказательство',
      note: 'Замечание', warn: 'Осторожно', idea: 'Приём',
      hint: 'Подсказка', solution: 'Решение',
      showHint: 'Подсказка', showSol: 'Решение',
      hideHint: 'Скрыть подсказку', hideSol: 'Скрыть решение',
      all: 'Все', lvl1: 'Лёгкие', lvl2: 'Средние', lvl3: 'Сложные', lvl4: 'Олимпиадные',
      srcNote: 'Метка слева показывает уровень тура, для которого задача типична. Конкретное соревнование названо только там, где источник известен точно.',
      shown: function (a, b) { return 'Показано ' + a + ' из ' + b; },
      prev: 'Предыдущая тема', next: 'Следующая тема',
      section: 'Раздел', topic: 'Тема', of: 'из',
      backToTopic: 'Ресурсы темы',
      noLesson: 'Урок по этой теме ещё пишется.',
      openResources: 'Ко всем темам',
      readingTime: function (m) { return '≈ ' + m + ' мин чтения'; }
    },
    en: {
      home: 'Topics', topics: 'Topics', lessons: 'Olympiad · Grade 8',
      crumbTopics: 'Topics',
      goals: 'What you will learn',
      contents: 'Contents',
      theory: 'Theory',
      problems: 'Problems',
      problemsWords: ['problem', 'problems'],
      sectionWords: ['section', 'sections'],
      example: 'Example',
      answer: 'Answer',
      def: 'Definition', thm: 'Theorem', lemma: 'Lemma', proof: 'Proof',
      note: 'Note', warn: 'Careful', idea: 'Technique',
      hint: 'Hint', solution: 'Solution',
      showHint: 'Hint', showSol: 'Solution',
      hideHint: 'Hide hint', hideSol: 'Hide solution',
      all: 'All', lvl1: 'Easy', lvl2: 'Medium', lvl3: 'Hard', lvl4: 'Olympiad',
      srcNote: 'The label on the left gives the round a problem is typical of. A specific competition is named only where the source is known for certain.',
      shown: function (a, b) { return 'Showing ' + a + ' of ' + b; },
      prev: 'Previous topic', next: 'Next topic',
      section: 'Section', topic: 'Topic', of: 'of',
      backToTopic: 'Topic resources',
      noLesson: 'The lesson for this topic is still being written.',
      openResources: 'Back to all topics',
      readingTime: function (m) { return '≈ ' + m + ' min read'; }
    }
  };

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  /* Inline markup and TeX.

     The maths is pulled out first and put back last, so that **bold that
     wraps a formula** still works and so that a formula containing `<` — say
     `$0\\le r<b$` — cannot open a stray tag and swallow the rest of the block.
     KaTeX reads the text node after parsing, so it sees the real characters. */
  var MATH_SPAN = /\$\$[\s\S]+?\$\$|\$[^$]+?\$/g;
  var SEP = '\u0000';

  function inline(text) {
    var kept = [];
    var masked = String(text).replace(MATH_SPAN, function (m) {
      kept.push(m);
      return SEP + (kept.length - 1) + SEP;
    });
    var html = esc(masked)
      .replace(/\*\*([\s\S]+?)\*\*/g, '<b>$1</b>')
      .replace(/\*([^*\n]+?)\*/g, '<em>$1</em>')
      /* A blank line is a paragraph break, a single one a line break. The
         spacer is a span so it stays valid inside <p>, <li> and <td> alike. */
      .replace(/\n{2,}/g, '<span class="vsp"></span>')
      .replace(/\n/g, '<br>');
    return html.replace(new RegExp(SEP + '(\\d+)' + SEP, 'g'), function (_, i) {
      return esc(kept[+i]);
    });
  }

  /* Russian needs three forms; English needs two. */
  function plural(lang, n, forms) {
    if (lang !== 'ru') return n + ' ' + forms[n === 1 ? 0 : 1];
    var a = n % 10, b = n % 100;
    var f = (a === 1 && b !== 11) ? 0
          : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? 1 : 2;
    return n + ' ' + forms[f];
  }

  function pick(v, lang) {
    if (v == null) return '';
    return (typeof v === 'object' && !Array.isArray(v)) ? (v[lang] != null ? v[lang] : v.en) : v;
  }

  /* ---------------- block renderers ---------------- */
  function block(b, lang, t) {
    var label = { def: t.def, thm: t.thm, lemma: t.lemma, proof: t.proof,
                  note: t.note, warn: t.warn, idea: t.idea };
    var txt = inline(pick(b.text, lang));

    switch (b.t) {
      case 'p':
        return '<p>' + txt + '</p>';

      case 'def': case 'thm': case 'lemma': case 'idea': {
        var name = pick(b.name, lang);
        return '<div class="blk blk--' + b.t + '"><span class="bt">' +
          esc(label[b.t]) + (name ? ' · ' + esc(name) : '') + '</span>' + txt + '</div>';
      }

      case 'proof': case 'note': case 'warn':
        return '<div class="blk blk--' + b.t + '"><span class="bt">' +
          esc(label[b.t]) + '</span>' + txt + '</div>';

      case 'eq':
        return '<p>$$' + b.tex + '$$</p>';

      case 'ul': case 'ol': {
        var items = pick(b.items, lang) || [];
        return '<' + b.t + '>' + items.map(function (i) {
          return '<li>' + inline(i) + '</li>';
        }).join('') + '</' + b.t + '>';
      }

      case 'table': {
        var head = pick(b.head, lang) || [], rows = pick(b.rows, lang) || [];
        return '<div class="ltable"><table><thead><tr>' +
          head.map(function (h) { return '<th>' + inline(h) + '</th>'; }).join('') +
          '</tr></thead><tbody>' +
          rows.map(function (r) {
            return '<tr>' + r.map(function (c) { return '<td>' + inline(c) + '</td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>';
      }

      /* A figure. The SVG is authored in the lesson file and is language-free;
         only its caption is translated. It carries no width/height so the CSS
         can scale it with the column on a phone. */
      case 'fig':
        return '<figure class="lfig">' + b.svg +
          '<figcaption>' + inline(pick(b.cap, lang)) + '</figcaption></figure>';

      case 'ex': {
        var steps = pick(b.steps, lang) || [];
        return '<div class="ex">' +
          '<div class="ex-q"><span class="tag">' + esc(t.example) + '</span><span>' +
          inline(pick(b.q, lang)) + '</span></div>' +
          '<ol class="ex-steps">' + steps.map(function (s) {
            return '<li>' + inline(s) + '</li>';
          }).join('') + '</ol>' +
          '<div class="ex-ans"><span class="tag">' + esc(t.answer) + '</span><span>' +
          inline(pick(b.ans, lang)) + '</span></div></div>';
      }
    }
    return '';
  }

  /* ---------------- the page ---------------- */
  function render(L, lang) {
    var t = UI[lang];
    var idx = (w.LESSON_INDEX || []).map(function (e) { return e.n; }).sort(function (a, b) { return a - b; });
    var pos = idx.indexOf(L.n);
    var prevN = idx[pos - 1], nextN = idx[pos + 1];
    var byN = {};
    (w.LESSON_INDEX || []).forEach(function (e) { byN[e.n] = e; });

    d.documentElement.lang = lang;
    d.body.setAttribute('data-cat', L.cat);
    d.title = pick(L.title, lang) + ' — ' + t.lessons;

    /* head */
    d.getElementById('lhead').innerHTML =
      '<div class="lbig" aria-hidden="true">' + L.n + '</div>' +
      '<div class="container">' +
        '<p class="crumb"><a href="index.html">' + esc(t.home) + '</a> / ' +
          esc(t.topic) + ' ' + L.n + '</p>' +
        '<h1>' + inline(pick(L.title, lang)) + '</h1>' +
        '<p class="lsub">' + inline(pick(L.sub, lang)) + '</p>' +
        '<div class="lmeta">' +
          '<span>' + esc(t.topic) + ' <b>' + L.n + '</b> ' + esc(t.of) + ' ' +
          ((w.TOPICS || []).length || (w.LESSON_INDEX || []).length) + '</span>' +
          '<span>' + esc(plural(lang, L.sections.length, t.sectionWords)) + '</span>' +
          '<span><b>' + esc(plural(lang, L.problems.length, t.problemsWords)) + '</b></span>' +
        '</div>' +
      '</div>';

    /* goals */
    var html = '<div class="goals"><h2>' + esc(t.goals) + '</h2><ul>' +
      (pick(L.goals, lang) || []).map(function (g) {
        return '<li>' + inline(g) + '</li>';
      }).join('') + '</ul></div>';

    /* theory */
    html += L.sections.map(function (sec, i) {
      return '<section class="lsec" id="s' + i + '">' +
        '<h2><span class="sn">' + String(i + 1).padStart(2, '0') + '</span>' +
        inline(pick(sec.h, lang)) + '</h2>' +
        sec.blocks.map(function (b) { return block(b, lang, t); }).join('') +
        '</section>';
    }).join('');

    /* problems */
    html += '<section class="lsec psec" id="problems">' +
      '<h2><span class="sn">' + esc(t.problems) + '</span>' + esc(plural(lang, L.problems.length, t.problemsWords)) + '</h2>' +
      '<div class="pbar">' +
        ['all', 1, 2, 3, 4].map(function (k) {
          var lbl = k === 'all' ? t.all : t['lvl' + k];
          return '<button class="pbtn' + (k === 'all' ? ' on' : '') + '" data-lvl="' + k + '">' +
            esc(lbl) + '</button>';
        }).join('') +
        '<span class="sp" id="pcount"></span>' +
      '</div>' +
      '<p class="psrc-note">' + esc(t.srcNote) + '</p>' +
      L.problems.map(function (p, i) {
        return '<article class="prob" data-lvl="' + p.lvl + '">' +
          '<div class="prob-top">' +
            '<span class="prob-n">' + (i + 1) + '</span>' +
            '<span class="prob-src">' + esc(p.src) + '</span>' +
            '<span class="lvl lvl-' + p.lvl + '">' + esc(t['lvl' + p.lvl]) + '</span>' +
          '</div>' +
          '<div class="prob-q">' + inline(pick(p.q, lang)) + '</div>' +
          /* an optional diagram, for the geometry problems */
          (p.svg ? '<figure class="lfig lfig--prob">' + p.svg + '</figure>' : '') +
          '<div class="prob-acts">' +
            '<button class="pbtn" data-open="hint">' + esc(t.showHint) + '</button>' +
            '<button class="pbtn" data-open="sol">' + esc(t.showSol) + '</button>' +
          '</div>' +
          '<div class="reveal reveal--hint"><span class="bt">' + esc(t.hint) + '</span>' +
            inline(pick(p.hint, lang)) + '</div>' +
          '<div class="reveal reveal--sol"><span class="bt">' + esc(t.solution) + '</span>' +
            inline(pick(p.sol, lang)) + '</div>' +
          '</article>';
      }).join('') +
      '</section>';

    /* prev / next */
    function navLink(n, cls, label) {
      if (!n) return cls === 'next' ? '' : '<span></span>';
      return '<a class="' + cls + '" href="lesson.html?t=' + n + '">' +
        '<small>' + esc(label) + '</small>' + inline(pick(byN[n].title, lang)) + '</a>';
    }
    html += '<nav class="lnav">' +
      navLink(prevN, 'prev', '← ' + t.prev) +
      navLink(nextN, 'next', t.next + ' →') + '</nav>';

    d.getElementById('lbody').innerHTML = html;

    /* contents */
    d.getElementById('ltoc').innerHTML = '<h3>' + esc(t.contents) + '</h3>' +
      L.sections.map(function (sec, i) {
        return '<a href="#s' + i + '">' + inline(pick(sec.h, lang)) + '</a>';
      }).join('') +
      '<a href="#problems">' + esc(t.problems) + '</a>';

    wire(t);
    typeset();
  }

  /* ---------------- interaction ---------------- */
  function wire(t) {
    var body = d.getElementById('lbody');

    body.addEventListener('click', function (e) {
      var open = e.target.closest('[data-open]');
      if (open) {
        var kind = open.getAttribute('data-open');
        var panel = open.closest('.prob').querySelector('.reveal--' + kind);
        var now = panel.classList.toggle('on');
        open.classList.toggle('on', now);
        open.textContent = now
          ? (kind === 'hint' ? t.hideHint : t.hideSol)
          : (kind === 'hint' ? t.showHint : t.showSol);
        return;
      }
      var lvl = e.target.closest('[data-lvl]');
      if (lvl && lvl.tagName === 'BUTTON') {
        var want = lvl.getAttribute('data-lvl');
        Array.prototype.forEach.call(body.querySelectorAll('.pbar .pbtn'), function (b) {
          b.classList.toggle('on', b === lvl);
        });
        var shown = 0, all = 0;
        Array.prototype.forEach.call(body.querySelectorAll('.prob'), function (p) {
          all++;
          var ok = want === 'all' || p.getAttribute('data-lvl') === want;
          p.hidden = !ok;
          if (ok) shown++;
        });
        d.getElementById('pcount').textContent = t.shown(shown, all);
      }
    });

    /* highlight the section the reader is in */
    var links = Array.prototype.slice.call(d.querySelectorAll('.ltoc a'));
    var secs = links.map(function (a) { return d.getElementById(a.getAttribute('href').slice(1)); });
    if (w.IntersectionObserver) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (a, i) { a.classList.toggle('on', secs[i] === en.target); });
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      secs.forEach(function (s) { if (s) io.observe(s); });
    }
  }

  function typeset() {
    if (!w.renderMathInElement) return;
    w.renderMathInElement(d.getElementById('lbody'), {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false,
      ignoredClasses: ['prob-src']
    });
    var head = d.getElementById('lhead');
    if (head) w.renderMathInElement(head, {
      delimiters: [{ left: '$', right: '$', display: false }], throwOnError: false
    });
  }

  /* ---------------- language ---------------- */
  function currentLang() {
    var q = (location.search.match(/[?&]lang=(ru|en)/) || [])[1];
    if (q) return q;
    try {
      var saved = localStorage.getItem(KEY);
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) { /* private mode: fall through to the default */ }
    return 'ru';                                   // Russian by default
  }

  function setLang(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* nothing to do */ }
    var url = new URL(location.href);
    url.searchParams.set('lang', lang);
    location.replace(url.toString());
  }

  function mountSwitch(lang) {
    Array.prototype.forEach.call(d.querySelectorAll('.langsw'), function (sw) {
      sw.innerHTML = LANGS.map(function (l) {
        return '<button data-lang="' + l + '"' + (l === lang ? ' class="on"' : '') + '>' +
          (l === 'ru' ? 'РУС' : 'ENG') + '</button>';
      }).join('');
      /* One listener per switch, however often the buttons are redrawn. */
      if (sw.getAttribute('data-bound')) return;
      sw.setAttribute('data-bound', '1');
      sw.addEventListener('click', function (e) {
        var b = e.target.closest('[data-lang]');
        if (b) setLang(b.getAttribute('data-lang'));
      });
    });
  }

  /* ---------------- boot ---------------- */
  w.MLLESSON = {
    lang: currentLang,
    mountSwitch: mountSwitch,
    start: function () {
      var lang = currentLang();
      mountSwitch(lang);
      var n = parseInt((location.search.match(/[?&]t=(\d+)/) || [])[1], 10) || 1;
      var L = (w.LESSONS || {})[n];
      if (!L) {
        var t = UI[lang];
        d.getElementById('lhead').innerHTML =
          '<div class="container"><h1>' + esc(t.noLesson) + '</h1></div>';
        d.getElementById('lbody').innerHTML =
          '<p><a class="btn" href="index.html">' + esc(t.openResources) + ' →</a></p>';
        return;
      }
      render(L, lang);
    }
  };
})(window, document);
