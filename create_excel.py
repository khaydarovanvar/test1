import openpyxl
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side

wb = openpyxl.Workbook()

# Subject name standardization map
SUBJECT_MAP = {
    "matematika": "Mathematics",
    "math": "Mathematics",
    "maths": "Mathematics",
    "mathematics": "Mathematics",
    "fizika": "Physics",
    "fizik (physics)": "Physics",
    "physics": "Physics",
    "english": "English",
    "ingliz tili (english)": "English",
    "biologiya": "Biology",
    "biology": "Biology",
    "ximiya (chemistry)": "Chemistry",
    "kimiya (chemistry)": "Chemistry",
    "kimyo (chemistry)": "Chemistry",
    "chemistry": "Chemistry",
    "tarix (history)": "History",
    "history": "History",
    "geografiya": "Geography",
    "geography": "Geography",
    "adabiyot (literature)": "Literature",
    "informatika": "IT",
    "it": "IT",
    "ict": "ICT",
    "global perspective": "Global Perspective",
    "russian": "Russian",
    "uzbek / russian": "Uzbek / Russian",
    "uzbek language": "Uzbek",
    "robota texnika (robotics)": "Robotics",
    "huquq (law)": "Law",
    "ozi": "National Defense (OZI)",
    "ona tili (native lang.)": "Native Language",
    "ona tili (uzbek)": "Native Language (Uzbek)",
    "p.e.": "Physical Education",
}

def standardize(subj):
    return SUBJECT_MAP.get(subj.strip().lower(), subj.strip())

# Data from user's corrected file with standardized subjects
students_raw = {
    7: [
        ("Abdurasulov Abdulaziz", "7-P", ["Matematika", "English", "Fizika"]),
        ("Avazbek Mirzaazizov", "7-A", ["Physics", "Maths", "Biology", "English", "Chemistry"]),
        ("Ziyo", "7-A", ["Math", "Fizika", "Biologiya"]),
        ("Uzakbaev Imon", "7-B", ["English", "Mathematics", "ICT", "Biology"]),
        ("Muhammad Yosin", "7-P", ["Matematika", "Fizika", "English"]),
        ("Kulboeva Medina-Aisha", "7-P", ["Math", "English"]),
        ("Dexkanova Bibixonim", "7-P", ["Matematika", "English"]),
    ],
    8: [
        ("Boborova Gavxor", "8-B", ["Biologiya", "English", "Ximiya (Chemistry)", "Matematika", "Fizika"]),
        ("Ziyodulla", "8-G", ["Tarix (History)", "Matematika", "Geografiya", "Adabiyot (Literature)", "Ingliz tili (English)"]),
        ("Abdujabborov Behruz", "8-P", ["English", "Biology", "Chemistry", "Global Perspective", "Physics"]),
        ("Xasanova Latofat", "8-P", ["Math", "English", "Physics", "Biology", "Russian"]),
        ("Abdurashidova Mavludaxon", "8-P", ["Math", "English", "Physics", "Biology", "Russian"]),
        ("Rashidov Ayyubxon", "8-P", ["Math", "Physics", "Chemistry", "English", "Uzbek / Russian"]),
        ("Muhammad Sanan", "8-P", ["English", "Biology", "Chemistry", "Global Perspective", "Physics"]),
        ("J. Umar", "8-P", ["Matematika", "Robota texnika (Robotics)", "English", "Fizika", "IT"]),
        ("Ismailov Yusufxon", "8-G", ["English", "Math", "Tarix (History)", "Kimyo (Chemistry)", "Fizik (Physics)"]),
        ("Shuhratov Johongir", "8-A", ["Mathematics", "Physics", "English"]),
        ("Baxtiyorov Imron", "8-P", ["Math", "English", "Biology", "Global Perspective", "Uzbek language"]),
        ("Muhammadali Kasimov", "8-G", ["English", "Chemistry", "Math", "Geografiya"]),
    ],
    9: [
        ("Ismoilov Otabek", "9-G", ["Math", "Tarix (History)", "IT", "Physics", "English"]),
        ("Anvar Maksumov", "9-B", ["Matematika", "English", "Russian"]),
        ("Mirkobilova Rayyona", "9-A", ["English", "Geography", "History", "Biology", "Chemistry"]),
        ("Murtazaeva Muzayyana", "9-A", ["English", "Geography", "History", "Math"]),
        ("Oktambaeva Nozima", "9-G", ["Huquq (Law)", "Fizika", "History", "Geography"]),
        ("Parviz", "9-A", ["English", "Matematika", "Informatika"]),
        ("Sharipov Abdulaziz", "9-A", ["IT", "English", "Biology"]),
        ("Tojiddinova Hadicha", "9-G", ["Math", "English", "History", "Geography", "Physics"]),
        ("Abdusamadov Javokhir", "9", ["Biology", "English", "Chemistry", "Math", "Physics"]),
    ],
    10: [
        ("Baboxodjaev Abdulla", "10-A", ["Fizika", "Kimiya (Chemistry)", "English"]),
        ("Islomov Xondamir", "10-A", ["Huquq (Law)", "OZI"]),
        ("Sulaimon Saidakbar", "10-A", ["Matematika", "Fizika", "English"]),
        ("Baxtiyorov Biloliddin", "10", ["English", "Math", "Fizika", "ICT"]),
        ("Turaev Sardor", "10-G", ["Matematika"]),
        ("Xudoynazarova Nodira", "10-B", ["Informatika", "Matematika", "Fizika", "Biologiya"]),
        ("Kurbonalieva Madina", "10", ["English", "Math", "Russian", "Biologiya"]),
    ],
    11: [
        ("Shukurullaeva Madinobonu", "11-A", ["English", "Matematika", "P.E.", "Chemistry", "Physics"]),
        ("Karimova Shahina", "11-G", ["Matematika", "Ona tili (Native lang.)", "P.E."]),
        ("Abdulxajieva Zaxro", "11-A", ["English", "Russian", "Matematika", "Fizika", "P.E."]),
        ("Solihabonu", "11-G", ["Matematika", "Ona tili (Uzbek)", "Ingliz tili (English)", "Tarix (History)", "ICT"]),
        ("Anvarxonov Saidalo", "11-G", ["English"]),
        ("Shohjahon Qahhorov", "11-G", ["English", "Fizika", "Matematika", "Kimyo (Chemistry)"]),
        ("Baxodirov Usmon", "11-A", ["Mathematics", "Physics", "English", "Chemistry", "Russian"]),
    ],
}

# Standardize all subjects
students = {}
for grade, entries in students_raw.items():
    students[grade] = []
    for name, cls, subjects in entries:
        std_subjects = []
        seen = set()
        for s in subjects:
            eng = standardize(s)
            if eng.lower() not in seen:
                std_subjects.append(eng)
                seen.add(eng.lower())
        students[grade].append((name, cls, std_subjects))

# Styles
title_font = Font(name="Calibri", bold=True, size=14, color="1F4E79")
header_font = Font(name="Calibri", bold=True, size=11, color="FFFFFF")
header_fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")
data_font = Font(name="Calibri", size=11)
num_font = Font(name="Calibri", size=11, color="333333")
thin_border = Border(
    left=Side(style="thin", color="B4C6E7"),
    right=Side(style="thin", color="B4C6E7"),
    top=Side(style="thin", color="B4C6E7"),
    bottom=Side(style="thin", color="B4C6E7"),
)
alt_fill = PatternFill(start_color="D6E4F0", end_color="D6E4F0", fill_type="solid")
total_fill = PatternFill(start_color="FFF2CC", end_color="FFF2CC", fill_type="solid")

# Summary sheet
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
    cell.font = Font(name="Calibri", bold=True, size=11)
    cell.alignment = Alignment(horizontal="center")
    cell.border = thin_border
    cell.fill = total_fill

ws_summary.column_dimensions["A"].width = 14
ws_summary.column_dimensions["B"].width = 20
ws_summary.column_dimensions["C"].width = 16

# Grade sheets
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

    for row_idx, (name, cls, subjects) in enumerate(students[grade]):
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

        for s_idx in range(len(subjects), 5):
            cell = ws.cell(row=r, column=4 + s_idx)
            cell.border = thin_border

        if row_idx % 2 == 1:
            for c in range(1, 9):
                ws.cell(row=r, column=c).fill = alt_fill

    ws.column_dimensions["A"].width = 5
    ws.column_dimensions["B"].width = 30
    ws.column_dimensions["C"].width = 10
    for col_letter in ["D", "E", "F", "G", "H"]:
        ws.column_dimensions[col_letter].width = 22

output = "/home/user/test1/Ellipse_Olympiad_Students.xlsx"
wb.save(output)
print(f"Saved to {output}")
print(f"\nTotal students: {total}")
for grade in [7, 8, 9, 10, 11]:
    print(f"  Grade {grade}: {len(students[grade])} students")

# Print all standardized subjects per grade
print("\nSubjects (all in English):")
for grade in [7, 8, 9, 10, 11]:
    all_subj = set()
    for name, cls, subjects in students[grade]:
        all_subj.update(subjects)
    print(f"  Grade {grade}: {sorted(all_subj)}")
