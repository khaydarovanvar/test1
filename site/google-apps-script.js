// =============================================================
// SAT Results Collector — Google Apps Script (v2)
// =============================================================
// SETUP INSTRUCTIONS:
// 1. Open Google Sheets → create a new spreadsheet
// 2. Go to Extensions → Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Click Deploy → Manage deployments → Edit (pencil icon)
// 5. Version = "New version"
// 6. Click Deploy
// (If first time: Deploy → New deployment → Web app →
//  Execute as "Me", Access "Anyone" → Deploy → copy URL)
// =============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // --- Summary sheet ---
    var sheet = ss.getSheetByName('Results') || ss.insertSheet('Results');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Student Name',
        'SAT Score (/1600)', 'RW Score (/800)', 'Math Score (/800)',
        'RW Module 1', 'RW Module 2', 'Math Module 1', 'Math Module 2',
        'Total Correct', 'Total Questions', 'Score %'
      ]);
      sheet.getRange(1, 1, 1, 12).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var mods = data.modules || [];
    sheet.appendRow([
      new Date().toLocaleString(),
      data.name || 'Unknown',
      data.satTotal || '',
      data.rwScore || '',
      data.mathScore || '',
      mods[0] ? mods[0].right + '/' + mods[0].count + ' (' + mods[0].pct + '%)' : '-',
      mods[1] ? mods[1].right + '/' + mods[1].count + ' (' + mods[1].pct + '%)' : '-',
      mods[2] ? mods[2].right + '/' + mods[2].count + ' (' + mods[2].pct + '%)' : '-',
      mods[3] ? mods[3].right + '/' + mods[3].count + ' (' + mods[3].pct + '%)' : '-',
      data.totalRight || 0,
      data.totalQ || 0,
      (data.pct || 0) + '%'
    ]);

    // --- Per-question detail sheet ---
    var questions = data.questions || {};
    var qKeys = Object.keys(questions);
    if (qKeys.length > 0) {
      var detail = ss.getSheetByName('Question Details') || ss.insertSheet('Question Details');
      if (detail.getLastRow() === 0) {
        var hdr = ['Timestamp', 'Student Name'];
        qKeys.sort();
        for (var i = 0; i < qKeys.length; i++) hdr.push(qKeys[i]);
        detail.appendRow(hdr);
        detail.getRange(1, 1, 1, hdr.length).setFontWeight('bold');
        detail.setFrozenRows(1);
      }

      var headers = detail.getRange(1, 1, 1, detail.getLastColumn()).getValues()[0];
      var row = [];
      for (var c = 0; c < headers.length; c++) {
        if (headers[c] === 'Timestamp') row.push(new Date().toLocaleString());
        else if (headers[c] === 'Student Name') row.push(data.name || 'Unknown');
        else row.push(questions[headers[c]] || '');
      }

      // Add any new question columns not in headers yet
      for (var k = 0; k < qKeys.length; k++) {
        if (headers.indexOf(qKeys[k]) === -1) {
          headers.push(qKeys[k]);
          detail.getRange(1, headers.length).setValue(qKeys[k]).setFontWeight('bold');
          row.push(questions[qKeys[k]] || '');
        }
      }

      detail.appendRow(row);

      // Color the cells: green for correct, red for wrong, grey for skipped
      var lastRow = detail.getLastRow();
      for (var j = 2; j < row.length; j++) {
        var cell = detail.getRange(lastRow, j + 1);
        if (row[j] === 'correct') { cell.setBackground('#c6f6d5'); cell.setFontColor('#276749'); }
        else if (row[j] === 'wrong') { cell.setBackground('#fed7d7'); cell.setFontColor('#9b2c2c'); }
        else if (row[j] === 'skipped') { cell.setBackground('#e2e8f0'); cell.setFontColor('#718096'); }
      }
    }

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
    'SAT Results endpoint is running. v2'
  );
}
