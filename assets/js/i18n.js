/* =========================================================
   i18n.js — language switching (English default / Uzbek)
   ========================================================= */
(function (global) {
  'use strict';

  var KEY = 'ali-lang';
  var lang = 'en';
  try { lang = localStorage.getItem(KEY) || 'en'; } catch (e) {}
  var VALID = ['en', 'uz', 'ru'];
  if (VALID.indexOf(lang) === -1) lang = 'en';

  global.Lang = {
    current: lang,
    set: function (l) {
      if (VALID.indexOf(l) === -1) l = 'en';
      global.Lang.current = l;
      try { localStorage.setItem(KEY, l); } catch (e) {}
    },
    /* Pick the right variant from a {en:..., uz:...} object */
    L: function (obj) {
      if (obj == null || typeof obj !== 'object') return obj;
      return obj[global.Lang.current] != null ? obj[global.Lang.current] : obj.en;
    }
  };
})(window);
