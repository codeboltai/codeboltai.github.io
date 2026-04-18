---
name: getByThread
cbbaseinfo:
  description: "Retrieves agent instances associated with a specific thread.

Returns all debug instances that were spawned within or are linked to
the given thread ID."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread to query
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentDebugInstance[]>"
    description: A promise that resolves to an array of AgentDebugInstance objects for that thread
data:
  name: getByThread
  category: agentDebugApi
  link: getByThread.md
---
# getByThread

```typescript
client.agentDebugApi.getByThread(threadId: string): Promise<AgentDebugInstance[]>
```

Retrieves agent instances associated with a specific thread.

Returns all debug instances that were spawned within or are linked to
the given thread ID.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread to query |

## Returns

**`Promise<AgentDebugInstance[]>`** — A promise that resolves to an array of AgentDebugInstance objects for that thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getByThread('threadId');
```
