/* =========================================================
   questions.js — question generator (bilingual: en / uz)
   Each question: { title, visual[], expr, answer, choices[], say }
   ========================================================= */
(function (global) {
  'use strict';

  var L = function (o) { return global.Lang.L(o); };
  var en = function () { return global.Lang.current === 'en'; };
  var T3 = function (e, u, r) {
    var c = global.Lang.current;
    return c === 'uz' ? u : (c === 'ru' ? r : e);
  };

  /* ---------- small helpers ---------- */
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0, t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Countable things */
  var ITEMS = ['🍎','🍌','🍓','🍇','🍊','🍉','🐣','🐤','🦋','🐞','⭐','🎈','🚗','⚽','🌸','🍪','🐟','🦆','🌻','🧸'];
  var BASKETS = ['🧺','🪣','📦','🎁','🍱'];

  /* Item names: en = plural, uz = singular (Uzbek stays singular after numbers) */
  var ITEM_NAME = {
    '🍎': { en: 'apples',      uz: 'olma', ru: 'яблок' },
    '🍌': { en: 'bananas',     uz: 'banan', ru: 'бананов' },
    '🍓': { en: 'strawberries',uz: 'qulupnay', ru: 'клубничек' },
    '🍇': { en: 'grapes',      uz: 'uzum', ru: 'виноградин' },
    '🍊': { en: 'oranges',     uz: 'apelsin', ru: 'апельсинов' },
    '🍉': { en: 'watermelons', uz: 'tarvuz', ru: 'арбузов' },
    '🐣': { en: 'chicks',      uz: 'jo\'ja', ru: 'цыплят' },
    '🐤': { en: 'chicks',      uz: 'jo\'ja', ru: 'цыплят' },
    '🦋': { en: 'butterflies', uz: 'kapalak', ru: 'бабочек' },
    '🐞': { en: 'ladybugs',    uz: 'qo\'ng\'iz', ru: 'божьих коровок' },
    '⭐': { en: 'stars',       uz: 'yulduz', ru: 'звёздочек' },
    '🎈': { en: 'balloons',    uz: 'shar', ru: 'шариков' },
    '🚗': { en: 'cars',        uz: 'mashina', ru: 'машинок' },
    '⚽': { en: 'balls',       uz: 'to\'p', ru: 'мячиков' },
    '🌸': { en: 'flowers',     uz: 'gul', ru: 'цветочков' },
    '🍪': { en: 'cookies',     uz: 'pechene', ru: 'печенек' },
    '🐟': { en: 'fish',        uz: 'baliq', ru: 'рыбок' },
    '🦆': { en: 'ducks',       uz: 'o\'rdak', ru: 'уточек' },
    '🌻': { en: 'sunflowers',  uz: 'kungaboqar', ru: 'подсолнухов' },
    '🧸': { en: 'teddy bears', uz: 'ayiqcha', ru: 'мишек' }
  };

  /* ---------- answer choices ---------- */
  function makeChoices(answer, spread, min, max) {
    var set = [answer];
    var guard = 0;
    while (set.length < 4 && guard++ < 200) {
      var delta = rnd(1, spread) * (Math.random() < 0.5 ? -1 : 1);
      var v = answer + delta;
      if (v < min || v > max) continue;
      if (set.indexOf(v) === -1) set.push(v);
    }
    var n = min;
    while (set.length < 4 && n <= max) {
      if (set.indexOf(n) === -1) set.push(n);
      n++;
    }
    return shuffle(set);
  }

  var W = function (n) { return global.Sound.numberWord(n); };

  /* ---------- 1. COUNTING ---------- */
  function qCount(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    var n = rnd(1, max);
    var it = pick(ITEMS);
    var name = L(ITEM_NAME[it]);
    var title = T3('How many ' + name + '?',
                   'Nechta ' + name + ' bor?',
                   'Сколько здесь ' + name + '?');
    return {
      title: title,
      visual: [{ kind: 'group', emoji: it, n: n }],
      expr: null,
      answer: n,
      choices: makeChoices(n, 3, 0, max + 3),
      say: title
    };
  }

  /* ---------- 2. ADDITION ---------- */
  function qAdd(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : level === 3 ? 20 : 100;
    var a, b;
    if (level === 4) {
      do { a = rnd(11, 89); b = rnd(11, 89); } while (a + b > 100);
    } else {
      do { a = rnd(1, max - 1); b = rnd(1, max - 1); } while (a + b > max || a + b < 2);
    }
    var it = pick(ITEMS), it2 = pick(ITEMS);
    var showPics = level <= 2;   /* levels 3–4: numbers only */
    return {
      title: T3('How many altogether?', 'Hammasi bo\'lib nechta?', 'Сколько всего?'),
      visual: showPics ? [
        { kind: 'group', emoji: it, n: a },
        { kind: 'op', sign: '+' },
        { kind: 'group', emoji: it2, n: b }
      ] : [],
      expr: a + ' + ' + b + ' = ?',
      answer: a + b,
      choices: makeChoices(a + b, 3, 0, max + 4),
      say: T3('What is ' + W(a) + ' plus ' + W(b) + '?',
               W(a) + ' qo\'shuv ' + W(b) + ' necha bo\'ladi?',
               'Сколько будет ' + W(a) + ' плюс ' + W(b) + '?')
    };
  }

  /* ---------- 3. SUBTRACTION ---------- */
  function qSub(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : level === 3 ? 20 : 100;
    var a = level === 4 ? rnd(21, 100) : rnd(2, max);
    var b = level === 4 ? rnd(10, a - 1) : rnd(1, a - 1);
    var it = pick(ITEMS);
    var showPics = level <= 2;
    return {
      title: T3('How many are left?', 'Nechtasi qoldi?', 'Сколько осталось?'),
      visual: showPics ? [
        { kind: 'group', emoji: it, n: a, cross: b }
      ] : [],
      expr: a + ' − ' + b + ' = ?',
      answer: a - b,
      choices: makeChoices(a - b, 3, 0, max),
      say: T3('What is ' + W(a) + ' minus ' + W(b) + '?',
               W(a) + ' ayirish ' + W(b) + ' necha bo\'ladi?',
               'Сколько будет ' + W(a) + ' минус ' + W(b) + '?')
    };
  }

  /* ---------- 4. MULTIPLICATION ---------- */
  function qMul(level) {
    var a, b;
    if (level === 1) { a = rnd(2, 3); b = rnd(1, 5); }
    else if (level === 2) { a = rnd(2, 5); b = rnd(1, 10); }
    else if (level === 3) { a = rnd(2, 9); b = rnd(2, 9); }
    else { a = rnd(6, 12); b = rnd(6, 12); }
    var it = pick(ITEMS);
    var showPics = level === 1 || (level === 2 && a * b <= 24);
    var vis = [];
    if (showPics) {
      for (var i = 0; i < a; i++) {
        if (i) vis.push({ kind: 'op', sign: '+' });
        vis.push({ kind: 'group', emoji: it, n: b });
      }
    }
    var title;
    if (showPics) {
      title = T3(a + ' groups of ' + b + '. How many in all?',
                 a + ' ta guruh, har birida ' + b + ' ta. Hammasi nechta?',
                 a + ' групп по ' + b + '. Сколько всего?');
    } else {
      title = T3('Multiply!', 'Ko\'paytir!', 'Умножь!');
    }
    return {
      title: title,
      visual: vis,
      expr: a + ' × ' + b + ' = ?',
      answer: a * b,
      choices: makeChoices(a * b, Math.max(2, a), 0, a * b + a * 3),
      say: T3('What is ' + W(a) + ' times ' + W(b) + '?',
               W(a) + ' karra ' + W(b) + ' necha bo\'ladi?',
               'Сколько будет ' + W(a) + ' умножить на ' + W(b) + '?')
    };
  }

  /* ---------- 5. DIVISION ---------- */
  function qDiv(level) {
    var b, res;
    if (level === 1) { b = rnd(2, 3); res = rnd(1, 5); }
    else if (level === 2) { b = rnd(2, 5); res = rnd(1, 6); }
    else if (level === 3) { b = rnd(2, 9); res = rnd(2, 9); }
    else { b = rnd(3, 12); res = rnd(3, 12); }
    var a = b * res;
    var it = pick(ITEMS), basket = pick(BASKETS);
    var showPics = a <= 24;
    var vis = [];
    if (showPics) {
      vis.push({ kind: 'group', emoji: it, n: a });
      vis.push({ kind: 'op', sign: '→' });
      for (var i = 0; i < b; i++) vis.push({ kind: 'basket', emoji: basket });
    }
    var title;
    if (showPics) {
      title = T3('Share ' + a + ' things into ' + b + ' baskets. How many in each?',
                 a + ' ta narsani ' + b + ' ta savatga teng bo\'lamiz. Har biriga nechtadan?',
                 'Разделим ' + a + ' на ' + b + ' корзинок поровну. По сколько в каждой?');
    } else {
      title = T3('Divide!', 'Teng bo\'l!', 'Раздели!');
    }
    return {
      title: title,
      visual: vis,
      expr: a + ' ÷ ' + b + ' = ?',
      answer: res,
      choices: makeChoices(res, 3, 0, res + 8),
      say: T3('What is ' + W(a) + ' divided by ' + W(b) + '?',
               W(a) + ' ni ' + W(b) + ' ga bo\'lsak necha bo\'ladi?',
               'Сколько будет ' + W(a) + ' разделить на ' + W(b) + '?')
    };
  }

  var GEN = { count: qCount, add: qAdd, sub: qSub, mul: qMul, div: qDiv };

  /* ---------- topic metadata (en / uz / ru) ---------- */
  var TOPICS = {
    count: {
      name: { en: 'Counting', uz: 'Sanash', ru: 'Счёт' }, emoji: '🍎',
      home: { en: 'Count from 1 to 20', uz: '1 dan 20 gacha sanaymiz', ru: 'Считаем от 1 до 20' },
      levels: [
        { name: { en: '1 – 5',  uz: '1 – 5',  ru: '1 – 5' },  desc: { en: 'Easiest', uz: 'Eng oson', ru: 'Самое лёгкое' }, stars: '⭐' },
        { name: { en: '1 – 10', uz: '1 – 10', ru: '1 – 10' }, desc: { en: 'One hand… two hands!', uz: 'Bir qo\'l', ru: 'Одна рука… две руки!' }, stars: '⭐⭐' },
        { name: { en: '1 – 20', uz: '1 – 20', ru: '1 – 20' }, desc: { en: 'For big kids', uz: 'Kattalar uchun', ru: 'Для больших' }, stars: '⭐⭐⭐' }
      ]
    },
    add: {
      name: { en: 'Addition', uz: 'Qo\'shish', ru: 'Сложение' }, emoji: '➕',
      home: { en: 'Putting together', uz: 'Qo\'shamiz va ko\'paytiramiz', ru: 'Складываем вместе' },
      levels: [
        { name: { en: 'Up to 5',   uz: '5 gacha',   ru: 'До 5' },   desc: { en: 'With pictures', uz: 'Rasmlar bilan', ru: 'С картинками' }, stars: '⭐' },
        { name: { en: 'Up to 10',  uz: '10 gacha',  ru: 'До 10' },  desc: { en: 'With pictures', uz: 'Rasmlar bilan', ru: 'С картинками' }, stars: '⭐⭐' },
        { name: { en: 'Up to 20',  uz: '20 gacha',  ru: 'До 20' },  desc: { en: 'Numbers only', uz: 'Faqat raqamlar', ru: 'Только числа' }, stars: '⭐⭐⭐' },
        { name: { en: 'Up to 100', uz: '100 gacha', ru: 'До 100' }, desc: { en: 'Super hard!', uz: 'Juda qiyin!', ru: 'Супер-сложно!' }, stars: '⭐⭐⭐⭐' }
      ]
    },
    sub: {
      name: { en: 'Subtraction', uz: 'Ayirish', ru: 'Вычитание' }, emoji: '➖',
      home: { en: 'Taking away', uz: 'Olib tashlaymiz', ru: 'Убираем' },
      levels: [
        { name: { en: 'Up to 5',   uz: '5 gacha',   ru: 'До 5' },   desc: { en: 'With pictures', uz: 'Rasmlar bilan', ru: 'С картинками' }, stars: '⭐' },
        { name: { en: 'Up to 10',  uz: '10 gacha',  ru: 'До 10' },  desc: { en: 'With pictures', uz: 'Rasmlar bilan', ru: 'С картинками' }, stars: '⭐⭐' },
        { name: { en: 'Up to 20',  uz: '20 gacha',  ru: 'До 20' },  desc: { en: 'Numbers only', uz: 'Faqat raqamlar', ru: 'Только числа' }, stars: '⭐⭐⭐' },
        { name: { en: 'Up to 100', uz: '100 gacha', ru: 'До 100' }, desc: { en: 'Super hard!', uz: 'Juda qiyin!', ru: 'Супер-сложно!' }, stars: '⭐⭐⭐⭐' }
      ]
    },
    mul: {
      name: { en: 'Multiplication', uz: 'Ko\'paytirish', ru: 'Умножение' }, emoji: '✖️',
      home: { en: 'Counting groups', uz: 'Guruhlarni sanaymiz', ru: 'Считаем группами' },
      levels: [
        { name: { en: '2 and 3',  uz: '2 va 3',   ru: '2 и 3' },   desc: { en: 'Count in groups', uz: 'Guruhlab sanash', ru: 'Считаем группами' }, stars: '⭐' },
        { name: { en: '2 – 5',    uz: '2 – 5',    ru: '2 – 5' },   desc: { en: 'Tables begin', uz: 'Jadval boshlandi', ru: 'Таблица начинается' }, stars: '⭐⭐' },
        { name: { en: '2 – 9',    uz: '2 – 9',    ru: '2 – 9' },   desc: { en: 'Full tables', uz: 'To\'liq jadval', ru: 'Вся таблица' }, stars: '⭐⭐⭐' },
        { name: { en: '6 – 12',   uz: '6 – 12',   ru: '6 – 12' },  desc: { en: 'Big tables!', uz: 'Katta jadvallar!', ru: 'Большие таблицы!' }, stars: '⭐⭐⭐⭐' }
      ]
    },
    div: {
      name: { en: 'Division', uz: 'Bo\'lish', ru: 'Деление' }, emoji: '➗',
      home: { en: 'Sharing equally', uz: 'Teng bo\'lib beramiz', ru: 'Делим поровну' },
      levels: [
        { name: { en: 'By 2 and 3', uz: '2 va 3 ga', ru: 'На 2 и 3' },  desc: { en: 'With baskets', uz: 'Savatlar bilan', ru: 'С корзинками' }, stars: '⭐' },
        { name: { en: 'By 2 – 5',   uz: '2 – 5 ga',  ru: 'На 2 – 5' },  desc: { en: 'With baskets', uz: 'Savatlar bilan', ru: 'С корзинками' }, stars: '⭐⭐' },
        { name: { en: 'By 2 – 9',   uz: '2 – 9 ga',  ru: 'На 2 – 9' },  desc: { en: 'Numbers only', uz: 'Faqat raqamlar', ru: 'Только числа' }, stars: '⭐⭐⭐' },
        { name: { en: 'By 3 – 12',  uz: '3 – 12 ga', ru: 'На 3 – 12' }, desc: { en: 'Super hard!', uz: 'Juda qiyin!', ru: 'Супер-сложно!' }, stars: '⭐⭐⭐⭐' }
      ]
    }
  };

  /* Avoid immediate repeats within a set */
  function makeSet(topic, level, count) {
    var out = [], seen = {}, guard = 0;
    while (out.length < count && guard++ < count * 60) {
      var q = GEN[topic](level);
      var key = q.expr || (topic + ':' + q.answer + ':' + (q.visual[0] && q.visual[0].emoji));
      if (seen[key]) continue;
      seen[key] = 1;
      out.push(q);
    }
    while (out.length < count) out.push(GEN[topic](level));
    return out;
  }

  global.Questions = { make: makeSet, TOPICS: TOPICS, rnd: rnd, pick: pick, shuffle: shuffle };
})(window);
