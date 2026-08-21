/* =========================================================
   questions.js — savollar generatori
   Har bir savol: { title, visual[], expr, answer, choices[], say }
   ========================================================= */
(function (global) {
  'use strict';

  /* ---------- kichik yordamchilar ---------- */
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(arr) { return arr[(Math.random() * arr.length) | 0]; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0, t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Rasmchalar — sanaladigan narsalar */
  var ITEMS = ['🍎','🍌','🍓','🍇','🍊','🍉','🐣','🐤','🦋','🐞','⭐','🎈','🚗','⚽','🌸','🍪','🐟','🦆','🌻','🧸'];
  var BASKETS = ['🧺','🪣','📦','🎁','🍱'];

  /* Sanaladigan narsa nomi (savol matni uchun) */
  var ITEM_NAME = {
    '🍎':'olma','🍌':'banan','🍓':'qulupnay','🍇':'uzum','🍊':'apelsin','🍉':'tarvuz',
    '🐣':'jo\'ja','🐤':'jo\'ja','🦋':'kapalak','🐞':'qo\'ng\'iz','⭐':'yulduz','🎈':'shar',
    '🚗':'mashina','⚽':'to\'p','🌸':'gul','🍪':'pechene','🐟':'baliq','🦆':'o\'rdak',
    '🌻':'kungaboqar','🧸':'ayiqcha'
  };

  /* ---------- javob variantlari ---------- */
  function makeChoices(answer, spread, min, max) {
    var set = [answer];
    var guard = 0;
    while (set.length < 4 && guard++ < 200) {
      var delta = rnd(1, spread) * (Math.random() < 0.5 ? -1 : 1);
      var v = answer + delta;
      if (v < min || v > max) continue;
      if (set.indexOf(v) === -1) set.push(v);
    }
    /* Agar yetmasa — ketma-ket sonlar bilan to'ldiramiz */
    var n = min;
    while (set.length < 4 && n <= max) {
      if (set.indexOf(n) === -1) set.push(n);
      n++;
    }
    return shuffle(set);
  }

  /* ---------- 1. SANASH ---------- */
  function qCount(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    var n = rnd(1, max);
    var it = pick(ITEMS);
    return {
      title: 'Nechta ' + (ITEM_NAME[it] || 'narsa') + ' bor?',
      visual: [{ kind: 'group', emoji: it, n: n }],
      expr: null,
      answer: n,
      choices: makeChoices(n, 3, 0, max + 3),
      say: 'Nechta ' + (ITEM_NAME[it] || 'narsa') + ' bor?'
    };
  }

  /* ---------- 2. QO'SHISH ---------- */
  function qAdd(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    var a, b;
    do { a = rnd(1, max - 1); b = rnd(1, max - 1); } while (a + b > max || a + b < 2);
    var it = pick(ITEMS), it2 = pick(ITEMS);
    var showPics = level <= 2;   /* 3-darajada faqat raqamlar */
    return {
      title: 'Hammasi bo\'lib nechta?',
      visual: showPics ? [
        { kind: 'group', emoji: it, n: a },
        { kind: 'op', sign: '+' },
        { kind: 'group', emoji: it2, n: b }
      ] : [],
      expr: a + ' + ' + b + ' = ?',
      answer: a + b,
      choices: makeChoices(a + b, 3, 0, max + 4),
      say: Sound.numberWord(a) + ' qo\'shuv ' + Sound.numberWord(b) + ' necha bo\'ladi?'
    };
  }

  /* ---------- 3. AYIRISH ---------- */
  function qSub(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    var a = rnd(2, max);
    var b = rnd(1, a - 1);
    var it = pick(ITEMS);
    var showPics = level <= 2;
    return {
      title: 'Nechtasi qoldi?',
      visual: showPics ? [
        { kind: 'group', emoji: it, n: a, cross: b }
      ] : [],
      expr: a + ' − ' + b + ' = ?',
      answer: a - b,
      choices: makeChoices(a - b, 3, 0, max),
      say: Sound.numberWord(a) + ' ayirish ' + Sound.numberWord(b) + ' necha bo\'ladi?'
    };
  }

  /* ---------- 4. KO'PAYTIRISH ---------- */
  function qMul(level) {
    var a, b;
    if (level === 1) { a = rnd(2, 3); b = rnd(1, 5); }
    else if (level === 2) { a = rnd(2, 5); b = rnd(1, 10); }
    else { a = rnd(2, 9); b = rnd(2, 9); }
    var it = pick(ITEMS);
    var showPics = level === 1 || (level === 2 && a * b <= 24);
    var vis = [];
    if (showPics) {
      for (var i = 0; i < a; i++) {
        if (i) vis.push({ kind: 'op', sign: '+' });
        vis.push({ kind: 'group', emoji: it, n: b });
      }
    }
    return {
      title: showPics ? (a + ' ta guruh, har birida ' + b + ' ta. Hammasi nechta?') : 'Ko\'paytir!',
      visual: vis,
      expr: a + ' × ' + b + ' = ?',
      answer: a * b,
      choices: makeChoices(a * b, Math.max(2, a), 0, a * b + a * 3),
      say: Sound.numberWord(a) + ' karra ' + Sound.numberWord(b) + ' necha bo\'ladi?'
    };
  }

  /* ---------- 5. BO'LISH ---------- */
  function qDiv(level) {
    var b, res;
    if (level === 1) { b = rnd(2, 3); res = rnd(1, 5); }
    else if (level === 2) { b = rnd(2, 5); res = rnd(1, 6); }
    else { b = rnd(2, 9); res = rnd(2, 9); }
    var a = b * res;
    var it = pick(ITEMS), basket = pick(BASKETS);
    var showPics = a <= 24;
    var vis = [];
    if (showPics) {
      vis.push({ kind: 'group', emoji: it, n: a });
      vis.push({ kind: 'op', sign: '→' });
      for (var i = 0; i < b; i++) vis.push({ kind: 'basket', emoji: basket });
    }
    return {
      title: showPics
        ? (a + ' ta narsani ' + b + ' ta savatga teng bo\'lamiz. Har biriga nechtadan?')
        : 'Teng bo\'l!',
      visual: vis,
      expr: a + ' ÷ ' + b + ' = ?',
      answer: res,
      choices: makeChoices(res, 3, 0, res + 8),
      say: Sound.numberWord(a) + ' ni ' + Sound.numberWord(b) + ' ga bo\'lsak necha bo\'ladi?'
    };
  }

  var GEN = { count: qCount, add: qAdd, sub: qSub, mul: qMul, div: qDiv };

  /* ---------- Mavzular haqida ma'lumot ---------- */
  var TOPICS = {
    count: {
      name: 'Sanash', emoji: '🍎', color: 't-count',
      levels: [
        { name: '1 – 5',   desc: 'Eng oson',      stars: '⭐' },
        { name: '1 – 10',  desc: 'Bir qo\'l',     stars: '⭐⭐' },
        { name: '1 – 20',  desc: 'Kattalar uchun',stars: '⭐⭐⭐' }
      ]
    },
    add: {
      name: 'Qo\'shish', emoji: '➕', color: 't-add',
      levels: [
        { name: '5 gacha',  desc: 'Rasmlar bilan', stars: '⭐' },
        { name: '10 gacha', desc: 'Rasmlar bilan', stars: '⭐⭐' },
        { name: '20 gacha', desc: 'Faqat raqamlar',stars: '⭐⭐⭐' }
      ]
    },
    sub: {
      name: 'Ayirish', emoji: '➖', color: 't-sub',
      levels: [
        { name: '5 gacha',  desc: 'Rasmlar bilan', stars: '⭐' },
        { name: '10 gacha', desc: 'Rasmlar bilan', stars: '⭐⭐' },
        { name: '20 gacha', desc: 'Faqat raqamlar',stars: '⭐⭐⭐' }
      ]
    },
    mul: {
      name: 'Ko\'paytirish', emoji: '✖️', color: 't-mul',
      levels: [
        { name: '2 va 3',   desc: 'Guruhlab sanash', stars: '⭐' },
        { name: '2 – 5',    desc: 'Jadval boshlandi',stars: '⭐⭐' },
        { name: '2 – 9',    desc: 'To\'liq jadval',  stars: '⭐⭐⭐' }
      ]
    },
    div: {
      name: 'Bo\'lish', emoji: '➗', color: 't-div',
      levels: [
        { name: '2 va 3 ga', desc: 'Savatlar bilan', stars: '⭐' },
        { name: '2 – 5 ga',  desc: 'Savatlar bilan', stars: '⭐⭐' },
        { name: '2 – 9 ga',  desc: 'Faqat raqamlar', stars: '⭐⭐⭐' }
      ]
    }
  };

  /* Bir xil savol ketma-ket takrorlanmasin */
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
