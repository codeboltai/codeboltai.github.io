---
name: getContextThread
cbbaseinfo:
  description: "Retrieves a specific context thread by its unique identifier.

Returns the full context thread including captured conversation data and metadata."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the context thread to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the context memory thread
data:
  name: getContextThread
  category: memory
  link: getContextThread.md
---
# getContextThread

```typescript
client.memory.getContextThread(threadId: string): Promise<MemoryThread>
```

Retrieves a specific context thread by its unique identifier.

Returns the full context thread including captured conversation data and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the context thread to retrieve |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the context memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.getContextThread('threadId');
```
