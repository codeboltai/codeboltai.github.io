---
name: autocomplete
cbbaseinfo:
  description: Call autocomplete on the Plugin SDK fileReadApi module.
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
  name: autocomplete
  category: fileReadApi
  link: autocomplete.md
---
# autocomplete

```typescript
plugin.fileReadApi.autocomplete(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
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

await plugin.fileReadApi.autocomplete();
```
