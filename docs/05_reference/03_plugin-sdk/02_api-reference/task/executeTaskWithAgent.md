---
name: executeTaskWithAgent
cbbaseinfo:
  description: "Executes a task with a specific agent.
Assigns the agent and then starts the task."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The task ID
      isOptional: false
    - name: agentId
      typeName: string
      description: The agent ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: executeTaskWithAgent
  category: task
  link: executeTaskWithAgent.md
---
# executeTaskWithAgent

```typescript
plugin.task.executeTaskWithAgent(taskId: string, agentId: string): Promise<object>
```

Executes a task with a specific agent.
Assigns the agent and then starts the task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID |
| `agentId` | `string` | The agent ID |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.executeTaskWithAgent('taskId', 'agentId');
```
