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
    var cur = global.Lang ? global.Lang.current : 'en';
    var order = cur === 'en' ? ['en-us', 'en-gb', 'en']
              : cur === 'ru' ? ['ru']
              : ['uz', 'tr', 'az', 'ru', 'kk'];
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

  /* Til almashganda ovozni qayta tanlaymiz */
  Sound.refreshVoice = function () { voiceReady = false; voice = null; pickVoice(); };

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

  /* Numbers as words — 0..100, English and Uzbek */
  var UZ_ONES = ['nol','bir','ikki','uch','to\'rt','besh','olti','yetti','sakkiz','to\'qqiz'];
  var UZ_TENS = ['','o\'n','yigirma','o\'ttiz','qirq','ellik','oltmish','yetmish','sakson','to\'qson'];
  var EN_ONES = ['zero','one','two','three','four','five','six','seven','eight','nine',
                 'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen',
                 'seventeen','eighteen','nineteen'];
  var EN_TENS = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var RU_ONES = ['\u043d\u043e\u043b\u044c','\u043e\u0434\u0438\u043d','\u0434\u0432\u0430','\u0442\u0440\u0438','\u0447\u0435\u0442\u044b\u0440\u0435','\u043f\u044f\u0442\u044c','\u0448\u0435\u0441\u0442\u044c','\u0441\u0435\u043c\u044c','\u0432\u043e\u0441\u0435\u043c\u044c','\u0434\u0435\u0432\u044f\u0442\u044c',
                 '\u0434\u0435\u0441\u044f\u0442\u044c','\u043e\u0434\u0438\u043d\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0442\u0440\u0438\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u043f\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0432\u043e\u0441\u0435\u043c\u043d\u0430\u0434\u0446\u0430\u0442\u044c','\u0434\u0435\u0432\u044f\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u044c'];
  var RU_TENS = ['','','\u0434\u0432\u0430\u0434\u0446\u0430\u0442\u044c','\u0442\u0440\u0438\u0434\u0446\u0430\u0442\u044c','\u0441\u043e\u0440\u043e\u043a','\u043f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442','\u0448\u0435\u0441\u0442\u044c\u0434\u0435\u0441\u044f\u0442','\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442','\u0432\u043e\u0441\u0435\u043c\u044c\u0434\u0435\u0441\u044f\u0442','\u0434\u0435\u0432\u044f\u043d\u043e\u0441\u0442\u043e'];

  Sound.numberWord = function (n) {
    n = Math.round(n);
    if (n < 0) return 'minus ' + Sound.numberWord(-n);
    var cur = global.Lang ? global.Lang.current : 'en';
    if (cur === 'en') {
      if (n < 20) return EN_ONES[n];
      if (n === 100) return 'one hundred';
      if (n < 100) {
        var t = Math.floor(n / 10), o = n % 10;
        return EN_TENS[t] + (o ? '-' + EN_ONES[o] : '');
      }
      return String(n);
    }
    if (cur === 'ru') {
      if (n < 20) return RU_ONES[n];
      if (n === 100) return '\u0441\u0442\u043e';
      if (n < 100) {
        var rt = Math.floor(n / 10), ro = n % 10;
        return RU_TENS[rt] + (ro ? ' ' + RU_ONES[ro] : '');
      }
      return String(n);
    }
    if (n < 10) return UZ_ONES[n];
    if (n === 100) return 'yuz';
    if (n < 100) {
      var ut = Math.floor(n / 10), uo = n % 10;
      return UZ_TENS[ut] + (uo ? ' ' + UZ_ONES[uo] : '');
    }
    return String(n);
  };

  Sound.sayNumber = function (n) { Sound.say(Sound.numberWord(n)); };

  global.Sound = Sound;
})(window);
