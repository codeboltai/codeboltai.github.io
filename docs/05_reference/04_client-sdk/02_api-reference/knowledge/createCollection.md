---
name: createCollection
cbbaseinfo:
  description: "Creates a new knowledge collection.

A collection is a named container for related documents. Documents
added to a collection are automatically chunked and indexed for
retrieval by agents."
cbparameters:
  parameters:
    - name: data
      typeName: CreateKnowledgeCollectionRequest
      description: Collection creation payload including name and configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollection>"
    description: A promise that resolves to the newly created
data:
  name: createCollection
  category: knowledge
  link: createCollection.md
---
# createCollection

```typescript
client.knowledge.createCollection(data: CreateKnowledgeCollectionRequest): Promise<KnowledgeCollection>
```

Creates a new knowledge collection.

A collection is a named container for related documents. Documents
added to a collection are automatically chunked and indexed for
retrieval by agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKnowledgeCollectionRequest` | Collection creation payload including name and configuration |

## Returns

**`Promise<KnowledgeCollection>`** — A promise that resolves to the newly created

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.createCollection(/* CreateKnowledgeCollectionRequest */);
```
