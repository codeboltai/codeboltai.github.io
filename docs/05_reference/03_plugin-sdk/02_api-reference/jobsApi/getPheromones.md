---
title: getPheromones
---

# `getPheromones`

```typescript
plugin.jobsApi.getPheromones(id: string): Promise<Pheromone[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<Pheromone[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getPheromones('id');
console.log(result);
```
