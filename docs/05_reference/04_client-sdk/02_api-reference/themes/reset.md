---
name: reset
cbbaseinfo:
  description: "Resets themes to their default configuration.

Restores all theme settings to the original system defaults.
Optionally accepts custom data to control the reset behavior."
cbparameters:
  parameters:
    - name: data
      typeName: Record<string, unknown>
      description: Optional parameters for controlling the reset operation
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when themes have been reset
data:
  name: reset
  category: themes
  link: reset.md
---
# reset

```typescript
client.themes.reset(data?: Record<string, unknown>): Promise<unknown>
```

Resets themes to their default configuration.

Restores all theme settings to the original system defaults.
Optionally accepts custom data to control the reset behavior.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` _(optional)_ | Optional parameters for controlling the reset operation |

## Returns

**`Promise<unknown>`** — A promise that resolves when themes have been reset

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.themes.reset();
```
