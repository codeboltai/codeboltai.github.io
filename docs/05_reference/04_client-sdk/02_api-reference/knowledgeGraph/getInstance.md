---
name: getInstance
cbbaseinfo:
  description: "Retrieves a specific knowledge graph instance by its ID.

Returns the full details of a graph instance including its metadata,
template reference, and statistics."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGInstance>"
    description: A promise that resolves to the
data:
  name: getInstance
  category: knowledgeGraph
  link: getInstance.md
---
# getInstance

```typescript
client.knowledgeGraph.getInstance(id: string): Promise<KGInstance>
```

Retrieves a specific knowledge graph instance by its ID.

Returns the full details of a graph instance including its metadata,
template reference, and statistics.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |

## Returns

**`Promise<KGInstance>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.getInstance('id');
```
