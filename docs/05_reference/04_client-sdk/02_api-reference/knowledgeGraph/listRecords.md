---
name: listRecords
cbbaseinfo:
  description: "Lists all records in a knowledge graph instance.

Returns the nodes in the graph with their types and properties.
Use optional parameters to filter by type or paginate results."
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
    signatureTypeName: "Promise<KGRecord[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listRecords
  category: knowledgeGraph
  link: listRecords.md
---
# listRecords

```typescript
client.knowledgeGraph.listRecords(id: string, params?: Record<string, unknown>): Promise<KGRecord[]>
```

Lists all records in a knowledge graph instance.

Returns the nodes in the graph with their types and properties.
Use optional parameters to filter by type or paginate results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KGRecord[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.listRecords('id');
```
