---
name: listDocuments
cbbaseinfo:
  description: "Lists all documents in a knowledge collection.

Returns the documents belonging to the specified collection with
their metadata. Does not include chunk-level content."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KnowledgeDocument[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listDocuments
  category: knowledge
  link: listDocuments.md
---
# listDocuments

```typescript
client.knowledge.listDocuments(id: string, params?: Record<string, unknown>): Promise<KnowledgeDocument[]>
```

Lists all documents in a knowledge collection.

Returns the documents belonging to the specified collection with
their metadata. Does not include chunk-level content.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KnowledgeDocument[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.listDocuments('id');
```
