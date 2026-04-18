---
title: search
---

# `search`

```typescript
plugin.fileReadApi.search(params?: FileSearchParams): Promise<FileSearchResult[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileSearchParams` | No |  |

## Returns

`Promise<FileSearchResult[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileReadApi.search();
console.log(result);
```
