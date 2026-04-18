---
name: createCollection
cbbaseinfo:
  description: Call createCollection on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateVectorCollectionRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorCollection>"
    description: ""
data:
  name: createCollection
  category: vectordbApi
  link: createCollection.md
---
# createCollection

```typescript
plugin.vectordbApi.createCollection(data: CreateVectorCollectionRequest): Promise<VectorCollection>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateVectorCollectionRequest` |  |

## Returns

**`Promise<VectorCollection>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.createCollection(/* CreateVectorCollectionRequest */);
```
