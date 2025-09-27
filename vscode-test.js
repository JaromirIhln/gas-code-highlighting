// .vscode-test.js
const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    label: 'unitTests',
    files: './**/**.test.js', // upravená cesta k testům
    version: 'insiders',
    workspaceFolder: './gas-code-highlighting',
    mocha: {
      ui: 'tdd',
      timeout: 20000
    }
  }
  // další konfigurace můžeš přidat podle potřeby
]);