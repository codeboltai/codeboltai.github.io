---
name: deleteZip
cbbaseinfo:
  description: Call deleteZip on the Plugin SDK fileApi module.
cbparameters:
  parameters:
    - name: data
      typeName: DeleteZipRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteZip
  category: fileApi
  link: deleteZip.md
---
# deleteZip

```typescript
plugin.fileApi.deleteZip(data: DeleteZipRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `DeleteZipRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileApi.deleteZip(/* DeleteZipRequest */);
```
