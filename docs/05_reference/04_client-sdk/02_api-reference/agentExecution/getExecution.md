---
name: getExecution
cbbaseinfo:
  description: "Retrieves the execution record for a specific thread.

Returns detailed execution information including timing, status,
agent configuration, and outcome for the given thread."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentExecutionRecord>"
    description: A promise that resolves to the AgentExecutionRecord for that thread
data:
  name: getExecution
  category: agentExecution
  link: getExecution.md
---
# getExecution

```typescript
client.agentExecution.getExecution(threadId: string): Promise<AgentExecutionRecord>
```

Retrieves the execution record for a specific thread.

Returns detailed execution information including timing, status,
agent configuration, and outcome for the given thread.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<AgentExecutionRecord>`** — A promise that resolves to the AgentExecutionRecord for that thread

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecution.getExecution('threadId');
```
