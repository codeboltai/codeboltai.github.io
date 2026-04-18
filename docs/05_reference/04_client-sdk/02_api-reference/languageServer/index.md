---
cbapicategory:
  - name: add
    link: /docs/reference/client-sdk/api-reference/languageServer/add
    description: "Adds a custom language server configuration to the workspace.

Registers a new language server entry with custom settings, allowing you to configure
language servers that are not in the default catalog or to override default settings
for existing servers."
  - name: getInstalled
    link: /docs/reference/client-sdk/api-reference/languageServer/getInstalled
    description: "Retrieves the list of language servers currently installed in the workspace.

Returns metadata for each installed language server including its name, supported
languages, and current status. Use this to check which LSP capabilities are available
before performing language-specific operations."
  - name: install
    link: /docs/reference/client-sdk/api-reference/languageServer/install
    description: "Installs a language server by downloading and configuring it for use in the workspace.

Triggers the installation process for a specified language server. The server will be
downloaded and set up so it can provide LSP features for its supported languages."
---
# LanguageServer API

Language Server API

<CBAPICategory />

## Methods

- [`add()`](./add) — Adds a custom language server configuration to the workspace.

Registers a new language server entry with custom settings, allowing you to configure
language servers that are not in the default catalog or to override default settings
for existing servers.
- [`getInstalled()`](./getInstalled) — Retrieves the list of language servers currently installed in the workspace.

Returns metadata for each installed language server including its name, supported
languages, and current status. Use this to check which LSP capabilities are available
before performing language-specific operations.
- [`install()`](./install) — Installs a language server by downloading and configuring it for use in the workspace.

Triggers the installation process for a specified language server. The server will be
downloaded and set up so it can provide LSP features for its supported languages.
