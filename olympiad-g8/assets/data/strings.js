/* Interface strings for the two pages of the Grade 8 track.

   The lesson renderer carries its own copy of the strings it needs — it has
   to build the page before this file is applied — so only the chrome shared
   by both pages lives here: the header, the mobile menu and the footer. */
var STRINGS = {
  brandSub:   { ru: 'AMC 8 · «Кенгуру» · 8 класс', en: 'AMC 8 · Kangaroo · Grade 8' },
  slogan:     { ru: 'От первой задачи — до пьедестала',
                en: 'From the first problem to the podium' },

  home:       { ru: 'Темы',  en: 'Topics' },
  topics:     { ru: 'Темы',  en: 'Topics' },

  menu:       { ru: 'Меню',  en: 'Menu' },
  menuOpen:   { ru: 'Открыть меню', en: 'Open the menu' },

  metaLevel:    { ru: 'Уровень', en: 'Level' },
  metaLevelVal: { ru: '8 класс<br>AMC 8, «Кенгуру», AoPS',
                  en: 'Grade 8<br>AMC 8, Kangaroo, AoPS' },

  metaCovers:    { ru: 'Разделы', en: 'Branches' },
  metaCoversVal: { ru: 'Числа · Алгебра · Геометрия<br>Комбинаторика · Логика',
                   en: 'Numbers · Algebra · Geometry<br>Counting · Logic' },

  footBot:    { ru: '8 класс · подготовка к AMC 8 и «Кенгуру»',
                en: 'Grade 8 · preparing for AMC 8 and Kangaroo' }
};
