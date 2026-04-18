---
name: update
cbbaseinfo:
  description: "Updates an existing canvas document.

Modifies the content, title, or other properties of a canvas."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateCanvasRequest
      description: The fields to update on the canvas
      isOptional: false
  returns:
    signatureTypeName: "Promise<Canvas>"
    description: A promise that resolves to the updated
data:
  name: update
  category: canvas
  link: update.md
---
# update

```typescript
client.canvas.update(data: UpdateCanvasRequest): Promise<Canvas>
```

Updates an existing canvas document.

Modifies the content, title, or other properties of a canvas.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateCanvasRequest` | The fields to update on the canvas |

## Returns

**`Promise<Canvas>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.canvas.update(/* UpdateCanvasRequest */);
```
