---
title: update
---

# `update`

```typescript
plugin.hooksApi.update(id: string, data: UpdateHookRequest): Promise<Hook>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateHookRequest` | Yes |  |

## Returns

`Promise<Hook>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hooksApi.update('id', /* UpdateHookRequest */);
console.log(result);
```
