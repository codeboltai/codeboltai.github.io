---
name: getCollection
cbbaseinfo:
  description: "Retrieves a specific knowledge collection by its ID.

Returns the full details of a collection including its metadata,
document count, and configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the knowledge collection
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollection>"
    description: A promise that resolves to the
data:
  name: getCollection
  category: knowledge
  link: getCollection.md
---
# getCollection

```typescript
client.knowledge.getCollection(id: string): Promise<KnowledgeCollection>
```

Retrieves a specific knowledge collection by its ID.

Returns the full details of a collection including its metadata,
document count, and configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the knowledge collection |

## Returns

**`Promise<KnowledgeCollection>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.getCollection('id');
```
