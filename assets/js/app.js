/* =========================================================
   app.js — o'yin boshqaruvi
   ========================================================= */
(function (global) {
  'use strict';

  var QSET_SIZE = 10;   /* bitta to'plamdagi savollar soni */

  var S = {
    topic: null,
    level: 1,
    list: [],
    idx: 0,
    score: 0,
    mistakes: 0
  };

  var $ = function (id) { return document.getElementById(id); };
  var el = {
    screens:  document.querySelectorAll('.screen'),
    topicGrid: $('topicGrid'),
    levelGrid: $('levelGrid'),
    levelTitle: $('levelTitle'),
    levelSub:  $('levelSub'),
    qTitle:    $('qTitle'),
    visual:    $('visual'),
    expr:      $('expr'),
    answers:   $('answers'),
    dots:      $('dots'),
    score:     $('score'),
    buddy:     $('buddy'),
    buddyFace: $('buddyFace'),
    buddyText: $('buddyText'),
    doneEmoji: $('doneEmoji'),
    doneTitle: $('doneTitle'),
    doneStars: $('doneStars'),
    doneMsg:   $('doneMsg'),
    btnNext:   $('btnNext'),
    btnSound:  $('btnSound'),
    sheet:     $('parentSheet')
  };

  /* ---------- Xotira (localStorage) ---------- */
  var STORE = 'ali-matematika-v1';
  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; }
    catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE, JSON.stringify(p)); } catch (e) {}
  }
  var progress = loadProgress();
  if (progress.sound === false) Sound.setEnabled(false);

  /* ---------- Ekranlar ---------- */
  function show(name) {
    for (var i = 0; i < el.screens.length; i++) el.screens[i].classList.remove('active');
    $('screen-' + name).classList.add('active');
    global.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- Yordamchi (mascot) ---------- */
  var FACES_HAPPY = ['🦊', '🐼', '🐰', '🐨', '🐸', '🦉'];
  var PRAISE = ['Barakalla!', 'Ofarin!', 'Zo\'r!', 'Juda yaxshi!', 'Aql bovar qilmas!', 'Qoyil!'];
  var ENCOURAGE = ['Yana urinib ko\'r!', 'Deyarli topding!', 'Hechqisi yo\'q, davom et!', 'Sanab ko\'r!'];
  var buddyTimer = null;

  function buddySay(text, face, speak) {
    el.buddyText.textContent = text;
    if (face) el.buddyFace.textContent = face;
    el.buddy.classList.add('talk');
    if (speak) Sound.say(text);
    clearTimeout(buddyTimer);
    buddyTimer = setTimeout(function () { el.buddy.classList.remove('talk'); }, 2200);
  }

  /* ---------- Daraja tanlash ekrani ---------- */
  function openLevels(topic) {
    S.topic = topic;
    var T = Questions.TOPICS[topic];
    el.levelTitle.textContent = T.emoji + ' ' + T.name;
    el.levelSub.textContent = 'Darajani tanla';
    el.levelGrid.innerHTML = '';

    T.levels.forEach(function (lv, i) {
      var best = (progress[topic] && progress[topic][i + 1]) || 0;
      var b = document.createElement('button');
      b.className = 'level';
      b.innerHTML =
        '<div class="lv-stars">' + lv.stars + '</div>' +
        '<span class="lv-name">' + lv.name + '</span>' +
        '<span class="lv-desc">' + lv.desc + '</span>' +
        '<span class="lv-badge">' + (best ? 'Eng yaxshi: ' + best + '/' + QSET_SIZE : 'Yangi!') + '</span>';
      b.addEventListener('click', function () { Sound.tap(); startGame(topic, i + 1); });
      el.levelGrid.appendChild(b);
    });
    show('levels');
  }

  /* ---------- O'yinni boshlash ---------- */
  function startGame(topic, level) {
    S.topic = topic; S.level = level;
    S.list = Questions.make(topic, level, QSET_SIZE);
    S.idx = 0; S.score = 0; S.mistakes = 0;
    el.score.textContent = '0';
    buildDots();
    show('game');
    renderQuestion();
    Sound.level();
  }

  function buildDots() {
    el.dots.innerHTML = '';
    for (var i = 0; i < QSET_SIZE; i++) {
      var d = document.createElement('div');
      d.className = 'pdot';
      el.dots.appendChild(d);
    }
    markDots();
  }
  function markDots() {
    var ds = el.dots.children;
    for (var i = 0; i < ds.length; i++) {
      ds[i].className = 'pdot' + (i < S.idx ? ' done' : (i === S.idx ? ' now' : ''));
    }
  }

  /* ---------- Savolni chizish ---------- */
  function renderVisual(blocks) {
    el.visual.innerHTML = '';
    if (!blocks || !blocks.length) { el.visual.style.display = 'none'; return; }
    el.visual.style.display = 'flex';

    blocks.forEach(function (b) {
      if (b.kind === 'op') {
        var o = document.createElement('div');
        o.className = 'op';
        o.textContent = b.sign;
        el.visual.appendChild(o);
        return;
      }
      if (b.kind === 'basket') {
        var bk = document.createElement('div');
        bk.className = 'basket';
        bk.innerHTML = '<span class="lid">' + b.emoji + '</span><div class="items"></div>';
        el.visual.appendChild(bk);
        return;
      }
      /* group */
      var g = document.createElement('div');
      g.className = 'group' + (b.n > 12 ? ' big' : '');
      var cols = b.n <= 3 ? b.n : (b.n <= 8 ? Math.ceil(b.n / 2) : 5);
      g.style.gridTemplateColumns = 'repeat(' + cols + ', auto)';
      for (var i = 0; i < b.n; i++) {
        var s = document.createElement('span');
        s.className = 'it' + (b.cross && i >= b.n - b.cross ? ' crossed' : '');
        s.textContent = b.emoji;
        s.style.animationDelay = (i * 0.045) + 's';
        g.appendChild(s);
      }
      el.visual.appendChild(g);
    });
  }

  function renderExpr(text) {
    if (!text) { el.expr.style.display = 'none'; el.expr.innerHTML = ''; return; }
    el.expr.style.display = 'block';
    el.expr.innerHTML = text.replace(/([+\-−×÷=])/g, '<span class="o">$1</span>')
                            .replace(/\?/g, '<span class="q">?</span>');
  }

  function renderQuestion() {
    var q = S.list[S.idx];
    el.qTitle.textContent = q.title;
    renderVisual(q.visual);
    renderExpr(q.expr);

    el.answers.innerHTML = '';
    q.choices.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'ans';
      b.textContent = c;
      b.addEventListener('click', function () { answer(b, c, q); });
      el.answers.appendChild(b);
    });
    markDots();
    setTimeout(function () { Sound.say(q.say); }, 260);
  }

  /* ---------- Javob ---------- */
  var locked = false;
  function answer(btn, value, q) {
    if (locked || btn.disabled) return;

    if (value !== q.answer) {
      btn.classList.add('wrong');
      btn.disabled = true;
      Sound.wrong();
      S.mistakes++;
      buddySay(Questions.pick(ENCOURAGE), '🤔');
      return;
    }

    locked = true;
    btn.classList.add('right');
    Sound.right();
    Confetti.small();
    S.score++;
    el.score.textContent = S.score;
    buddySay(Questions.pick(PRAISE), Questions.pick(FACES_HAPPY));
    setTimeout(function () { Sound.sayNumber(q.answer); }, 500);

    var kids = el.answers.children;
    for (var i = 0; i < kids.length; i++) kids[i].disabled = true;

    setTimeout(function () {
      locked = false;
      S.idx++;
      if (S.idx >= S.list.length) finish();
      else renderQuestion();
    }, 1150);
  }

  /* ---------- Yakun ---------- */
  function finish() {
    var stars = S.mistakes === 0 ? 3 : (S.mistakes <= 3 ? 2 : 1);
    el.doneStars.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      var s = document.createElement('span');
      s.textContent = i < stars ? '⭐' : '☆';
      el.doneStars.appendChild(s);
    }
    el.doneEmoji.textContent = stars === 3 ? '🏆' : (stars === 2 ? '🎉' : '👏');
    el.doneTitle.textContent = stars === 3 ? 'Zo\'r ish, Ali!' : (stars === 2 ? 'Barakalla, Ali!' : 'Yaxshi harakat!');
    el.doneMsg.textContent = QSET_SIZE + ' ta savoldan ' + S.score + ' tasini to\'g\'ri yechding. ' +
      (S.mistakes === 0 ? 'Bitta ham xato yo\'q! 🌟' : 'Xatolar: ' + S.mistakes + '. Yana bir marta urinib ko\'raylik!');

    /* natijani saqlaymiz */
    progress[S.topic] = progress[S.topic] || {};
    var prev = progress[S.topic][S.level] || 0;
    if (S.score > prev) progress[S.topic][S.level] = S.score;
    saveProgress(progress);

    /* keyingi daraja bormi? */
    var hasNext = S.level < Questions.TOPICS[S.topic].levels.length;
    el.btnNext.style.display = hasNext ? '' : 'none';

    show('done');
    Sound.win();
    Confetti.big();
    buddySay(stars === 3 ? 'Ajoyib!' : 'Davom etamiz!', '🥳');
  }

  /* ---------- Hodisalar ---------- */
  el.topicGrid.addEventListener('click', function (e) {
    var b = e.target.closest('.topic');
    if (!b || !b.dataset.topic) return;
    Sound.unlock(); Sound.tap();
    openLevels(b.dataset.topic);
  });

  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]');
    if (g) { Sound.tap(); show(g.dataset.go); }
  });

  $('btnRepeat').addEventListener('click', function () {
    var q = S.list[S.idx];
    if (q) Sound.say(q.say);
  });

  $('btnAgain').addEventListener('click', function () { Sound.tap(); startGame(S.topic, S.level); });

  el.btnNext.addEventListener('click', function () {
    Sound.tap();
    var next = Math.min(S.level + 1, Questions.TOPICS[S.topic].levels.length);
    startGame(S.topic, next);
  });

  /* Ovoz tugmasi */
  function paintSound() {
    el.btnSound.textContent = Sound.isEnabled() ? '🔊 Ovoz: yoniq' : '🔇 Ovoz: o\'chiq';
  }
  el.btnSound.addEventListener('click', function () {
    Sound.unlock();
    Sound.setEnabled(!Sound.isEnabled());
    progress.sound = Sound.isEnabled();
    saveProgress(progress);
    paintSound();
    if (Sound.isEnabled()) Sound.pop();
  });
  paintSound();

  /* Ota-onalar paneli */
  $('btnParents').addEventListener('click', function () { Sound.tap(); el.sheet.classList.add('open'); });
  $('btnCloseParents').addEventListener('click', function () { el.sheet.classList.remove('open'); });
  el.sheet.addEventListener('click', function (e) { if (e.target === el.sheet) el.sheet.classList.remove('open'); });

  /* Klaviatura: 1–4 raqamlari bilan javob berish (ota-ona uchun qulay) */
  document.addEventListener('keydown', function (e) {
    if (!$('screen-game').classList.contains('active')) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4 && el.answers.children[n - 1]) el.answers.children[n - 1].click();
    if (e.key === 'Escape') show('home');
  });

  /* Birinchi tegishda ovozni ochamiz (mobil brauzerlar talabi) */
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    document.addEventListener(ev, function once() {
      Sound.unlock();
      document.removeEventListener(ev, once);
    }, { once: true });
  });

  /* Salomlashuv */
  setTimeout(function () { buddySay('Salom, Ali! 👋', '🦊'); }, 700);

})(window);
