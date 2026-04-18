---
name: updateConfig
cbbaseinfo:
  description: "Updates the tools configuration.

Modifies system-wide tool settings including enabled/disabled tools,
permissions, rate limits, and other configuration options. Changes
take effect immediately."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateCodeboltToolsConfigRequest
      description: Request containing configuration updates
      isOptional: false
  returns:
    signatureTypeName: "Promise<CodeboltToolsConfig>"
    description: A promise that resolves to the updated CodeboltToolsConfig object
data:
  name: updateConfig
  category: codeboltTools
  link: updateConfig.md
---
# updateConfig

```typescript
client.codeboltTools.updateConfig(data: UpdateCodeboltToolsConfigRequest): Promise<CodeboltToolsConfig>
```

Updates the tools configuration.

Modifies system-wide tool settings including enabled/disabled tools,
permissions, rate limits, and other configuration options. Changes
take effect immediately.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateCodeboltToolsConfigRequest` | Request containing configuration updates |

## Returns

**`Promise<CodeboltToolsConfig>`** — A promise that resolves to the updated CodeboltToolsConfig object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.codeboltTools.updateConfig(/* UpdateCodeboltToolsConfigRequest */);
```
