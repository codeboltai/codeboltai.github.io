---
title: getPheromonesAggregatedWithDecay
---

# `getPheromonesAggregatedWithDecay`

```typescript
plugin.job.getPheromonesAggregatedWithDecay(jobId: string): Promise<JobPheromoneAggregatedResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

## Returns

`Promise<JobPheromoneAggregatedResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.getPheromonesAggregatedWithDecay('jobId');
console.log(result);
```
