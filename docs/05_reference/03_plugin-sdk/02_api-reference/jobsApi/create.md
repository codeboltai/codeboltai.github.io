---
title: create
---

# `create`

```typescript
plugin.jobsApi.create(data: CreateJobRequest): Promise<Job>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CreateJobRequest` | Yes |  |

## Returns

`Promise<Job>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.create(/* CreateJobRequest */);
console.log(result);
```
