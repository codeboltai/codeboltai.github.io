---
name: getCollection
cbbaseinfo:
  description: "Retrieves a vector collection by its ID.

Fetches detailed information about a specific collection including
its configuration, statistics, and metadata. Use this to inspect
collection properties or verify collection existence."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollection>"
    description: A promise that resolves to the VectorCollection object
data:
  name: getCollection
  category: vectorDb
  link: getCollection.md
---
# getCollection

```typescript
client.vectorDb.getCollection(id: string): Promise<VectorCollection>
```

Retrieves a vector collection by its ID.

Fetches detailed information about a specific collection including
its configuration, statistics, and metadata. Use this to inspect
collection properties or verify collection existence.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to retrieve |

## Returns

**`Promise<VectorCollection>`** — A promise that resolves to the VectorCollection object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.getCollection('id');
```
