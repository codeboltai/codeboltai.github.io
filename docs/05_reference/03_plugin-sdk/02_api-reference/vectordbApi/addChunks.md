---
name: addChunks
cbbaseinfo:
  description: Call addChunks on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddVectorChunksRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addChunks
  category: vectordbApi
  link: addChunks.md
---
# addChunks

```typescript
plugin.vectordbApi.addChunks(id: string, data: AddVectorChunksRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddVectorChunksRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.addChunks('id', /* AddVectorChunksRequest */);
```
