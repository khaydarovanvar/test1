/* Tiny math-formatting helpers used by the lesson data files. */
(function (w) {
  w.m  = function (s) { return '<span class="m">' + s + '</span>'; };
  w.f  = function (n, dd) { return '<span class="frac"><span>' + n + '</span><span>' + dd + '</span></span>'; };
  w.fs = function (n, dd) { return '<span class="frac sm"><span>' + n + '</span><span>' + dd + '</span></span>'; };
  w.p  = function (b, e) { return b + '<sup>' + e + '</sup>'; };
  w.sb = function (b, e) { return b + '<sub>' + e + '</sub>'; };
  w.sr = function (x) { return '<span class="sqrt"><span class="rad">√</span><span class="body">' + x + '</span></span>'; };
  w.eq = function (s, boxed) { return '<div class="eq' + (boxed ? ' boxed' : '') + '">' + s + '</div>'; };
})(window);
