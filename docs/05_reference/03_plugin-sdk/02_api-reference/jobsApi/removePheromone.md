---
title: removePheromone
---

# `removePheromone`

```typescript
plugin.jobsApi.removePheromone(id: string, type: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `type` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.removePheromone('id', 'type');
console.log(result);
```
