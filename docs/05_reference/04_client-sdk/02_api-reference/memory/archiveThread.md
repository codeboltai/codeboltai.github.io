---
name: archiveThread
cbbaseinfo:
  description: "Archives a generic memory thread to remove it from active listings.

Moves the thread to an archived state where it is preserved but hidden from default
queries. Archived threads can be restored later."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to archive
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the thread has been archived
data:
  name: archiveThread
  category: memory
  link: archiveThread.md
---
# archiveThread

```typescript
client.memory.archiveThread(threadId: string): Promise<unknown>
```

Archives a generic memory thread to remove it from active listings.

Moves the thread to an archived state where it is preserved but hidden from default
queries. Archived threads can be restored later.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to archive |

## Returns

**`Promise<unknown>`** — A promise that resolves when the thread has been archived

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.archiveThread('threadId');
```
