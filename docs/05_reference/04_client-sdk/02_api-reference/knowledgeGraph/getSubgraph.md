---
name: getSubgraph
cbbaseinfo:
  description: "Retrieves a subgraph of a knowledge graph instance.

Returns a portion of the graph centered around specified nodes or
matching certain criteria. Useful for visualizing local neighborhoods
without loading the entire graph."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: params
      typeName: KGSubgraphParams
      description: Optional parameters controlling subgraph scope (e.g., center node, depth)
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the subgraph data including records and edges
data:
  name: getSubgraph
  category: knowledgeGraph
  link: getSubgraph.md
---
# getSubgraph

```typescript
client.knowledgeGraph.getSubgraph(id: string, params?: KGSubgraphParams): Promise<unknown>
```

Retrieves a subgraph of a knowledge graph instance.

Returns a portion of the graph centered around specified nodes or
matching certain criteria. Useful for visualizing local neighborhoods
without loading the entire graph.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `params` | `KGSubgraphParams` _(optional)_ | Optional parameters controlling subgraph scope (e.g., center node, depth) |

## Returns

**`Promise<unknown>`** — A promise that resolves to the subgraph data including records and edges

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.getSubgraph('id');
```
