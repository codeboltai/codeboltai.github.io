---
name: archiveContextThread
cbbaseinfo:
  description: Archives a context thread to remove it from active listings.
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the context thread to archive
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the thread has been archived
data:
  name: archiveContextThread
  category: memory
  link: archiveContextThread.md
---
# archiveContextThread

```typescript
client.memory.archiveContextThread(threadId: string): Promise<unknown>
```

Archives a context thread to remove it from active listings.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the context thread to archive |

## Returns

**`Promise<unknown>`** — A promise that resolves when the thread has been archived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.archiveContextThread('threadId');
```
