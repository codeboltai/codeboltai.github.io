---
name: fileSearch
cbbaseinfo:
  description: fileSearch
cbparameters:
  parameters:
    - name: query
      typeName: string
      description: The query to search for.
      isOptional: false
  returns:
    signatureTypeName: "Promise<FileSearchResponse>"
    description: A promise that resolves with the search results.
data:
  name: fileSearch
  category: fs
  link: fileSearch.md
---
# fileSearch

```typescript
plugin.fs.fileSearch(query: string): Promise<FileSearchResponse>
```

fileSearch

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `query` | `string` | The query to search for. |

## Returns

**`Promise<FileSearchResponse>`** — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.fileSearch('query');
```
