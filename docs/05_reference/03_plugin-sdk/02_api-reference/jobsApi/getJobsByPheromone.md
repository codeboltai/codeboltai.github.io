---
title: getJobsByPheromone
---

# `getJobsByPheromone`

```typescript
plugin.jobsApi.getJobsByPheromone(type: string): Promise<Job[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `type` | `string` | Yes |  |

## Returns

`Promise<Job[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.getJobsByPheromone('type');
console.log(result);
```
