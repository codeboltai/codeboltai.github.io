---
name: create
cbbaseinfo:
  description: "Creates a new canvas document.

Provisions a blank or pre-populated canvas that can be used for
visual planning, diagramming, or structured content creation."
cbparameters:
  parameters:
    - name: data
      typeName: CreateCanvasRequest
      description: The canvas creation payload including title and content
      isOptional: false
  returns:
    signatureTypeName: "Promise<Canvas>"
    description: A promise that resolves to the newly created
data:
  name: create
  category: canvas
  link: create.md
---
# create

```typescript
client.canvas.create(data: CreateCanvasRequest): Promise<Canvas>
```

Creates a new canvas document.

Provisions a blank or pre-populated canvas that can be used for
visual planning, diagramming, or structured content creation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCanvasRequest` | The canvas creation payload including title and content |

## Returns

**`Promise<Canvas>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.canvas.create(/* CreateCanvasRequest */);
```
