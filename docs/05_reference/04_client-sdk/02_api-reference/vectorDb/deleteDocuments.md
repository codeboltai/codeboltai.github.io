---
name: deleteDocuments
cbbaseinfo:
  description: "Deletes documents from a vector collection.

Removes specified documents from the collection based on provided
criteria such as document IDs or metadata filters. This operation
cleans up the collection and frees storage."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
    - name: data
      typeName: DeleteVectorDocumentsRequest
      description: Optional deletion criteria for selecting documents to remove
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when documents have been deleted
data:
  name: deleteDocuments
  category: vectorDb
  link: deleteDocuments.md
---
# deleteDocuments

```typescript
client.vectorDb.deleteDocuments(id: string, data?: DeleteVectorDocumentsRequest): Promise<unknown>
```

Deletes documents from a vector collection.

Removes specified documents from the collection based on provided
criteria such as document IDs or metadata filters. This operation
cleans up the collection and frees storage.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |
| `data` | `DeleteVectorDocumentsRequest` _(optional)_ | Optional deletion criteria for selecting documents to remove |

## Returns

**`Promise<unknown>`** — A promise that resolves when documents have been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.deleteDocuments('id');
```
