const vscode = require('vscode');

const tokenTypes = ['keyword', 'string', 'number', 'comment', 'class', 'method', 'variable'];
const legend = new vscode.SemanticTokensLegend(tokenTypes, []);

function getTokenType(token) {
  if (/^(function|var|if|else|return|const|let|new|class|extends|super|this)$/.test(token)) return tokenTypes.indexOf('keyword');
  if (/^(SpreadsheetApp|DriveApp|DocumentApp|SlidesApp|FormsApp|GmailApp|CalendarApp|ScriptApp|Utilities|Session|Logger|PropertiesService|LockService|CacheService|HtmlService|UrlFetchApp|XmlService|Blob|ContentService|CardService)$/.test(token)) return tokenTypes.indexOf('class');
  if (/^(getActiveSpreadsheet|getActiveSheet|getRange|setValues|getValues|setValue|getValue|getActiveCell|getLastRow|getLastColumn|insertRows|insertColumns|deleteRows|deleteColumns|setBackgroundColor|setFontColor|setBorder|getUi|createMenu|addItem|addToUi|toast|alert|onOpen|onEdit|onInstall|doGet|doPost)$/.test(token)) return tokenTypes.indexOf('method');
  if (/^".*"$|^'.*'$/.test(token)) return tokenTypes.indexOf('string');
  if (/^\d+$/.test(token)) return tokenTypes.indexOf('number');
  if (/^\/\/|^\/\*/.test(token)) return tokenTypes.indexOf('comment');
  if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)) return tokenTypes.indexOf('variable');
  return -1;
}

const provider = {
  provideDocumentSemanticTokens(document) {
    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    const text = document.getText();
    const regex = /\b(SpreadsheetApp|DriveApp|DocumentApp|SlidesApp|FormsApp|GmailApp|CalendarApp|ScriptApp|Utilities|Session|Logger|PropertiesService|LockService|CacheService|HtmlService|UrlFetchApp|XmlService|Blob|ContentService|CardService|getActiveSpreadsheet|getActiveSheet|getRange|setValues|getValues|setValue|getValue|getActiveCell|getLastRow|getLastColumn|insertRows|insertColumns|deleteRows|deleteColumns|setBackgroundColor|setFontColor|setBorder|getUi|createMenu|addItem|addToUi|toast|alert|onOpen|onEdit|onInstall|doGet|doPost|function|var|if|else|return|const|let|new|class|extends|super|this|[a-zA-Z_][a-zA-Z0-9_]*)\b|(".*?"|'.*?')|(\d+)|\/\/.*$|\/\*[\s\S]*?\*\//gm;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const token = match[0];
      const start = match.index;
      const length = token.length;
      const typeIdx = getTokenType(token);
      if (typeIdx >= 0) {
        const pos = document.positionAt(start);
        tokensBuilder.push(pos.line, pos.character, length, typeIdx, 0);
      }
    }
    return tokensBuilder.build();
  }
};

const selector = { language: 'gas', scheme: 'file' };
vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);
// function activate() {}

// function deactivate() {}

// module.exports = {
//   activate,
//   deactivate
// };