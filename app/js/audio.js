/* Tiny WebAudio effect kit + speech. No external files, no downloads.
   Sounds are short and used sparingly (whistle, kick, goal, crowd cheer). */

import { get } from './state.js';

let ctx = null;
function ac() {
  if (!ctx) {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    ctx = new C();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function on() { return get().settings.sound !== false; }

function tone(freq, dur, { type = 'sine', gain = 0.15, slideTo = null, delay = 0 } = {}) {
  const a = ac(); if (!a) return;
  const t0 = a.currentTime + delay;
  const osc = a.createOscillator();
  const g = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(a.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.05);
}

function noise(dur, { gain = 0.12, delay = 0, filter = 1200 } = {}) {
  const a = ac(); if (!a) return;
  const len = Math.floor(a.sampleRate * dur);
  const buf = a.createBuffer(1, len, a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const src = a.createBufferSource(); src.buffer = buf;
  const bp = a.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = filter;
  const g = a.createGain(); g.gain.value = gain;
  src.connect(bp).connect(g).connect(a.destination);
  src.start(a.currentTime + delay);
}

export const sfx = {
  kick()   { if (!on()) return; noise(0.08, { gain: 0.2, filter: 400 }); tone(180, 0.12, { type: 'triangle', gain: 0.2, slideTo: 70 }); },
  goal()   {
    if (!on()) return;
    [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.22, { type: 'square', gain: 0.11, delay: i * 0.09 }));
    noise(0.9, { gain: 0.06, delay: 0.15, filter: 900 });   /* crowd */
  },
  miss()   { if (!on()) return; tone(300, 0.18, { type: 'sine', gain: 0.1, slideTo: 190 }); },
  whistle(){ if (!on()) return; tone(2100, 0.18, { type: 'square', gain: 0.06 }); tone(2400, 0.18, { type: 'square', gain: 0.05, delay: 0.02 }); },
  tap()    { if (!on()) return; tone(660, 0.05, { type: 'sine', gain: 0.07 }); },
  trophy() {
    if (!on()) return;
    [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.3, { type: 'triangle', gain: 0.1, delay: i * 0.11 }));
  },
  levelUp(){ if (!on()) return; [392, 523, 659, 880].forEach((f, i) => tone(f, 0.25, { gain: 0.11, delay: i * 0.1 })); },
};

/* ---------- speech: lets a non-reader hear every English word ---------- */
let voices = [];
function loadVoices() { try { voices = speechSynthesis.getVoices() || []; } catch (_) {} }
if ('speechSynthesis' in window) {
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}

export function speak(text, { lang = 'en-GB', rate = 0.8 } = {}) {
  if (!('speechSynthesis' in window)) return;
  if (get().settings.speech === false) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang;
    u.rate = rate;
    const v = voices.find(x => x.lang && x.lang.toLowerCase().startsWith(lang.slice(0, 2).toLowerCase()));
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  } catch (_) { /* speech is a bonus, never a requirement */ }
}

export function canSpeak() { return 'speechSynthesis' in window; }
