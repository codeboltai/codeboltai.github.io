---
name: updateSettings
cbbaseinfo:
  description: Call updateSettings on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateKnowledgeSettingsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollectionSettings>"
    description: ""
data:
  name: updateSettings
  category: knowledgeApi
  link: updateSettings.md
---
# updateSettings

```typescript
plugin.knowledgeApi.updateSettings(id: string, data: UpdateKnowledgeSettingsRequest): Promise<KnowledgeCollectionSettings>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateKnowledgeSettingsRequest` |  |

## Returns

**`Promise<KnowledgeCollectionSettings>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.updateSettings('id', /* UpdateKnowledgeSettingsRequest */);
```
