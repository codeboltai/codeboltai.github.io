---
name: updateJsonThread
cbbaseinfo:
  description: "Updates the metadata of a JSON thread (name, tags, etc.).

Modifies thread-level properties without changing the stored JSON data.
Use  to change the actual data payload."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the JSON thread to update
      isOptional: false
    - name: data
      typeName: UpdateJsonThreadRequest
      description: The metadata fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the updated JSON thread
data:
  name: updateJsonThread
  category: memory
  link: updateJsonThread.md
---
# updateJsonThread

```typescript
client.memory.updateJsonThread(threadId: string, data: UpdateJsonThreadRequest): Promise<MemoryThread>
```

Updates the metadata of a JSON thread (name, tags, etc.).

Modifies thread-level properties without changing the stored JSON data.
Use  to change the actual data payload.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the JSON thread to update |
| `data` | `UpdateJsonThreadRequest` | The metadata fields to update |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the updated JSON thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.updateJsonThread('threadId', /* UpdateJsonThreadRequest */);
```
