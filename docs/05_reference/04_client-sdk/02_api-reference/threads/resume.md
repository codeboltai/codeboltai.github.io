---
name: resume
cbbaseinfo:
  description: "Resumes execution of a paused thread.

Reactivates a thread that was previously paused, allowing it to continue
its operations from where it left off. The thread will return to an
active state and continue processing."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to resume
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the thread has been resumed
data:
  name: resume
  category: threads
  link: resume.md
---
# resume

```typescript
client.threads.resume(threadId: string): Promise<void>
```

Resumes execution of a paused thread.

Reactivates a thread that was previously paused, allowing it to continue
its operations from where it left off. The thread will return to an
active state and continue processing.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to resume |

## Returns

**`Promise<void>`** — A promise that resolves when the thread has been resumed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.threads.resume('threadId');
```
