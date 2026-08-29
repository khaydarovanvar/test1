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


  /* ---------- Quarter II: right triangles, Pythagoras, trigonometry ---------- */
  var RT = { C: [56, 156], A: [56, 46], B: [226, 156] };
  F.rightTriangle = function () {
    var C = RT.C, A = RT.A, B = RT.B, c = cent([A, B, C]);
    return svg('0 0 268 194', poly([A, B, C]) + right(C, B, A, 14) +
      ang(A, B, C, 26, S.arc) + ang(B, A, C, 26, S.arc2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') +
      LT(140, 172, 'a', 'var(--muted)', 13) +
      LT(40, 100, 'b', 'var(--muted)', 13) +
      LT(155, 92, 'c', 'var(--brand)', 13) +
      LT(84, 62, 'α', 'var(--brass)', 12) + LT(206, 143, 'β', 'var(--brand)', 12) +
      LT(134, 188, 'legs a, b · hypotenuse c', 'var(--muted)', 10.5));
  };
  F.trigRatios = function () {
    var C = RT.C, A = RT.A, B = RT.B, c = cent([A, B, C]);
    return svg('0 0 340 194',
      poly([A, B, C]) + right(C, B, A, 14) + ang(B, A, C, 26, S.arc2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') +
      LT(140, 172, 'a  opposite', 'var(--muted)', 10.5) +
      LT(30, 100, 'b', 'var(--muted)', 12) + LT(30, 116, 'adj.', 'var(--muted)', 9) +
      LT(158, 92, 'c  hyp.', 'var(--brand)', 10.5) +
      LT(206, 143, 'β', 'var(--brand)', 12) + LT(84, 62, 'α', 'var(--brass)', 12) +
      LT(300, 58, 'sin α = a/c', 'var(--brand)', 11) +
      LT(300, 82, 'cos α = b/c', 'var(--brand)', 11) +
      LT(300, 106, 'tan α = a/b', 'var(--brass)', 11) +
      LT(300, 130, 'cot α = b/a', 'var(--brass)', 11));
  };
  F.pythagorasSquares = function () {
    var C = [120, 180], A = [120, 120], B = [200, 180];
    var sq = 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"';
    var sqB = 'fill="var(--brass-tint)" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"';
    return svg('44 26 246 254',
      poly([[120, 180], [200, 180], [200, 260], [120, 260]], sq) +
      poly([[120, 180], [120, 120], [60, 120], [60, 180]], sq) +
      poly([[120, 120], [200, 180], [260, 100], [180, 40]], sqB) +
      poly([A, B, C], 'fill="var(--surface)" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"') +
      right(C, B, A, 12) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) +
      L(112, 112, 'A') + L(206, 192, 'B') + L(110, 192, 'C') +
      LT(160, 226, 'a²', 'var(--brand)', 13) + LT(90, 152, 'b²', 'var(--brand)', 13) +
      LT(190, 110, 'c²', 'var(--brass)', 13) +
      LT(167, 274, 'a² + b² = c²', 'var(--brand)', 12));
  };
  F.pythagorasProof = function () {
    var O = [40, 40], S2 = 200;
    var P = [[160, 40], [240, 160], [120, 240], [40, 120]];
    var tri = 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="1.5"';
    return svg('20 20 250 256',
      '<rect x="40" y="40" width="200" height="200" fill="none" stroke="currentColor" stroke-width="2"/>' +
      poly([[40, 40], [160, 40], [40, 120]], tri) +
      poly([[160, 40], [240, 40], [240, 160]], tri) +
      poly([[240, 160], [240, 240], [120, 240]], tri) +
      poly([[120, 240], [40, 240], [40, 120]], tri) +
      poly(P, 'fill="var(--brass-tint)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"') +
      LT(100, 32, 'a', 'var(--muted)', 11) + LT(206, 32, 'b', 'var(--muted)', 11) +
      LT(190, 148, 'c', 'var(--brass)', 12) +
      LT(140, 266, '(a + b)² = 4 · ½ab + c²', 'var(--brand)', 11.5));
  };
  F.specialAngles = function () {
    var t1 = poly([[30, 150], [140, 150], [140, 40]]) + right([140, 150], [30, 150], [140, 40], 12) +
      ang([30, 150], [140, 150], [140, 40], 30, S.arc2) +
      ang([140, 40], [140, 150], [30, 150], 22, S.arc2) +
      LT(85, 167, '1', 'var(--muted)', 12) + LT(155, 96, '1', 'var(--muted)', 12) +
      LT(72, 88, '√2', 'var(--brand)', 12) +
      LT(64, 141, '45°', 'var(--brass)', 10) + LT(125, 70, '45°', 'var(--brass)', 10);
    var t2 = poly([[190, 150], [300, 150], [300, 40]]) + right([300, 150], [190, 150], [300, 40], 12) +
      ang([190, 150], [300, 150], [300, 40], 30, S.arc) +
      ang([300, 40], [300, 150], [190, 150], 22, S.arc) +
      LT(245, 167, '√3', 'var(--muted)', 12) + LT(315, 96, '1', 'var(--muted)', 12) +
      LT(232, 88, '2', 'var(--brand)', 12) +
      LT(224, 141, '30°', 'var(--brand)', 10) + LT(285, 70, '60°', 'var(--brand)', 10);
    return svg('8 26 322 158', t1 + t2);
  };
  F.complementary = function () {
    var C = [56, 156], A = [56, 46], B = [226, 156], c = cent([A, B, C]);
    return svg('0 0 268 196', poly([A, B, C]) + right(C, B, A, 14) +
      ang(B, A, C, 28, S.arc) + ang(A, B, C, 28, S.arc2) +
      dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) +
      vlabel(A, c, 'A') + vlabel(B, c, 'B') + vlabel(C, c, 'C') +
      LT(90, 64, 'α', 'var(--brass)', 12.5) + LT(200, 141, '90° − α', 'var(--brand)', 10.5) +
      LT(134, 182, 'sin α = cos(90° − α)', 'var(--brand)', 12) +
      LT(134, 194, 'tan α = cot(90° − α)', 'var(--brand)', 12));
  };
  F.bearings = function () {
    var O = [140, 130], R = 92;
    var ray = [O[0] + R * Math.sin(62 * Math.PI / 180), O[1] - R * Math.cos(62 * Math.PI / 180)];
    return svg('0 0 280 250',
      '<circle cx="140" cy="130" r="92" fill="none" stroke="var(--rule)" stroke-width="1.4"/>' +
      line([140, 20], [140, 240], S.aux) + line([30, 130], [250, 130], S.aux) +
      line(O, [O[0], O[1] - R], 'fill="none" stroke="currentColor" stroke-width="2"') +
      line(O, ray, 'fill="none" stroke="var(--brand)" stroke-width="2.4"') +
      '<path d="M140 92 A38 38 0 0 1 ' + (O[0] + 38 * Math.sin(62 * Math.PI / 180)).toFixed(1) + ' ' +
      (O[1] - 38 * Math.cos(62 * Math.PI / 180)).toFixed(1) + '" fill="none" stroke="var(--brass)" stroke-width="1.8"/>' +
      LT(140, 12, 'N', 'var(--ink)', 13) + LT(262, 130, 'E', 'var(--muted)', 12) +
      LT(140, 248, 'S', 'var(--muted)', 12) + LT(18, 130, 'W', 'var(--muted)', 12) +
      dot(O[0], O[1]) + LT(182, 112, '062°', 'var(--brass)', 11.5) +
      LT(ray[0] + 16, ray[1] - 8, 'B', 'var(--brand)', 12));
  };
  F.ladder = function () {
    var G = [46, 176], W = [46, 40], T = [46, 60], F0 = [206, 176];
    return svg('0 0 252 208',
      line([26, 176], [232, 176], 'fill="none" stroke="currentColor" stroke-width="2.2"') +
      line([46, 30], [46, 176], 'fill="none" stroke="currentColor" stroke-width="2.2"') +
      line(F0, T, 'fill="none" stroke="var(--brand)" stroke-width="3"') +
      right(G, F0, [46, 40], 13) +
      ang(F0, G, T, 30, S.arc2) +
      dot(T[0], T[1], 'var(--brand)') + dot(F0[0], F0[1], 'var(--brand)') +
      LT(174, 160, 'α', 'var(--brass)', 12) +
      LT(30, 118, 'h', 'var(--muted)', 12.5) +
      LT(126, 192, 'd', 'var(--muted)', 12.5) +
      LT(136, 106, 'ladder ℓ', 'var(--brand)', 11) +
      LT(126, 204, 'h = ℓ · sin α,  d = ℓ · cos α', 'var(--brand)', 10.5));
  };
  F.numberLineInterval = function () {
    var W = 330, y = 44;
    var out = line([16, y], [W - 16, y], 'stroke="currentColor" stroke-width="1.8"');
    out += '<path d="M' + (W - 22) + ' ' + (y - 5) + ' L' + (W - 14) + ' ' + y + ' L' +
      (W - 22) + ' ' + (y + 5) + '" fill="none" stroke="currentColor" stroke-width="1.8"/>';
    out += '<line x1="96" y1="' + y + '" x2="240" y2="' + y + '" stroke="var(--brand)" stroke-width="5"/>';
    out += '<circle cx="96" cy="' + y + '" r="6" fill="var(--paper)" stroke="var(--brand)" stroke-width="2.4"/>';
    out += '<circle cx="240" cy="' + y + '" r="6" fill="var(--brand)"/>';
    out += LT(96, y + 22, '−2') + LT(240, y + 22, '5');
    out += LT(168, y - 18, '−2 < x ≤ 5', 'var(--brand)', 12.5);
    out += LT(168, y + 42, 'open circle = strict · filled = included', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' 96', out);
  };
  F.rootLadder = function () {
    /* the power side is drawn with a raised, smaller tspan — a real superscript */
    function pw(e) {
      return 'a<tspan font-size="10.5" dy="-6">' + e + '</tspan>';
    }
    var rows = [['√a', pw('1/2')], ['∛a', pw('1/3')], ['⁴√a', pw('1/4')], ['ⁿ√aᵐ', pw('m/n')]];
    var out = '';
    rows.forEach(function (r, i) {
      var y = 34 + i * 40;
      out += '<rect x="18" y="' + (y - 20) + '" width="120" height="32" rx="5" fill="var(--surface-2)" ' +
        'stroke="currentColor" stroke-width="1.4"/>' +
        '<text x="78" y="' + (y - 1) + '" text-anchor="middle" font-family="Spectral,Georgia,serif" ' +
        'font-size="15" fill="currentColor">' + r[0] + '</text>' +
        '<path d="M144 ' + (y - 4) + ' H186" fill="none" stroke="var(--brass)" stroke-width="1.6"/>' +
        '<path d="M180 ' + (y - 9) + ' l6 5 -6 5" fill="none" stroke="var(--brass)" stroke-width="1.6"/>' +
        '<rect x="192" y="' + (y - 20) + '" width="120" height="32" rx="5" fill="var(--brand-tint)" ' +
        'stroke="var(--brand)" stroke-width="1.4"/>' +
        '<text x="252" y="' + (y - 1) + '" text-anchor="middle" font-family="Spectral,Georgia,serif" ' +
        'font-size="15" fill="var(--brand)">' + r[1] + '</text>';
    });
    return svg('0 0 330 190', out + LT(165, 182, 'a root is a power — the same object, two notations', 'var(--muted)', 10.5));
  };


  /* ---------- Quarter III: algebra ---------- */
  function axes(W, H, cx, cy, u, half) {
    var g = '', i;
    for (i = -half; i <= half; i++) {
      g += line([cx + i * u, 6], [cx + i * u, H - 6], 'stroke="var(--rule-soft)" stroke-width="1"');
      g += line([8, cy + i * u], [W - 8, cy + i * u], 'stroke="var(--rule-soft)" stroke-width="1"');
    }
    g += line([8, cy], [W - 8, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 6], [cx, H - 6], 'stroke="var(--faint)" stroke-width="1.5"');
    g += LT(W - 14, cy - 11, 'x') + LT(cx + 13, 15, 'y');
    return g;
  }
  F.systemIntervals = function () {
    var W = 340, out = '';
    function nl(y, from, to, openL, openR, label, col) {
      var x0 = 26, x1 = W - 26, cx = function (v) { return x0 + (v + 6) / 12 * (x1 - x0); };
      var o = line([x0, y], [x1, y], 'stroke="currentColor" stroke-width="1.6"');
      o += '<path d="M' + (x1 - 8) + ' ' + (y - 4) + ' L' + x1 + ' ' + y + ' L' + (x1 - 8) + ' ' + (y + 4) +
        '" fill="none" stroke="currentColor" stroke-width="1.6"/>';
      o += line([cx(from), y], [cx(to), y], 'stroke="' + col + '" stroke-width="5"');
      o += '<circle cx="' + cx(from).toFixed(1) + '" cy="' + y + '" r="5.5" fill="' +
        (openL ? 'var(--paper)' : col) + '" stroke="' + col + '" stroke-width="2.2"/>';
      o += '<circle cx="' + cx(to).toFixed(1) + '" cy="' + y + '" r="5.5" fill="' +
        (openR ? 'var(--paper)' : col) + '" stroke="' + col + '" stroke-width="2.2"/>';
      o += LT(cx(from), y + 16, String(from)) + LT(cx(to), y + 16, String(to));
      o += LT(x0 + 26, y - 16, label, col, 11.5);
      return o;
    }
    out += nl(44, -2, 6, true, false, 'x > −2', 'var(--brand)');
    out += nl(110, -6, 4, false, true, 'x < 4', 'var(--brass)');
    out += nl(176, -2, 4, true, true, '−2 < x < 4', 'var(--easy)');
    return svg('0 0 ' + W + ' 216', out +
      LT(W / 2, 208, 'the solution is where the two overlap', 'var(--easy)', 10.5));
  };
  F.modulusLine = function () {
    var W = 330, y = 46;
    var out = line([18, y], [W - 18, y], 'stroke="currentColor" stroke-width="1.8"');
    var cx = function (v) { return 18 + (v + 6) / 12 * (W - 36); };
    out += line([cx(-3), y], [cx(3), y], 'stroke="var(--brand)" stroke-width="5"');
    [[-3, '−3'], [0, '0'], [3, '3']].forEach(function (p) {
      out += '<circle cx="' + cx(p[0]).toFixed(1) + '" cy="' + y + '" r="5.5" fill="' +
        (p[0] === 0 ? 'var(--faint)' : 'var(--brand)') + '"/>' + LT(cx(p[0]), y + 19, p[1]);
    });
    out += '<path d="M' + cx(-3) + ' ' + (y - 16) + ' Q' + cx(-1.5) + ' ' + (y - 30) + ' ' + cx(0) + ' ' + (y - 16) +
      '" fill="none" stroke="var(--brass)" stroke-width="1.5"/>';
    out += '<path d="M' + cx(0) + ' ' + (y - 16) + ' Q' + cx(1.5) + ' ' + (y - 30) + ' ' + cx(3) + ' ' + (y - 16) +
      '" fill="none" stroke="var(--brass)" stroke-width="1.5"/>';
    out += LT(cx(-1.5), y - 34, '3', 'var(--brass)') + LT(cx(1.5), y - 34, '3', 'var(--brass)');
    return svg('0 0 ' + W + ' 100', out + LT(W / 2, 92, '| x | ≤ 3  means  −3 ≤ x ≤ 3', 'var(--brand)', 12));
  };
  F.parabola = function () {
    var W = 300, H = 250, cx = 150, cy = 132, u = 20;
    var g = axes(W, H, cx, cy, u, 5);
    var d = '', on = false;
    for (var x = -2.6; x <= 4.6; x += 0.04) {
      var yv = x * x - 2 * x - 3;
      if (yv < -4.6 || yv > 5.4) { on = false; continue; }
      d += (on ? 'L' : 'M') + (cx + x * u).toFixed(1) + ' ' + (cy - yv * u).toFixed(1) + ' ';
      on = true;
    }
    var out = g + '<path d="' + d + '" fill="none" stroke="var(--brand)" stroke-width="2.6" stroke-linecap="round"/>';
    [[-1, '−1'], [3, '3']].forEach(function (r) {
      out += '<circle cx="' + (cx + r[0] * u) + '" cy="' + cy + '" r="5" fill="var(--brass)"/>' +
        LT(cx + r[0] * u, cy + 18, r[1], 'var(--brass)');
    });
    out += '<circle cx="' + (cx + 1 * u) + '" cy="' + (cy + 4 * u) + '" r="4.5" fill="var(--brand)"/>';
    out += LT(cx + 1 * u + 34, cy + 4 * u, 'vertex', 'var(--brand)', 10);
    return svg('0 0 ' + W + ' ' + H, out +
      '<text x="' + (W - 12) + '" y="30" text-anchor="end" font-family="Spectral,Georgia,serif" ' +
      'font-size="13" font-style="italic" fill="var(--brand)">y = x² − 2x − 3</text>');
  };
  F.discriminantCases = function () {
    var out = '', cases = [[-1.4, 'D > 0', 'two roots', 'var(--easy)'],
                           [0, 'D = 0', 'one root', 'var(--brass)'],
                           [1.4, 'D < 0', 'no roots', 'var(--hard)']];
    cases.forEach(function (c, i) {
      var ox = 18 + i * 112, cy = 96, u = 11;
      out += line([ox, cy], [ox + 88, cy], 'stroke="var(--faint)" stroke-width="1.3"');
      var d = '', on = false;
      for (var x = -3.2; x <= 3.2; x += 0.05) {
        var yv = (x * x - 2) + c[0] * 2;
        if (yv > 4.6 || yv < -4.6) { on = false; continue; }
        d += (on ? 'L' : 'M') + (ox + 44 + x * u).toFixed(1) + ' ' + (cy - yv * u).toFixed(1) + ' ';
        on = true;
      }
      out += '<path d="' + d + '" fill="none" stroke="' + c[3] + '" stroke-width="2.3"/>';
      out += LT(ox + 44, 24, c[1], c[3], 12) + LT(ox + 44, 40, c[2], 'var(--muted)', 10.5);
    });
    return svg('0 0 356 156', out);
  };
  F.errorBounds = function () {
    var W = 340, y = 56, x0 = 60, x1 = W - 60;
    var cx = function (t) { return x0 + t * (x1 - x0); };   // t = 0 .. 1
    var out = line([22, y], [W - 22, y], 'stroke="currentColor" stroke-width="1.6"');
    out += line([cx(0), y], [cx(1), y], 'stroke="var(--brand)" stroke-width="5"');
    out += '<circle cx="' + cx(0) + '" cy="' + y + '" r="5" fill="var(--brand)"/>';
    out += '<circle cx="' + cx(1) + '" cy="' + y + '" r="5" fill="var(--paper)" stroke="var(--brand)" stroke-width="2.4"/>';
    out += '<circle cx="' + cx(0.5) + '" cy="' + y + '" r="6" fill="var(--brass)"/>';
    out += LT(cx(0), y + 20, '4.75', 'var(--brand)', 11) + LT(cx(1), y + 20, '4.85', 'var(--brand)', 11);
    out += LT(cx(0), y + 34, 'lower', 'var(--muted)', 9.5) + LT(cx(1), y + 34, 'upper', 'var(--muted)', 9.5);
    out += LT(cx(0.5), y - 22, 'measured 4.8', 'var(--brass)', 11.5);
    return svg('0 0 ' + W + ' 104', out +
      LT(W / 2, 96, 'the true value lies anywhere in the bar', 'var(--brand)', 10.5));
  };

  /* ---------- Quarter IV: statistics and probability ---------- */
  F.frequencyPolygon = function () {
    var W = 320, H = 210, x0 = 40, y0 = 168, xs = 46, ys = 26;
    var data = [2, 5, 8, 6, 3];
    var out = '';
    for (var i = 0; i <= 8; i += 2) out += line([x0 - 4, y0 - i * ys / 2], [W - 14, y0 - i * ys / 2],
      'stroke="var(--rule-soft)" stroke-width="1"') + LT(x0 - 16, y0 - i * ys / 2, String(i), 'var(--muted)', 10);
    out += line([x0, y0], [W - 14, y0], 'stroke="currentColor" stroke-width="1.6"');
    out += line([x0, 18], [x0, y0], 'stroke="currentColor" stroke-width="1.6"');
    var pts = data.map(function (v, i2) { return [x0 + (i2 + 0.5) * xs, y0 - v * ys / 2]; });
    out += '<polyline points="' + pts.map(function (p) { return r1(p[0]) + ',' + r1(p[1]); }).join(' ') +
      '" fill="none" stroke="var(--brand)" stroke-width="2.4"/>';
    pts.forEach(function (p, i2) {
      out += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="4" fill="var(--brand)"/>' +
        LT(p[0], y0 + 15, ['0–10', '10–20', '20–30', '30–40', '40–50'][i2], 'var(--muted)', 8.5);
    });
    return svg('0 0 ' + W + ' ' + H, out + LT(W / 2, 196, 'points at the midpoint of each class', 'var(--muted)', 10.5));
  };
  function r1(v) { return Math.round(v * 10) / 10; }
  F.scatterGraph = function () {
    var W = 300, H = 210, x0 = 38, y0 = 168;
    var pts = [[1, 2], [2, 3], [3, 3.6], [4, 5], [5, 5.4], [6, 6.6], [7, 7], [8, 8.4]];
    var out = line([x0, y0], [W - 14, y0], 'stroke="currentColor" stroke-width="1.6"') +
      line([x0, 18], [x0, y0], 'stroke="currentColor" stroke-width="1.6"');
    var sx = (W - x0 - 28) / 9, sy = (y0 - 26) / 9;
    out += line([x0 + 0.6 * sx, y0 - 1.6 * sy], [x0 + 8.6 * sx, y0 - 8.6 * sy],
      'stroke="var(--brass)" stroke-width="1.8" stroke-dasharray="5 4"');
    pts.forEach(function (p) {
      out += '<circle cx="' + (x0 + p[0] * sx).toFixed(1) + '" cy="' + (y0 - p[1] * sy).toFixed(1) +
        '" r="4" fill="var(--brand)"/>';
    });
    return svg('0 0 ' + W + ' ' + H, out +
      LT(W / 2, 194, 'positive correlation', 'var(--brand)', 11.5));
  };
  F.treeDiagram = function () {
    var out = '';
    function branch(x1, y1, x2, y2, lab, col) {
      return line([x1, y1], [x2, y2], 'stroke="' + (col || 'currentColor') + '" stroke-width="1.7"') +
        LT((x1 + x2) / 2 - 2, (y1 + y2) / 2 - 9, lab, 'var(--brass)', 10);
    }
    out += branch(40, 106, 130, 54, '0.6') + branch(40, 106, 130, 158, '0.4');
    out += branch(140, 50, 232, 24, '0.6') + branch(140, 58, 232, 84, '0.4');
    out += branch(140, 154, 232, 128, '0.6') + branch(140, 162, 232, 188, '0.4');
    out += '<circle cx="40" cy="106" r="4" fill="currentColor"/>';
    [[135, 54, 'A'], [135, 158, 'B'], [238, 24, 'AA'], [238, 84, 'AB'], [238, 128, 'BA'], [238, 188, 'BB']]
      .forEach(function (p) {
        out += '<text x="' + p[0] + '" y="' + (p[1] + 4) + '" font-family="Spectral,Georgia,serif" ' +
          'font-size="13" font-style="italic" fill="currentColor">' + p[2] + '</text>';
      });
    [[268, 24, '0.36'], [268, 84, '0.24'], [268, 128, '0.24'], [268, 188, '0.16']].forEach(function (p) {
      out += LT(p[0] + 12, p[1], p[2], 'var(--brand)', 10.5);
    });
    return svg('0 0 320 212', out + LT(160, 206, 'multiply along a branch · add down the ends', 'var(--muted)', 10.5));
  };
  F.linearSequence = function () {
    var out = '', n = 4;
    for (var k = 0; k < n; k++) {
      var count = 2 * k + 3, ox = 20 + k * 84;
      for (var i = 0; i < count; i++) {
        var col = i % 3, row = Math.floor(i / 3);
        out += '<rect x="' + (ox + col * 15) + '" y="' + (110 - row * 15) + '" width="12" height="12" rx="2" ' +
          'fill="var(--brand-tint)" stroke="var(--brand)" stroke-width="1.2"/>';
      }
      out += LT(ox + 22, 138, 'n = ' + (k + 1), 'var(--muted)', 10.5);
      out += LT(ox + 22, 154, String(count), 'var(--brand)', 12);
    }
    return svg('0 0 356 176', out + LT(178, 172, 'nth term = 2n + 1', 'var(--brand)', 12.5));
  };
  F.gradientIntercept = function () {
    var W = 300, H = 240, cx = 140, cy = 170, u = 26;
    var out = axes(W, H, cx, cy, u, 5);
    var f = function (x) { return 0.5 * x + 2; };
    out += line([cx - 4.4 * u, cy - f(-4.4) * u], [cx + 4.4 * u, cy - f(4.4) * u],
      'stroke="var(--brand)" stroke-width="2.6"');
    out += '<circle cx="' + cx + '" cy="' + (cy - 2 * u) + '" r="5" fill="var(--brass)"/>';
    out += LT(cx - 26, cy - 2 * u, 'c = 2', 'var(--brass)', 11);
    out += line([cx + 1 * u, cy - f(1) * u], [cx + 3 * u, cy - f(1) * u], 'stroke="var(--faint)" stroke-width="1.4" stroke-dasharray="4 3"');
    out += line([cx + 3 * u, cy - f(1) * u], [cx + 3 * u, cy - f(3) * u], 'stroke="var(--faint)" stroke-width="1.4" stroke-dasharray="4 3"');
    out += LT(cx + 2 * u, cy - f(1) * u + 13, '2', 'var(--muted)', 10) +
      LT(cx + 3 * u + 12, cy - f(2) * u, '1', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, out +
      '<text x="' + (W - 12) + '" y="26" text-anchor="end" font-family="Spectral,Georgia,serif" ' +
      'font-size="13" font-style="italic" fill="var(--brand)">y = ½x + 2</text>' +
      LT(W / 2, 232, 'gradient = rise ÷ run = 1 ÷ 2', 'var(--muted)', 10.5));
  };


  /* ---------- Quarter III: coordinates, vectors, area ---------- */
  F.coordPoint = function () {
    var W = 300, H = 250, cx = 130, cy = 168, u = 28;
    var out = axes(W, H, cx, cy, u, 5);
    var A = [cx + 3 * u, cy - 2 * u];
    out += line([A[0], A[1]], [A[0], cy], S.aux) + line([A[0], A[1]], [cx, A[1]], S.aux);
    out += dot(A[0], A[1], 'var(--brand)');
    out += L(A[0] + 22, A[1] - 12, 'A', 'var(--brand)');
    out += LT(A[0] + 30, A[1] + 6, '(3, 2)', 'var(--brand)', 11);
    out += LT(cx + 3 * u, cy + 15, '3', 'var(--muted)') + LT(cx - 14, cy - 2 * u, '2', 'var(--muted)');
    return svg('0 0 ' + W + ' ' + H, out +
      LT(W / 2, 238, 'first across, then up', 'var(--muted)', 10.5));
  };
  F.distanceFormula = function () {
    var W = 300, H = 250, cx = 90, cy = 190, u = 30;
    var out = axes(W, H, cx, cy, u, 5);
    var A = [cx + 1 * u, cy - 1 * u], B = [cx + 5 * u, cy - 4 * u], C = [B[0], A[1]];
    out += poly([A, B, C], 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="2"');
    out += right(C, A, B, 12);
    out += dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1], 'var(--faint)');
    out += L(A[0] - 16, A[1] + 8, 'A') + L(B[0] + 16, B[1] - 6, 'B');
    out += LT((A[0] + C[0]) / 2, A[1] + 15, 'x₂ − x₁', 'var(--muted)', 10);
    out += LT(C[0] + 26, (B[1] + C[1]) / 2, 'y₂ − y₁', 'var(--muted)', 10);
    out += LT((A[0] + B[0]) / 2 - 22, (A[1] + B[1]) / 2 - 10, 'd', 'var(--brand)', 12);
    return svg('0 0 ' + W + ' ' + H, out +
      LT(W / 2, 240, 'd = √((x₂−x₁)² + (y₂−y₁)²)', 'var(--brand)', 11));
  };
  F.circleEquation = function () {
    var W = 290, H = 250, cx = 145, cy = 130, u = 26;
    var out = axes(W, H, cx, cy, u, 4);
    var Ox = cx + 1 * u, Oy = cy - 1 * u, R = 2.5 * u;
    out += '<circle cx="' + Ox + '" cy="' + Oy + '" r="' + R + '" fill="var(--brand-tint)" ' +
      'stroke="currentColor" stroke-width="2.2"/>';
    out += line([Ox, Oy], [Ox + R * 0.7, Oy - R * 0.714], 'stroke="var(--brass)" stroke-width="1.8"');
    out += dot(Ox, Oy, 'var(--brand)');
    out += L(Ox - 16, Oy + 14, 'O', 'var(--brand)');
    out += LT(Ox + 28, Oy - 30, 'R', 'var(--brass)', 12);
    return svg('0 0 ' + W + ' ' + H, out +
      LT(W / 2, 240, '(x − a)² + (y − b)² = R²', 'var(--brand)', 11.5));
  };
  F.vectorBasic = function () {
    var A = [40, 150], B = [230, 62];
    var out = line(A, B, 'stroke="var(--brand)" stroke-width="3"');
    var ux = (B[0] - A[0]) / 210, uy = (B[1] - A[1]) / 210;
    out += '<path d="M' + (B[0] - 14 * ux + 6 * uy) + ' ' + (B[1] - 14 * uy - 6 * ux) + ' L' + B[0] + ' ' + B[1] +
      ' L' + (B[0] - 14 * ux - 6 * uy) + ' ' + (B[1] - 14 * uy + 6 * ux) +
      '" fill="none" stroke="var(--brand)" stroke-width="3" stroke-linejoin="round"/>';
    out += dot(A[0], A[1]) + L(A[0] - 12, A[1] + 10, 'A') + L(B[0] + 12, B[1] - 8, 'B');
    return svg('0 0 268 186', out +
      LT(130, 96, 'AB', 'var(--brand)', 13) +
      LT(134, 172, 'a vector has a length and a direction', 'var(--muted)', 10.5));
  };
  function arrow(A, B, col, w) {
    var L2 = Math.hypot(B[0] - A[0], B[1] - A[1]) || 1;
    var ux = (B[0] - A[0]) / L2, uy = (B[1] - A[1]) / L2;
    return line(A, B, 'stroke="' + col + '" stroke-width="' + (w || 2.6) + '"') +
      '<path d="M' + (B[0] - 12 * ux + 5.5 * uy).toFixed(1) + ' ' + (B[1] - 12 * uy - 5.5 * ux).toFixed(1) +
      ' L' + B[0] + ' ' + B[1] + ' L' + (B[0] - 12 * ux - 5.5 * uy).toFixed(1) + ' ' +
      (B[1] - 12 * uy + 5.5 * ux).toFixed(1) + '" fill="none" stroke="' + col + '" stroke-width="' +
      (w || 2.6) + '" stroke-linejoin="round"/>';
  }
  F.vectorAdd = function () {
    var O = [40, 158], A = [150, 100], B = [230, 158];
    var out = arrow(O, A, 'var(--brand)') + arrow(A, B, 'var(--brass)') + arrow(O, B, 'var(--easy)', 3);
    out += line(O, [O[0] + (B[0] - A[0]), O[1] + (B[1] - A[1])], S.aux);
    out += LT(88, 118, 'a', 'var(--brand)', 13) + LT(196, 118, 'b', 'var(--brass)', 13) +
      LT(134, 176, 'a + b', 'var(--easy)', 13);
    return svg('0 0 276 200', out +
      LT(138, 194, 'triangle rule: nose to tail', 'var(--muted)', 10.5));
  };
  F.vectorScalar = function () {
    var O = [34, 132];
    var out = arrow(O, [110, 90], 'var(--brand)', 3) +
      arrow([150, 132], [264, 69], 'var(--brass)', 3) +
      arrow([34, 176], [72, 197], 'var(--hard)', 3);
    return svg('0 0 286 232', out +
      LT(64, 96, 'a', 'var(--brand)', 13) + LT(190, 88, '1.5 a', 'var(--brass)', 12) +
      LT(96, 190, '−0.5 a', 'var(--hard)', 11) +
      LT(143, 224, 'a number stretches or reverses a vector', 'var(--muted)', 10.5));
  };
  F.areaParallelogram = function () {
    var A = [40, 156], B = [166, 156], C = [216, 62], D = [90, 62];
    var out = poly([A, B, C, D]) + line(D, [90, 156], S.aux) + right([90, 156], B, D, 11);
    out += dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]) + dot(D[0], D[1]);
    out += LT(103, 172, 'a', 'var(--muted)', 12) + LT(78, 110, 'h', 'var(--faint)', 12);
    return svg('0 0 250 196', out + LT(125, 190, 'S = a · h', 'var(--brand)', 13));
  };
  F.areaTriangle = function () {
    var A = [128, 40], B = [34, 156], C = [214, 156];
    var out = poly([A, B, C]) + line(A, [128, 156], S.aux) + right([128, 156], C, A, 11);
    out += dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]);
    out += LT(90, 172, 'a', 'var(--muted)', 12) + LT(116, 100, 'h', 'var(--faint)', 12);
    return svg('0 0 250 196', out + LT(124, 190, 'S = ½ · a · h', 'var(--brand)', 13));
  };
  F.areaRhombus = function () {
    var A = [34, 100], B = [124, 162], C = [214, 100], D = [124, 38], c = [124, 100];
    var out = poly([A, B, C, D]) +
      line(A, C, 'stroke="var(--brand)" stroke-width="1.7"') +
      line(B, D, 'stroke="var(--brass)" stroke-width="1.7"') + right(c, C, D, 11);
    out += LT(70, 92, 'd₁', 'var(--brand)', 12) + LT(136, 66, 'd₂', 'var(--brass)', 12);
    return svg('0 0 250 196', out + LT(124, 188, 'S = ½ · d₁ · d₂', 'var(--brand)', 13));
  };
  F.polygonDecompose = function () {
    var P = [[30, 150], [70, 60], [150, 34], [220, 90], [190, 158]];
    var out = poly(P);
    out += line(P[0], P[2], S.aux) + line(P[0], P[3], S.aux);
    out += LT(84, 108, '1', 'var(--brass)') + LT(140, 92, '2', 'var(--brass)') + LT(150, 136, '3', 'var(--brass)');
    P.forEach(function (p) { out += dot(p[0], p[1]); });
    return svg('0 0 252 192', out +
      LT(126, 184, 'split into triangles, then add the areas', 'var(--muted)', 10.5));
  };
  F.circleArea = function () {
    var O = [88, 96], R = 62;
    var out = '<circle cx="88" cy="96" r="62" fill="var(--brand-tint)" stroke="currentColor" stroke-width="2.2"/>';
    out += line(O, [O[0] + R, O[1]], 'stroke="var(--brass)" stroke-width="2"');
    out += dot(O[0], O[1]) + LT(120, 86, 'r', 'var(--brass)', 12);
    var i, seg = '';
    for (i = 0; i < 10; i++) {
      var x = 190 + i * 13, up = i % 2 === 0;
      seg += '<path d="M' + x + ' ' + (up ? 140 : 60) + ' L' + (x + 13) + ' ' + (up ? 140 : 60) +
        ' L' + (x + 6.5) + ' ' + (up ? 60 : 140) + ' Z" fill="var(--brand-tint)" ' +
        'stroke="currentColor" stroke-width="1.1"/>';
    }
    return svg('0 0 340 190', out + seg +
      LT(88, 178, 'C = 2πr', 'var(--brand)', 12) +
      LT(255, 178, 'S = πr²', 'var(--brand)', 12) +
      LT(255, 46, 'cut into sectors → a rectangle', 'var(--muted)', 9.5));
  };

  /* ---------- Quarter IV: the circle ---------- */
  F.linePositions = function () {
    var out = '', cfg = [[54, 22, 'secant', 'var(--brand)'], [164, 44, 'tangent', 'var(--brass)'],
                         [274, 64, 'no meeting', 'var(--hard)']];
    cfg.forEach(function (c) {
      var ox = c[0], d = c[1];
      out += '<circle cx="' + ox + '" cy="86" r="44" fill="var(--brand-tint)" stroke="currentColor" stroke-width="2"/>';
      out += line([ox - 62, 86 + d], [ox + 62, 86 + d], 'stroke="' + c[3] + '" stroke-width="2.2"');
      out += dot(ox, 86, 'var(--faint)');
      if (d < 44) {
        var dx = Math.sqrt(44 * 44 - d * d);
        out += dot(ox - dx, 86 + d, c[3]) + dot(ox + dx, 86 + d, c[3]);
      } else if (d === 44) { out += dot(ox, 86 + d, c[3]); }
      out += LT(ox, 158, c[2], c[3], 11);
      out += LT(ox, 174, d < 44 ? 'd < R' : (d === 44 ? 'd = R' : 'd > R'), 'var(--muted)', 10);
    });
    return svg('0 0 340 188', out);
  };
  F.tangentProperty = function () {
    var O = [104, 96], R = 56, T = [104, 40];
    var out = '<circle cx="104" cy="96" r="56" fill="var(--brand-tint)" stroke="currentColor" stroke-width="2"/>';
    out += line(O, T, 'stroke="var(--brass)" stroke-width="1.9"');
    out += line([34, 40], [174, 40], 'stroke="var(--brand)" stroke-width="2.4"');
    out += right(T, [174, 40], O, 12);
    out += dot(O[0], O[1]) + dot(T[0], T[1], 'var(--brand)');
    out += L(O[0] - 14, O[1] + 6, 'O') + L(T[0] - 14, T[1] - 10, 'T');
    out += LT(122, 68, 'R', 'var(--brass)', 12);

    var Oc = [250, 96], Rc = 46, P = [336, 96];
    var dP = Math.hypot(P[0] - Oc[0], P[1] - Oc[1]);
    var aT = Math.acos(Rc / dP), base = Math.atan2(P[1] - Oc[1], P[0] - Oc[0]);
    var A = [Oc[0] + Rc * Math.cos(base + aT), Oc[1] + Rc * Math.sin(base + aT)];
    var B = [Oc[0] + Rc * Math.cos(base - aT), Oc[1] + Rc * Math.sin(base - aT)];
    out += '<circle cx="250" cy="96" r="46" fill="var(--brand-tint)" stroke="currentColor" stroke-width="1.8"/>';
    out += line(P, A, 'stroke="var(--easy)" stroke-width="2"') +
           line(P, B, 'stroke="var(--easy)" stroke-width="2"');
    out += ticks(P, A, 1) + ticks(P, B, 1);
    out += dot(Oc[0], Oc[1], 'var(--faint)') + dot(A[0], A[1], 'var(--easy)') +
           dot(B[0], B[1], 'var(--easy)') + dot(P[0], P[1], 'var(--easy)');
    out += L(P[0] + 12, P[1] + 4, 'P', 'var(--easy)') +
           L(A[0] - 4, A[1] - 12, 'A', 'var(--easy)') + L(B[0] - 4, B[1] + 16, 'B', 'var(--easy)');
    return svg('0 0 366 190', out +
      LT(104, 176, 'tangent ⊥ radius at T', 'var(--brand)', 10.5) +
      LT(266, 176, 'two tangents from P are equal', 'var(--easy)', 10));
  };
  F.centralAngle = function () {
    var O = [128, 108], R = 74;
    var a1 = -140 * Math.PI / 180, a2 = -40 * Math.PI / 180;
    var A = [O[0] + R * Math.cos(a1), O[1] + R * Math.sin(a1)];
    var B = [O[0] + R * Math.cos(a2), O[1] + R * Math.sin(a2)];
    var out = '<circle cx="128" cy="108" r="74" fill="none" stroke="currentColor" stroke-width="2"/>';
    out += '<path d="M' + A[0].toFixed(1) + ' ' + A[1].toFixed(1) + ' A' + R + ' ' + R + ' 0 0 1 ' +
      B[0].toFixed(1) + ' ' + B[1].toFixed(1) + '" fill="none" stroke="var(--brass)" stroke-width="4"/>';
    out += line(O, A, 'stroke="var(--brand)" stroke-width="1.9"') + line(O, B, 'stroke="var(--brand)" stroke-width="1.9"');
    out += ang(O, A, B, 26, S.arc);
    out += dot(O[0], O[1]) + dot(A[0], A[1]) + dot(B[0], B[1]);
    out += L(O[0] - 14, O[1] + 12, 'O') + L(A[0] - 14, A[1] - 6, 'A') + L(B[0] + 14, B[1] - 6, 'B');
    out += LT(128, 76, '∠AOB', 'var(--brand)', 11);
    return svg('0 0 256 210', out +
      LT(128, 200, 'a central angle equals the arc it cuts', 'var(--muted)', 10.5));
  };
  F.inscribedAngle = function () {
    var O = [130, 118], R = 78;
    var a1 = 200 * Math.PI / 180, a2 = 340 * Math.PI / 180, ac = 80 * Math.PI / 180;
    var A = [O[0] + R * Math.cos(a1), O[1] + R * Math.sin(a1)];
    var B = [O[0] + R * Math.cos(a2), O[1] + R * Math.sin(a2)];
    var C = [O[0] + R * Math.cos(ac), O[1] + R * Math.sin(ac)];
    var out = '<circle cx="130" cy="118" r="78" fill="none" stroke="currentColor" stroke-width="2"/>';
    out += '<path d="M' + A[0].toFixed(1) + ' ' + A[1].toFixed(1) + ' A' + R + ' ' + R + ' 0 0 1 ' +
      B[0].toFixed(1) + ' ' + B[1].toFixed(1) + '" fill="none" stroke="var(--brass)" stroke-width="4"/>';
    out += line(C, A, 'stroke="var(--brand)" stroke-width="2"') + line(C, B, 'stroke="var(--brand)" stroke-width="2"');
    out += line(O, A, S.aux) + line(O, B, S.aux);
    out += ang(C, A, B, 26, S.arc) + ang(O, A, B, 20, S.arc2);
    out += dot(O[0], O[1], 'var(--faint)') + dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1], 'var(--brand)');
    out += L(A[0] - 14, A[1] + 4, 'A') + L(B[0] + 14, B[1] + 4, 'B') + L(C[0], C[1] + 20, 'C', 'var(--brand)');
    return svg('0 0 260 226', out +
      LT(130, 214, '∠ACB = ½ ∠AOB', 'var(--brand)', 12));
  };
  F.semicircleAngle = function () {
    var O = [130, 116], R = 76;
    var A = [O[0] - R, O[1]], B = [O[0] + R, O[1]];
    var C = [O[0] + R * Math.cos(-125 * Math.PI / 180), O[1] + R * Math.sin(-125 * Math.PI / 180)];
    var out = '<circle cx="130" cy="116" r="76" fill="none" stroke="currentColor" stroke-width="2"/>';
    out += line(A, B, 'stroke="var(--brass)" stroke-width="2.2"');
    out += poly([A, B, C], 'fill="var(--brand-tint)" stroke="var(--brand)" stroke-width="2"');
    out += right(C, A, B, 13);
    out += dot(O[0], O[1], 'var(--faint)') + dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]);
    out += L(A[0] - 14, A[1] + 4, 'A') + L(B[0] + 14, B[1] + 4, 'B') + L(C[0] - 6, C[1] - 14, 'C');
    return svg('0 0 260 216', out +
      LT(130, 206, 'an angle on a diameter is always 90°', 'var(--brand)', 11));
  };
  F.chordProperty = function () {
    var O = [130, 100], R = 76;
    var y = 138, half = Math.sqrt(R * R - 38 * 38);
    var A = [O[0] - half, y], B = [O[0] + half, y], M = [O[0], y];
    var out = '<circle cx="130" cy="100" r="76" fill="none" stroke="currentColor" stroke-width="2"/>';
    out += line(A, B, 'stroke="var(--brand)" stroke-width="2.2"');
    out += line(O, M, 'stroke="var(--brass)" stroke-width="1.9"');
    out += right(M, B, O, 12) + ticks(A, M, 1) + ticks(M, B, 1);
    out += dot(O[0], O[1]) + dot(A[0], A[1]) + dot(B[0], B[1]) + dot(M[0], M[1], 'var(--brass)');
    out += L(O[0] - 14, O[1] - 6, 'O') + L(A[0] - 14, A[1] + 4, 'A') + L(B[0] + 14, B[1] + 4, 'B') +
      L(M[0] + 14, M[1] + 14, 'M', 'var(--brass)');
    return svg('0 0 260 206', out +
      LT(130, 196, 'OM ⊥ AB  ⟹  AM = MB', 'var(--brand)', 11.5));
  };
  F.transformations = function () {
    var T = [[24, 118], [64, 118], [44, 78]];
    function tri(pts, col, fill) {
      return poly(pts, 'fill="' + (fill || 'var(--brand-tint)') + '" stroke="' + col +
        '" stroke-width="1.8" stroke-linejoin="round"');
    }
    var out = tri(T, 'currentColor');
    out += line([94, 40], [94, 150], 'stroke="var(--faint)" stroke-width="1.3" stroke-dasharray="4 4"');
    out += tri([[164, 118], [124, 118], [144, 78]], 'var(--brand)');
    out += LT(94, 164, 'reflection', 'var(--brand)', 10.5);
    out += tri([[214, 118], [254, 118], [234, 78]], 'currentColor');
    out += tri([[254, 78], [254, 118], [214, 98]], 'var(--brass)');
    out += LT(240, 164, 'rotation', 'var(--brass)', 10.5);
    out += tri([[296, 130], [336, 130], [316, 90]], 'currentColor');
    out += tri([[316, 108], [356, 108], [336, 68]], 'var(--easy)');
    out += arrow([306, 126], [326, 104], 'var(--easy)', 1.6);
    out += LT(326, 164, 'translation', 'var(--easy)', 10.5);
    return svg('0 0 376 178', out);
  };
  F.enlargement = function () {
    var C = [34, 156];
    var T = [[80, 130], [120, 130], [100, 96]];
    var T2 = T.map(function (p) { return [C[0] + (p[0] - C[0]) * 1.9, C[1] + (p[1] - C[1]) * 1.9]; });
    var out = poly(T2, 'fill="var(--brand-tint)" stroke="var(--brand)" stroke-width="2"');
    out += poly(T, 'fill="var(--surface)" stroke="currentColor" stroke-width="2"');
    T.forEach(function (p, i) { out += line(C, T2[i], S.aux); });
    out += dot(C[0], C[1], 'var(--brass)') + L(C[0] - 4, C[1] + 16, 'O', 'var(--brass)');
    return svg('0 0 280 190', out +
      LT(150, 180, 'scale factor 1.9 from the centre O', 'var(--brand)', 10.5));
  };
  F.prismVolume = function () {
    var out = '';
    var A = [40, 150], B = [140, 150], C = [90, 108];
    var d = [56, -34];
    var A2 = [A[0] + d[0], A[1] + d[1]], B2 = [B[0] + d[0], B[1] + d[1]], C2 = [C[0] + d[0], C[1] + d[1]];
    out += poly([A, B, B2, A2], 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="1.8"');
    out += poly([B, C, C2, B2], 'fill="var(--surface-2)" stroke="currentColor" stroke-width="1.8"');
    out += poly([A, B, C], 'fill="var(--brass-tint)" stroke="currentColor" stroke-width="2"');
    out += poly([A2, B2, C2], 'fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"');
    out += line(A, A2, S.aux);
    out += LT(90, 166, 'base area S', 'var(--brass)', 10.5) + LT(214, 140, 'length ℓ', 'var(--muted)', 10.5);
    return svg('0 0 280 200', out + LT(132, 192, 'V = S · ℓ', 'var(--brand)', 13));
  };
  F.surfaceNet = function () {
    var out = '';
    function rect(x, y, w, h, fill, lab) {
      return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="2" fill="' +
        fill + '" stroke="currentColor" stroke-width="1.6"/>' +
        LT(x + w / 2, y + h / 2, lab, 'var(--muted)', 10);
    }
    out += rect(84, 24, 70, 46, 'var(--brass-tint)', 'top');
    out += rect(84, 74, 70, 62, 'var(--brand-tint)', 'front');
    out += rect(24, 74, 56, 62, 'var(--surface-2)', 'side');
    out += rect(158, 74, 56, 62, 'var(--surface-2)', 'side');
    out += rect(218, 74, 70, 62, 'var(--brand-tint)', 'back');
    out += rect(84, 140, 70, 46, 'var(--brass-tint)', 'base');
    return svg('0 0 306 204', out +
      LT(153, 198, 'surface area = the area of the whole net', 'var(--brand)', 10.5));
  };
  F.symmetry3D = function () {
    var out = '';
    var A = [46, 148], B = [150, 148], C = [98, 60];
    var d = [46, -28];
    var A2 = [A[0] + d[0], A[1] + d[1]], B2 = [B[0] + d[0], B[1] + d[1]], C2 = [C[0] + d[0], C[1] + d[1]];
    out += poly([A, B, B2, A2], 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="1.7"');
    out += poly([A, B, C], 'fill="var(--surface-2)" stroke="currentColor" stroke-width="1.8"');
    out += poly([A2, B2, C2], 'fill="none" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 3"');
    out += line(C, [C[0] + d[0], C[1] + d[1]], S.aux);
    out += line([98, 34], [98, 176], 'stroke="var(--brass)" stroke-width="1.8" stroke-dasharray="6 4"');
    out += LT(98, 24, 'axis', 'var(--brass)', 10.5) +
      LT(150, 196, 'a plane of symmetry cuts it into mirror halves', 'var(--muted)', 9.5);
    return svg('0 0 300 208', out);
  };


  /* ================= Grade 10 · functions and quadratics ================= */

  /* plot y = f(x) over [x0,x1] on an axes grid; returns the path data */
  function curve(f, x0, x1, cx, cy, u, step) {
    var d = '', first = true;
    for (var x = x0; x <= x1 + 1e-9; x += (step || 0.1)) {
      var y = f(x);
      if (!isFinite(y)) { first = true; continue; }
      d += (first ? 'M' : 'L') + (cx + x * u).toFixed(2) + ' ' + (cy - y * u).toFixed(2) + ' ';
      first = false;
    }
    return d.trim();
  }

  F.quadGraph = function () {
    var W = 340, H = 250, cx = 150, cy = 148, u = 20;
    var f = function (x) { return x * x - 2 * x - 3; };   /* roots −1, 3; vertex (1, −4) */
    var g = axes(W, H, cx, cy, u, 6);
    g += '<path d="' + curve(f, -2.2, 4.2, cx, cy, u, 0.06) + '" ' + S.arc + ' stroke-width="2.4"/>';
    g += line([cx + u, 8], [cx + u, H - 8], S.aux);
    g += dot(cx - u, cy, 'var(--brass)') + dot(cx + 3 * u, cy, 'var(--brass)');
    g += dot(cx + u, cy + 4 * u, 'var(--brand)') + dot(cx, cy + 3 * u, 'var(--brand)');
    g += LT(cx - u - 11, cy + 14, '−1') + LT(cx + 3 * u + 11, cy + 14, '3');
    g += LT(cx + u, cy + 4 * u + 17, 'vertex (1, −4)', 'var(--brand)', 10.5);
    g += LT(cx - 42, cy + 3 * u, 'y-int −3', 'var(--brand)', 10.5);
    g += LT(cx + u + 22, 18, 'x = 1', 'var(--faint)');
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.completeSquare = function () {
    var g = '', x0 = 34, y0 = 30, a = 86, b = 28;
    g += '<rect x="' + x0 + '" y="' + y0 + '" width="' + a + '" height="' + a + '" ' + S.fill + '/>';
    g += L(x0 + a / 2, y0 + a / 2, 'x²');
    g += '<rect x="' + (x0 + a) + '" y="' + y0 + '" width="' + b + '" height="' + a + '" ' +
      'fill="var(--brass-tint)" stroke="currentColor" stroke-width="2"/>';
    g += L(x0 + a + b / 2, y0 + a / 2, '3x');
    g += '<rect x="' + x0 + '" y="' + (y0 + a) + '" width="' + a + '" height="' + b + '" ' +
      'fill="var(--brass-tint)" stroke="currentColor" stroke-width="2"/>';
    g += L(x0 + a / 2, y0 + a + b / 2, '3x');
    g += '<rect x="' + (x0 + a) + '" y="' + (y0 + a) + '" width="' + b + '" height="' + b + '" ' +
      'fill="var(--hard-tint)" stroke="var(--hard)" stroke-width="2" stroke-dasharray="5 4"/>';
    g += LT(x0 + a + b / 2, y0 + a + b / 2, '9', 'var(--hard)');
    g += LT(x0 + a / 2, y0 - 13, 'x') + LT(x0 + a + b / 2, y0 - 13, '3');
    g += LT(x0 - 13, y0 + a / 2, 'x') + LT(x0 - 13, y0 + a + b / 2, '3');
    g += LT(248, y0 + 34, 'x² + 6x + 9 = (x + 3)²', 'currentColor', 11);
    g += LT(248, y0 + 62, 'so x² + 6x', 'var(--muted)', 11);
    g += LT(248, y0 + 80, '= (x + 3)² − 9', 'var(--brand)', 12);
    return svg('0 0 340 176', g);
  };

  F.quadSignChart = function () {
    var W = 340, y = 74, x0 = 34, x1 = W - 34;
    var pos = function (v) { return x0 + (v + 3) / 8 * (x1 - x0); };
    var g = line([x0, y], [x1, y], 'stroke="currentColor" stroke-width="1.6"');
    g += '<path d="M' + (x1 - 8) + ' ' + (y - 4) + ' L' + x1 + ' ' + y + ' L' + (x1 - 8) + ' ' +
      (y + 4) + '" fill="none" stroke="currentColor" stroke-width="1.6"/>';
    [[-1, '−1'], [3, '3']].forEach(function (r) {
      g += '<circle cx="' + pos(r[0]).toFixed(1) + '" cy="' + y + '" r="5.5" fill="var(--paper)" ' +
        'stroke="var(--brand)" stroke-width="2.2"/>';
      g += LT(pos(r[0]), y + 20, r[1]);
    });
    g += LT((x0 + pos(-1)) / 2, y - 20, '+', 'var(--easy)', 17);
    g += LT((pos(-1) + pos(3)) / 2, y - 20, '−', 'var(--hard)', 17);
    g += LT((pos(3) + x1) / 2, y - 20, '+', 'var(--easy)', 17);
    g += line([x0 + 4, y - 36], [pos(-1), y - 36], 'stroke="var(--easy)" stroke-width="4" stroke-linecap="round"');
    g += line([pos(-1), y - 36], [pos(3), y - 36], 'stroke="var(--hard)" stroke-width="4" stroke-linecap="round"');
    g += line([pos(3), y - 36], [x1 - 6, y - 36], 'stroke="var(--easy)" stroke-width="4" stroke-linecap="round"');
    g += LT(W / 2, 20, '(x + 1)(x − 3)', 'currentColor', 13);
    g += LT(W / 2, y + 42, 'negative between the roots, positive outside', 'var(--muted)', 10.5);
    return svg('0 0 ' + W + ' 128', g);
  };

  F.mapping = function () {
    var g = '', lx = 76, rx = 248, ty = 26, h = 124;
    g += '<ellipse cx="' + lx + '" cy="' + (ty + h / 2) + '" rx="44" ry="64" fill="var(--brand-tint)" ' +
      'stroke="var(--brand)" stroke-width="1.8"/>';
    g += '<ellipse cx="' + rx + '" cy="' + (ty + h / 2) + '" rx="44" ry="64" fill="var(--brass-tint)" ' +
      'stroke="var(--brass)" stroke-width="1.8"/>';
    var A = [[-38, '1'], [0, '2'], [38, '3']], B = [[-38, '1'], [0, '4'], [38, '9']];
    A.forEach(function (a, i) {
      var ay = ty + h / 2 + a[0], by = ty + h / 2 + B[i][0];
      g += dot(lx, ay) + dot(rx, by);
      g += LT(lx - 17, ay, a[1], 'currentColor', 12.5);
      g += LT(rx + 17, by, B[i][1], 'currentColor', 12.5);
      g += line([lx + 8, ay], [rx - 12, by], 'stroke="var(--faint)" stroke-width="1.5"');
      g += '<path d="M' + (rx - 18) + ' ' + (by - 4) + ' L' + (rx - 10) + ' ' + by + ' L' +
        (rx - 18) + ' ' + (by + 4) + '" fill="none" stroke="var(--faint)" stroke-width="1.5"/>';
    });
    g += LT(lx, ty - 12, 'domain', 'var(--brand)', 11);
    g += LT(rx, ty - 12, 'range', 'var(--brass)', 11);
    g += LT(162, ty + h + 34, 'x ↦ x²', 'currentColor', 13);
    return svg('0 0 340 190', g);
  };

  F.funcMachine = function () {
    var g = '', bx = 110, by = 40, bw = 120, bh = 62;
    g += '<rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + bh + '" rx="8" ' +
      'fill="var(--brand-tint)" stroke="var(--brand)" stroke-width="2"/>';
    g += LT(bx + bw / 2, by + bh / 2 - 9, 'multiply by 3', 'var(--brand)', 11.5);
    g += LT(bx + bw / 2, by + bh / 2 + 9, 'then add 2', 'var(--brand)', 11.5);
    g += arrow([40, by + bh / 2], [bx - 6, by + bh / 2], 'var(--brass)');
    g += arrow([bx + bw + 6, by + bh / 2], [286, by + bh / 2], 'var(--brass)');
    g += LT(26, by + bh / 2 - 17, 'input', 'var(--muted)', 10.5);
    g += L(26, by + bh / 2 + 5, 'x');
    g += LT(310, by + bh / 2 - 17, 'output', 'var(--muted)', 10.5);
    g += LT(310, by + bh / 2 + 6, '3x + 2', 'currentColor', 11);
    g += LT(170, 22, 'f', 'var(--brand)', 15);
    return svg('0 0 340 126', g);
  };

  F.composite = function () {
    var g = '', y = 50, bw = 80, bh = 50;
    [[74, 'g', '× 2', 'var(--brand)', 'var(--brand-tint)'],
     [186, 'f', '+ 5', 'var(--brass)', 'var(--brass-tint)']].forEach(function (b) {
      g += '<rect x="' + b[0] + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="8" fill="' +
        b[4] + '" stroke="' + b[3] + '" stroke-width="2"/>';
      g += LT(b[0] + bw / 2, y + bh / 2, b[2], b[3], 13);
      g += LT(b[0] + bw / 2, y - 11, b[1], b[3], 13.5);
    });
    g += arrow([26, y + bh / 2], [68, y + bh / 2], 'var(--faint)', 2.2);
    g += arrow([160, y + bh / 2], [180, y + bh / 2], 'var(--faint)', 2.2);
    g += arrow([272, y + bh / 2], [310, y + bh / 2], 'var(--faint)', 2.2);
    g += L(20, y + bh / 2 - 15, 'x');
    g += LT(170, y + bh / 2 - 15, '2x', 'var(--muted)', 11.5);
    g += LT(318, y + bh / 2 - 15, '2x + 5', 'currentColor', 11);
    g += LT(170, 22, 'f(g(x)) — g acts first', 'var(--muted)', 11);
    return svg('0 0 340 126', g);
  };

  F.inverseGraph = function () {
    var W = 320, H = 250, cx = 130, cy = 158, u = 25;
    var g = axes(W, H, cx, cy, u, 5);
    g += '<path d="' + curve(function (x) { return 2 * x - 2; }, -1.2, 3.4, cx, cy, u) + '" ' +
      S.arc + ' stroke-width="2.4"/>';
    g += '<path d="' + curve(function (x) { return (x + 2) / 2; }, -4.6, 5.6, cx, cy, u) + '" ' +
      S.arc2 + ' stroke-width="2.4"/>';
    g += '<path d="' + curve(function (x) { return x; }, -4.4, 3.4, cx, cy, u) + '" ' + S.aux + '/>';
    g += LT(66, 20, 'y = 2x − 2', 'var(--brand)', 10.5);
    g += LT(W - 54, 20, 'the inverse', 'var(--brass)', 10.5);
    g += LT(60, 40, 'y = x', 'var(--faint)', 10.5);
    g += dot(cx + 2 * u, cy - 2 * u, 'var(--faint)');
    g += LT(W / 2, H - 6, 'each is the mirror image of the other in y = x', 'var(--muted)', 9.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.evenOdd = function () {
    var W = 340, H = 200, u = 18;
    function panel(ox, f, x0, x1, title, sym) {
      var cx = ox + 78, cy = 106, g = '', i;
      for (i = -3; i <= 3; i++) {
        g += line([cx + i * u, 30], [cx + i * u, H - 30], 'stroke="var(--rule-soft)" stroke-width="1"');
        g += line([ox + 6, cy + i * u], [ox + 150, cy + i * u], 'stroke="var(--rule-soft)" stroke-width="1"');
      }
      g += line([ox + 6, cy], [ox + 150, cy], 'stroke="var(--faint)" stroke-width="1.4"');
      g += line([cx, 30], [cx, H - 30], 'stroke="var(--faint)" stroke-width="1.4"');
      g += '<path d="' + curve(f, x0, x1, cx, cy, u, 0.06) + '" ' + S.arc + ' stroke-width="2.3"/>';
      g += LT(ox + 78, 15, title, 'currentColor', 11.5);
      g += LT(ox + 78, H - 12, sym, 'var(--muted)', 10);
      return g;
    }
    var g = panel(4, function (x) { return 0.5 * x * x - 1.8; }, -2.8, 2.8,
      'even · f(−x) = f(x)', 'mirror in the y-axis');
    g += panel(182, function (x) { return 0.3 * x * x * x - 0.2 * x; }, -2.6, 2.6,
      'odd · f(−x) = −f(x)', 'half-turn about O');
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.monotonic = function () {
    var W = 340, H = 224, cx = 54, cy = 132, u = 32;
    var f = function (x) { return x * x * x / 6 - 1.2 * x + 0.6; };
    var g = axes(W, H, cx, cy, u, 8);
    g += '<path d="' + curve(f, -0.5, 8.0, cx, cy, u, 0.04) + '" ' + S.arc + ' stroke-width="2.4"/>';
    var xs = Math.sqrt(2.4);                       /* f'(x) = x²/2 − 1.2 = 0 */
    g += line([cx + xs * u, 12], [cx + xs * u, H - 30], S.aux);
    g += dot(cx + xs * u, cy - f(xs) * u, 'var(--brass)');
    g += line([cx + 2, H - 22], [cx + xs * u, H - 22], 'stroke="var(--hard)" stroke-width="4" stroke-linecap="round"');
    g += line([cx + xs * u, H - 22], [cx + 7.6 * u, H - 22], 'stroke="var(--easy)" stroke-width="4" stroke-linecap="round"');
    g += LT(cx + xs * u / 2, H - 34, 'decreasing', 'var(--hard)', 10.5);
    g += LT(cx + (xs + 7.6) * u / 2, H - 34, 'increasing', 'var(--easy)', 10.5);
    g += LT(cx + xs * u + 32, 20, 'minimum', 'var(--brass)', 10.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.transformShift = function () {
    var W = 340, H = 226, cx = 148, cy = 152, u = 24;
    var base = function (x) { return x * x; };
    var g = axes(W, H, cx, cy, u, 6);
    g += '<path d="' + curve(base, -2.3, 2.3, cx, cy, u, 0.06) + '" ' +
      'fill="none" stroke="var(--faint)" stroke-width="2"/>';
    g += '<path d="' + curve(function (x) { return base(x) + 2; }, -2.2, 2.2, cx, cy, u, 0.06) + '" ' +
      S.arc + ' stroke-width="2.3"/>';
    g += '<path d="' + curve(function (x) { return base(x - 2); }, -0.2, 4.2, cx, cy, u, 0.06) + '" ' +
      S.arc2 + ' stroke-width="2.3"/>';
    g += LT(58, 20, 'y = f(x) + 2', 'var(--brand)', 10.5);
    g += LT(W - 56, 20, 'y = f(x − 2)', 'var(--brass)', 10.5);
    g += LT(52, 40, 'y = f(x)', 'var(--faint)', 10.5);
    g += arrow([cx + 6, cy - 6], [cx + 6, cy - 2 * u + 4], 'var(--brand)', 2);
    g += arrow([cx + 4, cy + 18], [cx + 2 * u - 4, cy + 18], 'var(--brass)', 2);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.transformStretch = function () {
    var W = 340, H = 226, cx = 168, cy = 154, u = 24;
    var base = function (x) { return x * x; };
    var g = axes(W, H, cx, cy, u, 6);
    g += '<path d="' + curve(base, -2.4, 2.4, cx, cy, u, 0.06) + '" ' +
      'fill="none" stroke="var(--faint)" stroke-width="2"/>';
    g += '<path d="' + curve(function (x) { return 2 * base(x); }, -1.7, 1.7, cx, cy, u, 0.04) + '" ' +
      S.arc + ' stroke-width="2.3"/>';
    g += '<path d="' + curve(function (x) { return base(2 * x); }, -1.2, 1.2, cx, cy, u, 0.03) + '" ' +
      S.arc2 + ' stroke-width="2.3"/>';
    g += LT(52, 20, 'y = 2f(x)', 'var(--brand)', 10.5);
    g += LT(W - 50, 20, 'y = f(2x)', 'var(--brass)', 10.5);
    g += LT(W - 50, 40, 'y = f(x)', 'var(--faint)', 10.5);
    g += LT(W / 2, H - 8, 'stretched away from an axis, or squeezed towards it', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.periodicGraph = function () {
    var W = 340, H = 172, cx = 26, cy = 84, u = 21;
    var g = line([8, cy], [W - 8, cy], 'stroke="var(--faint)" stroke-width="1.4"');
    g += line([cx, 14], [cx, H - 20], 'stroke="var(--faint)" stroke-width="1.4"');
    g += '<path d="' + curve(function (x) { return 2 * Math.sin(x); }, 0, 13.6, cx, cy, u, 0.05) + '" ' +
      S.arc + ' stroke-width="2.4"/>';
    var T = 2 * Math.PI * u;
    g += line([cx, cy + 2.5 * u], [cx + T, cy + 2.5 * u], 'stroke="var(--brass)" stroke-width="2"');
    g += line([cx, cy + 2.2 * u], [cx, cy + 2.8 * u], 'stroke="var(--brass)" stroke-width="2"');
    g += line([cx + T, cy + 2.2 * u], [cx + T, cy + 2.8 * u], 'stroke="var(--brass)" stroke-width="2"');
    g += LT(cx + T / 2, cy + 2.5 * u + 14, 'period T', 'var(--brass)', 11);
    g += LT(W - 52, cy - 2.5 * u, 'f(x + T) = f(x)', 'var(--muted)', 10.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };


  /* ================= Grade 10 · solid geometry ==================
     Cabinet projection: x runs right, y runs up, z recedes up-and-right at
     half scale. One helper builds the projector so every solid on the site
     is drawn from the same viewpoint. */
  function P3(o) {
    var s = o.s, ox = o.ox, oy = o.oy;
    var kx = o.kx === undefined ? 0.5 : o.kx, ky = o.ky === undefined ? 0.32 : o.ky;
    return function (x, y, z) {
      return [+(ox + (x + kx * z) * s).toFixed(2), +(oy - (y + ky * z) * s).toFixed(2)];
    };
  }
  var HID = 'fill="none" stroke="var(--faint)" stroke-width="1.5" stroke-dasharray="5 4"';
  var SOL = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"';

  /* a plane drawn as a parallelogram lying flat */
  function planeQuad(p, x0, x1, z0, z1, style) {
    return poly([p(x0, 0, z0), p(x1, 0, z0), p(x1, 0, z1), p(x0, 0, z1)],
      style || 'fill="var(--brand-tint)" fill-opacity=".7" stroke="var(--brand)" stroke-width="1.6"');
  }

  F.planeAxioms = function () {
    var p = P3({ s: 30, ox: 60, oy: 150 });
    var g = planeQuad(p, 0, 7, 0, 5);
    var A = p(1.4, 0, 1.2), B = p(5.2, 0, 1.6), C = p(3.2, 0, 3.6);
    g += line(A, B, 'stroke="currentColor" stroke-width="2"');
    g += dot(A[0], A[1]) + dot(B[0], B[1]) + dot(C[0], C[1]);
    g += L(A[0] - 12, A[1] + 4, 'A') + L(B[0] + 12, B[1] + 4, 'B') + L(C[0], C[1] - 14, 'C');
    g += LT(250, 40, 'three points not on', 'var(--muted)', 11);
    g += LT(250, 56, 'one line fix a plane', 'var(--muted)', 11);
    g += L(p(6.4, 0, 4.4)[0], p(6.4, 0, 4.4)[1], 'α', 'var(--brand)');
    return svg('0 0 340 180', g);
  };

  F.linePlanePos = function () {
    var g = '', W = 340;
    [[0, 'in the plane'], [1, 'meets it at a point'], [2, 'parallel to it']].forEach(function (c) {
      var ox = 14 + c[0] * 108;
      var p = P3({ s: 15, ox: ox + 12, oy: 104 });
      g += planeQuad(p, 0, 5, 0, 4);
      if (c[0] === 0) {
        g += line(p(0.4, 0, 1), p(4.6, 0, 3), 'stroke="currentColor" stroke-width="2.2"');
      } else if (c[0] === 1) {
        g += line(p(1.2, -2.2, 1.4), p(3.4, 2.6, 2.6), 'stroke="currentColor" stroke-width="2.2"');
        var M = p(2.3, 0.2, 2);
        g += dot(M[0], M[1], 'var(--brass)');
      } else {
        g += line(p(0.6, 2.2, 1), p(4.4, 2.2, 3), 'stroke="currentColor" stroke-width="2.2"');
      }
      g += LT(ox + 48, 130, c[1], 'var(--muted)', 10);
    });
    g += LT(W / 2, 20, 'a line and a plane', 'currentColor', 12);
    return svg('0 0 ' + W + ' 146', g);
  };

  /* the standard labelled cube ABCD A1B1C1D1 */
  function cubeParts(p, a) {
    var A = p(0, 0, 0), B = p(a, 0, 0), C = p(a, 0, a), D = p(0, 0, a);
    var A1 = p(0, a, 0), B1 = p(a, a, 0), C1 = p(a, a, a), D1 = p(0, a, a);
    return { A: A, B: B, C: C, D: D, A1: A1, B1: B1, C1: C1, D1: D1 };
  }
  function cubeEdges(v) {
    var g = '';
    /* hidden: the three edges meeting at D */
    g += line(v.D, v.A, HID) + line(v.D, v.C, HID) + line(v.D, v.D1, HID);
    g += line(v.A, v.B, SOL) + line(v.B, v.C, SOL);
    g += line(v.A1, v.B1, SOL) + line(v.B1, v.C1, SOL) + line(v.C1, v.D1, SOL) + line(v.D1, v.A1, SOL);
    g += line(v.A, v.A1, SOL) + line(v.B, v.B1, SOL) + line(v.C, v.C1, SOL);
    return g;
  }
  function cubeLabels(v) {
    return L(v.A[0] - 11, v.A[1] + 9, 'A') + L(v.B[0] + 6, v.B[1] + 12, 'B') +
      L(v.C[0] + 13, v.C[1] + 4, 'C') + L(v.D[0] - 12, v.D[1] + 2, 'D') +
      L(v.A1[0] - 12, v.A1[1] - 2, 'A₁') + L(v.B1[0] + 4, v.B1[1] + 12, 'B₁') +
      L(v.C1[0] + 14, v.C1[1] - 2, 'C₁') + L(v.D1[0] - 12, v.D1[1] - 8, 'D₁');
  }

  F.cubeLabelled = function () {
    var p = P3({ s: 26, ox: 62, oy: 176 }), v = cubeParts(p, 3.2);
    var g = cubeEdges(v) + cubeLabels(v);
    g += LT(272, 84, 'eight vertices', 'var(--muted)', 11);
    g += LT(272, 104, 'twelve edges', 'var(--muted)', 11);
    g += LT(272, 124, 'six faces', 'var(--muted)', 11);
    return svg('0 0 340 200', g);
  };

  F.prismPyramid = function () {
    var g = '';
    var p = P3({ s: 26, ox: 40, oy: 158, ky: 0.46 });
    /* triangular prism */
    var a = p(0, 0, 0), b = p(3, 0, 0), c = p(1.5, 0, 2.6);
    var a1 = p(0, 2.8, 0), b1 = p(3, 2.8, 0), c1 = p(1.5, 2.8, 2.6);
    g += line(c, a, HID) + line(c, b, HID) + line(c, c1, HID);
    g += line(a, b, SOL) + line(a, a1, SOL) + line(b, b1, SOL);
    g += poly([a1, b1, c1], 'fill="var(--brand-tint)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"');
    g += LT(52, 190, 'prism', 'var(--muted)', 11.5);
    /* square pyramid */
    var q = P3({ s: 26, ox: 196, oy: 158, ky: 0.46 });
    var A = q(0, 0, 0), B = q(3, 0, 0), C = q(3, 0, 2.6), D = q(0, 0, 2.6), S1 = q(1.5, 3.2, 1.3);
    g += line(D, A, HID) + line(D, C, HID) + line(D, S1, HID);
    g += line(A, B, SOL) + line(B, C, SOL);
    g += poly([A, B, S1], 'fill="var(--brass-tint)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"');
    g += line(B, S1, SOL) + line(C, S1, SOL) + line(A, S1, SOL) + line(B, C, SOL);
    g += dot(S1[0], S1[1], 'var(--brass)');
    g += LT(216, 190, 'pyramid', 'var(--muted)', 11.5);
    return svg('0 0 340 206', g);
  };

  F.cubeSection = function () {
    var p = P3({ s: 26, ox: 62, oy: 178 }), v = cubeParts(p, 3.2);
    var g = cubeEdges(v);
    /* the plane through A, B1 and D1 */
    g += poly([v.A, v.B1, v.D1],
      'fill="var(--brass-tint)" fill-opacity=".85" stroke="var(--brass)" stroke-width="2.2" stroke-linejoin="round"');
    g += cubeLabels(v);
    g += LT(274, 84, 'the section', 'var(--brass)', 11);
    g += LT(274, 104, 'A B₁ D₁ is', 'var(--brass)', 11);
    g += LT(274, 124, 'an equilateral', 'var(--brass)', 11);
    g += LT(274, 144, 'triangle', 'var(--brass)', 11);
    return svg('0 0 340 206', g);
  };

  F.skewLines = function () {
    var p = P3({ s: 26, ox: 62, oy: 178 }), v = cubeParts(p, 3.2);
    var g = cubeEdges(v);
    g += line(v.A, v.B, 'stroke="var(--brand)" stroke-width="3.4" stroke-linecap="round"');
    g += line(v.C1, v.D1, 'stroke="var(--brass)" stroke-width="3.4" stroke-linecap="round"');
    g += cubeLabels(v);
    g += LT(272, 84, 'AB and C₁D₁', 'currentColor', 11);
    g += LT(272, 104, 'never meet and', 'var(--muted)', 10.5);
    g += LT(272, 122, 'are not parallel:', 'var(--muted)', 10.5);
    g += LT(272, 142, 'they are skew', 'var(--brand)', 11);
    return svg('0 0 340 206', g);
  };

  F.trig3dBox = function () {
    var p = P3({ s: 24, ox: 46, oy: 172 });
    var a = 3.4, b = 2.4, c = 2.2;
    var A = p(0, 0, 0), B = p(a, 0, 0), C = p(a, 0, c), D = p(0, 0, c);
    var A1 = p(0, b, 0), B1 = p(a, b, 0), C1 = p(a, b, c), D1 = p(0, b, c);
    var g = line(D, A, HID) + line(D, C, HID) + line(D, D1, HID);
    g += line(A, B, SOL) + line(B, C, SOL);
    g += line(A1, B1, SOL) + line(B1, C1, SOL) + line(C1, D1, SOL) + line(D1, A1, SOL);
    g += line(A, A1, SOL) + line(B, B1, SOL) + line(C, C1, SOL);
    g += line(A, C, 'stroke="var(--brass)" stroke-width="2.2" stroke-dasharray="5 4"');
    g += line(A, C1, 'stroke="var(--brand)" stroke-width="2.8"');
    g += ang(A, C, C1, 20, S.arc);
    g += L(A[0] - 11, A[1] + 8, 'A') + L(C[0] + 12, C[1] + 4, 'C') + L(C1[0] + 13, C1[1] - 4, 'C₁');
    g += LT(96, 196, 'space diagonal AC₁', 'var(--brand)', 10);
    g += LT(A[0] + 34, A[1] - 12, 'θ', 'var(--brand)', 12);
    g += LT(258, 66, 'the angle a space', 'var(--muted)', 10.5);
    g += LT(258, 84, 'diagonal makes with', 'var(--muted)', 10.5);
    g += LT(258, 102, 'the base is the angle', 'var(--muted)', 10.5);
    g += LT(258, 120, 'θ in triangle ACC₁', 'currentColor', 10.5);
    return svg('0 0 340 210', g);
  };

  F.sineCosRule = function () {
    var A = [56, 168], B = [268, 168], C = [176, 44];
    var g = poly([A, B, C], S.fill);
    g += L((A[0] + B[0]) / 2, A[1] + 18, 'c') + L((B[0] + C[0]) / 2 + 14, (B[1] + C[1]) / 2, 'a');
    g += L((A[0] + C[0]) / 2 - 14, (A[1] + C[1]) / 2, 'b');
    g += ang(A, B, C, 24, S.arc) + ang(B, C, A, 24, S.arc) + ang(C, A, B, 24, S.arc);
    g += L(A[0] + 30, A[1] - 12, 'A') + L(B[0] - 30, B[1] - 12, 'B') + L(C[0], C[1] + 30, 'C');
    g += LT(170, 200, 'a / sin A  =  b / sin B  =  c / sin C', 'var(--brand)', 11);
    g += LT(170, 220, 'a² = b² + c² − 2bc·cos A', 'var(--brass)', 11);
    return svg('0 0 340 236', g);
  };


  /* ================= Grade 11 · the derivative ================= */

  F.secantToTangent = function () {
    var W = 340, H = 240, cx = 40, cy = 200, u = 30;
    var f = function (x) { return 0.42 * x * x + 0.3; };
    var g = axes(W, H, cx, cy, u, 9);
    g += '<path d="' + curve(f, -0.4, 5.6, cx, cy, u, 0.04) + '" ' + S.arc + ' stroke-width="2.4"/>';
    var x0 = 1.6, P = [cx + x0 * u, cy - f(x0) * u];
    /* three secants closing on the tangent */
    [[3.4, .30], [2.6, .48], [2.0, .70]].forEach(function (q) {
      var x1 = q[0], Q = [cx + x1 * u, cy - f(x1) * u];
      var m = (f(x1) - f(x0)) / (x1 - x0);
      var xa = -0.3, xb = 5.4;
      g += line([cx + xa * u, cy - (f(x0) + m * (xa - x0)) * u],
                [cx + xb * u, cy - (f(x0) + m * (xb - x0)) * u],
                'stroke="var(--faint)" stroke-width="1.4" opacity="' + q[1] + '"');
      g += dot(Q[0], Q[1], 'var(--faint)');
    });
    var mt = 2 * 0.42 * x0;
    g += line([cx + (-0.3) * u, cy - (f(x0) + mt * (-0.3 - x0)) * u],
              [cx + 5.4 * u, cy - (f(x0) + mt * (5.4 - x0)) * u],
              'stroke="var(--brass)" stroke-width="2.6"');
    g += dot(P[0], P[1], 'var(--brand)');
    g += L(P[0] - 14, P[1] + 6, 'P');
    g += LT(W - 66, 22, 'secants', 'var(--faint)', 11);
    g += LT(W - 66, 40, 'the tangent', 'var(--brass)', 11);
    g += LT(W / 2, H - 6, 'as Q slides towards P the secant becomes the tangent', 'var(--muted)', 9);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.incrementXY = function () {
    var W = 340, H = 230, cx = 46, cy = 190, u = 34;
    var f = function (x) { return 0.4 * x * x + 0.5; };
    var g = axes(W, H, cx, cy, u, 8);
    g += '<path d="' + curve(f, -0.3, 5.2, cx, cy, u, 0.04) + '" ' + S.arc + ' stroke-width="2.4"/>';
    var x0 = 1.5, x1 = 3.4;
    var P = [cx + x0 * u, cy - f(x0) * u], Q = [cx + x1 * u, cy - f(x1) * u];
    g += line(P, [Q[0], P[1]], 'stroke="var(--brass)" stroke-width="2.2"');
    g += line([Q[0], P[1]], Q, 'stroke="var(--brand)" stroke-width="2.2"');
    g += line(P, Q, 'stroke="var(--faint)" stroke-width="1.6"');
    g += dot(P[0], P[1]) + dot(Q[0], Q[1]);
    g += L(P[0] - 13, P[1] - 6, 'P') + L(Q[0] + 13, Q[1] - 6, 'Q');
    g += LT((P[0] + Q[0]) / 2, P[1] + 16, 'Δx', 'var(--brass)', 12);
    g += LT(Q[0] + 20, (P[1] + Q[1]) / 2, 'Δy', 'var(--brand)', 12);
    g += line([cx + x0 * u, cy], [cx + x0 * u, P[1]], S.aux);
    g += line([cx + x1 * u, cy], [cx + x1 * u, Q[1]], S.aux);
    g += LT(cx + x0 * u, cy + 14, 'x', 'var(--muted)', 11);
    g += LT(cx + x1 * u, cy + 14, 'x + Δx', 'var(--muted)', 10);
    g += LT(W - 58, 26, 'gradient of PQ', 'var(--muted)', 10);
    g += LT(W - 58, 44, '= Δy / Δx', 'currentColor', 11);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.derivativeSign = function () {
    var W = 340, H = 250, cx = 46, cy = 118, u = 30;
    var f = function (x) { return (x * x * x) / 9 - x + 1.2; };
    var g = '';
    var i;
    for (i = 0; i <= 8; i++) g += line([cx + i * u, 16], [cx + i * u, 176], 'stroke="var(--rule-soft)" stroke-width="1"');
    g += line([cx - 10, cy], [W - 14, cy], 'stroke="var(--faint)" stroke-width="1.4"');
    g += line([cx, 16], [cx, 176], 'stroke="var(--faint)" stroke-width="1.4"');
    g += '<path d="' + curve(f, -0.3, 8.0, cx, cy, u, 0.04) + '" ' + S.arc + ' stroke-width="2.4"/>';
    var r = Math.sqrt(3);            /* f'(x) = x²/3 − 1 = 0 at x = ±√3 */
    g += dot(cx + r * u, cy - f(r) * u, 'var(--brass)');
    g += line([cx + r * u, 16], [cx + r * u, 200], S.aux);
    /* the sign line for f' */
    var y = 212;
    g += line([cx, y], [W - 18, y], 'stroke="currentColor" stroke-width="1.5"');
    g += line([cx, y], [cx + r * u, y], 'stroke="var(--hard)" stroke-width="4" stroke-linecap="round"');
    g += line([cx + r * u, y], [W - 22, y], 'stroke="var(--easy)" stroke-width="4" stroke-linecap="round"');
    g += LT(cx + r * u, y + 18, '√3', 'var(--brass)', 11);
    g += LT(cx + r * u / 2, y - 14, "f ′ < 0", 'var(--hard)', 11);
    g += LT(cx + (r * u + W - 22) / 2, y - 14, "f ′ > 0", 'var(--easy)', 11);
    g += LT(cx - 24, y, "f ′", 'currentColor', 11);
    g += LT(W - 60, 30, 'minimum where', 'var(--muted)', 10);
    g += LT(W - 60, 46, "f ′ changes sign", 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.tangentNormalFig = function () {
    var W = 340, H = 236, cx = 60, cy = 190, u = 34;
    var f = function (x) { return 0.36 * x * x + 0.4; };
    var g = axes(W, H, cx, cy, u, 8);
    g += '<path d="' + curve(f, -0.4, 4.4, cx, cy, u, 0.04) + '" ' + S.arc + ' stroke-width="2.4"/>';
    var x0 = 2, m = 2 * 0.36 * x0, P = [cx + x0 * u, cy - f(x0) * u];
    function ln(mm, col, wdt, xa, xb) {
      return line([cx + xa * u, cy - (f(x0) + mm * (xa - x0)) * u],
                  [cx + xb * u, cy - (f(x0) + mm * (xb - x0)) * u],
                  'stroke="' + col + '" stroke-width="' + wdt + '"');
    }
    g += ln(m, 'var(--brass)', 2.6, 0.2, 4.2);
    g += ln(-1 / m, 'var(--hard)', 2.4, 0.4, 3.9);
    g += right(P, [P[0] + 14, P[1] - 14 * m], [P[0] - 14, P[1] + 14 / m], 11);
    g += dot(P[0], P[1], 'var(--brand)');
    g += L(P[0] + 4, P[1] + 18, 'P');
    g += LT(W - 52, 24, 'tangent', 'var(--brass)', 11);
    g += LT(W - 52, 42, 'normal', 'var(--hard)', 11);
    g += LT(W / 2, H - 6, 'the normal is perpendicular: its gradient is −1/m', 'var(--muted)', 9.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.stationaryTypes = function () {
    var W = 340, H = 176, u = 17;
    function panel(ox, f, x0, x1, title) {
      var cx = ox + 52, cy = 96, g = '';
      g += line([ox + 6, cy], [ox + 100, cy], 'stroke="var(--faint)" stroke-width="1.3"');
      g += '<path d="' + curve(f, x0, x1, cx, cy, u, 0.05) + '" ' + S.arc + ' stroke-width="2.3"/>';
      g += dot(cx, cy - f(0) * u, 'var(--brass)');
      g += line([ox + 18, cy - f(0) * u], [ox + 86, cy - f(0) * u], S.aux);
      g += LT(ox + 52, 24, title, 'currentColor', 11);
      return g;
    }
    var g = panel(4, function (x) { return -x * x + 1.6; }, -2.1, 2.1, 'maximum');
    g += panel(116, function (x) { return x * x - 1.6; }, -2.1, 2.1, 'minimum');
    g += panel(230, function (x) { return x * x * x / 3; }, -2.3, 2.3, 'inflection');
    g += LT(W / 2, H - 12, 'at each one the derivative is zero', 'var(--muted)', 10.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  F.optimBox = function () {
    var g = '', x0 = 24, y0 = 40, w = 132, h = 96, c = 26;
    g += '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" ' +
      'fill="var(--surface-2)" stroke="currentColor" stroke-width="2"/>';
    [[x0, y0], [x0 + w - c, y0], [x0, y0 + h - c], [x0 + w - c, y0 + h - c]].forEach(function (q) {
      g += '<rect x="' + q[0] + '" y="' + q[1] + '" width="' + c + '" height="' + c + '" ' +
        'fill="var(--hard-tint)" stroke="var(--hard)" stroke-width="1.8" stroke-dasharray="4 3"/>';
    });
    g += LT(x0 + c / 2, y0 + c / 2, 'x', 'var(--hard)', 11);
    g += LT(x0 + w / 2, y0 - 12, 'a', 'var(--muted)', 11);
    g += LT(x0 - 12, y0 + h / 2, 'b', 'var(--muted)', 11);
    /* the folded box */
    var p = P3({ s: 22, ox: 210, oy: 132, ky: 0.42 });
    var bw = 3.2, bd = 2.2, bh = 1.1;
    var A = p(0, 0, 0), B = p(bw, 0, 0), C = p(bw, 0, bd), D = p(0, 0, bd);
    var A1 = p(0, bh, 0), B1 = p(bw, bh, 0), C1 = p(bw, bh, bd), D1 = p(0, bh, bd);
    g += line(D, A, HID) + line(D, C, HID) + line(D, D1, HID);
    g += line(A, B, SOL) + line(B, C, SOL);
    g += line(A1, B1, SOL) + line(B1, C1, SOL) + line(C1, D1, SOL) + line(D1, A1, SOL);
    g += line(A, A1, SOL) + line(B, B1, SOL) + line(C, C1, SOL);
    g += LT(252, 152, 'V = x(a − 2x)(b − 2x)', 'var(--brand)', 10);
    g += LT(96, 176, 'cut a square x from each corner', 'var(--muted)', 9.5);
    return svg('0 0 340 190', g);
  };

  F.modulusGraphV = function () {
    var W = 320, H = 210, cx = 120, cy = 168, u = 26;
    var g = axes(W, H, cx, cy, u, 5);
    g += '<path d="' + curve(function (x) { return Math.abs(2 * x - 4); }, -1.2, 5.2, cx, cy, u, 0.02) + '" ' +
      S.arc + ' stroke-width="2.5"/>';
    g += '<path d="' + curve(function (x) { return 2 * x - 4; }, -1.2, 2, cx, cy, u, 0.1) + '" ' + S.aux + '/>';
    g += dot(cx + 2 * u, cy, 'var(--brass)');
    g += LT(cx + 2 * u + 12, cy + 15, '2', 'var(--brass)');
    g += LT(W - 62, 24, 'y = | 2x − 4 |', 'var(--brand)', 11);
    g += LT(W / 2, H - 6, 'below the axis the graph is reflected upwards', 'var(--muted)', 9.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* ================= Grade 11 · coordinates and vectors in space ========= */

  function axes3d(p, n) {
    var O = p(0, 0, 0);
    var g = line(O, p(n, 0, 0), 'stroke="var(--faint)" stroke-width="1.6"');
    g += line(O, p(0, n, 0), 'stroke="var(--faint)" stroke-width="1.6"');
    g += line(O, p(0, 0, n), 'stroke="var(--faint)" stroke-width="1.6"');
    g += LT(p(n, 0, 0)[0] + 10, p(n, 0, 0)[1] + 4, 'x', 'var(--muted)');
    g += LT(p(0, n, 0)[0] - 4, p(0, n, 0)[1] - 11, 'z', 'var(--muted)');
    g += LT(p(0, 0, n)[0] + 9, p(0, 0, n)[1] - 6, 'y', 'var(--muted)');
    g += LT(O[0] - 11, O[1] + 10, 'O', 'var(--muted)');
    return g;
  }

  F.point3d = function () {
    var p = P3({ s: 26, ox: 74, oy: 178, ky: 0.4 });
    var g = axes3d(p, 4.4);
    var X = 3, Y = 2.4, Z = 2.6;                    /* screen y is the vertical axis */
    var M = p(X, 0, Z), Q = p(X, Y, Z);
    g += line(p(X, 0, 0), M, HID) + line(p(0, 0, Z), M, HID) + line(M, Q, HID);
    g += line(p(0, 0, 0), Q, 'stroke="var(--brand)" stroke-width="2.4"');
    g += dot(Q[0], Q[1], 'var(--brand)') + dot(M[0], M[1], 'var(--faint)');
    g += L(Q[0] + 16, Q[1] - 6, 'M');
    g += LT(Q[0] + 26, Q[1] + 16, '(x, y, z)', 'var(--muted)', 10);
    g += LT(272, 154, 'three coordinates', 'var(--muted)', 10);
    g += LT(272, 172, 'fix a point in space', 'var(--muted)', 10);
    return svg('0 0 340 200', g);
  };

  F.dist3d = function () {
    var p = P3({ s: 26, ox: 62, oy: 178, ky: 0.4 });
    var a = 3.2, b = 2.2, c = 2.4;
    var A = p(0, 0, 0), B = p(a, 0, 0), C = p(a, 0, c), D = p(0, 0, c);
    var A1 = p(0, b, 0), B1 = p(a, b, 0), C1 = p(a, b, c), D1 = p(0, b, c);
    var g = line(D, A, HID) + line(D, C, HID) + line(D, D1, HID);
    g += line(A, B, SOL) + line(B, C, SOL);
    g += line(A1, B1, SOL) + line(B1, C1, SOL) + line(C1, D1, SOL) + line(D1, A1, SOL);
    g += line(A, A1, SOL) + line(B, B1, SOL) + line(C, C1, SOL);
    g += line(A, C, 'stroke="var(--brass)" stroke-width="2" stroke-dasharray="5 4"');
    g += line(A, C1, 'stroke="var(--brand)" stroke-width="2.8"');
    g += dot(A[0], A[1]) + dot(C1[0], C1[1]);
    g += L(A[0] - 11, A[1] + 8, 'A') + L(C1[0] + 13, C1[1] - 4, 'B');
    g += LT(170, 202, 'AB = √(Δx² + Δy² + Δz²)', 'var(--brand)', 11);
    g += LT(268, 56, 'Pythagoras', 'var(--muted)', 10.5);
    g += LT(268, 74, 'used twice', 'var(--muted)', 10.5);
    return svg('0 0 340 208', g);
  };

  F.vec3d = function () {
    var p = P3({ s: 26, ox: 76, oy: 172, ky: 0.4 });
    var g = axes3d(p, 4.2);
    var X = 2.8, Y = 2.2, Z = 2.4;
    var O = p(0, 0, 0), Q = p(X, Y, Z);
    g += line(O, p(X, 0, 0), 'stroke="var(--brass)" stroke-width="2"');
    g += line(p(X, 0, 0), p(X, 0, Z), 'stroke="var(--brass)" stroke-width="2"');
    g += line(p(X, 0, Z), Q, 'stroke="var(--brass)" stroke-width="2"');
    g += arrow(O, Q, 'var(--brand)', 2.8);
    g += dot(Q[0], Q[1], 'var(--brand)');
    g += LT(p(X / 2, 0, 0)[0], p(X / 2, 0, 0)[1] + 14, 'a₁', 'var(--brass)', 11);
    g += LT(p(X, 0, Z / 2)[0] + 14, p(X, 0, Z / 2)[1] + 6, 'a₂', 'var(--brass)', 11);
    g += LT(p(X, Y / 2, Z)[0] + 14, p(X, Y / 2, Z)[1], 'a₃', 'var(--brass)', 11);
    g += LT(250, 34, 'a = (a₁, a₂, a₃)', 'currentColor', 11);
    g += LT(250, 54, '| a | = √(a₁² + a₂² + a₃²)', 'var(--brand)', 9);
    return svg('0 0 340 196', g);
  };

  F.scalarAngle = function () {
    var O = [96, 176], A = [258, 132], B = [166, 44];
    var g = arrow(O, A, 'var(--brand)', 2.8) + arrow(O, B, 'var(--brass)', 2.8);
    g += ang(O, A, B, 34, S.arc);
    g += L(A[0] + 12, A[1] + 4, 'a') + L(B[0] - 2, B[1] - 12, 'b');
    g += LT(O[0] + 46, O[1] - 26, 'θ', 'var(--brand)', 13);
    g += LT(170, 208, 'a · b = |a| |b| cos θ = a₁b₁ + a₂b₂ + a₃b₃', 'var(--brand)', 10.5);
    g += LT(170, 228, 'perpendicular exactly when a · b = 0', 'var(--muted)', 10);
    return svg('0 0 340 242', g);
  };

  F.reflectInPlane = function () {
    var p = P3({ s: 28, ox: 54, oy: 128, ky: 0.34 });
    var g = planeQuad(p, 0, 6.4, 0, 4.2);
    var M = p(2.6, 2.0, 2.0), F = p(2.6, 0, 2.0), M1 = p(2.6, -2.0, 2.0);
    g += line(M, M1, 'stroke="var(--brass)" stroke-width="1.8" stroke-dasharray="5 4"');
    g += dot(M[0], M[1], 'var(--brand)') + dot(M1[0], M1[1], 'var(--brand)') + dot(F[0], F[1], 'var(--brass)');
    g += ticks(M, F, 1) + ticks(F, M1, 1);
    g += L(M[0] + 14, M[1], 'M') + L(M1[0] + 16, M1[1], 'M′') + L(F[0] - 14, F[1] + 2, 'F');
    g += LT(266, 52, 'the plane bisects', 'var(--muted)', 10.5);
    g += LT(266, 70, 'MM′ at right angles', 'var(--muted)', 10.5);
    g += L(p(5.8, 0, 3.6)[0], p(5.8, 0, 3.6)[1], 'α', 'var(--brand)');
    return svg('0 0 340 210', g);
  };

  F.similarSolids = function () {
    var g = '';
    var p = P3({ s: 20, ox: 40, oy: 150, ky: 0.42 });
    var q = P3({ s: 20, ox: 178, oy: 150, ky: 0.42 });
    function box(pr, a, b, c, fillCol) {
      var A = pr(0, 0, 0), B = pr(a, 0, 0), C = pr(a, 0, c), D = pr(0, 0, c);
      var A1 = pr(0, b, 0), B1 = pr(a, b, 0), C1 = pr(a, b, c), D1 = pr(0, b, c);
      var o = line(D, A, HID) + line(D, C, HID) + line(D, D1, HID);
      o += poly([A1, B1, C1, D1], 'fill="' + fillCol + '" stroke="currentColor" stroke-width="2" stroke-linejoin="round"');
      o += line(A, B, SOL) + line(B, C, SOL);
      o += line(A, A1, SOL) + line(B, B1, SOL) + line(C, C1, SOL);
      return o;
    }
    g += box(p, 2, 1.4, 1.4, 'var(--brand-tint)');
    g += box(q, 4, 2.8, 2.8, 'var(--brass-tint)');
    g += LT(64, 176, 'k = 1', 'var(--muted)', 11);
    g += LT(232, 176, 'k = 2', 'var(--muted)', 11);
    g += LT(170, 200, 'lengths ×k · areas ×k² · volumes ×k³', 'var(--brand)', 11);
    return svg('0 0 340 216', g);
  };

  F.lineVectorEq = function () {
    var p = P3({ s: 26, ox: 66, oy: 168, ky: 0.4 });
    var g = axes3d(p, 4.2);
    var A = p(1.2, 0.6, 1.0), B = p(3.4, 2.4, 2.6);
    var far = p(4.3, 3.15, 3.25), near = p(0.32, -0.32, 0.2);
    g += line(near, far, 'stroke="var(--faint)" stroke-width="1.6" stroke-dasharray="6 4"');
    g += arrow(p(0, 0, 0), A, 'var(--brand)', 2.6);
    g += arrow(A, B, 'var(--brass)', 2.6);
    g += dot(A[0], A[1], 'var(--brand)') + dot(B[0], B[1], 'var(--brass)');
    g += L(A[0] - 13, A[1] - 6, 'A') + L(B[0] + 13, B[1] - 4, 'B');
    g += LT(p(0.6, 0.3, 0.5)[0] - 12, p(0.6, 0.3, 0.5)[1] + 10, 'a', 'var(--brand)', 12);
    g += LT((A[0] + B[0]) / 2 - 12, (A[1] + B[1]) / 2 - 10, 'b', 'var(--brass)', 12);
    g += LT(264, 150, 'r = a + t b', 'currentColor', 12);
    g += LT(264, 170, 'one t for every', 'var(--muted)', 10);
    g += LT(264, 186, 'point of the line', 'var(--muted)', 10);
    return svg('0 0 340 196', g);
  };

  /* ---------- Grade 10 Quarter II: parallelism and projection ---------- */

  /* two parallel planes, and a third plane cutting both in parallel lines */
  F.parallelPlanes = function () {
    var g = '', p = P3({ s: 17, ox: 40, oy: 130 });
    var lo = planeQuad(p, 0, 7, 0, 4);
    var hiStyle = 'fill="var(--brass-tint)" fill-opacity=".75" stroke="var(--brass)" stroke-width="1.6"';
    var hi = poly([p(0, 4.4, 0), p(7, 4.4, 0), p(7, 4.4, 4), p(0, 4.4, 4)], hiStyle);
    g += lo + hi;
    /* the cutting plane meets each in a line, and the two lines are parallel */
    g += line(p(1, 0, 0.6), p(5.6, 0, 3.4), 'stroke="currentColor" stroke-width="2.2"');
    g += line(p(1, 4.4, 0.6), p(5.6, 4.4, 3.4), 'stroke="currentColor" stroke-width="2.2"');
    g += line(p(1, 0, 0.6), p(1, 4.4, 0.6), HID);
    g += line(p(5.6, 0, 3.4), p(5.6, 4.4, 3.4), HID);
    g += L(p(0, 0, 0)[0] - 16, p(0, 0, 0)[1] + 4, 'α');
    g += L(p(0, 4.4, 0)[0] - 16, p(0, 4.4, 0)[1] + 4, 'β');
    g += LT(170, 176, 'α ∥ β — a third plane cuts them in parallel lines', 'var(--muted)', 10);
    return svg('0 0 340 190', g);
  };

  /* parallel projection of a segment onto a plane, with the ratio preserved */
  F.parallelProjection = function () {
    var g = '', p = P3({ s: 18, ox: 44, oy: 150 });
    g += planeQuad(p, 0, 7, 0, 4);
    var A = p(1.2, 3.4, 0.6), B = p(5.4, 2.0, 3.0);
    var A1 = p(1.2, 0, 0.6), B1 = p(5.4, 0, 3.0);
    var M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
    var M1 = [(A1[0] + B1[0]) / 2, (A1[1] + B1[1]) / 2];
    g += line(A, B, 'stroke="currentColor" stroke-width="2.4"');
    g += line(A1, B1, 'stroke="var(--brass)" stroke-width="2.4"');
    g += line(A, A1, HID) + line(B, B1, HID) + line(M, M1, HID);
    g += dot(A[0], A[1]) + dot(B[0], B[1]) + dot(M[0], M[1], 'var(--brand)');
    g += dot(A1[0], A1[1], 'var(--brass)') + dot(B1[0], B1[1], 'var(--brass)') +
         dot(M1[0], M1[1], 'var(--brass)');
    g += L(A[0] - 11, A[1] - 4, 'A') + L(B[0] + 11, B[1] - 4, 'B') + L(M[0], M[1] - 13, 'M');
    g += L(A1[0] - 15, A1[1] - 5, 'A′') + L(B1[0] + 14, B1[1] - 3, 'B′') + L(M1[0], M1[1] + 15, 'M′');
    g += LT(170, 186, 'the midpoint projects to the midpoint', 'var(--muted)', 10);
    return svg('0 0 340 198', g);
  };

  /* the three positions of two planes, side by side */
  F.planePlanePos = function () {
    var g = '', W = 340;
    var pa = P3({ s: 12, ox: 46, oy: 96 });
    g += planeQuad(pa, 0, 5, 0, 4);
    g += poly([pa(0, 3, 0), pa(5, 3, 0), pa(5, 3, 4), pa(0, 3, 4)],
      'fill="var(--brass-tint)" fill-opacity=".8" stroke="var(--brass)" stroke-width="1.5"');
    g += LT(60, 124, 'parallel', 'var(--muted)', 10);

    var pb = P3({ s: 12, ox: 168, oy: 96 });
    g += planeQuad(pb, 0, 5, 0, 4);
    g += poly([pb(0.4, -1.6, 3.4), pb(4.6, -1.6, 0.6), pb(4.6, 2.6, 0.6), pb(0.4, 2.6, 3.4)],
      'fill="var(--brass-tint)" fill-opacity=".7" stroke="var(--brass)" stroke-width="1.5"');
    g += line(pb(0.4, 0, 3.4), pb(4.6, 0, 0.6), 'stroke="currentColor" stroke-width="2.2"');
    g += LT(182, 124, 'meeting in a line', 'var(--muted)', 10);

    var pc = P3({ s: 12, ox: 282, oy: 96 });
    g += planeQuad(pc, 0, 5, 0, 4);
    g += planeQuad(pc, 0, 5, 0, 4,
      'fill="var(--brass-tint)" fill-opacity=".55" stroke="var(--brass)" stroke-width="1.5" stroke-dasharray="4 3"');
    g += LT(296, 124, 'coincident', 'var(--muted)', 10);

    g += LT(W / 2, 18, 'two planes in space', 'currentColor', 12);
    return svg('0 0 ' + W + ' 138', g);
  };

  /* a line parallel to a plane because it is parallel to a line inside it */
  F.lineParallelPlane = function () {
    var g = '', p = P3({ s: 19, ox: 44, oy: 142 });
    g += planeQuad(p, 0, 7, 0, 4);
    var a0 = p(0.8, 0, 0.8), a1 = p(5.8, 0, 3.2);
    g += line(a0, a1, 'stroke="var(--brand)" stroke-width="2.4"');
    var b0 = p(0.8, 2.6, 0.8), b1 = p(5.8, 2.6, 3.2);
    g += line(b0, b1, 'stroke="currentColor" stroke-width="2.4"');
    g += line(a0, b0, HID) + line(a1, b1, HID);
    g += L(b1[0] + 13, b1[1] - 6, 'ℓ');
    g += L(a0[0] - 14, a0[1] - 2, 'm');
    g += L(p(7, 0, 0)[0] + 12, p(7, 0, 0)[1] + 6, 'α');
    g += LT(170, 176, 'ℓ ∥ m and m lies in α, so ℓ ∥ α', 'var(--muted)', 10);
    return svg('0 0 340 190', g);
  };

  /* ---------- Grade 11 Quarter II: approximation and the integral ---------- */

  /* the tangent as a local linear approximation to y = x² near x = 2 */
  F.linearApprox = function () {
    var W = 340, H = 224, cx = 40, cy = 172, u = 30;
    var g = '';
    for (var i = 0; i <= 9; i++) {
      g += line([cx + i * u * 0.5, 8], [cx + i * u * 0.5, H - 26],
        'stroke="var(--rule-soft)" stroke-width="1"');
    }
    for (var j = 0; j <= 5; j++) {
      g += line([12, cy - j * u], [W - 10, cy - j * u], 'stroke="var(--rule-soft)" stroke-width="1"');
    }
    /* vertical grid stops above the caption */
    g += line([12, cy], [W - 10, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 8], [cx, H - 26], 'stroke="var(--faint)" stroke-width="1.5"');
    var f = function (x) { return 0.55 * x * x; };
    g += '<path d="' + curve(f, 0, 3.05, cx, cy, u, 0.05) +
      '" fill="none" stroke="currentColor" stroke-width="2.4"/>';
    /* tangent at x = 2:  y = f(2) + f'(2)(x − 2) */
    var a = 2, fa = f(a), d = 1.1 * a;
    var t = function (x) { return fa + d * (x - a); };
    g += '<path d="' + curve(t, 1.0, 3.0, cx, cy, u, 0.1) +
      '" fill="none" stroke="var(--brass)" stroke-width="2.2" stroke-dasharray="6 4"/>';
    var P = [cx + a * u, cy - fa * u];
    g += dot(P[0], P[1], 'var(--brass)');
    /* the error between curve and tangent at x = 2.8 */
    var b = 2.8;
    var Q = [cx + b * u, cy - f(b) * u], R = [cx + b * u, cy - t(b) * u];
    g += line(Q, R, 'stroke="var(--hard)" stroke-width="2.6"');
    g += dot(Q[0], Q[1]) + dot(R[0], R[1], 'var(--brass)');
    g += LT(P[0] - 13, P[1] + 12, 'a', 'var(--brass)');
    g += LT(Q[0] + 22, (Q[1] + R[1]) / 2, 'error', 'var(--hard)', 10);
    g += LT(W - 60, 26, 'y = f(x)', 'currentColor', 11);
    g += LT(W - 60, 42, 'tangent', 'var(--brass)', 11);
    g += LT(W / 2, H - 8, 'near a the tangent and the curve agree', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the family of antiderivatives: same shape, shifted vertically by C */
  F.antiderivFamily = function () {
    var W = 340, H = 228, cx = 170, cy = 116, u = 24;
    var g = axes(W, H - 26, cx, cy, u, 5);
    var base = function (x) { return x * x * x / 3 - x; };
    [-2, -1, 0, 1, 2].forEach(function (C, k) {
      var col = C === 0 ? 'currentColor' : 'var(--faint)';
      var wd = C === 0 ? 2.6 : 1.6;
      g += '<path d="' + curve(function (x) { return base(x) + C; }, -2.1, 2.1, cx, cy, u, 0.06) +
        '" fill="none" stroke="' + col + '" stroke-width="' + wd + '"/>';
    });
    /* parallel tangents at x = 1.6 on each member */
    var x0 = 1.6, slope = x0 * x0 - 1;
    [-2, 0, 2].forEach(function (C) {
      var y0 = base(x0) + C;
      var A = [cx + (x0 - 0.55) * u, cy - (y0 - 0.55 * slope) * u];
      var B = [cx + (x0 + 0.55) * u, cy - (y0 + 0.55 * slope) * u];
      g += line(A, B, 'stroke="var(--brass)" stroke-width="1.8"');
    });
    g += LT(W / 2, H - 7, 'every member has the same derivative — only C differs', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the area under a curve, approximated by rectangles then exactly */
  F.areaUnderCurve = function () {
    var W = 340, H = 212, cx = 34, cy = 160, u = 34;
    var g = '';
    g += line([12, cy], [W - 10, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 10], [cx, cy + 12], 'stroke="var(--faint)" stroke-width="1.5"');
    var f = function (x) { return 0.35 * x * x + 0.5; };
    var a = 0.6, b = 3.4, n = 7, h = (b - a) / n;
    for (var i = 0; i < n; i++) {
      var xl = a + i * h, ht = f(xl + h / 2);
      g += '<rect x="' + (cx + xl * u).toFixed(1) + '" y="' + (cy - ht * u).toFixed(1) +
        '" width="' + (h * u).toFixed(1) + '" height="' + (ht * u).toFixed(1) +
        '" fill="var(--brand-tint)" stroke="var(--brand)" stroke-width="1"/>';
    }
    g += '<path d="' + curve(f, 0.2, 3.8, cx, cy, u, 0.05) +
      '" fill="none" stroke="currentColor" stroke-width="2.4"/>';
    g += line([cx + a * u, cy], [cx + a * u, cy - f(a) * u], 'stroke="var(--brass)" stroke-width="2"');
    g += line([cx + b * u, cy], [cx + b * u, cy - f(b) * u], 'stroke="var(--brass)" stroke-width="2"');
    g += LT(cx + a * u, cy + 14, 'a', 'var(--brass)');
    g += LT(cx + b * u, cy + 14, 'b', 'var(--brass)');
    g += LT(W / 2, H - 7, 'more, thinner rectangles → the definite integral', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the trapezium rule on four strips */
  F.trapeziumRule = function () {
    var W = 340, H = 212, cx = 34, cy = 160, u = 34;
    var g = '';
    g += line([12, cy], [W - 10, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 10], [cx, cy + 12], 'stroke="var(--faint)" stroke-width="1.5"');
    var f = function (x) { return 1.6 + 1.2 * Math.sin(x * 0.9); };
    var a = 0.4, b = 3.6, n = 4, h = (b - a) / n;
    for (var i = 0; i < n; i++) {
      var xl = a + i * h, xr = xl + h;
      g += poly([[cx + xl * u, cy], [cx + xl * u, cy - f(xl) * u],
                 [cx + xr * u, cy - f(xr) * u], [cx + xr * u, cy]],
        'fill="var(--brass-tint)" fill-opacity=".8" stroke="var(--brass)" stroke-width="1.3"');
    }
    g += '<path d="' + curve(f, 0.1, 3.9, cx, cy, u, 0.05) +
      '" fill="none" stroke="currentColor" stroke-width="2.4"/>';
    for (var k = 0; k <= n; k++) {
      var xx = a + k * h;
      g += LT(cx + xx * u, cy + 14, 'y' + k, 'var(--muted)', 10);
    }
    g += LT(W / 2, H - 7, 'straight tops, not flat ones — the trapezium rule', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the region between two curves */
  F.areaBetween = function () {
    var W = 340, H = 208, cx = 60, cy = 146, u = 36;
    var g = '';
    g += line([12, cy], [W - 10, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 10], [cx, cy + 26], 'stroke="var(--faint)" stroke-width="1.5"');
    var up = function (x) { return 2.4 * x - 0.6 * x * x; };      /* parabola */
    var lo = function (x) { return 0.5 * x; };                     /* line */
    var a = 0, b = (2.4 - 0.5) / 0.6;
    var d = 'M' + (cx + a * u) + ' ' + (cy - up(a) * u) + ' ';
    for (var x = a; x <= b + 1e-9; x += 0.05) d += 'L' + (cx + x * u).toFixed(1) + ' ' + (cy - up(x) * u).toFixed(1) + ' ';
    for (var y = b; y >= a - 1e-9; y -= 0.05) d += 'L' + (cx + y * u).toFixed(1) + ' ' + (cy - lo(y) * u).toFixed(1) + ' ';
    g += '<path d="' + d + 'Z" fill="var(--brand-tint)" fill-opacity=".85" stroke="none"/>';
    g += '<path d="' + curve(up, -0.4, 4.4, cx, cy, u, 0.05) +
      '" fill="none" stroke="currentColor" stroke-width="2.4"/>';
    g += '<path d="' + curve(lo, -0.6, 4.4, cx, cy, u, 0.1) +
      '" fill="none" stroke="var(--brass)" stroke-width="2.2"/>';
    g += LT(W - 46, 30, 'upper', 'currentColor', 11);
    g += LT(W - 46, 46, 'lower', 'var(--brass)', 11);
    g += LT(W / 2, H - 7, 'area = ∫ (upper − lower) dx', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* ---------- Grade 11 Quarter II: prisms and cylinders ---------- */

  /* a polyhedral angle: several faces meeting at one vertex */
  F.polyhedralAngle = function () {
    var g = '', W = 340, H = 200;
    var S = [W / 2, 42];
    var base = [], n = 5, cx = W / 2, cy = 140, rx = 74, ry = 26;
    for (var i = 0; i < n; i++) {
      var t = -Math.PI / 2 + i * 2 * Math.PI / n;
      base.push([+(cx + rx * Math.cos(t)).toFixed(2), +(cy + ry * Math.sin(t)).toFixed(2)]);
    }
    g += poly(base, 'fill="var(--brand-tint)" fill-opacity=".6" stroke="var(--brand)" stroke-width="1.6"');
    for (var k = 0; k < n; k++) {
      var A = base[k], B = base[(k + 1) % n];
      g += poly([S, A, B], 'fill="var(--brass-tint)" fill-opacity=".45" stroke="var(--brass)" stroke-width="1.3"');
    }
    for (var j = 0; j < n; j++) g += line(S, base[j], 'stroke="currentColor" stroke-width="1.8"');
    g += dot(S[0], S[1]);
    g += L(S[0], S[1] - 13, 'S');
    g += LT(W / 2, H - 22, 'five plane angles at S, five dihedral angles along the edges', 'var(--muted)', 9.5);
    g += LT(W / 2, H - 6, 'the sum of the plane angles is less than 360°', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a prism cut by a plane parallel to the base */
  F.prismSection = function () {
    var g = '', W = 340, H = 210;
    var p = P3({ s: 20, ox: 44, oy: 176 });
    var A = p(0, 0, 0), B = p(4.2, 0, 0), C = p(1.6, 0, 3.2);
    var A1 = p(0, 5, 0), B1 = p(4.2, 5, 0), C1 = p(1.6, 5, 3.2);
    g += poly([A1, B1, C1], 'fill="var(--brand-tint)" fill-opacity=".55" stroke="var(--brand)" stroke-width="1.8"');
    g += line(A, B, SOL) + line(B, C, HID) + line(C, A, HID);
    g += line(A, A1, SOL) + line(B, B1, SOL) + line(C, C1, HID);
    var A2 = p(0, 2.4, 0), B2 = p(4.2, 2.4, 0), C2 = p(1.6, 2.4, 3.2);
    g += poly([A2, B2, C2], 'fill="var(--brass-tint)" fill-opacity=".75" stroke="var(--brass)" stroke-width="1.8"');
    g += L(A[0] - 11, A[1] + 6, 'A') + L(B[0] + 11, B[1] + 4, 'B') + L(C[0] + 14, C[1] - 6, 'C');
    g += L(A1[0] - 12, A1[1] - 2, 'A₁') + L(B1[0] + 12, B1[1] - 2, 'B₁');
    g += LT(W - 78, 96, 'a section parallel', 'var(--brass)', 10);
    g += LT(W - 78, 110, 'to the base is', 'var(--brass)', 10);
    g += LT(W - 78, 124, 'congruent to it', 'var(--brass)', 10);
    g += LT(W / 2, H - 6, 'every cross-section of a prism repeats the base', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the net of a cylinder: two circles and one rectangle */
  F.cylinderNet = function () {
    var g = '', W = 340, H = 206;
    var cx = 70, top = 52, bot = 148, rx = 30, ry = 11;
    g += '<ellipse cx="' + cx + '" cy="' + bot + '" rx="' + rx + '" ry="' + ry +
      '" fill="var(--brand-tint)" fill-opacity=".5" stroke="var(--brand)" stroke-width="1.6"/>';
    g += '<path d="M' + (cx - rx) + ' ' + top + ' L' + (cx - rx) + ' ' + bot +
      ' M' + (cx + rx) + ' ' + top + ' L' + (cx + rx) + ' ' + bot +
      '" fill="none" stroke="currentColor" stroke-width="2"/>';
    g += '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + rx + '" ry="' + ry +
      '" fill="var(--brand-tint)" fill-opacity=".8" stroke="var(--brand)" stroke-width="1.8"/>';
    g += line([cx, top], [cx + rx, top], 'stroke="var(--brass)" stroke-width="1.8"');
    g += LT(cx + 16, top - 10, 'r', 'var(--brass)');
    g += line([cx - rx - 14, top], [cx - rx - 14, bot], 'stroke="var(--brass)" stroke-width="1.6"');
    g += LT(cx - rx - 25, (top + bot) / 2, 'h', 'var(--brass)');
    var nx = 176, ny = 72, nw = 126, nh = 58;
    g += '<rect x="' + nx + '" y="' + ny + '" width="' + nw + '" height="' + nh +
      '" fill="var(--surface-2)" stroke="currentColor" stroke-width="1.8"/>';
    g += '<circle cx="' + (nx + nw / 2) + '" cy="' + (ny - 24) + '" r="21" ' +
      'fill="var(--brand-tint)" fill-opacity=".8" stroke="var(--brand)" stroke-width="1.6"/>';
    g += '<circle cx="' + (nx + nw / 2) + '" cy="' + (ny + nh + 24) + '" r="21" ' +
      'fill="var(--brand-tint)" fill-opacity=".8" stroke="var(--brand)" stroke-width="1.6"/>';
    g += LT(nx + nw / 2, ny + nh / 2 - 8, '2πr', 'var(--muted)', 11);
    g += LT(nx + nw / 2, ny + nh / 2 + 10, 'by h', 'var(--muted)', 11);
    g += LT(W / 2, H - 5, 'S = 2πr² + 2πrh — two circles and one rectangle', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* Cavalieri: an oblique prism has the same volume as the right one */
  F.cavalieri = function () {
    var g = '', W = 340, H = 194;
    function stack(ox, skew, label) {
      var o = '';
      for (var i = 0; i < 7; i++) {
        var y = 152 - i * 16, dx = skew * i;
        o += '<rect x="' + (ox + dx) + '" y="' + (y - 14) + '" width="62" height="14" ' +
          'fill="var(--brand-tint)" fill-opacity=".75" stroke="var(--brand)" stroke-width="1.2"/>';
      }
      o += LT(ox + 31 + skew * 3, 174, label, 'var(--muted)', 10);
      return o;
    }
    g += stack(40, 0, 'right prism');
    g += stack(186, 5, 'oblique prism');
    g += LT(W / 2, 22, 'same base, same height, same volume', 'currentColor', 12);
    g += LT(W / 2, H - 4, 'every horizontal slice has the same area', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* ---------- Grade 10 Quarter III: exponentials, logarithms, trigonometry ---------- */

  /* y = aˣ for a > 1 and 0 < a < 1, through the common point (0, 1) */
  F.expGraph = function () {
    var W = 340, H = 216, cx = 170, cy = 168, u = 30;
    var g = '';
    for (var i = -5; i <= 5; i++) {
      g += line([cx + i * u, 12], [cx + i * u, H - 26], 'stroke="var(--rule-soft)" stroke-width="1"');
    }
    for (var j = 0; j <= 4; j++) {
      g += line([14, cy - j * u], [W - 12, cy - j * u], 'stroke="var(--rule-soft)" stroke-width="1"');
    }
    g += line([14, cy], [W - 12, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 12], [cx, H - 26], 'stroke="var(--faint)" stroke-width="1.5"');
    g += '<path d="' + curve(function (x) { return Math.pow(2, x); }, -4.6, 2.3, cx, cy, u, 0.06) +
      '" fill="none" stroke="currentColor" stroke-width="2.6"/>';
    g += '<path d="' + curve(function (x) { return Math.pow(0.5, x); }, -2.3, 4.6, cx, cy, u, 0.06) +
      '" fill="none" stroke="var(--brass)" stroke-width="2.4"/>';
    g += dot(cx, cy - u, 'var(--brand)');
    g += LT(cx + 40, cy - u + 20, '(0, 1)', 'var(--brand)', 10);
    g += LT(cx + 100, 30, 'y = 2ˣ', 'currentColor', 11);
    g += LT(cx - 100, 30, 'y = (½)ˣ', 'var(--brass)', 11);
    g += LT(W / 2, H - 8, 'both pass through (0, 1); the x-axis is an asymptote', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* y = aˣ and y = log_a x as reflections in y = x */
  F.logGraph = function () {
    var W = 340, H = 224, cx = 118, cy = 168, u = 26;
    var g = '';
    g += line([14, cy], [W - 12, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 14], [cx, H - 26], 'stroke="var(--faint)" stroke-width="1.5"');
    /* y = x */
    g += line([cx - 3.6 * u, cy + 3.6 * u], [cx + 5.2 * u, cy - 5.2 * u],
      'stroke="var(--faint)" stroke-width="1.4" stroke-dasharray="5 4"');
    g += '<path d="' + curve(function (x) { return Math.pow(2, x); }, -3.8, 2.55, cx, cy, u, 0.05) +
      '" fill="none" stroke="currentColor" stroke-width="2.6"/>';
    g += '<path d="' + curve(function (x) { return Math.log(x) / Math.LN2; }, 0.07, 8.2, cx, cy, u, 0.03) +
      '" fill="none" stroke="var(--brass)" stroke-width="2.4"/>';
    g += dot(cx, cy - u, 'var(--brand)') + dot(cx + u, cy, 'var(--brass)');
    g += LT(cx - 46, 30, 'y = 2ˣ', 'currentColor', 11);
    g += LT(W - 60, cy - 84, 'y = log₂x', 'var(--brass)', 11);
    g += LT(cx + 126, cy - 128, 'y = x', 'var(--faint)', 10);
    g += LT(W / 2, H - 8, 'each is the mirror image of the other in y = x', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* sine and cosine over one full turn, in degrees */
  F.sinCosGraph = function () {
    var W = 340, H = 200, ox = 30, cy = 106, u = 46;   /* u = height of 1 */
    var sx = (W - 52) / 360;                            /* pixels per degree */
    var g = '';
    g += line([ox, cy], [W - 14, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([ox, 18], [ox, H - 30], 'stroke="var(--faint)" stroke-width="1.5"');
    [-1, 1].forEach(function (v) {
      g += line([ox, cy - v * u], [W - 14, cy - v * u],
        'stroke="var(--rule-soft)" stroke-width="1" stroke-dasharray="4 3"');
      g += LT(ox - 12, cy - v * u, String(v), 'var(--muted)', 10);
    });
    function wave(fn, col, wd) {
      var d = '';
      for (var a = 0; a <= 360; a += 2) {
        d += (a === 0 ? 'M' : 'L') + (ox + a * sx).toFixed(1) + ' ' + (cy - fn(a * Math.PI / 180) * u).toFixed(1) + ' ';
      }
      return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + wd + '"/>';
    }
    g += wave(Math.sin, 'currentColor', 2.6);
    g += wave(Math.cos, 'var(--brass)', 2.2);
    [90, 180, 270, 360].forEach(function (a) {
      g += LT(ox + a * sx, cy + 16, String(a) + '°', 'var(--muted)', 9.5);
    });
    g += LT(W - 46, 30, 'sin x', 'currentColor', 11);
    g += LT(W - 46, 46, 'cos x', 'var(--brass)', 11);
    g += LT(W / 2, H - 8, 'period 360°, range −1 to 1', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the unit circle with an angle, showing cos and sin as coordinates */
  F.unitCircle = function () {
    var W = 340, H = 224, cx = 170, cy = 116, R = 78;
    var g = '';
    g += line([cx - R - 26, cy], [cx + R + 26, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, cy - R - 22], [cx, cy + R + 22], 'stroke="var(--faint)" stroke-width="1.5"');
    g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R +
      '" fill="none" stroke="currentColor" stroke-width="2.2"/>';
    var t = 52 * Math.PI / 180;
    var P = [cx + R * Math.cos(t), cy - R * Math.sin(t)];
    g += line([cx, cy], P, 'stroke="var(--brand)" stroke-width="2.2"');
    g += line([P[0], P[1]], [P[0], cy], 'stroke="var(--brass)" stroke-width="2"');
    g += line([cx, cy], [P[0], cy], 'stroke="var(--easy)" stroke-width="2"');
    g += dot(P[0], P[1], 'var(--brand)');
    g += '<path d="M' + (cx + 26) + ' ' + cy + ' A26 26 0 0 0 ' +
      (cx + 26 * Math.cos(t)).toFixed(1) + ' ' + (cy - 26 * Math.sin(t)).toFixed(1) +
      '" fill="none" stroke="var(--muted)" stroke-width="1.4"/>';
    g += LT(cx + 40, cy - 14, 'θ', 'var(--muted)', 12);
    g += LT(P[0] + 34, P[1] - 8, '(cos θ, sin θ)', 'var(--brand)', 10);
    g += LT((cx + P[0]) / 2, cy + 15, 'cos θ', 'var(--easy)', 10);
    g += LT(P[0] + 24, (P[1] + cy) / 2, 'sin θ', 'var(--brass)', 10);
    g += LT(W / 2, H - 8, 'on the unit circle the coordinates are cos θ and sin θ', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* y = arcsin x and y = arccos x on their restricted domains */
  F.arcFunctions = function () {
    var W = 340, H = 226, cx = 170, cy = 138, u = 52;   /* u = one unit of x */
    var dg = 0.62;                                       /* pixels per degree of y */
    var g = '';
    g += line([cx - 1.9 * u, cy], [cx + 1.9 * u, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += line([cx, 16], [cx, H - 30], 'stroke="var(--faint)" stroke-width="1.5"');
    [-90, 90, 180].forEach(function (v) {
      g += line([cx - 1.9 * u, cy - v * dg], [cx + 1.9 * u, cy - v * dg],
        'stroke="var(--rule-soft)" stroke-width="1" stroke-dasharray="4 3"');
      g += LT(cx - 1.9 * u - 16, cy - v * dg, String(v) + '°', 'var(--muted)', 9);
    });
    function arcPath(fn, col, wd) {
      var d = '', first = true;
      for (var x = -1; x <= 1.0001; x += 0.02) {
        var xx = Math.max(-1, Math.min(1, x));
        var deg = fn(xx) * 180 / Math.PI;
        d += (first ? 'M' : 'L') + (cx + xx * u).toFixed(1) + ' ' + (cy - deg * dg).toFixed(1) + ' ';
        first = false;
      }
      return '<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="' + wd + '"/>';
    }
    g += arcPath(Math.asin, 'currentColor', 2.6);
    g += arcPath(Math.acos, 'var(--brass)', 2.4);
    g += LT(cx - u, cy + 14, '−1', 'var(--muted)', 10) + LT(cx + u, cy + 14, '1', 'var(--muted)', 10);
    g += LT(cx + 76, cy - 40, 'arcsin x', 'currentColor', 11);
    g += LT(cx - 66, cy - 128, 'arccos x', 'var(--brass)', 11);
    g += LT(W / 2, H - 8, 'domain −1 ≤ x ≤ 1; arcsin −90° to 90°, arccos 0° to 180°', 'var(--muted)', 9.5);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a sector, with the arc length and area formulas in radians */
  F.radianSector = function () {
    var W = 340, H = 210, cx = 132, cy = 118, R = 82;
    var g = '';
    var t = 1.1;   /* radians */
    var A = [cx + R, cy], B = [cx + R * Math.cos(t), cy - R * Math.sin(t)];
    g += '<path d="M' + cx + ' ' + cy + ' L' + A[0] + ' ' + A[1] + ' A' + R + ' ' + R +
      ' 0 0 0 ' + B[0].toFixed(1) + ' ' + B[1].toFixed(1) + ' Z" ' +
      'fill="var(--brand-tint)" fill-opacity=".8" stroke="var(--brand)" stroke-width="2"/>';
    g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R +
      '" fill="none" stroke="var(--faint)" stroke-width="1.4" stroke-dasharray="5 4"/>';
    g += '<path d="M' + (cx + 30) + ' ' + cy + ' A30 30 0 0 0 ' +
      (cx + 30 * Math.cos(t)).toFixed(1) + ' ' + (cy - 30 * Math.sin(t)).toFixed(1) +
      '" fill="none" stroke="var(--brass)" stroke-width="1.6"/>';
    g += LT(cx + 46, cy - 18, 'θ', 'var(--brass)', 12);
    g += LT((cx + A[0]) / 2, cy + 15, 'r', 'var(--muted)', 11);
    var mid = (t / 2);
    g += LT(cx + (R + 20) * Math.cos(mid), cy - (R + 20) * Math.sin(mid), 's', 'var(--brand)', 11);
    g += LT(258, 78, 's = rθ', 'currentColor', 13);
    g += LT(258, 104, 'A = ½r²θ', 'currentColor', 13);
    g += LT(258, 130, 'θ in radians', 'var(--muted)', 10);
    g += LT(W / 2, H - 8, 'one radian is the angle whose arc equals the radius', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* ---------- Grade 10 Quarter III: perpendicularity in space ---------- */

  /* a line perpendicular to a plane because it is perpendicular to two lines in it */
  F.perpLinePlane = function () {
    var g = '', W = 340, H = 210;
    var p = P3({ s: 19, ox: 52, oy: 156 });
    g += planeQuad(p, 0, 7, 0, 4);
    var O = p(3.2, 0, 2);
    var T = p(3.2, 4.2, 2);
    g += line(O, T, 'stroke="currentColor" stroke-width="2.6"');
    var A = p(0.6, 0, 1.2), B = p(5.8, 0, 2.8);
    var C = p(1.4, 0, 3.6), D = p(5.0, 0, 0.4);
    g += line(A, B, 'stroke="var(--brass)" stroke-width="2"');
    g += line(C, D, 'stroke="var(--brass)" stroke-width="2"');
    g += dot(O[0], O[1], 'var(--brand)');
    g += right(O, T, B, 8);
    g += L(T[0] + 12, T[1] - 2, 'ℓ');
    g += L(O[0] - 12, O[1] + 12, 'O');
    g += L(B[0] + 12, B[1] + 4, 'a') + L(D[0] + 12, D[1] + 6, 'b');
    g += LT(W / 2, H - 22, 'ℓ ⊥ a and ℓ ⊥ b, with a and b intersecting at O', 'var(--muted)', 10);
    g += LT(W / 2, H - 6, 'therefore ℓ is perpendicular to the whole plane', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the theorem of the three perpendiculars */
  F.threePerp = function () {
    var g = '', W = 340, H = 216;
    var p = P3({ s: 20, ox: 44, oy: 162 });
    g += planeQuad(p, 0, 7, 0, 4);
    var O = p(2.4, 0, 1.4);          /* foot of the perpendicular */
    var A = p(2.4, 3.6, 1.4);        /* the point above */
    var B = p(6.2, 0, 3.2);          /* the far end of the oblique's projection */
    g += line(A, O, 'stroke="currentColor" stroke-width="2.4"');
    g += line(O, B, 'stroke="var(--brass)" stroke-width="2.2"');
    g += line(A, B, 'stroke="var(--brand)" stroke-width="2.4"');
    /* the line in the plane, through B, perpendicular to OB */
    var C = p(7.6, 0, -0.6), D = p(4.6, 0, 7.0);
    g += line(C, D, 'stroke="var(--easy)" stroke-width="2"');
    g += right(B, O, D, 9);
    g += dot(O[0], O[1]) + dot(B[0], B[1], 'var(--brass)') + dot(A[0], A[1], 'var(--brand)');
    g += L(A[0] - 11, A[1] - 6, 'A') + L(O[0] - 12, O[1] + 10, 'O') + L(B[0] + 4, B[1] + 14, 'B');
    g += LT(94, 60, 'AO ⊥ plane', 'currentColor', 10);
    g += LT(250, 44, 'AB oblique', 'var(--brand)', 10);
    g += LT(250, 60, 'OB its projection', 'var(--brass)', 10);
    g += LT(W / 2, H - 22, 'a line of the plane through B is ⊥ AB', 'var(--muted)', 10);
    g += LT(W / 2, H - 6, 'exactly when it is ⊥ OB', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the dihedral angle: two half-planes and its linear angle */
  F.dihedralAngle = function () {
    var g = '', W = 340, H = 232;
    /* the edge is drawn horizontally across the middle */
    var ex0 = 50, ex1 = 288, ey = 122;
    /* lower half-plane, going down-left; upper half-plane, going up-right */
    g += poly([[ex0, ey], [ex1, ey], [ex1 - 26, ey + 54], [ex0 - 26, ey + 54]],
      'fill="var(--brand-tint)" fill-opacity=".8" stroke="var(--brand)" stroke-width="1.7"');
    g += poly([[ex0, ey], [ex1, ey], [ex1 + 34, ey - 66], [ex0 + 34, ey - 66]],
      'fill="var(--brass-tint)" fill-opacity=".85" stroke="var(--brass)" stroke-width="1.7"');
    g += line([ex0, ey], [ex1, ey], 'stroke="currentColor" stroke-width="2.8"');
    /* the linear angle at M, both arms perpendicular to the edge */
    var M = [170, ey];
    var P1 = [170 - 20, ey + 42];          /* in the lower plane */
    var P2 = [170 + 26, ey - 50];          /* in the upper plane */
    g += line(M, P1, 'stroke="var(--brand)" stroke-width="2.4"');
    g += line(M, P2, 'stroke="var(--brass)" stroke-width="2.4"');
    g += '<path d="M' + (M[0] + 22) + ' ' + (ey - 42) + ' A50 50 0 0 0 ' +
      (M[0] - 17) + ' ' + (ey + 35) + '" fill="none" stroke="var(--muted)" stroke-width="1.5"/>';
    g += dot(M[0], M[1]);
    g += LT(M[0] + 30, ey + 4, 'φ', 'var(--muted)', 14);
    g += L(ex1 + 12, ey - 4, 'c');
    g += LT(ex0 - 14, ey + 40, 'α', 'var(--brand)', 12);
    g += LT(ex1 + 4, ey - 52, 'β', 'var(--brass)', 12);
    g += LT(W / 2, H - 22, 'both arms are perpendicular to the edge c', 'var(--muted)', 10);
    g += LT(W / 2, H - 6, 'the angle φ between them is the dihedral angle', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* orthogonal projection: the three views of a solid */
  F.orthoProjection = function () {
    var g = '', W = 340, H = 200;
    /* the solid: an L-shaped block, drawn small */
    var p = P3({ s: 13, ox: 34, oy: 92 });
    var pts = [[0,0,0],[3,0,0],[3,1.6,0],[1.4,1.6,0],[1.4,3,0],[0,3,0]];
    function face(y) {
      return poly(pts.map(function (q) { return p(q[0], q[1] + y, 0); }),
        'fill="var(--brand-tint)" fill-opacity=".75" stroke="var(--brand)" stroke-width="1.5"');
    }
    g += face(0);
    g += LT(58, 118, 'the object', 'var(--muted)', 10);

    /* three orthographic views */
    function box(x, y, w, h, label) {
      var o = '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h +
        '" fill="var(--surface-2)" stroke="currentColor" stroke-width="1.6"/>';
      o += LT(x + w / 2, y + h + 14, label, 'var(--muted)', 10);
      return o;
    }
    g += box(126, 36, 54, 42, 'front');
    g += '<path d="M126 60 L162 60 L162 78" fill="none" stroke="var(--brass)" stroke-width="1.8"/>';
    g += box(198, 36, 40, 42, 'side');
    g += box(126, 108, 54, 36, 'plan');
    g += '<path d="M126 130 L162 130 L162 144" fill="none" stroke="var(--brass)" stroke-width="1.8"/>';
    g += LT(288, 118, 'each view is a', 'var(--muted)', 9.5);
    g += LT(288, 132, 'shadow cast at', 'var(--muted)', 9.5);
    g += LT(288, 146, 'right angles', 'var(--muted)', 9.5);
    g += LT(W / 2, H - 6, 'three orthogonal projections determine the solid', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* ---------- Grade 11 Quarter III: statistics ---------- */

  /* a histogram with unequal class widths — frequency density on the vertical */
  F.histogram = function () {
    var g = '', W = 340, H = 210, ox = 40, oy = 166, sx = 26, sy = 13;
    /* [left, width, density] */
    var bars = [[0, 2, 3], [2, 2, 7], [4, 1, 10], [5, 1, 8], [6, 3, 3], [9, 2, 1]];
    bars.forEach(function (b) {
      g += '<rect x="' + (ox + b[0] * sx) + '" y="' + (oy - b[2] * sy) +
        '" width="' + (b[1] * sx) + '" height="' + (b[2] * sy) +
        '" fill="var(--brand-tint)" fill-opacity=".85" stroke="var(--brand)" stroke-width="1.5"/>';
    });
    g += line([ox - 6, oy], [W - 12, oy], 'stroke="var(--faint)" stroke-width="1.6"');
    g += line([ox, oy + 6], [ox, 24], 'stroke="var(--faint)" stroke-width="1.6"');
    [0, 2, 4, 5, 6, 9, 11].forEach(function (v) {
      g += LT(ox + v * sx, oy + 13, String(v), 'var(--muted)', 9.5);
    });
    g += LT(ox + 26, 32, 'frequency density', 'var(--muted)', 9.5);
    g += LT(W / 2, H - 6, 'with unequal widths the AREA is the frequency', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a cumulative frequency curve, with the median and quartiles read off */
  F.cumFrequency = function () {
    var g = '', W = 340, H = 216, ox = 44, oy = 168, sx = 25, sy = 1.28;
    var pts = [[0, 0], [2, 6], [4, 20], [6, 46], [8, 74], [10, 92], [11, 100]];
    var d = '';
    pts.forEach(function (p, i) {
      d += (i === 0 ? 'M' : 'L') + (ox + p[0] * sx).toFixed(1) + ' ' + (oy - p[1] * sy).toFixed(1) + ' ';
    });
    g += line([ox - 6, oy], [W - 12, oy], 'stroke="var(--faint)" stroke-width="1.6"');
    g += line([ox, oy + 6], [ox, 22], 'stroke="var(--faint)" stroke-width="1.6"');
    [25, 50, 75, 100].forEach(function (v) {
      g += line([ox, oy - v * sy], [W - 16, oy - v * sy],
        'stroke="var(--rule-soft)" stroke-width="1" stroke-dasharray="4 3"');
      g += LT(ox - 16, oy - v * sy, String(v) + '%', 'var(--muted)', 9);
    });
    g += '<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="2.6"/>';
    /* the median read-off */
    var mx = ox + 6.3 * sx;
    g += line([ox, oy - 50 * sy], [mx, oy - 50 * sy], 'stroke="var(--brass)" stroke-width="2"');
    g += line([mx, oy - 50 * sy], [mx, oy], 'stroke="var(--brass)" stroke-width="2"');
    g += LT(mx, oy + 14, 'median', 'var(--brass)', 9.5);
    g += LT(W / 2, H - 6, 'read across at 50% and down for the median', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a box-and-whisker plot with the five-figure summary */
  F.boxPlot = function () {
    var g = '', W = 340, H = 160, ox = 34, cy = 76, sx = 27;
    /* min, Q1, median, Q3, max in data units */
    var v = [1, 3.5, 5, 7.5, 10.5];
    function X(t) { return ox + t * sx; }
    g += line([X(v[0]), cy], [X(v[1]), cy], 'stroke="currentColor" stroke-width="1.8"');
    g += line([X(v[3]), cy], [X(v[4]), cy], 'stroke="currentColor" stroke-width="1.8"');
    g += '<rect x="' + X(v[1]) + '" y="' + (cy - 22) + '" width="' + (X(v[3]) - X(v[1])) +
      '" height="44" fill="var(--brand-tint)" fill-opacity=".85" stroke="var(--brand)" stroke-width="1.8"/>';
    g += line([X(v[2]), cy - 22], [X(v[2]), cy + 22], 'stroke="var(--brass)" stroke-width="2.6"');
    [0, 4].forEach(function (i) {
      g += line([X(v[i]), cy - 12], [X(v[i]), cy + 12], 'stroke="currentColor" stroke-width="1.8"');
    });
    g += line([ox - 8, cy + 44], [W - 14, cy + 44], 'stroke="var(--faint)" stroke-width="1.5"');
    ['min', 'Q₁', 'median', 'Q₃', 'max'].forEach(function (lab, i) {
      g += LT(X(v[i]), cy - 32, lab, i === 2 ? 'var(--brass)' : 'var(--muted)', 9.5);
      g += LT(X(v[i]), cy + 57, String(v[i]), 'var(--muted)', 9);
    });
    g += LT(W / 2, H - 6, 'the box holds the middle half of the data', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* the normal curve with the 68–95–99.7 rule */
  F.normalCurve = function () {
    var g = '', W = 340, H = 196, cx = 170, cy = 152, u = 34, A = 96;
    function f(x) { return A * Math.exp(-x * x / 2); }
    var d = '';
    for (var x = -3.4; x <= 3.4; x += 0.05) {
      d += (x <= -3.4 + 1e-9 ? 'M' : 'L') + (cx + x * u).toFixed(1) + ' ' + (cy - f(x)).toFixed(1) + ' ';
    }
    /* shade one standard deviation each side */
    var sh = 'M' + (cx - u).toFixed(1) + ' ' + cy + ' ';
    for (var t = -1; t <= 1.0001; t += 0.05) {
      sh += 'L' + (cx + t * u).toFixed(1) + ' ' + (cy - f(t)).toFixed(1) + ' ';
    }
    sh += 'L' + (cx + u).toFixed(1) + ' ' + cy + ' Z';
    g += '<path d="' + sh + '" fill="var(--brand-tint)" fill-opacity=".9" stroke="none"/>';
    g += line([cx - 3.6 * u, cy], [cx + 3.6 * u, cy], 'stroke="var(--faint)" stroke-width="1.5"');
    g += '<path d="' + d + '" fill="none" stroke="currentColor" stroke-width="2.6"/>';
    [-3, -2, -1, 0, 1, 2, 3].forEach(function (k) {
      g += line([cx + k * u, cy], [cx + k * u, cy + 5], 'stroke="var(--faint)" stroke-width="1.4"');
      g += LT(cx + k * u, cy + 15, (k === 0 ? 'μ' : 'μ' + (k > 0 ? '+' : '−') + Math.abs(k) + 'σ'),
        'var(--muted)', 8.5);
    });
    g += LT(cx, cy - 60, '68%', 'var(--brand)', 12);
    g += LT(cx, 30, '95% within 2σ · 99.7% within 3σ', 'var(--muted)', 10);
    g += LT(W / 2, H - 6, 'symmetric about the mean, area 1', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* ---------- Grade 11 Quarter III: pyramids, cones, spheres ---------- */

  /* a regular square pyramid with height, apothem and slant height marked */
  F.pyramidParts = function () {
    var g = '', W = 340, H = 224;
    var p = P3({ s: 20, ox: 60, oy: 178 });
    var A = p(0, 0, 0), B = p(5, 0, 0), C = p(5, 0, 4), D = p(0, 0, 4);
    var O = p(2.5, 0, 2), S = p(2.5, 5.6, 2), M = p(2.5, 0, 0);
    g += poly([A, B, C, D], 'fill="var(--brand-tint)" fill-opacity=".55" stroke="var(--brand)" stroke-width="1.6"');
    g += line(A, S, SOL) + line(B, S, SOL) + line(C, S, HID) + line(D, S, SOL);
    g += line(S, O, 'stroke="var(--brass)" stroke-width="2.2" stroke-dasharray="5 4"');
    g += line(O, M, 'stroke="var(--easy)" stroke-width="2"');
    g += line(S, M, 'stroke="var(--hard)" stroke-width="2.2"');
    g += right(O, S, M, 8);
    g += dot(O[0], O[1], 'var(--brass)') + dot(M[0], M[1], 'var(--easy)');
    g += L(A[0] - 11, A[1] + 8, 'A') + L(B[0] + 11, B[1] + 6, 'B') + L(S[0], S[1] - 12, 'S');
    g += L(O[0] + 12, O[1] + 8, 'O') + L(M[0] - 4, M[1] + 14, 'M');
    g += LT(250, 60, 'SO = h, the height', 'var(--brass)', 9.5);
    g += LT(250, 76, 'OM = a, the apothem', 'var(--easy)', 9.5);
    g += LT(250, 92, 'SM = l, the slant height', 'var(--hard)', 9.5);
    g += LT(W / 2, H - 6, 'l² = h² + a²  ·  S_lat = ½Pl', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a cone and its net: a circle and a sector */
  F.coneNet = function () {
    var g = '', W = 340, H = 216;
    var cx = 76, base = 158, rx = 40, ry = 14, apex = 44;
    g += '<path d="M' + (cx - rx) + ' ' + base + ' L' + cx + ' ' + apex + ' L' + (cx + rx) + ' ' + base +
      '" fill="var(--brand-tint)" fill-opacity=".55" stroke="currentColor" stroke-width="2"/>';
    g += '<ellipse cx="' + cx + '" cy="' + base + '" rx="' + rx + '" ry="' + ry +
      '" fill="var(--brand-tint)" fill-opacity=".7" stroke="var(--brand)" stroke-width="1.7"/>';
    g += line([cx, base], [cx, apex], 'stroke="var(--brass)" stroke-width="1.8" stroke-dasharray="5 4"');
    g += line([cx, base], [cx + rx, base], 'stroke="var(--easy)" stroke-width="1.8"');
    g += line([cx + rx, base], [cx, apex], 'stroke="var(--hard)" stroke-width="2"');
    g += LT(cx - 9, (base + apex) / 2, 'h', 'var(--brass)', 12);
    g += LT(cx + 20, base - 12, 'r', 'var(--easy)', 12);
    g += LT(cx + 32, (base + apex) / 2 - 4, 'l', 'var(--hard)', 12);

    /* the net: a sector of radius l, arc 2πr */
    var sx = 236, sy = 116, R = 62, ang = 1.9;
    g += '<path d="M' + sx + ' ' + sy + ' L' + (sx + R).toFixed(1) + ' ' + sy +
      ' A' + R + ' ' + R + ' 0 0 0 ' + (sx + R * Math.cos(ang)).toFixed(1) + ' ' +
      (sy - R * Math.sin(ang)).toFixed(1) + ' Z" ' +
      'fill="var(--brass-tint)" fill-opacity=".9" stroke="var(--brass)" stroke-width="1.7"/>';
    g += '<circle cx="' + (sx + 6) + '" cy="' + (sy + 62) + '" r="20" ' +
      'fill="var(--brand-tint)" fill-opacity=".8" stroke="var(--brand)" stroke-width="1.6"/>';
    g += LT(sx + 40, sy - 8, 'l', 'var(--muted)', 11);
    g += LT(sx + 26, sy - 74, 'arc = 2πr', 'var(--muted)', 9.5);
    g += LT(W / 2, H - 6, 'S = πr² + πrl — a circle and a sector', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a sphere cut by a plane: the section is a circle */
  F.sphereSection = function () {
    var g = '', W = 340, H = 206, cx = 148, cy = 106, R = 72;
    g += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R +
      '" fill="var(--brand-tint)" fill-opacity=".4" stroke="currentColor" stroke-width="2.2"/>';
    /* the equator, for solidity */
    g += '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + R + '" ry="' + (R * 0.3) +
      '" fill="none" stroke="var(--faint)" stroke-width="1.3" stroke-dasharray="4 3"/>';
    /* the cutting plane at height d above the centre */
    var d = 34, rr = Math.sqrt(R * R - d * d);
    g += '<ellipse cx="' + cx + '" cy="' + (cy - d) + '" rx="' + rr.toFixed(1) + '" ry="' + (rr * 0.3).toFixed(1) +
      '" fill="var(--brass-tint)" fill-opacity=".85" stroke="var(--brass)" stroke-width="1.8"/>';
    g += line([cx, cy], [cx, cy - d], 'stroke="var(--easy)" stroke-width="2"');
    g += line([cx, cy - d], [cx + rr, cy - d], 'stroke="var(--brass)" stroke-width="2"');
    g += line([cx, cy], [cx + rr, cy - d], 'stroke="currentColor" stroke-width="1.8"');
    g += right([cx, cy - d], [cx, cy], [cx + rr, cy - d], 8);
    g += dot(cx, cy);
    g += LT(cx - 10, cy - d / 2, 'd', 'var(--easy)', 12);
    g += LT(cx + rr / 2, cy - d - 12, 'ρ', 'var(--brass)', 12);
    g += LT(cx + rr / 2 + 12, cy - d / 2 + 6, 'R', 'currentColor', 12);
    g += LT(W / 2, H - 22, 'the section is a circle of radius ρ', 'var(--muted)', 10);
    g += LT(W / 2, H - 6, 'ρ² = R² − d²', 'var(--muted)', 11);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  /* a frustum: the cone with its top cut off */
  F.frustum = function () {
    var g = '', W = 340, H = 210;
    var cx = 150, base = 158, R = 66, r = 30, top = 68, ry = 18, ryTop = 9;
    /* the removed cone, dashed */
    g += '<path d="M' + (cx - r) + ' ' + top + ' L' + cx + ' ' + (top - 46) + ' L' + (cx + r) + ' ' + top +
      '" fill="none" stroke="var(--faint)" stroke-width="1.5" stroke-dasharray="5 4"/>';
    g += '<path d="M' + (cx - R) + ' ' + base + ' L' + (cx - r) + ' ' + top +
      ' L' + (cx + r) + ' ' + top + ' L' + (cx + R) + ' ' + base + ' Z" ' +
      'fill="var(--brand-tint)" fill-opacity=".55" stroke="currentColor" stroke-width="2"/>';
    g += '<ellipse cx="' + cx + '" cy="' + base + '" rx="' + R + '" ry="' + ry +
      '" fill="var(--brand-tint)" fill-opacity=".7" stroke="var(--brand)" stroke-width="1.7"/>';
    g += '<ellipse cx="' + cx + '" cy="' + top + '" rx="' + r + '" ry="' + ryTop +
      '" fill="var(--brass-tint)" fill-opacity=".9" stroke="var(--brass)" stroke-width="1.7"/>';
    g += line([cx, base], [cx, top], 'stroke="var(--easy)" stroke-width="1.8" stroke-dasharray="5 4"');
    g += line([cx, base], [cx + R, base], 'stroke="var(--brand)" stroke-width="1.8"');
    g += line([cx, top], [cx + r, top], 'stroke="var(--brass)" stroke-width="1.8"');
    g += line([cx + r, top], [cx + R, base], 'stroke="var(--hard)" stroke-width="2"');
    g += LT(cx - 10, (base + top) / 2, 'h', 'var(--easy)', 12);
    g += LT(cx + 34, base - 12, 'R', 'var(--brand)', 12);
    g += LT(cx + 15, top - 16, 'r', 'var(--brass)', 12);
    g += LT(cx + 58, (base + top) / 2 + 4, 'l', 'var(--hard)', 12);
    g += LT(W / 2, H - 6, 'V = ⅓πh(R² + Rr + r²)  ·  S_lat = πl(R + r)', 'var(--muted)', 10);
    return svg('0 0 ' + W + ' ' + H, g);
  };

  w.FIG = F;
  w.FIGH = { svg: svg, L: L, LT: LT, dot: dot, poly: poly, line: line, ticks: ticks, ang: ang, right: right, mid: mid, cent: cent, norm: norm, S: S };
})(window);
