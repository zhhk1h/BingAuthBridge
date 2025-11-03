[English](../README.md) |
[简体中文](./README.zh-CN.md) |
[繁體中文](./README.zh-TW.md) |
[Español](./README.es.md) |
[Deutsch](./README.de.md) |
[Français](./README.fr.md) |
[日本語](./README.ja.md) |
[**Português**](./README.pt.md) |
[Українська](./README.uk.md) |
[한국어](./README.ko.md) |
[العربية](./README.ar.md) |
[हिन्दी](./README.hi.md)
<br>
<br>

# Bing Auth Bridge (Ponte de Autenticação do Bing) v1.0

Esta é uma extensão de navegador dedicada e de código aberto para exportação e importação com um clique do seu status de login do Microsoft Bing e da Conta Microsoft.

## Por que esta ferramenta?

Ao trocar de navegador (por exemplo, do Chrome para o Edge) ou configurar um novo computador, migrar seu status de login — especialmente seus pontos do Bing Rewards — é um processo tedioso. Esta ferramenta automatiza essa migração transferindo com segurança os cookies relevantes.

## Por que é 100% seguro e confiável?

Este plugin foi projetado com sua privacidade e segurança como a mais alta prioridade. Garantimos isso através de dois pilares: "Nossos Compromissos" e "Transparência Técnica".

### 1. Nossos Compromissos Centrais de Segurança

Nós fazemos estas promessas a você:

* ✅ **Nunca Analisado**: Este plugin nunca lê, inspeciona ou analisa o **conteúdo** dos seus dados de cookies. Ele trata seus dados como uma "caixa preta" a ser movida, não aberta.
* ✅ **Nunca Alterado**: Este plugin não *modifica* nem *altera* seus dados durante o processo de exportação/importação. O arquivo exportado é uma cópia exata dos dados do seu navegador, e é escrito de volta exatamente como está.
* ✅ **Nunca Transmitido**: Este plugin **não contém código de rede**. Todas as operações (exportação e importação) ocorrem 100% na sua máquina local. Seus dados **nunca** são enviados para nenhum servidor externo.

### 2. Nossa Transparência Técnica (Verificável)

Nós reforçamos as promessas acima através do nosso design de código e permissões:

* **Permissões Mínimas**:
    Este plugin **apenas** solicita as permissões mínimas absolutas necessárias para funcionar. Você pode verificar isso no arquivo `manifest.json`:
    ```json
      "host_permissions": [
        "*://*[.bing.com/](https://.bing.com/)",
        "*://*[.microsoft.com/](https://.microsoft.com/)",
        "*://*[.live.com/](https://.live.com/)"
      ]
    ```
    Isso significa que o plugin é tecnicamente **incapaz** de acessar ou modificar seus dados em **qualquer outro site** (como seu banco, e-mail ou redes sociais).

* **Código Aberto Verificável**:
    Você pode auditar cada linha de código no `popup.js`. Você encontrará zero solicitações de rede `fetch()` ou `XMLHttpRequest` e zero lógica para análise de dados.

---

## Como Instalar (Sideloading)

Como este plugin é de código aberto, você pode carregá-lo diretamente do código-fonte.

1.  **Baixar:**
    * Clique no botão verde `Code` no topo desta página e selecione `Download ZIP`.
2.  **Descompactar:**
    * Extraia o arquivo `.zip` para uma pasta permanente que você **não excluirá** (por exemplo, `D:\MyPlugins\BingAuthBridge`).
3.  **Carregar no Chrome / Edge:**
    * Abra seu navegador (Chrome ou Edge).
    * Digite `chrome://extensions` (para Chrome) ou `edge://extensions` (para Edge) na barra de endereços e pressione Enter.
    * Ative o interruptor **"Modo do desenvolvedor"** no canto superior direito (Chrome) ou inferior esquerdo (Edge).
    * Clique no botão **"Carregar descompactada"** (Load unpacked).
    * No seletor de arquivos, selecione a pasta que você acabou de descompactar (por exemplo, `D:\MyPlugins\BingAuthBridge`).
4.  **Pronto:** O ícone do plugin aparecerá na sua barra de ferramentas.

## Como Usar

1.  **No seu Navegador de Origem (ex: Chrome):**
    * Certifique-se de que está logado no Bing.
    * Clique no ícone do plugin na sua barra de ferramentas.
    * Clique no botão "1. Exportar Cookies". Um arquivo chamado `bing_cookies.json` será salvo.
2.  **No seu Navegador de Destino (ex: Edge):**
    * (Não faça login no Bing ainda).
    * Clique no ícone do plugin na sua barra de ferramentas.
    * Clique no botão "2. Importar Cookies" e selecione o arquivo `bing_cookies.json` que você acabou de salvar.
    * Após relatar sucesso, atualize a página `bing.com`. Você estará logado.

---

## Licença

Este projeto está licenciado sob a [Licença MIT](../LICENSE).