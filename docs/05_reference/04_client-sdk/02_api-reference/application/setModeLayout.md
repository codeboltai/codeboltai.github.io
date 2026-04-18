---
name: setModeLayout
cbbaseinfo:
  description: "Sets the mode layout configuration.

Configures how the application layout behaves in a specific mode
(e.g., coding, debugging, reviewing)."
cbparameters:
  parameters:
    - name: data
      typeName: SetModeLayoutRequest
      description: The mode layout configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the layout has been set
data:
  name: setModeLayout
  category: application
  link: setModeLayout.md
---
# setModeLayout

```typescript
client.application.setModeLayout(data: SetModeLayoutRequest): Promise<void>
```

Sets the mode layout configuration.

Configures how the application layout behaves in a specific mode
(e.g., coding, debugging, reviewing).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetModeLayoutRequest` | The mode layout configuration |

## Returns

**`Promise<void>`** — A promise that resolves when the layout has been set

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.setModeLayout(/* SetModeLayoutRequest */);
```
