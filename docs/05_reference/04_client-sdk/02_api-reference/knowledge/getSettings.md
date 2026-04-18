---
name: getSettings
cbbaseinfo:
  description: "Retrieves the settings for a knowledge collection.

Returns the collection's chunking configuration, embedding settings,
and other processing parameters."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollectionSettings>"
    description: A promise that resolves to the
data:
  name: getSettings
  category: knowledge
  link: getSettings.md
---
# getSettings

```typescript
client.knowledge.getSettings(id: string): Promise<KnowledgeCollectionSettings>
```

Retrieves the settings for a knowledge collection.

Returns the collection's chunking configuration, embedding settings,
and other processing parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |

## Returns

**`Promise<KnowledgeCollectionSettings>`** — A promise that resolves to the

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.getSettings('id');
```
