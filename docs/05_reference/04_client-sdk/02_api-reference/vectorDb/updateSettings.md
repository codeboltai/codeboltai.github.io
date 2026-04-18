---
name: updateSettings
cbbaseinfo:
  description: "Updates settings for a vector collection.

Modifies the configuration parameters of a collection such as
distance metric, index type, or other settings. Some settings
may require index rebuild or have performance implications."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection to update
      isOptional: false
    - name: data
      typeName: UpdateVectorSettingsRequest
      description: The settings to update with new values
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollectionSettings>"
    description: A promise that resolves to the updated VectorCollectionSettings object
data:
  name: updateSettings
  category: vectorDb
  link: updateSettings.md
---
# updateSettings

```typescript
client.vectorDb.updateSettings(id: string, data: UpdateVectorSettingsRequest): Promise<VectorCollectionSettings>
```

Updates settings for a vector collection.

Modifies the configuration parameters of a collection such as
distance metric, index type, or other settings. Some settings
may require index rebuild or have performance implications.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection to update |
| `data` | `UpdateVectorSettingsRequest` | The settings to update with new values |

## Returns

**`Promise<VectorCollectionSettings>`** — A promise that resolves to the updated VectorCollectionSettings object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.updateSettings('id', /* UpdateVectorSettingsRequest */);
```
