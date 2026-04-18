---
name: query
cbbaseinfo:
  description: Call query on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: VectorQueryRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<VectorSearchResult[]>"
    description: ""
data:
  name: query
  category: vectordbApi
  link: query.md
---
# query

```typescript
plugin.vectordbApi.query(id: string, data: VectorQueryRequest): Promise<VectorSearchResult[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `VectorQueryRequest` |  |

## Returns

**`Promise<VectorSearchResult[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.query('id', /* VectorQueryRequest */);
```
