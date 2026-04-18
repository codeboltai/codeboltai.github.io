---
title: addPheromone
---

# `addPheromone`

```typescript
plugin.jobsApi.addPheromone(id: string, data: PheromoneDepositRequest): Promise<Pheromone>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `PheromoneDepositRequest` | Yes |  |

## Returns

`Promise<Pheromone>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.addPheromone('id', /* PheromoneDepositRequest */);
console.log(result);
```
