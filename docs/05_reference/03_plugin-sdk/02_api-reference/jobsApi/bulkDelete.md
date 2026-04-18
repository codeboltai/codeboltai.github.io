---
title: bulkDelete
---

# `bulkDelete`

```typescript
plugin.jobsApi.bulkDelete(data: BulkDeleteJobsRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `BulkDeleteJobsRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.bulkDelete(/* BulkDeleteJobsRequest */);
console.log(result);
```
