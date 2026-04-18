---
name: autocompleteFolders
cbbaseinfo:
  description: "Gets autocomplete suggestions for folder paths only.

Like  but restricted to directories, excluding
individual files from the results. Useful for folder picker UIs."
cbparameters:
  parameters:
    - name: params
      typeName: FileAutocompleteParams
      description: Optional parameters including the partial folder path to complete
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileAutocompleteResult[]>"
    description: A promise that resolves to an array of  folder suggestions
data:
  name: autocompleteFolders
  category: fileRead
  link: autocompleteFolders.md
---
# autocompleteFolders

```typescript
client.fileRead.autocompleteFolders(params?: FileAutocompleteParams): Promise<FileAutocompleteResult[]>
```

Gets autocomplete suggestions for folder paths only.

Like  but restricted to directories, excluding
individual files from the results. Useful for folder picker UIs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileAutocompleteParams` _(optional)_ | Optional parameters including the partial folder path to complete |

## Returns

**`Promise<FileAutocompleteResult[]>`** — A promise that resolves to an array of  folder suggestions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileRead.autocompleteFolders();
```
