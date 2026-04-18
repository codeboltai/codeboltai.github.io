---
name: deleteCollection
cbbaseinfo:
  description: "Deletes a vector collection.

Permanently removes a collection and all its associated data including
documents, chunks, and index information. This operation cannot be undone."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the collection has been deleted
data:
  name: deleteCollection
  category: vectorDb
  link: deleteCollection.md
---
# deleteCollection

```typescript
client.vectorDb.deleteCollection(id: string): Promise<unknown>
```

Deletes a vector collection.

Permanently removes a collection and all its associated data including
documents, chunks, and index information. This operation cannot be undone.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the collection has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.deleteCollection('id');
```
