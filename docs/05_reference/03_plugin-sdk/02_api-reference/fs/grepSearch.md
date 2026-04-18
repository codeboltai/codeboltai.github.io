---
name: grepSearch
cbbaseinfo:
  description: grepSearch
cbparameters:
  parameters:
    - name: path
      typeName: string
      description: The path to search within.
      isOptional: false
    - name: query
      typeName: string
      description: The query to search for.
      isOptional: false
    - name: includePattern
      typeName: string
      description: Pattern of files to include.
      isOptional: true
    - name: excludePattern
      typeName: string
      description: Pattern of files to exclude.
      isOptional: true
    - name: caseSensitive
      typeName: boolean
      description: Whether the search is case sensitive.
      isOptional: false
  returns:
    signatureTypeName: "Promise<GrepSearchResponse>"
    description: A promise that resolves with the search results.
data:
  name: grepSearch
  category: fs
  link: grepSearch.md
---
# grepSearch

```typescript
plugin.fs.grepSearch(path: string, query: string, includePattern?: string, excludePattern?: string, caseSensitive: boolean): Promise<GrepSearchResponse>
```

grepSearch

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `path` | `string` | The path to search within. |
| `query` | `string` | The query to search for. |
| `includePattern` | `string` _(optional)_ | Pattern of files to include. |
| `excludePattern` | `string` _(optional)_ | Pattern of files to exclude. |
| `caseSensitive` | `boolean` | Whether the search is case sensitive. Default: `true` |

## Returns

**`Promise<GrepSearchResponse>`** — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.grepSearch('path', 'query', true);
```
