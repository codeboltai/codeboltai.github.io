---
name: deleteCollection
cbbaseinfo:
  description: Call deleteCollection on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteCollection
  category: knowledgeApi
  link: deleteCollection.md
---
# deleteCollection

```typescript
plugin.knowledgeApi.deleteCollection(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.deleteCollection('id');
```
