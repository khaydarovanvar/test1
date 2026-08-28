/* Static SVG figures. Every figure themes itself through currentColor and CSS variables. */
(function (w) {
  'use strict';

  var S = {
    main: 'fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"',
    aux: 'fill="none" stroke="var(--faint)" stroke-width="1.4" stroke-dasharray="5 4"',
    arc: 'fill="none" stroke="var(--brand)" stroke-width="1.8"',
    arc2: 'fill="none" stroke="var(--brass)" stroke-width="1.8"',
    tick: 'stroke="var(--brass)" stroke-width="2" stroke-linecap="round"',
    tick2: 'stroke="var(--brand)" stroke-width="2" stroke-linecap="round"',
    fill: 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"'
  };

  function svg(vb, body, cls) {
    return '<svg viewBox="' + vb + '" class="' + (cls || '') + '" ' +
      'xmlns="http://www.w3.org/2000/svg" role="img">' + body + '</svg>';
  }
  // point label
  function L(x, y, t, color) {
    return '<text x="' + x + '" y="' + y + '" font-family="Spectral,Georgia,serif" font-size="14" ' +
      'font-style="italic" fill="' + (color || 'currentColor') + '" text-anchor="middle" ' +
      'dominant-baseline="middle">' + t + '</text>';
  }
  function LT(x, y, t, color, size) { // upright label (numbers, degrees)
    return '<text x="' + x + '" y="' + y + '" font-family="IBM Plex Mono,monospace" font-size="' +
      (size || 11.5) + '" fill="' + (color || 'var(--muted)') + '" text-anchor="middle" ' +
      'dominant-baseline="middle">' + t + '</text>';
  }
  function dot(x, y, c) {
    return '<circle cx="' + x + '" cy="' + y + '" r="3.2" fill="' + (c || 'currentColor') + '"/>';
  }
  function poly(pts, style) {
    return '<polygon points="' + pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ') + '" ' +
      (style || S.fill) + '/>';
  }
  function line(a, b, style) {
    return '<line x1="' + a[0] + '" y1="' + a[1] + '" x2="' + b[0] + '" y2="' + b[1] + '" ' +
      (style || S.main) + '/>';
  }
  // n tick marks across the middle of segment ab, perpendicular to it
  function ticks(a, b, n, style) {
    var dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy);
    var ux = dx / len, uy = dy / len, px = -uy, py = ux, mid = 0.5, out = '', gap = 4.5, h = 5.5;
    for (var i = 0; i < n; i++) {
      var t = mid + (i - (n - 1) / 2) * (gap / len);
      var cx = a[0] + dx * t, cy = a[1] + dy * t;
      out += '<line x1="' + (cx - px * h) + '" y1="' + (cy - py * h) + '" x2="' + (cx + px * h) +
        '" y2="' + (cy + py * h) + '" ' + (style || S.tick) + '/>';
    }
    return out;
  }
  // angle arc at vertex v between rays to p and q
  function ang(v, p, q, r, style, nArc) {
    var a1 = Math.atan2(p[1] - v[1], p[0] - v[0]), a2 = Math.atan2(q[1] - v[1], q[0] - v[0]);
    var d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    var out = '';
    for (var i = 0; i < (nArc || 1); i++) {
      var rr = r + i * 4.5;
      var s = [v[0] + rr * Math.cos(a1), v[1] + rr * Math.sin(a1)];
      var e = [v[0] + rr * Math.cos(a1 + d), v[1] + rr * Math.sin(a1 + d)];
      out += '<path d="M' + s[0].toFixed(1) + ' ' + s[1].toFixed(1) + ' A' + rr + ' ' + rr +
        ' 0 0 ' + (d > 0 ? 1 : 0) + ' ' + e[0].toFixed(1) + ' ' + e[1].toFixed(1) + '" ' +
        (style || S.arc) + '/>';
    }
    return out;
  }
  // right-angle square at vertex v between rays to p and q
  function right(v, p, q, r) {
    r = r || 12;
    var u1 = norm(v, p), u2 = norm(v, q);
    var a = [v[0] + u1[0] * r, v[1] + u1[1] * r];
    var c = [v[0] + u2[0] * r, v[1] + u2[1] * r];
    var b = [a[0] + u2[0] * r, a[1] + u2[1] * r];
    return '<path d="M' + a[0].toFixed(1) + ' ' + a[1].toFixed(1) + ' L' + b[0].toFixed(1) + ' ' +
      b[1].toFixed(1) + ' L' + c[0].toFixed(1) + ' ' + c[1].toFixed(1) + '" ' + S.arc + '/>';
  }
  function norm(a, b) {
    var dx = b[0] - a[0], dy = b[1] - a[1], l = Math.hypot(dx, dy);
    return [dx / l, dy / l];
  }
  // label placed just outside vertex v, away from the polygon centroid
  function vlabel(v, centroid, t, d) {
    var u = norm(centroid, v);
    return L(v[0] + u[0] * (d || 15), v[1] + u[1] * (d || 15), t);
  }
  function cent(pts) {
    var x = 0, y = 0; pts.forEach(function (p) { x += p[0]; y += p[1]; });
    return [x / pts.length, y / pts.length];
  }
  function mid(a, b) { return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }

  var F = {};

  /* ---------- polygons ---------- */
  F.convex = function () {
    var p = [[100, 22], [172, 74], [145, 142], [55, 142], [28, 74]], c = cent(p);
    return svg('0 0 200 165', poly(p) +
      p.map(function (v, i) { return dot(v[0], v[1]) + vlabel(v, c, 'A' + (i + 1)); }).join('') +
      LT(100, 158, 'convex', 'var(--easy)', 12));
  };
  F.nonconvex = function () {
    var p = [[100, 22], [172, 74], [145, 142], [100, 92], [55, 142], [28, 74]], c = [100, 82];
    return svg('0 0 200 165',
      poly(p, 'fill="var(--hard-tint)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"') +
      ang([100, 92], [55, 142], [145, 142], 16,
        'fill="none" stroke="var(--hard)" stroke-width="1.8"') +
      p.map(function (v) { return dot(v[0], v[1]); }).join('') +
      LT(100, 70, 'reflex', 'var(--hard)', 11) +
      LT(100, 158, 'not convex', 'var(--hard)', 12));
  };
  F.angleSum = function () {
    var p = [[110, 14], [170, 48], [170, 116], [110, 150], [50, 116], [50, 48]], c = cent(p);
    var d = '';
    [2, 3, 4].forEach(function (i) { d += line(p[0], p[i], S.aux); });
    var tri = [[110, 60], [150, 82], [110, 108], [70, 82]];
    return svg('-14 -16 244 210', poly(p) + d +
      LT(120, 47, '1') + LT(143, 78, '2') + LT(120, 113, '3') + LT(84, 88, '4') +
      p.map(function (v, i) { return dot(v[0], v[1]) + vlabel(v, c, 'A' + (i + 1), 14); }).join('') +
      LT(110, 186, 'n − 2 triangles', 'var(--brand)', 12.5));
  };
  F.exteriorAngles = function () {
    var p = [[110, 24], [176, 72], [151, 148], [69, 148], [44, 72]], c = cent(p);
    var out = poly(p), i, a, b, ext;
    for (i = 0; i < 5; i++) {
      a = p[i]; b = p[(i + 1) % 5];
      var u = norm(a, b);
      ext = [b[0] + u[0] * 34, b[1] + u[1] * 34];
      out += line(b, ext, S.aux);
      out += ang(b, ext, p[(i + 2) % 5], 13, S.arc2);
    }
    return svg('-24 -22 268 216', out +
      p.map(function (v) { return dot(v[0], v[1]); }).join('') +
      LT(110, 182, 'sum = 360°', 'var(--brass)', 12.5));
  };

  /* ---------- quadrilaterals ---------- */
  var PG = { A: [32, 138], B: [162, 138], C: [202, 48], D: [72, 48] };
  F.parallelogram = function () {
    var A = PG.A, B = PG.B, C = PG.C, D = PG.D, c = cent([A, B, C, D]);
    return svg('0 0 240 170', poly([A, B, C, D]) +
      ticks(A, B, 1) + ticks(D, C, 1) + ticks(A, D, 2, S.tick2) + ticks(B, C, 2, S.tick2) +
      ang(A, B, D, 20, S.arc) + ang(C, D, B, 20, S.arc) +
      ang(B, C, A, 20, S.arc2, 2) + ang(D, A, C, 20, S.arc2, 2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D'));
  };
  F.pgramDiagonals = function () {
    var A = PG.A, B = PG.B, C = PG.C, D = PG.D, c = cent([A, B, C, D]);
    var O = mid(A, C);
    return svg('0 0 240 170', poly([A, B, C, D]) +
      line(A, C, 'fill="none" stroke="var(--brand)" stroke-width="1.7"') +
      line(B, D, 'fill="none" stroke="var(--brass)" stroke-width="1.7"') +
      ticks(A, O, 1, S.tick2) + ticks(O, C, 1, S.tick2) +
      ticks(B, O, 2) + ticks(O, D, 2) +
      dot(O[0], O[1], 'var(--brand)') + L(O[0] + 13, O[1] + 12, 'O', 'var(--brand)') +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D'));
  };
  F.rectangle = function () {
    var A = [40, 145], B = [200, 145], C = [200, 50], D = [40, 50], c = cent([A, B, C, D]);
    return svg('0 0 245 175', poly([A, B, C, D]) +
      right(A, B, D) + right(B, C, A) + right(C, D, B) + right(D, A, C) +
      line(A, C, 'fill="none" stroke="var(--brass)" stroke-width="1.7"') +
      line(B, D, 'fill="none" stroke="var(--brass)" stroke-width="1.7"') +
      ticks(A, C, 1) + ticks(B, D, 1) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      LT(122, 168, 'AC = BD', 'var(--brass)', 12));
  };
  F.rhombus = function () {
    var A = [36, 95], B = [122, 152], C = [208, 95], D = [122, 38], c = [122, 95];
    return svg('0 0 250 194', poly([A, B, C, D]) +
      ticks(A, B, 1) + ticks(B, C, 1) + ticks(C, D, 1) + ticks(D, A, 1) +
      line(A, C, 'fill="none" stroke="var(--brand)" stroke-width="1.6"') +
      line(B, D, 'fill="none" stroke="var(--brand)" stroke-width="1.6"') +
      right(c, C, D, 11) +
      ang(A, B, C, 26, S.arc2, 2) + ang(C, D, A, 26, S.arc2, 2) +
      dot(c[0], c[1], 'var(--brand)') + L(c[0] + 12, c[1] + 13, 'O', 'var(--brand)') +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      LT(122, 186, 'AC ⊥ BD', 'var(--brand)', 12.5));
  };
  F.square = function () {
    var A = [62, 152], B = [182, 152], C = [182, 32], D = [62, 32], c = cent([A, B, C, D]);
    var O = mid(A, C);
    return svg('0 0 245 194', poly([A, B, C, D]) +
      ticks(A, B, 1) + ticks(B, C, 1) + ticks(C, D, 1) + ticks(D, A, 1) +
      right(A, B, D) + right(B, C, A) + right(C, D, B) + right(D, A, C) +
      line(A, C, 'fill="none" stroke="var(--brand)" stroke-width="1.6"') +
      line(B, D, 'fill="none" stroke="var(--brand)" stroke-width="1.6"') +
      right(O, C, D, 10) + dot(O[0], O[1], 'var(--brand)') +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      LT(122, 186, 'rectangle + rhombus', 'var(--brand)', 12));
  };
  F.trapezium = function () {
    var A = [30, 145], D = [235, 145], B = [88, 50], C = [188, 50], c = cent([A, B, C, D]);
    var H = [88, 145];
    return svg('0 0 265 180', poly([A, B, C, D]) +
      line(B, H, S.aux) + right(H, B, D, 11) +
      ang(A, B, D, 20, S.arc) + ang(B, A, C, 20, S.arc2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      LT(138, 38, 'b', 'var(--muted)', 12.5) +
      LT(132, 163, 'a', 'var(--muted)', 12.5) +
      LT(78, 100, 'h', 'var(--faint)', 12.5) +
      LT(48, 96, 'leg', 'var(--muted)', 10) + LT(224, 96, 'leg', 'var(--muted)', 10));
  };
  F.isosTrapezium = function () {
    var A = [36, 146], D = [224, 146], B = [82, 50], C = [178, 50], c = cent([A, B, C, D]);
    return svg('0 0 258 180', poly([A, B, C, D]) +
      ticks(A, B, 1) + ticks(D, C, 1) +
      line(A, C, 'fill="none" stroke="var(--brand)" stroke-width="1.5"') +
      line(B, D, 'fill="none" stroke="var(--brand)" stroke-width="1.5"') +
      ticks(A, C, 2, S.tick2) + ticks(B, D, 2, S.tick2) +
      ang(A, B, D, 22, S.arc2) + ang(D, C, A, 22, S.arc2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      LT(130, 172, 'AB = CD · ∠A = ∠D · AC = BD', 'var(--muted)', 11));
  };
  F.quadFamily = function () {
    function box(x, y, w, t, cl) {
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="34" rx="5" ' +
        'fill="' + (cl || 'var(--surface-2)') + '" stroke="currentColor" stroke-width="1.5"/>' +
        '<text x="' + (x + w / 2) + '" y="' + (y + 21) + '" font-family="Work Sans,sans-serif" ' +
        'font-size="12.5" fill="currentColor" text-anchor="middle">' + t + '</text>';
    }
    function arrow(x1, y1, x2, y2) {
      return '<path d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '" fill="none" ' +
        'stroke="var(--faint)" stroke-width="1.5"/>';
    }
    return svg('0 0 420 250',
      box(140, 6, 140, 'Quadrilateral') +
      arrow(180, 40, 90, 70) + arrow(240, 40, 330, 70) +
      box(20, 70, 140, 'Trapezium') + box(260, 70, 140, 'Parallelogram') +
      arrow(90, 104, 90, 134) + arrow(300, 104, 220, 134) + arrow(340, 104, 370, 134) +
      box(20, 134, 140, 'Isosceles trapezium') +
      box(150, 134, 140, 'Rectangle') + box(300, 134, 110, 'Rhombus') +
      arrow(220, 168, 250, 198) + arrow(355, 168, 280, 198) +
      box(190, 198, 140, 'Square', 'var(--brand-tint)'));
  };

  /* ---------- Thales & midlines ---------- */
  F.thales = function () {
    var O = [28, 158];
    var r1 = [1, 0], r2 = [0.86, -0.51];
    var P = function (u, t) { return [O[0] + u[0] * t, O[1] + u[1] * t]; };
    var out = line(O, P(r1, 250), S.main) + line(O, P(r2, 250), S.main);
    var ts = [78, 156, 234], i;
    for (i = 0; i < 3; i++) {
      var a = P(r1, ts[i]), b = P(r2, ts[i]);
      out += line(a, b, 'fill="none" stroke="var(--brand)" stroke-width="1.8"');
      out += dot(a[0], a[1]) + dot(b[0], b[1]);
      out += L(a[0], a[1] + 17, 'A' + (i + 1)) + L(b[0] - 16, b[1] - 4, 'B' + (i + 1));
    }
    for (i = 0; i < 3; i++) {
      var s1 = i === 0 ? O : P(r1, ts[i - 1]), e1 = P(r1, ts[i]);
      var s2 = i === 0 ? O : P(r2, ts[i - 1]), e2 = P(r2, ts[i]);
      out += ticks(s1, e1, 1) + ticks(s2, e2, 1);
    }
    return svg('-12 -14 344 208', out + dot(O[0], O[1]) + L(O[0] - 13, O[1] + 10, 'O'));
  };
  F.midlineTriangle = function () {
    var A = [132, 26], B = [32, 152], C = [232, 152];
    var M = mid(A, B), N = mid(A, C), c = cent([A, B, C]);
    return svg('0 0 268 182', poly([A, B, C]) +
      line(M, N, 'fill="none" stroke="var(--brand)" stroke-width="2.4"') +
      ticks(A, M, 1) + ticks(M, B, 1) + ticks(A, N, 2) + ticks(N, C, 2) +
      dot(M[0], M[1], 'var(--brand)') + dot(N[0], N[1], 'var(--brand)') +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') +
      L(M[0] - 16, M[1], 'M', 'var(--brand)') + L(N[0] + 16, N[1], 'N', 'var(--brand)') +
      LT(132, 174, 'MN ∥ BC  and  MN = ½·BC', 'var(--brand)', 12));
  };
  F.midlineTrapezium = function () {
    var A = [30, 152], D = [240, 152], B = [86, 52], C = [186, 52];
    var M = mid(A, B), N = mid(D, C), c = cent([A, B, C, D]);
    return svg('0 0 272 184', poly([A, B, C, D]) +
      line(M, N, 'fill="none" stroke="var(--brand)" stroke-width="2.4"') +
      ticks(A, M, 1) + ticks(M, B, 1) + ticks(D, N, 2) + ticks(N, C, 2) +
      dot(M[0], M[1], 'var(--brand)') + dot(N[0], N[1], 'var(--brand)') +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      L(M[0] - 16, M[1], 'M', 'var(--brand)') + L(N[0] + 16, N[1], 'N', 'var(--brand)') +
      LT(136, 44, 'b', 'var(--muted)') + LT(136, 166, 'a', 'var(--muted)') +
      LT(136, 116, 'MN = (a + b) / 2', 'var(--brand)', 12));
  };

  /* ---------- algebra figures ---------- */
  F.hyperbola = function (k) {
    k = k || 6;
    var W = 300, H = 240, cx = 150, cy = 120, u = 22;   // unit = 22px
    var g = '', i;
    for (i = -6; i <= 6; i++) {
      g += line([cx + i * u, 6], [cx + i * u, H - 6],
        'stroke="var(--rule-soft)" stroke-width="1"');
      g += line([12, cy + i * u], [W - 12, cy + i * u],
        'stroke="var(--rule-soft)" stroke-width="1"');
    }
    var ax = line([12, cy], [W - 12, cy], 'stroke="var(--faint)" stroke-width="1.5"') +
      line([cx, 6], [cx, H - 6], 'stroke="var(--faint)" stroke-width="1.5"') +
      LT(W - 16, cy - 12, 'x') + LT(cx + 14, 14, 'y');
    function branch(sign) {
      var d = '', started = false;
      for (var x = 0.28; x <= 6.4; x += 0.06) {
        var y = k / x;
        if (Math.abs(y) > 6.2) continue;
        var px = cx + sign * x * u, py = cy - sign * y * u;
        d += (started ? 'L' : 'M') + px.toFixed(1) + ' ' + py.toFixed(1) + ' ';
        started = true;
      }
      return '<path d="' + d + '" fill="none" stroke="var(--brand)" stroke-width="2.4" ' +
        'stroke-linecap="round"/>';
    }
    return svg('0 0 ' + W + ' ' + H, g + ax + branch(1) + branch(-1) +
      '<text x="' + (W - 20) + '" y="30" font-family="Spectral,Georgia,serif" font-size="14" ' +
      'font-style="italic" fill="var(--brand)" text-anchor="end">y = ' + k + '/x</text>');
  };
  F.numberLineExcluded = function () {
    var W = 320, y = 40;
    var out = line([16, y], [W - 16, y], 'stroke="currentColor" stroke-width="1.8"');
    out += '<path d="M' + (W - 22) + ' ' + (y - 5) + ' L' + (W - 14) + ' ' + y + ' L' +
      (W - 22) + ' ' + (y + 5) + '" fill="none" stroke="currentColor" stroke-width="1.8"/>';
    [[96, '−3'], [224, '3']].forEach(function (p) {
      out += '<circle cx="' + p[0] + '" cy="' + y + '" r="5.5" fill="var(--paper)" ' +
        'stroke="var(--hard)" stroke-width="2.2"/>' + LT(p[0], y + 20, p[1]);
    });
    out += LT(160, y - 18, 'x ≠ ±3', 'var(--hard)', 12.5);
    return svg('0 0 ' + W + ' 70', out);
  };


  /* ---------- triangle & angle revision ---------- */
  F.triangleAngleSum = function () {
    var A = [128, 26], B = [30, 150], C = [226, 150], c = cent([A, B, C]);
    var L1 = [A[0] - 92, A[1]], L2 = [A[0] + 92, A[1]];
    return svg('0 0 264 186', poly([A, B, C]) +
      line(L1, L2, S.aux) +
      ang(A, L1, B, 20, S.arc2) + ang(A, C, L2, 20, 'fill="none" stroke="var(--hard)" stroke-width="1.8"') +
      ang(A, B, C, 27, S.arc) +
      ang(B, A, C, 22, S.arc2) + ang(C, B, A, 22, 'fill="none" stroke="var(--hard)" stroke-width="1.8"') +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) +
      vlabel(A, c, 'A', 22) + vlabel(B, c, 'B') + vlabel(C, c, 'C') +
      LT(132, 176, 'the three angles fill 180°', 'var(--brand)', 12));
  };
  F.isoscelesTriangle = function () {
    var A = [120, 24], B = [36, 152], C = [204, 152], c = cent([A, B, C]);
    var M = mid(B, C);
    return svg('0 0 240 196', poly([A, B, C]) +
      line(A, M, S.aux) + right(M, A, C, 11) +
      ticks(A, B, 1) + ticks(A, C, 1) +
      ticks(B, M, 2, S.tick2) + ticks(M, C, 2, S.tick2) +
      ang(B, A, C, 24, S.arc) + ang(C, B, A, 24, S.arc) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(M[0], M[1], 'var(--faint)') +
      vlabel(A, c, 'A', 18) + vlabel(B, c, 'B') + vlabel(C, c, 'C') + L(M[0] - 15, M[1] + 17, 'M') +
      LT(120, 188, 'AB = AC ⟹ ∠B = ∠C', 'var(--brand)', 12));
  };
  F.parallelLines = function () {
    var y1 = 52, y2 = 128;
    var out = line([16, y1], [280, y1], S.main) + line([16, y2], [280, y2], S.main);
    var t1 = [70, 168], t2 = [226, 12];
    out += line(t1, t2, 'fill="none" stroke="var(--brass)" stroke-width="2"');
    function X(y) { var t = (y - t1[1]) / (t2[1] - t1[1]); return [t1[0] + t * (t2[0] - t1[0]), y]; }
    var P = X(y1), Q = X(y2);
    out += ang(P, [280, y1], t2, 17, S.arc) + ang(Q, [280, y2], t2, 17, S.arc);
    out += ang(P, [16, y1], t1, 17, 'fill="none" stroke="var(--hard)" stroke-width="1.8"');
    out += ang(Q, [280, y2], t1, 17, 'fill="none" stroke="var(--hard)" stroke-width="1.8"');
    out += dot(P[0], P[1]) + dot(Q[0], Q[1]);
    return svg('0 0 296 186', out +
      LT(34, y1 - 14, 'a', 'var(--muted)', 12.5) + LT(34, y2 + 18, 'b', 'var(--muted)', 12.5) +
      LT(148, 176, 'a ∥ b', 'var(--brand)', 12.5));
  };
  F.congruence = function () {
    function tri(ox) {
      var A = [ox + 60, 26], B = [ox + 12, 118], C = [ox + 108, 118];
      return { pts: [A, B, C], svg: poly([A, B, C]) + ticks(A, B, 1) + ticks(B, C, 2, S.tick2) +
        ang(B, A, C, 18, S.arc) };
    }
    var t1 = tri(6), t2 = tri(150);
    return svg('0 0 270 152', t1.svg + t2.svg +
      LT(66, 140, '△ABC', 'var(--muted)') + LT(210, 140, '△A₁B₁C₁', 'var(--muted)') +
      LT(133, 70, '≅', 'var(--brand)', 18));
  };
  F.bisectorConstruction = function () {
    var O = [40, 155], A = [120, 155], B = [101.3, 103.6], K = [162, 110.5];
    var out = line(O, [258, 155], S.main) + line(O, [208, 13], S.main);
    out += '<path d="M120 155 A80 80 0 0 0 101.3 103.6" ' + S.aux + '/>';
    out += '<path d="M139.2 97.1 A61 61 0 0 1 176.7 132.5" ' + S.aux + '/>';
    out += '<path d="M159.2 84.3 A61 61 0 0 1 153.3 135.5" ' + S.aux + '/>';
    out += line(O, [205, 95], 'fill="none" stroke="var(--brand)" stroke-width="2.3"');
    out += ang(O, A, K, 34, S.arc2) + ang(O, K, [208, 13], 34, S.arc2);
    out += dot(O[0], O[1]) + dot(A[0], A[1], 'var(--faint)') + dot(B[0], B[1], 'var(--faint)') +
      dot(K[0], K[1], 'var(--brand)');
    return svg('0 0 276 190', out + L(30, 163, 'O') + L(120, 174, 'A') + L(86, 94, 'B') +
      L(176, 104, 'K', 'var(--brand)'));
  };
  F.perpBisector = function () {
    var A = [58, 120], B = [222, 120], M = [140, 120], P = [140, 56], Q = [140, 184];
    var out = line([26, 120], [254, 120], S.main);
    out += '<path d="M117.7 34.8 A104 104 0 0 1 117.7 205.2" ' + S.aux + '/>';
    out += '<path d="M162.3 205.2 A104 104 0 0 1 162.3 34.8" ' + S.aux + '/>';
    out += line([140, 26], [140, 214], 'fill="none" stroke="var(--brand)" stroke-width="2.3"');
    out += right(M, B, P, 11) + ticks(A, M, 1) + ticks(M, B, 1);
    out += dot(A[0], A[1]) + dot(B[0], B[1]) + dot(M[0], M[1], 'var(--brand)') +
      dot(P[0], P[1], 'var(--faint)') + dot(Q[0], Q[1], 'var(--faint)');
    return svg('0 0 280 232', out + L(A[0] - 14, A[1] + 4, 'A') + L(B[0] + 15, B[1] + 4, 'B') +
      L(M[0] - 15, M[1] + 17, 'M', 'var(--brand)') + L(P[0] + 14, P[1], 'P') + L(Q[0] + 14, Q[1], 'Q'));
  };
  F.quadAngleSum = function () {
    var A = [34, 148], B = [92, 34], C = [214, 52], D = [246, 146], c = cent([A, B, C, D]);
    return svg('0 0 280 182', poly([A, B, C, D]) + line(A, C, S.aux) +
      ang(A, B, D, 22, S.arc) + ang(B, A, C, 22, S.arc2) +
      ang(C, B, D, 22, 'fill="none" stroke="var(--hard)" stroke-width="1.8"') +
      ang(D, C, A, 22, S.arc2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') + vlabel(D, c, 'D') +
      LT(140, 174, '2 × 180° = 360°', 'var(--brand)', 12.5));
  };

  w.FIG = F;
  w.FIGH = { svg: svg, L: L, LT: LT, dot: dot, poly: poly, line: line, ticks: ticks, ang: ang, right: right, mid: mid, cent: cent, norm: norm, S: S };
})(window);
