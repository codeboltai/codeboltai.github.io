---
name: getConfig
cbbaseinfo:
  description: "Retrieves the current tools configuration.

Returns system-wide settings that control tool behavior, availability,
permissions, and other configuration options. Useful for understanding
the current tool setup."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<CodeboltToolsConfig>"
    description: A promise that resolves to the CodeboltToolsConfig object
data:
  name: getConfig
  category: codeboltTools
  link: getConfig.md
---
# getConfig

```typescript
client.codeboltTools.getConfig(): Promise<CodeboltToolsConfig>
```

Retrieves the current tools configuration.

Returns system-wide settings that control tool behavior, availability,
permissions, and other configuration options. Useful for understanding
the current tool setup.

## Parameters

_None_

## Returns

**`Promise<CodeboltToolsConfig>`** — A promise that resolves to the CodeboltToolsConfig object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.getConfig();
```
