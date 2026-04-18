---
name: autocompleteForSearch
cbbaseinfo:
  description: "Gets autocomplete suggestions optimized for search input.

Similar to  but tailored for search-box contexts
where the user is typing a search query rather than a file path."
cbparameters:
  parameters:
    - name: params
      typeName: FileSearchParams
      description: Optional search parameters including the partial query
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileAutocompleteResult[]>"
    description: A promise that resolves to an array of  suggestions
data:
  name: autocompleteForSearch
  category: fileRead
  link: autocompleteForSearch.md
---
# autocompleteForSearch

```typescript
client.fileRead.autocompleteForSearch(params?: FileSearchParams): Promise<FileAutocompleteResult[]>
```

Gets autocomplete suggestions optimized for search input.

Similar to  but tailored for search-box contexts
where the user is typing a search query rather than a file path.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileSearchParams` _(optional)_ | Optional search parameters including the partial query |

## Returns

**`Promise<FileAutocompleteResult[]>`** — A promise that resolves to an array of  suggestions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileRead.autocompleteForSearch();
```
