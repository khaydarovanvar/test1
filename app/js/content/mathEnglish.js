/* "Math in English" — the bridge that turns Ali into an English-speaking
   maths student. Each term has an Uzbek gloss that disappears at higher tiers. */

export const MATH_TERMS = [
  { en: 'plus',      uz: "qo'shuv",       symbol: '+', tier: 1, example: '3 + 2', spoken: 'three plus two' },
  { en: 'minus',     uz: 'ayirish',       symbol: '−', tier: 1, example: '5 - 2', spoken: 'five minus two' },
  { en: 'equals',    uz: 'teng',          symbol: '=', tier: 1, example: '3 + 2 = 5', spoken: 'three plus two equals five' },
  { en: 'add',       uz: "qo'shmoq",      symbol: '+', tier: 2, example: 'Add 4 and 3', spoken: 'add four and three' },
  { en: 'subtract',  uz: 'ayirmoq',       symbol: '−', tier: 2, example: 'Subtract 2 from 6', spoken: 'subtract two from six' },
  { en: 'times',     uz: 'marta',         symbol: '×', tier: 2, example: '3 × 4', spoken: 'three times four' },
  { en: 'multiply',  uz: "ko'paytirmoq",  symbol: '×', tier: 3, example: 'Multiply 3 by 4', spoken: 'multiply three by four' },
  { en: 'divide',    uz: "bo'lmoq",       symbol: '÷', tier: 3, example: 'Divide 12 by 4', spoken: 'divide twelve by four' },
  { en: 'answer',    uz: 'javob',         symbol: '=', tier: 1, example: 'The answer is 5', spoken: 'the answer is five' },
  { en: 'more',      uz: "ko'proq",       symbol: '>', tier: 1, example: '5 is more than 3', spoken: 'five is more than three' },
  { en: 'less',      uz: 'kamroq',        symbol: '<', tier: 1, example: '3 is less than 5', spoken: 'three is less than five' },
  { en: 'greater',   uz: 'katta',         symbol: '>', tier: 3, example: '9 is greater than 4', spoken: 'nine is greater than four' },
  { en: 'smaller',   uz: 'kichik',        symbol: '<', tier: 3, example: '4 is smaller than 9', spoken: 'four is smaller than nine' },
  { en: 'total',     uz: 'jami',          symbol: 'Σ', tier: 3, example: 'The total is 12', spoken: 'the total is twelve' },
  { en: 'each',      uz: 'har biri',      symbol: '↔', tier: 4, example: 'Each player gets 3 balls', spoken: 'each player gets three balls' },
  { en: 'share',     uz: "bo'lishmoq",    symbol: '÷', tier: 4, example: 'Share 12 balls equally', spoken: 'share twelve balls equally' },
];

export function termsForTier(tier) {
  return MATH_TERMS.filter(t => t.tier <= tier);
}

const ONES = ['zero','one','two','three','four','five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
const TENS = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

/** 0..999 -> english words */
export function numberToWords(n) {
  n = Math.round(n);
  if (n < 0) return 'minus ' + numberToWords(-n);
  if (n < 20) return ONES[n];
  if (n < 100) {
    const t = TENS[Math.floor(n / 10)];
    const r = n % 10;
    return r ? `${t}-${ONES[r]}` : t;
  }
  const h = Math.floor(n / 100), r = n % 100;
  return `${ONES[h]} hundred${r ? ' and ' + numberToWords(r) : ''}`;
}

const OP_WORD = { '+': 'plus', '-': 'minus', '×': 'times', '÷': 'divided by' };
const OP_UZ = {
  '+': (a, b, c) => `${a} ga ${b} ni qo'shsak ${c} bo'ladi.`,
  '-': (a, b, c) => `${a} dan ${b} ni ayirsak ${c} bo'ladi.`,
  '×': (a, b, c) => `${a} ni ${b} ga ko'paytirsak ${c} bo'ladi.`,
  '÷': (a, b, c) => `${a} ni ${b} ga bo'lsak ${c} bo'ladi.`,
};

/** Digit form: "3 plus 2 equals 5" */
export function sayDigits(a, b, op, answer) {
  return `${a} ${OP_WORD[op]} ${b} equals ${answer}`;
}
/** Full word form: "Three plus two equals five" */
export function sayWords(a, b, op, answer) {
  const s = `${numberToWords(a)} ${OP_WORD[op]} ${numberToWords(b)} equals ${numberToWords(answer)}`;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
export function sayUzbek(a, b, op, answer) {
  return OP_UZ[op](a, b, answer);
}
