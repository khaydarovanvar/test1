/* Persistent player state. Everything lives in localStorage so Ali's career
   survives a browser restart. */

import { TROPHIES, WORLDS } from './content/curriculum.js';

const KEY = 'alifc.v1';

const DEFAULT = () => ({
  name: 'Ali',
  createdAt: today(),
  xp: 0,
  coins: 0,
  goals: 0,
  skills: {
    english: { xp: 0, correct: 0, attempts: 0 },
    math:    { xp: 0, correct: 0, attempts: 0 },
    writing: { xp: 0, correct: 0, attempts: 0 },
  },
  /* adaptive difficulty per subject, 1..5 */
  difficulty: { english: 1, math: 1, writing: 1 },
  /* rolling recent results used by the adaptive engine */
  recent: { english: [], math: [], writing: [] },
  /* tag -> number of mistakes, powers "needs practice" + drills */
  mistakes: {},
  drillQueue: [],
  lessons: {},          /* lessonId -> { stars, best, done, at } */
  trophies: [],
  streak: { count: 0, best: 0, last: null },
  stats: {
    lessonsCompleted: 0, goals: 0, storiesRead: 0, tracedItems: 0,
    mathAnswers: 0, englishAnswers: 0, gamesPlayed: 0, perfectGames: 0,
    answersCorrect: 0, answersTotal: 0, bestStreakAnswers: 0, secondsSpent: 0,
    worksheetsPrinted: 0,
  },
  answerStreak: 0,
  daily: { date: null, done: [], claimed: false },
  settings: { sound: true, speech: true, uzbek: 'auto', unlockAll: true },
  history: [],          /* [{date, subject, correct, total, seconds}] */
});

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function daysBetween(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}

let state = load();
const listeners = new Set();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT();
    return deepMerge(DEFAULT(), JSON.parse(raw));
  } catch (e) {
    console.warn('Could not read saved progress, starting fresh.', e);
    return DEFAULT();
  }
}

function deepMerge(base, over) {
  if (Array.isArray(base) || typeof base !== 'object' || base === null) {
    return over === undefined ? base : over;
  }
  const out = { ...base };
  for (const k of Object.keys(base)) {
    out[k] = over && k in over ? deepMerge(base[k], over[k]) : base[k];
  }
  for (const k of Object.keys(over || {})) if (!(k in out)) out[k] = over[k];
  return out;
}

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch (e) { console.warn('Could not save progress', e); }
  listeners.forEach(fn => fn(state));
}

export function get() { return state; }
export function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }

export function resetAll() {
  state = DEFAULT();
  save();
}

/* ---------------- levels ---------------- */
/** XP needed to finish level n (grows gently). */
export function xpForLevel(n) { return 100 + (n - 1) * 60; }

export function levelInfo() {
  let lvl = 1, rest = state.xp;
  while (rest >= xpForLevel(lvl)) { rest -= xpForLevel(lvl); lvl++; }
  return { level: lvl, into: rest, need: xpForLevel(lvl), pct: rest / xpForLevel(lvl) };
}

/** Career tier 1..6 derived from XP — controls language support & content. */
export function tier() {
  let t = 1;
  for (const w of WORLDS) if (state.xp >= w.unlockXp) t = w.tier;
  return t;
}

export function currentWorld() {
  const t = tier();
  return WORLDS.find(w => w.tier === t) || WORLDS[0];
}

export function worldUnlocked(worldId) {
  const w = WORLDS.find(x => x.id === worldId);
  if (!w) return false;
  /* parent switch: open every world regardless of XP */
  if (state.settings.unlockAll) return true;
  return state.xp >= w.unlockXp;
}

/** Uzbek support fades out as Ali climbs. */
export function showUzbek() {
  if (state.settings.uzbek === 'always') return true;
  if (state.settings.uzbek === 'never') return false;
  return tier() < 5;
}

/** Star rating for the "Ali FC" header (0..5). */
export function starRating() {
  return Math.max(1, Math.min(5, Math.ceil(tier() * 5 / 6)));
}

/* ---------------- streaks ---------------- */
export function touchStreak() {
  const t = today();
  if (state.streak.last === t) return;
  if (state.streak.last && daysBetween(state.streak.last, t) === 1) state.streak.count += 1;
  else state.streak.count = 1;
  state.streak.last = t;
  state.streak.best = Math.max(state.streak.best, state.streak.count);
  save();
}

/* ---------------- rewards ---------------- */
export function award({ xp = 0, coins = 0, goals = 0, subject = null } = {}) {
  state.xp += xp;
  state.coins += coins;
  state.goals += goals;
  state.stats.goals += goals;
  if (subject && state.skills[subject]) state.skills[subject].xp += xp;
  checkTrophies();
  save();
}

/** Record one answer. Feeds skill mastery, adaptive difficulty and drills. */
export function recordAnswer({ subject, correct, tag = null }) {
  const s = state.skills[subject];
  if (s) { s.attempts++; if (correct) s.correct++; }
  state.stats.answersTotal++;
  if (correct) {
    state.stats.answersCorrect++;
    state.answerStreak++;
    state.stats.bestStreakAnswers = Math.max(state.stats.bestStreakAnswers, state.answerStreak);
  } else {
    state.answerStreak = 0;
    if (tag) state.mistakes[tag] = (state.mistakes[tag] || 0) + 1;
  }
  if (subject === 'math') state.stats.mathAnswers++;
  if (subject === 'english') state.stats.englishAnswers++;

  const r = state.recent[subject] || (state.recent[subject] = []);
  r.push(correct ? 1 : 0);
  if (r.length > 8) r.shift();
  adapt(subject);
  save();
}

/* Section 16 — gentle, never punishing. */
function adapt(subject) {
  const r = state.recent[subject] || [];
  if (r.length < 3) return;
  const last3 = r.slice(-3);
  const last4 = r.slice(-4);
  const d = state.difficulty[subject] ?? 1;
  if (last3.every(x => x === 1) && d < 5) {
    state.difficulty[subject] = d + 1;
    state.recent[subject] = [];
  } else if (last4.length >= 3 && last4.filter(x => x === 0).length >= 3 && d > 1) {
    state.difficulty[subject] = d - 1;
    state.recent[subject] = [];
  }
}

export function difficulty(subject) {
  return Math.max(1, Math.min(5, state.difficulty[subject] ?? 1));
}
export function setDifficulty(subject, d) {
  state.difficulty[subject] = Math.max(1, Math.min(5, d));
  save();
}

/* Tags Ali repeatedly misses — used by the parent dashboard and daily plan. */
export function weakTags(limit = 4) {
  return Object.entries(state.mistakes)
    .sort((a, b) => b[1] - a[1])
    .filter(([, n]) => n >= 2)
    .slice(0, limit)
    .map(([tag, n]) => ({ tag, n }));
}
export function strongTags(limit = 3) {
  const accuracy = Object.entries(state.skills)
    .map(([k, v]) => ({ tag: k, pct: v.attempts ? v.correct / v.attempts : 0, attempts: v.attempts }))
    .filter(x => x.attempts >= 5 && x.pct >= 0.8)
    .sort((a, b) => b.pct - a.pct);
  return accuracy.slice(0, limit);
}

export function clearMistake(tag) {
  delete state.mistakes[tag];
  save();
}

/* ---------------- lessons ---------------- */
export function completeLesson(lessonId, { stars = 1, correct = 0, total = 0, seconds = 0, subject = 'english' }) {
  const prev = state.lessons[lessonId];
  state.lessons[lessonId] = {
    done: true,
    stars: Math.max(stars, prev?.stars || 0),
    best: Math.max(correct, prev?.best || 0),
    at: today(),
  };
  if (!prev?.done) state.stats.lessonsCompleted++;
  state.stats.secondsSpent += seconds;
  state.history.push({ date: today(), subject, correct, total, seconds, lessonId });
  if (state.history.length > 400) state.history.shift();
  touchStreak();
  checkTrophies();
  save();
}

export function lessonState(id) { return state.lessons[id] || null; }

/* ---------------- trophies ---------------- */
export function checkTrophies() {
  const won = [];
  for (const t of TROPHIES) {
    if (state.trophies.includes(t.id)) continue;
    try {
      if (t.test(state)) { state.trophies.push(t.id); won.push(t); }
    } catch (_) { /* a malformed test must never break a lesson */ }
  }
  return won;
}

export function hasTrophy(id) { return state.trophies.includes(id); }

/* ---------------- subject progress (0..1) ---------------- */
const SUBJECT_TARGET = { english: 2600, math: 2600, writing: 1600 };
export function subjectProgress(subject) {
  const xp = state.skills[subject]?.xp || 0;
  return Math.min(1, xp / SUBJECT_TARGET[subject]);
}
export function accuracy(subject) {
  const s = state.skills[subject];
  if (!s || !s.attempts) return 0;
  return s.correct / s.attempts;
}

/* ---------------- daily training ---------------- */
export function dailyState() {
  if (state.daily.date !== today()) {
    state.daily = { date: today(), done: [], claimed: false };
    save();
  }
  return state.daily;
}
export function markDaily(stepId) {
  dailyState();
  if (!state.daily.done.includes(stepId)) {
    state.daily.done.push(stepId);
    save();
  }
}
export function claimDaily() {
  dailyState();
  if (state.daily.claimed) return false;
  state.daily.claimed = true;
  award({ xp: 100, coins: 20 });
  return true;
}

export function bumpStat(key, by = 1) {
  state.stats[key] = (state.stats[key] || 0) + by;
  checkTrophies();
  save();
}
