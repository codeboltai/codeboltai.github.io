---
name: updateCollection
cbbaseinfo:
  description: "Updates a knowledge collection's properties.

Modifies collection settings such as name, description, or
chunking configuration."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to update
      isOptional: false
    - name: data
      typeName: UpdateKnowledgeCollectionRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollection>"
    description: A promise that resolves to the updated
data:
  name: updateCollection
  category: knowledge
  link: updateCollection.md
---
# updateCollection

```typescript
client.knowledge.updateCollection(id: string, data: UpdateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```

Updates a knowledge collection's properties.

Modifies collection settings such as name, description, or
chunking configuration.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to update |
| `data` | `UpdateKnowledgeCollectionRequest` | The fields to update |

## Returns

**`Promise<KnowledgeCollection>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.updateCollection('id', /* UpdateKnowledgeCollectionRequest */);
```
