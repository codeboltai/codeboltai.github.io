---
name: mergePatch
cbbaseinfo:
  description: Call mergePatch on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: MergePatchRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: mergePatch
  category: environmentsApi
  link: mergePatch.md
---
# mergePatch

```typescript
plugin.environmentsApi.mergePatch(id: string, data: MergePatchRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `MergePatchRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.mergePatch('id', /* MergePatchRequest */);
```
