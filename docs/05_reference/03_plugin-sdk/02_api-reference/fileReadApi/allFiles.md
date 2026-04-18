---
title: allFiles
---

# `allFiles`

```typescript
plugin.fileReadApi.allFiles(params?: FileSearchParams): Promise<FileSearchResult[]>
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

const result = await plugin.fileReadApi.allFiles();
console.log(result);
```
