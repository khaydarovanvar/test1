/* =========================================================
   worksheets.js — printable worksheet generator
   Bilingual (English default / Uzbek). No libraries needed.
   ========================================================= */
(function () {
  'use strict';

  var L = function (o) { return window.Lang.L(o); };
  var en = function () { return window.Lang.current === 'en'; };

  /* ------------------ helpers ------------------ */
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[(Math.random() * a.length) | 0]; }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  var ITEMS = ['🍎','🍌','🍓','🍇','🍊','🐣','🦋','🐞','⭐','🎈','🚗','⚽','🌸','🍪','🐟','🦆','🌻','🧸'];

  var PALETTE = [
    null,
    { hex: '#ff5252', name: { en: 'Red',    uz: 'Qizil',    ru: 'Красный' } },
    { hex: '#ffd12e', name: { en: 'Yellow', uz: 'Sariq',    ru: 'Жёлтый' } },
    { hex: '#3ec46d', name: { en: 'Green',  uz: 'Yashil',   ru: 'Зелёный' } },
    { hex: '#3aa7e0', name: { en: 'Blue',   uz: 'Ko\'k',    ru: 'Синий' } },
    { hex: '#a05ad8', name: { en: 'Purple', uz: 'Binafsha', ru: 'Фиолетовый' } }
  ];

  /* 8×8 pictures — number = color number (1..5), 0 = leave blank */
  var PIX = {
    HEART: [
      [4,1,1,4,4,1,1,4],
      [1,1,1,1,1,1,1,1],
      [1,1,2,1,1,1,1,1],
      [1,1,1,1,1,1,1,1],
      [4,1,1,1,1,1,1,4],
      [4,4,1,1,1,1,4,4],
      [4,4,4,1,1,4,4,4],
      [4,4,4,4,4,4,4,4]
    ],
    STAR: [
      [5,5,5,2,2,5,5,5],
      [5,5,5,2,2,5,5,5],
      [2,2,2,2,2,2,2,2],
      [5,2,2,2,2,2,2,5],
      [5,5,2,2,2,2,5,5],
      [5,5,2,2,2,2,5,5],
      [5,2,2,5,5,2,2,5],
      [2,2,5,5,5,5,2,2]
    ],
    FISH: [
      [3,3,3,4,4,4,3,3],
      [3,3,4,4,4,4,4,3],
      [1,3,4,2,4,4,4,4],
      [1,1,4,4,4,4,4,4],
      [1,1,4,4,4,4,4,4],
      [1,3,4,4,4,4,4,4],
      [3,3,4,4,4,4,4,3],
      [3,3,3,4,4,4,3,3]
    ],
    BUTTERFLY: [
      [5,5,3,2,2,3,5,5],
      [5,1,5,2,2,5,1,5],
      [5,5,5,2,2,5,5,5],
      [3,5,5,2,2,5,5,3],
      [3,5,5,2,2,5,5,3],
      [5,5,5,2,2,5,5,5],
      [5,1,5,2,2,5,1,5],
      [5,5,3,2,2,3,5,5]
    ],
    HOUSE: [
      [4,4,4,1,1,4,4,4],
      [4,4,1,1,1,1,4,4],
      [4,1,1,1,1,1,1,4],
      [1,1,1,1,1,1,1,1],
      [4,2,2,2,2,2,2,4],
      [2,2,4,5,5,4,2,2],
      [2,2,4,5,5,4,2,2],
      [3,3,3,3,3,3,3,3]
    ],
    TREE: [
      [4,4,3,3,3,3,4,4],
      [4,3,3,3,3,3,3,4],
      [3,3,3,1,3,3,3,3],
      [3,3,3,3,3,1,3,3],
      [4,3,3,3,3,3,3,4],
      [4,4,5,5,5,5,4,4],
      [4,4,5,5,5,5,4,4],
      [3,3,3,3,3,3,3,3]
    ]
  };
  var PIX_NAME = {
    HEART:     { en: 'HEART',     uz: 'YURAK',   ru: 'СЕРДЦЕ' },
    STAR:      { en: 'STAR',      uz: 'YULDUZ',  ru: 'ЗВЕЗДА' },
    FISH:      { en: 'FISH',      uz: 'BALIQ',   ru: 'РЫБКА' },
    BUTTERFLY: { en: 'BUTTERFLY', uz: 'KAPALAK', ru: 'БАБОЧКА' },
    HOUSE:     { en: 'HOUSE',     uz: 'UY',      ru: 'ДОМИК' },
    TREE:      { en: 'TREE',      uz: 'DARAXT',  ru: 'ДЕРЕВО' }
  };

  /* ------------------ shared strings ------------------ */
  var STR = {
    name:  { en: 'Name', uz: 'Ism', ru: 'Имя' },
    date:  { en: 'Date', uz: 'Sana', ru: 'Дата' },
    time:  { en: 'Time: ______ min', uz: 'Vaqt: ______ daqiqa', ru: 'Время: ______ мин' },
    foot:  { en: 'Ali Math · grade 1 practice sheet · work together with a parent 💛',
             uz: 'Ali Matematika · 1-sinf uchun mashq varag\'i · ota-ona bilan birga bajaring 💛',
             ru: 'Али Математика · тренировочный лист для 1 класса · выполняйте вместе с родителями 💛' },
    sheet: { en: 'sheet', uz: 'varaq', ru: 'лист' },
    keyTitle: { en: 'Answer key', uz: 'Javoblar', ru: 'Ответы' },
    keySub:   { en: ' — for parents', uz: ' — ota-onalar uchun', ru: ' — для родителей' },
    keySheet: { en: 'Sheet ', uz: '-varaq', ru: 'Лист ' },
    colorDone:{ en: 'When the picture is finished, say what it is! 🎉',
                uz: 'Rasm tayyor bo\'lgach, nima chiqqanini ayt! 🎉',
                ru: 'Когда картинка готова, скажи, что получилось! 🎉' },
    colorKey: { en: 'Answer for parents: ', uz: 'Ota-ona uchun javob: ', ru: 'Ответ для родителей: ' },
    zero:     { en: 'zero', uz: 'bo\'sh', ru: 'ноль' }
  };

  function tableLabel(t) {
    var c = window.Lang.current;
    if (c === 'uz') return t + ' jadvali';
    if (c === 'ru') return 'Таблица ' + t;
    return t + '× table';
  }

  /* ------------------ page skeleton ------------------ */
  function makePage(cfg) {
    var name = document.getElementById('fName').value || '';
    var p = document.createElement('section');
    p.className = 'page' + (cfg.key ? ' key' : '');
    p.innerHTML =
      '<div class="p-head ' + cfg.head + '">' +
        '<div class="ico">' + cfg.icon + '</div>' +
        '<div class="tt"><h2>' + esc(cfg.title) + '</h2><div class="sub">' + esc(cfg.sub) + '</div></div>' +
        '<div class="stars">☆☆☆☆☆</div>' +
      '</div>' +
      '<div class="namebar">' +
        '<div class="l">' + L(STR.name) + ': <b>' + esc(name) + '</b></div>' +
        '<div class="l">' + L(STR.date) + ': ______________</div>' +
        '<div class="l">' + L(STR.time) + '</div>' +
      '</div>' +
      '<div class="p-body"></div>' +
      '<div class="p-foot">' + L(STR.foot) + '</div>';
    p.body = p.querySelector('.p-body');
    return p;
  }

  /* ------------------ problem blocks ------------------ */
  function probHTML(i, a, op, b) {
    return '<div class="prob"><span class="idx">' + i + ')</span>' +
      '<span class="num">' + a + '</span>' +
      '<span class="op">' + op + '</span>' +
      '<span class="num">' + b + '</span>' +
      '<span class="op">=</span><span class="box"></span></div>';
  }

  function vprobHTML(i, a, sign, b) {
    return '<div class="vprob"><div style="font-size:11px;color:#9b96b5;text-align:left">' + i + ')</div>' +
      '<div class="r">' + a + '</div>' +
      '<div class="r"><span class="sign">' + sign + '</span>' + b + '</div>' +
      '<div class="line"></div><div class="ans">&nbsp;</div></div>';
  }

  function gridWrap(cols, html) {
    return '<div class="grid" style="grid-template-columns:repeat(' + cols + ',minmax(0,1fr))">' + html + '</div>';
  }

  /* ------------------ generators ------------------ */
  function genAdd(level) {
    var a, b;
    if (level >= 4) {
      do { a = rnd(11, 89); b = rnd(11, 89); } while (a + b > 100);
      return { a: a, op: '+', b: b, r: a + b };
    }
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    do { a = rnd(1, max - 1); b = rnd(1, max - 1); } while (a + b > max);
    return { a: a, op: '+', b: b, r: a + b };
  }
  function genSub(level) {
    if (level >= 4) {
      var a4 = rnd(21, 100), b4 = rnd(10, a4 - 1);
      return { a: a4, op: '−', b: b4, r: a4 - b4 };
    }
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    var a = rnd(2, max), b = rnd(1, a - 1);
    return { a: a, op: '−', b: b, r: a - b };
  }
  function genMul(level) {
    var a, b;
    if (level === 1) { a = rnd(2, 3); b = rnd(1, 5); }
    else if (level === 2) { a = rnd(2, 5); b = rnd(1, 10); }
    else if (level === 3) { a = rnd(2, 9); b = rnd(2, 9); }
    else { a = rnd(6, 12); b = rnd(6, 12); }
    return { a: a, op: '×', b: b, r: a * b };
  }
  function genDiv(level) {
    var b, r;
    if (level === 1) { b = rnd(2, 3); r = rnd(1, 5); }
    else if (level === 2) { b = rnd(2, 5); r = rnd(1, 6); }
    else if (level === 3) { b = rnd(2, 9); r = rnd(2, 9); }
    else { b = rnd(3, 12); r = rnd(3, 12); }
    return { a: b * r, op: '÷', b: b, r: r };
  }

  /* ------------------ tracing SVG ------------------ */
  function digitSVG(d, style) {
    var fill = style === 'solid' ? '#efedf9' : 'none';
    return '<svg viewBox="0 0 62 92" xmlns="http://www.w3.org/2000/svg">' +
      '<text x="31" y="80" text-anchor="middle" font-size="92" font-weight="800" ' +
      'font-family="Baloo 2, Trebuchet MS, sans-serif" fill="' + fill + '" ' +
      'stroke="#b3adcf" stroke-width="1.6" stroke-dasharray="5 4" stroke-linecap="round">' + d + '</text></svg>';
  }

  function charSVG(txt, style, wide) {
    var vb = wide ? '0 0 120 92' : '0 0 62 92';
    var x = wide ? 60 : 31;
    var fs = wide ? 74 : 84;
    var fill = style === 'solid' ? '#efedf9' : 'none';
    return '<svg viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg">' +
      '<text x="' + x + '" y="76" text-anchor="middle" font-size="' + fs + '" font-weight="800" ' +
      'font-family="Baloo 2, Trebuchet MS, sans-serif" fill="' + fill + '" ' +
      'stroke="#b3adcf" stroke-width="1.6" stroke-dasharray="5 4" stroke-linecap="round">' + txt + '</text></svg>';
  }

  /* ================== WORKSHEET TYPES ================== */
  var TYPES = {

    /* ---- ✍️ Number tracing ---- */
    trace: {
      icon: '✍️', head: 'h-purple',
      title: { en: 'Writing numbers', uz: 'Raqamlarni yozamiz' },
      sub: { en: 'Trace along the dots, then write your own. Count the dots on the right!',
             uz: 'Nuqtalar bo\'ylab yur, so\'ng o\'zing yoz. O\'ngdagi doiralarni sana!' },
      pages: 2,
      build: function (page, level, pageNo) {
        var from = (pageNo || 0) * 5;
        var html = '';
        for (var d = from; d < from + 5 && d <= 9; d++) {
          var reps = '';
          for (var r = 0; r < 5; r++) reps += digitSVG(d, r < 2 ? 'solid' : 'line');
          var dots = d === 0 ? '<span style="font-size:15px">' + L(STR.zero) + '</span>' : new Array(d + 1).join('● ');
          html += '<div class="trace-row">' +
            '<div class="digit-big">' + digitSVG(d, 'solid') + '</div>' +
            '<div class="reps">' + reps + '</div>' +
            '<div class="count-hint">' + dots + '</div>' +
          '</div>';
        }
        page.body.innerHTML = html;
        return null;
      }
    },

    /* ---- 🔤 Alphabet tracing ---- */
    letters: {
      icon: '🔤', head: 'h-blue',
      title: { en: 'Writing English letters', uz: 'Ingliz harflarini yozamiz', ru: 'Пишем английские буквы' },
      sub: { en: 'Trace along the dots, then write your own. Say the word out loud!',
             uz: 'Nuqtalar bo\'ylab yur, so\'ng o\'zing yoz. So\'zni ovoz chiqarib ayt!',
             ru: 'Обведи по точкам, потом напиши сам. Скажи слово вслух!' },
      pages: 4,
      build: function (page, level, pageNo) {
        var perPage = 7;
        var from = (pageNo || 0) * perPage;
        var slice = window.Vocab.ALPHABET.slice(from, from + perPage);
        var html = '';
        slice.forEach(function (a) {
          var lo = a.l.toLowerCase();
          var reps = '';
          for (var r = 0; r < 3; r++) reps += charSVG(a.l, r < 1 ? 'solid' : 'line');
          for (var q = 0; q < 3; q++) reps += charSVG(lo, q < 1 ? 'solid' : 'line');
          html += '<div class="trace-row">' +
            '<div class="digit-big">' + charSVG(a.l + lo, 'solid', true) + '</div>' +
            '<div class="reps">' + reps + '</div>' +
            '<div class="count-hint" style="font-size:15px;letter-spacing:0">' +
              '<span style="font-size:26px">' + a.e + '</span><br>' + esc(a.w) + '</div>' +
          '</div>';
        });
        page.body.innerHTML = html;
        return null;
      }
    },

    /* ---- 🖼️ Picture dictionary ---- */
    dict: {
      icon: '🖼️', head: 'h-green',
      title: { en: 'Picture dictionary', uz: 'Rasmli lug\'at', ru: 'Словарь в картинках' },
      sub: { en: 'Say each word out loud, then copy it on the line.',
             uz: 'Har so\'zni ovoz chiqarib ayt, so\'ng chiziqqa ko\'chirib yoz.',
             ru: 'Скажи каждое слово вслух, потом спиши его на строчку.' },
      build: function (page, level, pageNo) {
        var cats = window.Vocab.CATEGORIES;
        var cat = cats[(pageNo || 0) % cats.length];
        var tr = function (w) { return window.Lang.current === 'ru' ? w.ru : w.uz; };
        var html = '<h3 style="text-align:center;margin:0 0 4mm;font-size:22px;color:#5c5680">' +
                   cat.e + ' ' + esc(L(cat.name)) + '</h3>';
        var cells = '';
        cat.words.slice(0, 12).forEach(function (w) {
          cells += '<div class="dcell">' +
            '<span class="de">' + w.e + '</span>' +
            '<span class="den">' + esc(w.en) + '</span>' +
            '<span class="dtr">' + esc(tr(w)) + '</span>' +
            '<span class="dline"></span>' +
          '</div>';
        });
        html += '<div class="dict-grid">' + cells + '</div>';
        page.body.innerHTML = html;
        return null;
      }
    },

    /* ---- 🇷🇺 Russian alphabet tracing ---- */
    rletters: {
      icon: '🇷🇺', head: 'h-pink',
      title: { en: 'Writing Russian letters', uz: 'Rus harflarini yozamiz', ru: 'Пишем русские буквы' },
      sub: { en: 'Trace along the dots, then write your own. Say the word out loud!',
             uz: 'Nuqtalar bo\'ylab yur, so\'ng o\'zing yoz. So\'zni ovoz chiqarib ayt!',
             ru: 'Обведи по точкам, потом напиши сам. Скажи слово вслух!' },
      pages: 5,
      build: function (page, level, pageNo) {
        var perPage = 7;
        var from = (pageNo || 0) * perPage;
        var slice = window.Vocab.RU_ALPHABET.slice(from, from + perPage);
        var html = '';
        slice.forEach(function (a) {
          var lo = a.l.toLowerCase();
          var reps = '';
          for (var r = 0; r < 3; r++) reps += charSVG(a.l, r < 1 ? 'solid' : 'line');
          for (var q = 0; q < 3; q++) reps += charSVG(lo, q < 1 ? 'solid' : 'line');
          html += '<div class="trace-row">' +
            '<div class="digit-big">' + charSVG(a.l + lo, 'solid', true) + '</div>' +
            '<div class="reps">' + reps + '</div>' +
            '<div class="count-hint" style="font-size:15px;letter-spacing:0">' +
              '<span style="font-size:26px">' + a.e + '</span><br>' + esc(a.w) + '</div>' +
          '</div>';
        });
        page.body.innerHTML = html;
        return null;
      }
    },

    /* ---- 🇷🇺 Russian picture dictionary ---- */
    rdict: {
      icon: '🐻', head: 'h-orange',
      title: { en: 'Russian picture dictionary', uz: 'Ruscha rasmli lug\'at', ru: 'Русский словарь в картинках' },
      sub: { en: 'Say each Russian word out loud, then copy it on the line.',
             uz: 'Har ruscha so\'zni ovoz chiqarib ayt, so\'ng chiziqqa ko\'chirib yoz.',
             ru: 'Скажи каждое слово вслух, потом спиши его на строчку.' },
      build: function (page, level, pageNo) {
        var cats = window.Vocab.CATEGORIES;
        var cat = cats[(pageNo || 0) % cats.length];
        var helper = function (w) { return window.Lang.current === 'en' ? w.en : w.uz; };
        var html = '<h3 style="text-align:center;margin:0 0 4mm;font-size:22px;color:#5c5680">' +
                   cat.e + ' ' + esc(L(cat.name)) + '</h3>';
        var cells = '';
        cat.words.slice(0, 12).forEach(function (w) {
          cells += '<div class="dcell">' +
            '<span class="de">' + w.e + '</span>' +
            '<span class="den">' + esc(w.ru) + '</span>' +
            '<span class="dtr">' + esc(helper(w)) + '</span>' +
            '<span class="dline"></span>' +
          '</div>';
        });
        html += '<div class="dict-grid">' + cells + '</div>';
        page.body.innerHTML = html;
        return null;
      }
    },

    /* ---- 🍎 Counting ---- */
    count: {
      icon: '🍎', head: 'h-blue',
      title: { en: 'Count and write', uz: 'Sana va yoz' },
      sub: { en: 'How many pictures? Write the number in the box.',
             uz: 'Nechta rasm bor? Katakchaga raqamni yoz.' },
      build: function (page, level) {
        var max = level === 1 ? 5 : level === 2 ? 10 : 20;   /* pictures cap at 20 */
        var html = '', ans = [];
        for (var i = 1; i <= 12; i++) {
          var n = rnd(1, max), it = pick(ITEMS), pics = '';
          for (var k = 0; k < n; k++) pics += '<span>' + it + '</span>';
          html += '<div class="count-cell"><div style="font-size:11px;color:#9b96b5;align-self:flex-start">' + i + ')</div>' +
                  '<div class="pics">' + pics + '</div><div class="box"></div></div>';
          ans.push(n);
        }
        page.body.innerHTML = gridWrap(3, html);
        return ans;
      }
    },

    /* ---- 📏 Number line ---- */
    numline: {
      icon: '📏', head: 'h-green',
      title: { en: 'Missing numbers', uz: 'Yetishmayotgan sonlar' },
      sub: { en: 'Write the missing numbers in the empty boxes.',
             uz: 'Bo\'sh katakchalarga to\'g\'ri sonni yoz.' },
      build: function (page, level) {
        var span = level === 1 ? 10 : level === 2 ? 10 : 12;
        var maxStart = level === 1 ? 1 : level === 2 ? 10 : level === 3 ? 40 : 88;
        var html = '', ans = [];
        for (var row = 1; row <= 8; row++) {
          var start = level === 1 ? 1 : rnd(1, maxStart);
          var blanks = {}, need = level === 1 ? 3 : 4;
          while (Object.keys(blanks).length < need) blanks[rnd(1, span - 2)] = 1;
          var cells = '', rowAns = [];
          for (var i = 0; i < span; i++) {
            var v = start + i;
            if (blanks[i]) { cells += '<div class="cell blank">?</div>'; rowAns.push(v); }
            else cells += '<div class="cell">' + v + '</div>';
          }
          html += '<div style="display:flex;align-items:center;gap:6px">' +
                  '<span style="font-size:12px;color:#9b96b5;width:14px">' + row + ')</span>' +
                  '<div class="numline" style="flex:1">' + cells + '</div></div>';
          ans.push(rowAns.join(', '));
        }
        page.body.innerHTML = html;
        return ans;
      }
    },

    /* ---- ⚖️ Comparing ---- */
    compare: {
      icon: '⚖️', head: 'h-orange',
      title: { en: 'Which is bigger?', uz: 'Qaysi biri katta?' },
      sub: { en: 'Circle the right sign:  <  (less),  >  (greater),  =  (equal).',
             uz: 'To\'g\'ri belgini doira ichiga ol:  <  (kichik),  >  (katta),  =  (teng).' },
      build: function (page, level) {
        var html = '', ans = [];
        for (var i = 1; i <= 15; i++) {
          var Lv, R, lt, rt;
          if (level === 1) { Lv = rnd(1, 10); R = rnd(1, 10); lt = Lv; rt = R; }
          else {
            var lv = level >= 4 ? 4 : 3;
            var g1 = level === 2 ? genAdd(2) : (Math.random() < .5 ? genAdd(lv) : genSub(lv));
            var g2 = level === 2 ? genAdd(2) : (Math.random() < .5 ? genAdd(lv) : genSub(lv));
            Lv = g1.r; R = g2.r;
            lt = g1.a + ' ' + g1.op + ' ' + g1.b;
            rt = g2.a + ' ' + g2.op + ' ' + g2.b;
          }
          var sign = Lv < R ? '<' : (Lv > R ? '>' : '=');
          html += '<div class="cmp"><div style="font-size:11px;color:#9b96b5;text-align:left">' + i + ')</div>' +
                  '<div>' + lt + ' &nbsp;&nbsp; ' + rt + '</div>' +
                  '<div class="opts"><span>&lt;</span><span>&gt;</span><span>=</span></div></div>';
          ans.push(sign);
        }
        page.body.innerHTML = gridWrap(3, html);
        return ans;
      }
    },

    /* ---- ➕ Addition ---- */
    add: {
      icon: '➕', head: 'h-green',
      title: { en: 'Addition', uz: 'Qo\'shish' },
      sub: { en: 'Work it out and write the answer in the box.',
             uz: 'Hisobla va javobni katakchaga yoz.' },
      build: function (page, level) { return simpleOps(page, level, ['add']); }
    },

    /* ---- ➖ Subtraction ---- */
    sub: {
      icon: '➖', head: 'h-orange',
      title: { en: 'Subtraction', uz: 'Ayirish' },
      sub: { en: 'Work it out and write the answer in the box.',
             uz: 'Hisobla va javobni katakchaga yoz.' },
      build: function (page, level) { return simpleOps(page, level, ['sub']); }
    },

    addsub: {
      icon: '➕', head: 'h-blue',
      title: { en: 'Addition and subtraction', uz: 'Qo\'shish va ayirish' },
      sub: { en: 'Careful! Watch the sign: + or −',
             uz: 'Diqqat! Belgiga qara: + yoki −' },
      build: function (page, level) { return simpleOps(page, level, ['add', 'sub']); }
    },

    /* ---- 🧮 Column arithmetic ---- */
    vertical: {
      icon: '🧮', head: 'h-purple',
      title: { en: 'Column addition and subtraction', uz: 'Ustunli qo\'shish va ayirish' },
      sub: { en: 'Add ones with ones, tens with tens.',
             uz: 'Birliklarni birlik bilan, o\'nliklarni o\'nlik bilan qo\'sh.' },
      build: function (page, level) {
        var html = '', ans = [];
        for (var i = 1; i <= 16; i++) {
          var a, b, sign, r;
          if (Math.random() < 0.5) {
            if (level === 1) { a = rnd(11, 49); b = rnd(1, 9); }
            else if (level === 2) { a = rnd(11, 44); b = rnd(11, 44); }
            else if (level === 3) { a = rnd(21, 79); b = rnd(11, 20); }
            else { a = rnd(111, 499); b = rnd(101, 999 - 499); }
            sign = '+'; r = a + b;
          } else {
            if (level === 1) { a = rnd(11, 49); b = rnd(1, 9); }
            else if (level === 2) { a = rnd(25, 89); b = rnd(11, 24); }
            else if (level === 3) { a = rnd(41, 99); b = rnd(11, 39); }
            else { a = rnd(301, 999); b = rnd(101, 299); }
            sign = '−'; r = a - b;
          }
          html += vprobHTML(i, a, sign, b);
          ans.push(r);
        }
        page.body.innerHTML = gridWrap(4, html);
        return ans;
      }
    },

    /* ---- ✖️ Multiplication ---- */
    mul: {
      icon: '✖️', head: 'h-purple',
      title: { en: 'Multiplication', uz: 'Ko\'paytirish' },
      sub: { en: 'Multiplying is repeated addition: 3 × 4 = 4 + 4 + 4',
             uz: 'Ko\'paytirish — bu bir xil sonlarni qo\'shish. 3 × 4 = 4 + 4 + 4' },
      build: function (page, level) { return simpleOps(page, level, ['mul']); }
    },

    /* ---- ➗ Division ---- */
    div: {
      icon: '➗', head: 'h-pink',
      title: { en: 'Division', uz: 'Bo\'lish' },
      sub: { en: 'Dividing is sharing equally: 12 ÷ 3 = 4 each.',
             uz: 'Bo\'lish — teng qismlarga ajratish. 12 ÷ 3 = har biriga 4 tadan.' },
      build: function (page, level) { return simpleOps(page, level, ['div']); }
    },

    all: {
      icon: '🎲', head: 'h-pink',
      title: { en: 'Mixed practice', uz: 'Aralash mashqlar' },
      sub: { en: 'All four operations: + − × ÷',
             uz: 'Barcha to\'rt amal: + − × ÷' },
      build: function (page, level) { return simpleOps(page, level, ['add', 'sub', 'mul', 'div']); }
    },

    /* ---- 📋 Times table poster ---- */
    table: {
      icon: '📋', head: 'h-yellow',
      title: { en: 'Times tables', uz: 'Ko\'paytirish jadvali' },
      sub: { en: 'Hang it on the wall and read it out loud every day.',
             uz: 'Devorga osib qo\'ying va har kuni ovoz chiqarib o\'qing.' },
      build: function (page, level) {
        var from = 2, to = level === 1 ? 5 : 9;
        var colors = ['#3aa7e0', '#2fb47c', '#f08a2c', '#7b5bff', '#ec4d8d', '#e0a800', '#00a5a5', '#d2456b'];
        var html = '';
        for (var t = from; t <= to; t++) {
          var rows = '';
          for (var i = 1; i <= 10; i++) {
            rows += '<div class="row"><span>' + t + ' × ' + i + '</span><span>= ' + (t * i) + '</span></div>';
          }
          html += '<div class="tcol"><h3 style="background:' + colors[(t - 2) % colors.length] + '">' + tableLabel(t) + '</h3>' + rows + '</div>';
        }
        page.body.innerHTML = '<div class="table-grid">' + html + '</div>';
        return null;
      }
    },

    /* ---- 🎨 Solve and color ---- */
    color: {
      icon: '🎨', head: 'h-pink',
      title: { en: 'Solve and color', uz: 'Hisobla va rangla' },
      sub: { en: 'Solve every square, then color it with the matching color. What appears?',
             uz: 'Har katakni hisobla. Javob raqamiga mos rang bilan bo\'ya. Nima chiqadi?' },
      build: function (page, level, pageNo) {
        var names = Object.keys(PIX);
        var key = names[(pageNo || 0) % names.length];
        var art = PIX[key];

        var legend = '<div class="legend">';
        for (var c = 1; c <= 5; c++) {
          legend += '<div class="lg"><span class="sw" style="background:' + PALETTE[c].hex + '"></span>' +
                    c + ' = ' + L(PALETTE[c].name) + '</div>';
        }
        legend += '</div>';

        var cells = '';
        for (var y = 0; y < art.length; y++) {
          for (var x = 0; x < art[y].length; x++) {
            var v = art[y][x];
            if (!v) { cells += '<div class="px empty"></div>'; continue; }
            cells += '<div class="px">' + tinyProblem(v, level) + '</div>';
          }
        }
        page.body.innerHTML =
          legend +
          '<div class="pixgrid" style="grid-template-columns:repeat(8,1fr);width:150mm">' + cells + '</div>' +
          '<p style="text-align:center;font-size:17px;color:#5c5680;margin-top:7mm;font-weight:800">' +
          L(STR.colorDone) + '</p>' +
          '<p style="text-align:center;font-size:11px;color:#b9b4cd;margin-top:14mm">' +
          L(STR.colorKey) + esc(L(PIX_NAME[key])) + '</p>';
        return null;
      }
    }
  };

  /* Tiny problem whose answer is exactly `val` (1..5) */
  function tinyProblem(val, level) {
    var r = Math.random();
    if (level === 1 || r < 0.4) {          /* addition:  x + y = val */
      var x = rnd(0, val);
      return x + '+' + (val - x);
    }
    if (level === 2 || r < 0.75) {         /* subtraction:  a − b = val */
      var b = rnd(1, 5);
      return (val + b) + '−' + b;
    }
    var d = rnd(2, 5);                     /* division:  (val*d) ÷ d = val */
    return (val * d) + '÷' + d;
  }

  /* Shared: sheet of simple horizontal problems */
  function simpleOps(page, level, kinds) {
    var GEN = { add: genAdd, sub: genSub, mul: genMul, div: genDiv };
    var html = '', ans = [];
    for (var i = 1; i <= 24; i++) {
      var g = GEN[pick(kinds)](level);
      html += probHTML(i, g.a, g.op, g.b);
      ans.push(g.r);
    }
    page.body.innerHTML = gridWrap(4, html);
    return ans;
  }

  /* ------------------ answer key page ------------------ */
  function keyPage(allAnswers, typeTitle) {
    var p = makePage({ icon: '🔑', head: '', title: L(STR.keyTitle), sub: typeTitle + L(STR.keySub), key: true });
    var html = '';
    allAnswers.forEach(function (pageAns, pi) {
      var label = window.Lang.current === 'uz' ? (pi + 1) + L(STR.keySheet) : L(STR.keySheet) + (pi + 1);
      html += '<h3 style="margin:5mm 0 2mm;font-size:17px;color:#5c5e78">' + label + '</h3>';
      html += '<div class="key-grid">';
      pageAns.forEach(function (a, i) { html += '<div>' + (i + 1) + ') <b>' + esc(a) + '</b></div>'; });
      html += '</div>';
    });
    p.body.innerHTML = html;
    return p;
  }

  /* ------------------ toolbar language ------------------ */
  var TB = {
    title: { en: '🖨️ Make practice sheets', uz: '🖨️ Mashq varaqlari yasash', ru: '🖨️ Создание листов' },
    hint:  { en: 'Pick a type → “New set” → “Print”. Every refresh makes brand-new problems. Answers go on the last page.',
             uz: 'Turini tanlang → “Yangi to\'plam” → “Chop etish”. Har safar yangi masalalar chiqadi. Javoblar oxirgi sahifada.',
             ru: 'Выберите тип → «Новый набор» → «Печать». Каждое обновление — новые задачи. Ответы на последней странице.' },
    lbType:  { en: 'Exercise type', uz: 'Mashq turi', ru: 'Тип задания' },
    lbLevel: { en: 'Difficulty', uz: 'Daraja', ru: 'Сложность' },
    lbPages: { en: 'Sheets', uz: 'Varaqlar soni', ru: 'Листы' },
    lbName:  { en: 'Name', uz: 'Ism', ru: 'Имя' },
    lbLang:  { en: 'Language', uz: 'Til', ru: 'Язык' },
    lbKey:   { en: 'Answer key page', uz: 'Javoblar sahifasi', ru: 'Страница ответов' },
    lbBW:    { en: 'Black & white (save ink)', uz: 'Oq-qora (siyoh tejash)', ru: 'Чёрно-белый (экономия чернил)' },
    btnMake: { en: '🎲 New set', uz: '🎲 Yangi to\'plam', ru: '🎲 Новый набор' },
    btnPrint:{ en: '🖨️ Print', uz: '🖨️ Chop etish', ru: '🖨️ Печать' },
    btnBack: { en: '🏠 Back to games', uz: '🏠 O\'yinlarga qaytish', ru: '🏠 К играм' },
    ogBasics:{ en: 'Basics', uz: 'Boshlang\'ich', ru: 'Основы' },
    ogEng:   { en: 'English', uz: 'Ingliz tili', ru: 'Английский' },
    ogRus:   { en: 'Russian', uz: 'Rus tili', ru: 'Русский' },
    ogOps:   { en: 'Operations', uz: 'Amallar', ru: 'Действия' },
    ogFun:   { en: 'Fun', uz: 'Qiziqarli', ru: 'Интересное' },
    docTitle:{ en: 'Ali Math — printable worksheets', uz: 'Ali Matematika — chop etiladigan mashqlar', ru: 'Али Математика — листы для печати' },
    options: {
      trace:   { en: '✍️ Number tracing (0–9)',   uz: '✍️ Raqam yozish (0–9)', ru: '✍️ Пишем цифры (0–9)' },
      count:   { en: '🍎 Count and write',        uz: '🍎 Sanash va yozish', ru: '🍎 Посчитай и запиши' },
      numline: { en: '📏 Number line',            uz: '📏 Sonlar chizig\'i', ru: '📏 Числовой ряд' },
      compare: { en: '⚖️ Compare < > =',          uz: '⚖️ Taqqoslash < > =', ru: '⚖️ Сравнение < > =' },
      letters: { en: '🔤 Alphabet tracing (A–Z)',  uz: '🔤 Alifbo yozish (A–Z)', ru: '🔤 Пишем алфавит (A–Z)' },
      dict:    { en: '🖼️ Picture dictionary',     uz: '🖼️ Rasmli lug\'at', ru: '🖼️ Словарь в картинках' },
      rletters:{ en: '🔤 Russian alphabet (А–Я)',  uz: '🔤 Rus alifbosi (А–Я)', ru: '🔤 Пишем алфавит (А–Я)' },
      rdict:   { en: '🖼️ Russian picture dictionary', uz: '🖼️ Ruscha rasmli lug\'at', ru: '🖼️ Русский словарь в картинках' },
      add:     { en: '➕ Addition',               uz: '➕ Qo\'shish', ru: '➕ Сложение' },
      sub:     { en: '➖ Subtraction',            uz: '➖ Ayirish', ru: '➖ Вычитание' },
      addsub:  { en: '➕➖ Mixed add/subtract',   uz: '➕➖ Aralash', ru: '➕➖ Слож. и вычит.' },
      vertical:{ en: '🧮 Column add/subtract',    uz: '🧮 Ustunli qo\'shish/ayirish', ru: '🧮 В столбик' },
      mul:     { en: '✖️ Multiplication',         uz: '✖️ Ko\'paytirish', ru: '✖️ Умножение' },
      div:     { en: '➗ Division',               uz: '➗ Bo\'lish', ru: '➗ Деление' },
      all:     { en: '🎲 All mixed',              uz: '🎲 Hammasi aralash', ru: '🎲 Всё вперемешку' },
      table:   { en: '📋 Times tables (poster)',  uz: '📋 Ko\'paytirish jadvali (plakat)', ru: '📋 Таблица умножения (плакат)' },
      color:   { en: '🎨 Solve and color',        uz: '🎨 Hisobla va rangla', ru: '🎨 Реши и раскрась' }
    },
    levels: {
      1: { en: '1 — easiest', uz: '1 — eng oson', ru: '1 — самый лёгкий' },
      2: { en: '2 — medium',  uz: '2 — o\'rtacha', ru: '2 — средний' },
      3: { en: '3 — hard',    uz: '3 — qiyin', ru: '3 — трудный' },
      4: { en: '4 — expert',  uz: '4 — juda qiyin', ru: '4 — эксперт' }
    }
  };

  function relabelToolbar() {
    document.documentElement.lang = window.Lang.current;
    document.title = L(TB.docTitle);
    document.getElementById('tbTitle').textContent = L(TB.title);
    document.getElementById('tbHint').textContent = L(TB.hint);
    ['lbType','lbLevel','lbPages','lbName','lbLang','lbKey','lbBW','ogBasics','ogEng','ogRus','ogOps','ogFun'].forEach(function (id) {
      var e = document.getElementById(id);
      if (!e) return;
      if (e.tagName === 'OPTGROUP') e.label = L(TB[id]);
      else e.textContent = L(TB[id]);
    });
    document.getElementById('btnMake').textContent = L(TB.btnMake);
    document.getElementById('btnPrint').textContent = L(TB.btnPrint);
    document.getElementById('btnBack').textContent = L(TB.btnBack);
    var sel = document.getElementById('fType');
    for (var i = 0; i < sel.options.length; i++) {
      var o = sel.options[i];
      if (TB.options[o.value]) o.textContent = L(TB.options[o.value]);
    }
    var lv = document.getElementById('fLevel');
    for (var j = 0; j < lv.options.length; j++) {
      lv.options[j].textContent = L(TB.levels[lv.options[j].value]);
    }
    document.getElementById('fLang').value = window.Lang.current;
  }

  /* ------------------ rendering ------------------ */
  function render() {
    var type = document.getElementById('fType').value;
    var level = parseInt(document.getElementById('fLevel').value, 10);
    var pages = parseInt(document.getElementById('fPages').value, 10);
    var wantKey = document.getElementById('fKey').checked;
    var bw = document.getElementById('fBW').checked;

    document.body.classList.toggle('bw', bw);

    var host = document.getElementById('sheets');
    host.innerHTML = '';

    var T = TYPES[type];
    /* Some types have a fixed number of sheets */
    var count = T.pages || (type === 'table' ? 1 : pages);

    var answers = [];
    for (var i = 0; i < count; i++) {
      var suffix = count > 1 ? '  ·  ' + L(STR.sheet) + ' ' + (i + 1) + '/' + count : '';
      var p = makePage({
        icon: T.icon, head: T.head, title: L(T.title),
        sub: L(T.sub) + suffix
      });
      var a = T.build(p, level, i);
      host.appendChild(p);
      if (a && a.length) answers.push(a);
    }

    if (wantKey && answers.length) host.appendChild(keyPage(answers, L(T.title)));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------ URL parameters ------------------
     e.g.: print.html?type=mul&level=2&pages=3&key=1&bw=1&name=Ali&lang=en
     The PDF script uses these too.                       */
  (function applyQuery() {
    var q = new URLSearchParams(location.search);
    if (!q.toString()) return;
    function set(id, val) { if (val != null && val !== '') document.getElementById(id).value = val; }
    if (q.get('type') && TYPES[q.get('type')]) set('fType', q.get('type'));
    set('fLevel', q.get('level'));
    set('fPages', q.get('pages'));
    if (q.get('name') != null) set('fName', q.get('name'));
    if (q.get('key') != null) document.getElementById('fKey').checked = q.get('key') !== '0';
    if (q.get('bw') != null) document.getElementById('fBW').checked = q.get('bw') === '1';
    if (q.get('lang')) window.Lang.set(q.get('lang'));
  })();

  document.getElementById('btnMake').addEventListener('click', render);
  document.getElementById('btnPrint').addEventListener('click', function () { window.print(); });
  document.getElementById('fLang').addEventListener('change', function () {
    window.Lang.set(this.value);
    relabelToolbar();
    render();
  });
  ['fType', 'fLevel', 'fPages', 'fKey', 'fBW', 'fName'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', render);
  });

  relabelToolbar();
  render();

  window.Worksheets = { render: render, TYPES: TYPES };
})();
