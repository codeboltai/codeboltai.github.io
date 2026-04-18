---
title: fileSearch
---

# `fileSearch`

```typescript
plugin.fs.fileSearch(query: string): Promise<FileSearchResponse>
```

fileSearch

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes | The query to search for. |

## Returns

`Promise<FileSearchResponse>` — A promise that resolves with the search results.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fs.fileSearch('query');
console.log(result);
```
