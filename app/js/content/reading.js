/* Reading progression: letters -> words -> phrases -> sentences -> stories.
   Each item carries an Uzbek translation which is hidden automatically once
   Ali reaches the English-only tier (see state.showUzbek()). */

export const PHONICS = [
  { pattern: '-at', words: ['cat', 'hat', 'bat', 'mat'], uz: 'Bir xil tugaydigan so‘zlar' },
  { pattern: '-an', words: ['can', 'man', 'fan', 'pan'], uz: 'Bir xil tugaydigan so‘zlar' },
  { pattern: '-un', words: ['run', 'sun', 'fun', 'bun'], uz: 'Bir xil tugaydigan so‘zlar' },
  { pattern: '-all', words: ['ball', 'tall', 'wall', 'fall'], uz: 'Futbol so‘zi ham bor!' },
  { pattern: '-ick', words: ['kick', 'pick', 'sick', 'tick'], uz: 'Tepish — kick' },
  { pattern: '-oal', words: ['goal', 'coal', 'foal'], uz: 'Gol — goal' },
];

export const SENTENCES = {
  /* 3–4 words, present simple */
  easy: [
    { en: 'The ball is red.',  uz: "To'p qizil.",            emoji: '⚽' },
    { en: 'Ali has a ball.',   uz: "Alida to'p bor.",        emoji: '⚽' },
    { en: 'Ali can run.',      uz: 'Ali yugura oladi.',      emoji: '🏃' },
    { en: 'I have a cat.',     uz: 'Menda mushuk bor.',      emoji: '🐱' },
    { en: 'The dog is big.',   uz: 'It katta.',              emoji: '🐶' },
    { en: 'The sun is hot.',   uz: 'Quyosh issiq.',          emoji: '☀️' },
  ],
  medium: [
    { en: 'Ali kicks the ball.',      uz: "Ali to'pni tepadi.",          emoji: '🦵' },
    { en: 'The team wins the game.',  uz: "Jamoa o'yinda g'alaba qozonadi.", emoji: '🏆' },
    { en: 'My boots are new.',        uz: 'Butsalarim yangi.',           emoji: '👟' },
    { en: 'The coach is happy.',      uz: 'Murabbiy xursand.',           emoji: '🧑‍🏫' },
    { en: 'We play at the stadium.',  uz: "Biz stadionda o'ynaymiz.",    emoji: '🏟️' },
    { en: 'He passes to me.',         uz: 'U menga uzatadi.',            emoji: '🎯' },
  ],
  hard: [
    { en: 'Ali runs fast and shoots the ball into the net.', uz: "Ali tez yuguradi va to'pni to'rga uradi.", emoji: '🚀' },
    { en: 'The referee blows the whistle and the game starts.', uz: "Hakam hushtak chaladi va o'yin boshlanadi.", emoji: '📣' },
    { en: 'After practice the players drink water.', uz: "Mashqdan keyin o'yinchilar suv ichadi.", emoji: '💧' },
  ],
};

export const STORIES = [
  {
    id: 'story-1',
    level: 1,
    title: 'The Ball',
    titleUz: "To'p",
    lines: [
      { en: 'Ali has a ball.', uz: "Alida to'p bor." },
      { en: 'He runs.',        uz: 'U yuguradi.' },
      { en: 'He kicks the ball.', uz: "U to'pni tepadi." },
      { en: 'GOAL! ⚽',        uz: 'GOL! ⚽' },
    ],
    questions: [
      { q: 'Who has a ball?', qUz: "Kimda to'p bor?", options: ['Ali', 'The cat', 'The coach'], answer: 'Ali' },
      { q: 'What does Ali do?', qUz: 'Ali nima qiladi?', options: ['He sleeps', 'He kicks the ball', 'He eats'], answer: 'He kicks the ball' },
    ],
  },
  {
    id: 'story-2',
    level: 2,
    title: 'New Boots',
    titleUz: 'Yangi butsalar',
    lines: [
      { en: 'Ali has new boots.', uz: 'Alida yangi butsalar bor.' },
      { en: 'The boots are red.', uz: 'Butsalar qizil.' },
      { en: 'He runs to the stadium.', uz: 'U stadionga yuguradi.' },
      { en: 'His team plays today.', uz: "Uning jamoasi bugun o'ynaydi." },
      { en: 'Ali scores two goals!', uz: 'Ali ikkita gol uradi!' },
    ],
    questions: [
      { q: 'What colour are the boots?', qUz: 'Butsalar qaysi rangda?', options: ['red', 'blue', 'green'], answer: 'red' },
      { q: 'How many goals does Ali score?', qUz: 'Ali nechta gol uradi?', options: ['one', 'two', 'three'], answer: 'two' },
    ],
  },
  {
    id: 'story-3',
    level: 3,
    title: 'The Big Match',
    titleUz: 'Katta o‘yin',
    lines: [
      { en: 'Today is the big match.', uz: "Bugun katta o'yin." },
      { en: 'Ali FC play the Lions.', uz: "Ali FC Sherlar bilan o'ynaydi." },
      { en: 'The coach says: "Run fast and pass the ball!"', uz: '"Tez yugur va to‘pni uzat!" — deydi murabbiy.' },
      { en: 'Ali passes to his friend.', uz: "Ali do'stiga uzatadi." },
      { en: 'His friend shoots. The net moves.', uz: "Do'sti zarba beradi. To'r qimirlaydi." },
      { en: 'Ali FC win 1 - 0. The team is happy.', uz: 'Ali FC 1:0 yutadi. Jamoa xursand.' },
    ],
    questions: [
      { q: 'Who does Ali pass to?', qUz: 'Ali kimga uzatadi?', options: ['his friend', 'the coach', 'the referee'], answer: 'his friend' },
      { q: 'What is the score?', qUz: 'Hisob qanday?', options: ['1 - 0', '2 - 1', '0 - 0'], answer: '1 - 0' },
      { q: 'How does the team feel?', qUz: 'Jamoa o‘zini qanday his qiladi?', options: ['happy', 'tired', 'sad'], answer: 'happy' },
    ],
  },
  {
    id: 'story-4',
    level: 4,
    title: 'Training Every Day',
    titleUz: 'Har kuni mashq',
    lines: [
      { en: 'Ali wants to become a champion.', uz: 'Ali chempion bo‘lishni xohlaydi.' },
      { en: 'Every morning he runs for twenty minutes.', uz: 'Har kuni ertalab u yigirma daqiqa yuguradi.' },
      { en: 'Then he practises with the ball for thirty minutes.', uz: 'Keyin o‘ttiz daqiqa to‘p bilan mashq qiladi.' },
      { en: 'How many minutes does Ali train? Twenty plus thirty equals fifty.', uz: 'Ali necha daqiqa mashq qiladi? 20 + 30 = 50.' },
      { en: 'A good player trains the body and the brain.', uz: 'Yaxshi o‘yinchi tanasini ham, miyasini ham mashq qildiradi.' },
    ],
    questions: [
      { q: 'How long does Ali run?', qUz: 'Ali qancha yuguradi?', options: ['twenty minutes', 'thirty minutes', 'fifty minutes'], answer: 'twenty minutes' },
      { q: 'How many minutes in total?', qUz: 'Jami necha daqiqa?', options: ['50', '40', '60'], answer: '50' },
    ],
  },
];

export function storiesForLevel(level) {
  return STORIES.filter(s => s.level <= Math.max(1, level));
}
