---
name: createJsonThread
cbbaseinfo:
  description: "Creates a new JSON-formatted memory thread.

Initializes a thread optimized for storing structured JSON data. JSON threads are
ideal for configuration, structured records, and data that needs programmatic access."
cbparameters:
  parameters:
    - name: data
      typeName: CreateJsonThreadRequest
      description: The JSON thread creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<MemoryThread>"
    description: A promise that resolves to the newly created JSON thread
data:
  name: createJsonThread
  category: memory
  link: createJsonThread.md
---
# createJsonThread

```typescript
client.memory.createJsonThread(data: CreateJsonThreadRequest): Promise<MemoryThread>
```

Creates a new JSON-formatted memory thread.

Initializes a thread optimized for storing structured JSON data. JSON threads are
ideal for configuration, structured records, and data that needs programmatic access.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateJsonThreadRequest` | The JSON thread creation payload |

## Returns

**`Promise<MemoryThread>`** — A promise that resolves to the newly created JSON thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memory.createJsonThread(/* CreateJsonThreadRequest */);
```
