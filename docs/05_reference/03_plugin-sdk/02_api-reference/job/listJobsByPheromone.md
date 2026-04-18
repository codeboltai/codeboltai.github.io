---
title: listJobsByPheromone
---

# `listJobsByPheromone`

```typescript
plugin.job.listJobsByPheromone(type: string, minIntensity?: number): Promise<JobPheromoneSearchResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes |  |
| `minIntensity` | `number` | No |  |

## Returns

`Promise<JobPheromoneSearchResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.listJobsByPheromone('type');
console.log(result);
```
