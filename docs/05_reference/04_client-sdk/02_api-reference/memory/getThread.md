---
name: getThread
cbbaseinfo:
  description: "Retrieves a specific memory thread by its unique identifier.

Returns the full thread object including metadata, content references, and status."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the memory thread details
data:
  name: getThread
  category: memory
  link: getThread.md
---
# getThread

```typescript
client.memory.getThread(threadId: string): Promise<MemoryThread>
```

Retrieves a specific memory thread by its unique identifier.

Returns the full thread object including metadata, content references, and status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to retrieve |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the memory thread details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getThread('threadId');
```
