# -*- coding: utf-8 -*-
"""Assemble the whole Grade 8 track into one self-contained HTML file.

    python3 olympiad-g8/build-standalone.py

Writes olympiad-g8/standalone.html: every stylesheet, script, lesson and KaTeX
font inlined, with hash routing (`#/` for the topic hub, `#/t9` for a topic).
It opens straight from the filesystem with no server, which is what to send
someone who just wants to read the thing.

Only the web fonts stay remote, so the display face falls back to a system
serif when the file is opened offline. Everything else — the maths included —
works with no network at all.

The two pages this is built from are not touched: the few differences a single
file needs (hash links instead of page links, re-rendering instead of
reloading on a language switch) are applied to copies on the way in.
"""

import base64
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "standalone.html")


def read(*parts):
    with open(os.path.join(HERE, *parts), encoding="utf-8") as f:
        return f.read()


def grab(html, start, end):
    """The slice of `html` from `start` up to and including `end`."""
    i = html.index(start)
    j = html.index(end, i) + len(end)
    return html[i:j]


# ------------------------------------------------------------------ styles

def katex_css():
    """KaTeX's stylesheet with its twenty woff2 faces turned into data URIs."""
    css = read("assets", "vendor", "katex", "katex.min.css")

    def embed(m):
        name = m.group(1)
        path = os.path.join(HERE, "assets", "vendor", "katex", "fonts", name)
        if not os.path.exists(path):
            return m.group(0)
        with open(path, "rb") as f:
            b64 = base64.b64encode(f.read()).decode("ascii")
        return "url(data:font/woff2;base64,%s)" % b64

    css, n = re.subn(r"url\(fonts/([A-Za-z0-9_\-]+\.woff2)\)", embed, css)
    print("  KaTeX: %d font faces inlined" % n)
    return css


# ------------------------------------------------------------------ scripts

def lesson_js():
    """The renderer, taught to read the topic from the hash and to re-render
    in place when the language changes rather than reloading the page."""
    js = read("assets", "js", "lesson.js")

    js = js.replace(
        "      var n = parseInt((location.search.match(/[?&]t=(\\d+)/) || [])[1], 10) || 1;",
        "      var n = parseInt((location.hash.match(/#\\/t(\\d+)/) || [])[1], 10) || 1;")

    #  There is no query string to read a language out of here; the choice
    #  lives in localStorage alone.
    js = js.replace(
        "    var q = (location.search.match(/[?&]lang=(ru|en)/) || [])[1];\n"
        "    if (q) return q;\n",
        "")

    js = js.replace(
        "    var url = new URL(location.href);\n"
        "    url.searchParams.set('lang', lang);\n"
        "    location.replace(url.toString());",
        "    if (w.MLROUTE) w.MLROUTE();")

    js = js.replace("href=\"index.html\"", "href=\"#/\"")

    for marker in ("location.hash.match", "w.MLROUTE", 'href="#/"'):
        assert marker in js, "lesson.js patch did not apply: " + marker
    assert "location.search" not in js, "lesson.js still reads the query string"
    return js


def hub_js(index_html):
    """The hub's own inline script, wrapped so the router can re-run it."""
    js = grab(index_html,
              "(function () {\n  var lang = window.MLLESSON.lang();",
              "})();")
    js = js.replace("(function () {\n", "window.MLHUB = function () {\n", 1)
    assert js.endswith("})();")
    js = js[:-len("})();")] + "};"
    js = js.replace("('lesson.html?t=' + t.n + '&lang=' + lang)", "('#/t' + t.n)")
    js = js.replace("'index.html'", "'#/'")
    assert "window.MLHUB" in js and "lesson.html" not in js
    return js


ROUTER = """
/* The router. `#/` is the topic hub, `#/t9` is topic 9; anything else is the
   hub. Both skeletons live in the page and only one is shown at a time, so
   switching topics never reloads and never touches the network. */
(function (w, d) {
  'use strict';
  var hub = d.getElementById('page-hub');
  var lesson = d.getElementById('page-lesson');

  function route() {
    var lang = w.MLLESSON.lang();
    var onLesson = /^#\\/t\\d+/.test(location.hash);
    hub.hidden = onLesson;
    lesson.hidden = !onLesson;
    if (onLesson) { w.MLLESSON.start(); } else { w.MLHUB(); }
    if (w.ML && w.STRINGS) { w.ML.apply(w.STRINGS, lang); }
    d.documentElement.lang = lang;
    /* app.js reveals elements as they scroll into view; the cards the hub
       just rebuilt were never observed, so show them outright. */
    Array.prototype.forEach.call(d.querySelectorAll('[data-reveal],[data-split]'),
      function (el) { el.classList.add('in'); });
    w.scrollTo(0, 0);
  }

  w.MLROUTE = route;
  w.addEventListener('hashchange', route);
  route();
})(window, document);
"""


def main():
    index = read("index.html")
    lesson = read("lesson.html")

    print("assembling standalone.html")

    head_extra = grab(index, "<style>\n  .no-js [data-reveal]", "</style>")
    header = grab(index, '<header class="nav', "</header>")
    menu = grab(index, '<div class="menu-overlay"', "</div>\n</div>")
    hub_body = (grab(index, '<section class="lx-head">', "</section>")
                + "\n"
                + grab(index, '<div class="marquee', "</div>\n</div>")
                + "\n"
                + grab(index, '<section class="section section--tight">',
                       "</section>"))
    lesson_body = (grab(lesson, '<section class="lhead"', "</section>")
                   + "\n"
                   + grab(lesson, '<section class="section section--tight">',
                          "</section>"))
    footer = grab(index, '<footer class="foot">', "</footer>")

    parts = ["""<!doctype html>
<html lang="ru" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Олимпиадная математика, 8 класс — AMC 8, «Кенгуру», AoPS</title>
<meta name="description" content="Весь курс одним файлом: девятнадцать тем \
олимпиадной математики для 8 класса, из них три написаны полностью — теория с \
доказательствами и задачи с решениями. На русском и английском.">
<meta name="theme-color" content="#0F1B2A">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:\
opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&\
family=JetBrains+Mono:wght@400;500&family=Caveat:wght@600&display=swap">
"""]

    parts.append("<style>%s</style>\n" % katex_css())
    parts.append("<style>%s</style>\n" % read("assets", "css", "main.css"))
    parts.append("<style>%s</style>\n" % read("assets", "css", "lesson.css"))
    parts.append(head_extra + "\n")
    parts.append("<style>[hidden]{display:none !important}</style>\n")
    parts.append("</head>\n<body>\n")
    parts.append("<script>document.documentElement.classList.remove('no-js');</script>\n")
    parts.append(header + "\n")
    parts.append(menu + "\n")
    parts.append('<div id="page-hub">\n' + hub_body + "\n</div>\n")
    parts.append('<div id="page-lesson" hidden>\n' + lesson_body + "\n</div>\n")
    parts.append(footer + "\n")

    for path in [("assets", "vendor", "katex", "katex.min.js"),
                 ("assets", "vendor", "katex", "auto-render.min.js"),
                 ("assets", "data", "topics.js"),
                 ("assets", "data", "lessons", "index.js"),
                 ("assets", "data", "strings.js")]:
        parts.append("<script>%s</script>\n" % read(*path))

    lessons = sorted(f for f in os.listdir(os.path.join(HERE, "assets", "data", "lessons"))
                     if re.fullmatch(r"l\d\d\.js", f))
    for f in lessons:
        parts.append("<script>%s</script>\n" % read("assets", "data", "lessons", f))
    print("  lessons: %s" % ", ".join(lessons))

    parts.append("<script>%s</script>\n" % read("assets", "js", "i18n.js"))
    parts.append("<script>%s</script>\n" % lesson_js())
    parts.append("<script>%s</script>\n" % hub_js(index))
    parts.append("<script>%s</script>\n" % read("assets", "js", "app.js"))
    parts.append("<script>%s</script>\n" % ROUTER)
    parts.append("</body>\n</html>\n")

    html = "".join(parts)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(html)
    print("\nstandalone.html  %.1f MB" % (os.path.getsize(OUT) / 1048576.0))


if __name__ == "__main__":
    main()
