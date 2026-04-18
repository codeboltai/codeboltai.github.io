---
name: openFolder
cbbaseinfo:
  description: Call openFolder on the Plugin SDK systemApi module.
cbparameters:
  parameters:
    - name: data
      typeName: OpenFolderRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<OpenFolderResponse>"
    description: ""
data:
  name: openFolder
  category: systemApi
  link: openFolder.md
---
# openFolder

```typescript
plugin.systemApi.openFolder(data: OpenFolderRequest): Promise<OpenFolderResponse>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `OpenFolderRequest` |  |

## Returns

**`Promise<OpenFolderResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.systemApi.openFolder(/* OpenFolderRequest */);
```
