/* =========================================================
   reading.js — learning to READ English and Russian
   Two tracks: 🇬🇧 English and 🇷🇺 Russian, each with
   words (2 levels) and first sentences; Russian also has
   syllables (the classic ба-бо-бу method).
   Word/sentence quizzes are true READING: see the text,
   pick the matching picture. Correct answers are spoken
   in that language's voice.
   ========================================================= */
(function (global) {
  'use strict';

  var QSET_SIZE = 10;
  var L = function (o) { return global.Lang.L(o); };
  var $ = function (id) { return document.getElementById(id); };

  var UI = {
    title:    { en: 'Ali Reading — English and Russian',
                uz: 'Ali O\'qish — inglizcha va ruscha',
                ru: 'Али — читаем по-английски и по-русски' },
    subtitle: { en: 'Let\'s learn to read English and Russian words! 🎉',
                uz: 'Inglizcha va ruscha so\'zlarni o\'qishni o\'rganamiz! 🎉',
                ru: 'Учимся читать английские и русские слова! 🎉' },
    enW1:  { en: '🇬🇧 Words 1', uz: '🇬🇧 So\'zlar 1', ru: '🇬🇧 Слова 1' },
    enW1D: { en: 'Short words: cat, dog…', uz: 'Qisqa so\'zlar: cat, dog…', ru: 'Короткие слова: cat, dog…' },
    enW2:  { en: '🇬🇧 Words 2', uz: '🇬🇧 So\'zlar 2', ru: '🇬🇧 Слова 2' },
    enW2D: { en: 'Longer words', uz: 'Uzunroq so\'zlar', ru: 'Слова подлиннее' },
    enS:   { en: '🇬🇧 Sentences', uz: '🇬🇧 Gaplar', ru: '🇬🇧 Предложения' },
    enSD:  { en: 'First English reading!', uz: 'Ilk inglizcha o\'qish!', ru: 'Первое чтение по-английски!' },
    ruSyl: { en: '🇷🇺 Syllables', uz: '🇷🇺 Bo\'g\'inlar', ru: '🇷🇺 Слоги' },
    ruSylD:{ en: 'ба – бо – бу…', uz: 'ба – бо – бу…', ru: 'ба – бо – бу…' },
    ruW1:  { en: '🇷🇺 Words 1', uz: '🇷🇺 So\'zlar 1', ru: '🇷🇺 Слова 1' },
    ruW1D: { en: 'Short words: дом, кот…', uz: 'Qisqa so\'zlar: дом, кот…', ru: 'Короткие слова: дом, кот…' },
    ruW2:  { en: '🇷🇺 Words 2', uz: '🇷🇺 So\'zlar 2', ru: '🇷🇺 Слова 2' },
    ruW2D: { en: 'Longer words', uz: 'Uzunroq so\'zlar', ru: 'Слова подлиннее' },
    ruS:   { en: '🇷🇺 Sentences', uz: '🇷🇺 Gaplar', ru: '🇷🇺 Предложения' },
    ruSD:  { en: 'First Russian reading!', uz: 'Ilk ruscha o\'qish!', ru: 'Первое чтение по-русски!' },
    play:     { en: '🎯 Play!', uz: '🎯 O\'ynash!', ru: '🎯 Играть!' },
    readHint: { en: 'Tap, listen and repeat 🗣️', uz: 'Bos, eshit va takrorla 🗣️', ru: 'Нажми, слушай и повторяй 🗣️' },
    findSyl:  { en: 'Find the syllable', uz: 'Bo\'g\'inni top', ru: 'Найди слог' },
    readFind: { en: 'Read and find the picture!', uz: 'O\'qi va rasmni top!', ru: 'Прочитай и найди картинку!' },
    mathBtn:  { en: '🔢 Math', uz: '🔢 Matematika', ru: '🔢 Математика' },
    soundOn:  { en: '🔊 Sound: on', uz: '🔊 Ovoz: yoniq', ru: '🔊 Звук: вкл' },
    soundOff: { en: '🔇 Sound: off', uz: '🔇 Ovoz: o\'chiq', ru: '🔇 Звук: выкл' },
    langBtn:  { en: '🇺🇿 O\'zbekcha', uz: '🇷🇺 Русский', ru: '🇬🇧 English' },
    back:     { en: '⬅️ Back', uz: '⬅️ Orqaga', ru: '⬅️ Назад' },
    again:    { en: '🔄 Play again', uz: '🔄 Yana o\'ynash', ru: '🔄 Играть ещё' },
    homeBtn:  { en: '🏠 Home', uz: '🏠 Bosh sahifa', ru: '🏠 Домой' },
    hello:    { en: 'Hello, Ali! 👋', uz: 'Salom, Ali! 👋', ru: 'Привет, Али! 👋' },
    done3:    { en: 'Amazing work, Ali!', uz: 'Zo\'r ish, Ali!', ru: 'Потрясающе, Али!' },
    done2:    { en: 'Well done, Ali!', uz: 'Barakalla, Ali!', ru: 'Молодец, Али!' },
    done1:    { en: 'Good try!', uz: 'Yaxshi harakat!', ru: 'Хорошая попытка!' },
    perfect:  { en: 'Not a single mistake! 🌟', uz: 'Bitta ham xato yo\'q! 🌟', ru: 'Ни одной ошибки! 🌟' }
  };
  var PRAISE = {
    en: ['Great job!', 'Awesome!', 'Well done!', 'Amazing!'],
    uz: ['Barakalla!', 'Ofarin!', 'Zo\'r!', 'Juda yaxshi!', 'Qoyil!'],
    ru: ['Молодец!', 'Отлично!', 'Супер!', 'Здорово!']
  };
  var ENCOURAGE = {
    en: ['Try again!', 'Almost there!', 'Read it once more!'],
    uz: ['Yana urinib ko\'r!', 'Deyarli topding!', 'Yana bir bor o\'qi!'],
    ru: ['Попробуй ещё!', 'Почти получилось!', 'Прочитай ещё раз!']
  };

  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = (Math.random() * (i + 1)) | 0, t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* Russian syllables as a flat list */
  var RU_SYLLABLES = [];
  Vocab.RU_READ.sylCons.forEach(function (c) {
    Vocab.RU_READ.sylVowels.forEach(function (v) { RU_SYLLABLES.push(c + v); });
  });

  /* MODES: key → what it teaches. voice = TTS language for the content */
  var MODES = [
    { key: 'en-w0',  voice: 'en', name: UI.enW1,  desc: UI.enW1D,  cls: 't-abc', kind: 'words', data: function () { return Vocab.EN_READ.words[0]; } },
    { key: 'en-w1',  voice: 'en', name: UI.enW2,  desc: UI.enW2D,  cls: 't-c1',  kind: 'words', data: function () { return Vocab.EN_READ.words[1]; } },
    { key: 'en-s',   voice: 'en', name: UI.enS,   desc: UI.enSD,   cls: 't-c3',  kind: 'sent',  data: function () { return Vocab.EN_READ.sentences; } },
    { key: 'ru-syl', voice: 'ru', name: UI.ruSyl, desc: UI.ruSylD, cls: 't-c0',  kind: 'syl',   data: function () { return RU_SYLLABLES; } },
    { key: 'ru-w0',  voice: 'ru', name: UI.ruW1,  desc: UI.ruW1D,  cls: 't-rus', kind: 'words', data: function () { return Vocab.RU_READ.words[0]; } },
    { key: 'ru-w1',  voice: 'ru', name: UI.ruW2,  desc: UI.ruW2D,  cls: 't-c2',  kind: 'words', data: function () { return Vocab.RU_READ.words[1]; } },
    { key: 'ru-s',   voice: 'ru', name: UI.ruS,   desc: UI.ruSD,   cls: 't-c4',  kind: 'sent',  data: function () { return Vocab.RU_READ.sentences; } }
  ];
  function modeBy(key) {
    for (var i = 0; i < MODES.length; i++) if (MODES[i].key === key) return MODES[i];
    return MODES[0];
  }

  var S = { mode: MODES[0], list: [], idx: 0, score: 0, mistakes: 0 };

  var STORE = 'ali-reading-v1';
  function loadP() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
  function saveP(p) { try { localStorage.setItem(STORE, JSON.stringify(p)); } catch (e) {} }
  var progress = loadP();
  if (progress.sound === false) Sound.setEnabled(false);

  var screens = document.querySelectorAll('.screen');
  function show(name) {
    for (var i = 0; i < screens.length; i++) screens[i].classList.remove('active');
    $('screen-' + name).classList.add('active');
    global.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var buddyTimer = null;
  function buddySay(text, face) {
    $('buddyText').textContent = text;
    if (face) $('buddyFace').textContent = face;
    $('buddy').classList.add('talk');
    clearTimeout(buddyTimer);
    buddyTimer = setTimeout(function () { $('buddy').classList.remove('talk'); }, 2200);
  }

  /* ---------- home ---------- */
  function renderHome() {
    var grid = $('modeGrid');
    grid.innerHTML = '';
    MODES.forEach(function (m) {
      var best = progress[m.key] || 0;
      var b = document.createElement('button');
      b.className = 'topic ' + m.cls;
      b.innerHTML = '<span class="emoji">' + (m.kind === 'sent' ? '💬' : m.kind === 'syl' ? '🧩' : '📖') + '</span>' +
        '<span class="name">' + L(m.name) + '</span>' +
        '<span class="desc">' + L(m.desc) + (best ? ' · ⭐ ' + best + '/' + QSET_SIZE : '') + '</span>';
      b.addEventListener('click', function () { Sound.unlock(); Sound.tap(); openLearn(m); });
      grid.appendChild(b);
    });
  }

  /* ---------- learn ---------- */
  function openLearn(mode) {
    S.mode = mode;
    var grid = $('learnGrid');
    grid.innerHTML = '';
    $('learnTitle').textContent = L(mode.name);
    $('learnHint').textContent = L(UI.readHint);

    if (mode.kind === 'syl') {
      grid.className = 'letter-grid syl-grid';
      mode.data().forEach(function (syl, i) {
        var t = document.createElement('button');
        t.className = 'ltile';
        t.style.animationDelay = (i * 0.008) + 's';
        t.innerHTML = '<span class="lt">' + syl[0] + '<span class="vw">' + syl.slice(1) + '</span></span>';
        t.addEventListener('click', function () { Sound.unlock(); popCard(t); Sound.say(syl, mode.voice); });
        grid.appendChild(t);
      });
    } else if (mode.kind === 'words') {
      grid.className = 'word-grid';
      mode.data().forEach(function (w, i) {
        var c = document.createElement('button');
        c.className = 'wcard';
        c.style.animationDelay = (i * 0.03) + 's';
        c.innerHTML = '<span class="we">' + w.e + '</span>' +
                      '<span class="wen">' + w.w + '</span>' +
                      '<span class="wtr">' + w.s + '</span>';
        c.addEventListener('click', function () { Sound.unlock(); popCard(c); Sound.say(w.w, mode.voice); });
        grid.appendChild(c);
      });
    } else {
      grid.className = 'sent-grid';
      mode.data().forEach(function (sn, i) {
        var c = document.createElement('button');
        c.className = 'wcard';
        c.style.animationDelay = (i * 0.04) + 's';
        c.innerHTML = '<span class="we">' + sn.e + '</span>' +
                      '<span class="wen">' + sn.t + '</span>';
        c.addEventListener('click', function () { Sound.unlock(); popCard(c); Sound.say(sn.t, mode.voice); });
        grid.appendChild(c);
      });
    }
    show('learn');
  }

  function popCard(el) {
    el.classList.remove('pop-now');
    void el.offsetWidth;
    el.classList.add('pop-now');
  }

  /* ---------- quiz ---------- */
  function startQuiz() {
    S.idx = 0; S.score = 0; S.mistakes = 0;
    $('score').textContent = '0';
    var pool = S.mode.data().slice();
    shuffle(pool);
    S.list = pool.slice(0, QSET_SIZE);
    while (S.list.length < QSET_SIZE) S.list.push(pick(pool));
    buildDots();
    show('game');
    renderQ();
    Sound.level();
  }

  function buildDots() {
    var d = $('dots');
    d.innerHTML = '';
    for (var i = 0; i < QSET_SIZE; i++) {
      var p = document.createElement('div');
      p.className = 'pdot';
      d.appendChild(p);
    }
  }
  function markDots() {
    var ds = $('dots').children;
    for (var i = 0; i < ds.length; i++) {
      ds[i].className = 'pdot' + (i < S.idx ? ' done' : (i === S.idx ? ' now' : ''));
    }
  }

  function speakQ() {
    var item = S.list[S.idx];
    if (S.mode.kind === 'syl') Sound.say(item, S.mode.voice);
    else Sound.say(L(UI.readFind));   /* reading: never reveal the answer */
  }

  function renderQ() {
    var item = S.list[S.idx];
    var bw = $('bigWord');
    bw.className = 'big-word';
    var pool = S.mode.data();
    var options;

    if (S.mode.kind === 'syl') {
      /* listening: hear the syllable, tap it */
      $('qTitle').textContent = L(UI.findSyl) + ':';
      bw.textContent = '👂';
      var sameC = pool.filter(function (x) { return x !== item && x[0] === item[0]; });
      var rest = pool.filter(function (x) { return x !== item && x[0] !== item[0]; });
      options = shuffle([item].concat(shuffle(sameC).slice(0, 2)).concat(shuffle(rest).slice(0, 1)));
    } else if (S.mode.kind === 'sent') {
      $('qTitle').textContent = L(UI.readFind);
      bw.className = 'big-word sent';
      bw.textContent = item.t;
      options = shuffle([item].concat(
        shuffle(pool.filter(function (x) { return x.e !== item.e; })).slice(0, 3)));
    } else {
      $('qTitle').textContent = L(UI.readFind);
      bw.innerHTML = item.w + '<span class="syl">' + item.s + '</span>';
      options = shuffle([item].concat(
        shuffle(pool.filter(function (x) { return x.w !== item.w; })).slice(0, 3)));
    }

    var box = $('answers');
    box.innerHTML = '';
    options.forEach(function (o) {
      var b = document.createElement('button');
      var isText = S.mode.kind === 'syl';
      b.className = 'ans' + (isText ? ' is-letter' : '');
      b.textContent = isText ? o : o.e;
      b.addEventListener('click', function () { answer(b, o, item); });
      box.appendChild(b);
    });
    markDots();
    setTimeout(speakQ, 260);
  }

  var locked = false;
  function answer(btn, opt, item) {
    if (locked || btn.disabled) return;
    if (opt !== item) {
      btn.classList.add('wrong');
      btn.disabled = true;
      Sound.wrong();
      S.mistakes++;
      buddySay(pick(L(ENCOURAGE)), '🤔');
      return;
    }

    locked = true;
    btn.classList.add('right');
    Sound.right();
    Confetti.small();
    S.score++;
    $('score').textContent = S.score;
    buddySay(pick(L(PRAISE)), pick(['🦜', '🦊', '🐼', '🐰']));
    setTimeout(function () {
      Sound.say(S.mode.kind === 'syl' ? item : (S.mode.kind === 'sent' ? item.t : item.w), S.mode.voice);
    }, 500);

    var kids = $('answers').children;
    for (var i = 0; i < kids.length; i++) kids[i].disabled = true;

    setTimeout(function () {
      locked = false;
      S.idx++;
      if (S.idx >= S.list.length) finish();
      else renderQ();
    }, 1300);
  }

  function finish() {
    var stars = S.mistakes === 0 ? 3 : (S.mistakes <= 3 ? 2 : 1);
    var el = $('doneStars');
    el.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      var s = document.createElement('span');
      s.textContent = i < stars ? '⭐' : '☆';
      el.appendChild(s);
    }
    $('doneEmoji').textContent = stars === 3 ? '🏆' : (stars === 2 ? '🎉' : '👏');
    $('doneTitle').textContent = stars === 3 ? L(UI.done3) : (stars === 2 ? L(UI.done2) : L(UI.done1));

    var cur = global.Lang.current, msg;
    if (cur === 'uz') msg = QSET_SIZE + ' ta savoldan ' + S.score + ' tasini topding. ';
    else if (cur === 'ru') msg = 'Ты нашёл ' + S.score + ' из ' + QSET_SIZE + '. ';
    else msg = 'You found ' + S.score + ' of ' + QSET_SIZE + '. ';
    if (S.mistakes === 0) msg += L(UI.perfect);
    $('doneMsg').textContent = msg;

    if (S.score > (progress[S.mode.key] || 0)) { progress[S.mode.key] = S.score; saveP(progress); }

    show('done');
    Sound.win();
    Confetti.big();
  }

  /* ---------- language ---------- */
  function applyLang() {
    var lang = global.Lang.current;
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
    document.title = L(UI.title);
    $('rdSubtitle').textContent = L(UI.subtitle);
    $('btnMath').textContent = L(UI.mathBtn);
    $('btnLang').textContent = L(UI.langBtn);
    $('btnQuiz').textContent = L(UI.play);
    $('btnAgain').textContent = L(UI.again);
    document.querySelectorAll('[data-go="home"].txt').forEach(function (b) { b.textContent = L(UI.homeBtn); });
    document.querySelectorAll('.back-btn').forEach(function (b) { b.textContent = L(UI.back); });
    paintSound();
    renderHome();
    Sound.refreshVoice();
  }

  function paintSound() {
    $('btnSound').textContent = Sound.isEnabled() ? L(UI.soundOn) : L(UI.soundOff);
  }

  /* ---------- events ---------- */
  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-go]');
    if (g) { Sound.tap(); show(g.dataset.go); }
  });

  $('btnQuiz').addEventListener('click', function () { Sound.tap(); startQuiz(); });
  $('btnAgain').addEventListener('click', function () { Sound.tap(); startQuiz(); });
  $('btnRepeat').addEventListener('click', speakQ);

  $('btnSound').addEventListener('click', function () {
    Sound.unlock();
    Sound.setEnabled(!Sound.isEnabled());
    progress.sound = Sound.isEnabled();
    saveP(progress);
    paintSound();
    if (Sound.isEnabled()) Sound.pop();
  });

  $('btnLang').addEventListener('click', function () {
    Sound.tap();
    var order = { en: 'uz', uz: 'ru', ru: 'en' };
    global.Lang.set(order[global.Lang.current] || 'en');
    applyLang();
    if ($('screen-learn').classList.contains('active')) openLearn(S.mode);
    buddySay(L(UI.hello), '🦜');
  });

  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    document.addEventListener(ev, function once() {
      Sound.unlock();
      document.removeEventListener(ev, once);
    }, { once: true });
  });

  applyLang();
  setTimeout(function () { buddySay(L(UI.hello), '🦜'); }, 700);

})(window);
