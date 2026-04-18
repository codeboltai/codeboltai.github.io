---
name: createIndex
cbbaseinfo:
  description: "Creates a vector index for a collection.

Initializes an index structure to optimize similarity search
performance. Indexes enable fast nearest neighbor queries on
high-dimensional vectors and are essential for efficient retrieval."
cbparameters:
  parameters:
    - name: data
      typeName: CreateVectorIndexRequest
      description: The index creation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the index has been created
data:
  name: createIndex
  category: vectorDb
  link: createIndex.md
---
# createIndex

```typescript
client.vectorDb.createIndex(data: CreateVectorIndexRequest): Promise<unknown>
```

Creates a vector index for a collection.

Initializes an index structure to optimize similarity search
performance. Indexes enable fast nearest neighbor queries on
high-dimensional vectors and are essential for efficient retrieval.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateVectorIndexRequest` | The index creation configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the index has been created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.createIndex(/* CreateVectorIndexRequest */);
```
