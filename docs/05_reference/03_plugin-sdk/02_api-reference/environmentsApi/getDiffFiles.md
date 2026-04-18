---
title: getDiffFiles
---

# `getDiffFiles`

```typescript
plugin.environmentsApi.getDiffFiles(id: string, data: GetDiffFilesRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `GetDiffFilesRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.getDiffFiles('id', /* GetDiffFilesRequest */);
console.log(result);
```
