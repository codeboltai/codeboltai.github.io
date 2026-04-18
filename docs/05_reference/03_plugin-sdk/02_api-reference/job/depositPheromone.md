---
title: depositPheromone
---

# `depositPheromone`

```typescript
plugin.job.depositPheromone(jobId: string, deposit: DepositPheromoneData): Promise<JobPheromoneDepositResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `deposit` | `DepositPheromoneData` | Yes |  |

## Returns

`Promise<JobPheromoneDepositResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.depositPheromone('jobId', /* DepositPheromoneData */);
console.log(result);
```
