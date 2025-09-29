const vscode = require('vscode');

const tokenTypes = ['keyword', 'string', 'number', 'comment'];
const legend = new vscode.SemanticTokensLegend(tokenTypes, []);

function getTokenType(token) {
  if (/^(function|var|if|else|return|const|let|new|class|extends|super|this)$/.test(token)) return tokenTypes.indexOf('keyword');
  if (/^".*"$|^'.*'$/.test(token)) return tokenTypes.indexOf('string');
  if (/^\d+$/.test(token)) return tokenTypes.indexOf('number');
  if (/^\/\/|^\/\*/.test(token)) return tokenTypes.indexOf('comment');
  return -1;
}

const provider = {
  provideDocumentSemanticTokens(document) {
    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    const text = document.getText();
    const regex = /\b(function|var|if|else|return|const|let|new|class|extends|super|this)\b|(".*?"|'.*?')|(\d+)|\/\/.*$|\/\*[\s\S]*?\*\//gm;
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