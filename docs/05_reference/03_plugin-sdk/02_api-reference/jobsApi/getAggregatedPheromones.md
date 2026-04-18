---
title: getAggregatedPheromones
---

# `getAggregatedPheromones`

```typescript
plugin.jobsApi.getAggregatedPheromones(id: string): Promise<Record<string, unknown>>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<Record<string, unknown>>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getAggregatedPheromones('id');
console.log(result);
```
