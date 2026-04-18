---
title: grepSearch
---

# `grepSearch`

```typescript
plugin.fs.grepSearch(path: string, query: string, includePattern?: string, excludePattern?: string, caseSensitive: boolean): Promise<GrepSearchResponse>
```

grepSearch

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | `string` | Yes | The path to search within. |
| `query` | `string` | Yes | The query to search for. |
| `includePattern` | `string` | No | Pattern of files to include. |
| `excludePattern` | `string` | No | Pattern of files to exclude. |
| `caseSensitive` | `boolean` | Yes | Whether the search is case sensitive. _(default: `true`)_ |

## Returns

`Promise<GrepSearchResponse>` — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.grepSearch('path', 'query', true);
console.log(result);
```
