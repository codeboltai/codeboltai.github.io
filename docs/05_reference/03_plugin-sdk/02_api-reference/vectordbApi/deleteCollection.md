---
name: deleteCollection
cbbaseinfo:
  description: Call deleteCollection on the Plugin SDK vectordbApi module.
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
  category: vectordbApi
  link: deleteCollection.md
---
# deleteCollection

```typescript
plugin.vectordbApi.deleteCollection(id: string): Promise<unknown>
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

await plugin.vectordbApi.deleteCollection('id');
```
