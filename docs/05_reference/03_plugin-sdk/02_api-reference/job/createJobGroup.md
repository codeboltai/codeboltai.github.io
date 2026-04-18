---
title: createJobGroup
---

# `createJobGroup`

```typescript
plugin.job.createJobGroup(data: CreateJobGroupData): Promise<JobGroupCreateResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateJobGroupData` | Yes |  |

## Returns

`Promise<JobGroupCreateResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.createJobGroup(/* CreateJobGroupData */);
console.log(result);
```
