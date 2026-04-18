---
name: updateThreadStatus
cbbaseinfo:
  description: Updates the status of a thread.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The thread ID
      isOptional: false
    - name: status
      typeName: string
      description: The new status
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: A promise that resolves with the thread status update response
data:
  name: updateThreadStatus
  category: thread
  link: updateThreadStatus.md
---
# updateThreadStatus

```typescript
plugin.thread.updateThreadStatus(threadId: string, status: string): Promise<object>
```

Updates the status of a thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The thread ID |
| `status` | `string` | The new status |

## Returns

**`Promise<object>`** — A promise that resolves with the thread status update response

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.thread.updateThreadStatus('threadId', 'status');
```
