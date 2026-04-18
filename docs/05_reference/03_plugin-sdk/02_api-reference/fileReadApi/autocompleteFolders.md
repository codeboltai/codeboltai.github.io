---
name: autocompleteFolders
cbbaseinfo:
  description: Call autocompleteFolders on the Plugin SDK fileReadApi module.
cbparameters:
  parameters:
    - name: params
      typeName: FileAutocompleteParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileAutocompleteResult[]>"
    description: ""
data:
  name: autocompleteFolders
  category: fileReadApi
  link: autocompleteFolders.md
---
# autocompleteFolders

```typescript
plugin.fileReadApi.autocompleteFolders(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileAutocompleteParams` _(optional)_ |  |

## Returns

**`Promise<FileAutocompleteResult[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileReadApi.autocompleteFolders();
```
