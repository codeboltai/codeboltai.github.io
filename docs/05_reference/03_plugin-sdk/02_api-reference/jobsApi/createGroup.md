---
title: createGroup
---

# `createGroup`

```typescript
plugin.jobsApi.createGroup(data: CreateJobGroupRequest): Promise<JobGroup>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateJobGroupRequest` | Yes |  |

## Returns

`Promise<JobGroup>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.createGroup(/* CreateJobGroupRequest */);
console.log(result);
```
