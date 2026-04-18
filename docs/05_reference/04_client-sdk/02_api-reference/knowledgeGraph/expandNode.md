---
name: expandNode
cbbaseinfo:
  description: "Expands a node to reveal its immediate connections.

Starting from a specific record, returns all directly connected
records and the edges linking them. Useful for interactive graph
exploration where users progressively reveal the graph structure."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: data
      typeName: ExpandNodeRequest
      description: Expansion parameters specifying which node to expand and direction
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the connected records and edges
data:
  name: expandNode
  category: knowledgeGraph
  link: expandNode.md
---
# expandNode

```typescript
client.knowledgeGraph.expandNode(id: string, data: ExpandNodeRequest): Promise<unknown>
```

Expands a node to reveal its immediate connections.

Starting from a specific record, returns all directly connected
records and the edges linking them. Useful for interactive graph
exploration where users progressively reveal the graph structure.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `data` | `ExpandNodeRequest` | Expansion parameters specifying which node to expand and direction |

## Returns

**`Promise<unknown>`** — A promise that resolves to the connected records and edges

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.expandNode('id', /* ExpandNodeRequest */);
```
