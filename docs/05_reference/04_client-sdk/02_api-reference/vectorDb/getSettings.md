---
name: getSettings
cbbaseinfo:
  description: "Retrieves settings for a vector collection.

Fetches the configuration and settings applied to a collection
including index types, distance metrics, and other operational
parameters."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the collection
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollectionSettings>"
    description: A promise that resolves to the VectorCollectionSettings object
data:
  name: getSettings
  category: vectorDb
  link: getSettings.md
---
# getSettings

```typescript
client.vectorDb.getSettings(id: string): Promise<VectorCollectionSettings>
```

Retrieves settings for a vector collection.

Fetches the configuration and settings applied to a collection
including index types, distance metrics, and other operational
parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the collection |

## Returns

**`Promise<VectorCollectionSettings>`** — A promise that resolves to the VectorCollectionSettings object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.vectorDb.getSettings('id');
```
