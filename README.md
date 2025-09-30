# Apps Script Syntax Colors (gas) by Jaromir Ihln

## Popis

> **English:**  
> This extension brings syntax highlighting and useful snippets for Google Apps Script (.gs) files in Visual Studio Code. Ideal for developers who want to comfortably write and edit GAS scripts directly in VS Code.  
> All features, snippets and installation instructions are described below (Czech).

 Rozšíření pro Visual Studio Code, které přináší zvýraznění syntaxe a snippety pro Google Apps Script (.gs) soubory. Ideální pro vývojáře, kteří chtějí pohodlně psát a upravovat GAS skripty přímo v VS Code.

## 🆕 Co je nového v verzi 0.3.5 - What’s New in Version 0.3.5

> **English:**
> All snippets and features listed below are fixed in this version 0.3.5.
> All snippets and functions listed below are fixed in this version, including two new snippets.
> Some snippets require editing the `appsscript.json` manifest to add the necessary permissions. Use the `gsmanifest` snippet to include a basic manifest with common permissions - see instructions below.
> `gsmanifest` - contains a basic modification of the `appscript.json` file to provide the necessary permissions to run scripts such as `gsmail`
> `gstrigger` - newly `gs-timeTrigger`, `gscalendar-event`.
> `gsimportant` - Inserts a comment with an exclamation mark icon to mark important parts of the code.

- Všechny níže uvedené úryvky a funkce jsou v této verzi opraveny včetně dvou nových úryvků.
- Některé snippety vyžadují úpravu `appsscript.json` manifestu pro přidání potřebných oprávnění. Použij snippet `gsmanifest` pro vložení základního manifestu s běžnými oprávněními  - návod viz níže.
- `gsmanifest` - obsahuje základní úpravu souboru appscript.json o potřebná oprávnění ke spuštění scriptů jako je např. gsmail
- `gstrigger` - nově gs-timeTrigger, gscal - nově gscalendar-event.
- `gsimportant` - Vloží komentář s ikonkou vykřičníku pro označení důležitých částí kódu.

### Nové snippety - New Snippets

- `gsmail` - poslání emailu - send email
- `gsmailatt` - email s přílohou - email with attachment
- `gsdrive` - práce se soubory na Drive - working with Drive files
- `gsfolder` - vytvoření složky na Drive - creating a folder on Drive
- `gscalendar-event` - vytvoření události v kalendáři - creating a calendar event
- `gslog` - strukturované logování - structured logging
- `gs-timeTrigger` - nastavení časového triggeru - setting a time trigger
- `gsui-customMenu` - pokročilé UI menu s emojis - advanced UI menu with emojis
- `gsfilter` - filtrování dat - filtering data
- `gssort` - řazení dat podle více kritérií - sorting data by multiple criteria
**English:❗Important**

 > [!CAUTION]
 ***Some snippets require modification of the `appsscript.json` manifest to add necessary permissions. Use the `gsmanifest` snippet to insert a basic manifest with common permissions - snippet for inserting a basic manifest with normal permissions - only works with .gs file - then copy the contents and replace the existing file contents with this in appscript.json- this modification will make snippets that require higher permissions fully functional.***

**❗ Upozornění:**

> [!CAUTION]
***Některé úryvky kódu vyžadují úpravu manifestu `appsscript.json` pro přidání potřebných oprávnění. Použijte úryvek `gsmanifest` pro vložení základního manifestu s běžnými oprávněními - úryvek pro vložení základního manifestu s normálními oprávněními - funguje pouze se souborem .gs - poté zkopírujte obsah úryvku a nahraďte stávající obsah souboru tímto v `appscript.json` - tato úprava zajistí, že úryvky kódu, které vyžadují vyšší oprávnění, budou plně funkční.***

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

- > [!NOTE]
  Zde najdeš ukázky GAS projektů s využitím tohoto rozšíření, včetně popisu instalace 'clasp' pro práci s Google Apps Script ve VS Code.

- > [!NOTE]
Najdeš zde i přiklad souboru `package.json` pro vytvoření vlastního rozšíření pro VS Code, které zvýrazní syntaxi pro jiný jazyk. Stačí nahradit názvy, přípony a cesty k souborům podle potřeby.(`package.txt`)

## Licence

MIT
> [!TIP]
Připomínky a vylepšení vítány!
**English:**
Feedback and improvements are welcome!
