/* Anvarbek Khaydarov · Mathematics — the 3-D hero scene.

   Written directly against a 2-D canvas rather than a 3-D library: the whole
   scene is a few hundred points, so rotating them in JavaScript and projecting
   them by hand costs nothing and saves the site a 600 KB dependency.

   What is in the scene:
     · a large wireframe icosahedron, slowly tumbling
     · four Platonic solids orbiting it on a tilted ring
     · a field of depth-sorted particles
     · mathematical glyphs drifting in 3-D

   Everything is depth-cued — further away means smaller, fainter and thinner —
   which is what makes a wireframe read as solid without hidden-line removal.

   Two sizes: the full hero scene, and a quieter `band` variant that sits
   behind the heading strip of an inner page.

   Mount:  HERO3D.mount(element, { band: true })
   Theme:  the returned handle exposes retone(), because the colours are read
           once from the CSS custom properties and the site can switch theme
           under the scene.                                                   */
(function (w, d) {
  'use strict';

  var TAU = Math.PI * 2;
  var reduced = w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- geometry ---------------- */

  function icosa() {
    var t = (1 + Math.sqrt(5)) / 2, v = [], e = [], i, j;
    [[-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
     [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
     [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]].forEach(function (p) {
      var L = Math.hypot(p[0], p[1], p[2]);
      v.push([p[0] / L, p[1] / L, p[2] / L]);
    });
    /* an edge joins the pairs at the minimum distance */
    var best = Infinity;
    for (i = 0; i < v.length; i++) {
      for (j = i + 1; j < v.length; j++) {
        var dd = dist(v[i], v[j]);
        if (dd < best - 1e-6) best = dd;
      }
    }
    for (i = 0; i < v.length; i++) {
      for (j = i + 1; j < v.length; j++) {
        if (Math.abs(dist(v[i], v[j]) - best) < 1e-6) e.push([i, j]);
      }
    }
    return { v: v, e: e };
  }

  function dist(a, b) { return Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]); }

  function cube() {
    var v = [], e = [], i, j, k, dif;
    for (i = 0; i < 8; i++) v.push([(i & 1 ? .58 : -.58), (i & 2 ? .58 : -.58), (i & 4 ? .58 : -.58)]);
    for (i = 0; i < 8; i++) {
      for (j = i + 1; j < 8; j++) {
        dif = 0;
        for (k = 0; k < 3; k++) if (v[i][k] !== v[j][k]) dif++;
        if (dif === 1) e.push([i, j]);
      }
    }
    return { v: v, e: e };
  }

  function tetra() {
    return {
      v: [[.58, .58, .58], [.58, -.58, -.58], [-.58, .58, -.58], [-.58, -.58, .58]],
      e: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]]
    };
  }

  function octa() {
    return {
      v: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
      e: [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5],
          [2, 4], [2, 5], [3, 4], [3, 5]]
    };
  }

  /* a ring of n points in the xz-plane, used for the orbit path */
  function ring(n, r) {
    var v = [], e = [], i;
    for (i = 0; i < n; i++) v.push([Math.cos(i / n * TAU) * r, 0, Math.sin(i / n * TAU) * r]);
    for (i = 0; i < n; i++) e.push([i, (i + 1) % n]);
    return { v: v, e: e };
  }

  /* ---------------- maths ---------------- */

  function rotate(p, rx, ry, rz) {
    var x = p[0], y = p[1], z = p[2], c, s, t;
    c = Math.cos(rx); s = Math.sin(rx); t = y * c - z * s; z = y * s + z * c; y = t;
    c = Math.cos(ry); s = Math.sin(ry); t = x * c + z * s; z = -x * s + z * c; x = t;
    if (rz) { c = Math.cos(rz); s = Math.sin(rz); t = x * c - y * s; y = x * s + y * c; x = t; }
    return [x, y, z];
  }

  /* ---------------- the scene ---------------- */

  var GLYPHS = ['∑', 'π', '√', '∞', '△', '∠',
                '≅', '∈', '°', '½', 'x²', '∅'];

  function mount(host, opt) {
    if (!host) return null;
    opt = opt || {};

    var band = !!opt.band;

    var cv = d.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    host.appendChild(cv);
    var ctx = cv.getContext && cv.getContext('2d');
    if (!ctx) { host.removeChild(cv); return null; }

    /* Colours come from the design system, so the scene follows the theme.
       They are read into locals rather than used live, because the render loop
       reads them a few thousand times a second; retone() refreshes them when
       the theme changes. */
    var INK, GOLD, CATS;
    function tones() {
      var css = getComputedStyle(d.body);
      function tone(name, fallback) {
        var v = css.getPropertyValue(name).trim();
        return v || fallback;
      }
      INK = tone('--ink', '#12262C');
      GOLD = tone('--brass', '#B0801F');
      CATS = [tone('--brand', '#0E5C63'), tone('--uz', '#2B4C7E'),
              tone('--cam', '#3D6B4C'), tone('--hard', '#A34430')];
    }
    tones();

    /* Scene objects store a palette index, not a colour string, so retone()
       can repaint the whole scene without rebuilding any geometry. */
    var INK_I = 0, GOLD_I = 1;
    function hue(i) { return i === 0 ? INK : i === 1 ? GOLD : CATS[i - 2]; }

    var W = 0, H = 0, cx = 0, cy = 0, unit = 1, dpr = 1, dim = 1;
    var FOCUS = 7.2, DIST = 8.4;

    /* --- objects --- */
    var core = icosa();
    var orbitPath = ring(96, 3.35);
    var moons = [
      { g: cube(), a: 0, s: .46, spin: .0042, tilt: .5, c: 2 },
      { g: tetra(), a: TAU * .25, s: .5, spin: -.0055, tilt: -.3, c: 3 },
      { g: octa(), a: TAU * .5, s: .42, spin: .0048, tilt: .8, c: 4 },
      { g: cube(), a: TAU * .75, s: .34, spin: -.0037, tilt: -.7, c: 5 }
    ];

    var dust = [], i;
    for (i = 0; i < 170; i++) {
      var th = Math.random() * TAU, ph = Math.acos(Math.random() * 2 - 1);
      var rr = 4.4 + Math.random() * 3.6;
      dust.push({
        p: [rr * Math.sin(ph) * Math.cos(th), rr * Math.cos(ph) * .62, rr * Math.sin(ph) * Math.sin(th)],
        r: .8 + Math.random() * 1.5,
        c: Math.random() < .22 ? GOLD_I : INK_I,
        o: .16 + Math.random() * .34
      });
    }

    var glyphs = GLYPHS.map(function (ch, k) {
      var th = (k / GLYPHS.length) * TAU + Math.random() * .5;
      var rr = 3.6 + Math.random() * 2.2;
      return {
        ch: ch,
        p: [Math.cos(th) * rr, (Math.random() * 2 - 1) * 2.3, Math.sin(th) * rr],
        size: .2 + Math.random() * .16,
        c: k % 4 === 0 ? GOLD_I : INK_I,
        o: .13 + Math.random() * .15,
        bob: Math.random() * TAU
      };
    });

    /* --- projection --- */
    function project(p) {
      var z = p[2] + DIST;
      if (z < .4) z = .4;
      var k = FOCUS / z;
      return { x: cx + p[0] * k * unit, y: cy - p[1] * k * unit, k: k, z: z };
    }

    /* On wide screens the copy sits on the left, so anything drifting over it
       fades out rather than competing with the text. */
    function clear(x, y) {
      var t2;
      if (W < 900) {
        /* fade anything that drifts up into the copy */
        t2 = (y / H - .62) / .11;
      } else {
        t2 = (x / W - .30) / .18;
      }
      return t2 < 0 ? 0 : t2 > 1 ? 1 : t2;
    }

    /* depth 0 (far) .. 1 (near) */
    function depth(z) {
      var t = 1 - (z - (DIST - 5)) / 10;
      return t < 0 ? 0 : t > 1 ? 1 : t;
    }

    function rgba(hex, a) {
      var h = hex.replace('#', '');
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var n = parseInt(h, 16);
      return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
    }

    /* the same clearance rule as the dust, applied to an edge's midpoint */
    function clearY(pts, e) {
      var a = pts[e[0]], b = pts[e[1]];
      return clear((a.x + b.x) / 2, (a.y + b.y) / 2);
    }

    function drawShape(g, rx, ry, rz, scale, off, colour, alpha, width) {
      var pts = g.v.map(function (p) {
        var q = rotate(p, rx, ry, rz);
        return project([q[0] * scale + off[0], q[1] * scale + off[1], q[2] * scale + off[2]]);
      });
      /* far edges first so near ones sit on top */
      var edges = g.e.map(function (e) {
        return { e: e, z: (pts[e[0]].z + pts[e[1]].z) / 2 };
      }).sort(function (a, b) { return b.z - a.z; });

      edges.forEach(function (item) {
        var a = pts[item.e[0]], b = pts[item.e[1]];
        var t = depth(item.z);
        ctx.strokeStyle = rgba(hue(colour), alpha * dim * (.2 + t * .8) * clearY(pts, item.e));
        ctx.lineWidth = width * (.45 + t * .75);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      });
      return pts;
    }

    /* --- state --- */
    var t = 0, mx = 0, my = 0, tmx = 0, tmy = 0, raf = 0, live = true;

    function resize() {
      var r = host.getBoundingClientRect();
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      dpr = Math.min(w.devicePixelRatio || 1, 2);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      /* Wide: the scene sits to the right of the copy. Narrow: there is no room
         beside the text, so it drops below it instead of sitting behind it. */
      var narrow = W < 900;
      if (band) {
        /* An inner page gives the scene a short strip behind its heading, so
           it sits to the right of the words and stays a texture, not a
           picture. The strip is wide and shallow, hence sizing off the
           height alone. */
        cx = narrow ? W * .78 : W * .8;
        cy = H * .5;
        unit = H * (narrow ? .2 : .26);
        dim = narrow ? .34 : .5;
        return;
      }
      cx = narrow ? W * .5 : W * .68;
      cy = narrow ? H * .82 : H * .5;
      unit = Math.min(W, H) * (narrow ? .078 : .112);
      /* On a phone there is no room beside the copy: the scene drops to a
         watermark under the whole hero, faint enough that the stats sitting
         over it stay the first thing read. */
      dim = narrow ? .26 : 1;
    }

    function frame() {
      raf = 0;
      if (!live) return;
      t += 1;
      mx += (tmx - mx) * .045;
      my += (tmy - my) * .045;

      ctx.clearRect(0, 0, W, H);

      var ry = t * .0028 + mx * .5;
      var rx = Math.sin(t * .0016) * .22 + my * .38;

      /* dust behind everything */
      dust.forEach(function (p) {
        var q = rotate(p.p, rx * .35, ry * .5, 0);
        var s = project(q);
        var dd = depth(s.z);
        var a = p.o * dim * (.15 + dd * .85) * (.35 + clear(s.x, s.y) * .65);
        if (a < .01) return;
        ctx.fillStyle = rgba(hue(p.c), a);
        ctx.beginPath();
        ctx.arc(s.x, s.y, p.r * s.k * .34, 0, TAU);
        ctx.fill();
      });

      /* orbit path */
      drawShape(orbitPath, rx + .48, ry * .6, 0, 1, [0, 0, 0], INK_I, .16, 1);

      /* the core solid */
      drawShape(core, rx, ry, t * .0007, 1.85, [0, 0, 0], INK_I, .55, 1.5);
      drawShape(core, rx, ry, t * .0007, 1.85 * .52, [0, 0, 0], GOLD_I, .5, 1.2);

      /* orbiting solids, sorted so the far ones draw first */
      moons.map(function (m) {
        var a = m.a + t * .0031;
        var p = rotate([Math.cos(a) * 3.35, 0, Math.sin(a) * 3.35], rx + .48, ry * .6, 0);
        return { m: m, p: p };
      }).sort(function (u, v2) { return u.p[2] - v2.p[2]; })
        .forEach(function (item) {
          drawShape(item.m.g, t * item.m.spin + item.m.tilt, t * item.m.spin * 1.6, 0,
                    item.m.s * 1.5, item.p, item.m.c, .85, 1.4);
        });

      /* glyphs on top, faded by depth */
      glyphs.map(function (g) {
        var q = rotate(g.p, rx * .5, ry * .8, 0);
        return { g: g, s: project(q) };
      }).sort(function (u, v2) { return v2.s.z - u.s.z; })
        .forEach(function (item) {
          var dd = depth(item.s.z);
          /* clamped, or a glyph that swings near the camera fills the screen */
          var size = Math.min(item.g.size * item.s.k * unit, unit * .46);
          var a = item.g.o * dim * (.1 + dd * .9) * clear(item.s.x, item.s.y);
          if (size < 5 || a < .012) return;
          ctx.font = '600 ' + size.toFixed(1) + 'px "Spectral",Georgia,serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = rgba(hue(item.g.c), a);
          ctx.fillText(item.g.ch, item.s.x,
            item.s.y + Math.sin(t * .01 + item.g.bob) * 4);
        });

      if (!reduced) raf = w.requestAnimationFrame(frame);
    }

    function kick() { if (!raf && live) raf = w.requestAnimationFrame(frame); }

    /* --- events --- */
    var ro = w.ResizeObserver ? new ResizeObserver(function () { resize(); kick(); }) : null;
    if (ro) ro.observe(host); else w.addEventListener('resize', function () { resize(); kick(); });

    if (!reduced) {
      w.addEventListener('pointermove', function (e) {
        tmx = (e.clientX / w.innerWidth - .5) * .55;
        tmy = (e.clientY / w.innerHeight - .5) * .4;
      }, { passive: true });
    }

    /* stop drawing when the hero has scrolled away or the tab is hidden */
    if (w.IntersectionObserver) {
      new IntersectionObserver(function (es) {
        live = es[0].isIntersecting;
        if (live) kick();
      }, { threshold: 0 }).observe(host);
    }
    d.addEventListener('visibilitychange', function () {
      live = !d.hidden;
      if (live) kick();
    });

    resize();
    frame();
    return {
      resize: resize,
      /* the theme switch changes every custom property under our feet */
      retone: function () { tones(); kick(); if (reduced) frame(); }
    };
  }

  /* Every mounted scene, so a theme switch can repaint all of them. */
  var live = [];
  w.HERO3D = {
    mount: function (host, opt) {
      var h = mount(host, opt);
      if (h) live.push(h);
      return h;
    },
    retone: function () { live.forEach(function (h) { h.retone(); }); }
  };
})(window, document);
