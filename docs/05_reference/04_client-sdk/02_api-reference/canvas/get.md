---
name: get
cbbaseinfo:
  description: "Retrieves a canvas document.

Returns the full canvas including its content, metadata, and
current state."
cbparameters:
  parameters:
    - name: params
      typeName: GetCanvasParams
      description: Optional query parameters to identify the canvas
      isOptional: true
  returns:
    signatureTypeName: "Promise<Canvas>"
    description: A promise that resolves to the
data:
  name: get
  category: canvas
  link: get.md
---
# get

```typescript
client.canvas.get(params?: GetCanvasParams): Promise<Canvas>
```

Retrieves a canvas document.

Returns the full canvas including its content, metadata, and
current state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `GetCanvasParams` _(optional)_ | Optional query parameters to identify the canvas |

## Returns

**`Promise<Canvas>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.canvas.get();
```
