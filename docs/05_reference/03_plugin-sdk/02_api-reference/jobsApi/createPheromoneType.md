---
title: createPheromoneType
---

# `createPheromoneType`

```typescript
plugin.jobsApi.createPheromoneType(data: CreatePheromoneTypeRequest): Promise<PheromoneType>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreatePheromoneTypeRequest` | Yes |  |

## Returns

`Promise<PheromoneType>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.createPheromoneType(/* CreatePheromoneTypeRequest */);
console.log(result);
```
