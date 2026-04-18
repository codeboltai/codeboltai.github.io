---
name: deleteEdge
cbbaseinfo:
  description: "Deletes an edge from a knowledge graph instance.

Removes the relationship between two records. The records
themselves are not affected."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: edgeId
      typeName: string
      description: The unique identifier of the edge to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteEdge
  category: knowledgeGraph
  link: deleteEdge.md
---
# deleteEdge

```typescript
client.knowledgeGraph.deleteEdge(id: string, edgeId: string): Promise<unknown>
```

Deletes an edge from a knowledge graph instance.

Removes the relationship between two records. The records
themselves are not affected.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `edgeId` | `string` | The unique identifier of the edge to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.deleteEdge('id', 'edgeId');
```
