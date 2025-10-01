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