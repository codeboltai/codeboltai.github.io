---
name: updateStatus
cbbaseinfo:
  description: "Updates the status of a specific thread.

Changes the execution state of the thread to a new status such as active,
paused, or completed. This controls the thread's lifecycle and availability
for execution."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update
      isOptional: false
    - name: data
      typeName: UpdateThreadStatusRequest
      description: The request containing the new status information
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the status has been updated
data:
  name: updateStatus
  category: threads
  link: updateStatus.md
---
# updateStatus

```typescript
client.threads.updateStatus(threadId: string, data: UpdateThreadStatusRequest): Promise<void>
```

Updates the status of a specific thread.

Changes the execution state of the thread to a new status such as active,
paused, or completed. This controls the thread's lifecycle and availability
for execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateThreadStatusRequest` | The request containing the new status information |

## Returns

**`Promise<void>`** — A promise that resolves when the status has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.updateStatus('threadId', /* UpdateThreadStatusRequest */);
```
