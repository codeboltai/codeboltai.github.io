---
name: readFile
cbbaseinfo:
  description: Call readFile on the Plugin SDK environmentsApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: ReadEnvironmentFileRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: readFile
  category: environmentsApi
  link: readFile.md
---
# readFile

```typescript
plugin.environmentsApi.readFile(id: string, data: ReadEnvironmentFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `ReadEnvironmentFileRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.environmentsApi.readFile('id', /* ReadEnvironmentFileRequest */);
```
