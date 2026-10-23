/* Shared language layer for the pages that are not lessons.

   The lesson renderer carries its own copy of this logic (it needs the
   language before it can build anything), but it reads and writes the same
   localStorage key, so a choice made on any page follows the reader
   everywhere.  Russian is the default; ?lang=en overrides it for one visit
   and the switch makes the choice stick. */
(function (w, d) {
  'use strict';

  var LANGS = ['ru', 'en'];
  var KEY = 'ml-lang';

  function lang() {
    var q = (location.search.match(/[?&]lang=(ru|en)/) || [])[1];
    if (q) return q;
    try {
      var saved = localStorage.getItem(KEY);
      if (LANGS.indexOf(saved) > -1) return saved;
    } catch (e) { /* private mode: fall through to the default */ }
    return 'ru';
  }

  function set(l) {
    try { localStorage.setItem(KEY, l); } catch (e) { /* nothing to do */ }
    var url = new URL(location.href);
    url.searchParams.set('lang', l);
    location.replace(url.toString());
  }

  /* Pull the right half out of a {ru, en} pair; plain strings pass through,
     so half-translated data still renders. */
  function pick(v, l) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      return v[l] != null ? v[l] : v.en;
    }
    return v;
  }

  function mountSwitch(cur) {
    Array.prototype.forEach.call(d.querySelectorAll('.langsw'), function (sw) {
      sw.innerHTML = LANGS.map(function (l) {
        return '<button type="button" data-lang="' + l + '"' +
          (l === cur ? ' class="on"' : '') + '>' + (l === 'ru' ? 'РУС' : 'ENG') + '</button>';
      }).join('');
      sw.addEventListener('click', function (e) {
        var b = e.target.closest('[data-lang]');
        if (b) set(b.getAttribute('data-lang'));
      });
    });
  }

  /* Translate the static markup.

       data-i18n="key"            replaces the text
       data-i18n-html="key"       replaces the markup (for copy with <br>)
       data-i18n-attr="title:key" replaces an attribute

     A missing key leaves the element alone, so the English written in the
     HTML stays as the fallback. */
  function apply(dict, l) {
    function value(key) {
      var v = dict[key];
      return v == null ? null : pick(v, l);
    }

    Array.prototype.forEach.call(d.querySelectorAll('[data-i18n]'), function (el) {
      var v = value(el.getAttribute('data-i18n'));
      if (v != null) el.textContent = v;
    });
    Array.prototype.forEach.call(d.querySelectorAll('[data-i18n-html]'), function (el) {
      var v = value(el.getAttribute('data-i18n-html'));
      if (v != null) el.innerHTML = v;
    });
    Array.prototype.forEach.call(d.querySelectorAll('[data-i18n-attr]'), function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        var v = value(bits[1]);
        if (v != null) el.setAttribute(bits[0].trim(), v);
      });
    });

    d.documentElement.lang = l;
    var t = value('pageTitle');
    if (t) d.title = t;
    var m = d.querySelector('meta[name="description"]');
    var md = value('pageDesc');
    if (m && md) m.setAttribute('content', md);
  }

  /* Russian counts in three forms, English in two. */
  function plural(l, n, forms) {
    if (l !== 'ru') return n + ' ' + forms[n === 1 ? 0 : 1];
    var a = n % 10, b = n % 100;
    var f = (a === 1 && b !== 11) ? 0
          : (a >= 2 && a <= 4 && (b < 12 || b > 14)) ? 1 : 2;
    return n + ' ' + forms[f];
  }

  w.ML = { LANGS: LANGS, lang: lang, set: set, pick: pick,
           mountSwitch: mountSwitch, apply: apply, plural: plural };
})(window, document);
