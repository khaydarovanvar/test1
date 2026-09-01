# Ellipse door tags — room & grade

Print-ready door tags for every room shown on the two floor plans, in the
style of the sample tag (“16 / GRADE 1P”) and in the ELLIPSE logo colours.
Straight-cut edges throughout: a yellow number panel on the left, the grade
on green in the middle, and a yellow bookend strip on the right, so both
punch holes sit in yellow like the sample.

- **Size:** 300 × 92 mm per tag (width × height), landscape strip
- **Colours:** green `#008E52`, yellow `#FFC200`, deep green `#00603A` —
  sampled from `assets/ellipse-logo.jpg`
- **Type:** Montserrat (SIL Open Font License, see `fonts/OFL.txt`)
- **Punch holes:** both ends stay clear for a ø6 mm hole at 12 mm from each
  end, centred vertically. Hole positions are ticked in the trim waste of
  the PRINT, A4 and A3 files.

## Files

| File | Use it for |
| --- | --- |
| `out/Ellipse_Room_Tags_PRINT.pdf` | professional printing — 3 mm bleed + crop marks (316 × 108 mm pages) |
| `out/Ellipse_Room_Tags_EXACT.pdf` | exact 300 × 92 mm pages, no marks |
| `out/Ellipse_Room_Tags_A4_2up.pdf` | 2 tags per A4 landscape sheet — printed at 95.7 % (287 × 88 mm per tag) because A4 is 297 mm wide; print at “Actual size”, not “Fit to page” |
| `out/Ellipse_Room_Tags_A3_3up.pdf` | 3 tags per A3 sheet at 100 % size, with cut guides |
| `out/Ellipse_Room_Tags_Floor1.pdf` / `_Floor2.pdf` | one floor at a time (print style) |
| `out/preview/` | PNG previews of every tag + `index.html` contact sheet |

## Editing the list of rooms

The room ↔ grade mapping lives in `rooms.csv` (taken from the two floor-plan
images in `assets/`). Edit it, then rebuild:

```bash
pip install reportlab pillow pymupdf
python3 build_tags.py
```

Column notes:

- `room` — the room number (6B is room 7 and the floor-1 vice principal is
  room 8, per the follow-up correction). Leave it empty for rooms with no
  number: the restrooms then show “WC” on the yellow panel, anything else
  shows the Ellipse logo.
- `eyebrow` — the small word above the title (GRADE, OFFICE, LABORATORY, …).
- `title` — the big text (grade code, VICE PRINCIPAL = *zavuch*,
  TEACHERS’ ROOM = *uchitel*, TECHNOLOGY = *teh*).

Rooms shown empty on the plans (24–26 on floor 1; 3–13 and 21–25 on
floor 2) have no tag; add a row to `rooms.csv` when they get an occupant.
