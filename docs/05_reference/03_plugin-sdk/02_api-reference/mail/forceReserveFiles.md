---
name: forceReserveFiles
cbbaseinfo:
  description: Call forceReserveFiles on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IForceReserveFilesParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IForceReserveFilesResponse>"
    description: ""
data:
  name: forceReserveFiles
  category: mail
  link: forceReserveFiles.md
---
# forceReserveFiles

```typescript
plugin.mail.forceReserveFiles(params: IForceReserveFilesParams): Promise<IForceReserveFilesResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IForceReserveFilesParams` |  |

## Returns

**`Promise<IForceReserveFilesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.forceReserveFiles(/* IForceReserveFilesParams */);
```
