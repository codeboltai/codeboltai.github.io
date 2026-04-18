---
name: listCollections
cbbaseinfo:
  description: "Lists all vector collections.

Retrieves every collection in the vector database system. Use optional
query parameters to filter or paginate results. This is useful for
browsing available collections or displaying a collection catalog."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<VectorCollection[]>"
    description: A promise that resolves to an array of VectorCollection objects
data:
  name: listCollections
  category: vectorDb
  link: listCollections.md
---
# listCollections

```typescript
client.vectorDb.listCollections(params?: Record<string, unknown>): Promise<VectorCollection[]>
```

Lists all vector collections.

Retrieves every collection in the vector database system. Use optional
query parameters to filter or paginate results. This is useful for
browsing available collections or displaying a collection catalog.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<VectorCollection[]>`** — A promise that resolves to an array of VectorCollection objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.listCollections();
```
