[**English**](./README.md) |
[简体中文](./README_TRANSLATIONS/README.zh-CN.md) |
[繁體中文](./README_TRANSLATIONS/README.zh-TW.md) |
[Español](./README_TRANSLATIONS/README.es.md) |
[Deutsch](./README_TRANSLATIONS/README.de.md) |
[Français](./README_TRANSLATIONS/README.fr.md) |
[日本語](./README_TRANSLATIONS/README.ja.md) |
[Português](./README_TRANSLATIONS/README.pt.md) |
[Українська](./README_TRANSLATIONS/README.uk.md) |
[한국어](./README_TRANSLATIONS/README.ko.md) |
[العربية](./README_TRANSLATIONS/README.ar.md) |
[हिन्दी](./README_TRANSLATIONS/README.hi.md)
<br>
<br>

# Bing Auth Bridge (Bing Login Migrator) v1.0

This is a dedicated, open-source browser extension for one-click export and import of your Microsoft Bing and Microsoft Account login status.

## Why This Tool?

When switching browsers (e.g., from Chrome to Edge) or setting up a new computer, migrating your login status—especially your Bing Rewards points—is a tedious process. This tool automates that migration by securely transferring the relevant cookies.

## Why Is It 100% Safe & Trustworthy?

This plugin was designed with your privacy and security as the highest priority. We guarantee this through two pillars: "Our Commitments" and "Technical Transparency."

### 1. Our Core Security Commitments

We make these promises to you:

* ✅ **Never Analyzed**: This plugin never reads, inspects, or analyzes the **content** of your cookie data. It treats your data as a "black box" to be moved, not opened.
* ✅ **Never Altered**: This plugin does not *modify* or *alter* your data during the export/import process. The exported file is an exact copy of your browser data, and it is written back exactly as-is.
* ✅ **Never Transmitted**: This plugin **contains no network code**. All operations (export and import) happen 100% on your local machine. Your data is **never** sent to any external server.

### 2. Our Technical Transparency (Verifiable)

We enforce the promises above through our code and permission design:

* **Minimal Permissions**:
    This plugin **only** requests the absolute minimum permissions required to function. You can verify this in the `manifest.json` file:
    ```json
      "host_permissions": [
        "*://*[.bing.com/](https://.bing.com/)",
        "*://*[.microsoft.com/](https://.microsoft.com/)",
        "*://*[.live.com/](https://.live.com/)"
      ]
    ```
    This means the plugin is technically **incapable** of accessing or modifying your data on **any other site** (like your bank, email, or social media).

* **Verifiable Open-Source Code**:
    You can audit every line of code in `popup.js`. You will find zero `fetch()` or `XMLHttpRequest` network requests and zero logic for data analysis.

---

## How to Install (Side-loading)

As this plugin is open-source, you can load it directly from the source code.

1.  **Download:**
    * Click the green `Code` button at the top of this page and select `Download ZIP`.
2.  **Unzip:**
    * Extract the `.zip` file into a permanent folder you **will not delete** (e.g., `D:\MyPlugins\BingAuthBridge`).
3.  **Load in Chrome / Edge:**
    * Open your browser (Chrome or Edge).
    * Type `chrome://extensions` (for Chrome) or `edge://extensions` (for Edge) in the address bar and press Enter.
    * Enable the **"Developer mode"** toggle in the top-right (Chrome) or bottom-left (Edge) corner.
    * Click the **"Load unpacked"** button.
    * In the file prompt, select the folder you just unzipped (e.g., `D:\MyPlugins\BingAuthBridge`).
4.  **Done:** The plugin icon will appear in your toolbar.

## How to Use

1.  **In your Source Browser (e.g., Chrome):**
    * Make sure you are logged into Bing.
    * Click the plugin icon in your toolbar.
    * Click the "1. Export Cookies" button. A file named `bing_cookies.json` will be saved.
2.  **In your Target Browser (e.g., Edge):**
    * (Do not log in to Bing yet).
    * Click the plugin icon in your toolbar.
    * Click the "2. Import Cookies" button and select the `bing_cookies.json` file you just saved.
    * After it reports success, refresh the `bing.com` page. You will now be logged in.

---

## License

This project is licensed under the [MIT License](LICENSE).