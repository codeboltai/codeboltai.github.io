---
title: mergePatch
---

# `mergePatch`

```typescript
plugin.environmentsApi.mergePatch(id: string, data: MergePatchRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `MergePatchRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.mergePatch('id', /* MergePatchRequest */);
console.log(result);
```
