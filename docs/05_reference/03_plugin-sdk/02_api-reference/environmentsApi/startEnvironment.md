---
title: startEnvironment
---

# `startEnvironment`

```typescript
plugin.environmentsApi.startEnvironment(id: string, data?: Record<string, unknown>): Promise<unknown>
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

const result = await plugin.environmentsApi.startEnvironment('id');
console.log(result);
```
