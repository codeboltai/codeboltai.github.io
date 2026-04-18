---
name: addFile
cbbaseinfo:
  description: Call addFile on the Plugin SDK fileApi module.
cbparameters:
  parameters:
    - name: data
      typeName: AddFileRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: addFile
  category: fileApi
  link: addFile.md
---
# addFile

```typescript
plugin.fileApi.addFile(data: AddFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddFileRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileApi.addFile(/* AddFileRequest */);
```
