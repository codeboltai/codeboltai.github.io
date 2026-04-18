---
title: addPheromoneType
---

# `addPheromoneType`

```typescript
plugin.job.addPheromoneType(data: AddPheromoneTypeData): Promise<JobPheromoneTypeResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AddPheromoneTypeData` | Yes |  |

## Returns

`Promise<JobPheromoneTypeResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.addPheromoneType(/* AddPheromoneTypeData */);
console.log(result);
```
