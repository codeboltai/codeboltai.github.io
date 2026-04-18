---
name: createEdge
cbbaseinfo:
  description: "Creates a new edge (relationship) in a knowledge graph instance.

Edges connect two records with a typed relationship, forming the
graph structure. Each edge has a source record, target record,
and relationship type."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: data
      typeName: CreateKGEdgeRequest
      description: Edge creation payload including source, target, and relationship type
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGEdge>"
    description: A promise that resolves to the newly created
data:
  name: createEdge
  category: knowledgeGraph
  link: createEdge.md
---
# createEdge

```typescript
client.knowledgeGraph.createEdge(id: string, data: CreateKGEdgeRequest): Promise<KGEdge>
```

Creates a new edge (relationship) in a knowledge graph instance.

Edges connect two records with a typed relationship, forming the
graph structure. Each edge has a source record, target record,
and relationship type.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `data` | `CreateKGEdgeRequest` | Edge creation payload including source, target, and relationship type |

## Returns

**`Promise<KGEdge>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.createEdge('id', /* CreateKGEdgeRequest */);
```
