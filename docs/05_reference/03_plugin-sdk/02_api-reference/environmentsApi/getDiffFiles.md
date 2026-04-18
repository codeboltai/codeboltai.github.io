---
name: getDiffFiles
cbbaseinfo:
  description: Call getDiffFiles on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: GetDiffFilesRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: getDiffFiles
  category: environmentsApi
  link: getDiffFiles.md
---
# getDiffFiles

```typescript
plugin.environmentsApi.getDiffFiles(id: string, data: GetDiffFilesRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `GetDiffFilesRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.getDiffFiles('id', /* GetDiffFilesRequest */);
```
