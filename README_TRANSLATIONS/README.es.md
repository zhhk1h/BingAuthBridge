[English](../README.md) |
[简体中文](./README.zh-CN.md) |
[繁體中文](./README.zh-TW.md) |
[**Español**](./README.es.md) |
[Deutsch](./README.de.md) |
[Français](./README.fr.md) |
[日本語](./README.ja.md) |
[Português](./README.pt.md) |
[Українська](./README.uk.md) |
[한국어](./README.ko.md) |
[العربية](./README.ar.md) |
[हिन्दी](./README.hi.md)
<br>
<br>

# Bing Auth Bridge (Migrador de inicio de sesión de Bing) v1.0

Esta es una extensión de navegador dedicada y de código abierto para exportar e importar con un solo clic el estado de inicio de sesión de Microsoft Bing y Microsoft Account.

## ¿Por qué esta herramienta?

Al cambiar de navegador (por ejemplo, de Chrome a Edge) o configurar un nuevo ordenador, migrar el estado de inicio de sesión —especialmente los puntos de Bing Rewards— es un proceso tedioso. Esta herramienta automatiza esa migración transfiriendo de forma segura las cookies relevantes.

## ¿Por qué es 100% segura y confiable?

Este complemento fue diseñado con su privacidad y seguridad como la máxima prioridad. Lo garantizamos a través de dos pilares: "Nuestros Compromisos" y "Transparencia Técnica".

### 1. Nuestros Compromisos Centrales de Seguridad

Le hacemos estas promesas:

* ✅ **Nunca Analizado**: Este complemento nunca lee, inspecciona o analiza el **contenido** de sus datos de cookies. Trata sus datos como una "caja negra" que debe ser movida, no abierta.
* ✅ **Nunca Alterado**: Este complemento no *modifica* ni *altera* sus datos durante el proceso de exportación/importación. El archivo exportado es una copia exacta de los datos de su navegador y se reescribe exactamente igual.
* ✅ **Nunca Transmitido**: Este complemento **no contiene código de red**. Todas las operaciones (exportación e importación) ocurren 100% en su máquina local. Sus datos **nunca** son enviados a ningún servidor externo.

### 2. Nuestra Transparencia Técnica (Verificable)

Hacemos cumplir las promesas anteriores a través de nuestro diseño de código y permisos:

* **Permisos Mínimos**:
    Este complemento **solo** solicita los permisos mínimos absolutos necesarios para funcionar. Puede verificar esto en el archivo `manifest.json`:
    ```json
      "host_permissions": [
        "*://*[.bing.com/](https://.bing.com/)",
        "*://*[.microsoft.com/](https://.microsoft.com/)",
        "*://*[.live.com/](https://.live.com/)"
      ]
    ```
    Esto significa que el complemento es técnicamente **incapaz** de acceder o modificar sus datos en **cualquier otro sitio** (como su banco, correo electrónico o redes sociales).

* **Código Fuente Abierto Verificable**:
    Puede auditar cada línea de código en `popup.js`. Encontrará cero solicitudes de red `fetch()` o `XMLHttpRequest` y cero lógica para el análisis de datos.

---

## Cómo Instalar (Sideloading)

Dado que este complemento es de código abierto, puede cargarlo directamente desde el código fuente.

1.  **Descargar:**
    * Haga clic en el botón verde `Code` en la parte superior de esta página y seleccione `Download ZIP`.
2.  **Descomprimir:**
    * Extraiga el archivo `.zip` en una carpeta permanente que **no eliminará** (por ejemplo, `D:\MyPlugins\BingAuthBridge`).
3.  **Cargar en Chrome / Edge:**
    * Abra su navegador (Chrome o Edge).
    * Escriba `chrome://extensions` (para Chrome) o `edge://extensions` (para Edge) en la barra de direcciones y presione Enter.
    * Active el interruptor **"Modo de desarrollador"** en la esquina superior derecha (Chrome) o inferior izquierda (Edge).
    * Haga clic en el botón **"Cargar descomprimida"** (Load unpacked).
    * En el selector de archivos, seleccione la carpeta que acaba de descomprimir (por ejemplo, `D:\MyPlugins\BingAuthBridge`).
4.  **Listo:** El icono del complemento aparecerá en su barra de herramientas.

## Cómo Usar

1.  **En su Navegador de Origen (por ejemplo, Chrome):**
    * Asegúrese de haber iniciado sesión en Bing.
    * Haga clic en el icono del complemento en su barra de herramientas.
    * Haga clic en el botón "1. Exportar Cookies". Se guardará un archivo llamado `bing_cookies.json`.
2.  **En su Navegador de Destino (por ejemplo, Edge):**
    * (No inicie sesión en Bing todavía).
    * Haga clic en el icono del complemento en su barra de herramientas.
    * Haga clic en el botón "2. Importar Cookies" y seleccione el archivo `bing_cookies.json` que acaba de guardar.
    * Después de que informe éxito, actualice la página `bing.com`. Ahora habrá iniciado sesión.

---

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](../LICENSE).