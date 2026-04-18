---
name: createContextThread
cbbaseinfo:
  description: "Creates a new context memory thread.

Initializes a thread designed to capture and store conversational context. Context
threads preserve the state and knowledge gathered during chat interactions for later
recall and summarization."
cbparameters:
  parameters:
    - name: data
      typeName: CreateContextThreadRequest
      description: The context thread creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the newly created context thread
data:
  name: createContextThread
  category: memory
  link: createContextThread.md
---
# createContextThread

```typescript
client.memory.createContextThread(data: CreateContextThreadRequest): Promise<MemoryThread>
```

Creates a new context memory thread.

Initializes a thread designed to capture and store conversational context. Context
threads preserve the state and knowledge gathered during chat interactions for later
recall and summarization.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateContextThreadRequest` | The context thread creation payload |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the newly created context thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.createContextThread(/* CreateContextThreadRequest */);
```
