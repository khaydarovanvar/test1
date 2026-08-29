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
    var rows = [['√a', 'a^(1/2)'], ['∛a', 'a^(1/3)'], ['⁴√a', 'a^(1/4)'], ['ⁿ√aᵐ', 'a^(m/n)']];
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

  w.FIG = F;
  w.FIGH = { svg: svg, L: L, LT: LT, dot: dot, poly: poly, line: line, ticks: ticks, ang: ang, right: right, mid: mid, cent: cent, norm: norm, S: S };
})(window);
