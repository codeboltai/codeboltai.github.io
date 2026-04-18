---
name: releaseFiles
cbbaseinfo:
  description: Call releaseFiles on the Plugin SDK mail module.
cbparameters:
  parameters:
    - name: params
      typeName: IReleaseFilesParams
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<IReleaseFilesResponse>"
    description: ""
data:
  name: releaseFiles
  category: mail
  link: releaseFiles.md
---
# releaseFiles

```typescript
plugin.mail.releaseFiles(params: IReleaseFilesParams): Promise<IReleaseFilesResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IReleaseFilesParams` |  |

## Returns

**`Promise<IReleaseFilesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.mail.releaseFiles(/* IReleaseFilesParams */);
```
