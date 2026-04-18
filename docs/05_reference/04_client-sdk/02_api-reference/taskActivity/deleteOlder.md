---
title: deleteOlder
---

# `deleteOlder`

```typescript
client.taskActivity.deleteOlder(params?: TaskActivityCleanupParams): Promise<void>
```

Delete older activities (cleanup)

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `TaskActivityCleanupParams` | No |  |

## Returns

`Promise<void>`

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

const result = await client.taskActivity.deleteOlder();
console.log(result);
```
