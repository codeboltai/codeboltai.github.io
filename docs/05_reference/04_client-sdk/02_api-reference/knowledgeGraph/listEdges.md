---
name: listEdges
cbbaseinfo:
  description: "Lists all edges in a knowledge graph instance.

Returns the relationships between records with their types and
endpoint references. Use optional parameters to filter by type."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KGEdge[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listEdges
  category: knowledgeGraph
  link: listEdges.md
---
# listEdges

```typescript
client.knowledgeGraph.listEdges(id: string, params?: Record<string, unknown>): Promise<KGEdge[]>
```

Lists all edges in a knowledge graph instance.

Returns the relationships between records with their types and
endpoint references. Use optional parameters to filter by type.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KGEdge[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.listEdges('id');
```
