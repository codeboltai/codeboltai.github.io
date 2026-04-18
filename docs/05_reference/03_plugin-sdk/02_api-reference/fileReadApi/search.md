---
name: search
cbbaseinfo:
  description: Call search on the Plugin SDK fileReadApi module.
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
  name: search
  category: fileReadApi
  link: search.md
---
# search

```typescript
plugin.fileReadApi.search(params?: FileSearchParams): Promise<FileSearchResult[]>
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

await plugin.fileReadApi.search();
```
