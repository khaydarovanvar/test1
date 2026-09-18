import openpyxl
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from collections import defaultdict

wb = openpyxl.Workbook()

# Color constants
ORANGE = "FFC000"   # Mathematics
YELLOW = "FFFF00"   # Physics
GREEN = "92D050"    # English
BLUE = "00B0F0"     # Biology
RED = "FF0000"      # Chemistry
PURPLE = "7030A0"   # IT
BROWN = "BF8F00"    # History

SUBJECT_COLORS = {
    "Mathematics": ORANGE,
    "Physics": YELLOW,
    "English": GREEN,
    "Biology": BLUE,
    "Chemistry": RED,
    "IT": PURPLE,
    "History": BROWN,
}

# (name, class, [all subjects], selected_subject, selected_color)
students = {
    7: [
        ("Abdurasulov Abdulaziz", "7-P", ["Mathematics", "English", "Physics"], "Mathematics", ORANGE),
        ("Avazbek Mirzaazizov", "7-A", ["Physics", "Mathematics", "Biology", "English", "Chemistry"], "Physics", YELLOW),
        ("Ziyo", "7-A", ["Mathematics", "Physics", "Biology"], "Mathematics", ORANGE),
        ("Uzakbaev Imon", "7-B", ["English", "Mathematics", "ICT", "Biology"], "English", GREEN),
        ("Muhammad Yosin", "7-P", ["Mathematics", "Physics", "English"], "Physics", YELLOW),
        ("Kulboeva Medina-Aisha", "7-P", ["Mathematics", "English"], "Mathematics", ORANGE),
        ("Dexkanova Bibixonim", "7-P", ["Mathematics", "English"], "Mathematics", ORANGE),
    ],
    8: [
        ("Boborova Gavxor", "8-B", ["Biology", "English", "Chemistry", "Mathematics", "Physics"], "Biology", BLUE),
        ("Ziyodulla", "8-G", ["History", "Mathematics", "Geography", "Literature", "English"], "History", BROWN),
        ("Abdujabborov Behruz", "8-P", ["English", "Biology", "Chemistry", "Global Perspective", "Physics"], "Biology", BLUE),
        ("Xasanova Latofat", "8-P", ["Mathematics", "English", "Physics", "Biology", "Russian"], "Mathematics", ORANGE),
        ("Abdurashidova Mavludaxon", "8-P", ["Mathematics", "English", "Physics", "Biology", "Russian"], None, None),
        ("Rashidov Ayyubxon", "8-P", ["Mathematics", "Physics", "Chemistry", "English", "Uzbek / Russian"], "Mathematics", ORANGE),
        ("Muhammad Sanan", "8-P", ["English", "Biology", "Chemistry", "Global Perspective", "Physics"], "Biology", BLUE),
        ("J. Umar", "8-P", ["Mathematics", "Robotics", "English", "Physics", "IT"], "Mathematics", ORANGE),
        ("Ismailov Yusufxon", "8-G", ["English", "Mathematics", "History", "Chemistry", "Physics"], "Chemistry", RED),
        ("Shuhratov Johongir", "8-A", ["Mathematics", "Physics", "English"], "Physics", YELLOW),
        ("Baxtiyorov Imron", "8-P", ["Mathematics", "English", "Biology", "Global Perspective", "Uzbek"], "Mathematics", ORANGE),
        ("Muhammadali Kasimov", "8-G", ["English", "Chemistry", "Mathematics", "Geography"], "Chemistry", RED),
    ],
    9: [
        ("Ismoilov Otabek", "9-G", ["Mathematics", "History", "IT", "Physics", "English"], "Mathematics", ORANGE),
        ("Anvar Maksumov", "9-B", ["Mathematics", "English", "Russian"], "Mathematics", ORANGE),
        ("Mirkobilova Rayyona", "9-A", ["English", "Geography", "History", "Biology", "Chemistry"], "English", GREEN),
        ("Murtazaeva Muzayyana", "9-A", ["English", "Geography", "History", "Mathematics"], "English", GREEN),
        ("Oktambaeva Nozima", "9-G", ["Law", "Physics", "History", "Geography"], "History", BROWN),
        ("Parviz", "9-A", ["English", "Mathematics", "IT"], "IT", PURPLE),
        ("Sharipov Abdulaziz", "9-A", ["IT", "English", "Biology"], "IT", PURPLE),
        ("Tojiddinova Hadicha", "9-G", ["Mathematics", "English", "History", "Geography", "Physics"], "Mathematics", ORANGE),
        ("Abdusamadov Javokhir", "9", ["Biology", "English", "Chemistry", "Mathematics", "Physics"], "Biology", BLUE),
    ],
    10: [
        ("Baboxodjaev Abdulla", "10-A", ["Physics", "Chemistry", "English"], "Physics", YELLOW),
        ("Islomov Xondamir", "10-A", ["Law", "National Defense (OZI)"], None, None),
        ("Sulaimon Saidakbar", "10-A", ["Mathematics", "Physics", "English"], "Mathematics", ORANGE),
        ("Baxtiyorov Biloliddin", "10", ["English", "Mathematics", "Physics", "ICT"], "English", GREEN),
        ("Turaev Sardor", "10-G", ["Mathematics"], "Mathematics", ORANGE),
        ("Xudoynazarova Nodira", "10-B", ["IT", "Mathematics", "Physics", "Biology"], "IT", PURPLE),
        ("Kurbonalieva Madina", "10", ["English", "Mathematics", "Russian", "Biology"], "English", GREEN),
    ],
    11: [
        ("Shukurullaeva Madinabonu", "11-A", ["English", "Mathematics", "Physical Education", "Chemistry", "Physics"], "English", GREEN),
        ("Karimova Shahina", "11-G", ["Mathematics", "Native Language", "Physical Education"], "Mathematics", ORANGE),
        ("Abdulxajieva Zaxro", "11-A", ["English", "Russian", "Mathematics", "Physics", "Physical Education"], "English", GREEN),
        ("Solihabonu", "11-G", ["Mathematics", "Native Language (Uzbek)", "English", "History", "ICT"], "Mathematics", ORANGE),
        ("Anvarxonov Saidalo", "11-G", ["English"], "English", GREEN),
        ("Shohjahon Qahhorov", "11-G", ["English", "Physics", "Mathematics", "Chemistry"], "Physics", YELLOW),
        ("Baxodirov Usmon", "11-A", ["Mathematics", "Physics", "English", "Chemistry", "Russian"], "Physics", YELLOW),
    ],
}

# Styles
title_font = Font(name="Calibri", bold=True, size=14, color="1F4E79")
header_font = Font(name="Calibri", bold=True, size=11, color="FFFFFF")
header_fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")
data_font = Font(name="Calibri", size=11)
bold_font = Font(name="Calibri", bold=True, size=11)
num_font = Font(name="Calibri", size=11, color="333333")
thin_border = Border(
    left=Side(style="thin", color="B4C6E7"),
    right=Side(style="thin", color="B4C6E7"),
    top=Side(style="thin", color="B4C6E7"),
    bottom=Side(style="thin", color="B4C6E7"),
)
alt_fill = PatternFill(start_color="D6E4F0", end_color="D6E4F0", fill_type="solid")
total_fill = PatternFill(start_color="FFF2CC", end_color="FFF2CC", fill_type="solid")
unassigned_fill = PatternFill(start_color="F2F2F2", end_color="F2F2F2", fill_type="solid")

def make_fill(color_hex):
    return PatternFill(start_color=color_hex, end_color=color_hex, fill_type="solid")

# ============ SUMMARY SHEET ============
ws_summary = wb.active
ws_summary.title = "Summary"
ws_summary.merge_cells("A1:C1")
ws_summary["A1"] = "Ellipse International School - Olympiad Summary"
ws_summary["A1"].font = title_font

for col, h in zip(["A", "B", "C"], ["Grade", "Number of Students", "Subjects Count"]):
    cell = ws_summary[f"{col}3"]
    cell.value = h
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = Alignment(horizontal="center")
    cell.border = thin_border

total = 0
total_subjects = 0
for i, grade in enumerate([7, 8, 9, 10, 11]):
    row = 4 + i
    count = len(students[grade])
    subj_count = sum(len(s[2]) for s in students[grade])
    total += count
    total_subjects += subj_count
    ws_summary[f"A{row}"] = f"Grade {grade}"
    ws_summary[f"B{row}"] = count
    ws_summary[f"C{row}"] = subj_count
    for col in ["A", "B", "C"]:
        cell = ws_summary[f"{col}{row}"]
        cell.font = data_font
        cell.alignment = Alignment(horizontal="center")
        cell.border = thin_border
        if i % 2 == 1:
            cell.fill = alt_fill

row = 9
ws_summary[f"A{row}"] = "TOTAL"
ws_summary[f"B{row}"] = total
ws_summary[f"C{row}"] = total_subjects
for col in ["A", "B", "C"]:
    cell = ws_summary[f"{col}{row}"]
    cell.font = bold_font
    cell.alignment = Alignment(horizontal="center")
    cell.border = thin_border
    cell.fill = total_fill

ws_summary.column_dimensions["A"].width = 14
ws_summary.column_dimensions["B"].width = 20
ws_summary.column_dimensions["C"].width = 16

# ============ GRADE SHEETS ============
for grade in [7, 8, 9, 10, 11]:
    ws = wb.create_sheet(title=f"Grade {grade}")
    ws.merge_cells("A1:H1")
    ws["A1"] = f"Ellipse International School - Olympiad Students (Grade {grade})"
    ws["A1"].font = title_font

    headers = ["#", "Student Name", "Class", "Subject 1", "Subject 2", "Subject 3", "Subject 4", "Subject 5"]
    for col_idx, h in enumerate(headers, 1):
        cell = ws.cell(row=3, column=col_idx, value=h)
        cell.font = header_font
        cell.fill = header_fill
        cell.alignment = Alignment(horizontal="center", wrap_text=True)
        cell.border = thin_border

    for row_idx, (name, cls, subjects, selected, sel_color) in enumerate(students[grade]):
        r = 4 + row_idx
        ws.cell(row=r, column=1, value=row_idx + 1).font = num_font
        ws.cell(row=r, column=1).alignment = Alignment(horizontal="center")
        ws.cell(row=r, column=1).border = thin_border

        ws.cell(row=r, column=2, value=name).font = data_font
        ws.cell(row=r, column=2).border = thin_border

        cell_cls = ws.cell(row=r, column=3, value=cls)
        cell_cls.font = data_font
        cell_cls.alignment = Alignment(horizontal="center")
        cell_cls.border = thin_border
        cell_cls.number_format = "@"

        for s_idx, subj in enumerate(subjects):
            cell = ws.cell(row=r, column=4 + s_idx, value=subj)
            cell.font = data_font
            cell.border = thin_border
            if subj == selected and sel_color:
                cell.fill = make_fill(sel_color)

        for s_idx in range(len(subjects), 5):
            cell = ws.cell(row=r, column=4 + s_idx)
            cell.border = thin_border

        if row_idx % 2 == 1:
            for c in range(1, 9):
                cell = ws.cell(row=r, column=c)
                if cell.fill == PatternFill() or cell.fill.start_color.rgb == '00000000':
                    cell.fill = alt_fill

    ws.column_dimensions["A"].width = 5
    ws.column_dimensions["B"].width = 30
    ws.column_dimensions["C"].width = 10
    for cl in ["D", "E", "F", "G", "H"]:
        ws.column_dimensions[cl].width = 22

# ============ BY SUBJECT SHEET ============
# Collect all students by selected subject
by_subject = defaultdict(list)
unassigned = []

for grade in [7, 8, 9, 10, 11]:
    for name, cls, subjects, selected, sel_color in students[grade]:
        if selected:
            by_subject[selected].append((name, cls, grade))
        else:
            unassigned.append((name, cls, grade))

# Order subjects
subject_order = ["Mathematics", "Physics", "English", "Biology", "Chemistry", "IT", "History"]
for subj in sorted(by_subject.keys()):
    if subj not in subject_order:
        subject_order.append(subj)

ws = wb.create_sheet(title="By Subject")
ws.merge_cells("A1:E1")
ws["A1"] = "Ellipse International School - Students by Selected Olympiad Subject"
ws["A1"].font = title_font

headers = ["#", "Student Name", "Class", "Grade", "Selected Subject"]
for col_idx, h in enumerate(headers, 1):
    cell = ws.cell(row=3, column=col_idx, value=h)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = Alignment(horizontal="center")
    cell.border = thin_border

current_row = 4
for subject in subject_order:
    if subject not in by_subject:
        continue
    entries = by_subject[subject]
    color = SUBJECT_COLORS.get(subject)

    # Subject group header
    ws.merge_cells(f"A{current_row}:E{current_row}")
    cell = ws.cell(row=current_row, column=1, value=f"{subject} ({len(entries)} students)")
    cell.font = Font(name="Calibri", bold=True, size=12, color="FFFFFF")
    if color:
        cell.fill = make_fill(color)
    else:
        cell.fill = header_fill
    cell.border = thin_border
    for c in range(2, 6):
        ws.cell(row=current_row, column=c).border = thin_border
    current_row += 1

    # Sort by grade then name
    entries.sort(key=lambda x: (x[2], x[0]))
    for idx, (sname, scls, sgrade) in enumerate(entries):
        ws.cell(row=current_row, column=1, value=idx + 1).font = num_font
        ws.cell(row=current_row, column=1).alignment = Alignment(horizontal="center")
        ws.cell(row=current_row, column=1).border = thin_border

        ws.cell(row=current_row, column=2, value=sname).font = data_font
        ws.cell(row=current_row, column=2).border = thin_border

        c = ws.cell(row=current_row, column=3, value=scls)
        c.font = data_font
        c.alignment = Alignment(horizontal="center")
        c.border = thin_border
        c.number_format = "@"

        c = ws.cell(row=current_row, column=4, value=sgrade)
        c.font = data_font
        c.alignment = Alignment(horizontal="center")
        c.border = thin_border

        c = ws.cell(row=current_row, column=5, value=subject)
        c.font = data_font
        c.border = thin_border
        if color:
            c.fill = make_fill(color)

        if idx % 2 == 1:
            for col in range(1, 5):
                cell = ws.cell(row=current_row, column=col)
                if cell.fill == PatternFill() or cell.fill.start_color.rgb == '00000000':
                    cell.fill = alt_fill

        current_row += 1
    current_row += 1  # blank row between groups

# Unassigned students
if unassigned:
    ws.merge_cells(f"A{current_row}:E{current_row}")
    cell = ws.cell(row=current_row, column=1, value=f"Not Assigned ({len(unassigned)} students)")
    cell.font = Font(name="Calibri", bold=True, size=12, color="666666")
    cell.fill = unassigned_fill
    cell.border = thin_border
    for c in range(2, 6):
        ws.cell(row=current_row, column=c).border = thin_border
    current_row += 1
    for idx, (sname, scls, sgrade) in enumerate(unassigned):
        ws.cell(row=current_row, column=1, value=idx + 1).font = num_font
        ws.cell(row=current_row, column=1).alignment = Alignment(horizontal="center")
        ws.cell(row=current_row, column=1).border = thin_border
        ws.cell(row=current_row, column=2, value=sname).font = data_font
        ws.cell(row=current_row, column=2).border = thin_border
        c = ws.cell(row=current_row, column=3, value=scls)
        c.font = data_font
        c.alignment = Alignment(horizontal="center")
        c.border = thin_border
        c.number_format = "@"
        c = ws.cell(row=current_row, column=4, value=sgrade)
        c.font = data_font
        c.alignment = Alignment(horizontal="center")
        c.border = thin_border
        c = ws.cell(row=current_row, column=5, value="—")
        c.font = Font(name="Calibri", size=11, color="999999")
        c.border = thin_border
        c.fill = unassigned_fill
        current_row += 1

# Subject summary at the bottom
current_row += 1
ws.merge_cells(f"A{current_row}:E{current_row}")
ws.cell(row=current_row, column=1, value="Subject Summary").font = Font(name="Calibri", bold=True, size=12, color="1F4E79")
current_row += 1

for col_idx, h in enumerate(["Subject", "Students", "Color"], 1):
    cell = ws.cell(row=current_row, column=col_idx, value=h)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = Alignment(horizontal="center")
    cell.border = thin_border
current_row += 1

assigned_total = 0
for subject in subject_order:
    if subject not in by_subject:
        continue
    count = len(by_subject[subject])
    assigned_total += count
    color = SUBJECT_COLORS.get(subject)
    ws.cell(row=current_row, column=1, value=subject).font = data_font
    ws.cell(row=current_row, column=1).border = thin_border
    ws.cell(row=current_row, column=2, value=count).font = data_font
    ws.cell(row=current_row, column=2).alignment = Alignment(horizontal="center")
    ws.cell(row=current_row, column=2).border = thin_border
    c = ws.cell(row=current_row, column=3)
    c.border = thin_border
    if color:
        c.fill = make_fill(color)
    current_row += 1

if unassigned:
    ws.cell(row=current_row, column=1, value="Not Assigned").font = Font(name="Calibri", size=11, color="999999")
    ws.cell(row=current_row, column=1).border = thin_border
    ws.cell(row=current_row, column=2, value=len(unassigned)).font = data_font
    ws.cell(row=current_row, column=2).alignment = Alignment(horizontal="center")
    ws.cell(row=current_row, column=2).border = thin_border
    ws.cell(row=current_row, column=3).fill = unassigned_fill
    ws.cell(row=current_row, column=3).border = thin_border
    current_row += 1

ws.cell(row=current_row, column=1, value="TOTAL").font = bold_font
ws.cell(row=current_row, column=1).border = thin_border
ws.cell(row=current_row, column=1).fill = total_fill
ws.cell(row=current_row, column=2, value=total).font = bold_font
ws.cell(row=current_row, column=2).alignment = Alignment(horizontal="center")
ws.cell(row=current_row, column=2).border = thin_border
ws.cell(row=current_row, column=2).fill = total_fill
ws.cell(row=current_row, column=3).border = thin_border
ws.cell(row=current_row, column=3).fill = total_fill

ws.column_dimensions["A"].width = 5
ws.column_dimensions["B"].width = 32
ws.column_dimensions["C"].width = 10
ws.column_dimensions["D"].width = 10
ws.column_dimensions["E"].width = 22

# Save
output = "/home/user/test1/Ellipse_Olympiad_Students.xlsx"
wb.save(output)
print(f"Saved: {output}")
print(f"Total: {total} students")
print()
print("By Subject:")
for subject in subject_order:
    if subject in by_subject:
        print(f"  {subject}: {len(by_subject[subject])}")
if unassigned:
    print(f"  Not Assigned: {len(unassigned)}")
