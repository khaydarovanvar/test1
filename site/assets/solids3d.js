/* Small rotating wireframe polyhedra, drawn as SVG.

   The site already draws its figures as inline SVG themed through currentColor
   and the CSS custom properties, so these use the same trick rather than a
   canvas or a 3-D library: vertices are rotated in JavaScript, projected
   orthographically, and written straight into <line> elements. One animation
   frame drives every solid on the page.

   Edges are depth-cued — an edge whose midpoint is at the back is drawn
   thinner and fainter — which is what makes a wireframe read as solid without
   any hidden-line removal.

   Mount with:  SOLIDS.mount(element, { shape: 'cube', size: 26 })            */
(function (w, d) {
  'use strict';

  var TAU = Math.PI * 2;

  /* ---- the five shapes, as unit-ish vertex lists and edge index pairs ---- */
  function cube() {
    var v = [], e = [], i, j;
    for (i = 0; i < 8; i++) v.push([(i & 1 ? 1 : -1), (i & 2 ? 1 : -1), (i & 4 ? 1 : -1)]);
    for (i = 0; i < 8; i++) {
      for (j = i + 1; j < 8; j++) {
        /* an edge joins two vertices differing in exactly one coordinate */
        var dif = 0, k;
        for (k = 0; k < 3; k++) if (v[i][k] !== v[j][k]) dif++;
        if (dif === 1) e.push([i, j]);
      }
    }
    return { v: v, e: e };
  }

  function tetra() {
    return {
      v: [[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]],
      e: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
    };
  }

  function octa() {
    return {
      v: [[1.35, 0, 0], [-1.35, 0, 0], [0, 1.35, 0], [0, -1.35, 0], [0, 0, 1.35], [0, 0, -1.35]],
      e: [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5],
          [2, 4], [2, 5], [3, 4], [3, 5]]
    };
  }

  /* a prism on a regular n-gon — the solid the mensuration lessons live on */
  function prism(n) {
    var v = [], e = [], i, a;
    for (i = 0; i < n; i++) {
      a = TAU * i / n;
      v.push([Math.cos(a), -0.9, Math.sin(a)]);
      v.push([Math.cos(a), 0.9, Math.sin(a)]);
    }
    for (i = 0; i < n; i++) {
      e.push([2 * i, 2 * i + 1]);                                  /* the upright */
      e.push([2 * i, 2 * ((i + 1) % n)]);                          /* base */
      e.push([2 * i + 1, 2 * ((i + 1) % n) + 1]);                  /* top */
    }
    return { v: v, e: e };
  }

  /* a cone drawn as its rim plus the slant lines to the apex */
  function cone(n) {
    var v = [[0, -1.15, 0]], e = [], i, a;
    for (i = 0; i < n; i++) {
      a = TAU * i / n;
      v.push([Math.cos(a), 0.85, Math.sin(a)]);
    }
    for (i = 0; i < n; i++) {
      e.push([1 + i, 1 + (i + 1) % n]);
      if (i % 3 === 0) e.push([0, 1 + i]);
    }
    return { v: v, e: e };
  }

  /* a sphere as three great circles — the least noisy way to say "sphere" */
  function sphere(n) {
    var v = [], e = [], ring, i, a;
    for (ring = 0; ring < 3; ring++) {
      var base = v.length;
      for (i = 0; i < n; i++) {
        a = TAU * i / n;
        var c = Math.cos(a), s = Math.sin(a);
        if (ring === 0) v.push([c, s, 0]);
        else if (ring === 1) v.push([c, 0, s]);
        else v.push([0, c, s]);
      }
      for (i = 0; i < n; i++) e.push([base + i, base + (i + 1) % n]);
    }
    return { v: v, e: e };
  }

  var SHAPES = {
    cube: cube, tetra: tetra, octa: octa,
    prism: function () { return prism(6); },
    cone: function () { return cone(12); },
    sphere: function () { return sphere(18); }
  };

  var NS = 'http://www.w3.org/2000/svg';
  var items = [];
  var running = false;

  function el(tag, attrs) {
    var n = d.createElementNS(NS, tag), k;
    for (k in attrs) if (Object.prototype.hasOwnProperty.call(attrs, k)) n.setAttribute(k, attrs[k]);
    return n;
  }

  function mount(host, opt) {
    opt = opt || {};
    var shape = SHAPES[opt.shape] ? opt.shape : 'cube';
    var geo = SHAPES[shape]();
    var size = opt.size || 26;
    var svg = el('svg', {
      viewBox: '-2 -2 4 4', width: size, height: size,
      class: 'solid3d', 'aria-hidden': 'true', focusable: 'false'
    });
    var lines = geo.e.map(function () {
      var ln = el('line', { 'stroke-linecap': 'round' });
      svg.appendChild(ln);
      return ln;
    });
    host.appendChild(svg);
    var it = {
      geo: geo, lines: lines, svg: svg,
      phase: opt.phase || 0,
      speed: opt.speed == null ? 1 : opt.speed,
      colour: opt.colour || 'currentColor'
    };
    items.push(it);
    draw(it, 0);
    start();
    return it;
  }

  /* Rotate about Oy, then tip forward a little so the solid is seen from
     slightly above — the same viewpoint the figure library uses. */
  function draw(it, t) {
    var a = it.phase + t * it.speed;
    var ca = Math.cos(a), sa = Math.sin(a);
    var tilt = 0.42, ct = Math.cos(tilt), st = Math.sin(tilt);
    var g = it.geo, p = [], i;
    for (i = 0; i < g.v.length; i++) {
      var x = g.v[i][0], y = g.v[i][1], z = g.v[i][2];
      var x1 = x * ca + z * sa, z1 = z * ca - x * sa;
      var y1 = y * ct - z1 * st, z2 = z1 * ct + y * st;
      p.push([x1, y1, z2]);
    }
    for (i = 0; i < g.e.length; i++) {
      var A = p[g.e[i][0]], B = p[g.e[i][1]];
      var depth = (A[2] + B[2]) / 2;                 /* −1.7 back … +1.7 front */
      var near = (depth + 1.8) / 3.6;                /* 0 … 1 */
      if (near < 0) near = 0; else if (near > 1) near = 1;
      var ln = it.lines[i];
      ln.setAttribute('x1', A[0].toFixed(3));
      ln.setAttribute('y1', A[1].toFixed(3));
      ln.setAttribute('x2', B[0].toFixed(3));
      ln.setAttribute('y2', B[1].toFixed(3));
      ln.setAttribute('stroke', it.colour);
      ln.setAttribute('stroke-width', (0.055 + near * 0.075).toFixed(3));
      ln.setAttribute('stroke-opacity', (0.2 + near * 0.72).toFixed(3));
    }
  }

  var t0 = null;
  function frame(now) {
    if (t0 === null) t0 = now;
    var t = (now - t0) / 3400;                       /* one turn ≈ 21 s */
    for (var i = 0; i < items.length; i++) draw(items[i], t);
    if (running) w.requestAnimationFrame(frame);
  }

  function reduced() {
    return w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function start() {
    if (running || !items.length) return;
    if (reduced()) return;                           /* one static frame only */
    if (d.hidden) return;
    running = true;
    w.requestAnimationFrame(frame);
  }
  function stop() { running = false; t0 = null; }

  d.addEventListener('visibilitychange', function () {
    if (d.hidden) stop(); else start();
  });

  w.SOLIDS = { mount: mount, start: start, stop: stop, shapes: Object.keys(SHAPES) };
})(window, document);
