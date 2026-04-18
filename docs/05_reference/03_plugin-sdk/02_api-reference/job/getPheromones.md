---
title: getPheromones
---

# `getPheromones`

```typescript
plugin.job.getPheromones(jobId: string): Promise<JobPheromoneListResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |

## Returns

`Promise<JobPheromoneListResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.getPheromones('jobId');
console.log(result);
```
