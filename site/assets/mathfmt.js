/* Tiny math-formatting helpers used by the lesson data files. */
(function (w) {
  w.m  = function (s) { return '<span class="m">' + s + '</span>'; };
  var WJ = '\u2060';   /* word joiner — keeps an atom glued to the character beside it */
  w.f  = function (n, dd) { return WJ + '<span class="frac"><span>' + n + '</span><span>' + dd + '</span></span>' + WJ; };
  w.fs = function (n, dd) { return WJ + '<span class="frac sm"><span>' + n + '</span><span>' + dd + '</span></span>' + WJ; };
  w.p  = function (b, e) { return b + '<sup>' + e + '</sup>'; };
  w.sb = function (b, e) { return b + '<sub>' + e + '</sub>'; };
  /* a column vector: two entries stacked inside tall brackets */
  w.col = function (a, b) {
    return WJ + '<span class="colv"><span>' + a + '</span><span>' + b + '</span></span>' + WJ;
  };
  w.RADSVG = '<svg class="rad" viewBox="0 0 10 20" preserveAspectRatio="none" aria-hidden="true">' +
    '<path d="M0.4 12.4 L2.6 12.4 L5 18.8 L9.4 0.9 L10 0.9"/></svg>';
  /* square root */
  w.sr = function (x) {
    return WJ + '<span class="sqrt">' + w.RADSVG + '<span class="body">' + x + '</span></span>' + WJ;
  };
  /* root of degree n: the index sits above the crook, outside the overbar */
  w.rt = function (n, x) {
    return WJ + '<span class="sqrt"><span class="idx">' + n + '</span>' + w.RADSVG +
      '<span class="body">' + x + '</span></span>' + WJ;
  };
  w.eq = function (s, boxed) { return '<div class="eq' + (boxed ? ' boxed' : '') + '">' + s + '</div>'; };
})(window);
