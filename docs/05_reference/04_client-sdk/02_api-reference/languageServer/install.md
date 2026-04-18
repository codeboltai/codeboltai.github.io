---
name: install
cbbaseinfo:
  description: "Installs a language server by downloading and configuring it for use in the workspace.

Triggers the installation process for a specified language server. The server will be
downloaded and set up so it can provide LSP features for its supported languages."
cbparameters:
  parameters:
    - name: data
      typeName: InstallLanguageServerRequest
      description: The installation request configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the installation request has been accepted
data:
  name: install
  category: languageServer
  link: install.md
---
# install

```typescript
client.languageServer.install(data: InstallLanguageServerRequest): Promise<unknown>
```

Installs a language server by downloading and configuring it for use in the workspace.

Triggers the installation process for a specified language server. The server will be
downloaded and set up so it can provide LSP features for its supported languages.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `InstallLanguageServerRequest` | The installation request configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the installation request has been accepted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.languageServer.install(/* InstallLanguageServerRequest */);
```
