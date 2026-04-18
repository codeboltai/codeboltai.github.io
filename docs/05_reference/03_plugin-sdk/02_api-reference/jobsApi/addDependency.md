---
title: addDependency
---

# `addDependency`

```typescript
plugin.jobsApi.addDependency(id: string, data: AddDependencyRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `AddDependencyRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.addDependency('id', /* AddDependencyRequest */);
console.log(result);
```
