/* Alphabet content — letters, keyword, emoji, Uzbek gloss, phonics hint.
   Football words are marked with `football: true` so lessons can mix them in. */

export const ALPHABET = [
  { l: 'A', word: 'Apple',    emoji: '🍎', uz: 'olma',      sound: 'a'  },
  { l: 'B', word: 'Ball',     emoji: '⚽', uz: "to'p",      sound: 'b', football: true },
  { l: 'C', word: 'Cat',      emoji: '🐱', uz: 'mushuk',    sound: 'k'  },
  { l: 'D', word: 'Dog',      emoji: '🐶', uz: 'it',        sound: 'd'  },
  { l: 'E', word: 'Egg',      emoji: '🥚', uz: 'tuxum',     sound: 'e'  },
  { l: 'F', word: 'Football', emoji: '🏈', uz: 'futbol',    sound: 'f', football: true },
  { l: 'G', word: 'Goal',     emoji: '🥅', uz: 'gol',       sound: 'g', football: true },
  { l: 'H', word: 'Hand',     emoji: '✋', uz: 'qo‘l', sound: 'h'  },
  { l: 'I', word: 'Ice',      emoji: '🧊', uz: 'muz',       sound: 'i'  },
  { l: 'J', word: 'Jump',     emoji: '🤸', uz: 'sakramoq',  sound: 'j'  },
  { l: 'K', word: 'Kick',     emoji: '🦵', uz: 'tepmoq',    sound: 'k', football: true },
  { l: 'L', word: 'Leg',      emoji: '🦿', uz: 'oyoq',      sound: 'l'  },
  { l: 'M', word: 'Milk',     emoji: '🥛', uz: 'sut',       sound: 'm'  },
  { l: 'N', word: 'Net',      emoji: '🕸️', uz: 'to‘r', sound: 'n', football: true },
  { l: 'O', word: 'Orange',   emoji: '🍊', uz: 'apelsin',   sound: 'o'  },
  { l: 'P', word: 'Player',   emoji: '🏃', uz: "o'yinchi",  sound: 'p', football: true },
  { l: 'Q', word: 'Queen',    emoji: '👑', uz: 'malika',    sound: 'kw' },
  { l: 'R', word: 'Run',      emoji: '🏃‍♂️', uz: 'yugurmoq', sound: 'r', football: true },
  { l: 'S', word: 'Star',     emoji: '⭐', uz: 'yulduz',    sound: 's' },
  { l: 'T', word: 'Team',     emoji: '👥', uz: 'jamoa',     sound: 't', football: true },
  { l: 'U', word: 'Up',       emoji: '⬆️', uz: 'yuqoriga',  sound: 'u' },
  { l: 'V', word: 'Van',      emoji: '🚐', uz: 'mashina',   sound: 'v' },
  { l: 'W', word: 'Win',      emoji: '🏆', uz: "g'alaba",   sound: 'w', football: true },
  { l: 'X', word: 'Box',      emoji: '📦', uz: 'quti',      sound: 'ks' },
  { l: 'Y', word: 'Yellow',   emoji: '🟨', uz: 'sariq',     sound: 'y', football: true },
  { l: 'Z', word: 'Zero',     emoji: '0️⃣', uz: 'nol',      sound: 'z' },
];

export const LETTERS = ALPHABET.map(a => a.l);

export function letterInfo(l) {
  return ALPHABET.find(a => a.l === l.toUpperCase());
}

/* Stroke instructions used by the writing trainer (Uzbek coaching text). */
export const STROKE_TIPS = {
  A: 'Ikkita qiya chiziq va bitta ko‘ndalang chiziq.',
  B: 'Bitta tik chiziq, keyin ikkita qorin.',
  C: 'Bitta katta yarim doira — chapga qarab.',
  D: 'Tik chiziq va katta yarim doira.',
  E: 'Tik chiziq va uchta ko‘ndalang chiziq.',
  O: 'Bitta to‘liq doira — to‘pdek!',
  default: 'Nuqtalar ustidan sekin yur. Shoshilma!',
};
