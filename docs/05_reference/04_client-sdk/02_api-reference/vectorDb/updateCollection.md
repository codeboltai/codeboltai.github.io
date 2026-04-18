---
name: updateCollection
cbbaseinfo:
  description: "Updates a vector collection.

Modifies the configuration of an existing collection such as name,
metadata, or other configurable properties. The collection ID must
be valid and the collection must exist."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to update
      isOptional: false
    - name: data
      typeName: UpdateVectorCollectionRequest
      description: The update data with fields to modify
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollection>"
    description: A promise that resolves to the updated VectorCollection object
data:
  name: updateCollection
  category: vectorDb
  link: updateCollection.md
---
# updateCollection

```typescript
client.vectorDb.updateCollection(id: string, data: UpdateVectorCollectionRequest): Promise<VectorCollection>
```

Updates a vector collection.

Modifies the configuration of an existing collection such as name,
metadata, or other configurable properties. The collection ID must
be valid and the collection must exist.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to update |
| `data` | `UpdateVectorCollectionRequest` | The update data with fields to modify |

## Returns

**`Promise<VectorCollection>`** — A promise that resolves to the updated VectorCollection object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.updateCollection('id', /* UpdateVectorCollectionRequest */);
```
