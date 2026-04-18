---
title: removePheromone
---

# `removePheromone`

```typescript
plugin.job.removePheromone(jobId: string, type: string, depositedBy?: string): Promise<JobPheromoneRemoveResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `depositedBy` | `string` | No |  |

## Returns

`Promise<JobPheromoneRemoveResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.removePheromone('jobId', 'type');
console.log(result);
```
