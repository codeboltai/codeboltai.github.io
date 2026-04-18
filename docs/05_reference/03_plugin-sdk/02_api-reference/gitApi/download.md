---
name: download
cbbaseinfo:
  description: Call download on the Plugin SDK gitApi module.
cbparameters:
  parameters:
    - name: data
      typeName: GitDownloadRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: download
  category: gitApi
  link: download.md
---
# download

```typescript
plugin.gitApi.download(data: GitDownloadRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `GitDownloadRequest` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.gitApi.download(/* GitDownloadRequest */);
```
