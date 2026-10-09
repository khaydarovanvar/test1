// =============================================================
// SAT Results Collector — Google Apps Script
// =============================================================
// SETUP INSTRUCTIONS:
// 1. Open Google Sheets → create a new spreadsheet
// 2. Go to Extensions → Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Click Deploy → New deployment
// 5. Type = "Web app"
// 6. Execute as = "Me"
// 7. Who has access = "Anyone"
// 8. Click Deploy → copy the Web App URL
// 9. Paste that URL into sat-mock-test.html where it says
//    GOOGLE_SCRIPT_URL = '' (between the quotes)
// =============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Results') || ss.insertSheet('Results');

    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Student Name',
        'RW Module 1', 'RW Module 2', 'Math Module 1', 'Math Module 2',
        'Total Correct', 'Total Questions', 'Score %',
        'Answers (JSON)'
      ]);
      // Bold the header
      sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var mods = data.modules || [];
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || 'Unknown',
      mods[0] ? mods[0].right + '/' + mods[0].count + ' (' + mods[0].pct + '%)' : '-',
      mods[1] ? mods[1].right + '/' + mods[1].count + ' (' + mods[1].pct + '%)' : '-',
      mods[2] ? mods[2].right + '/' + mods[2].count + ' (' + mods[2].pct + '%)' : '-',
      mods[3] ? mods[3].right + '/' + mods[3].count + ' (' + mods[3].pct + '%)' : '-',
      data.totalRight || 0,
      data.totalQ || 0,
      (data.pct || 0) + '%',
      JSON.stringify(data.answers || {})
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'ok' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    'SAT Results endpoint is running.'
  );
}
