---
title: getPheromonesAggregated
---

# `getPheromonesAggregated`

```typescript
plugin.job.getPheromonesAggregated(jobId: string): Promise<JobPheromoneAggregatedResponse>
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

const result = await plugin.job.getPheromonesAggregated('jobId');
console.log(result);
```
