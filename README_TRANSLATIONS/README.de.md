[English](../README.md) |
[简体中文](./README.zh-CN.md) |
[繁體中文](./README.zh-TW.md) |
[Español](./README.es.md) |
[**Deutsch**](./README.de.md) |
[Français](./README.fr.md) |
[日本語](./README.ja.md) |
[Português](./README.pt.md) |
[Українська](./README.uk.md) |
[한국어](./README.ko.md) |
[العربية](./README.ar.md) |
[हिन्दी](./README.hi.md)
<br>
<br>

# Bing Auth Bridge (Bing-Anmeldebrücke) v1.0

Dies ist eine dedizierte Open-Source-Browsererweiterung für den Ein-Klick-Export und -Import Ihres Microsoft Bing- und Microsoft-Konto-Anmeldestatus.

## Warum dieses Tool?

Beim Wechseln des Browsers (z. B. von Chrome zu Edge) oder beim Einrichten eines neuen Computers ist die Migration Ihres Anmeldestatus – insbesondere Ihrer Bing-Rewards-Punkte – ein mühsamer Prozess. Dieses Tool automatisiert diese Migration durch die sichere Übertragung der relevanten Cookies.

## Warum ist es 100% sicher und vertrauenswürdig?

Dieses Plugin wurde mit Ihrer Privatsphäre und Sicherheit als höchster Priorität entwickelt. Wir garantieren dies durch zwei Säulen: "Unsere Verpflichtungen" und "Technische Transparenz".

### 1. Unsere zentralen Sicherheitsverpflichtungen

Wir geben Ihnen diese Versprechen:

* ✅ **Niemals Analysiert**: Dieses Plugin liest, inspiziert oder analysiert niemals den **Inhalt** Ihrer Cookie-Daten. Es behandelt Ihre Daten als "Blackbox", die verschoben, aber nicht geöffnet wird.
* ✅ **Niemals Verändert**: Dieses Plugin *modifiziert* oder *verändert* Ihre Daten während des Export-/Importvorgangs nicht. Die exportierte Datei ist eine exakte Kopie Ihrer Browserdaten und wird exakt so zurückgeschrieben.
* ✅ **Niemals Übertragen**: Dieses Plugin **enthält keinen Netzwerkcode**. Alle Operationen (Export und Import) finden zu 100% auf Ihrem lokalen Rechner statt. Ihre Daten werden **niemals** an einen externen Server gesendet.

### 2. Unsere Technische Transparenz (Überprüfbar)

Wir setzen die obigen Versprechen durch unser Code- und Berechtigungsdesign durch:

* **Minimale Berechtigungen**:
    Dieses Plugin fordert **nur** die absolut minimalen Berechtigungen an, die zum Funktionieren erforderlich sind. Sie können dies in der `manifest.json`-Datei überprüfen:
    ```json
      "host_permissions": [
        "*://*[.bing.com/](https://.bing.com/)",
        "*://*[.microsoft.com/](https://.microsoft.com/)",
        "*://*[.live.com/](https://.live.com/)"
      ]
    ```
    Das bedeutet, dass das Plugin technisch **unfähig** ist, auf Ihre Daten auf **jeder anderen Website** (wie Ihrer Bank, E-Mail oder sozialen Medien) zuzugreifen oder diese zu ändern.

* **Überprüfbarer Open-Source-Code**:
    Sie können jede Codezeile in `popup.js` prüfen. Sie werden null `fetch()`- oder `XMLHttpRequest`-Netzwerkanfragen und null Logik zur Datenanalyse finden.

---

## Wie man installiert (Sideloading)

Da dieses Plugin Open-Source ist, können Sie es direkt aus dem Quellcode laden.

1.  **Herunterladen:**
    * Klicken Sie auf den grünen `Code`-Button oben auf dieser Seite und wählen Sie `Download ZIP`.
2.  **Entpacken:**
    * Entpacken Sie die `.zip`-Datei in einen permanenten Ordner, den Sie **nicht löschen** werden (z. B. `D:\MyPlugins\BingAuthBridge`).
3.  **In Chrome / Edge laden:**
    * Öffnen Sie Ihren Browser (Chrome oder Edge).
    * Geben Sie `chrome://extensions` (für Chrome) oder `edge://extensions` (für Edge) in die Adressleiste ein und drücken Sie Enter.
    * Aktivieren Sie den Schalter **"Entwicklermodus"** in der oberen rechten (Chrome) oder unteren linken (Edge) Ecke.
    * Klicken Sie auf den Button **"Entpackte Erweiterung laden"** (Load unpacked).
    * Wählen Sie im Dateidialog den Ordner aus, den Sie gerade entpackt haben (z. B. `D:\MyPlugins\BingAuthBridge`).
4.  **Fertig:** Das Plugin-Symbol erscheint in Ihrer Symbolleiste.

## Wie man es benutzt

1.  **In Ihrem Quellbrowser (z. B. Chrome):**
    * Stellen Sie sicher, dass Sie bei Bing angemeldet sind.
    * Klicken Sie auf das Plugin-Symbol in Ihrer Symbolleiste.
    * Klicken Sie auf den Button "1. Cookies exportieren". Eine Datei namens `bing_cookies.json` wird gespeichert.
2.  **In Ihrem Zielbrowser (z. B. Edge):**
    * (Melden Sie sich noch nicht bei Bing an).
    * Klicken Sie auf das Plugin-Symbol in Ihrer Symbolleiste.
    * Klicken Sie auf den Button "2. Cookies importieren" und wählen Sie die `bing_cookies.json`-Datei aus, die Sie gerade gespeichert haben.
    * Nachdem Erfolg gemeldet wird, aktualisieren Sie die `bing.com`-Seite. Sie sind nun angemeldet.

---

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](../LICENSE) lizenziert.