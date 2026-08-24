/* Vocabulary banks. Football words are deliberately MIXED with everyday words. */

export const VOCAB = {
  /* Tier 1 — 3 letter / very easy, introduced right after the alphabet */
  t1: [
    { en: 'ball',   uz: "to'p",     emoji: '⚽', tag: 'football' },
    { en: 'cat',    uz: 'mushuk',   emoji: '🐱', tag: 'animal' },
    { en: 'dog',    uz: 'it',       emoji: '🐶', tag: 'animal' },
    { en: 'red',    uz: 'qizil',    emoji: '🟥', tag: 'colour' },
    { en: 'sun',    uz: 'quyosh',   emoji: '☀️', tag: 'nature' },
    { en: 'cup',    uz: 'kubok',    emoji: '🏆', tag: 'football' },
    { en: 'run',    uz: 'yugurmoq', emoji: '🏃', tag: 'football' },
    { en: 'big',    uz: 'katta',    emoji: '🐘', tag: 'size' },
    { en: 'hat',    uz: 'shlyapa',  emoji: '🎩', tag: 'clothes' },
    { en: 'box',    uz: 'quti',     emoji: '📦', tag: 'thing' },
  ],
  /* Tier 2 — core football vocabulary + everyday words */
  t2: [
    { en: 'goal',    uz: 'gol',        emoji: '🥅', tag: 'football' },
    { en: 'player',  uz: "o'yinchi",   emoji: '🏃', tag: 'football' },
    { en: 'team',    uz: 'jamoa',      emoji: '👥', tag: 'football' },
    { en: 'coach',   uz: 'murabbiy',   emoji: '🧑‍🏫', tag: 'football' },
    { en: 'stadium', uz: 'stadion',    emoji: '🏟️', tag: 'football' },
    { en: 'boots',   uz: 'butsa',      emoji: '👟', tag: 'football' },
    { en: 'shirt',   uz: 'futbolka',   emoji: '👕', tag: 'football' },
    { en: 'kick',    uz: 'tepmoq',     emoji: '🦵', tag: 'football' },
    { en: 'pass',    uz: 'uzatmoq',    emoji: '🎯', tag: 'football' },
    { en: 'shoot',   uz: 'zarba bermoq', emoji: '🚀', tag: 'football' },
    { en: 'win',     uz: "g'alaba",    emoji: '🏆', tag: 'football' },
    { en: 'lose',    uz: "yutqazmoq",  emoji: '😔', tag: 'football' },
    { en: 'blue',    uz: "ko'k",       emoji: '🟦', tag: 'colour' },
    { en: 'green',   uz: 'yashil',     emoji: '🟩', tag: 'colour' },
    { en: 'water',   uz: 'suv',        emoji: '💧', tag: 'everyday' },
    { en: 'bread',   uz: 'non',        emoji: '🍞', tag: 'everyday' },
    { en: 'house',   uz: 'uy',         emoji: '🏠', tag: 'everyday' },
    { en: 'book',    uz: 'kitob',      emoji: '📖', tag: 'school' },
    { en: 'friend',  uz: "do'st",      emoji: '🧑‍🤝‍🧑', tag: 'everyday' },
    { en: 'school',  uz: 'maktab',     emoji: '🏫', tag: 'school' },
  ],
  /* Tier 3 — actions, feelings, longer words */
  t3: [
    { en: 'referee',  uz: 'hakam',        emoji: '🧑‍⚖️', tag: 'football' },
    { en: 'whistle',  uz: 'hushtak',      emoji: '📣', tag: 'football' },
    { en: 'trophy',   uz: 'kubok',        emoji: '🏆', tag: 'football' },
    { en: 'practice', uz: 'mashq',        emoji: '🏋️', tag: 'football' },
    { en: 'strong',   uz: 'kuchli',       emoji: '💪', tag: 'quality' },
    { en: 'fast',     uz: 'tez',          emoji: '🚀', tag: 'quality' },
    { en: 'happy',    uz: 'xursand',      emoji: '😀', tag: 'feeling' },
    { en: 'tired',    uz: 'charchagan',   emoji: '😪', tag: 'feeling' },
    { en: 'morning',  uz: 'ertalab',      emoji: '🌅', tag: 'time' },
    { en: 'family',   uz: 'oila',         emoji: '👨‍👩‍👦', tag: 'everyday' },
  ],
};

export const ALL_WORDS = [...VOCAB.t1, ...VOCAB.t2, ...VOCAB.t3];

export function wordsForLevel(level) {
  if (level <= 1) return VOCAB.t1;
  if (level <= 2) return [...VOCAB.t1, ...VOCAB.t2];
  return ALL_WORDS;
}

export function findWord(en) {
  return ALL_WORDS.find(w => w.en === en);
}

/* Colours used by the "colour" mini lessons */
export const COLOURS = [
  { en: 'red', uz: 'qizil', hex: '#e5383b', emoji: '🟥' },
  { en: 'blue', uz: "ko'k", hex: '#2f6fed', emoji: '🟦' },
  { en: 'green', uz: 'yashil', hex: '#2eb872', emoji: '🟩' },
  { en: 'yellow', uz: 'sariq', hex: '#f6c945', emoji: '🟨' },
  { en: 'white', uz: 'oq', hex: '#ffffff', emoji: '⬜' },
  { en: 'black', uz: 'qora', hex: '#1a1a1a', emoji: '⬛' },
];

/* Number words 0..20 — bridge between English and Math */
export const NUMBER_WORDS = [
  'zero','one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
  'eighteen','nineteen','twenty',
];
