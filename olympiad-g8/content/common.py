"""Shared helpers for the Grade 8 lesson sources.

Every lesson is a Python file next to this one that builds one dictionary and
hands it to `write`. The dictionary is dumped as JSON into
assets/data/lessons/lNN.js, which the lesson renderer reads. Keeping the
source in Python means the bilingual pairs stay side by side and the TeX is
written once, with no escaping of escapes.

Text carries a very small amount of markup: **bold**, *italic*, and TeX
between $...$ or $$...$$. A blank line is a paragraph break.
"""

import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, os.pardir, "assets", "data", "lessons")


# ---------------------------------------------------------------- pairs

def L(ru, en):
    """One bilingual string."""
    return {"ru": ru, "en": en}


def LL(ru, en):
    """One bilingual list of strings."""
    return {"ru": list(ru), "en": list(en)}


# ---------------------------------------------------------------- blocks

def p(ru, en):
    return {"t": "p", "text": L(ru, en)}


def _named(kind, name_ru, name_en, ru, en):
    b = {"t": kind, "text": L(ru, en)}
    if name_ru or name_en:
        b["name"] = L(name_ru, name_en)
    return b


def dfn(name_ru, name_en, ru, en):
    return _named("def", name_ru, name_en, ru, en)


def thm(name_ru, name_en, ru, en):
    return _named("thm", name_ru, name_en, ru, en)


def lemma(name_ru, name_en, ru, en):
    return _named("lemma", name_ru, name_en, ru, en)


def idea(name_ru, name_en, ru, en):
    return _named("idea", name_ru, name_en, ru, en)


def proof(ru, en):
    return {"t": "proof", "text": L(ru, en)}


def note(ru, en):
    return {"t": "note", "text": L(ru, en)}


def warn(ru, en):
    return {"t": "warn", "text": L(ru, en)}


def eq(tex):
    return {"t": "eq", "tex": tex}


def ul(ru, en):
    return {"t": "ul", "items": LL(ru, en)}


def ol(ru, en):
    return {"t": "ol", "items": LL(ru, en)}


def table(head_ru, head_en, rows_ru, rows_en):
    return {
        "t": "table",
        "head": LL(head_ru, head_en),
        "rows": {"ru": [list(r) for r in rows_ru],
                 "en": [list(r) for r in rows_en]},
    }


def fig(svg, cap_ru, cap_en):
    """A figure. The SVG is language-free; only the caption is translated.
    Author it with a viewBox and no width/height so the CSS can scale it."""
    return {"t": "fig", "svg": svg.strip(), "cap": L(cap_ru, cap_en)}


def ex(q_ru, q_en, steps_ru, steps_en, ans_ru, ans_en):
    """A worked example: the question, the numbered steps, the answer."""
    assert len(steps_ru) == len(steps_en), "step counts must match"
    return {
        "t": "ex",
        "q": L(q_ru, q_en),
        "steps": LL(steps_ru, steps_en),
        "ans": L(ans_ru, ans_en),
    }


def sec(h_ru, h_en, blocks):
    return {"h": L(h_ru, h_en), "blocks": list(blocks)}


# ---------------------------------------------------------------- problems

#  The label that sits beside a problem. It names the kind of round the
#  problem is typical of, not a specific paper: every problem here is written
#  for this course.
SRC = {
    "warm":  L("Разминка", "Warm-up"),
    "amc":   L("Уровень AMC 8", "AMC 8 level"),
    "amch":  L("AMC 8 · задачи 15–25", "AMC 8 · problems 15-25"),
    "kang":  L("Уровень «Кенгуру» (Cadet)", "Kangaroo level (Cadet)"),
    "kang5": L("«Кенгуру» · 5 баллов", "Kangaroo · 5 points"),
    "aops":  L("В духе AoPS", "AoPS style"),
    "class": L("Классическая задача", "Classic"),
    "chal":  L("Вызов", "Challenge"),
}


def prob(kind, lvl, q_ru, q_en, hint_ru, hint_en, sol_ru, sol_en):
    """One practice problem.

    `kind` is a key of SRC; `lvl` is 1-4 and drives the Easy/Medium/Hard/
    Olympiad filter on the page."""
    if kind not in SRC:
        raise KeyError("unknown source label: %r" % (kind,))
    if lvl not in (1, 2, 3, 4):
        raise ValueError("lvl must be 1-4, got %r" % (lvl,))
    s = SRC[kind]
    return {
        "src": s["ru"] + " / " + s["en"],
        "lvl": lvl,
        "q": L(q_ru, q_en),
        "hint": L(hint_ru, hint_en),
        "sol": L(sol_ru, sol_en),
    }


# ---------------------------------------------------------------- output

def write(lesson):
    """Dump one lesson to assets/data/lessons/lNN.js."""
    n = lesson["n"]
    _check(lesson)
    path = os.path.join(OUT, "l%02d.js" % n)
    body = json.dumps(lesson, ensure_ascii=False, indent=1)
    with open(path, "w", encoding="utf-8") as f:
        f.write("/* Grade 8 topic %d — generated from content/g8_%02d.py,"
                " do not edit by hand. */\n" % (n, n))
        f.write("window.LESSONS = window.LESSONS || {};\n")
        f.write("window.LESSONS[%d] = %s;\n" % (n, body))
    print("l%02d.js  %6.1f KB  %2d sections  %2d problems"
          % (n, os.path.getsize(path) / 1024.0,
             len(lesson["sections"]), len(lesson["problems"])))
    return {
        "n": n,
        "cat": lesson["cat"],
        "title": lesson["title"],
        "sub": lesson["sub"],
        "problems": len(lesson["problems"]),
        "sections": len(lesson["sections"]),
    }


def _check(lesson):
    """Catch the mistakes that would only show up as a blank page."""
    for key in ("n", "cat", "title", "sub", "goals", "sections", "problems"):
        if key not in lesson:
            raise KeyError("lesson %r is missing %r" % (lesson.get("n"), key))
    if lesson["cat"] not in ("nt", "alg", "geo", "comb", "mix"):
        raise ValueError("unknown category %r" % (lesson["cat"],))
    if len(lesson["goals"]["ru"]) != len(lesson["goals"]["en"]):
        raise ValueError("goal counts differ")
    known = {"p", "def", "thm", "lemma", "idea", "proof", "note", "warn",
             "eq", "ul", "ol", "table", "fig", "ex"}
    for s in lesson["sections"]:
        for b in s["blocks"]:
            if b["t"] not in known:
                raise ValueError("block type %r is not rendered" % (b["t"],))
    for i, pr in enumerate(lesson["problems"], 1):
        for side in ("ru", "en"):
            if not pr["q"][side].strip():
                raise ValueError("problem %d has an empty %s question" % (i, side))
            if not pr["sol"][side].strip():
                raise ValueError("problem %d has an empty %s solution" % (i, side))


def write_index(entries):
    """Dump the list of written lessons."""
    path = os.path.join(OUT, "index.js")
    entries = sorted(entries, key=lambda e: e["n"])
    with open(path, "w", encoding="utf-8") as f:
        f.write("/* Which Grade 8 topics have a written lesson."
                " Generated by content/build.py. */\n")
        f.write("window.LESSON_INDEX = %s;\n"
                % json.dumps(entries, ensure_ascii=False, indent=1))
    print("index.js  %d written lesson(s)" % len(entries))
