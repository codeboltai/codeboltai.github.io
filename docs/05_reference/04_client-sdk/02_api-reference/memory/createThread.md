---
name: createThread
cbbaseinfo:
  description: "Creates a new generic memory thread.

Initializes a memory thread that can store arbitrary content. Generic threads are the
base type from which specialized thread types (markdown, JSON, context) derive."
cbparameters:
  parameters:
    - name: data
      typeName: CreateMemoryThreadRequest
      description: The thread creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the newly created memory thread
data:
  name: createThread
  category: memory
  link: createThread.md
---
# createThread

```typescript
client.memory.createThread(data: CreateMemoryThreadRequest): Promise<MemoryThread>
```

Creates a new generic memory thread.

Initializes a memory thread that can store arbitrary content. Generic threads are the
base type from which specialized thread types (markdown, JSON, context) derive.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateMemoryThreadRequest` | The thread creation payload |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the newly created memory thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.createThread(/* CreateMemoryThreadRequest */);
```
