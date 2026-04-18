---
title: addBlocker
---

# `addBlocker`

```typescript
plugin.job.addBlocker(jobId: string, blocker: AddBlockerData): Promise<JobBlockerAddResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `jobId` | `string` | Yes |  |
| `blocker` | `AddBlockerData` | Yes |  |

## Returns

`Promise<JobBlockerAddResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.job.addBlocker('jobId', /* AddBlockerData */);
console.log(result);
```
