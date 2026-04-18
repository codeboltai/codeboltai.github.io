---
title: deletePheromoneType
---

# `deletePheromoneType`

```typescript
plugin.jobsApi.deletePheromoneType(name: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.deletePheromoneType('name');
console.log(result);
```
