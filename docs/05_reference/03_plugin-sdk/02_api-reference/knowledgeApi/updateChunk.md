---
name: updateChunk
cbbaseinfo:
  description: Call updateChunk on the Plugin SDK knowledgeApi module.
cbparameters:
  parameters:
    - name: chunkId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateKnowledgeChunkRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: updateChunk
  category: knowledgeApi
  link: updateChunk.md
---
# updateChunk

```typescript
plugin.knowledgeApi.updateChunk(chunkId: string, data: UpdateKnowledgeChunkRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `chunkId` | `string` |  |
| `data` | `UpdateKnowledgeChunkRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.knowledgeApi.updateChunk('chunkId', /* UpdateKnowledgeChunkRequest */);
```
