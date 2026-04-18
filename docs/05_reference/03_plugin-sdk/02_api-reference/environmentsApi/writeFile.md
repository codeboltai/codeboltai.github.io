---
name: writeFile
cbbaseinfo:
  description: Call writeFile on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: WriteEnvironmentFileRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: writeFile
  category: environmentsApi
  link: writeFile.md
---
# writeFile

```typescript
plugin.environmentsApi.writeFile(id: string, data: WriteEnvironmentFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `WriteEnvironmentFileRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.writeFile('id', /* WriteEnvironmentFileRequest */);
```
