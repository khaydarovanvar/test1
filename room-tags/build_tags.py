#!/usr/bin/env python3
"""Build the Ellipse school door tags.

Trim size: 297 mm wide x 91 mm high (the full width of a landscape A4 sheet,
punched at both ends),
matching the sample tag "16 / GRADE 1P": straight-cut corners and a straight
split between the yellow and green fields.

Outputs (into out/):
  Ellipse_Room_Tags_PRINT.pdf      313x107 mm pages: 297x91 trim + 3 mm bleed + crop marks
  Ellipse_Room_Tags_EXACT.pdf      297x91 mm pages, no marks (cut straight to the page edge)
  Ellipse_Room_Tags_A4_2up.pdf     A4 landscape, 2 full-width tags per sheet at 100%
  Ellipse_Room_Tags_A3_3up.pdf     A3 landscape, 3 tags per sheet at 100%
  png/*.png                        300 dpi print-resolution PNG of every tag
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
from reportlab.lib.pagesizes import A3, A4, landscape
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
TRIM_W, TRIM_H = 297.0, 91.0
BLEED = 3.0
MARGIN = 8.0  # page margin around the trim on the PRINT file (holds crop marks)

YELLOW_W = 86.0  # left yellow panel, straight edge
RIGHT_YW = 16.0  # right yellow bookend, straight edge
ACCENT_GAP = 3.4  # green gap between a yellow field and its accent line
ACCENT_W = 1.6  # thickness of the accent lines

NUM_CX = 47.0  # centre of the room number inside the yellow panel
NUM_MAX_W = 52.0
NUM_MAX_CAP = 34.0
NUM_BAND = (13.5, 59.5)  # vertical band the number cap box is centred in
EYEBROW_Y_YELLOW = 70.5  # baseline of "ROOM"

# green panel: everything sits on the centre axis between the accent lines
GREEN_L = YELLOW_W + ACCENT_GAP + ACCENT_W  # 91.0
GREEN_R = TRIM_W - RIGHT_YW - ACCENT_GAP - ACCENT_W  # 279.0
TEXT_CX = (GREEN_L + GREEN_R) / 2.0
TEXT_MAX_W = GREEN_R - GREEN_L - 22.0  # breathing room to both accent lines
RULE_Y, RULE_W, RULE_H = 73.5, 28.0, 1.5
EYEBROW_Y = 62.5
EYEBROW_CAP = 5.2
EYEBROW_TRACK = 0.30
TITLE_BAND = (12.5, 54.5)  # vertical band for the main title block
TITLE_MAX_CAP = 32.0
TITLE_LEADING = 1.30  # baseline-to-baseline, in cap heights

WORDMARK_CAP = 4.0
WORDMARK_TRACK = 0.42
WORDMARK_Y = 80.5

HOLE_Y = TRIM_H / 2.0
HOLE_X = (12.0, TRIM_W - 12.0)  # both holes sit in yellow, like the sample
HOLE_D = 6.0


def register_fonts():
    fonts = os.path.join(HERE, "fonts")
    pdfmetrics.registerFont(TTFont(FONT_HEAVY, os.path.join(fonts, "Montserrat-ExtraBold.ttf")))
    pdfmetrics.registerFont(TTFont(FONT_BOLD, os.path.join(fonts, "Montserrat-Bold.ttf")))


def tinted(mask_path, color):
    """Recolour an alpha mask into a solid-colour RGBA image."""
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


def fit_title(text, max_w, band, max_cap=None):
    """Pick the line break and cap height that fill `band` as generously as possible."""
    band_h = band[1] - band[0]
    max_cap = TITLE_MAX_CAP if max_cap is None else max_cap
    best = None
    for n in (1, 2, 3):
        lines = split_lines(text, n)
        if not lines:
            continue
        by_width = min(
            max_w / max(text_width(ln, FONT_HEAVY, 1.0), 1e-6) for ln in lines
        )
        by_height = band_h / (1.0 + (n - 1) * TITLE_LEADING)
        cap = min(by_width, by_height, max_cap)
        if best is None or cap > best[0] + 0.01:
            best = (cap, lines)
    return best


# ------------------------------------------------------------- the tag -----
def draw_tag(c, item, bleed=True, numberless=False):
    """Draw one tag with its trim-box origin at the current (0, 0).

    numberless=True drops the room-number panel: matching 16 mm yellow
    bookends on both ends and the grade lockup centred on the whole tag
    (used for the folding table-tents).
    """
    left_w = RIGHT_YW if numberless else YELLOW_W
    green_l = left_w + ACCENT_GAP + ACCENT_W
    cx = (green_l + GREEN_R) / 2.0
    max_w = GREEN_R - green_l - 22.0
    c.saveState()
    over = BLEED if bleed else 0.0
    p = c.beginPath()
    p.rect(-over * MM, -over * MM, (TRIM_W + 2 * over) * MM, (TRIM_H + 2 * over) * MM)
    c.clipPath(p, stroke=0, fill=0)

    # green field
    c.setFillColor(GREEN)
    c.rect(-BLEED * MM, -BLEED * MM, (TRIM_W + 2 * BLEED) * MM, (TRIM_H + 2 * BLEED) * MM,
           stroke=0, fill=1)

    # tone-on-tone swoosh, centred behind the title like the logo's ellipse
    wm = SWOOSH_WATERMARK
    wm_w = 176.0
    wm_h = wm_w * wm.size[1] / wm.size[0]
    c.drawImage(ImageReader(wm), (cx - wm_w / 2) * MM, (TRIM_H / 2 - wm_h / 2) * MM,
                wm_w * MM, wm_h * MM, mask="auto")

    # straight yellow fields: number panel left, bookend right (holes sit in them)
    c.setFillColor(YELLOW)
    c.rect(-BLEED * MM, -BLEED * MM, (left_w + BLEED) * MM, (TRIM_H + 2 * BLEED) * MM,
           stroke=0, fill=1)
    c.rect((TRIM_W - RIGHT_YW) * MM, -BLEED * MM, (RIGHT_YW + BLEED) * MM,
           (TRIM_H + 2 * BLEED) * MM, stroke=0, fill=1)
    # accent lines echoing the two splits
    c.rect((left_w + ACCENT_GAP) * MM, -BLEED * MM, ACCENT_W * MM,
           (TRIM_H + 2 * BLEED) * MM, stroke=0, fill=1)
    c.rect((TRIM_W - RIGHT_YW - ACCENT_GAP - ACCENT_W) * MM, -BLEED * MM, ACCENT_W * MM,
           (TRIM_H + 2 * BLEED) * MM, stroke=0, fill=1)

    # ---- yellow panel: room number ("WC" for the restrooms), or the logo
    num = None if numberless else item["room"]
    if numberless:
        num, eyebrow = None, None
    elif not num and "RESTROOM" in item["title"].upper():
        num = "WC"
        eyebrow = None
    else:
        eyebrow = "ROOM" if num else None
    if num:
        if eyebrow:
            draw_text(c, eyebrow, FONT_HEAVY, 4.6, NUM_CX, EYEBROW_Y_YELLOW, GREEN_DEEP,
                      track=0.34, align="center", alpha=0.62)
        cap = min(NUM_MAX_W / text_width(num, FONT_HEAVY, 1.0), NUM_MAX_CAP)
        base = (NUM_BAND[0] + NUM_BAND[1]) / 2.0 - cap / 2.0
        draw_text(c, num, FONT_HEAVY, cap, NUM_CX, base, GREEN_DEEP, align="center")
    elif not numberless:
        mark = LOGO_MARK
        mw = 48.0
        mh = mw * mark.size[1] / mark.size[0]
        c.drawImage(ImageReader(mark), (NUM_CX - mw / 2) * MM, (TRIM_H / 2 - mh / 2) * MM,
                    mw * MM, mh * MM, mask="auto")

    # ---- green panel: centred lockup
    c.setFillColor(YELLOW)
    c.rect((cx - RULE_W / 2) * MM, RULE_Y * MM, RULE_W * MM, RULE_H * MM,
           stroke=0, fill=1)
    draw_text(c, item["eyebrow"], FONT_HEAVY, EYEBROW_CAP, cx, EYEBROW_Y, CREAM,
              track=EYEBROW_TRACK, align="center")

    cap, lines = fit_title(item["title"], max_w, TITLE_BAND)
    block_h = cap * (1.0 + (len(lines) - 1) * TITLE_LEADING)
    top_base = (TITLE_BAND[0] + TITLE_BAND[1]) / 2.0 + block_h / 2.0 - cap
    for i, line in enumerate(lines):
        draw_text(c, line, FONT_HEAVY, cap, cx, top_base - i * cap * TITLE_LEADING,
                  YELLOW, align="center")

    draw_text(c, "ELLIPSE", FONT_HEAVY, WORDMARK_CAP, cx, WORDMARK_Y, YELLOW,
              track=WORDMARK_TRACK, align="center", alpha=0.75)

    c.restoreState()


# ------------------------------------------------------------- outputs -----
def draw_cut_marks(c, ox, oy, scale=1.0, inner=None, outer=None, holes=True):
    """Corner cut marks + punch-hole ticks around a tag whose trim origin is (ox, oy)."""
    w, h = TRIM_W * scale, TRIM_H * scale
    inner = BLEED + 1.0 if inner is None else inner
    outer = MARGIN if outer is None else outer
    c.saveState()
    c.setStrokeColor(Color(0, 0, 0))
    c.setLineWidth(0.25)
    for x in (0.0, w):
        for y in (0.0, h):
            sx = -1 if x == 0 else 1
            sy = -1 if y == 0 else 1
            c.line((ox + x + sx * inner) * MM, (oy + y) * MM,
                   (ox + x + sx * outer) * MM, (oy + y) * MM)
            c.line((ox + x) * MM, (oy + y + sy * inner) * MM,
                   (ox + x) * MM, (oy + y + sy * outer) * MM)
    if holes:
        c.setStrokeColor(Color(0.55, 0.55, 0.55))
        for hx in HOLE_X:
            c.line((ox + hx * scale) * MM, (oy - inner) * MM,
                   (ox + hx * scale) * MM, (oy - outer) * MM)
            c.line((ox + hx * scale) * MM, (oy + h + inner) * MM,
                   (ox + hx * scale) * MM, (oy + h + outer) * MM)
    c.restoreState()


def build_print_pdf(items, path, title, numberless=False):
    pw, ph = TRIM_W + 2 * MARGIN, TRIM_H + 2 * MARGIN
    c = canvas.Canvas(path, pagesize=(pw * MM, ph * MM))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for it in items:
        c.saveState()
        c.translate(MARGIN * MM, MARGIN * MM)
        draw_tag(c, it, bleed=True, numberless=numberless)
        c.restoreState()
        draw_cut_marks(c, MARGIN, MARGIN)
        c.showPage()
    c.save()


def build_exact_pdf(items, path, title, numberless=False):
    c = canvas.Canvas(path, pagesize=(TRIM_W * MM, TRIM_H * MM))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for it in items:
        draw_tag(c, it, bleed=False, numberless=numberless)
        c.showPage()
    c.save()


def build_a4_full_pdf(items, path, title):
    """Two full-width tags per landscape A4 sheet at 100% — no side margins.

    The tag is exactly as wide as the sheet, so print at "Actual size"
    (100%), with borderless printing if the printer supports it.
    """
    pw, ph = landscape(A4)
    ph_mm = ph / MM
    per, gap = 2, 8.0
    block = per * TRIM_H + (per - 1) * gap
    oy0 = (ph_mm - block) / 2.0
    c = canvas.Canvas(path, pagesize=(pw, ph))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    grey = Color(0.6, 0.6, 0.6)
    for i in range(0, len(items), per):
        chunk = items[i:i + per]
        for j, it in enumerate(chunk):
            oy = oy0 + (len(chunk) - 1 - j) * (TRIM_H + gap)
            c.saveState()
            c.translate(0, oy * MM)
            draw_tag(c, it, bleed=False)
            c.restoreState()
            # full-width cut lines 1 mm outside the tag's top and bottom edges
            c.saveState()
            c.setStrokeColor(grey)
            c.setLineWidth(0.2)
            c.setDash(2, 2)
            for y in (oy - 1.0, oy + TRIM_H + 1.0):
                c.line(0, y * MM, pw, y * MM)
            c.setDash()
            # punch-hole ticks just outside the tag
            for hx in HOLE_X:
                c.line(hx * MM, (oy - 1.0) * MM, hx * MM, (oy - 4.0) * MM)
                c.line(hx * MM, (oy + TRIM_H + 1.0) * MM,
                       hx * MM, (oy + TRIM_H + 4.0) * MM)
            c.restoreState()
        c.showPage()
    c.save()


def build_tent_pngs(classes, outdir, dpi=300):
    """300 dpi PNG of each class tent sheet (2480 x 3508 px)."""
    import pymupdf

    tmp = os.path.join(outdir, "_tmp.pdf")
    build_tent_pdf(classes, tmp, "tent png export")
    doc = pymupdf.open(tmp)
    for i, it in enumerate(classes):
        base = re.sub(r"[^A-Za-z0-9]+", "-", it["title"]).strip("-")
        doc[i].get_pixmap(dpi=dpi).save(os.path.join(outdir, "Tent_%s.png" % base))
    doc.close()
    os.remove(tmp)


def build_pngs(items, dpi=300):
    """High-resolution PNG of every tag (300 dpi = 3508 x 1075 px)."""
    import pymupdf

    outdir = os.path.join(OUT, "png")
    os.makedirs(outdir, exist_ok=True)
    for stale in os.listdir(outdir):
        if stale.endswith(".png"):
            os.remove(os.path.join(outdir, stale))
    tmp = os.path.join(outdir, "_tmp.pdf")
    build_exact_pdf(items, tmp, "png export")
    doc = pymupdf.open(tmp)
    for i, it in enumerate(items):
        doc[i].get_pixmap(dpi=dpi).save(os.path.join(outdir, slug(it) + ".png"))
    doc.close()
    os.remove(tmp)


# --------------------------------------------------- folding table tent ----
# One portrait A4 sheet folded across the middle: each face is half the sheet.
TENT_W, TENT_H = 210.0, 148.5
TENT_BOOK_W = 15.0          # yellow bookend down each side
TENT_ACCENT_GAP = 3.2
TENT_ACCENT_W = 1.7
TENT_WORDMARK_Y = 128.0
TENT_RULE_Y, TENT_RULE_W, TENT_RULE_H = 118.0, 34.0, 1.8
TENT_EYEBROW_Y, TENT_EYEBROW_CAP = 101.0, 6.5
TENT_TITLE_BAND = (22.0, 90.0)
TENT_TITLE_MAX_CAP = 52.0


def draw_tent_face(c, item):
    """One face of the tent, trim origin at (0, 0), no room number."""
    green_l = TENT_BOOK_W + TENT_ACCENT_GAP + TENT_ACCENT_W
    green_r = TENT_W - green_l
    cx = TENT_W / 2.0
    max_w = green_r - green_l - 20.0

    c.saveState()
    p = c.beginPath()
    p.rect(0, 0, TENT_W * MM, TENT_H * MM)
    c.clipPath(p, stroke=0, fill=0)

    c.setFillColor(GREEN)
    c.rect(0, 0, TENT_W * MM, TENT_H * MM, stroke=0, fill=1)

    wm = SWOOSH_WATERMARK
    wm_w = 196.0
    wm_h = wm_w * wm.size[1] / wm.size[0]
    c.drawImage(ImageReader(wm), (cx - wm_w / 2) * MM, (TENT_H / 2 - wm_h / 2) * MM,
                wm_w * MM, wm_h * MM, mask="auto")

    # matching yellow bookends down both sides, with their accent lines
    c.setFillColor(YELLOW)
    c.rect(0, 0, TENT_BOOK_W * MM, TENT_H * MM, stroke=0, fill=1)
    c.rect((TENT_W - TENT_BOOK_W) * MM, 0, TENT_BOOK_W * MM, TENT_H * MM, stroke=0, fill=1)
    c.rect((TENT_BOOK_W + TENT_ACCENT_GAP) * MM, 0, TENT_ACCENT_W * MM, TENT_H * MM,
           stroke=0, fill=1)
    c.rect((TENT_W - TENT_BOOK_W - TENT_ACCENT_GAP - TENT_ACCENT_W) * MM, 0,
           TENT_ACCENT_W * MM, TENT_H * MM, stroke=0, fill=1)

    draw_text(c, "ELLIPSE", FONT_HEAVY, 5.0, cx, TENT_WORDMARK_Y, YELLOW,
              track=0.42, align="center", alpha=0.75)
    c.setFillColor(YELLOW)
    c.rect((cx - TENT_RULE_W / 2) * MM, TENT_RULE_Y * MM, TENT_RULE_W * MM,
           TENT_RULE_H * MM, stroke=0, fill=1)
    draw_text(c, item["eyebrow"], FONT_HEAVY, TENT_EYEBROW_CAP, cx, TENT_EYEBROW_Y,
              CREAM, track=EYEBROW_TRACK, align="center")

    cap, lines = fit_title(item["title"], max_w, TENT_TITLE_BAND, TENT_TITLE_MAX_CAP)
    block_h = cap * (1.0 + (len(lines) - 1) * TITLE_LEADING)
    top_base = (TENT_TITLE_BAND[0] + TENT_TITLE_BAND[1]) / 2.0 + block_h / 2.0 - cap
    for i, line in enumerate(lines):
        draw_text(c, line, FONT_HEAVY, cap, cx, top_base - i * cap * TITLE_LEADING,
                  YELLOW, align="center")
    c.restoreState()


def build_tent_pdf(items, path, title):
    """Folding table tent: one portrait A4 sheet per class, folded across the
    middle so each half is one face. The upper half is printed upside-down so
    both faces read upright once the sheet is stood up like a tent.
    """
    pw, ph = A4  # portrait
    fold = TENT_H  # 148.5 mm — exactly half the sheet
    c = canvas.Canvas(path, pagesize=(pw, ph))
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for it in items:
        c.saveState()          # lower face, upright
        draw_tent_face(c, it)
        c.restoreState()
        c.saveState()          # upper face, rotated 180 degrees
        c.translate(TENT_W * MM, ph)
        c.rotate(180)
        draw_tent_face(c, it)
        c.restoreState()
        c.saveState()          # fold ticks at the sheet edges only
        c.setStrokeColor(Color(1, 1, 1))
        c.setLineWidth(0.3)
        c.setDash(2, 2)
        c.line(0, fold * MM, 7 * MM, fold * MM)
        c.line((TENT_W - 7) * MM, fold * MM, TENT_W * MM, fold * MM)
        c.restoreState()
        c.showPage()
    c.save()


def build_nup_pdf(items, path, title, pagesize, per, page_margin, gap):
    """N tags per sheet. Tags are scaled down only if the sheet is too narrow."""
    pw, ph = pagesize
    pw_mm, ph_mm = pw / MM, ph / MM
    scale = min(1.0, (pw_mm - 2 * page_margin) / TRIM_W)
    w, h = TRIM_W * scale, TRIM_H * scale
    block = per * h + (per - 1) * gap
    ox = (pw_mm - w) / 2.0
    oy0 = (ph_mm - block) / 2.0
    c = canvas.Canvas(path, pagesize=pagesize)
    c.setTitle(title)
    c.setAuthor("Ellipse")
    for i in range(0, len(items), per):
        chunk = items[i:i + per]
        for j, it in enumerate(chunk):
            oy = oy0 + (len(chunk) - 1 - j) * (h + gap)
            c.saveState()
            c.translate(ox * MM, oy * MM)
            c.scale(scale, scale)
            draw_tag(c, it, bleed=False)
            c.restoreState()
            draw_cut_marks(c, ox, oy, scale=scale, inner=1.5, outer=4.5)
        c.showPage()
    c.save()
    return scale


def grade_sort_key(it):
    """1A, 1B, 1G, 1P, 2A, ... 9BG, 10A, 10BG, 11AG."""
    m = re.match(r"^(\d+)(.*)$", it["title"])
    return (int(m.group(1)), m.group(2)) if m else (999, it["title"])


def slug(it):
    base = "%s-%s" % (it["room"] or "x", it["title"])
    base = re.sub(r"[^A-Za-z0-9]+", "-", base).strip("-").lower()
    return "f%s-%s" % (it["floor"], base)


def build_previews(items, dpi=150):
    import pymupdf

    os.makedirs(PREVIEW, exist_ok=True)
    for old in os.listdir(PREVIEW):
        if old.endswith(".png"):
            os.remove(os.path.join(PREVIEW, old))
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
figure{margin:0 0 18px;background:#fff;padding:10px;
       box-shadow:0 1px 3px rgba(0,0,0,.12)}
img{display:block;width:100%%;height:auto}
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
            "no_number": (r.get("no_number") or "").strip().lower() == "y",
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
    build_a4_full_pdf(items, os.path.join(OUT, "Ellipse_Room_Tags_A4_2up.pdf"),
                      "Ellipse room tags — A4 landscape, 2 up, full width")
    s3 = build_nup_pdf(items, os.path.join(OUT, "Ellipse_Room_Tags_A3_3up.pdf"),
                       "Ellipse room tags — A3 landscape, 3 up",
                       landscape(A3), per=3, page_margin=5.0, gap=6.0)
    for floor in ("1", "2"):
        sub = [i for i in items if i["floor"] == floor]
        build_print_pdf(sub, os.path.join(OUT, "Ellipse_Room_Tags_Floor%s.pdf" % floor),
                        "Ellipse room tags — floor %s" % floor)

    flagged = sorted((i for i in items if i["no_number"]), key=grade_sort_key)
    if flagged:
        names = "_".join(i["title"] for i in flagged)
        exact = os.path.join(OUT, "Ellipse_Room_Tags_NoNumber_%s.pdf" % names)
        build_exact_pdf(flagged, exact,
                        "Ellipse room tags — no room number", numberless=True)
        build_print_pdf(flagged, os.path.join(
            OUT, "Ellipse_Room_Tags_NoNumber_%s_PRINT.pdf" % names),
            "Ellipse room tags — no room number, print", numberless=True)
        print("no-number tags: %s" % ", ".join(i["title"] for i in flagged))

    classes = sorted((i for i in items if i["eyebrow"] == "GRADE"), key=grade_sort_key)
    build_tent_pdf(classes, os.path.join(OUT, "Ellipse_Tent_Cards_ALL_CLASSES.pdf"),
                   "Ellipse tent cards — all classes")
    tents = os.path.join(OUT, "tents")
    os.makedirs(tents, exist_ok=True)
    for stale in os.listdir(tents):
        os.remove(os.path.join(tents, stale))
    for it in classes:
        base = re.sub(r"[^A-Za-z0-9]+", "-", it["title"]).strip("-")
        build_tent_pdf([it], os.path.join(tents, "Tent_%s.pdf" % base),
                       "Ellipse tent card — %s" % it["title"])
    build_tent_pngs(classes, tents)
    print("%d class tent cards -> %s" % (len(classes), tents))

    names = build_previews(items)
    build_index(items, names)
    build_pngs(items)
    if flagged:
        import pymupdf
        doc = pymupdf.open(exact)
        for i, it in enumerate(flagged):
            doc[i].get_pixmap(dpi=300).save(
                os.path.join(OUT, "png", "nonumber-%s.png" % it["title"].lower()))
        doc.close()
    print("%d tags -> %s  (A4 at 100%%, A3 scale %.0f%%)" % (len(items), OUT, s3 * 100))


if __name__ == "__main__":
    main()
