---
title: update
---

# `update`

```typescript
plugin.jobsApi.update(id: string, data: UpdateJobRequest): Promise<Job>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateJobRequest` | Yes |  |

## Returns

`Promise<Job>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.update('id', /* UpdateJobRequest */);
console.log(result);
```
