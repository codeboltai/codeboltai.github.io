---
name: getDocuments
cbbaseinfo:
  description: Call getDocuments on the Plugin SDK vectordbApi module.
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
    signatureTypeName: "Promise<VectorDocument[]>"
    description: ""
data:
  name: getDocuments
  category: vectordbApi
  link: getDocuments.md
---
# getDocuments

```typescript
plugin.vectordbApi.getDocuments(id: string, params?: Record<string, unknown>): Promise<VectorDocument[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<VectorDocument[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.getDocuments('id');
```
