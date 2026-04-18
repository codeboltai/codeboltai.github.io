---
name: deleteCollection
cbbaseinfo:
  description: "Deletes a knowledge collection and all its documents.

Permanently removes the collection, its documents, and all
associated chunks. This action cannot be undone."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when deletion is complete
data:
  name: deleteCollection
  category: knowledge
  link: deleteCollection.md
---
# deleteCollection

```typescript
client.knowledge.deleteCollection(id: string): Promise<unknown>
```

Deletes a knowledge collection and all its documents.

Permanently removes the collection, its documents, and all
associated chunks. This action cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when deletion is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.deleteCollection('id');
```
