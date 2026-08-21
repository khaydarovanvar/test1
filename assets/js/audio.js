/* =========================================================
   audio.js — ovozlar va o'zbekcha gapirish
   Hech qanday tashqi fayl kerak emas: hamma tovush
   Web Audio API orqali shu yerda yasaladi.
   ========================================================= */
(function (global) {
  'use strict';

  var ctx = null;
  var enabled = true;

  function ac() {
    if (!ctx) {
      var C = global.AudioContext || global.webkitAudioContext;
      if (!C) return null;
      ctx = new C();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /* Bitta nota chalish */
  function tone(freq, start, dur, type, vol) {
    var a = ac(); if (!a || !enabled) return;
    var t0 = a.currentTime + start;
    var osc = a.createOscillator();
    var gain = a.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(vol || 0.22, t0 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain); gain.connect(a.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.05);
  }

  /* Nota nomlaridan chastota (A4 = 440) */
  var NOTES = { C:0, D:2, E:4, F:5, G:7, A:9, B:11 };
  function hz(name) {
    var m = /^([A-G])(#?)(\d)$/.exec(name);
    if (!m) return 440;
    var semis = NOTES[m[1]] + (m[2] ? 1 : 0) + (parseInt(m[3], 10) - 4) * 12 - 9;
    return 440 * Math.pow(2, semis / 12);
  }

  function melody(notes, step, type, vol) {
    notes.forEach(function (n, i) {
      tone(hz(n), i * (step || 0.11), (step || 0.11) * 1.9, type || 'triangle', vol);
    });
  }

  var Sound = {
    setEnabled: function (v) { enabled = !!v; },
    isEnabled: function () { return enabled; },
    unlock: function () { ac(); },

    tap:    function () { tone(660, 0, 0.07, 'square', 0.12); },
    right:  function () { melody(['C5', 'E5', 'G5', 'C6'], 0.09, 'triangle', 0.24); },
    wrong:  function () { tone(200, 0, 0.16, 'sawtooth', 0.13); tone(150, 0.13, 0.22, 'sawtooth', 0.11); },
    win:    function () { melody(['C5','E5','G5','C6','G5','C6','E6'], 0.12, 'triangle', 0.26); },
    level:  function () { melody(['G4','C5','E5'], 0.1, 'sine', 0.2); },
    pop:    function () { tone(880, 0, 0.06, 'sine', 0.14); }
  };

  /* ---------- Gapirish (Text-to-Speech) ----------
     Brauzerda o'zbek ovozi bo'lmasligi mumkin.
     Shuning uchun tartib bilan qidiramiz: uz -> tr (talaffuzi juda yaqin)
     -> ru -> az -> birinchi topilgani.                                */
  var voice = null, voiceReady = false;

  function pickVoice() {
    if (!global.speechSynthesis) return;
    var list = global.speechSynthesis.getVoices();
    if (!list || !list.length) return;
    var order = ['uz', 'tr', 'az', 'ru', 'kk'];
    for (var i = 0; i < order.length; i++) {
      var found = list.filter(function (v) { return (v.lang || '').toLowerCase().indexOf(order[i]) === 0; });
      if (found.length) { voice = found[0]; voiceReady = true; return; }
    }
    voice = list[0]; voiceReady = true;
  }

  if (global.speechSynthesis) {
    pickVoice();
    global.speechSynthesis.onvoiceschanged = pickVoice;
  }

  Sound.say = function (text) {
    if (!enabled || !global.speechSynthesis || !text) return;
    if (!voiceReady) pickVoice();
    try {
      global.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      if (voice) { u.voice = voice; u.lang = voice.lang; }
      u.rate = 0.88; u.pitch = 1.15; u.volume = 1;
      global.speechSynthesis.speak(u);
    } catch (e) { /* jim qolamiz */ }
  };

  /* O'zbekcha sonlar — 0 dan 100 gacha aytish uchun */
  var ONES = ['nol','bir','ikki','uch','to\'rt','besh','olti','yetti','sakkiz','to\'qqiz'];
  var TENS = ['','o\'n','yigirma','o\'ttiz','qirq','ellik','oltmish','yetmish','sakson','to\'qson'];

  Sound.numberWord = function (n) {
    n = Math.round(n);
    if (n < 0) return 'minus ' + Sound.numberWord(-n);
    if (n < 10) return ONES[n];
    if (n === 100) return 'yuz';
    if (n < 100) {
      var t = Math.floor(n / 10), o = n % 10;
      return TENS[t] + (o ? ' ' + ONES[o] : '');
    }
    return String(n);
  };

  Sound.sayNumber = function (n) { Sound.say(Sound.numberWord(n)); };

  global.Sound = Sound;
})(window);
