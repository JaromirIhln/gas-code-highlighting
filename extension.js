const tokenTypes = ['function', 'variable', 'keyword', 'string', 'number', 'comment', 'identifier'];
const tokenModifiers = ['declaration', 'documentation'];
const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

const provider = {
  provideDocumentSemanticTokens(document) {
    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    const text = document.getText();
    const lines = text.split(/\r?\n/);
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      const line = lines[lineIndex];
      let match;
      // Najdi všechny výskyty 'function' v řádku
      const functionRegex = /\bfunction\b/g;
      while ((match = functionRegex.exec(line)) !== null) {
        tokensBuilder.push(
          lineIndex,
          match.index,
          'function'.length,
          tokenTypes.indexOf('function'),
          1 << tokenModifiers.indexOf('declaration')
        );
        // Identifikátor za 'function'
        const idMatch = /\bfunction\s+(\w+)/.exec(line);
        if (idMatch) {
          tokensBuilder.push(
            lineIndex,
            idMatch.index + idMatch[0].indexOf(idMatch[1]),
            idMatch[1].length,
            tokenTypes.indexOf('identifier'),
            0
          );
        }
      }
      // Najdi všechny výskyty 'var' v řádku
      const variableRegex = /\bvar\b/g;
      while ((match = variableRegex.exec(line)) !== null) {
        tokensBuilder.push(
          lineIndex,
          match.index,
          'var'.length,
          tokenTypes.indexOf('variable'),
          0 // bez modifikátoru
        );
        // Identifikátor za 'var'
        const idMatch = /\bvar\s+(\w+)/.exec(line);
        if (idMatch) {
          tokensBuilder.push(
            lineIndex,
            idMatch.index + idMatch[0].indexOf(idMatch[1]),
            idMatch[1].length,
            tokenTypes.indexOf('identifier'),
            0
          );
        }
      }
    }
    return tokensBuilder.build();
  }
};

const selector = { language: 'gas', scheme: 'file' };
vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);