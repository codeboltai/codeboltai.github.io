---
name: listCollections
cbbaseinfo:
  description: "Lists all knowledge collections.

Returns every collection in the system. Use optional parameters
to filter or paginate the results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<KnowledgeCollection[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listCollections
  category: knowledge
  link: listCollections.md
---
# listCollections

```typescript
client.knowledge.listCollections(params?: Record<string, unknown>): Promise<KnowledgeCollection[]>
```

Lists all knowledge collections.

Returns every collection in the system. Use optional parameters
to filter or paginate the results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<KnowledgeCollection[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.listCollections();
```
