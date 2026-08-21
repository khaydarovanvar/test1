/* =========================================================
   vocab.js — English vocabulary for the learning games
   Shared by english.html (games) and print.html (worksheets).
   Each word: { e: emoji, en, uz, ru }
   ========================================================= */
(function (global) {
  'use strict';

  var ALPHABET = [
    { l: 'A', e: '🍎', w: 'apple' },      { l: 'B', e: '⚽', w: 'ball' },
    { l: 'C', e: '🐱', w: 'cat' },        { l: 'D', e: '🐶', w: 'dog' },
    { l: 'E', e: '🐘', w: 'elephant' },   { l: 'F', e: '🐟', w: 'fish' },
    { l: 'G', e: '🍇', w: 'grapes' },     { l: 'H', e: '🏠', w: 'house' },
    { l: 'I', e: '🍦', w: 'ice cream' },  { l: 'J', e: '🧃', w: 'juice' },
    { l: 'K', e: '🔑', w: 'key' },        { l: 'L', e: '🦁', w: 'lion' },
    { l: 'M', e: '🌙', w: 'moon' },       { l: 'N', e: '👃', w: 'nose' },
    { l: 'O', e: '🍊', w: 'orange' },     { l: 'P', e: '✏️', w: 'pencil' },
    { l: 'Q', e: '👑', w: 'queen' },      { l: 'R', e: '🐰', w: 'rabbit' },
    { l: 'S', e: '☀️', w: 'sun' },        { l: 'T', e: '🚂', w: 'train' },
    { l: 'U', e: '☂️', w: 'umbrella' },   { l: 'V', e: '🎻', w: 'violin' },
    { l: 'W', e: '🍉', w: 'watermelon' }, { l: 'X', e: '🩻', w: 'x-ray' },
    { l: 'Y', e: '🪀', w: 'yo-yo' },      { l: 'Z', e: '🦓', w: 'zebra' }
  ];

  var CATEGORIES = [
    {
      id: 'animals', e: '🐶',
      name: { en: 'Animals', uz: 'Hayvonlar', ru: 'Животные' },
      words: [
        { e: '🐶', en: 'dog',      uz: "it",       ru: 'собака' },
        { e: '🐱', en: 'cat',      uz: "mushuk",   ru: 'кошка' },
        { e: '🐦', en: 'bird',     uz: "qush",     ru: 'птица' },
        { e: '🐟', en: 'fish',     uz: "baliq",    ru: 'рыбка' },
        { e: '🐴', en: 'horse',    uz: "ot",       ru: 'лошадь' },
        { e: '🐮', en: 'cow',      uz: "sigir",    ru: 'корова' },
        { e: '🐑', en: 'sheep',    uz: "qo'y",     ru: 'овца' },
        { e: '🐔', en: 'chicken',  uz: "tovuq",    ru: 'курица' },
        { e: '🐰', en: 'rabbit',   uz: "quyon",    ru: 'кролик' },
        { e: '🦁', en: 'lion',     uz: "sher",     ru: 'лев' },
        { e: '🐘', en: 'elephant', uz: "fil",      ru: 'слон' },
        { e: '🐵', en: 'monkey',   uz: "maymun",   ru: 'обезьяна' }
      ]
    },
    {
      id: 'food', e: '🍎',
      name: { en: 'Food', uz: 'Ovqatlar', ru: 'Еда' },
      words: [
        { e: '🍎', en: 'apple',      uz: "olma",       ru: 'яблоко' },
        { e: '🍌', en: 'banana',     uz: "banan",      ru: 'банан' },
        { e: '🍊', en: 'orange',     uz: "apelsin",    ru: 'апельсин' },
        { e: '🍇', en: 'grapes',     uz: "uzum",       ru: 'виноград' },
        { e: '🍉', en: 'watermelon', uz: "tarvuz",     ru: 'арбуз' },
        { e: '🍓', en: 'strawberry', uz: "qulupnay",   ru: 'клубника' },
        { e: '🍞', en: 'bread',      uz: "non",        ru: 'хлеб' },
        { e: '🥛', en: 'milk',       uz: "sut",        ru: 'молоко' },
        { e: '🥚', en: 'egg',        uz: "tuxum",      ru: 'яйцо' },
        { e: '🧀', en: 'cheese',     uz: "pishloq",    ru: 'сыр' },
        { e: '🍪', en: 'cookie',     uz: "pechene",    ru: 'печенье' },
        { e: '🍦', en: 'ice cream',  uz: "muzqaymoq",  ru: 'мороженое' }
      ]
    },
    {
      id: 'colors', e: '🌈',
      name: { en: 'Colors', uz: 'Ranglar', ru: 'Цвета' },
      words: [
        { e: '🔴', en: 'red',    uz: "qizil",      ru: 'красный' },
        { e: '🟠', en: 'orange', uz: "to'q sariq", ru: 'оранжевый' },
        { e: '🟡', en: 'yellow', uz: "sariq",      ru: 'жёлтый' },
        { e: '🟢', en: 'green',  uz: "yashil",     ru: 'зелёный' },
        { e: '🔵', en: 'blue',   uz: "ko'k",       ru: 'синий' },
        { e: '🟣', en: 'purple', uz: "binafsha",   ru: 'фиолетовый' },
        { e: '🟤', en: 'brown',  uz: "jigarrang",  ru: 'коричневый' },
        { e: '⚫', en: 'black',  uz: "qora",       ru: 'чёрный' },
        { e: '⚪', en: 'white',  uz: "oq",         ru: 'белый' },
        { e: '🩷', en: 'pink',   uz: "pushti",     ru: 'розовый' }
      ]
    },
    {
      id: 'numbers', e: '🔢',
      name: { en: 'Numbers', uz: 'Sonlar', ru: 'Числа' },
      words: [
        { e: '1️⃣', en: 'one',   uz: "bir",    ru: 'один' },
        { e: '2️⃣', en: 'two',   uz: "ikki",   ru: 'два' },
        { e: '3️⃣', en: 'three', uz: "uch",    ru: 'три' },
        { e: '4️⃣', en: 'four',  uz: "to'rt",  ru: 'четыре' },
        { e: '5️⃣', en: 'five',  uz: "besh",   ru: 'пять' },
        { e: '6️⃣', en: 'six',   uz: "olti",   ru: 'шесть' },
        { e: '7️⃣', en: 'seven', uz: "yetti",  ru: 'семь' },
        { e: '8️⃣', en: 'eight', uz: "sakkiz", ru: 'восемь' },
        { e: '9️⃣', en: 'nine',  uz: "to'qqiz",ru: 'девять' },
        { e: '🔟', en: 'ten',   uz: "o'n",    ru: 'десять' }
      ]
    },
    {
      id: 'body', e: '👋',
      name: { en: 'My body', uz: 'Tanam', ru: 'Моё тело' },
      words: [
        { e: '✋', en: 'hand',   uz: "qo'l",   ru: 'рука' },
        { e: '🦶', en: 'foot',   uz: "oyoq",   ru: 'нога' },
        { e: '👁️', en: 'eye',    uz: "ko'z",   ru: 'глаз' },
        { e: '👂', en: 'ear',    uz: "quloq",  ru: 'ухо' },
        { e: '👃', en: 'nose',   uz: "burun",  ru: 'нос' },
        { e: '👄', en: 'mouth',  uz: "og'iz",  ru: 'рот' },
        { e: '🦷', en: 'tooth',  uz: "tish",   ru: 'зуб' },
        { e: '👅', en: 'tongue', uz: "til",    ru: 'язык' },
        { e: '😊', en: 'face',   uz: "yuz",    ru: 'лицо' },
        { e: '❤️', en: 'heart',  uz: "yurak",  ru: 'сердце' }
      ]
    },
    {
      id: 'clothes', e: '👕',
      name: { en: 'Clothes', uz: 'Kiyimlar', ru: 'Одежда' },
      words: [
        { e: '👕', en: 'shirt',  uz: "ko'ylak",  ru: 'рубашка' },
        { e: '👖', en: 'pants',  uz: "shim",     ru: 'брюки' },
        { e: '👗', en: 'dress',  uz: "libos",    ru: 'платье' },
        { e: '👟', en: 'shoes',  uz: "poyabzal", ru: 'туфли' },
        { e: '🧦', en: 'socks',  uz: "paypoq",   ru: 'носки' },
        { e: '🧢', en: 'hat',    uz: "shapka",   ru: 'шапка' },
        { e: '🧥', en: 'coat',   uz: "palto",    ru: 'пальто' },
        { e: '🧣', en: 'scarf',  uz: "sharf",    ru: 'шарф' },
        { e: '🧤', en: 'gloves', uz: "qo'lqop",  ru: 'перчатки' },
        { e: '👢', en: 'boots',  uz: "etik",     ru: 'сапоги' }
      ]
    },
    {
      id: 'home', e: '🏠',
      name: { en: 'My home', uz: 'Uyim', ru: 'Мой дом' },
      words: [
        { e: '🏠', en: 'house',  uz: "uy",      ru: 'дом' },
        { e: '🚪', en: 'door',   uz: "eshik",   ru: 'дверь' },
        { e: '🪟', en: 'window', uz: "deraza",  ru: 'окно' },
        { e: '🛏️', en: 'bed',    uz: "karavot", ru: 'кровать' },
        { e: '🪑', en: 'chair',  uz: "stul",    ru: 'стул' },
        { e: '🛋️', en: 'sofa',   uz: "divan",   ru: 'диван' },
        { e: '💡', en: 'lamp',   uz: "chiroq",  ru: 'лампа' },
        { e: '🔑', en: 'key',    uz: "kalit",   ru: 'ключ' },
        { e: '⏰', en: 'clock',  uz: "soat",    ru: 'часы' },
        { e: '🥄', en: 'spoon',  uz: "qoshiq",  ru: 'ложка' }
      ]
    },
    {
      id: 'transport', e: '🚗',
      name: { en: 'Transport', uz: 'Transport', ru: 'Транспорт' },
      words: [
        { e: '🚗', en: 'car',        uz: "mashina",          ru: 'машина' },
        { e: '🚌', en: 'bus',        uz: "avtobus",          ru: 'автобус' },
        { e: '🚂', en: 'train',      uz: "poyezd",           ru: 'поезд' },
        { e: '✈️', en: 'plane',      uz: "samolyot",         ru: 'самолёт' },
        { e: '🚲', en: 'bike',       uz: "velosiped",        ru: 'велосипед' },
        { e: '⛵', en: 'boat',       uz: "qayiq",            ru: 'лодка' },
        { e: '🚚', en: 'truck',      uz: "yuk mashinasi",    ru: 'грузовик' },
        { e: '🚁', en: 'helicopter', uz: "vertolyot",        ru: 'вертолёт' },
        { e: '🚀', en: 'rocket',     uz: "raketa",           ru: 'ракета' },
        { e: '🚓', en: 'police car', uz: "politsiya mashinasi", ru: 'полицейская машина' }
      ]
    },
    {
      id: 'nature', e: '☀️',
      name: { en: 'Nature', uz: 'Tabiat', ru: 'Природа' },
      words: [
        { e: '☀️', en: 'sun',      uz: "quyosh",  ru: 'солнце' },
        { e: '🌙', en: 'moon',     uz: "oy",      ru: 'луна' },
        { e: '⭐', en: 'star',     uz: "yulduz",  ru: 'звезда' },
        { e: '🌧️', en: 'rain',     uz: "yomg'ir", ru: 'дождь' },
        { e: '❄️', en: 'snow',     uz: "qor",     ru: 'снег' },
        { e: '🌳', en: 'tree',     uz: "daraxt",  ru: 'дерево' },
        { e: '🌸', en: 'flower',   uz: "gul",     ru: 'цветок' },
        { e: '⛰️', en: 'mountain', uz: "tog'",    ru: 'гора' },
        { e: '🌊', en: 'sea',      uz: "dengiz",  ru: 'море' },
        { e: '☁️', en: 'cloud',    uz: "bulut",   ru: 'облако' }
      ]
    },
    {
      id: 'family', e: '👨‍👩‍👦',
      name: { en: 'Family & school', uz: 'Oila va maktab', ru: 'Семья и школа' },
      words: [
        { e: '👩', en: 'mom',     uz: "oyi",      ru: 'мама' },
        { e: '👨', en: 'dad',     uz: "dada",     ru: 'папа' },
        { e: '👶', en: 'baby',    uz: "chaqaloq", ru: 'малыш' },
        { e: '👦', en: 'boy',     uz: "bola",     ru: 'мальчик' },
        { e: '👧', en: 'girl',    uz: "qiz",      ru: 'девочка' },
        { e: '👵', en: 'grandma', uz: "buvi",     ru: 'бабушка' },
        { e: '👴', en: 'grandpa', uz: "buva",     ru: 'дедушка' },
        { e: '📚', en: 'book',    uz: "kitob",    ru: 'книга' },
        { e: '✏️', en: 'pencil',  uz: "qalam",    ru: 'карандаш' },
        { e: '🏫', en: 'school',  uz: "maktab",   ru: 'школа' },
        { e: '⚽', en: 'ball',    uz: "to'p",     ru: 'мяч' },
        { e: '🧸', en: 'teddy bear', uz: "ayiqcha", ru: 'мишка' }
      ]
    }
  ];

  global.Vocab = {
    ALPHABET: ALPHABET,
    CATEGORIES: CATEGORIES,
    byId: function (id) {
      for (var i = 0; i < CATEGORIES.length; i++) if (CATEGORIES[i].id === id) return CATEGORIES[i];
      return null;
    },
    /* helper translation shown to the child: ru UI → Russian, otherwise Uzbek */
    trans: function (w) { return global.Lang.current === 'ru' ? w.ru : w.uz; }
  };
})(window);
