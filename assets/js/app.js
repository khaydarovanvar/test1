/* =========================================================
   app.js — game logic (bilingual: English default / Uzbek)
   ========================================================= */
(function (global) {
  'use strict';

  var QSET_SIZE = 10;   /* questions per set */
  var L = function (o) { return global.Lang.L(o); };

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
    btnLang:   $('btnLang'),
    sheet:     $('parentSheet')
  };

  /* ---------- UI strings (en / uz / ru) ---------- */
  var UI = {
    title:     { en: 'Ali Math — fun math games',
                 uz: 'Ali Matematika — quvnoq matematika o\'yinlari',
                 ru: 'Али Математика — весёлые математические игры' },
    brand:     { en: 'Ali Math', uz: 'Ali Matematika', ru: 'Али Математика' },
    subtitle:  { en: 'Let\'s learn counting, adding, subtracting, multiplying and dividing with fun games! 🎉',
                 uz: 'Quvnoq o\'yinlar bilan sanashni, qo\'shishni, ayirishni, ko\'paytirishni va bo\'lishni o\'rganamiz! 🎉',
                 ru: 'Учимся считать, складывать, вычитать, умножать и делить в весёлых играх! 🎉' },
    engName:   { en: 'English', uz: 'Ingliz tili', ru: 'Английский' },
    engDesc:   { en: 'Letters and first words', uz: 'Harflar va ilk so\'zlar', ru: 'Буквы и первые слова' },
    rusName:   { en: 'Russian', uz: 'Rus tili', ru: 'Русский' },
    rusDesc:   { en: 'Letters and first words', uz: 'Harflar va ilk so\'zlar', ru: 'Буквы и первые слова' },
    printName: { en: 'Print', uz: 'Chop etish', ru: 'Печать' },
    printDesc: { en: 'Worksheets for paper', uz: 'Daftar uchun mashqlar', ru: 'Задания на бумаге' },
    parents:   { en: '👨‍👩‍👦 For parents', uz: '👨‍👩‍👦 Ota-onalar uchun', ru: '👨‍👩‍👦 Для родителей' },
    soundOn:   { en: '🔊 Sound: on', uz: '🔊 Ovoz: yoniq', ru: '🔊 Звук: вкл' },
    soundOff:  { en: '🔇 Sound: off', uz: '🔇 Ovoz: o\'chiq', ru: '🔇 Звук: выкл' },
    /* label shows the NEXT language in the cycle en → uz → ru → en */
    langBtn:   { en: '🇺🇿 O\'zbekcha', uz: '🇷🇺 Русский', ru: '🇬🇧 English' },
    back:      { en: '⬅️ Back', uz: '⬅️ Orqaga', ru: '⬅️ Назад' },
    pickLevel: { en: 'Pick a level', uz: 'Darajani tanla', ru: 'Выбери уровень' },
    best:      { en: 'Best: ', uz: 'Eng yaxshi: ', ru: 'Лучший: ' },
    fresh:     { en: 'New!', uz: 'Yangi!', ru: 'Новый!' },
    repeat:    { en: '🔁 Say it again', uz: '🔁 Takrorla', ru: '🔁 Повторить' },
    again:     { en: '🔄 Play again', uz: '🔄 Yana o\'ynash', ru: '🔄 Играть ещё' },
    next:      { en: '➡️ Next level', uz: '➡️ Keyingi daraja', ru: '➡️ Следующий уровень' },
    homeBtn:   { en: '🏠 Home', uz: '🏠 Bosh sahifa', ru: '🏠 Домой' },
    close:     { en: 'Close', uz: 'Yopish', ru: 'Закрыть' },
    hello:     { en: 'Hello, Ali! 👋', uz: 'Salom, Ali! 👋', ru: 'Привет, Али! 👋' },
    great:     { en: 'Amazing!', uz: 'Ajoyib!', ru: 'Отлично!' },
    goOn:      { en: 'Let\'s keep going!', uz: 'Davom etamiz!', ru: 'Продолжаем!' },
    done3:     { en: 'Amazing work, Ali!', uz: 'Zo\'r ish, Ali!', ru: 'Потрясающе, Али!' },
    done2:     { en: 'Well done, Ali!', uz: 'Barakalla, Ali!', ru: 'Молодец, Али!' },
    done1:     { en: 'Good try!', uz: 'Yaxshi harakat!', ru: 'Хорошая попытка!' },
    perfect:   { en: 'Not a single mistake! 🌟', uz: 'Bitta ham xato yo\'q! 🌟', ru: 'Ни одной ошибки! 🌟' }
  };

  var PRAISE = {
    en: ['Great job!', 'Awesome!', 'Well done!', 'Amazing!', 'You rock!', 'Brilliant!'],
    uz: ['Barakalla!', 'Ofarin!', 'Zo\'r!', 'Juda yaxshi!', 'Aql bovar qilmas!', 'Qoyil!'],
    ru: ['Молодец!', 'Отлично!', 'Супер!', 'Здорово!', 'Умница!', 'Браво!']
  };
  var ENCOURAGE = {
    en: ['Try again!', 'Almost there!', 'No worries, keep going!', 'Try counting!'],
    uz: ['Yana urinib ko\'r!', 'Deyarli topding!', 'Hechqisi yo\'q, davom et!', 'Sanab ko\'r!'],
    ru: ['Попробуй ещё!', 'Почти получилось!', 'Ничего, продолжай!', 'Посчитай!']
  };
  var FACES_HAPPY = ['🦊', '🐼', '🐰', '🐨', '🐸', '🦉'];

  /* ---------- storage ---------- */
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

  /* ---------- language ---------- */
  function setBrand(text) {
    var h1 = document.querySelector('.brand h1');
    if (!h1) return;
    h1.innerHTML = '';
    for (var i = 0; i < text.length; i++) {
      if (text[i] === ' ') { h1.appendChild(document.createTextNode(' ')); continue; }
      var sp = document.createElement('span');
      sp.className = 'pop';
      sp.textContent = text[i];
      h1.appendChild(sp);
    }
  }

  function applyLang() {
    var lang = global.Lang.current;
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    document.title = L(UI.title);

    setBrand(L(UI.brand));
    document.querySelector('.brand p').textContent = L(UI.subtitle);

    /* topic cards */
    Object.keys(Questions.TOPICS).forEach(function (key) {
      var card = document.querySelector('[data-topic="' + key + '"]');
      if (!card) return;
      var T = Questions.TOPICS[key];
      card.querySelector('.name').textContent = L(T.name);
      card.querySelector('.desc').textContent = L(T.home);
    });
    var ec = document.querySelector('.t-eng');
    ec.querySelector('.name').textContent = L(UI.engName);
    ec.querySelector('.desc').textContent = L(UI.engDesc);
    var rc = document.querySelector('.t-rus');
    rc.querySelector('.name').textContent = L(UI.rusName);
    rc.querySelector('.desc').textContent = L(UI.rusDesc);
    var pc = document.querySelector('.t-print');
    pc.querySelector('.name').textContent = L(UI.printName);
    pc.querySelector('.desc').textContent = L(UI.printDesc);

    $('btnParents').textContent = L(UI.parents);
    el.btnLang.textContent = L(UI.langBtn);
    $('btnRepeat').textContent = L(UI.repeat);
    $('btnAgain').textContent = L(UI.again);
    el.btnNext.textContent = L(UI.next);
    $('btnCloseParents').textContent = L(UI.close);
    document.querySelectorAll('[data-go="home"].txt').forEach(function (b) { b.textContent = L(UI.homeBtn); });
    document.querySelectorAll('.back-btn').forEach(function (b) { b.textContent = L(UI.back); });
    paintSound();
    if (Sound.refreshVoice) Sound.refreshVoice();
  }

  /* ---------- screens ---------- */
  function show(name) {
    for (var i = 0; i < el.screens.length; i++) el.screens[i].classList.remove('active');
    $('screen-' + name).classList.add('active');
    global.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- buddy ---------- */
  var buddyTimer = null;
  function buddySay(text, face, speak) {
    el.buddyText.textContent = text;
    if (face) el.buddyFace.textContent = face;
    el.buddy.classList.add('talk');
    if (speak) Sound.say(text);
    clearTimeout(buddyTimer);
    buddyTimer = setTimeout(function () { el.buddy.classList.remove('talk'); }, 2200);
  }

  /* ---------- level select ---------- */
  function openLevels(topic) {
    S.topic = topic;
    var T = Questions.TOPICS[topic];
    el.levelTitle.textContent = T.emoji + ' ' + L(T.name);
    el.levelSub.textContent = L(UI.pickLevel);
    el.levelGrid.innerHTML = '';

    T.levels.forEach(function (lv, i) {
      var best = (progress[topic] && progress[topic][i + 1]) || 0;
      var b = document.createElement('button');
      b.className = 'level';
      b.innerHTML =
        '<div class="lv-stars">' + lv.stars + '</div>' +
        '<span class="lv-name">' + L(lv.name) + '</span>' +
        '<span class="lv-desc">' + L(lv.desc) + '</span>' +
        '<span class="lv-badge">' + (best ? L(UI.best) + best + '/' + QSET_SIZE : L(UI.fresh)) + '</span>';
      b.addEventListener('click', function () { Sound.tap(); startGame(topic, i + 1); });
      el.levelGrid.appendChild(b);
    });
    show('levels');
  }

  /* ---------- game ---------- */
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

  /* ---------- render question ---------- */
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

  /* ---------- answering ---------- */
  var locked = false;
  function answer(btn, value, q) {
    if (locked || btn.disabled) return;

    if (value !== q.answer) {
      btn.classList.add('wrong');
      btn.disabled = true;
      Sound.wrong();
      S.mistakes++;
      buddySay(Questions.pick(L(ENCOURAGE)), '🤔');
      return;
    }

    locked = true;
    btn.classList.add('right');
    Sound.right();
    Confetti.small();
    S.score++;
    el.score.textContent = S.score;
    buddySay(Questions.pick(L(PRAISE)), Questions.pick(FACES_HAPPY));
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

  /* ---------- finish ---------- */
  function finish() {
    var stars = S.mistakes === 0 ? 3 : (S.mistakes <= 3 ? 2 : 1);
    el.doneStars.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      var s = document.createElement('span');
      s.textContent = i < stars ? '⭐' : '☆';
      el.doneStars.appendChild(s);
    }
    el.doneEmoji.textContent = stars === 3 ? '🏆' : (stars === 2 ? '🎉' : '👏');
    el.doneTitle.textContent = stars === 3 ? L(UI.done3) : (stars === 2 ? L(UI.done2) : L(UI.done1));

    var cur = global.Lang.current;
    var msg;
    if (cur === 'uz') {
      msg = QSET_SIZE + ' ta savoldan ' + S.score + ' tasini to\'g\'ri yechding. ' +
        (S.mistakes === 0 ? L(UI.perfect) : 'Xatolar: ' + S.mistakes + '. Yana bir marta urinib ko\'raylik!');
    } else if (cur === 'ru') {
      msg = 'Ты решил ' + S.score + ' из ' + QSET_SIZE + ' задач. ' +
        (S.mistakes === 0 ? L(UI.perfect) : 'Ошибок: ' + S.mistakes + '. Попробуем ещё раз!');
    } else {
      msg = 'You solved ' + S.score + ' of ' + QSET_SIZE + ' questions. ' +
        (S.mistakes === 0 ? L(UI.perfect) : 'Mistakes: ' + S.mistakes + '. Let\'s try once more!');
    }
    el.doneMsg.textContent = msg;

    progress[S.topic] = progress[S.topic] || {};
    var prev = progress[S.topic][S.level] || 0;
    if (S.score > prev) progress[S.topic][S.level] = S.score;
    saveProgress(progress);

    var hasNext = S.level < Questions.TOPICS[S.topic].levels.length;
    el.btnNext.style.display = hasNext ? '' : 'none';

    show('done');
    Sound.win();
    Confetti.big();
    buddySay(stars === 3 ? L(UI.great) : L(UI.goOn), '🥳');
  }

  /* ---------- events ---------- */
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

  /* sound toggle */
  function paintSound() {
    el.btnSound.textContent = Sound.isEnabled() ? L(UI.soundOn) : L(UI.soundOff);
  }
  el.btnSound.addEventListener('click', function () {
    Sound.unlock();
    Sound.setEnabled(!Sound.isEnabled());
    progress.sound = Sound.isEnabled();
    saveProgress(progress);
    paintSound();
    if (Sound.isEnabled()) Sound.pop();
  });

  /* language toggle */
  el.btnLang.addEventListener('click', function () {
    Sound.tap();
    var order = { en: 'uz', uz: 'ru', ru: 'en' };
    global.Lang.set(order[global.Lang.current] || 'en');
    applyLang();
    /* refresh whatever screen is open */
    if ($('screen-levels').classList.contains('active')) openLevels(S.topic);
    if ($('screen-game').classList.contains('active')) startGame(S.topic, S.level);
    buddySay(L(UI.hello), '🦊');
  });

  /* parents panel */
  $('btnParents').addEventListener('click', function () { Sound.tap(); el.sheet.classList.add('open'); });
  $('btnCloseParents').addEventListener('click', function () { el.sheet.classList.remove('open'); });
  el.sheet.addEventListener('click', function (e) { if (e.target === el.sheet) el.sheet.classList.remove('open'); });

  /* keyboard: answer with keys 1–4 */
  document.addEventListener('keydown', function (e) {
    if (!$('screen-game').classList.contains('active')) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4 && el.answers.children[n - 1]) el.answers.children[n - 1].click();
    if (e.key === 'Escape') show('home');
  });

  /* unlock audio on first touch (mobile requirement) */
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    document.addEventListener(ev, function once() {
      Sound.unlock();
      document.removeEventListener(ev, once);
    }, { once: true });
  });

  applyLang();
  setTimeout(function () { buddySay(L(UI.hello), '🦊'); }, 700);

})(window);
