---
title: getThreadFileChanges
---

# `getThreadFileChanges`

```typescript
plugin.thread.getThreadFileChanges(threadId: string): Promise<ThreadFileChangesResponse>
```

Retrieves file changes associated with a specific thread.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID |

## Returns

`Promise<ThreadFileChangesResponse>` — A promise that resolves with the file changes

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.getThreadFileChanges('threadId');
console.log(result);
```
