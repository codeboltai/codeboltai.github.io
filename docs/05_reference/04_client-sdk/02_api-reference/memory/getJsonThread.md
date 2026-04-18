---
name: getJsonThread
cbbaseinfo:
  description: "Retrieves a specific JSON thread by its unique identifier.

Returns the full JSON thread including its stored data payload and metadata."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the JSON thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the JSON memory thread
data:
  name: getJsonThread
  category: memory
  link: getJsonThread.md
---
# getJsonThread

```typescript
client.memory.getJsonThread(threadId: string): Promise<MemoryThread>
```

Retrieves a specific JSON thread by its unique identifier.

Returns the full JSON thread including its stored data payload and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the JSON thread to retrieve |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the JSON memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getJsonThread('threadId');
```
