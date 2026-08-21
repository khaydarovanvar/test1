# 🦊 Ali Matematika

**1-sinf o'quvchisi Ali uchun o'zbek tilidagi matematika o'quv materiallari** —
quvnoq o'yin-sayt + chop etishga tayyor mashq varaqlari.

Ali hali o'qiy olmagani uchun hamma narsa **rasm, raqam va ovoz** asosida qurilgan:
javob yozish shart emas, to'g'ri raqamni bosish kifoya. Sayt savollarni o'zbekcha
ovoz bilan o'qib beradi (brauzer ovozi orqali).

## 📂 Nimalar bor

| Narsa | Fayl | Tavsif |
|---|---|---|
| 🎮 O'yin sayti | `index.html` | Sanash, qo'shish, ayirish, ko'paytirish, bo'lish — har biri 3 darajali, 10 savollik to'plamlar, yulduzlar, konfetti, ovozli maqtovlar |
| 🖨️ Varaq yasagich | `print.html` | 13 xil mashq turini istalgancha yangi variantda yasab chop etish (javoblar sahifasi bilan) |
| 📄 Tayyor PDFlar | `worksheets/` | 18 ta chop etishga tayyor A4 to'plam (quyida) |
| ⚙️ PDF skripti | `tools/make-pdfs.sh` | Barcha PDFlarni qaytadan yasaydi (Chromium kerak) |

## 🚀 Ishga tushirish

Hech qanday o'rnatish kerak emas — `index.html` ni brauzerda oching.
Internet ham shart emas: shrift ham loyihaning ichida.

Lokal server orqali ochish qulayroq:

```bash
npx http-server .        # yoki: python3 -m http.server
```

Telefonda ham yaxshi ishlaydi — tugmalar katta, matn o'qish talab qilinmaydi.

## 🎮 O'yin sayti

- **Sanash** — 1–5, 1–10, 1–20
- **Qo'shish / Ayirish** — 5 gacha, 10 gacha (rasmlar bilan), 20 gacha (faqat raqamlar)
- **Ko'paytirish** — guruhlab sanash orqali: 2–3, 2–5, 2–9 jadvallar
- **Bo'lish** — savatlarga teng bo'lib berish orqali: 2–3, 2–5, 2–9
- Har savol **ovoz bilan o'qib beriladi** (uz/tr/ru ovozi topilganidan foydalanadi)
- Xato javob o'chadi, bola qayta urinadi — jazolash yo'q
- Natijalar brauzerda saqlanadi (eng yaxshi ball darajalarda ko'rinadi)
- Klaviaturada 1–4 raqamlari bilan ham javob berish mumkin
- **Ota-onalar uchun** tugmasida 4 oylik o'rgatish rejasi bor

## 🖨️ Chop etiladigan mashqlar (`print.html`)

13 tur: raqam yozish (0–9, nuqtalar bo'ylab), sanash, sonlar chizig'i,
taqqoslash (< > =), qo'shish, ayirish, aralash, ustunli hisob,
ko'paytirish, bo'lish, to'rt amal aralash, ko'paytirish jadvali (plakat),
hisobla-va-rangla (pixel-art).

- Har "🎲 Yangilash" — yangi masalalar
- 3 daraja, 1–5 varaq, javoblar sahifasi, oq-qora rejim (siyoh tejash)
- URL orqali ham boshqariladi: `print.html?type=mul&level=2&pages=3&name=Ali`

## 📄 Tayyor PDF to'plami (`worksheets/`)

01 raqam yozish · 02–03 sanash · 04 sonlar chizig'i · 05–06 qo'shish ·
07–08 ayirish · 09 20 gacha aralash · 10 taqqoslash · 11 ustunli hisob ·
12–13 ko'paytirish · 14–15 bo'lish · 16 ko'paytirish jadvali (devorga plakat) ·
17 hisobla-va-rangla · 18 to'rt amal aralash.

Yangi variantlar kerak bo'lsa: `bash tools/make-pdfs.sh`

## 🗓️ Tavsiya etilgan reja (ota-onalar uchun)

1. **1-hafta:** sanash 1–10 (sayt + 01, 02-varaqlar)
2. **2-hafta:** sanash 1–20, qo'shish 5 gacha
3. **3–4-hafta:** qo'shish/ayirish 10 gacha
4. **2-oy:** 20 gacha, ustunli hisob
5. **3-oy:** ko'paytirish (jadvalni devorga osing — 16-varaq)
6. **4-oy:** bo'lish

Kuniga 15–20 daqiqa yetarli. Har mashqdan keyin maqtashni unutmang! 💛

---

Shrift: [Baloo 2](https://github.com/EkType/Baloo2) (SIL OFL 1.1 — `assets/fonts/OFL.txt`).
