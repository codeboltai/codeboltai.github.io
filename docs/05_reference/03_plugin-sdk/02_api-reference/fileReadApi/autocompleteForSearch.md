---
name: autocompleteForSearch
cbbaseinfo:
  description: Call autocompleteForSearch on the Plugin SDK fileReadApi module.
cbparameters:
  parameters:
    - name: params
      typeName: FileSearchParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileAutocompleteResult[]>"
    description: ""
data:
  name: autocompleteForSearch
  category: fileReadApi
  link: autocompleteForSearch.md
---
# autocompleteForSearch

```typescript
plugin.fileReadApi.autocompleteForSearch(params?: FileSearchParams): Promise<FileAutocompleteResult[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileSearchParams` _(optional)_ |  |

## Returns

**`Promise<FileAutocompleteResult[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileReadApi.autocompleteForSearch();
```
