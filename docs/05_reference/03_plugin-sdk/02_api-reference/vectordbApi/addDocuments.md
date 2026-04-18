---
name: addDocuments
cbbaseinfo:
  description: Call addDocuments on the Plugin SDK vectordbApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: AddVectorDocumentsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addDocuments
  category: vectordbApi
  link: addDocuments.md
---
# addDocuments

```typescript
plugin.vectordbApi.addDocuments(id: string, data: AddVectorDocumentsRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `AddVectorDocumentsRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.vectordbApi.addDocuments('id', /* AddVectorDocumentsRequest */);
```
