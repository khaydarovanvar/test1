#!/usr/bin/env python3
"""Build the Ellipse school door tags.

Trim size: 300 mm wide x 92 mm high (landscape strip, punched at both ends),
matching the sample tag "16 / GRADE 1P".

Outputs (into out/):
  Ellipse_Room_Tags_PRINT.pdf      316x108 mm pages: 300x92 trim + 3 mm bleed + crop marks
  Ellipse_Room_Tags_EXACT.pdf      300x92 mm pages, no marks (cut straight to the page edge)
  Ellipse_Room_Tags_A3_3up.pdf     A3 landscape, 3 tags per sheet with cut guides
  Ellipse_Room_Tags_Floor{1,2}.pdf per-floor PRINT-style files
  preview/*.png                    150 dpi previews of every tag
  preview/index.html               contact sheet of the whole set
"""

import csv
import html
import os
import re

from PIL import Image
from reportlab.lib.colors import Color, HexColor
from reportlab.lib.pagesizes import A3, landscape
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "out")
PREVIEW = os.path.join(OUT, "preview")

MM = 72.0 / 25.4  # one millimetre in PDF points

# ---------------------------------------------------------------- brand ----
# Sampled straight out of assets/ellipse-logo.jpg.
GREEN = HexColor("#008E52")  # logo swoosh
YELLOW = HexColor("#FFC200")  # logo wordmark
GREEN_DEEP = HexColor("#00603A")  # room number on the yellow panel
GREEN_WATERMARK = HexColor("#007F4A")  # tone-on-tone swoosh in the green panel
CREAM = HexColor("#EAF6EF")  # eyebrow text on green

FONT_HEAVY = "Ellipse-ExtraBold"
FONT_BOLD = "Ellipse-Bold"
CAP_RATIO = 0.700  # Montserrat sCapHeight / unitsPerEm

# ------------------------------------------------------------- geometry ----
TRIM_W, TRIM_H = 300.0, 92.0
BLEED = 3.0
MARGIN = 8.0  # page margin around the trim on the PRINT file (holds crop marks)

YELLOW_W = 84.0  # flat part of the yellow panel
LENS = 12.0  # how far the elliptical split bulges into the green
ARC_GAP = 3.6  # green gap between the split and the accent arc
ARC_W = 1.7  # thickness of the accent arc

NUM_CX = 47.0  # centre of the room number inside the yellow panel
NUM_MAX_W = 52.0
NUM_MAX_CAP = 34.0
NUM_BAND = (14.0, 60.0)  # vertical band the number cap box is centred in
EYEBROW_Y_YELLOW = 71.0  # baseline of "ROOM"

TEXT_X = 106.0  # left edge of everything in the green panel
TEXT_R = 274.0  # right limit (keeps clear of the right punch hole)
RULE_Y, RULE_W, RULE_H = 74.0, 28.0, 1.5
EYEBROW_Y = 63.0
EYEBROW_CAP = 5.2
EYEBROW_TRACK = 0.30
TITLE_BAND = (14.0, 55.0)  # vertical band for the main title block
TITLE_MAX_CAP = 30.0
TITLE_LEADING = 1.30  # baseline-to-baseline, in cap heights

WORDMARK_CAP = 4.2
WORDMARK_TRACK = 0.42
WORDMARK_Y = 72.6

HOLE_Y = TRIM_H / 2.0
HOLE_X = (12.0, TRIM_W - 12.0)
HOLE_D = 6.0

K = 0.5522847498  # circle/ellipse bezier constant


def register_fonts():
    fonts = os.path.join(HERE, "fonts")
    pdfmetrics.registerFont(TTFont(FONT_HEAVY, os.path.join(fonts, "Montserrat-ExtraBold.ttf")))
    pdfmetrics.registerFont(TTFont(FONT_BOLD, os.path.join(fonts, "Montserrat-Bold.ttf")))


def tinted(mask_path, color):
    """Recolour the swoosh alpha mask into a solid-colour RGBA image."""
    mask = Image.open(mask_path).convert("RGBA").split()[-1]
    rgb = tuple(int(round(c * 255)) for c in (color.red, color.green, color.blue))
    img = Image.new("RGBA", mask.size, rgb + (0,))
    img.putalpha(mask)
    return img


# ------------------------------------------------------------ text bits ----
def text_width(text, font, cap, track=0.0):
    """Visual width of `text` set at cap height `cap` with `track` em of tracking."""
    size = cap / CAP_RATIO
    w = pdfmetrics.stringWidth(text, font, size)
    if track and len(text) > 1:
        w += track * size * (len(text) - 1)
    return w


def draw_text(c, text, font, cap, x, y, color, track=0.0, align="left", alpha=1.0):
    size = cap / CAP_RATIO
    w = text_width(text, font, cap, track)
    if align == "center":
        x -= w / 2.0
    elif align == "right":
        x -= w
    c.saveState()
    if alpha < 1.0:
        c.setFillAlpha(alpha)
    t = c.beginText(x * MM, y * MM)
    t.setFont(font, size * MM)
    t.setFillColor(color)
    if track:
        t.setCharSpace(track * size * MM)
    t.textOut(text)
    c.drawText(t)
    c.restoreState()


def split_lines(text, n):
    """Break `text` into `n` roughly balanced lines on word boundaries."""
    words = text.split()
    if n == 1 or len(words) < n:
        return [text] if n == 1 else None
    best, best_score = None, None
    # try every way of cutting the word list into n contiguous chunks
    def walk(start, left, acc):
        nonlocal best, best_score
        if left == 1:
            chunks = acc + [words[start:]]
            lens = [len(" ".join(ch)) for ch in chunks]
            score = max(lens) - min(lens)
            if best_score is None or score < best_score:
                best_score, best = score, [" ".join(ch) for ch in chunks]
            return
        for end in range(start + 1, len(words) - left + 2):
            walk(end, left - 1, acc + [words[start:end]])

    walk(0, n, [])
    return best


def fit_title(text, max_w, band):
    """Pick the line break and cap height that fill `band` as generously as possible."""
    band_h = band[1] - band[0]
    best = None
    for n in (1, 2, 3):
        lines = split_lines(text, n)
        if not lines:
            continue
        by_width = min(
            max_w / max(text_width(ln, FONT_HEAVY, 1.0), 1e-6) for ln in lines
        )
        by_height = band_h / (1.0 + (n - 1) * TITLE_LEADING)
        cap = min(by_width, by_height, TITLE_MAX_CAP)
        if best is None or cap > best[0] + 0.01:
            best = (cap, lines)
    return best


# ------------------------------------------------------------- the tag -----
def yellow_panel_path(c, x_flat, lens):
    """Yellow field: a rectangle whose right edge is half an ellipse."""
    p = c.beginPath()
    p.moveTo(-BLEED * MM, (TRIM_H + BLEED) * MM)
    p.lineTo(x_flat * MM, (TRIM_H + BLEED) * MM)
    p.lineTo(x_flat * MM, TRIM_H * MM)
    p.curveTo(
        (x_flat + lens * K) * MM, TRIM_H * MM,
        (x_flat + lens) * MM, (TRIM_H / 2 + TRIM_H / 2 * K) * MM,
        (x_flat + lens) * MM, (TRIM_H / 2) * MM,
    )
    p.curveTo(
        (x_flat + lens) * MM, (TRIM_H / 2 - TRIM_H / 2 * K) * MM,
        (x_flat + lens * K) * MM, 0,
        x_flat * MM, 0,
    )
    p.lineTo(x_flat * MM, -BLEED * MM)
    p.lineTo(-BLEED * MM, -BLEED * MM)
    p.close()
    return p


def draw_tag(c, item, bleed=True):
    """Draw one tag with its trim-box origin at the current (0, 0)."""
    c.saveState()
    over = BLEED if bleed else 0.0
    c.rect(-over * MM, -over * MM, (TRIM_W + 2 * over) * MM, (TRIM_H + 2 * over) * MM,
           stroke=0, fill=0)
    p = c.beginPath()
    p.rect(-over * MM, -over * MM, (TRIM_W + 2 * over) * MM, (TRIM_H + 2 * over) * MM)
    c.clipPath(p, stroke=0, fill=0)

    # green field
    c.setFillColor(GREEN)
    c.rect(-BLEED * MM, -BLEED * MM, (TRIM_W + 2 * BLEED) * MM, (TRIM_H + 2 * BLEED) * MM,
           stroke=0, fill=1)

    # tone-on-tone swoosh, cropped by the right edge
    wm = SWOOSH_WATERMARK
    wm_w = 196.0
    wm_h = wm_w * wm.size[1] / wm.size[0]
    c.drawImage(ImageReader(wm), (268 - wm_w / 2) * MM, (TRIM_H / 2 - wm_h / 2) * MM,
                wm_w * MM, wm_h * MM, mask="auto")

    # the elliptical split
    c.setFillColor(YELLOW)
    c.drawPath(yellow_panel_path(c, YELLOW_W, LENS), stroke=0, fill=1)

    # accent arc echoing the split
    c.saveState()
    c.setStrokeColor(YELLOW)
    c.setLineWidth(ARC_W * MM)
    off = YELLOW_W + ARC_GAP + ARC_W / 2
    arc = c.beginPath()
    arc.moveTo(off * MM, TRIM_H * MM)
    arc.curveTo(
        (off + LENS * K) * MM, TRIM_H * MM,
        (off + LENS) * MM, (TRIM_H / 2 + TRIM_H / 2 * K) * MM,
        (off + LENS) * MM, (TRIM_H / 2) * MM,
    )
    arc.curveTo(
        (off + LENS) * MM, (TRIM_H / 2 - TRIM_H / 2 * K) * MM,
        (off + LENS * K) * MM, 0,
        off * MM, 0,
    )
    c.drawPath(arc, stroke=1, fill=0)
    c.restoreState()

    # ---- yellow panel: room number, or the swoosh when the plan gives none
    if item["room"]:
        draw_text(c, "ROOM", FONT_HEAVY, 4.6, NUM_CX, EYEBROW_Y_YELLOW, GREEN_DEEP,
                  track=0.34, align="center", alpha=0.62)
        num = item["room"]
        cap = min(NUM_MAX_W / text_width(num, FONT_HEAVY, 1.0), NUM_MAX_CAP)
        base = (NUM_BAND[0] + NUM_BAND[1]) / 2.0 - cap / 2.0
        draw_text(c, num, FONT_HEAVY, cap, NUM_CX, base, GREEN_DEEP, align="center")
    else:
        mark = LOGO_MARK
        mw = 48.0
        mh = mw * mark.size[1] / mark.size[0]
        c.drawImage(ImageReader(mark), (NUM_CX - mw / 2) * MM, (TRIM_H / 2 - mh / 2) * MM,
                    mw * MM, mh * MM, mask="auto")

    # ---- green panel
    c.setFillColor(YELLOW)
    c.rect(TEXT_X * MM, RULE_Y * MM, RULE_W * MM, RULE_H * MM, stroke=0, fill=1)
    draw_text(c, item["eyebrow"], FONT_HEAVY, EYEBROW_CAP, TEXT_X, EYEBROW_Y, CREAM,
              track=EYEBROW_TRACK)

    cap, lines = fit_title(item["title"], TEXT_R - TEXT_X, TITLE_BAND)
    block_h = cap * (1.0 + (len(lines) - 1) * TITLE_LEADING)
    top_base = (TITLE_BAND[0] + TITLE_BAND[1]) / 2.0 + block_h / 2.0 - cap
    for i, line in enumerate(lines):
        draw_text(c, line, FONT_HEAVY, cap, TEXT_X, top_base - i * cap * TITLE_LEADING,
                  YELLOW)

    draw_text(c, "ELLIPSE", FONT_HEAVY, WORDMARK_CAP, TEXT_R, WORDMARK_Y, YELLOW,
              track=WORDMARK_TRACK, align="right", alpha=0.80)

    c.restoreState()


# ------------------------------------------------------------- outputs -----
def draw_crop_marks(c, ox, oy):
    c.saveState()
    c.setStrokeColor(Color(0, 0, 0))
    c.setLineWidth(0.25)
    inner, outer = BLEED + 1.0, MARGIN
    for x in (0.0, TRIM_W):
        for y in (0.0, TRIM_H):
            sx = -1 if x == 0 else 1
            sy = -1 if y == 0 else 1
            c.line((ox + x + sx * inner) * MM, (oy + y) * MM,
                   (ox + x + sx * outer) * MM, (oy + y) * MM)
            c.line((ox + x) * MM, (oy + y + sy * inner) * MM,
                   (ox + x) * MM, (oy + y + sy * outer) * MM)
    # punch-hole guides, in the margin only — they trim away with the waste
    c.setStrokeColor(Color(0.55, 0.55, 0.55))
    for hx in HOLE_X:
        c.line((ox + hx) * MM, (oy - BLEED - 1.2) * MM, (ox + hx) * MM, (oy - MARGIN) * MM)
        c.line((ox + hx) * MM, (oy + TRIM_H + BLEED + 1.2) * MM,
               (ox + hx) * MM, (oy + TRIM_H + MARGIN) * MM)
    c.restoreState()


def build_print_pdf(items, path, title):
    pw, ph = TRIM_W + 2 * MARGIN, TRIM_H + 2 * MARGIN
    c = canvas.Canvas(path, pagesize=(pw * MM, ph * MM))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for it in items:
        c.saveState()
        c.translate(MARGIN * MM, MARGIN * MM)
        draw_tag(c, it, bleed=True)
        c.restoreState()
        draw_crop_marks(c, MARGIN, MARGIN)
        c.showPage()
    c.save()


def build_exact_pdf(items, path, title):
    c = canvas.Canvas(path, pagesize=(TRIM_W * MM, TRIM_H * MM))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for it in items:
        draw_tag(c, it, bleed=False)
        c.showPage()
    c.save()


def build_a3_pdf(items, path, title):
    pw, ph = landscape(A3)
    pw_mm, ph_mm = pw / MM, ph / MM
    per = 3
    gap = 6.0
    block = per * TRIM_H + (per - 1) * gap
    ox = (pw_mm - TRIM_W) / 2.0
    oy0 = (ph_mm - block) / 2.0
    c = canvas.Canvas(path, pagesize=(pw, ph))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for i in range(0, len(items), per):
        chunk = items[i:i + per]
        for j, it in enumerate(chunk):
            oy = oy0 + (len(chunk) - 1 - j) * (TRIM_H + gap)
            c.saveState()
            c.translate(ox * MM, oy * MM)
            draw_tag(c, it, bleed=False)
            c.restoreState()
            c.saveState()
            c.setStrokeColor(Color(0.6, 0.6, 0.6))
            c.setLineWidth(0.25)
            for x in (0.0, TRIM_W):
                for y in (0.0, TRIM_H):
                    sx = -1 if x == 0 else 1
                    sy = -1 if y == 0 else 1
                    c.line((ox + x + sx * 1.5) * MM, (oy + y) * MM,
                           (ox + x + sx * 5.0) * MM, (oy + y) * MM)
                    c.line((ox + x) * MM, (oy + y + sy * 1.5) * MM,
                           (ox + x) * MM, (oy + y + sy * 5.0) * MM)
            c.setStrokeColor(Color(0.72, 0.72, 0.72))
            for hx in HOLE_X:
                c.line((ox + hx) * MM, (oy - 1.2) * MM, (ox + hx) * MM, (oy - 4.0) * MM)
                c.line((ox + hx) * MM, (oy + TRIM_H + 1.2) * MM,
                       (ox + hx) * MM, (oy + TRIM_H + 4.0) * MM)
            c.restoreState()
        c.showPage()
    c.save()


def slug(it):
    base = "%s-%s" % (it["room"] or "x", it["title"])
    base = re.sub(r"[^A-Za-z0-9]+", "-", base).strip("-").lower()
    return "f%s-%s" % (it["floor"], base)


def build_previews(items, dpi=150):
    import pymupdf

    os.makedirs(PREVIEW, exist_ok=True)
    tmp = os.path.join(PREVIEW, "_tmp.pdf")
    build_exact_pdf(items, tmp, "preview")
    doc = pymupdf.open(tmp)
    names = []
    for i, it in enumerate(items):
        pix = doc[i].get_pixmap(dpi=dpi)
        name = slug(it) + ".png"
        pix.save(os.path.join(PREVIEW, name))
        names.append(name)
    doc.close()
    os.remove(tmp)
    return names


def build_index(items, names):
    rows = []
    for it, name in zip(items, names):
        room = it["room"] or "—"
        rows.append(
            '<figure><img src="%s" alt="%s"><figcaption>Floor %s &middot; Room %s</figcaption></figure>'
            % (html.escape(name), html.escape(it["title"]), it["floor"], html.escape(room))
        )
    doc = """<!doctype html><meta charset="utf-8"><title>Ellipse room tags</title>
<style>
body{margin:0;background:#f4f6f5;font:14px/1.5 system-ui,sans-serif;color:#123}
h1{font-size:20px;margin:28px 24px 4px}
p.sub{margin:0 24px 24px;color:#567}
figure{margin:0 0 18px;background:#fff;border-radius:10px;padding:10px;
       box-shadow:0 1px 3px rgba(0,0,0,.12)}
img{display:block;width:100%%;height:auto;border-radius:4px}
figcaption{margin-top:8px;font-size:12px;color:#678;letter-spacing:.04em;text-transform:uppercase}
.grid{padding:0 24px 40px;max-width:1100px}
</style>
<h1>Ellipse &mdash; door tags</h1>
<p class="sub">%d tags &middot; 300 &times; 92 mm each</p>
<div class="grid">%s</div>
""" % (len(items), "\n".join(rows))
    with open(os.path.join(PREVIEW, "index.html"), "w") as fh:
        fh.write(doc)


def load_rooms():
    with open(os.path.join(HERE, "rooms.csv")) as fh:
        rows = list(csv.DictReader(fh))
    items = []
    for r in rows:
        items.append({
            "floor": r["floor"].strip(),
            "room": r["room"].strip(),
            "eyebrow": r["eyebrow"].strip(),
            "title": r["title"].strip(),
        })
    return items


def main():
    register_fonts()
    global SWOOSH_WATERMARK, LOGO_MARK
    SWOOSH_WATERMARK = tinted(os.path.join(HERE, "assets", "swoosh-mask.png"), GREEN_WATERMARK)
    LOGO_MARK = tinted(os.path.join(HERE, "assets", "logo-mask.png"), GREEN_DEEP)

    items = load_rooms()
    os.makedirs(OUT, exist_ok=True)

    build_print_pdf(items, os.path.join(OUT, "Ellipse_Room_Tags_PRINT.pdf"),
                    "Ellipse room tags — print, 3 mm bleed")
    build_exact_pdf(items, os.path.join(OUT, "Ellipse_Room_Tags_EXACT.pdf"),
                    "Ellipse room tags — exact 300x92 mm")
    build_a3_pdf(items, os.path.join(OUT, "Ellipse_Room_Tags_A3_3up.pdf"),
                 "Ellipse room tags — A3, 3 up")
    for floor in ("1", "2"):
        sub = [i for i in items if i["floor"] == floor]
        build_print_pdf(sub, os.path.join(OUT, "Ellipse_Room_Tags_Floor%s.pdf" % floor),
                        "Ellipse room tags — floor %s" % floor)

    names = build_previews(items)
    build_index(items, names)
    print("%d tags -> %s" % (len(items), OUT))


if __name__ == "__main__":
    main()
