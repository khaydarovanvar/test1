/* =========================================================
   russian.js — Russian learning games
   Learn mode: tap → hear the Russian word (always RU voice).
   Quiz mode: hear a word → tap the right picture / letter.
   UI hints follow the site language (en / uz / ru).
   ========================================================= */
(function (global) {
  'use strict';

  var QSET_SIZE = 10;
  var L = function (o) { return global.Lang.L(o); };
  var $ = function (id) { return document.getElementById(id); };

  var UI = {
    title:    { en: 'Ali Russian — first words and letters',
                uz: 'Ali Russian — ilk so\'zlar va harflar',
                ru: 'Али — первые русские слова и буквы' },
    subtitle: { en: 'Let\'s learn Russian letters and first words! 🎉',
                uz: 'Rus harflari va ilk so\'zlarni o\'rganamiz! 🎉',
                ru: 'Учим русские буквы и первые слова! 🎉' },
    abcName:  { en: 'АБВ — Letters', uz: 'АБВ — Harflar', ru: 'АБВ — Буквы' },
    abcDesc:  { en: 'The Russian alphabet', uz: 'Rus alifbosi', ru: 'Русский алфавит' },
    play:     { en: '🎯 Play!', uz: '🎯 O\'ynash!', ru: '🎯 Играть!' },
    tapHint:  { en: 'Tap a card and listen 👂', uz: 'Kartani bos va eshit 👂', ru: 'Нажми на карточку и слушай 👂' },
    find:     { en: 'Find:', uz: 'Top:', ru: 'Найди:' },
    findLetter:{ en: 'Find the letter', uz: 'Harfni top', ru: 'Найди букву' },
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
    en: ['Great job!', 'Awesome!', 'Well done!', 'Amazing!', 'You rock!'],
    uz: ['Barakalla!', 'Ofarin!', 'Zo\'r!', 'Juda yaxshi!', 'Qoyil!'],
    ru: ['Молодец!', 'Отлично!', 'Супер!', 'Здорово!', 'Браво!']
  };
  var ENCOURAGE = {
    en: ['Try again!', 'Almost there!', 'Listen once more!'],
    uz: ['Yana urinib ko\'r!', 'Deyarli topding!', 'Yana bir bor eshit!'],
    ru: ['Попробуй ещё!', 'Почти получилось!', 'Послушай ещё раз!']
  };

  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = (Math.random() * (i + 1)) | 0, t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* Russian is the target language here.
     helper(): the translation shown under the Russian word. */
  function target(w) { return w.ru; }
  function helper(w) { return global.Lang.current === 'en' ? w.en : w.uz; }

  /* ---------- state ---------- */
  var S = { mode: null, catId: null, list: [], idx: 0, score: 0, mistakes: 0 };

  var STORE = 'ali-russian-v1';
  function loadP() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
  function saveP(p) { try { localStorage.setItem(STORE, JSON.stringify(p)); } catch (e) {} }
  var progress = loadP();
  if (progress.sound === false) Sound.setEnabled(false);

  /* ---------- screens ---------- */
  var screens = document.querySelectorAll('.screen');
  function show(name) {
    for (var i = 0; i < screens.length; i++) screens[i].classList.remove('active');
    $('screen-' + name).classList.add('active');
    global.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------- buddy ---------- */
  var buddyTimer = null;
  function buddySay(text, face) {
    $('buddyText').textContent = text;
    if (face) $('buddyFace').textContent = face;
    $('buddy').classList.add('talk');
    clearTimeout(buddyTimer);
    buddyTimer = setTimeout(function () { $('buddy').classList.remove('talk'); }, 2200);
  }

  /* ---------- home: category cards ---------- */
  function renderHome() {
    var grid = $('catGrid');
    grid.innerHTML = '';

    var abc = document.createElement('button');
    abc.className = 'topic t-abc';
    abc.innerHTML = '<span class="emoji">🇷🇺</span>' +
      '<span class="name">' + L(UI.abcName) + '</span>' +
      '<span class="desc">' + L(UI.abcDesc) + '</span>';
    abc.addEventListener('click', function () { Sound.unlock(); Sound.tap(); openLetters(); });
    grid.appendChild(abc);

    Vocab.CATEGORIES.forEach(function (cat, i) {
      var best = progress[cat.id] || 0;
      var b = document.createElement('button');
      b.className = 'topic t-c' + (i % 5);
      b.innerHTML = '<span class="emoji">' + cat.e + '</span>' +
        '<span class="name">' + L(cat.name) + '</span>' +
        '<span class="desc">' + cat.words.length + ' ' +
          (global.Lang.current === 'uz' ? 'ta so\'z' : global.Lang.current === 'ru' ? 'слов' : 'words') +
          (best ? ' · ⭐ ' + best + '/' + QSET_SIZE : '') + '</span>';
      b.addEventListener('click', function () { Sound.unlock(); Sound.tap(); openWords(cat.id); });
      grid.appendChild(b);
    });
  }

  /* ---------- learn: letters ---------- */
  function openLetters() {
    S.mode = 'letters'; S.catId = null;
    $('learnTitle').textContent = '🇷🇺 АБВ';
    $('learnHint').textContent = L(UI.tapHint);
    var grid = $('learnGrid');
    grid.className = 'letter-grid';
    grid.innerHTML = '';
    Vocab.RU_ALPHABET.forEach(function (a, i) {
      var t = document.createElement('button');
      t.className = 'ltile';
      t.style.animationDelay = (i * 0.02) + 's';
      t.innerHTML = '<span class="lt">' + a.l + a.l.toLowerCase() + '</span>' +
                    '<span class="le">' + a.e + '</span>' +
                    '<span class="lw">' + a.w + '</span>';
      t.addEventListener('click', function () {
        Sound.unlock();
        popCard(t);
        var name = a.n || a.l;
        Sound.say(a.mid ? name + '. Она в слове ' + a.w + '.'
                        : name + '. ' + a.w + '.', 'ru');
      });
      grid.appendChild(t);
    });
    show('learn');
  }

  /* ---------- learn: words ---------- */
  function openWords(catId) {
    S.mode = 'words'; S.catId = catId;
    var cat = Vocab.byId(catId);
    $('learnTitle').textContent = cat.e + ' ' + L(cat.name);
    $('learnHint').textContent = L(UI.tapHint);
    var grid = $('learnGrid');
    grid.className = 'word-grid';
    grid.innerHTML = '';
    cat.words.forEach(function (w, i) {
      var c = document.createElement('button');
      c.className = 'wcard';
      c.style.animationDelay = (i * 0.03) + 's';
      c.innerHTML = '<span class="we">' + w.e + '</span>' +
                    '<span class="wen">' + target(w) + '</span>' +
                    '<span class="wtr">' + helper(w) + '</span>';
      c.addEventListener('click', function () {
        Sound.unlock();
        popCard(c);
        Sound.say(target(w), 'ru');
      });
      grid.appendChild(c);
    });
    show('learn');
  }

  function popCard(el) {
    el.classList.remove('pop-now');
    void el.offsetWidth;             /* restart the animation */
    el.classList.add('pop-now');
  }

  /* ---------- quiz ---------- */
  function startQuiz() {
    S.idx = 0; S.score = 0; S.mistakes = 0;
    $('score').textContent = '0';

    if (S.mode === 'letters') {
      S.list = shuffle(Vocab.RU_ALPHABET.slice()).slice(0, QSET_SIZE);
    } else {
      var words = Vocab.byId(S.catId).words.slice();
      shuffle(words);
      S.list = words.slice(0, QSET_SIZE);
      while (S.list.length < QSET_SIZE) S.list.push(pick(words));
    }
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
    if (S.mode === 'letters') Sound.say('Найди букву ' + (item.n || item.l) + '.', 'ru');
    else Sound.say('Где ' + target(item) + '?', 'ru');
  }

  function renderQ() {
    var item = S.list[S.idx];
    var others, options;

    if (S.mode === 'letters') {
      $('qTitle').textContent = L(UI.findLetter) + ':';
      $('bigWord').innerHTML = item.l + item.l.toLowerCase();
      others = shuffle(Vocab.RU_ALPHABET.filter(function (a) { return a.l !== item.l; })).slice(0, 3);
      options = shuffle([item].concat(others));
    } else {
      $('qTitle').textContent = L(UI.find);
      $('bigWord').innerHTML = target(item) + '<span class="tr">' + helper(item) + '</span>';
      var pool = Vocab.byId(S.catId).words.filter(function (w) { return w.en !== item.en; });
      others = shuffle(pool).slice(0, 3);
      options = shuffle([item].concat(others));
    }

    var box = $('answers');
    box.innerHTML = '';
    options.forEach(function (o) {
      var b = document.createElement('button');
      b.className = 'ans' + (S.mode === 'letters' ? ' is-letter' : '');
      b.textContent = S.mode === 'letters' ? o.l : o.e;
      b.addEventListener('click', function () { answer(b, o, item); });
      box.appendChild(b);
    });
    markDots();
    setTimeout(speakQ, 260);
  }

  var locked = false;
  function answer(btn, opt, item) {
    if (locked || btn.disabled) return;
    var right = S.mode === 'letters' ? opt.l === item.l : opt.en === item.en;

    if (!right) {
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
    buddySay(pick(L(PRAISE)), pick(['🐻', '🦊', '🐼', '🐰']));
    /* repeat the English word as reinforcement */
    setTimeout(function () {
      Sound.say(S.mode === 'letters' ? (item.n || item.l) : target(item), 'ru');
    }, 500);

    var kids = $('answers').children;
    for (var i = 0; i < kids.length; i++) kids[i].disabled = true;

    setTimeout(function () {
      locked = false;
      S.idx++;
      if (S.idx >= S.list.length) finish();
      else renderQ();
    }, 1250);
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

    var key = S.mode === 'letters' ? 'abc' : S.catId;
    if (S.score > (progress[key] || 0)) { progress[key] = S.score; saveP(progress); }

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
    $('engSubtitle').textContent = L(UI.subtitle);
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
    if ($('screen-learn').classList.contains('active')) {
      if (S.mode === 'letters') openLetters(); else if (S.catId) openWords(S.catId);
    }
    buddySay(L(UI.hello), '🐻');
  });

  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    document.addEventListener(ev, function once() {
      Sound.unlock();
      document.removeEventListener(ev, once);
    }, { once: true });
  });

  applyLang();
  setTimeout(function () { buddySay(L(UI.hello), '🐻'); }, 700);

})(window);
