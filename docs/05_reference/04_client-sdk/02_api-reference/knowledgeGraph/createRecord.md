---
name: createRecord
cbbaseinfo:
  description: "Creates a new record (node) in a knowledge graph instance.

Records represent entities or concepts in the graph. Each record
has a type, properties, and can be connected to other records
through edges."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the graph instance
      isOptional: false
    - name: data
      typeName: CreateKGRecordRequest
      description: Record creation payload including type and properties
      isOptional: false
  returns:
    signatureTypeName: "Promise<KGRecord>"
    description: A promise that resolves to the newly created
data:
  name: createRecord
  category: knowledgeGraph
  link: createRecord.md
---
# createRecord

```typescript
client.knowledgeGraph.createRecord(id: string, data: CreateKGRecordRequest): Promise<KGRecord>
```

Creates a new record (node) in a knowledge graph instance.

Records represent entities or concepts in the graph. Each record
has a type, properties, and can be connected to other records
through edges.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the graph instance |
| `data` | `CreateKGRecordRequest` | Record creation payload including type and properties |

## Returns

**`Promise<KGRecord>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledgeGraph.createRecord('id', /* CreateKGRecordRequest */);
```
