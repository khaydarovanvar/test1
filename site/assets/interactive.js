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

  /* ---------- mount ---------- */
  INT.mount = function (host, spec) {
    var fn = INT[spec.type];
    if (!fn) { host.innerHTML = '<p class="small">Unknown model: ' + spec.type + '</p>'; return; }
    try { fn(host, spec); }
    catch (e) { host.innerHTML = '<p class="small">This model could not start: ' + e.message + '</p>'; }
  };

  w.INT = INT;
})(window, document);
