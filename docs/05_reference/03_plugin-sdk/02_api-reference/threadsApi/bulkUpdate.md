---
title: bulkUpdate
---

# `bulkUpdate`

```typescript
plugin.threadsApi.bulkUpdate(data: ThreadBulkUpdateRequest): Promise<void>
```

Updates multiple threads in a single operation.

Performs bulk modifications across multiple threads simultaneously.
This is more efficient than updating threads individually when you need
to apply the same changes to many threads.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ThreadBulkUpdateRequest` | Yes | The bulk update request containing thread IDs and updates |

## Returns

`Promise<void>` — A promise that resolves when all threads have been updated

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.threadsApi.bulkUpdate(/* ThreadBulkUpdateRequest */);
console.log(result);
```
