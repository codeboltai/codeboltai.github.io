---
name: updateThread
cbbaseinfo:
  description: "Updates the metadata or content of a generic memory thread.

Modifies an existing thread's properties such as name, tags, or stored data."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to update
      isOptional: false
    - name: data
      typeName: UpdateMemoryThreadRequest
      description: The fields to update on the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the updated memory thread
data:
  name: updateThread
  category: memory
  link: updateThread.md
---
# updateThread

```typescript
client.memory.updateThread(threadId: string, data: UpdateMemoryThreadRequest): Promise<MemoryThread>
```

Updates the metadata or content of a generic memory thread.

Modifies an existing thread's properties such as name, tags, or stored data.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to update |
| `data` | `UpdateMemoryThreadRequest` | The fields to update on the thread |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the updated memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateThread('threadId', /* UpdateMemoryThreadRequest */);
```
