/* Interactive lesson models. INT.mount(container, spec) — no dependencies. */
(function (w, d) {
  'use strict';

  /* ---------- small helpers ---------- */
  function el(tag, attrs, kids) {
    var n = d.createElementNS(tag === 'svg' || SVGT[tag] ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml', tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    (kids || []).forEach(function (c) { n.appendChild(typeof c === 'string' ? d.createTextNode(c) : c); });
    return n;
  }
  var SVGT = { circle: 1, line: 1, path: 1, polygon: 1, polyline: 1, text: 1, g: 1, rect: 1, tspan: 1 };
  function S(tag, attrs, text) {
    var n = d.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }
  function r1(v) { return Math.round(v * 10) / 10; }
  function r2(v) { return Math.round(v * 100) / 100; }
  function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1]); }
  function angleDeg(v, p, q) {
    var a = Math.atan2(p[1] - v[1], p[0] - v[0]), b = Math.atan2(q[1] - v[1], q[0] - v[0]);
    var t = Math.abs(a - b) * 180 / Math.PI; return t > 180 ? 360 - t : t;
  }
  function mid(a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }

  /* frame: header + body, returns {body, read} */
  function frame(host, title, hint) {
    host.innerHTML = '';
    host.className = 'ilab';
    var h = el('div', { 'class': 'ih' });
    h.innerHTML = '<span class="it">' + title + '</span><span class="ihint">' + (hint || '') + '</span>';
    var b = el('div', { 'class': 'ib' });
    host.appendChild(h); host.appendChild(b);
    return b;
  }
  function readoutBar(body, items) {
    var bar = el('div', { 'class': 'readout' });
    var map = {};
    items.forEach(function (t) {
      var n = el('div', { 'class': 'rd' });
      n.innerHTML = t + ' <b data-k="' + t + '">–</b>';
      map[t] = n.querySelector('b');
      bar.appendChild(n);
    });
    body.appendChild(bar);
    return map;
  }
  function slider(body, label, min, max, val, step, onChange) {
    var c = el('div', { 'class': 'ctrl' });
    var id = 'sl' + Math.random().toString(36).slice(2, 8);
    c.innerHTML = '<label for="' + id + '">' + label + '</label>' +
      '<input id="' + id + '" type="range" min="' + min + '" max="' + max + '" step="' + step +
      '" value="' + val + '"><output>' + val + '</output>';
    var inp = c.querySelector('input'), out = c.querySelector('output');
    inp.addEventListener('input', function () { out.textContent = inp.value; onChange(parseFloat(inp.value)); });
    body.appendChild(c);
    return { input: inp, output: out, set: function (v) { inp.value = v; out.textContent = v; } };
  }
  function ctrlRow(body) { var r = el('div', { 'class': 'ctrls' }); body.appendChild(r); return r; }
  function stage(body, vb, wpx) {
    var st = el('div', { 'class': 'stage' });
    var svg = S('svg', { viewBox: vb, width: wpx || 460, xmlns: 'http://www.w3.org/2000/svg' });
    svg.style.maxWidth = '100%'; svg.style.height = 'auto';
    st.appendChild(svg); body.appendChild(st);
    return svg;
  }
  /* make circles draggable inside an svg; cb(id,x,y) */
  function draggable(svg, handles, cb) {
    var active = null;
    function pt(evt) {
      var m = svg.getScreenCTM();
      var p = svg.createSVGPoint(); p.x = evt.clientX; p.y = evt.clientY;
      var q = p.matrixTransform(m.inverse());
      return [q.x, q.y];
    }
    handles.forEach(function (h) {
      h.node.classList.add('handle');
      h.node.setAttribute('tabindex', '0');
      h.node.addEventListener('pointerdown', function (e) {
        active = h; h.node.setPointerCapture(e.pointerId); e.preventDefault();
      });
      h.node.addEventListener('keydown', function (e) {
        var s = e.shiftKey ? 10 : 3, dx = 0, dy = 0;
        if (e.key === 'ArrowLeft') dx = -s; else if (e.key === 'ArrowRight') dx = s;
        else if (e.key === 'ArrowUp') dy = -s; else if (e.key === 'ArrowDown') dy = s; else return;
        e.preventDefault();
        cb(h.id, h.get()[0] + dx, h.get()[1] + dy);
      });
    });
    svg.addEventListener('pointermove', function (e) {
      if (!active) return;
      var p = pt(e); cb(active.id, p[0], p[1]);
    });
    svg.addEventListener('pointerup', function () { active = null; });
    svg.addEventListener('pointercancel', function () { active = null; });
  }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  var INT = {};

  /* ============ 1. interior / exterior angles of a polygon ============ */
  INT.polygonAngles = function (host, opt) {
    var body = frame(host, 'Angle sum of a polygon',
      'Move the slider — the polygon splits into triangles from one vertex.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 340 260', 420);
    var read = readoutBar(body, ['sides n', 'triangles', 'interior sum', 'each angle', 'exterior sum']);
    var n = 6;
    function draw() {
      svg.innerHTML = '';
      var cx = 170, cy = 128, R = 100, pts = [], i;
      for (i = 0; i < n; i++) {
        var a = -Math.PI / 2 + i * 2 * Math.PI / n;
        pts.push([cx + R * Math.cos(a), cy + R * Math.sin(a)]);
      }
      svg.appendChild(S('polygon', {
        points: pts.map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round'
      }));
      for (i = 2; i < n - 1; i++) {
        svg.appendChild(S('line', {
          x1: r1(pts[0][0]), y1: r1(pts[0][1]), x2: r1(pts[i][0]), y2: r1(pts[i][1]),
          stroke: 'var(--faint)', 'stroke-width': 1.4, 'stroke-dasharray': '5 4'
        }));
      }
      for (i = 1; i < n - 1; i++) {
        var c = [(pts[0][0] + pts[i][0] + pts[i + 1][0]) / 3, (pts[0][1] + pts[i][1] + pts[i + 1][1]) / 3];
        var t = S('text', {
          x: r1(c[0]), y: r1(c[1]), 'text-anchor': 'middle', 'dominant-baseline': 'middle',
          'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: 'var(--brass)'
        }, String(i));
        svg.appendChild(t);
      }
      pts.forEach(function (p) {
        svg.appendChild(S('circle', { cx: r1(p[0]), cy: r1(p[1]), r: 3.4, fill: 'currentColor' }));
      });
      svg.appendChild(S('text', {
        x: 170, y: 248, 'text-anchor': 'middle', 'font-family': 'Spectral, Georgia, serif',
        'font-size': 14, fill: 'var(--brand)'
      }, '180° × (' + n + ' − 2) = ' + (180 * (n - 2)) + '°'));
      read['sides n'].textContent = n;
      read['triangles'].textContent = n - 2;
      read['interior sum'].textContent = 180 * (n - 2) + '°';
      read['each angle'].textContent = r1(180 * (n - 2) / n) + '°';
      read['exterior sum'].textContent = '360°';
    }
    slider(row, 'number of sides n', 3, 12, 6, 1, function (v) { n = v; draw(); });
    draw();
  };

  /* ============ 2. quadrilateral explorer (drag the vertices) ============ */
  INT.quadExplorer = function (host, opt) {
    opt = opt || {};
    var mode = opt.mode || 'parallelogram';
    var body = frame(host, opt.title || 'Drag the vertices',
      'Grab A, B or D and drag. C follows so the shape stays a ' + mode + '.');
    var svg = stage(body, '0 0 360 250', 460);
    var read = readoutBar(body, (opt.read || ['AB', 'DC', 'AD', 'BC', '∠A', '∠C', 'AC', 'BD', 'AO', 'OC']));
    var P = { A: [60, 200], B: [230, 200], D: [110, 70] };
    function C() { return [P.B[0] + P.D[0] - P.A[0], P.B[1] + P.D[1] - P.A[1]]; }
    function draw() {
      var A = P.A, B = P.B, Dp = P.D, Cp = C(), O = mid(A, Cp);
      svg.innerHTML = '';
      svg.appendChild(S('polygon', {
        points: [A, B, Cp, Dp].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      [[A, Cp, 'var(--brand)'], [B, Dp, 'var(--brass)']].forEach(function (g) {
        svg.appendChild(S('line', {
          x1: r1(g[0][0]), y1: r1(g[0][1]), x2: r1(g[1][0]), y2: r1(g[1][1]),
          stroke: g[2], 'stroke-width': 1.6
        }));
      });
      svg.appendChild(S('circle', { cx: r1(O[0]), cy: r1(O[1]), r: 3.6, fill: 'var(--brand)' }));
      var names = { A: A, B: B, C: Cp, D: Dp };
      var ctr = [(A[0] + B[0] + Cp[0] + Dp[0]) / 4, (A[1] + B[1] + Cp[1] + Dp[1]) / 4];
      var handles = [];
      Object.keys(names).forEach(function (k) {
        var p = names[k];
        var ux = (p[0] - ctr[0]), uy = (p[1] - ctr[1]), l = Math.hypot(ux, uy) || 1;
        svg.appendChild(S('text', {
          x: r1(p[0] + ux / l * 18), y: r1(p[1] + uy / l * 18), 'text-anchor': 'middle',
          'dominant-baseline': 'middle', 'font-family': 'Spectral, Georgia, serif',
          'font-size': 15, 'font-style': 'italic', fill: 'currentColor'
        }, k));
        var c = S('circle', {
          cx: r1(p[0]), cy: r1(p[1]), r: k === 'C' ? 4.5 : 8,
          fill: k === 'C' ? 'var(--muted)' : 'var(--brand)',
          'fill-opacity': k === 'C' ? 1 : .85
        });
        svg.appendChild(c);
        if (k !== 'C') handles.push({ id: k, node: c, get: function () { return P[k]; } });
      });
      draggable(svg, handles, function (id, x, y) {
        P[id] = [clamp(x, 24, 336), clamp(y, 24, 226)];
        if (mode === 'rhombus' && (id === 'B' || id === 'D')) {
          var L = dist(P.A, P.B);
          var u = [(P.D[0] - P.A[0]), (P.D[1] - P.A[1])], dl = Math.hypot(u[0], u[1]) || 1;
          P.D = [P.A[0] + u[0] / dl * L, P.A[1] + u[1] / dl * L];
        }
        draw();
      });
      var vals = { 'AB': r1(dist(A, B)), 'DC': r1(dist(Dp, Cp)), 'AD': r1(dist(A, Dp)),
        'BC': r1(dist(B, Cp)), '∠A': r1(angleDeg(A, B, Dp)) + '°', '∠C': r1(angleDeg(Cp, B, Dp)) + '°',
        '∠B': r1(angleDeg(B, A, Cp)) + '°', '∠D': r1(angleDeg(Dp, A, Cp)) + '°',
        'AC': r1(dist(A, Cp)), 'BD': r1(dist(B, Dp)),
        'AO': r1(dist(A, O)), 'OC': r1(dist(O, Cp)),
        'perimeter': r1(2 * (dist(A, B) + dist(A, Dp))) };
      Object.keys(read).forEach(function (k) { if (vals[k] != null) read[k].textContent = vals[k]; });
    }
    draw();
  };

  /* ============ 3. trapezium midline ============ */
  INT.trapeziumMidline = function (host, opt) {
    var body = frame(host, 'The midline of a trapezium',
      'Drag the top corners — the midline is always the average of the two bases.');
    var svg = stage(body, '0 0 380 250', 470);
    var read = readoutBar(body, ['a (AD)', 'b (BC)', '(a + b) / 2', 'MN measured']);
    var B = [110, 70], Cp = [240, 70];
    var A = [40, 200], Dp = [340, 200];
    function draw() {
      svg.innerHTML = '';
      svg.appendChild(S('polygon', {
        points: [A, B, Cp, Dp].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      var M = mid(A, B), N = mid(Dp, Cp);
      svg.appendChild(S('line', {
        x1: r1(M[0]), y1: r1(M[1]), x2: r1(N[0]), y2: r1(N[1]),
        stroke: 'var(--brass)', 'stroke-width': 3
      }));
      [[M, 'M'], [N, 'N']].forEach(function (g) {
        svg.appendChild(S('circle', { cx: r1(g[0][0]), cy: r1(g[0][1]), r: 4, fill: 'var(--brass)' }));
        svg.appendChild(S('text', {
          x: r1(g[0][0] + (g[1] === 'M' ? -16 : 16)), y: r1(g[0][1]), 'text-anchor': 'middle',
          'dominant-baseline': 'middle', 'font-family': 'Spectral, Georgia, serif',
          'font-size': 14, 'font-style': 'italic', fill: 'var(--brass)'
        }, g[1]));
      });
      var handles = [];
      [['B', B], ['C', Cp], ['A', A], ['D', Dp]].forEach(function (g) {
        var top = g[0] === 'B' || g[0] === 'C';
        var c = S('circle', { cx: r1(g[1][0]), cy: r1(g[1][1]), r: 8, fill: 'var(--brand)', 'fill-opacity': .85 });
        svg.appendChild(c);
        svg.appendChild(S('text', {
          x: r1(g[1][0]), y: r1(g[1][1] + (top ? -18 : 20)), 'text-anchor': 'middle',
          'font-family': 'Spectral, Georgia, serif', 'font-size': 14, 'font-style': 'italic',
          fill: 'currentColor'
        }, g[0]));
        handles.push({ id: g[0], node: c, get: function () { return g[1]; } });
      });
      draggable(svg, handles, function (id, x) {
        x = clamp(x, 20, 360);
        if (id === 'B') B[0] = Math.min(x, Cp[0] - 20);
        else if (id === 'C') Cp[0] = Math.max(x, B[0] + 20);
        else if (id === 'A') A[0] = Math.min(x, Dp[0] - 20);
        else Dp[0] = Math.max(x, A[0] + 20);
        draw();
      });
      var a = dist(A, Dp), b = dist(B, Cp);
      read['a (AD)'].textContent = r1(a);
      read['b (BC)'].textContent = r1(b);
      read['(a + b) / 2'].textContent = r1((a + b) / 2);
      read['MN measured'].textContent = r1(dist(M, N));
    }
    draw();
  };

  /* ============ 4. midline of a triangle ============ */
  INT.triangleMidline = function (host, opt) {
    var body = frame(host, 'The midline of a triangle',
      'Drag any vertex. MN stays parallel to BC and exactly half its length.');
    var svg = stage(body, '0 0 360 250', 460);
    var read = readoutBar(body, ['BC', 'MN', 'BC / MN']);
    var P = { A: [180, 40], B: [50, 205], C: [310, 205] };
    function draw() {
      svg.innerHTML = '';
      var M = mid(P.A, P.B), N = mid(P.A, P.C);
      svg.appendChild(S('polygon', {
        points: [P.A, P.B, P.C].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      svg.appendChild(S('line', {
        x1: r1(M[0]), y1: r1(M[1]), x2: r1(N[0]), y2: r1(N[1]),
        stroke: 'var(--brass)', 'stroke-width': 3
      }));
      var handles = [];
      ['A', 'B', 'C'].forEach(function (k) {
        var p = P[k];
        var c = S('circle', { cx: r1(p[0]), cy: r1(p[1]), r: 8, fill: 'var(--brand)', 'fill-opacity': .85 });
        svg.appendChild(c);
        svg.appendChild(S('text', {
          x: r1(p[0]), y: r1(p[1] + (k === 'A' ? -18 : 22)), 'text-anchor': 'middle',
          'font-family': 'Spectral, Georgia, serif', 'font-size': 15, 'font-style': 'italic',
          fill: 'currentColor'
        }, k));
        handles.push({ id: k, node: c, get: function () { return P[k]; } });
      });
      [[M, 'M'], [N, 'N']].forEach(function (g) {
        svg.appendChild(S('circle', { cx: r1(g[0][0]), cy: r1(g[0][1]), r: 4, fill: 'var(--brass)' }));
        svg.appendChild(S('text', {
          x: r1(g[0][0] + (g[1] === 'M' ? -15 : 15)), y: r1(g[0][1]), 'text-anchor': 'middle',
          'dominant-baseline': 'middle', 'font-family': 'Spectral, Georgia, serif',
          'font-size': 13.5, 'font-style': 'italic', fill: 'var(--brass)'
        }, g[1]));
      });
      draggable(svg, handles, function (id, x, y) {
        P[id] = [clamp(x, 22, 338), clamp(y, 22, 228)]; draw();
      });
      var bc = dist(P.B, P.C), mn = dist(M, N);
      read['BC'].textContent = r1(bc);
      read['MN'].textContent = r1(mn);
      read['BC / MN'].textContent = r2(bc / mn);
    }
    draw();
  };

  /* ============ 5. Thales' theorem ============ */
  INT.thales = function (host, opt) {
    var body = frame(host, 'Thales’ theorem',
      'Change the angle and the spacing — equal cuts on one side stay equal on the other.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 400 250', 480);
    var read = readoutBar(body, ['OA₁', 'A₁A₂', 'OB₁', 'B₁B₂', 'OA₁ : OA₂', 'OB₁ : OB₂']);
    var deg = 38, sp = 88;
    function draw() {
      svg.innerHTML = '';
      var O = [40, 210], t = deg * Math.PI / 180;
      var u1 = [1, 0], u2 = [Math.cos(t), -Math.sin(t)];
      function Q(u, s) { return [O[0] + u[0] * s, O[1] + u[1] * s]; }
      [u1, u2].forEach(function (u) {
        var e = Q(u, 340);
        svg.appendChild(S('line', {
          x1: O[0], y1: O[1], x2: r1(e[0]), y2: r1(e[1]),
          stroke: 'currentColor', 'stroke-width': 2
        }));
      });
      var A = [], B = [], i;
      for (i = 1; i <= 3; i++) { A.push(Q(u1, sp * i)); B.push(Q(u2, sp * i)); }
      for (i = 0; i < 3; i++) {
        svg.appendChild(S('line', {
          x1: r1(A[i][0]), y1: r1(A[i][1]), x2: r1(B[i][0]), y2: r1(B[i][1]),
          stroke: 'var(--brand)', 'stroke-width': 2
        }));
        [[A[i], 'A' + (i + 1), 18], [B[i], 'B' + (i + 1), -16]].forEach(function (g) {
          svg.appendChild(S('circle', { cx: r1(g[0][0]), cy: r1(g[0][1]), r: 4, fill: 'var(--brand)' }));
          svg.appendChild(S('text', {
            x: r1(g[0][0] + (g[2] > 0 ? 0 : -14)), y: r1(g[0][1] + (g[2] > 0 ? 18 : -8)),
            'text-anchor': 'middle', 'font-family': 'Spectral, Georgia, serif', 'font-size': 13,
            'font-style': 'italic', fill: 'currentColor'
          }, g[1]));
        });
      }
      svg.appendChild(S('circle', { cx: O[0], cy: O[1], r: 4, fill: 'currentColor' }));
      svg.appendChild(S('text', {
        x: O[0] - 14, y: O[1] + 6, 'font-family': 'Spectral, Georgia, serif',
        'font-size': 14, 'font-style': 'italic', fill: 'currentColor'
      }, 'O'));
      read['OA₁'].textContent = r1(sp);
      read['A₁A₂'].textContent = r1(sp);
      read['OB₁'].textContent = r1(sp);
      read['B₁B₂'].textContent = r1(sp);
      read['OA₁ : OA₂'].textContent = '1 : 2';
      read['OB₁ : OB₂'].textContent = '1 : 2';
    }
    slider(row, 'angle', 15, 70, deg, 1, function (v) { deg = v; draw(); });
    slider(row, 'spacing', 55, 105, sp, 1, function (v) { sp = v; draw(); });
    draw();
  };

  /* ============ 6. hyperbola y = k/x ============ */
  INT.hyperbola = function (host, opt) {
    var body = frame(host, 'The graph of y = k ⁄ x',
      'Change k and move the point — the product x·y never changes.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 340 300', 430);
    var read = readoutBar(body, ['k', 'x', 'y = k/x', 'x · y', 'quadrants']);
    var k = 6, px = 2;
    function draw() {
      svg.innerHTML = '';
      var cx = 170, cy = 150, u = 23, i;
      for (i = -6; i <= 6; i++) {
        svg.appendChild(S('line', { x1: cx + i * u, y1: 8, x2: cx + i * u, y2: 292, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
        svg.appendChild(S('line', { x1: 8, y1: cy + i * u, x2: 332, y2: cy + i * u, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
      }
      svg.appendChild(S('line', { x1: 8, y1: cy, x2: 332, y2: cy, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      svg.appendChild(S('line', { x1: cx, y1: 8, x2: cx, y2: 292, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      function branch(sg) {
        var dd = '', on = false;
        for (var x = 0.2; x <= 7; x += 0.04) {
          var y = k / x; if (Math.abs(y) > 6.3) continue;
          var X = cx + sg * x * u, Y = cy - sg * y * u;
          if (X < 6 || X > 334) continue;
          dd += (on ? 'L' : 'M') + r1(X) + ' ' + r1(Y) + ' '; on = true;
        }
        svg.appendChild(S('path', { d: dd, fill: 'none', stroke: 'var(--brand)', 'stroke-width': 2.6, 'stroke-linecap': 'round' }));
      }
      branch(1); branch(-1);
      var y0 = k / px, PX = cx + px * u, PY = cy - y0 * u;
      if (Math.abs(y0) <= 6.3) {
        svg.appendChild(S('line', { x1: r1(PX), y1: r1(PY), x2: r1(PX), y2: cy, stroke: 'var(--brass)', 'stroke-width': 1.4, 'stroke-dasharray': '4 4' }));
        svg.appendChild(S('line', { x1: r1(PX), y1: r1(PY), x2: cx, y2: r1(PY), stroke: 'var(--brass)', 'stroke-width': 1.4, 'stroke-dasharray': '4 4' }));
        svg.appendChild(S('rect', {
          x: r1(Math.min(cx, PX)), y: r1(Math.min(cy, PY)),
          width: r1(Math.abs(PX - cx)), height: r1(Math.abs(PY - cy)),
          fill: 'var(--brass)', 'fill-opacity': .13
        }));
        svg.appendChild(S('circle', { cx: r1(PX), cy: r1(PY), r: 5.5, fill: 'var(--brass)' }));
      }
      svg.appendChild(S('text', { x: 328, y: cy - 10, 'text-anchor': 'end', 'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: 'var(--muted)' }, 'x'));
      svg.appendChild(S('text', { x: cx + 12, y: 18, 'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: 'var(--muted)' }, 'y'));
      read['k'].textContent = k;
      read['x'].textContent = r2(px);
      read['y = k/x'].textContent = r2(k / px);
      read['x · y'].textContent = r2(px * (k / px));
      read['quadrants'].textContent = k > 0 ? 'I and III' : 'II and IV';
    }
    slider(row, 'k', -8, 8, k, 1, function (v) { if (v === 0) v = 1; k = v; draw(); });
    slider(row, 'x', 0.5, 6, px, 0.1, function (v) { px = v; draw(); });
    draw();
  };

  /* ============ 7. cancelling an algebraic fraction ============ */
  INT.fractionCancel = function (host, opt) {
    opt = opt || {};
    var items = opt.items || [];
    var body = frame(host, (opt && opt.title) || 'Cancelling step by step',
      (opt && opt.hint) || 'Pick a task, then reveal one step at a time.');
    var row = ctrlRow(body);
    var out = el('div', {}); body.appendChild(out);
    var idx = 0, shown = 0;
    var sel = el('select', { 'class': 'btn sm', style: 'padding:6px 10px' });
    items.forEach(function (it, i) { var o = el('option', { value: i }); o.innerHTML = it.title; sel.appendChild(o); });
    sel.addEventListener('change', function () { idx = +sel.value; shown = 0; render(); });
    row.appendChild(sel);
    var next = el('button', { 'class': 'btn sm primary', type: 'button' }); next.textContent = 'Next step →';
    var reset = el('button', { 'class': 'btn sm', type: 'button' }); reset.textContent = 'Restart';
    next.addEventListener('click', function () { if (shown < items[idx].steps.length) shown++; render(); });
    reset.addEventListener('click', function () { shown = 0; render(); });
    row.appendChild(next); row.appendChild(reset);
    function render() {
      var it = items[idx];
      var h = '<div class="eq boxed">' + it.start + '</div><ol class="steps">';
      it.steps.forEach(function (s, i) {
        h += '<li' + (i < shown ? '' : ' hidden') + '>' + s[0] +
          (s[1] ? '<span class="why">' + s[1] + '</span>' : '') + '</li>';
      });
      h += '</ol>';
      if (shown >= it.steps.length) h += '<div class="keybox"><div class="klabel">Answer</div>' + it.answer + '</div>';
      out.innerHTML = h;
      next.disabled = shown >= it.steps.length;
    }
    render();
  };

  /* ============ 8. lowest common denominator builder ============ */
  INT.lcdBuilder = function (host, opt) {
    opt = opt || {};
    var items = opt.items || [];
    var body = frame(host, (opt && opt.title) || 'Building the common denominator',
      (opt && opt.hint) || 'Choose a pair of denominators and watch the LCD being assembled.');
    var row = ctrlRow(body);
    var out = el('div', {}); body.appendChild(out);
    var idx = 0;
    var sel = el('select', { 'class': 'btn sm', style: 'padding:6px 10px' });
    items.forEach(function (it, i) { var o = el('option', { value: i }); o.innerHTML = it.label; sel.appendChild(o); });
    sel.addEventListener('change', function () { idx = +sel.value; render(); });
    row.appendChild(sel);
    function render() {
      var it = items[idx];
      out.innerHTML =
        '<table style="width:100%;border-collapse:collapse">' +
        '<tr><th>Denominator</th><th>Factorised</th><th>Extra factor needed</th></tr>' +
        it.rows.map(function (r) {
          return '<tr><td class="m">' + r[0] + '</td><td class="m">' + r[1] +
            '</td><td class="m" style="color:var(--brass)">' + r[2] + '</td></tr>';
        }).join('') + '</table>' +
        '<div class="keybox"><div class="klabel">Lowest common denominator</div>' +
        '<div class="eq" style="margin:.3em 0">' + it.lcd + '</div>' +
        (it.note ? '<p class="small" style="margin:8px 0 0">' + it.note + '</p>' : '') + '</div>';
    }
    render();
  };

  /* ============ 9. substitute a value / domain check ============ */
  INT.substitute = function (host, opt) {
    opt = opt || {};
    var body = frame(host, opt.title || 'Try a value of x',
      'Move x. Where the denominator hits zero the fraction has no value at all.');
    var row = ctrlRow(body);
    var out = el('div', {}); body.appendChild(out);
    var f = opt.f, den = opt.den, bad = opt.bad || [];
    var x = opt.start == null ? 2 : opt.start;
    function render() {
      var dv = den(x);
      var ok = Math.abs(dv) > 1e-9;
      out.innerHTML = '<div class="eq boxed">' + opt.expr + '</div>' +
        '<div class="readout">' +
        '<div class="rd">x <b>' + r2(x) + '</b></div>' +
        '<div class="rd">denominator <b>' + r2(dv) + '</b></div>' +
        '<div class="rd">value <b style="color:' + (ok ? 'var(--easy)' : 'var(--hard)') + '">' +
        (ok ? r2(f(x)) : 'undefined') + '</b></div></div>' +
        (ok ? '' : '<div class="warn"><span class="wl">Not allowed</span>The denominator is 0, so the fraction has no value here. That is why we write x ≠ ' + bad.join(', x ≠ ') + '.</div>');
    }
    slider(row, 'x', opt.min == null ? -6 : opt.min, opt.max == null ? 6 : opt.max, x, 0.5,
      function (v) { x = v; render(); });
    render();
  };

  /* ============ 10. instant-check quiz ============ */
  INT.quiz = function (host, opt) {
    var qs = (opt && opt.items) || [];
    var body = frame(host, (opt && opt.title) || 'Check yourself',
      (opt && opt.hint) || 'One click per question. Answers explain themselves.');
    var wrapEl = el('div', { 'class': 'quiz' });
    var score = el('p', { 'class': 'small' });
    var right = 0, done = 0;
    qs.forEach(function (q) {
      var item = el('div', { 'class': 'qitem' });
      item.innerHTML = '<div class="qq">' + q.q + '</div>';
      var opts = el('div', { 'class': 'opts' });
      var fb = el('div', { 'class': 'qfb' });
      q.a.forEach(function (txt, i) {
        var b = el('button', { 'class': 'opt', type: 'button' });
        b.innerHTML = txt;
        b.addEventListener('click', function () {
          if (item.dataset.done) return;
          item.dataset.done = '1'; done++;
          [].forEach.call(opts.children, function (o, j) {
            o.disabled = true;
            if (j === q.c) o.classList.add('ok');
            else if (o === b) o.classList.add('no');
          });
          if (i === q.c) right++;
          fb.innerHTML = (i === q.c ? '<b style="color:var(--easy)">Correct.</b> ' :
            '<b style="color:var(--hard)">Not quite.</b> ') + (q.why || '');
          fb.classList.add('on');
          score.textContent = right + ' of ' + done + ' correct' + (done === qs.length ? ' — all questions answered.' : '.');
        });
        opts.appendChild(b);
      });
      item.appendChild(opts); item.appendChild(fb);
      wrapEl.appendChild(item);
    });
    body.appendChild(wrapEl); body.appendChild(score);
  };


  /* ============ 11. triangle angles — drag and watch the sum ============ */
  INT.triangleAngles = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'The angles of a triangle',
      'Drag any vertex. The three angles change — their sum never does.');
    var svg = stage(body, '0 0 360 250', 460);
    var read = readoutBar(body, ['∠A', '∠B', '∠C', 'sum', 'longest side', 'largest angle']);
    var P = { A: [180, 38], B: [56, 208], C: [304, 208] };
    function draw() {
      svg.innerHTML = '';
      svg.appendChild(S('polygon', {
        points: [P.A, P.B, P.C].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      var cols = { A: 'var(--brand)', B: 'var(--brass)', C: 'var(--hard)' };
      var order = { A: ['B', 'C'], B: ['A', 'C'], C: ['A', 'B'] };
      var handles = [];
      ['A', 'B', 'C'].forEach(function (k) {
        var v = P[k], o = order[k];
        var a1 = Math.atan2(P[o[0]][1] - v[1], P[o[0]][0] - v[0]);
        var a2 = Math.atan2(P[o[1]][1] - v[1], P[o[1]][0] - v[0]);
        var dd = a2 - a1; while (dd > Math.PI) dd -= 2 * Math.PI; while (dd < -Math.PI) dd += 2 * Math.PI;
        var R = 26;
        var s1 = [v[0] + R * Math.cos(a1), v[1] + R * Math.sin(a1)];
        var e1 = [v[0] + R * Math.cos(a1 + dd), v[1] + R * Math.sin(a1 + dd)];
        svg.appendChild(S('path', {
          d: 'M' + r1(s1[0]) + ' ' + r1(s1[1]) + ' A' + R + ' ' + R + ' 0 0 ' + (dd > 0 ? 1 : 0) +
            ' ' + r1(e1[0]) + ' ' + r1(e1[1]),
          fill: 'none', stroke: cols[k], 'stroke-width': 2
        }));
        var mA = a1 + dd / 2;
        svg.appendChild(S('text', {
          x: r1(v[0] + 42 * Math.cos(mA)), y: r1(v[1] + 42 * Math.sin(mA)), 'text-anchor': 'middle',
          'dominant-baseline': 'middle', 'font-family': 'IBM Plex Mono, monospace',
          'font-size': 11.5, fill: cols[k]
        }, r1(angleDeg(v, P[o[0]], P[o[1]])) + '°'));
        var c = S('circle', { cx: r1(v[0]), cy: r1(v[1]), r: 8, fill: cols[k], 'fill-opacity': .9 });
        svg.appendChild(c);
        svg.appendChild(S('text', {
          x: r1(v[0]), y: r1(v[1] + (k === 'A' ? -18 : 24)), 'text-anchor': 'middle',
          'font-family': 'Spectral, Georgia, serif', 'font-size': 15, 'font-style': 'italic',
          fill: 'currentColor'
        }, k));
        handles.push({ id: k, node: c, get: function () { return P[k]; } });
      });
      draggable(svg, handles, function (id, x, y) {
        P[id] = [clamp(x, 24, 336), clamp(y, 24, 226)]; draw();
      });
      var a = angleDeg(P.A, P.B, P.C), b = angleDeg(P.B, P.A, P.C), c2 = angleDeg(P.C, P.A, P.B);
      read['∠A'].textContent = r1(a) + '°';
      read['∠B'].textContent = r1(b) + '°';
      read['∠C'].textContent = r1(c2) + '°';
      read['sum'].textContent = Math.round(a + b + c2) + '°';
      var sides = [['BC', dist(P.B, P.C), 'A'], ['AC', dist(P.A, P.C), 'B'], ['AB', dist(P.A, P.B), 'C']];
      sides.sort(function (x, y2) { return y2[1] - x[1]; });
      read['longest side'].textContent = sides[0][0];
      read['largest angle'].textContent = '∠' + sides[0][2];
    }
    draw();
  };


  /* ============ 12. right-triangle trigonometry ============ */
  INT.rightTriangle = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Solve the right triangle',
      'Change the angle or a side; every ratio and every length follows.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 380 250', 470);
    var read = readoutBar(body, ['α', 'β', 'a (opposite)', 'b (adjacent)', 'c (hyp)',
      'sin α', 'cos α', 'tan α', 'a² + b²', 'c²']);
    var alpha = 36, c = 190;
    function draw() {
      svg.innerHTML = '';
      var t = alpha * Math.PI / 180;
      var a = c * Math.sin(t), bb = c * Math.cos(t);
      var A = [40, 40], C0 = [40, 40 + a], B = [40 + bb, 40 + a];
      var sc = Math.min(300 / Math.max(bb, 1), 180 / Math.max(a, 1), 1);
      A = [40, 40]; C0 = [40, 40 + a * sc]; B = [40 + bb * sc, 40 + a * sc];
      svg.appendChild(S('polygon', {
        points: [A, B, C0].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      var rr = 13;
      svg.appendChild(S('path', {
        d: 'M' + r1(C0[0] + rr) + ' ' + r1(C0[1]) + ' L' + r1(C0[0] + rr) + ' ' + r1(C0[1] - rr) +
          ' L' + r1(C0[0]) + ' ' + r1(C0[1] - rr), fill: 'none', stroke: 'var(--brand)', 'stroke-width': 1.8
      }));
      var R = 34;
      svg.appendChild(S('path', {
        d: 'M' + r1(A[0]) + ' ' + r1(A[1] + R) + ' A' + R + ' ' + R + ' 0 0 0 ' +
          r1(A[0] + R * Math.sin(t)) + ' ' + r1(A[1] + R * Math.cos(t)),
        fill: 'none', stroke: 'var(--brass)', 'stroke-width': 2
      }));
      [[A, 'A', -6, -12], [B, 'B', 16, 6], [C0, 'C', -14, 16]].forEach(function (g) {
        svg.appendChild(S('circle', { cx: r1(g[0][0]), cy: r1(g[0][1]), r: 4, fill: 'currentColor' }));
        svg.appendChild(S('text', {
          x: r1(g[0][0] + g[2]), y: r1(g[0][1] + g[3]), 'text-anchor': 'middle',
          'font-family': 'Spectral, Georgia, serif', 'font-size': 15, 'font-style': 'italic',
          fill: 'currentColor'
        }, g[1]));
      });
      function lab(p, q, txt, dx, dy, col) {
        svg.appendChild(S('text', {
          x: r1((p[0] + q[0]) / 2 + dx), y: r1((p[1] + q[1]) / 2 + dy), 'text-anchor': 'middle',
          'font-family': 'IBM Plex Mono, monospace', 'font-size': 11.5, fill: col || 'var(--muted)'
        }, txt));
      }
      lab(A, C0, 'b = ' + r1(bb), -22, 0);
      lab(C0, B, 'a = ' + r1(a), 0, 20);
      lab(A, B, 'c = ' + r1(c), 22, -8, 'var(--brand)');
      svg.appendChild(S('text', {
        x: r1(A[0] + 44), y: r1(A[1] + 30), 'font-family': 'IBM Plex Mono, monospace',
        'font-size': 11.5, fill: 'var(--brass)'
      }, alpha + '°'));
      read['α'].textContent = alpha + '°';
      read['β'].textContent = (90 - alpha) + '°';
      read['a (opposite)'].textContent = r1(a);
      read['b (adjacent)'].textContent = r1(bb);
      read['c (hyp)'].textContent = r1(c);
      read['sin α'].textContent = r2(Math.sin(t));
      read['cos α'].textContent = r2(Math.cos(t));
      read['tan α'].textContent = r2(Math.tan(t));
      read['a² + b²'].textContent = Math.round(a * a + bb * bb);
      read['c²'].textContent = Math.round(c * c);
    }
    slider(row, 'angle α', 10, 80, alpha, 1, function (v) { alpha = v; draw(); });
    slider(row, 'hypotenuse c', 100, 240, c, 5, function (v) { c = v; draw(); });
    draw();
  };

  /* ============ 13. Pythagoras check ============ */
  INT.pythagoras = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'a² + b² = c²',
      'Change the legs. The two coloured squares always fill the third exactly.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 400 320', 460);
    var read = readoutBar(body, ['a', 'b', 'c', 'a²', 'b²', 'a² + b²', 'c²']);
    var a = 80, bb = 60;
    function draw() {
      svg.innerHTML = '';
      var k = 1.0, C0 = [160, 190], B = [160 + a * k, 190], A = [160, 190 - bb * k];
      svg.appendChild(S('rect', {
        x: r1(C0[0]), y: r1(C0[1]), width: r1(a * k), height: r1(a * k),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 1.5
      }));
      svg.appendChild(S('rect', {
        x: r1(C0[0] - bb * k), y: r1(C0[1] - bb * k), width: r1(bb * k), height: r1(bb * k),
        fill: 'var(--easy-tint)', stroke: 'currentColor', 'stroke-width': 1.5
      }));
      var ux = (B[0] - A[0]), uy = (B[1] - A[1]), L = Math.hypot(ux, uy);
      var px = uy / L, py = -ux / L;
      var P1 = [A[0] + px * L, A[1] + py * L], P2 = [B[0] + px * L, B[1] + py * L];
      svg.appendChild(S('polygon', {
        points: [A, B, P2, P1].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brass-tint)', stroke: 'currentColor', 'stroke-width': 1.8, 'stroke-linejoin': 'round'
      }));
      svg.appendChild(S('polygon', {
        points: [A, B, C0].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--surface)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      svg.appendChild(S('text', {
        x: r1(C0[0] + a * k / 2), y: r1(C0[1] + a * k / 2), 'text-anchor': 'middle',
        'dominant-baseline': 'middle', 'font-family': 'IBM Plex Mono, monospace',
        'font-size': 12, fill: 'var(--brand)'
      }, 'a² = ' + a * a));
      svg.appendChild(S('text', {
        x: r1(C0[0] - bb * k / 2), y: r1(C0[1] - bb * k / 2), 'text-anchor': 'middle',
        'dominant-baseline': 'middle', 'font-family': 'IBM Plex Mono, monospace',
        'font-size': 12, fill: 'var(--easy)'
      }, 'b² = ' + bb * bb));
      svg.appendChild(S('text', {
        x: r1((A[0] + P2[0]) / 2), y: r1((A[1] + P2[1]) / 2), 'text-anchor': 'middle',
        'dominant-baseline': 'middle', 'font-family': 'IBM Plex Mono, monospace',
        'font-size': 12, fill: 'var(--brass)'
      }, 'c² = ' + (a * a + bb * bb)));
      read['a'].textContent = a; read['b'].textContent = bb;
      read['c'].textContent = r2(Math.sqrt(a * a + bb * bb));
      read['a²'].textContent = a * a; read['b²'].textContent = bb * bb;
      read['a² + b²'].textContent = a * a + bb * bb;
      read['c²'].textContent = a * a + bb * bb;
    }
    slider(row, 'leg a', 40, 110, a, 5, function (v) { a = v; draw(); });
    slider(row, 'leg b', 30, 90, bb, 5, function (v) { bb = v; draw(); });
    draw();
  };

  /* ============ 14. inequality on a number line ============ */
  INT.inequalityLine = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Solutions on the number line',
      'Move the boundary and switch between strict and non-strict.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 400 120', 470);
    var read = readoutBar(body, ['inequality', 'boundary', 'x = 0 works?', 'x = 6 works?']);
    var b = 2, strict = true, dir = 'gt';
    function draw() {
      svg.innerHTML = '';
      var x0 = 30, x1 = 370, cx = function (v) { return x0 + (v + 8) / 16 * (x1 - x0); };
      svg.appendChild(S('line', { x1: x0, y1: 62, x2: x1, y2: 62, stroke: 'currentColor', 'stroke-width': 1.8 }));
      for (var v = -8; v <= 8; v += 2) {
        svg.appendChild(S('line', { x1: r1(cx(v)), y1: 57, x2: r1(cx(v)), y2: 67, stroke: 'var(--faint)', 'stroke-width': 1 }));
        svg.appendChild(S('text', {
          x: r1(cx(v)), y: 84, 'text-anchor': 'middle', 'font-family': 'IBM Plex Mono, monospace',
          'font-size': 10.5, fill: 'var(--muted)'
        }, String(v)));
      }
      var from = dir === 'gt' ? cx(b) : x0, to = dir === 'gt' ? x1 : cx(b);
      svg.appendChild(S('line', { x1: r1(from), y1: 62, x2: r1(to), y2: 62, stroke: 'var(--brand)', 'stroke-width': 6, 'stroke-linecap': 'butt' }));
      svg.appendChild(S('circle', {
        cx: r1(cx(b)), cy: 62, r: 7, fill: strict ? 'var(--paper)' : 'var(--brand)',
        stroke: 'var(--brand)', 'stroke-width': 2.4
      }));
      svg.appendChild(S('text', {
        x: 200, y: 28, 'text-anchor': 'middle', 'font-family': 'Spectral, Georgia, serif',
        'font-size': 16, 'font-style': 'italic', fill: 'var(--brand)'
      }, 'x ' + (dir === 'gt' ? (strict ? '>' : '≥') : (strict ? '<' : '≤')) + ' ' + b));
      var op = dir === 'gt'
        ? function (t) { return strict ? t > b : t >= b; }
        : function (t) { return strict ? t < b : t <= b; };
      read['inequality'].textContent = 'x ' + (dir === 'gt' ? (strict ? '>' : '≥') : (strict ? '<' : '≤')) + ' ' + b;
      read['boundary'].textContent = b + (strict ? ' (open)' : ' (closed)');
      read['x = 0 works?'].textContent = op(0) ? 'yes' : 'no';
      read['x = 6 works?'].textContent = op(6) ? 'yes' : 'no';
    }
    slider(row, 'boundary', -6, 6, b, 1, function (v) { b = v; draw(); });
    var t1 = el('button', { 'class': 'btn sm', type: 'button' }); t1.textContent = 'strict / not strict';
    t1.addEventListener('click', function () { strict = !strict; draw(); });
    var t2 = el('button', { 'class': 'btn sm', type: 'button' }); t2.textContent = 'flip < / >';
    t2.addEventListener('click', function () { dir = dir === 'gt' ? 'lt' : 'gt'; draw(); });
    row.appendChild(t1); row.appendChild(t2);
    draw();
  };

  /* ============ 15. roots and rational exponents ============ */
  INT.rootPower = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'A root is a power',
      'Pick a base and an index — the two notations always give the same number.');
    var row = ctrlRow(body);
    var out = el('div', {}); body.appendChild(out);
    var a = 64, n = 3, mm = 1;
    function render() {
      var root = Math.pow(a, mm / n);
      out.innerHTML =
        '<div class="eq boxed" style="text-align:center">' +
        '<span class="m"><sup>' + n + '</sup>√' + a + (mm > 1 ? '<sup>' + mm + '</sup>' : '') +
        '&nbsp; = &nbsp;' + a + '<sup>' + mm + '/' + n + '</sup>&nbsp; = &nbsp;' +
        '<b style="color:var(--brand)">' + (Math.abs(root - Math.round(root)) < 1e-9 ? Math.round(root) : r2(root)) +
        '</b></span></div>' +
        '<div class="readout">' +
        '<div class="rd">base a <b>' + a + '</b></div>' +
        '<div class="rd">index n <b>' + n + '</b></div>' +
        '<div class="rd">power m <b>' + mm + '</b></div>' +
        '<div class="rd">check: value<sup>' + n + '</sup> <b>' + r2(Math.pow(root, n)) + '</b></div>' +
        '<div class="rd">a<sup>' + mm + '</sup> <b>' + r2(Math.pow(a, mm)) + '</b></div></div>' +
        '<p class="small" style="margin:12px 0 0">Raising the answer to the power ' + n +
        ' gives back a<sup>' + mm + '</sup> — that is exactly what “root of degree ' + n + '” means.</p>';
    }
    slider(row, 'base a', 1, 100, a, 1, function (v) { a = v; render(); });
    slider(row, 'index n', 2, 6, n, 1, function (v) { n = v; render(); });
    slider(row, 'power m', 1, 6, mm, 1, function (v) { mm = v; render(); });
    render();
  };


  /* ============ 16. quadratic — roots and the discriminant ============ */
  INT.quadratic = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Roots and the discriminant',
      'Move a, b and c. Watch D decide how many times the curve meets the x-axis.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 360 280', 460);
    var read = readoutBar(body, ['a', 'b', 'c', 'D = b² − 4ac', 'roots', 'x₁', 'x₂', 'x₁ + x₂', 'x₁ · x₂']);
    var A = 1, B = -2, C = -3;
    function draw() {
      svg.innerHTML = '';
      var cx = 180, cy = 150, u = 20, i;
      for (i = -7; i <= 7; i++) {
        svg.appendChild(S('line', { x1: cx + i * u, y1: 8, x2: cx + i * u, y2: 272, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
        svg.appendChild(S('line', { x1: 8, y1: cy + i * u, x2: 352, y2: cy + i * u, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
      }
      svg.appendChild(S('line', { x1: 8, y1: cy, x2: 352, y2: cy, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      svg.appendChild(S('line', { x1: cx, y1: 8, x2: cx, y2: 272, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      var d = '', on = false;
      for (var x = -8.6; x <= 8.6; x += 0.04) {
        var y = A * x * x + B * x + C;
        if (y < -6.6 || y > 6.6) { on = false; continue; }
        var X = cx + x * u, Y = cy - y * u;
        if (X < 6 || X > 354) { on = false; continue; }
        d += (on ? 'L' : 'M') + r1(X) + ' ' + r1(Y) + ' '; on = true;
      }
      svg.appendChild(S('path', { d: d, fill: 'none', stroke: 'var(--brand)', 'stroke-width': 2.6, 'stroke-linecap': 'round' }));
      var D = B * B - 4 * A * C, r1v = null, r2v = null, n = 0;
      if (D > 0) { n = 2; r1v = (-B - Math.sqrt(D)) / (2 * A); r2v = (-B + Math.sqrt(D)) / (2 * A); }
      else if (D === 0) { n = 1; r1v = r2v = -B / (2 * A); }
      [r1v, r2v].forEach(function (r, k) {
        if (r == null || (k === 1 && n === 1)) return;
        svg.appendChild(S('circle', { cx: r1(cx + r * u), cy: cy, r: 5.5, fill: 'var(--brass)' }));
      });
      var vx = -B / (2 * A), vy = A * vx * vx + B * vx + C;
      if (Math.abs(vy) <= 6.6) svg.appendChild(S('circle', { cx: r1(cx + vx * u), cy: r1(cy - vy * u), r: 4, fill: 'var(--brand)' }));
      read['a'].textContent = A; read['b'].textContent = B; read['c'].textContent = C;
      read['D = b² − 4ac'].textContent = D;
      read['roots'].textContent = n === 2 ? 'two' : n === 1 ? 'one' : 'none';
      read['x₁'].textContent = r1v == null ? '—' : r2(r1v);
      read['x₂'].textContent = r2v == null ? '—' : r2(r2v);
      read['x₁ + x₂'].textContent = n ? r2(-B / A) : '—';
      read['x₁ · x₂'].textContent = n ? r2(C / A) : '—';
    }
    slider(row, 'a', -3, 3, A, 1, function (v) { if (v === 0) v = 1; A = v; draw(); });
    slider(row, 'b', -6, 6, B, 1, function (v) { B = v; draw(); });
    slider(row, 'c', -6, 6, C, 1, function (v) { C = v; draw(); });
    draw();
  };

  /* ============ 17. a point on the coordinate plane ============ */
  INT.coordPlane = function (host, opt) {
    opt = opt || {};
    var body = frame(host, opt.title || 'Two points on the plane',
      'Drag A or B. The distance and the midpoint follow.');
    var svg = stage(body, '0 0 360 300', 460);
    var read = readoutBar(body, ['A', 'B', 'x₂ − x₁', 'y₂ − y₁', 'distance AB', 'midpoint M']);
    var u = 26, cx = 180, cy = 150;
    var P = { A: [-3, -2], B: [3, 2] };
    function sx(v) { return cx + v * u; }
    function sy(v) { return cy - v * u; }
    function draw() {
      svg.innerHTML = '';
      var i;
      for (i = -6; i <= 6; i++) {
        svg.appendChild(S('line', { x1: sx(i), y1: 8, x2: sx(i), y2: 292, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
        svg.appendChild(S('line', { x1: 8, y1: sy(i), x2: 352, y2: sy(i), stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
      }
      svg.appendChild(S('line', { x1: 8, y1: cy, x2: 352, y2: cy, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      svg.appendChild(S('line', { x1: cx, y1: 8, x2: cx, y2: 292, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      var A = P.A, B = P.B;
      svg.appendChild(S('path', {
        d: 'M' + sx(A[0]) + ' ' + sy(A[1]) + ' L' + sx(B[0]) + ' ' + sy(A[1]) + ' L' + sx(B[0]) + ' ' + sy(B[1]),
        fill: 'none', stroke: 'var(--faint)', 'stroke-width': 1.4, 'stroke-dasharray': '5 4'
      }));
      svg.appendChild(S('line', { x1: sx(A[0]), y1: sy(A[1]), x2: sx(B[0]), y2: sy(B[1]), stroke: 'var(--brand)', 'stroke-width': 2.6 }));
      var M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
      svg.appendChild(S('circle', { cx: sx(M[0]), cy: sy(M[1]), r: 4.5, fill: 'var(--brass)' }));
      var handles = [];
      ['A', 'B'].forEach(function (k) {
        var p = P[k];
        var c = S('circle', { cx: sx(p[0]), cy: sy(p[1]), r: 8, fill: 'var(--brand)', 'fill-opacity': .9 });
        svg.appendChild(c);
        svg.appendChild(S('text', {
          x: sx(p[0]) + 15, y: sy(p[1]) - 12, 'font-family': 'Spectral, Georgia, serif',
          'font-size': 14, 'font-style': 'italic', fill: 'currentColor'
        }, k));
        handles.push({ id: k, node: c, get: function () { return [sx(P[k][0]), sy(P[k][1])]; } });
      });
      draggable(svg, handles, function (id, x, y) {
        var gx = Math.max(-6, Math.min(6, Math.round((x - cx) / u)));
        var gy = Math.max(-5, Math.min(5, Math.round((cy - y) / u)));
        P[id] = [gx, gy]; draw();
      });
      var dx = B[0] - A[0], dy = B[1] - A[1];
      read['A'].textContent = '(' + A[0] + ', ' + A[1] + ')';
      read['B'].textContent = '(' + B[0] + ', ' + B[1] + ')';
      read['x₂ − x₁'].textContent = dx;
      read['y₂ − y₁'].textContent = dy;
      read['distance AB'].textContent = r2(Math.hypot(dx, dy));
      read['midpoint M'].textContent = '(' + M[0] + ', ' + M[1] + ')';
    }
    draw();
  };

  /* ============ 18. vectors ============ */
  INT.vectors = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Adding vectors',
      'Drag the tips. The green vector is always a + b.');
    var svg = stage(body, '0 0 360 300', 460);
    var read = readoutBar(body, ['a', 'b', 'a + b', '| a |', '| b |', '| a + b |']);
    var u = 26, cx = 150, cy = 190;
    var V = { a: [3, 2], b: [2, -3] };
    function sx(v) { return cx + v * u; }
    function sy(v) { return cy - v * u; }
    function arrow(x1, y1, x2, y2, col, w) {
      var L = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / L, uy = (y2 - y1) / L;
      svg.appendChild(S('line', { x1: r1(x1), y1: r1(y1), x2: r1(x2), y2: r1(y2), stroke: col, 'stroke-width': w || 2.6 }));
      svg.appendChild(S('path', {
        d: 'M' + r1(x2 - 12 * ux + 5.5 * uy) + ' ' + r1(y2 - 12 * uy - 5.5 * ux) + ' L' + r1(x2) + ' ' + r1(y2) +
          ' L' + r1(x2 - 12 * ux - 5.5 * uy) + ' ' + r1(y2 - 12 * uy + 5.5 * ux),
        fill: 'none', stroke: col, 'stroke-width': w || 2.6, 'stroke-linejoin': 'round'
      }));
    }
    function draw() {
      svg.innerHTML = '';
      var i;
      for (i = -5; i <= 7; i++) svg.appendChild(S('line', { x1: sx(i), y1: 8, x2: sx(i), y2: 292, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
      for (i = -4; i <= 6; i++) svg.appendChild(S('line', { x1: 8, y1: sy(i), x2: 352, y2: sy(i), stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
      svg.appendChild(S('line', { x1: 8, y1: cy, x2: 352, y2: cy, stroke: 'var(--faint)', 'stroke-width': 1.5 }));
      svg.appendChild(S('line', { x1: cx, y1: 8, x2: cx, y2: 292, stroke: 'var(--faint)', 'stroke-width': 1.5 }));
      var a = V.a, b = V.b, sum = [a[0] + b[0], a[1] + b[1]];
      arrow(cx, cy, sx(a[0]), sy(a[1]), 'var(--brand)');
      arrow(sx(a[0]), sy(a[1]), sx(sum[0]), sy(sum[1]), 'var(--brass)');
      arrow(cx, cy, sx(sum[0]), sy(sum[1]), 'var(--easy)', 3);
      var handles = [];
      [['a', a], ['b', sum]].forEach(function (g) {
        var c = S('circle', { cx: sx(g[1][0]), cy: sy(g[1][1]), r: 8, fill: g[0] === 'a' ? 'var(--brand)' : 'var(--brass)', 'fill-opacity': .85 });
        svg.appendChild(c);
        handles.push({ id: g[0], node: c, get: function () { return [sx(g[1][0]), sy(g[1][1])]; } });
      });
      draggable(svg, handles, function (id, x, y) {
        var gx = Math.max(-5, Math.min(7, Math.round((x - cx) / u)));
        var gy = Math.max(-4, Math.min(6, Math.round((cy - y) / u)));
        if (id === 'a') V.a = [gx, gy];
        else V.b = [gx - V.a[0], gy - V.a[1]];
        draw();
      });
      read['a'].textContent = '(' + a[0] + '; ' + a[1] + ')';
      read['b'].textContent = '(' + b[0] + '; ' + b[1] + ')';
      read['a + b'].textContent = '(' + sum[0] + '; ' + sum[1] + ')';
      read['| a |'].textContent = r2(Math.hypot(a[0], a[1]));
      read['| b |'].textContent = r2(Math.hypot(b[0], b[1]));
      read['| a + b |'].textContent = r2(Math.hypot(sum[0], sum[1]));
    }
    draw();
  };

  /* ============ 19. area of a triangle — same base, same height ============ */
  INT.areaModel = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Base and height decide the area',
      'Slide the apex along the top line. The area never changes.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 380 250', 460);
    var read = readoutBar(body, ['base a', 'height h', 'area ½ah', 'perimeter']);
    var base = 220, h = 120, apex = 0.5;
    function draw() {
      svg.innerHTML = '';
      var y0 = 200, x0 = 60;
      var B1 = [x0, y0], B2 = [x0 + base, y0], Ap = [x0 + apex * base, y0 - h];
      svg.appendChild(S('line', { x1: 20, y1: y0 - h, x2: 360, y2: y0 - h, stroke: 'var(--faint)', 'stroke-width': 1.3, 'stroke-dasharray': '5 4' }));
      svg.appendChild(S('polygon', {
        points: [B1, B2, Ap].map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      svg.appendChild(S('line', { x1: r1(Ap[0]), y1: r1(Ap[1]), x2: r1(Ap[0]), y2: y0, stroke: 'var(--brass)', 'stroke-width': 1.6, 'stroke-dasharray': '4 3' }));
      svg.appendChild(S('text', { x: r1(Ap[0]) - 14, y: y0 - h / 2, 'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: 'var(--brass)' }, 'h'));
      svg.appendChild(S('text', { x: x0 + base / 2, y: y0 + 18, 'text-anchor': 'middle', 'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: 'var(--muted)' }, 'a'));
      var c = S('circle', { cx: r1(Ap[0]), cy: r1(Ap[1]), r: 8, fill: 'var(--brand)', 'fill-opacity': .9 });
      svg.appendChild(c);
      draggable(svg, [{ id: 'ap', node: c, get: function () { return Ap; } }], function (id, x) {
        apex = Math.max(-0.35, Math.min(1.35, (x - x0) / base)); draw();
      });
      var s1 = Math.hypot(Ap[0] - B1[0], h), s2 = Math.hypot(B2[0] - Ap[0], h);
      read['base a'].textContent = base;
      read['height h'].textContent = h;
      read['area ½ah'].textContent = base * h / 2;
      read['perimeter'].textContent = r1(base + s1 + s2);
    }
    slider(row, 'base', 120, 280, base, 10, function (v) { base = v; draw(); });
    slider(row, 'height', 50, 150, h, 5, function (v) { h = v; draw(); });
    draw();
  };

  /* ============ 20. circle angles ============ */
  INT.circleAngles = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'The inscribed angle',
      'Drag C round the circle. The inscribed angle stays half the central angle.');
    var svg = stage(body, '0 0 340 300', 440);
    var read = readoutBar(body, ['central ∠AOB', 'inscribed ∠ACB', 'ratio', 'arc AB']);
    var O = [170, 150], R = 112;
    var aA = 200, aB = 340, aC = 70;
    function pt(deg) { return [O[0] + R * Math.cos(deg * Math.PI / 180), O[1] + R * Math.sin(deg * Math.PI / 180)]; }
    function draw() {
      svg.innerHTML = '';
      var A = pt(aA), B = pt(aB), C = pt(aC);
      svg.appendChild(S('circle', { cx: O[0], cy: O[1], r: R, fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }));
      svg.appendChild(S('path', {
        d: 'M' + r1(A[0]) + ' ' + r1(A[1]) + ' A' + R + ' ' + R + ' 0 0 1 ' + r1(B[0]) + ' ' + r1(B[1]),
        fill: 'none', stroke: 'var(--brass)', 'stroke-width': 5
      }));
      [[O, A], [O, B]].forEach(function (g) {
        svg.appendChild(S('line', { x1: g[0][0], y1: g[0][1], x2: r1(g[1][0]), y2: r1(g[1][1]), stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      });
      [[C, A], [C, B]].forEach(function (g) {
        svg.appendChild(S('line', { x1: r1(g[0][0]), y1: r1(g[0][1]), x2: r1(g[1][0]), y2: r1(g[1][1]), stroke: 'var(--brand)', 'stroke-width': 2.2 }));
      });
      [[O, 'O', 'var(--faint)'], [A, 'A', 'currentColor'], [B, 'B', 'currentColor'], [C, 'C', 'var(--brand)']].forEach(function (g) {
        svg.appendChild(S('circle', { cx: r1(g[0][0]), cy: r1(g[0][1]), r: g[1] === 'C' ? 8 : 4.5, fill: g[2] }));
        svg.appendChild(S('text', {
          x: r1(g[0][0] + (g[0][0] > O[0] ? 15 : -15)), y: r1(g[0][1] + (g[0][1] > O[1] ? 16 : -10)),
          'text-anchor': 'middle', 'font-family': 'Spectral, Georgia, serif', 'font-size': 14,
          'font-style': 'italic', fill: g[2]
        }, g[1]));
      });
      var Cnode = svg.querySelectorAll('circle')[svg.querySelectorAll('circle').length - 1];
      var handles = [{ id: 'C', node: svg.querySelectorAll('circle')[4], get: function () { return C; } }];
      draggable(svg, handles, function (id, x, y) {
        aC = Math.atan2(y - O[1], x - O[0]) * 180 / Math.PI;
        var lo = aA, hi = aB;
        var norm = (aC % 360 + 360) % 360;
        if (norm > 195 && norm < 345) aC = norm < 270 ? 195 : 345;   // keep C off the arc AB
        draw();
      });
      var central = 140;
      var ang2 = angleDeg(C, A, B);
      read['central ∠AOB'].textContent = central + '°';
      read['inscribed ∠ACB'].textContent = r1(ang2) + '°';
      read['ratio'].textContent = r2(central / Math.max(ang2, 0.001));
      read['arc AB'].textContent = central + '°';
    }
    draw();
  };

  /* ============ 21. transformations ============ */
  INT.transform = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Move the shape',
      'Choose a transformation and change its amount.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 360 300', 440);
    var read = readoutBar(body, ['transformation', 'lengths', 'angles', 'orientation']);
    var mode = 'translate', amount = 2;
    var u = 26, cx = 180, cy = 150;
    var SHAPE = [[1, 1], [4, 1], [2, 3]];
    function sx(v) { return cx + v * u; } function sy(v) { return cy - v * u; }
    function draw() {
      svg.innerHTML = '';
      var i;
      for (i = -6; i <= 6; i++) {
        svg.appendChild(S('line', { x1: sx(i), y1: 8, x2: sx(i), y2: 292, stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
        svg.appendChild(S('line', { x1: 8, y1: sy(i), x2: 352, y2: sy(i), stroke: 'var(--rule-soft)', 'stroke-width': 1 }));
      }
      svg.appendChild(S('line', { x1: 8, y1: cy, x2: 352, y2: cy, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      svg.appendChild(S('line', { x1: cx, y1: 8, x2: cx, y2: 292, stroke: 'var(--faint)', 'stroke-width': 1.6 }));
      var img = SHAPE.map(function (p) {
        if (mode === 'translate') return [p[0] - amount, p[1] - amount];
        if (mode === 'reflect') return [-p[0], p[1]];
        if (mode === 'rotate') return [-p[1], p[0]];
        return [p[0] * (amount / 2), p[1] * (amount / 2)];
      });
      svg.appendChild(S('polygon', {
        points: SHAPE.map(function (p) { return sx(p[0]) + ',' + sy(p[1]); }).join(' '),
        fill: 'var(--surface-2)', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round'
      }));
      svg.appendChild(S('polygon', {
        points: img.map(function (p) { return r1(sx(p[0])) + ',' + r1(sy(p[1])); }).join(' '),
        fill: 'var(--brand-tint)', stroke: 'var(--brand)', 'stroke-width': 2.2, 'stroke-linejoin': 'round'
      }));
      var names = { translate: 'translation', reflect: 'reflection in the y-axis', rotate: 'rotation 90° about O', enlarge: 'enlargement' };
      read['transformation'].textContent = names[mode];
      read['lengths'].textContent = mode === 'enlarge' ? '× ' + r2(amount / 2) : 'unchanged';
      read['angles'].textContent = 'unchanged';
      read['orientation'].textContent = mode === 'reflect' ? 'reversed' : 'kept';
    }
    ['translate', 'reflect', 'rotate', 'enlarge'].forEach(function (mname) {
      var b = el('button', { 'class': 'btn sm', type: 'button' });
      b.textContent = mname;
      b.addEventListener('click', function () { mode = mname; draw(); });
      row.appendChild(b);
    });
    slider(row, 'amount', 1, 4, amount, 1, function (v) { amount = v; draw(); });
    draw();
  };

  /* ============ 22. averages of a small data set ============ */
  INT.averages = function (host, opt) {
    var body = frame(host, (opt && opt.title) || 'Mean, median and mode',
      'Change a value and watch which average moves.');
    var row = ctrlRow(body);
    var svg = stage(body, '0 0 380 220', 460);
    var read = readoutBar(body, ['values', 'mean', 'median', 'mode', 'range']);
    var data = [3, 5, 5, 6, 8, 9, 12];
    var idx = 6;
    function draw() {
      svg.innerHTML = '';
      var x0 = 34, y0 = 170, w = 40, u = 11;
      data.forEach(function (v, i) {
        svg.appendChild(S('rect', {
          x: x0 + i * w, y: y0 - v * u, width: w - 8, height: v * u, rx: 2,
          fill: i === idx ? 'var(--brass)' : 'var(--brand-tint)', stroke: 'currentColor', 'stroke-width': 1.4
        }));
        svg.appendChild(S('text', {
          x: x0 + i * w + (w - 8) / 2, y: y0 + 16, 'text-anchor': 'middle',
          'font-family': 'IBM Plex Mono, monospace', 'font-size': 11, fill: 'var(--muted)'
        }, String(v)));
      });
      svg.appendChild(S('line', { x1: 20, y1: y0, x2: 360, y2: y0, stroke: 'currentColor', 'stroke-width': 1.6 }));
      var sorted = data.slice().sort(function (a, b) { return a - b; });
      var mean = data.reduce(function (s2, v) { return s2 + v; }, 0) / data.length;
      var median = sorted[(sorted.length - 1) / 2];
      var counts = {}, mode = sorted[0], best = 0;
      sorted.forEach(function (v) { counts[v] = (counts[v] || 0) + 1; if (counts[v] > best) { best = counts[v]; mode = v; } });
      svg.appendChild(S('line', { x1: 20, y1: r1(y0 - mean * u), x2: 360, y2: r1(y0 - mean * u), stroke: 'var(--easy)', 'stroke-width': 1.8, 'stroke-dasharray': '6 4' }));
      svg.appendChild(S('text', { x: 356, y: r1(y0 - mean * u) - 6, 'text-anchor': 'end', 'font-family': 'IBM Plex Mono, monospace', 'font-size': 10.5, fill: 'var(--easy)' }, 'mean'));
      read['values'].textContent = sorted.join(', ');
      read['mean'].textContent = r2(mean);
      read['median'].textContent = median;
      read['mode'].textContent = best > 1 ? mode : 'none';
      read['range'].textContent = sorted[sorted.length - 1] - sorted[0];
    }
    slider(row, 'which value', 1, 7, idx + 1, 1, function (v) { idx = v - 1; draw(); });
    slider(row, 'set it to', 1, 14, data[idx], 1, function (v) { data[idx] = v; draw(); });
    draw();
  };

  /* ---------- mount ---------- */
  INT.mount = function (host, spec) {
    var fn = INT[spec.type];
    if (!fn) { host.innerHTML = '<p class="small">Unknown model: ' + spec.type + '</p>'; return; }
    try { fn(host, spec); }
    catch (e) { host.innerHTML = '<p class="small">This model could not start: ' + e.message + '</p>'; }
  };

  w.INT = INT;
})(window, document);
