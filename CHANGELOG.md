# Changelog

All notable changes to the "Apps Script Syntax Colors (gas)" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - 2025-10-09

### Added

- 📅 **gs-calendar** - Pokročilý pracovní kalendář s automatickým výpočtem hodin, týdenních a měsíčních fondů
- 📊 **gs-pivot** - Komplexní pivot analýza s grafy, týdenními přehledy a statistikami odpracovaných hodin
- 💾 **gs-export** - Export systém pro PDF reporty, CSV soubory a automatické email reporty
- 🚀 **29+ snippetů** - Rozšíření z 26 na 29+ užitečných snippetů

### Features

- Automatický výpočet pracovních dnů a přesčasů
- Barevné označení týdenních a měsíčních výkonů
- Interaktivní grafy a statistiky
- Export do různých formátů (PDF, CSV, Email)
- Pokročilé formátování a vizualizace dat

## [0.6.10] - 2025-10-04

### Removed

- 🗑️ **Odstranění barevných témat** - Odebrána nefunkční témata z rozšíření
- 🎨 **Žádná vlastní témata** - Rozšíření nyní používá standardní VS Code témata
- 🧹 **Vyčištění kódu** - Odstranění nepotřebných souborů témat

### Technical Details

- Removed `themes` section from `package.json`
- Deleted `gas-light-color-theme.json` and `gas-simple-color-theme.json`
- Deleted `themes/` directory
- Added support for: `comment.line.double-slash.gas`, `comment.block.gas`, `comment.documentation.gas`
- Added support for: `string.quoted.double.gas`, `string.quoted.single.gas`
- Added support for: `constant.character.escape.gas`, `constant.numeric.gas`
- Added support for: `keyword.control.gas`

## [0.6.0] - Previous Release

### Added on 0.6.0

- `gs-qrCodeAltern` - 🔲 **Robustní QR kód generátor** s fallback mechanismem - Robust QR code generator with fallback
- `gsbarcode128` - 📊 **Code 128 barcode generátor** - Code 128 barcode generator  
- `gs-deleteLastImg` - 🗑️ **Smazání posledního obrázku** - Delete last image
- `gs-deleteAllImg` - 🗑️ **Smazání všech obrázků** - Delete all images

### Changed

- Enhanced snippet collection with 26 useful snippets
- Improved Google Apps Script API support

## [Unreleased]

### Known Issues

- None reported

---

## Types of changes

- **Added** for new features
- **Changed** for changes in existing functionality  
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities
