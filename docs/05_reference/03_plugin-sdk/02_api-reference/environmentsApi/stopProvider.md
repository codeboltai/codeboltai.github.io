---
title: stopProvider
---

# `stopProvider`

```typescript
plugin.environmentsApi.stopProvider(id: string, data?: Record<string, unknown>): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `Record<string, unknown>` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.stopProvider('id');
console.log(result);
```
