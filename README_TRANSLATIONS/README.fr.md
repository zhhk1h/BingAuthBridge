[English](../README.md) |
[简体中文](./README.zh-CN.md) |
[繁體中文](./README.zh-TW.md) |
[Español](./README.es.md) |
[Deutsch](./README.de.md) |
[**Français**](./README.fr.md) |
[日本語](./README.ja.md) |
[Português](./README.pt.md) |
[Українська](./README.uk.md) |
[한국어](./README.ko.md) |
[العربية](./README.ar.md) |
[हिन्दी](./README.hi.md)
<br>
<br>

# Bing Auth Bridge (Pont d'authentification Bing) v1.0

Il s'agit d'une extension de navigateur dédiée et open-source pour l'exportation et l'importation en un clic de votre statut de connexion Microsoft Bing et Microsoft Account.

## Pourquoi cet outil ?

Lorsque vous changez de navigateur (par exemple, de Chrome à Edge) ou que vous configurez un nouvel ordinateur, la migration de votre statut de connexion — en particulier vos points Bing Rewards — est un processus fastidieux. Cet outil automatise cette migration en transférant en toute sécurité les cookies pertinents.

## Pourquoi est-il 100% sûr et digne de confiance ?

Ce plugin a été conçu avec votre vie privée et votre sécurité comme priorité absolue. Nous le garantissons grâce à deux piliers : "Nos Engagements" et "Transparence Technique".

### 1. Nos Engagements Fondamentaux de Sécurité

Nous vous faisons ces promesses :

* ✅ **Jamais Analysé**: Ce plugin ne lit, n'inspecte ni n'analyse jamais le **contenu** de vos données de cookies. Il traite vos données comme une "boîte noire" à déplacer, pas à ouvrir.
* ✅ **Jamais Altéré**: Ce plugin ne *modifie* ni n' *altère* vos données pendant le processus d'exportation/importation. Le fichier exporté est une copie exacte des données de votre navigateur, et il est réécrit tel quel.
* ✅ **Jamais Transmis**: Ce plugin **ne contient aucun code réseau**. Toutes les opérations (exportation et importation) se déroulent à 100% sur votre machine locale. Vos données ne sont **jamais** envoyées à un serveur externe.

### 2. Notre Transparence Technique (Vérifiable)

Nous appliquons les promesses ci-dessus grâce à la conception de notre code et de nos autorisations :

* **Permissions Minimales**:
    Ce plugin ne demande **que** les autorisations minimales absolues requises pour fonctionner. Vous pouvez le vérifier dans le fichier `manifest.json` :
    ```json
      "host_permissions": [
        "*://*[.bing.com/](https://.bing.com/)",
        "*://*[.microsoft.com/](https://.microsoft.com/)",
        "*://*[.live.com/](https://.live.com/)"
      ]
    ```
    Cela signifie que le plugin est techniquement **incapable** d'accéder ou de modifier vos données sur **tout autre site** (comme votre banque, votre messagerie ou vos réseaux sociaux).

* **Code Open-Source Vérifiable**:
    Vous pouvez auditer chaque ligne de code dans `popup.js`. Vous y trouverez zéro requête réseau `fetch()` ou `XMLHttpRequest` et zéro logique d'analyse de données.

---

## Comment l'installer (Sideloading)

Comme ce plugin est open-source, vous pouvez le charger directement depuis le code source.

1.  **Télécharger:**
    * Cliquez sur le bouton vert `Code` en haut de cette page et sélectionnez `Download ZIP`.
2.  **Décompresser:**
    * Extrayez le fichier `.zip` dans un dossier permanent que vous **ne supprimerez pas** (par exemple, `D:\MyPlugins\BingAuthBridge`).
3.  **Charger dans Chrome / Edge:**
    * Ouvrez votre navigateur (Chrome ou Edge).
    * Tapez `chrome://extensions` (pour Chrome) ou `edge://extensions` (pour Edge) dans la barre d'adresse et appuyez sur Entrée.
    * Activez le commutateur **"Mode développeur"** dans le coin supérieur droit (Chrome) ou inférieur gauche (Edge).
    * Cliquez sur le bouton **"Charger l'extension non empaquetée"** (Load unpacked).
    * Dans la boîte de dialogue, sélectionnez le dossier que vous venez de décompresser (par exemple, `D:\MyPlugins\BingAuthBridge`).
4.  **Terminé:** L'icône du plugin apparaîtra dans votre barre d'outils.

## Comment l'utiliser

1.  **Dans votre Navigateur Source (par ex. Chrome):**
    * Assurez-vous d'être connecté à Bing.
    * Cliquez sur l'icône du plugin dans votre barre d'outils.
    * Cliquez sur le bouton "1. Exporter les Cookies". Un fichier nommé `bing_cookies.json` sera enregistré.
2.  **Dans votre Navigateur Cible (par ex. Edge):**
    * (Ne vous connectez pas encore à Bing).
    * Cliquez sur l'icône du plugin dans votre barre d'outils.
    * Cliquez sur le bouton "2. Importer les Cookies" et sélectionnez le fichier `bing_cookies.json` que vous venez d'enregistrer.
    * Une fois le succès signalé, actualisez la page `bing.com`. Vous serez maintenant connecté.

---

## Licence

Ce projet est sous licence [MIT License](../LICENSE).