---
name: getThreadFileChangesSummary
cbbaseinfo:
  description: "Retrieves file changes summary for ChangesSummaryPanel.
Returns data in the format: { title, changes, files }"
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The thread ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<ThreadFileChangesSummaryResponse>"
    description: A promise that resolves with the file changes summary
data:
  name: getThreadFileChangesSummary
  category: thread
  link: getThreadFileChangesSummary.md
---
# getThreadFileChangesSummary

```typescript
plugin.thread.getThreadFileChangesSummary(threadId: string): Promise<ThreadFileChangesSummaryResponse>
```

Retrieves file changes summary for ChangesSummaryPanel.
Returns data in the format: { title, changes, files }

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The thread ID |

## Returns

**`Promise<ThreadFileChangesSummaryResponse>`** — A promise that resolves with the file changes summary

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.getThreadFileChangesSummary('threadId');
```
