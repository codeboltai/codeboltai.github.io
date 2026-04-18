---
name: updateCollection
cbbaseinfo:
  description: Call updateCollection on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateVectorCollectionRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollection>"
    description: ""
data:
  name: updateCollection
  category: vectordbApi
  link: updateCollection.md
---
# updateCollection

```typescript
plugin.vectordbApi.updateCollection(id: string, data: UpdateVectorCollectionRequest): Promise<VectorCollection>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateVectorCollectionRequest` |  |

## Returns

**`Promise<VectorCollection>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.updateCollection('id', /* UpdateVectorCollectionRequest */);
```
