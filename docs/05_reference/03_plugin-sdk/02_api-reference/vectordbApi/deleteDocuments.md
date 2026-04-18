---
name: deleteDocuments
cbbaseinfo:
  description: Call deleteDocuments on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: DeleteVectorDocumentsRequest
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteDocuments
  category: vectordbApi
  link: deleteDocuments.md
---
# deleteDocuments

```typescript
plugin.vectordbApi.deleteDocuments(id: string, data?: DeleteVectorDocumentsRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `DeleteVectorDocumentsRequest` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.deleteDocuments('id');
```
