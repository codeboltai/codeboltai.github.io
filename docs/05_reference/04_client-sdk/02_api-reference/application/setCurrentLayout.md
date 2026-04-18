---
name: setCurrentLayout
cbbaseinfo:
  description: "Sets the current active layout.

Switches the application to use a specific layout configuration,
rearranging panels and views accordingly."
cbparameters:
  parameters:
    - name: data
      typeName: SetCurrentLayoutRequest
      description: The layout selection
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the layout has been applied
data:
  name: setCurrentLayout
  category: application
  link: setCurrentLayout.md
---
# setCurrentLayout

```typescript
client.application.setCurrentLayout(data: SetCurrentLayoutRequest): Promise<void>
```

Sets the current active layout.

Switches the application to use a specific layout configuration,
rearranging panels and views accordingly.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetCurrentLayoutRequest` | The layout selection |

## Returns

**`Promise<void>`** — A promise that resolves when the layout has been applied

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.setCurrentLayout(/* SetCurrentLayoutRequest */);
```
