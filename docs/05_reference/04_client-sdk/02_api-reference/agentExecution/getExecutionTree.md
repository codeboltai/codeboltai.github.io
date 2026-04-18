---
name: getExecutionTree
cbbaseinfo:
  description: "Retrieves the execution tree for a specific thread.

Returns a hierarchical view of the execution, showing parent-child
relationships between agents in multi-agent workflows. Useful for
visualizing how agents spawned sub-agents during execution."
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: The unique identifier of the thread
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentExecutionTree>"
    description: A promise that resolves to the AgentExecutionTree structure
data:
  name: getExecutionTree
  category: agentExecution
  link: getExecutionTree.md
---
# getExecutionTree

```typescript
client.agentExecution.getExecutionTree(threadId: string): Promise<AgentExecutionTree>
```

Retrieves the execution tree for a specific thread.

Returns a hierarchical view of the execution, showing parent-child
relationships between agents in multi-agent workflows. Useful for
visualizing how agents spawned sub-agents during execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` | The unique identifier of the thread |

## Returns

**`Promise<AgentExecutionTree>`** — A promise that resolves to the AgentExecutionTree structure

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecution.getExecutionTree('threadId');
```
