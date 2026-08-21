/* =========================================================
   confetti.js — to'g'ri javob uchun rangli qog'ozchalar
   ========================================================= */
(function (global) {
  'use strict';

  var cv = document.getElementById('confetti');
  if (!cv) return;
  var cx = cv.getContext('2d');
  var bits = [];
  var running = false;
  var COLORS = ['#ff5fa2', '#ffc93c', '#3ed598', '#7b5bff', '#35b6ef', '#ff8a3d'];

  function resize() {
    var d = global.devicePixelRatio || 1;
    cv.width = global.innerWidth * d;
    cv.height = global.innerHeight * d;
    cv.style.width = global.innerWidth + 'px';
    cv.style.height = global.innerHeight + 'px';
    cx.setTransform(d, 0, 0, d, 0, 0);
  }
  resize();
  global.addEventListener('resize', resize);

  function spawn(count, originY) {
    var W = global.innerWidth;
    for (var i = 0; i < count; i++) {
      bits.push({
        x: Math.random() * W,
        y: (originY == null ? -20 : originY) - Math.random() * 120,
        w: 7 + Math.random() * 9,
        h: 10 + Math.random() * 12,
        vx: (Math.random() - 0.5) * 3.2,
        vy: 2 + Math.random() * 3.4,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.28,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        life: 150 + Math.random() * 90
      });
    }
    if (!running) { running = true; requestAnimationFrame(loop); }
  }

  function loop() {
    cx.clearRect(0, 0, global.innerWidth, global.innerHeight);
    for (var i = bits.length - 1; i >= 0; i--) {
      var b = bits[i];
      b.x += b.vx; b.y += b.vy; b.vy += 0.045; b.rot += b.vr; b.life--;
      if (b.life <= 0 || b.y > global.innerHeight + 40) { bits.splice(i, 1); continue; }
      cx.save();
      cx.translate(b.x, b.y);
      cx.rotate(b.rot);
      cx.fillStyle = b.color;
      cx.globalAlpha = Math.min(1, b.life / 50);
      cx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
      cx.restore();
    }
    if (bits.length) requestAnimationFrame(loop);
    else { running = false; cx.clearRect(0, 0, global.innerWidth, global.innerHeight); }
  }

  global.Confetti = {
    small: function () { spawn(34); },
    big: function () { spawn(150); setTimeout(function () { spawn(110); }, 320); }
  };
})(window);
