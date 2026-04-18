---
name: add
cbbaseinfo:
  description: "Adds a custom language server configuration to the workspace.

Registers a new language server entry with custom settings, allowing you to configure
language servers that are not in the default catalog or to override default settings
for existing servers."
cbparameters:
  parameters:
    - name: data
      typeName: AddLanguageServerRequest
      description: The language server configuration to add
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the configuration has been saved
data:
  name: add
  category: languageServer
  link: add.md
---
# add

```typescript
client.languageServer.add(data: AddLanguageServerRequest): Promise<unknown>
```

Adds a custom language server configuration to the workspace.

Registers a new language server entry with custom settings, allowing you to configure
language servers that are not in the default catalog or to override default settings
for existing servers.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddLanguageServerRequest` | The language server configuration to add |

## Returns

**`Promise<unknown>`** — A promise that resolves when the configuration has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.languageServer.add(/* AddLanguageServerRequest */);
```
