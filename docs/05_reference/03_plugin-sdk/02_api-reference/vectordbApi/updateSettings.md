---
name: updateSettings
cbbaseinfo:
  description: Call updateSettings on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateVectorSettingsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollectionSettings>"
    description: ""
data:
  name: updateSettings
  category: vectordbApi
  link: updateSettings.md
---
# updateSettings

```typescript
plugin.vectordbApi.updateSettings(id: string, data: UpdateVectorSettingsRequest): Promise<VectorCollectionSettings>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateVectorSettingsRequest` |  |

## Returns

**`Promise<VectorCollectionSettings>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.updateSettings('id', /* UpdateVectorSettingsRequest */);
```
