# Apps Script Syntax Colors (gas) by Jaromir Ihln

## Popis

> **English:**  
> This extension brings syntax highlighting and useful snippets for Google Apps Script (.gs) files in Visual Studio Code. Ideal for developers who want to comfortably write and edit GAS scripts directly in VS Code.  
> All features, snippets and installation instructions are described below (Czech).

 Rozšíření pro Visual Studio Code, které přináší zvýraznění syntaxe a snippety pro Google Apps Script (.gs) soubory. Ideální pro vývojáře, kteří chtějí pohodlně psát a upravovat GAS skripty přímo v VS Code.

## 🆕 Co je nového v verzi 0.2.5 - What’s New in Version 0.2.5

> **English:**
> Enhanced syntax highlighting
> : 7 color types instead of 4 (keywords, strings, numbers, comments, Google Apps Script API objects, methods, variables)
>> **9 new snippets added**
: Gmail operations, Google Drive file management, Calendar events, advanced logging, triggers, UI menus, data filtering and sorting
> **Total of 16 snippets** for comprehensive Google Apps Script development
> **Improved Google Apps Script API support**: SpreadsheetApp, DriveApp, GmailApp, CalendarApp, FormApp, ScriptApp recognition

- **Vylepšené zvýraznění syntaxe**: 7 typů barev místo 4 (klíčová slova, řetězce, čísla, komentáře, Google Apps Script API objekty, metody, proměnné)
- **9 nových snippetů**: Gmail operace, správa souborů na Google Drive, události v kalendáři, pokročilé logování, triggery, UI menu, filtrování a řazení dat
- **Celkem 16 snippetů** pro kompletní vývoj v Google Apps Script
- **Lepší podpora Google Apps Script API**: rozpoznávání SpreadsheetApp, DriveApp, GmailApp, CalendarApp, FormApp, ScriptApp

### Nové snippety

- `gsmail` - poslání emailu
- `gsmailatt` - email s přílohou
- `gsdrive` - práce se soubory na Drive
- `gsfolder` - vytvoření složky na Drive
- `gscal` - vytvoření události v kalendáři
- `gslog` - strukturované logování
- `gstrigger` - nastavení časového triggeru
- `gsui` - pokročilé UI menu s emojis
- `gsfilter` - filtrování dat
- `gssort` - řazení dat podle více kritérií

## Funkce

> **English:**
> Syntax highlighting for .gs files (Google Apps Script)
> Light and dark theme support
> .gs file icon in explorer
> Automatic language detection
> Snippets for quick code insertion
> Easy installation (VSIX, Marketplace, manually)

- Zvýraznění syntaxe pro .gs soubory (Google Apps Script)
- Podpora světlého i tmavého motivu
- Ikona souboru .gs v průzkumníku
- Automatické rozpoznání jazyka
- Snippety pro rychlé vkládání kódu
- Jednoduchá instalace (VSIX, Marketplace, ručně)

## Příklady kódu - Snippets

> **English:**
> The extension includes a set of snippets for quickly inserting typical GAS constructs. Just start typing `gs` and VS Code will offer available snippets, e.g.:
>
> - `gshello` – "Hello World" function
> - `gscolor` – set background color
> - `gsdate` – insert current date
> - `gsheaders` – set headers
> - `gsweek` – fill week in table
> - `gsform` – create a Google Form

 Rozšíření obsahuje sadu snippetů pro rychlé vkládání typických konstrukcí GAS. Stačí začít psát `gs` a VS Code nabídne dostupné snippety, např.:

- `gshello` – funkce „Ahoj světe“
- `gsbarva` – nastavení barvy pozadí
- `gsdatum` – vložení aktuálního data
- `gshlavicky` – nastavení hlaviček
- `gstyden` – vyplnění týdne v tabulce
- `gsform` – vytvoření Google Formuláře

 Snippety lze použít v .gs souborech automaticky, není potřeba žádná další konfigurace.

## Instalace

> **English:**
> From Marketplace: search for "Apps Script Syntax Colors (gas) by Jaromir Ihln"
> From VSIX: `Ctrl+Shift+P` → "Install from VSIX" → select package
> Manually: clone the repository and place the extension in the global extension folder

- Z Marketplace: vyhledej "Apps Script Syntax Colors (gas) by Jaromir Ihln"
- Z VSIX: `Ctrl+Shift+P` → "Install from VSIX" → vyber balíček
- Ručně: naklonuj repozitář a rozšíření umísti do globální složky rozšíření

## Odkazy - Links

- [GitHub repozitář](https://github.com/JaromirIhln/gas-code-highlighting)
- [Marketplace stránka](https://marketplace.visualstudio.com/)

## Příklady použití - Examples of Use

- [GitHub repozitář](https://github.com/JaromirIhl/start_g_appscript/)

> **English:**
> Here you will find examples of GAS projects using this extension, including instructions for installing 'clasp' to work with Google Apps Script in VS Code.

<span style="color: #2563eb; font-weight: bold; font-size: 1.1em;">
Zde najdeš ukázky GAS projektů s využitím tohoto rozšíření, včetně popisu instalace 'clasp' pro práci s Google Apps Script ve VS Code.</span>

>Najdeš zde i přiklad souboru `package.json` pro vytvoření vlastního rozšíření pro VS Code, které zvýrazní syntaxi pro jiný jazyk. Stačí nahradit názvy, přípony a cesty k souborům podle potřeby.(`package.txt`)

## Licence

MIT

Připomínky a vylepšení vítány!
**English:**
Feedback and improvements are welcome!
