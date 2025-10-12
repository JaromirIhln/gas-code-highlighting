// Example function to demonstrate color highlighting
function getColor() {
  return "red";
}
// Another comment
function testColor() {
  const color = getColor();
  if (color === "red") {
    console.log("The color is red");
  } else {
    console.log("The color is not red",21);
  }
}
/*funguje*/
// This is a comment
function nastavHlavicky() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var hlavicky = [["Den v týdnu", "Datum", "poznámka", "svátek"]];
  sheet.getRange("A2:D2").setValues(hlavicky);
}
function vyplnTyden() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startDate = new Date(2025, 9, 24); // 9 = říjen (0-indexované, září je 8)
  var data = [];
  var dny = ["Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle", "Pondělí", "Úterý"];
  var notes = [
    "pohoda",
    "dřina",
    "ještě zítra",
    "zítra Praha",
    "Praha 'Výlet'",
    "zase šichta",
    "konečně volno"
  ];
  var holiday = [
    "Jaromír",
    "Zlata",
    "Andrea/Ondřejka",
    "Jonáš",
    "Václav/Václava",
    "Michal/Michael",
    "Jeroným/Jeronym/Jarolím"
  ];
  for (var i = 0; i < 7; i++) {
    var datum = new Date(startDate);
    datum.setDate(startDate.getDate() + i);
    var denVTydnu = dny[i];
    data.push([denVTydnu, datum, note s[i], holiday[i]]);
  }
  sheet.getRange("A3:D9").setValues(data);
}
/*Víceřádkový komentář je také funkční*/
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Můj Skript")
    .addItem("Nastav hlavičky", "nastavHlavicky")
    .addItem("Vyplň týden", "vyplnTyden")
    .addToUi();
}

/**
 * 📅 Vytvoří pracovní kalendář pro aktuální měsíc
 * Sloupce Od, Do, Pauza jsou prázdné pro ruční vyplnění
 * Týdenní fond je 40:00, měsíční fond je 168:00
 */

function vytvorPracovniKalendar() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  // Vytvoří nový sheet nebo vyčistí současný
  var sheet;
  try {
    sheet = ss.getSheetByName('Kalendář');
    if (sheet) sheet.clear();
    else sheet = ss.insertSheet('Kalendář');
  } catch(e) {
    sheet = ss.getActiveSheet();
    sheet.clear();
  }

  // Nastavení hlaviček
  var hlavicky = [
    ['Datum', 'Den', 'Od', 'Do', 'Pauza (min)', 'Odprac. hodiny', 'Týdenní fond', 'Měsíční fond', 'Poznámka']
  ];
  sheet.getRange('A1:I1').setValues(hlavicky);
  sheet.getRange('A1:I1').setBackground('#4285F4').setFontColor('white').setFontWeight('bold');

  // Vytvoření kalendáře pro aktuální měsíc
  var dnes = new Date();
  var prvniDen = new Date(dnes.getFullYear(), dnes.getMonth(), 1);
  var posledniDen = new Date(dnes.getFullYear(), dnes.getMonth() + 1, 0);

  var radek = 2;
  var aktualniDen = new Date(prvniDen);
  var mesicniFond = '168:00';

  while (aktualniDen <= posledniDen) {
    var denVTydnu = aktualniDen.getDay();
    var nazevDne = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So'][denVTydnu];
    sheet.getRange(radek, 1).setValue(new Date(aktualniDen));
    sheet.getRange(radek, 2).setValue(nazevDne);
    // Sloupce Od, Do, Pauza prázdné
    sheet.getRange(radek, 3).setValue("");
    sheet.getRange(radek, 4).setValue("");
    sheet.getRange(radek, 5).setValue("");
    if (denVTydnu !== 0 && denVTydnu !== 6) {
      // Pracovní den: vzorec a fondy
      var formuleHodiny = '= D' + radek + ' - C' + radek + ' - E' + radek;
      sheet.getRange(radek, 6).setFormula(formuleHodiny);
      sheet.getRange(radek, 7).setValue('40:00');
      sheet.getRange(radek, 8).setValue(mesicniFond);
    } else {
      // Víkend: vše ostatní prázdné, uživatel může ručně vyplnit přesčas
      sheet.getRange(radek, 6).setValue("");
      sheet.getRange(radek, 7).setValue("");
      sheet.getRange(radek, 8).setValue("");
    }
    sheet.getRange(radek, 9).setValue("");
    radek++;
    aktualniDen.setDate(aktualniDen.getDate() + 1);
  }

  // Formátování
  sheet.getRange('A:A').setNumberFormat('dd.mm.yyyy');
  sheet.getRange('C:D').setNumberFormat('hh:mm');
  sheet.getRange('F:H').setNumberFormat('[h]:mm');
  sheet.autoResizeColumns(1, 9);
  Logger.log('✅ Pracovní kalendář vytvořen!');
}

function spocitejPracovniDny(odDatum, doDatum) {
  var pocet = 0;
  for (var d = new Date(odDatum); d <= doDatum; d.setDate(d.getDate() + 1)) {
    var den = d.getDay();
    if (den !== 0 && den !== 6) pocet++;
  }
  return pocet;
}