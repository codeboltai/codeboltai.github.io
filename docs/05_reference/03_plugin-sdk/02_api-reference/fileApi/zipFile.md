---
name: zipFile
cbbaseinfo:
  description: Call zipFile on the Plugin SDK fileApi module.
cbparameters:
  parameters:
    - name: data
      typeName: ZipFileRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: zipFile
  category: fileApi
  link: zipFile.md
---
# zipFile

```typescript
plugin.fileApi.zipFile(data: ZipFileRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ZipFileRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileApi.zipFile(/* ZipFileRequest */);
```
