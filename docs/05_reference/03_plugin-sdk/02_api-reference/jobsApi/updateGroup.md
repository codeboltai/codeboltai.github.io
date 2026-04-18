---
title: updateGroup
---

# `updateGroup`

```typescript
plugin.jobsApi.updateGroup(id: string, data: UpdateJobGroupRequest): Promise<JobGroup>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateJobGroupRequest` | Yes |  |

## Returns

`Promise<JobGroup>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.updateGroup('id', /* UpdateJobGroupRequest */);
console.log(result);
```
