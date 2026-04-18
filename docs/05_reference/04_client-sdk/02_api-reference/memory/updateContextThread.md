---
name: updateContextThread
cbbaseinfo:
  description: "Updates the metadata of a context thread.

Modifies thread-level properties such as name and tags without affecting the stored
conversational context."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the context thread to update
      isOptional: false
    - name: data
      typeName: UpdateContextThreadRequest
      description: The metadata fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the updated context thread
data:
  name: updateContextThread
  category: memory
  link: updateContextThread.md
---
# updateContextThread

```typescript
client.memory.updateContextThread(threadId: string, data: UpdateContextThreadRequest): Promise<MemoryThread>
```

Updates the metadata of a context thread.

Modifies thread-level properties such as name and tags without affecting the stored
conversational context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the context thread to update |
| `data` | `UpdateContextThreadRequest` | The metadata fields to update |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the updated context thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateContextThread('threadId', /* UpdateContextThreadRequest */);
```
