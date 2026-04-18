---
name: getInstalled
cbbaseinfo:
  description: "Retrieves the list of language servers currently installed in the workspace.

Returns metadata for each installed language server including its name, supported
languages, and current status. Use this to check which LSP capabilities are available
before performing language-specific operations."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<LanguageServer[]>"
    description: A promise that resolves to an array of installed language server configurations
data:
  name: getInstalled
  category: languageServer
  link: getInstalled.md
---
# getInstalled

```typescript
client.languageServer.getInstalled(): Promise<LanguageServer[]>
```

Retrieves the list of language servers currently installed in the workspace.

Returns metadata for each installed language server including its name, supported
languages, and current status. Use this to check which LSP capabilities are available
before performing language-specific operations.

## Parameters

_None_

## Returns

**`Promise<LanguageServer[]>`** — A promise that resolves to an array of installed language server configurations

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.languageServer.getInstalled();
```
