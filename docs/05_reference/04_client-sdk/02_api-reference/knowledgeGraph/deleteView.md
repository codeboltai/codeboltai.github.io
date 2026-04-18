---
name: deleteView
cbbaseinfo:
  description: "Deletes a view.

Removes the saved query. The underlying graph data is not affected."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the view to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteView
  category: knowledgeGraph
  link: deleteView.md
---
# deleteView

```typescript
client.knowledgeGraph.deleteView(id: string): Promise<unknown>
```

Deletes a view.

Removes the saved query. The underlying graph data is not affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the view to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.deleteView('id');
```
