# -*- coding: utf-8 -*-
"""Assembling several books into one volume with a contents that carries real
page numbers.

Nobody counts the pages. The volume is rendered three times:

  1. with an invisible anchor inside every heading, to learn where each
     section lands;
  2. again with those numbers printed in the contents;
  3. again with the anchors removed, then checked — every section must still
     be found on the page the contents claims.

If the anchors are not unique, or the third pass moves anything, the caller is
told and the anchored file is kept rather than shipping wrong numbers.
"""
import re
import subprocess
import sys

MARK_CSS = """
/* Invisible anchors, read back from the PDF to number the contents. */
.pgmark{font-size:2px;color:#FFFFFF;line-height:0;letter-spacing:0}
"""

# Anchors are namespaced: bare tags like "A1" collide with real text on the
# page (CEFR levels, exercise numbering), which makes them useless as markers.
PREFIX = "QZ"

def mark(tag):
    return '<span class="pgmark">%s%s</span>' % (PREFIX, tag)

def at_head(html, tag, enabled=True):
    """Put the anchor inside the heading block, which never splits across pages."""
    if not enabled:
        return html
    for anchor in ('<div class="topichead">', '<div class="ph">', '<div>'):
        if anchor in html:
            return html.replace(anchor, anchor + mark(tag), 1)
    return mark(tag) + html

def page_count(pdf):
    out = subprocess.run(["pdfinfo", pdf], capture_output=True, text=True).stdout
    return int(re.search(r"Pages:\s+(\d+)", out).group(1))

def page_text(pdf, p):
    t = subprocess.run(["pdftotext", "-f", str(p), "-l", str(p), pdf, "-"],
                       capture_output=True, text=True).stdout
    return re.sub(r"\s+", " ", t)

def read_marks(pdf, n_pages, tags):
    found = {}
    for p in range(1, n_pages + 1):
        txt = page_text(pdf, p)
        for tag in tags:
            if re.search(r"(?<![A-Za-z0-9])%s%s(?![A-Za-z0-9])"
                         % (PREFIX, re.escape(tag)), txt):
                found.setdefault(tag, []).append(p)
    return found

def build(write, render, tags, needles):
    """write(pages, markers) emits the html; render is the argv to produce the pdf.

    needles maps a tag to the text that must appear on its page once the anchors
    are gone. Returns the page map, or None if the contents was left unnumbered.
    """
    pdf = render[-1]
    write(None, True)
    subprocess.run(render, check=True)
    found = read_marks(pdf, page_count(pdf), tags)
    missing = [t for t in tags if t not in found]
    dupes = {t: v for t, v in found.items() if len(v) != 1}
    if missing or dupes:
        print("anchors not unique -> contents stays unnumbered;",
              "missing:", missing, "dupes:", dupes, file=sys.stderr)
        write(None, False)
        subprocess.run(render, check=True)
        return None

    pages = {t: v[0] for t, v in found.items()}
    write(pages, True)
    subprocess.run(render, check=True)
    print("pass 2: page numbers for all %d entries" % len(pages))

    write(pages, False)
    subprocess.run(render, check=True)
    wrong = [(t, pages[t]) for t in tags
             if re.sub(r"\s+", " ", needles[t])[:26] not in page_text(pdf, pages[t])]
    if wrong:
        print("pass 3 moved the pagination -> keeping the anchored file:", wrong,
              file=sys.stderr)
        write(pages, True)
        subprocess.run(render, check=True)
    else:
        print("pass 3: anchors removed, all %d entries verified in place" % len(pages))
    return pages
