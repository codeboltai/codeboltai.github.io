---
name: createIndex
cbbaseinfo:
  description: Call createIndex on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateVectorIndexRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: createIndex
  category: vectordbApi
  link: createIndex.md
---
# createIndex

```typescript
plugin.vectordbApi.createIndex(data: CreateVectorIndexRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateVectorIndexRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.createIndex(/* CreateVectorIndexRequest */);
```
