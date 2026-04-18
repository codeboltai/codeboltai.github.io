---
name: getSettings
cbbaseinfo:
  description: Call getSettings on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollectionSettings>"
    description: ""
data:
  name: getSettings
  category: vectordbApi
  link: getSettings.md
---
# getSettings

```typescript
plugin.vectordbApi.getSettings(id: string): Promise<VectorCollectionSettings>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<VectorCollectionSettings>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.getSettings('id');
```
