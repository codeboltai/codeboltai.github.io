---
name: deleteInstance
cbbaseinfo:
  description: "Deletes a knowledge graph instance and all its data.

Permanently removes the instance including all records, edges, and
associated views. This action cannot be undone."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the instance to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteInstance
  category: knowledgeGraph
  link: deleteInstance.md
---
# deleteInstance

```typescript
client.knowledgeGraph.deleteInstance(id: string): Promise<unknown>
```

Deletes a knowledge graph instance and all its data.

Permanently removes the instance including all records, edges, and
associated views. This action cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the instance to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.deleteInstance('id');
```
