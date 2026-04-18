---
name: autocomplete
cbbaseinfo:
  description: "Gets autocomplete suggestions for file paths.

Returns file path completions matching a partial input string. Useful
for building file picker UIs with type-ahead functionality."
cbparameters:
  parameters:
    - name: params
      typeName: FileAutocompleteParams
      description: Optional parameters including the partial path to complete
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileAutocompleteResult[]>"
    description: A promise that resolves to an array of  suggestions
data:
  name: autocomplete
  category: fileRead
  link: autocomplete.md
---
# autocomplete

```typescript
client.fileRead.autocomplete(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
```

Gets autocomplete suggestions for file paths.

Returns file path completions matching a partial input string. Useful
for building file picker UIs with type-ahead functionality.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileAutocompleteParams` _(optional)_ | Optional parameters including the partial path to complete |

## Returns

**`Promise<FileAutocompleteResult[]>`** — A promise that resolves to an array of  suggestions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileRead.autocomplete();
```
