---
name: allFiles
cbbaseinfo:
  description: "Retrieves a listing of all files in the project.

Returns the complete set of files, optionally filtered by the provided
search parameters. Useful for building file indexes or bulk operations."
cbparameters:
  parameters:
    - name: params
      typeName: FileSearchParams
      description: Optional parameters for filtering the file list
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileSearchResult[]>"
    description: A promise that resolves to an array of  entries
data:
  name: allFiles
  category: fileRead
  link: allFiles.md
---
# allFiles

```typescript
client.fileRead.allFiles(params?: FileSearchParams): Promise<FileSearchResult[]>
```

Retrieves a listing of all files in the project.

Returns the complete set of files, optionally filtered by the provided
search parameters. Useful for building file indexes or bulk operations.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileSearchParams` _(optional)_ | Optional parameters for filtering the file list |

## Returns

**`Promise<FileSearchResult[]>`** — A promise that resolves to an array of  entries

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileRead.allFiles();
```
