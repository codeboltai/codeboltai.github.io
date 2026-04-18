---
name: getSettings
cbbaseinfo:
  description: Call getSettings on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KnowledgeCollectionSettings>"
    description: ""
data:
  name: getSettings
  category: knowledgeApi
  link: getSettings.md
---
# getSettings

```typescript
plugin.knowledgeApi.getSettings(id: string): Promise<KnowledgeCollectionSettings>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<KnowledgeCollectionSettings>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.getSettings('id');
```
