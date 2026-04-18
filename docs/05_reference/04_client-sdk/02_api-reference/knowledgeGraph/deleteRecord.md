---
name: deleteRecord
cbbaseinfo:
  description: "Deletes a record from a knowledge graph instance.

Removes the node and any edges connected to it. This may affect
the connectivity of the graph."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: recordId
      typeName: string
      description: The unique identifier of the record to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteRecord
  category: knowledgeGraph
  link: deleteRecord.md
---
# deleteRecord

```typescript
client.knowledgeGraph.deleteRecord(id: string, recordId: string): Promise<unknown>
```

Deletes a record from a knowledge graph instance.

Removes the node and any edges connected to it. This may affect
the connectivity of the graph.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `recordId` | `string` | The unique identifier of the record to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.deleteRecord('id', 'recordId');
```
