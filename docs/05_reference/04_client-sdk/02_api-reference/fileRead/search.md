---
name: search
cbbaseinfo:
  description: "Searches for files matching a query string.

Performs a text-based search across file names and paths in the project.
Returns matching files with their paths and metadata."
cbparameters:
  parameters:
    - name: params
      typeName: FileSearchParams
      description: Optional search parameters including the query string
      isOptional: true
  returns:
    signatureTypeName: "Promise<FileSearchResult[]>"
    description: A promise that resolves to an array of  matches
data:
  name: search
  category: fileRead
  link: search.md
---
# search

```typescript
client.fileRead.search(params?: FileSearchParams): Promise<FileSearchResult[]>
```

Searches for files matching a query string.

Performs a text-based search across file names and paths in the project.
Returns matching files with their paths and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileSearchParams` _(optional)_ | Optional search parameters including the query string |

## Returns

**`Promise<FileSearchResult[]>`** — A promise that resolves to an array of  matches

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.fileRead.search();
```
