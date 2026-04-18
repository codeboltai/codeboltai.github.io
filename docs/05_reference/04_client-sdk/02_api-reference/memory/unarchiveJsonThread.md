---
name: unarchiveJsonThread
cbbaseinfo:
  description: Restores an archived JSON thread back to active status.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the JSON thread to unarchive
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the thread has been unarchived
data:
  name: unarchiveJsonThread
  category: memory
  link: unarchiveJsonThread.md
---
# unarchiveJsonThread

```typescript
client.memory.unarchiveJsonThread(threadId: string): Promise<unknown>
```

Restores an archived JSON thread back to active status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the JSON thread to unarchive |

## Returns

**`Promise<unknown>`** — A promise that resolves when the thread has been unarchived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.unarchiveJsonThread('threadId');
```
