---
title: removePheromoneType
---

# `removePheromoneType`

```typescript
plugin.job.removePheromoneType(name: string): Promise<JobPheromoneTypeResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |

## Returns

`Promise<JobPheromoneTypeResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.removePheromoneType('name');
console.log(result);
```
