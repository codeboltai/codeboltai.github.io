---
name: getRecord
cbbaseinfo:
  description: "Retrieves a specific record from a knowledge graph instance.

Returns the full record including all its properties and type
information."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: recordId
      typeName: string
      description: The unique identifier of the record within the instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGRecord>"
    description: A promise that resolves to the
data:
  name: getRecord
  category: knowledgeGraph
  link: getRecord.md
---
# getRecord

```typescript
client.knowledgeGraph.getRecord(id: string, recordId: string): Promise<KGRecord>
```

Retrieves a specific record from a knowledge graph instance.

Returns the full record including all its properties and type
information.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `recordId` | `string` | The unique identifier of the record within the instance |

## Returns

**`Promise<KGRecord>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.getRecord('id', 'recordId');
```
