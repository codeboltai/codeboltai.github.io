---
name: getDocuments
cbbaseinfo:
  description: "Retrieves documents from a vector collection.

Fetches documents stored in the collection with optional filtering and
pagination parameters. Use this to inspect stored content or retrieve
specific documents by criteria."
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
    signatureTypeName: "Promise<VectorDocument[]>"
    description: A promise that resolves to an array of VectorDocument objects
data:
  name: getDocuments
  category: vectorDb
  link: getDocuments.md
---
# getDocuments

```typescript
client.vectorDb.getDocuments(id: string, params?: Record<string, unknown>): Promise<VectorDocument[]>
```

Retrieves documents from a vector collection.

Fetches documents stored in the collection with optional filtering and
pagination parameters. Use this to inspect stored content or retrieve
specific documents by criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<VectorDocument[]>`** — A promise that resolves to an array of VectorDocument objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.getDocuments('id');
```
