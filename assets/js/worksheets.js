/* =========================================================
   worksheets.js — chop etiladigan mashq varaqlarini yasaydi
   Hech qanday kutubxona kerak emas.
   ========================================================= */
(function () {
  'use strict';

  /* ------------------ yordamchilar ------------------ */
  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[(Math.random() * a.length) | 0]; }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) { var j = (Math.random() * (i + 1)) | 0, t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }
  function elFrom(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

  var ITEMS = ['🍎','🍌','🍓','🍇','🍊','🐣','🦋','🐞','⭐','🎈','🚗','⚽','🌸','🍪','🐟','🦆','🌻','🧸'];

  var PALETTE = [
    null,
    { hex: '#ff5252', uz: 'Qizil' },
    { hex: '#ffd12e', uz: 'Sariq' },
    { hex: '#3ec46d', uz: 'Yashil' },
    { hex: '#3aa7e0', uz: 'Ko\'k' },
    { hex: '#a05ad8', uz: 'Binafsha' }
  ];

  /* 8×8 rasmchalar — raqam = rang raqami (1..5), 0 = bo'yalmaydi
     1 Qizil · 2 Sariq · 3 Yashil · 4 Ko'k · 5 Binafsha              */
  var PIX = {
    'YURAK': [
      [4,1,1,4,4,1,1,4],
      [1,1,1,1,1,1,1,1],
      [1,1,2,1,1,1,1,1],
      [1,1,1,1,1,1,1,1],
      [4,1,1,1,1,1,1,4],
      [4,4,1,1,1,1,4,4],
      [4,4,4,1,1,4,4,4],
      [4,4,4,4,4,4,4,4]
    ],
    'YULDUZ': [
      [5,5,5,2,2,5,5,5],
      [5,5,5,2,2,5,5,5],
      [2,2,2,2,2,2,2,2],
      [5,2,2,2,2,2,2,5],
      [5,5,2,2,2,2,5,5],
      [5,5,2,2,2,2,5,5],
      [5,2,2,5,5,2,2,5],
      [2,2,5,5,5,5,2,2]
    ],
    'BALIQ': [
      [3,3,3,4,4,4,3,3],
      [3,3,4,4,4,4,4,3],
      [1,3,4,2,4,4,4,4],
      [1,1,4,4,4,4,4,4],
      [1,1,4,4,4,4,4,4],
      [1,3,4,4,4,4,4,4],
      [3,3,4,4,4,4,4,3],
      [3,3,3,4,4,4,3,3]
    ],
    'KAPALAK': [
      [5,5,3,2,2,3,5,5],
      [5,1,5,2,2,5,1,5],
      [5,5,5,2,2,5,5,5],
      [3,5,5,2,2,5,5,3],
      [3,5,5,2,2,5,5,3],
      [5,5,5,2,2,5,5,5],
      [5,1,5,2,2,5,1,5],
      [5,5,3,2,2,3,5,5]
    ],
    'UY': [
      [4,4,4,1,1,4,4,4],
      [4,4,1,1,1,1,4,4],
      [4,1,1,1,1,1,1,4],
      [1,1,1,1,1,1,1,1],
      [4,2,2,2,2,2,2,4],
      [2,2,4,5,5,4,2,2],
      [2,2,4,5,5,4,2,2],
      [3,3,3,3,3,3,3,3]
    ],
    'DARAXT': [
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

  /* ------------------ varaq karkasi ------------------ */
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
        '<div class="l">Ism: <b>' + esc(name) + '</b></div>' +
        '<div class="l">Sana: ______________</div>' +
        '<div class="l">Vaqt: ______ daqiqa</div>' +
      '</div>' +
      '<div class="p-body"></div>' +
      '<div class="p-foot">Ali Matematika · 1-sinf uchun mashq varag\'i · ota-ona bilan birga bajaring 💛</div>';
    p.body = p.querySelector('.p-body');
    return p;
  }

  /* ------------------ masala bloklari ------------------ */
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
    return '<div class="grid" style="grid-template-columns:repeat(' + cols + ',1fr)">' + html + '</div>';
  }

  /* ------------------ savol generatorlari ------------------ */
  function genAdd(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : 20, a, b;
    do { a = rnd(1, max - 1); b = rnd(1, max - 1); } while (a + b > max);
    return { a: a, op: '+', b: b, r: a + b };
  }
  function genSub(level) {
    var max = level === 1 ? 5 : level === 2 ? 10 : 20;
    var a = rnd(2, max), b = rnd(1, a - 1);
    return { a: a, op: '−', b: b, r: a - b };
  }
  function genMul(level) {
    var a, b;
    if (level === 1) { a = rnd(2, 3); b = rnd(1, 5); }
    else if (level === 2) { a = rnd(2, 5); b = rnd(1, 10); }
    else { a = rnd(2, 9); b = rnd(2, 9); }
    return { a: a, op: '×', b: b, r: a * b };
  }
  function genDiv(level) {
    var b, r;
    if (level === 1) { b = rnd(2, 3); r = rnd(1, 5); }
    else if (level === 2) { b = rnd(2, 5); r = rnd(1, 6); }
    else { b = rnd(2, 9); r = rnd(2, 9); }
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

  /* ================== MASHQ TURLARI ================== */
  var TYPES = {

    /* ---- ✍️ Raqam yozish ---- */
    trace: {
      icon: '\u270d\ufe0f', head: 'h-purple',
      title: 'Raqamlarni yozamiz',
      sub: 'Nuqtalar bo\'ylab yur, so\'ng o\'zing yoz. O\'ngdagi doiralarni sana!',
      pages: 2,
      build: function (page, level, pageNo) {
        var from = (pageNo || 0) * 5;
        var html = '';
        for (var d = from; d < from + 5 && d <= 9; d++) {
          var reps = '';
          for (var r = 0; r < 5; r++) reps += digitSVG(d, r < 2 ? 'solid' : 'line');
          var dots = d === 0 ? '<span style="font-size:15px">bo\'sh</span>' : new Array(d + 1).join('\u25cf ');
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

    /* ---- 🍎 Sanash ---- */
    count: {
      icon: '🍎', head: 'h-blue',
      title: 'Sana va yoz',
      sub: 'Nechta rasm bor? Katakchaga raqamni yoz.',
      build: function (page, level) {
        var max = level === 1 ? 5 : level === 2 ? 10 : 20;
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

    /* ---- 📏 Sonlar chizig'i ---- */
    numline: {
      icon: '📏', head: 'h-green',
      title: 'Yetishmayotgan sonlar',
      sub: 'Bo\'sh katakchalarga to\'g\'ri sonni yoz.',
      build: function (page, level) {
        var span = level === 1 ? 10 : level === 2 ? 10 : 12;
        var maxStart = level === 1 ? 1 : level === 2 ? 10 : 40;
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

    /* ---- ⚖️ Taqqoslash ---- */
    compare: {
      icon: '⚖️', head: 'h-orange',
      title: 'Qaysi biri katta?',
      sub: 'To\'g\'ri belgini doira ichiga ol:  <  (kichik),  >  (katta),  =  (teng).',
      build: function (page, level) {
        var html = '', ans = [];
        for (var i = 1; i <= 15; i++) {
          var L, R, lt, rt;
          if (level === 1) { L = rnd(1, 10); R = rnd(1, 10); lt = L; rt = R; }
          else {
            var g1 = level === 2 ? genAdd(2) : (Math.random() < .5 ? genAdd(3) : genSub(3));
            var g2 = level === 2 ? genAdd(2) : (Math.random() < .5 ? genAdd(3) : genSub(3));
            L = g1.r; R = g2.r;
            lt = g1.a + ' ' + g1.op + ' ' + g1.b;
            rt = g2.a + ' ' + g2.op + ' ' + g2.b;
          }
          var sign = L < R ? '<' : (L > R ? '>' : '=');
          html += '<div class="cmp"><div style="font-size:11px;color:#9b96b5;text-align:left">' + i + ')</div>' +
                  '<div>' + lt + ' &nbsp;&nbsp; ' + rt + '</div>' +
                  '<div class="opts"><span>&lt;</span><span>&gt;</span><span>=</span></div></div>';
          ans.push(sign);
        }
        page.body.innerHTML = gridWrap(3, html);
        return ans;
      }
    },

    /* ---- ➕ Qo'shish ---- */
    add: {
      icon: '➕', head: 'h-green',
      title: 'Qo\'shish',
      sub: 'Hisobla va javobni katakchaga yoz.',
      build: function (page, level) { return simpleOps(page, level, ['add']); }
    },

    /* ---- ➖ Ayirish ---- */
    sub: {
      icon: '➖', head: 'h-orange',
      title: 'Ayirish',
      sub: 'Hisobla va javobni katakchaga yoz.',
      build: function (page, level) { return simpleOps(page, level, ['sub']); }
    },

    addsub: {
      icon: '➕', head: 'h-blue',
      title: 'Qo\'shish va ayirish',
      sub: 'Diqqat! Belgiga qara: + yoki −',
      build: function (page, level) { return simpleOps(page, level, ['add', 'sub']); }
    },

    /* ---- 🧮 Ustunli ---- */
    vertical: {
      icon: '🧮', head: 'h-purple',
      title: 'Ustunli qo\'shish va ayirish',
      sub: 'Birliklarni birlik bilan, o\'nliklarni o\'nlik bilan qo\'sh.',
      build: function (page, level) {
        var html = '', ans = [];
        for (var i = 1; i <= 16; i++) {
          var a, b, sign, r;
          if (Math.random() < 0.5) {
            if (level === 1) { a = rnd(11, 49); b = rnd(1, 9); }
            else if (level === 2) { a = rnd(11, 44); b = rnd(11, 44); }
            else { a = rnd(21, 79); b = rnd(11, 20); }
            sign = '+'; r = a + b;
          } else {
            if (level === 1) { a = rnd(11, 49); b = rnd(1, 9); }
            else if (level === 2) { a = rnd(25, 89); b = rnd(11, 24); }
            else { a = rnd(41, 99); b = rnd(11, 39); }
            sign = '−'; r = a - b;
          }
          html += vprobHTML(i, a, sign, b);
          ans.push(r);
        }
        page.body.innerHTML = gridWrap(4, html);
        return ans;
      }
    },

    /* ---- ✖️ Ko'paytirish ---- */
    mul: {
      icon: '✖️', head: 'h-purple',
      title: 'Ko\'paytirish',
      sub: 'Ko\'paytirish — bu bir xil sonlarni qo\'shish. 3 × 4 = 4 + 4 + 4',
      build: function (page, level) { return simpleOps(page, level, ['mul']); }
    },

    /* ---- ➗ Bo'lish ---- */
    div: {
      icon: '➗', head: 'h-pink',
      title: 'Bo\'lish',
      sub: 'Bo\'lish — teng qismlarga ajratish. 12 ÷ 3 = har biriga 4 tadan.',
      build: function (page, level) { return simpleOps(page, level, ['div']); }
    },

    all: {
      icon: '🎲', head: 'h-pink',
      title: 'Aralash mashqlar',
      sub: 'Barcha to\'rt amal: + − × ÷',
      build: function (page, level) { return simpleOps(page, level, ['add', 'sub', 'mul', 'div']); }
    },

    /* ---- 📋 Jadval plakati ---- */
    table: {
      icon: '📋', head: 'h-yellow',
      title: 'Ko\'paytirish jadvali',
      sub: 'Devorga osib qo\'ying va har kuni ovoz chiqarib o\'qing.',
      build: function (page, level) {
        var from = 2, to = level === 1 ? 5 : 9;
        var colors = ['#3aa7e0', '#2fb47c', '#f08a2c', '#7b5bff', '#ec4d8d', '#e0a800', '#00a5a5', '#d2456b'];
        var html = '';
        for (var t = from; t <= to; t++) {
          var rows = '';
          for (var i = 1; i <= 10; i++) {
            rows += '<div class="row"><span>' + t + ' × ' + i + '</span><span>= ' + (t * i) + '</span></div>';
          }
          html += '<div class="tcol"><h3 style="background:' + colors[(t - 2) % colors.length] + '">' + t + ' jadvali</h3>' + rows + '</div>';
        }
        page.body.innerHTML = '<div class="table-grid">' + html + '</div>';
        return null;
      }
    },

    /* ---- \ud83c\udfa8 Hisobla va rangla ---- */
    color: {
      icon: '\ud83c\udfa8', head: 'h-pink',
      title: 'Hisobla va rangla',
      sub: 'Har katakni hisobla. Javob raqamiga mos rang bilan bo\'ya. Nima chiqadi?',
      build: function (page, level, pageNo) {
        var names = Object.keys(PIX);
        var name = names[(pageNo || 0) % names.length];
        var art = PIX[name];

        var legend = '<div class="legend">';
        for (var c = 1; c <= 5; c++) {
          legend += '<div class="lg"><span class="sw" style="background:' + PALETTE[c].hex + '"></span>' +
                    c + ' = ' + PALETTE[c].uz + '</div>';
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
          'Rasm tayyor bo\'lgach, nima chiqqanini ayt! \ud83c\udf89</p>' +
          '<p style="text-align:center;font-size:11px;color:#b9b4cd;margin-top:14mm">' +
          'Ota-ona uchun javob: ' + esc(name) + '</p>';
        return null;
      }
    }
  };

  /* Kichik masala: javobi aynan `val` (1..5) bo'ladi */
  function tinyProblem(val, level) {
    var r = Math.random();
    if (level === 1 || r < 0.4) {          /* qo'shish:  x + y = val */
      var x = rnd(0, val);
      return x + '+' + (val - x);
    }
    if (level === 2 || r < 0.75) {         /* ayirish:  a − b = val */
      var b = rnd(1, 5);
      return (val + b) + '\u2212' + b;
    }
    var d = rnd(2, 5);                     /* bo'lish:  (val*d) ÷ d = val */
    return (val * d) + '\u00f7' + d;
  }

  /* Umumiy: oddiy gorizontal masalalar varag'i */
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

  /* ------------------ javoblar sahifasi ------------------ */
  function keyPage(allAnswers, typeTitle) {
    var p = makePage({ icon: '🔑', head: '', title: 'Javoblar', sub: typeTitle + ' — ota-onalar uchun', key: true });
    var html = '';
    allAnswers.forEach(function (pageAns, pi) {
      html += '<h3 style="margin:5mm 0 2mm;font-size:17px;color:#5c5e78">' + (pi + 1) + '-varaq</h3>';
      html += '<div class="key-grid">';
      pageAns.forEach(function (a, i) { html += '<div>' + (i + 1) + ') <b>' + esc(a) + '</b></div>'; });
      html += '</div>';
    });
    p.body.innerHTML = html;
    return p;
  }

  /* ------------------ chizish ------------------ */
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
    /* Ba'zi turlarda varaqlar soni qat'iy belgilangan */
    var count = T.pages || (type === 'table' ? 1 : pages);

    var answers = [];
    for (var i = 0; i < count; i++) {
      var p = makePage({
        icon: T.icon, head: T.head, title: T.title,
        sub: T.sub + (count > 1 ? '  ·  ' + (i + 1) + '/' + count + '-varaq' : '')
      });
      var a = T.build(p, level, i);
      host.appendChild(p);
      if (a && a.length) answers.push(a);
    }

    if (wantKey && answers.length) host.appendChild(keyPage(answers, T.title));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ------------------ URL parametrlari ------------------
     Masalan: print.html?type=mul&level=2&pages=3&key=1&bw=1&name=Ali
     PDF yasashda ham shu ishlatiladi.                        */
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
  })();

  document.getElementById('btnMake').addEventListener('click', render);
  document.getElementById('btnPrint').addEventListener('click', function () { window.print(); });
  ['fType', 'fLevel', 'fPages', 'fKey', 'fBW', 'fName'].forEach(function (id) {
    document.getElementById(id).addEventListener('change', render);
  });

  render();

  /* Tashqaridan chaqirish uchun (PDF yasashda ishlatiladi) */
  window.Worksheets = { render: render, TYPES: TYPES };
})();
