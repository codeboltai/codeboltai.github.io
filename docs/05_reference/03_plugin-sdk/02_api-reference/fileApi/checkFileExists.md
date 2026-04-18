---
name: checkFileExists
cbbaseinfo:
  description: Call checkFileExists on the Plugin SDK fileApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CheckFileExistsRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<CheckFileExistsResponse>"
    description: ""
data:
  name: checkFileExists
  category: fileApi
  link: checkFileExists.md
---
# checkFileExists

```typescript
plugin.fileApi.checkFileExists(data: CheckFileExistsRequest): Promise<CheckFileExistsResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CheckFileExistsRequest` |  |

## Returns

**`Promise<CheckFileExistsResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileApi.checkFileExists(/* CheckFileExistsRequest */);
```
