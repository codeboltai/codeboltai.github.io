---
title: getThreadFileChangesSummary
---

# `getThreadFileChangesSummary`

```typescript
plugin.thread.getThreadFileChangesSummary(threadId: string): Promise<ThreadFileChangesSummaryResponse>
```

Retrieves file changes summary for ChangesSummaryPanel.
Returns data in the format: \{ title, changes, files \}

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `threadId` | `string` | Yes | The thread ID |

## Returns

`Promise<ThreadFileChangesSummaryResponse>` — A promise that resolves with the file changes summary

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.thread.getThreadFileChangesSummary('threadId');
console.log(result);
```
