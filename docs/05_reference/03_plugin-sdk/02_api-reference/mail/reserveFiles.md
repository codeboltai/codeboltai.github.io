---
name: reserveFiles
cbbaseinfo:
  description: Call reserveFiles on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IReserveFilesParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IReserveFilesResponse>"
    description: ""
data:
  name: reserveFiles
  category: mail
  link: reserveFiles.md
---
# reserveFiles

```typescript
plugin.mail.reserveFiles(params: IReserveFilesParams): Promise<IReserveFilesResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IReserveFilesParams` |  |

## Returns

**`Promise<IReserveFilesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.reserveFiles(/* IReserveFilesParams */);
```
