---
name: updateRecord
cbbaseinfo:
  description: "Updates a record in a knowledge graph instance.

Modifies the record's properties or type. Only the fields provided
in the request body are updated."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: recordId
      typeName: string
      description: The unique identifier of the record to update
      isOptional: false
    - name: data
      typeName: UpdateKGRecordRequest
      description: The fields to update on the record
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGRecord>"
    description: A promise that resolves to the updated
data:
  name: updateRecord
  category: knowledgeGraph
  link: updateRecord.md
---
# updateRecord

```typescript
client.knowledgeGraph.updateRecord(id: string, recordId: string, data: UpdateKGRecordRequest): Promise<KGRecord>
```

Updates a record in a knowledge graph instance.

Modifies the record's properties or type. Only the fields provided
in the request body are updated.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `recordId` | `string` | The unique identifier of the record to update |
| `data` | `UpdateKGRecordRequest` | The fields to update on the record |

## Returns

**`Promise<KGRecord>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.updateRecord('id', 'recordId', /* UpdateKGRecordRequest */);
```
