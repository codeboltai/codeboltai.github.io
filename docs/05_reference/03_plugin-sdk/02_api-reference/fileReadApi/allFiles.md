---
name: allFiles
cbbaseinfo:
  description: Call allFiles on the Plugin SDK fileReadApi module.
cbparameters:
  parameters:
    - name: params
      typeName: FileSearchParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileSearchResult[]>"
    description: ""
data:
  name: allFiles
  category: fileReadApi
  link: allFiles.md
---
# allFiles

```typescript
plugin.fileReadApi.allFiles(params?: FileSearchParams): Promise<FileSearchResult[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileSearchParams` _(optional)_ |  |

## Returns

**`Promise<FileSearchResult[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileReadApi.allFiles();
```
