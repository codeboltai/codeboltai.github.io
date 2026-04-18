---
title: search
---

# `search`

```typescript
plugin.codebaseSearch.search(query: string, targetDirectories?: string[]): Promise<CodebaseSearchResponse>
```

Perform a semantic search across the codebase

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes | The search query |
| `targetDirectories` | `string[]` | No | Optional directories to limit the search |

## Returns

`Promise<CodebaseSearchResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.codebaseSearch.search('query');
console.log(result);
```
