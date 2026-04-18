---
title: getPheromonesWithDecay
---

# `getPheromonesWithDecay`

```typescript
plugin.job.getPheromonesWithDecay(jobId: string): Promise<JobPheromoneListResponse>
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

const result = await plugin.job.getPheromonesWithDecay('jobId');
console.log(result);
```
