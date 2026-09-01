/* Renders one topic page from a TOPIC object. */
(function (w, d) {
  'use strict';
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  // {{fig:name}} -> inline SVG figure
  function figs(html) {
    return String(html).replace(/\{\{fig:([a-zA-Z0-9_]+)(?::([^}]*))?\}\}/g, function (_, name, cap) {
      var fn = w.FIG && w.FIG[name];
      if (!fn) return '<p class="small">[missing figure: ' + name + ']</p>';
      return '<figure class="fig">' + fn() +
        (cap ? '<figcaption>' + cap + '</figcaption>' : '') + '</figure>';
    });
  }

  function levelBlock(title, cls, chip, items) {
    var id = 'pl' + Math.random().toString(36).slice(2, 7);
    return '<div class="plevel ' + cls + '">' +
      '<div class="ph"><h3>' + title + '</h3><span class="chip ' + chip + '">' + items.length + ' problems</span>' +
      '<button class="btn sm no-print pc-btn" type="button" data-t="' + id + '">Show answers</button></div>' +
      '<ol class="probs" id="' + id + '">' +
      items.map(function (it) {
        return '<li><div><div class="pq">' + it[0] + '</div>' +
          '<div class="pa"><span class="al">Answer</span>' + it[1] + '</div></div><span></span></li>';
      }).join('') + '</ol></div>';
  }

  /* translate="no" throughout: these three columns ARE the lesson content.
     Letting a machine translator rewrite the Uzbek and Russian terms would
     destroy the one thing the table is for. */
  function termsTable(list) {
    return '<div class="tablewrap terms notranslate" translate="no"><table>' +
      '<thead><tr><th>English</th><th>O‘zbekcha</th><th>Русский</th></tr></thead><tbody>' +
      list.map(function (t) {
        return '<tr><td>' + t[0] + '</td><td class="uz" lang="uz">' + t[1] +
          '</td><td class="ru" lang="ru">' + t[2] + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  w.renderTopic = function (T, INDEX) {
    d.title = T.title + ' · Grade ' + T.grade + ' · Anvarbek Khaydarov';
    var streamName = T.stream === 'alg' ? 'Algebra' : 'Geometry';

    /* ---- header ---- */
    var i0 = INDEX.findIndex(function (x) { return x.id === T.id; });
    var prev0 = INDEX[i0 - 1], next0 = INDEX[i0 + 1];
    var opts = INDEX.map(function (x) {
      return '<option value="' + x.id + '"' + (x.id === T.id ? ' selected' : '') + '>' +
        (x.group ? x.group + ' · ' : '') + x.title + '</option>';
    }).join('');
    var arrow = function (dir) {
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="' +
        (dir < 0 ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6') + '"/></svg>';
    };

    var head = d.getElementById('lhead');
    head.innerHTML = '<div class="inner">' +
      '<div class="lnav no-print">' +
      '<a class="backbtn" href="grade.html?g=' + T.grade + '" id="backbtn">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M19 12H5M11 5l-7 7 7 7"/></svg>Back to Grade ' + T.grade + '</a>' +
      '<span class="jump"><select id="jumpsel" aria-label="Jump to another topic">' + opts + '</select></span>' +
      '<span class="stepper">' +
      '<a class="stepbtn" href="' + (prev0 ? 'lesson.html?t=' + prev0.id : '#') + '"' +
      (prev0 ? ' title="' + prev0.title + '"' : ' aria-disabled="true"') + ' aria-label="Previous topic">' + arrow(-1) + '</a>' +
      '<a class="stepbtn" href="' + (next0 ? 'lesson.html?t=' + next0.id : '#') + '"' +
      (next0 ? ' title="' + next0.title + '"' : ' aria-disabled="true"') + ' aria-label="Next topic">' + arrow(1) + '</a>' +
      '</span></div>' +
      '<p class="crumb"><a href="index.html">Home</a> / <a href="grade.html?g=' + T.grade + '">Grade ' +
      T.grade + '</a> / ' + streamName + ' / Quarter ' + T.quarter + '</p>' +
      '<h1>' + T.title + '</h1>' +
      (T.subtitle ? '<p class="lede" style="margin-top:12px">' + T.subtitle + '</p>' : '') +
      '<div class="ltags">' +
      '<span class="chip solid">Lesson ' + T.lessons + '</span>' +
      '<span class="chip">' + T.hours + ' × 40 min</span>' +
      (T.uz ? '<span class="chip c-uz">' + T.uz + '</span>' : '') +
      (T.cam ? '<span class="chip c-cam">' + T.cam + '</span>' : '') +
      '</div></div>';

    /* ---- sidebar ---- */
    var side = d.getElementById('lside');
    var clock = (T.timing || [[5, 'Warm-up'], [12, 'Explanation'], [8, 'Interactive'], [13, 'Practice'], [2, 'Homework']]);
    var cols = ['var(--faint)', 'var(--brand)', 'var(--brass)', 'var(--easy)', 'var(--hard)'];
    side.innerHTML =
      '<div class="sbox"><h5>Lesson clock</h5>' +
      '<div class="clock" style="margin:0 0 12px">' + clock.map(function (c, i) {
        return '<div style="flex:' + c[0] + ';background:' + cols[i % cols.length] + '" title="' +
          c[1] + '">' + c[0] + "'</div>";
      }).join('') + '</div>' +
      clock.map(function (c, i) {
        return '<div class="kv"><b>' + c[1] + '</b><span>' + c[0] + ' min</span></div>';
      }).join('') + '</div>' +
      '<div class="sbox"><h5>Learning objectives</h5><ul>' +
      T.objectives.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>' +
      '<div class="sbox"><h5>Textbook</h5>' +
      (T.uz ? '<div class="kv"><b>National</b><span>' + T.uzPage + '</span></div>' : '') +
      (T.camPage ? '<div class="kv"><b>Cambridge</b><span>' + T.camPage + '</span></div>' : '') +
      (T.wb ? '<div class="kv"><b>Workbook</b><span>' + T.wb + '</span></div>' : '') +
      '</div>' +
      '<div class="sbox no-print"><h5>On this page</h5><nav class="tocnav">' +
      '<a href="#explain">Explanation</a><a href="#examples">Worked examples</a>' +
      '<a href="#model">Interactive model</a><a href="#terms">Terminology</a>' +
      '<a href="#check">Quick check</a>' +
      '<a href="#practice">Practice · 21</a><a href="#homework">Homework</a></nav></div>' +
      '<div class="sbox no-print"><button class="btn sm" type="button" onclick="window.print()">Print this lesson</button></div>';

    /* ---- main ---- */
    var main = d.getElementById('lmain');
    var html = '';

    html += '<section class="lsec" id="explain"><h2><span class="sn">01</span>Explanation</h2>';
    T.sections.forEach(function (s) {
      if (s.h) html += '<h3 style="margin:28px 0 12px">' + s.h + '</h3>';
      html += '<div class="prose">' + figs(s.html) + '</div>';
    });
    html += '</section>';

    if (T.examples && T.examples.length) {
      html += '<section class="lsec" id="examples"><h2><span class="sn">02</span>Worked examples</h2>';
      T.examples.forEach(function (ex, i) {
        html += '<div class="example"><div class="eh"><span class="et">Example ' + (i + 1) + '</span>' +
          '<span class="eq2">' + ex.q + '</span></div><div class="eb"><ol class="steps">' +
          ex.steps.map(function (s) {
            return '<li><div>' + s[0] + (s[1] ? '<span class="why">' + s[1] + '</span>' : '') + '</div></li>';
          }).join('') + '</ol>' +
          (ex.ans ? '<div class="keybox" style="margin-bottom:0"><div class="klabel">Answer</div>' + ex.ans + '</div>' : '') +
          '</div></div>';
      });
      html += '</section>';
    }

    html += '<section class="lsec" id="model"><h2><span class="sn">03</span>Interactive model</h2>' +
      '<p class="small" style="margin-bottom:4px">' + (T.modelNote || 'Show this on the board and let a learner drive it.') + '</p>' +
      '<div id="ilab"></div></section>';

    if (T.terms && T.terms.length) {
      html += '<section class="lsec" id="terms"><h2><span class="sn">04</span>Terminology</h2>' +
        '<p class="small">Write these on the board at the start. Learners meet the national programme ' +
        'in Uzbek or Russian and the Cambridge papers in English — the three columns are the same idea.</p>' +
        termsTable(T.terms) +
        '<p class="termnote">Stress the words in bold in the explanation above; ask for the ' +
        'Uzbek and Russian back before moving on.</p></section>';
    }
    if (T.quiz && T.quiz.length) {
      html += '<section class="lsec" id="check"><h2><span class="sn">05</span>Quick check</h2>' +
        '<div id="quizlab"></div></section>';
    }

    html += '<section class="lsec" id="practice"><h2><span class="sn">06</span>Practice · 21 problems</h2>' +
      '<p class="small">Seven at each level. Set the easy row for everyone, the medium row for the ' +
      'main body of the class, and the hard row for those who finish early.</p>' +
      levelBlock('Easy · warm the idea up', 'lv-easy', 'c-easy', T.practice.easy) +
      levelBlock('Medium · the standard question', 'lv-med', 'c-med', T.practice.med) +
      levelBlock('Hard · stretch and reason', 'lv-hard', 'c-hard', T.practice.hard) +
      '</section>';

    html += '<section class="lsec" id="homework"><h2><span class="sn">07</span>Homework</h2>' +
      '<div class="hw"><h3>' + (T.hwTitle || 'Set for the next lesson') + '</h3>' +
      '<p class="hwt">' + (T.hwNote || '') + '</p><ol>' +
      T.homework.map(function (h) { return '<li>' + h + '</li>'; }).join('') + '</ol></div></section>';

    /* pager */
    var prev = prev0, next = next0;
    html += '<div class="pager no-print">' +
      (prev ? '<a href="lesson.html?t=' + prev.id + '"><span class="pl">← Previous</span><span class="pt">' + prev.title + '</span></a>' : '<span></span>') +
      (next ? '<a class="nx" href="lesson.html?t=' + next.id + '"><span class="pl">Next →</span><span class="pt">' + next.title + '</span></a>' : '<span></span>') +
      '</div>' +
      '<div class="mobilepager no-print">' +
      '<a href="' + (prev ? 'lesson.html?t=' + prev.id : '#') + '"' + (prev ? '' : ' aria-disabled="true"') + '>← Previous</a>' +
      '<a href="grade.html?g=' + T.grade + '">All topics</a>' +
      '<a href="' + (next ? 'lesson.html?t=' + next.id : '#') + '"' + (next ? '' : ' aria-disabled="true"') + '>Next →</a>' +
      '</div>';

    main.innerHTML = html;

    /* behaviour */
    [].forEach.call(d.querySelectorAll('.pc-btn'), function (b) {
      b.addEventListener('click', function () {
        var t = d.getElementById(b.getAttribute('data-t'));
        var on = t.classList.toggle('show');
        b.textContent = on ? 'Hide answers' : 'Show answers';
      });
    });
    var jump = d.getElementById('jumpsel');
    if (jump) jump.addEventListener('change', function () {
      w.location.href = (w.AKM_lessonHref || function (id) { return 'lesson.html?t=' + id; })(jump.value);
    });
    if (T.interactive) w.INT.mount(d.getElementById('ilab'), T.interactive);
    if (T.quiz && T.quiz.length) w.INT.mount(d.getElementById('quizlab'), { type: 'quiz', items: T.quiz });

    /* toc highlight */
    var secs = [].slice.call(d.querySelectorAll('.lsec'));
    var links = [].slice.call(d.querySelectorAll('.tocnav a'));
    if ('IntersectionObserver' in w) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id);
          });
        });
      }, { rootMargin: '-90px 0px -70% 0px' });
      secs.forEach(function (s) { io.observe(s); });
    }

    /* the page was empty when the motion layer first ran */
    if (w.AKM_MOTION) w.AKM_MOTION.refresh();
  };
})(window, document);
