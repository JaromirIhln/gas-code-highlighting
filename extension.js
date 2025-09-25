const tokenTypes = ['function', 'variable', 'keyword', 'string', 'number', 'comment'];
const tokenModifiers = ['declaration'];
const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

const provider = {
  provideDocumentSemanticTokens(document) {
    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    // Zde bys analyzoval dokument a pushoval tokeny podle typu
    // Např. najít 'function' a pushnout jako 'function' s 'declaration'
    return tokensBuilder.build();
  }
};

const selector = { language: 'gas', scheme: 'file' };
vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);