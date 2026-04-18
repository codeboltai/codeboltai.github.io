---
name: updateSettings
cbbaseinfo:
  description: "Updates the settings for a knowledge collection.

Modifies chunking strategy, chunk size, overlap, and other processing
parameters. Existing documents are not automatically re-chunked;
use  to apply new settings to existing content."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
    - name: data
      typeName: UpdateKnowledgeSettingsRequest
      description: The settings to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollectionSettings>"
    description: A promise that resolves to the updated
data:
  name: updateSettings
  category: knowledge
  link: updateSettings.md
---
# updateSettings

```typescript
client.knowledge.updateSettings(id: string, data: UpdateKnowledgeSettingsRequest): Promise<KnowledgeCollectionSettings>
```

Updates the settings for a knowledge collection.

Modifies chunking strategy, chunk size, overlap, and other processing
parameters. Existing documents are not automatically re-chunked;
use  to apply new settings to existing content.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |
| `data` | `UpdateKnowledgeSettingsRequest` | The settings to update |

## Returns

**`Promise<KnowledgeCollectionSettings>`** — A promise that resolves to the updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.knowledge.updateSettings('id', /* UpdateKnowledgeSettingsRequest */);
```
