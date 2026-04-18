---
name: getCollection
cbbaseinfo:
  description: Call getCollection on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollection>"
    description: ""
data:
  name: getCollection
  category: vectordbApi
  link: getCollection.md
---
# getCollection

```typescript
plugin.vectordbApi.getCollection(id: string): Promise<VectorCollection>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<VectorCollection>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.getCollection('id');
```
