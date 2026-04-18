---
name: getChunks
cbbaseinfo:
  description: Call getChunks on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<VectorChunk[]>"
    description: ""
data:
  name: getChunks
  category: vectordbApi
  link: getChunks.md
---
# getChunks

```typescript
plugin.vectordbApi.getChunks(id: string, params?: Record<string, unknown>): Promise<VectorChunk[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<VectorChunk[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.getChunks('id');
```
