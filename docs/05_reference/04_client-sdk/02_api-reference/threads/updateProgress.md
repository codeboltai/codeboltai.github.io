---
name: updateProgress
cbbaseinfo:
  description: "Updates the progress information for a thread.

Modifies the thread's progress metrics, such as completion percentage,
current step, or other progress indicators. This is useful for tracking
execution progress and providing feedback to users."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update
      isOptional: false
    - name: data
      typeName: UpdateThreadProgressRequest
      description: The request containing progress update information
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the progress has been updated
data:
  name: updateProgress
  category: threads
  link: updateProgress.md
---
# updateProgress

```typescript
client.threads.updateProgress(threadId: string, data: UpdateThreadProgressRequest): Promise<void>
```

Updates the progress information for a thread.

Modifies the thread's progress metrics, such as completion percentage,
current step, or other progress indicators. This is useful for tracking
execution progress and providing feedback to users.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateThreadProgressRequest` | The request containing progress update information |

## Returns

**`Promise<void>`** — A promise that resolves when the progress has been updated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.updateProgress('threadId', /* UpdateThreadProgressRequest */);
```
