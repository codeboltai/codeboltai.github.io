---
name: deleteChunk
cbbaseinfo:
  description: Call deleteChunk on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: chunkId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteChunk
  category: vectordbApi
  link: deleteChunk.md
---
# deleteChunk

```typescript
plugin.vectordbApi.deleteChunk(id: string, chunkId: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `chunkId` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.deleteChunk('id', 'chunkId');
```
