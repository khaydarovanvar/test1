/* Handwriting trainer: a big canvas with a dotted guide underneath.
   Works with mouse, finger and stylus. Coverage of the guide decides success,
   so Ali is rewarded for effort, never punished for wobbly lines. */

import { el } from '../ui.js';
import { sfx } from '../audio.js';

/* Guide paths are defined in a 100x100 box and scaled to the canvas. */
export const STROKE_SETS = {
  lines: [
    { id: 'l-straight', name: 'Straight pass', nameUz: "To'g'ri uzatma", path: [[8, 50], [92, 50]] },
    { id: 'l-slope',    name: 'Long ball',     nameUz: 'Uzun uzatma',   path: [[8, 80], [92, 20]] },
    { id: 'l-zig',      name: 'Dribble',       nameUz: 'Dribling',      path: [[8, 70], [28, 30], [48, 70], [68, 30], [92, 70]] },
    { id: 'l-updown',   name: 'Step-over',     nameUz: 'Finit',         path: [[20, 90], [20, 10], [50, 90], [50, 10], [80, 90], [80, 10]] },
  ],
  curves: [
    { id: 'c-arc',   name: 'Curled shot', nameUz: 'Burama zarba', path: arc(50, 60, 38, 200, 340) },
    { id: 'c-wave',  name: 'Wave run',    nameUz: "To'lqinli yugurish", path: wave() },
    { id: 'c-circle',name: 'Round the ball', nameUz: "To'p atrofida", path: arc(50, 50, 34, 0, 360) },
    { id: 'c-hook',  name: 'Hook turn',   nameUz: 'Burilish', path: [[15, 15], [15, 65], ...arc(35, 65, 20, 180, 360)] },
  ],
};

function arc(cx, cy, r, a0, a1, steps = 40) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const a = (a0 + (a1 - a0) * i / steps) * Math.PI / 180;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}
function wave() {
  const pts = [];
  for (let x = 8; x <= 92; x += 2) pts.push([x, 50 + 26 * Math.sin((x - 8) / 84 * Math.PI * 2)]);
  return pts;
}

/**
 * Tracing pad.
 * @param {object} o
 * @param {string} o.glyph       character/word to trace (used when no `path`)
 * @param {Array}  o.path        optional guide path in 0..100 coordinates
 * @param {number} o.repeats     how many guide copies to show in a row
 * @param {function} o.onDone    called with {coverage}
 */
export function tracePad({ glyph = '', path = null, repeats = 1, hint = '', onDone, goalEmoji = '🥅' }) {
  const canvas = el('canvas', { class: 'trace-canvas' });
  const guide = el('div', { class: 'trace-guide' });
  const stage = el('div', { class: 'trace-stage' }, guide, canvas);

  const info = el('div', { class: 'trace-info' }, hint);
  const bar = el('div', { class: 'trace-bar' }, el('i', {}));
  const fill = bar.querySelector('i');

  let ctx, dpr = window.devicePixelRatio || 1;
  let drawing = false, points = [];
  let targets = [];        /* sample points of the guide, in canvas px */
  let hit = new Set();

  function buildGuide() {
    guide.textContent = '';
    if (path) {
      for (let r = 0; r < repeats; r++) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('class', 'trace-svg');
        const pl = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        pl.setAttribute('points', path.map(p => p.join(',')).join(' '));
        pl.setAttribute('class', 'trace-path');
        svg.append(pl);
        const holder = el('div', { class: 'trace-cell' },
          el('span', { class: 'trace-ball' }, '⚽'), svg, el('span', { class: 'trace-goal' }, goalEmoji));
        guide.append(holder);
      }
    } else {
      for (let r = 0; r < repeats; r++) {
        guide.append(el('div', { class: 'trace-cell' }, el('span', { class: 'trace-glyph' }, glyph)));
      }
    }
  }

  function sizeCanvas() {
    const rect = stage.getBoundingClientRect();
    if (!rect.width) return;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#111';
    fitGlyphs();
    computeTargets(rect);
    redraw();
  }

  /* Size the guide glyphs from the real cell box so nothing is ever clipped
     — viewport units alone overflow on narrow screens and long words. */
  function fitGlyphs() {
    guide.querySelectorAll('.trace-glyph').forEach(g => {
      const cell = g.parentElement.getBoundingClientRect();
      if (!cell.width) return;
      const maxW = cell.width * 0.88;
      const maxH = cell.height * 0.76;
      /* start from the height budget, then measure the real glyph advance
         and scale down if it is too wide (character widths vary a lot) */
      let size = maxH;
      g.style.fontSize = size + 'px';
      const w = g.getBoundingClientRect().width;
      if (w > maxW && w > 0) size = Math.max(24, size * (maxW / w));
      g.style.fontSize = size + 'px';
    });
  }

  function computeTargets(rect) {
    targets = [];
    const cells = [...guide.querySelectorAll('.trace-cell')];
    const host = stage.getBoundingClientRect();
    cells.forEach(cell => {
      const cr = cell.getBoundingClientRect();
      const ox = cr.left - host.left, oy = cr.top - host.top;
      if (path) {
        const svg = cell.querySelector('svg');
        if (!svg) return;
        const sr = svg.getBoundingClientRect();
        const sx = sr.left - host.left, sy = sr.top - host.top;
        path.forEach(([px, py]) => targets.push([sx + px / 100 * sr.width, sy + py / 100 * sr.height]));
      } else {
        /* sample a grid over the glyph box — enough to measure "did he cover it" */
        for (let i = 1; i <= 5; i++) for (let j = 1; j <= 7; j++) {
          targets.push([ox + cr.width * (i / 6), oy + cr.height * (0.12 + 0.76 * (j / 8))]);
        }
      }
    });
  }

  function redraw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    points.forEach(stroke => {
      stroke.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    });
    ctx.stroke();
  }

  function pos(e) {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return [t.clientX - r.left, t.clientY - r.top];
  }

  function markHits(p) {
    const R = 34;
    targets.forEach((t, i) => {
      if (hit.has(i)) return;
      if (Math.hypot(t[0] - p[0], t[1] - p[1]) < R) hit.add(i);
    });
    const cov = targets.length ? hit.size / targets.length : 0;
    fill.style.width = `${Math.min(100, cov * 100)}%`;
    return cov;
  }

  function start(e) {
    e.preventDefault();
    drawing = true;
    points.push([pos(e)]);
  }
  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    const p = pos(e);
    points[points.length - 1].push(p);
    markHits(p);
    redraw();
  }
  function end() { drawing = false; }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  window.addEventListener('mouseup', end);
  canvas.addEventListener('touchstart', start, { passive: false });
  canvas.addEventListener('touchmove', move, { passive: false });
  canvas.addEventListener('touchend', end);

  const clearBtn = el('button', { class: 'btn btn--ghost', type: 'button', onClick: () => {
    points = []; hit = new Set(); fill.style.width = '0%'; redraw();
  } }, '🔄 Tozalash');

  const doneBtn = el('button', { class: 'btn btn--primary', type: 'button', onClick: () => {
    const cov = targets.length ? hit.size / targets.length : 0;
    if (cov >= 0.35) { sfx.goal(); onDone?.({ coverage: cov, ok: true }); }
    else {
      sfx.whistle();
      info.textContent = 'Nuqtalar ustidan yur — to‘pni golgacha olib bor! ⚽';
      onDone?.({ coverage: cov, ok: false });
    }
  } }, '✅ Tayyor!');

  buildGuide();
  const ro = new ResizeObserver(() => sizeCanvas());
  ro.observe(stage);
  requestAnimationFrame(() => setTimeout(sizeCanvas, 30));

  const node = el('div', { class: 'trace-pad' },
    info,
    stage,
    el('div', { class: 'trace-meter' }, el('span', {}, '⚽'), bar, el('span', {}, goalEmoji)),
    el('div', { class: 'trace-actions' }, clearBtn, doneBtn),
  );
  node.addEventListener('DOMNodeRemovedFromDocument', () => ro.disconnect());
  return node;
}
