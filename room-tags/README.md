# Ellipse door tags — room & grade

Print-ready door tags for every room shown on the two floor plans, in the
style of the sample tag (“16 / GRADE 1P”) and in the ELLIPSE logo colours.

- **Size:** 300 × 92 mm per tag (width × height), landscape strip
- **Colours:** green `#008E52`, yellow `#FFC200`, deep green `#00603A` —
  sampled from `assets/ellipse-logo.jpg`
- **Type:** Montserrat (SIL Open Font License, see `fonts/OFL.txt`)
- **Punch holes:** the layout keeps both ends clear for a hole at 12 mm from
  each end, centred vertically (like the sample tag). Hole positions are
  ticked in the trim waste of the PRINT and A3 files.

## Files

| File | Use it for |
| --- | --- |
| `out/Ellipse_Room_Tags_PRINT.pdf` | professional printing — 3 mm bleed + crop marks (316 × 108 mm pages) |
| `out/Ellipse_Room_Tags_EXACT.pdf` | exact 300 × 92 mm pages, no marks |
| `out/Ellipse_Room_Tags_A3_3up.pdf` | printing 3 tags per A3 sheet, with cut guides |
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

- `room` — the room number; leave empty for rooms that have no number on the
  plan (grade 6B, the floor-1 vice principal, the restrooms). Those tags get
  the Ellipse logo in place of the number.
- `eyebrow` — the small word above the title (GRADE, OFFICE, LABORATORY, …).
- `title` — the big text (grade code, VICE PRINCIPAL = *zavuch*,
  TEACHERS’ ROOM = *uchitel*, TECHNOLOGY = *teh*).

Rooms with no label on the plans (7, 8, 21–26 on floor 1; 3–13, 21–29 on
floor 2; the pink service cells) have no tag; add a row to `rooms.csv` when
they get an occupant.
