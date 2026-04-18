---
name: assignAgentToTask
cbbaseinfo:
  description: Assigns an agent to a task.
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The task ID
      isOptional: false
    - name: agentId
      typeName: string
      description: The agent ID to assign
      isOptional: false
  returns:
    signatureTypeName: "Promise<object>"
    description: ""
data:
  name: assignAgentToTask
  category: task
  link: assignAgentToTask.md
---
# assignAgentToTask

```typescript
plugin.task.assignAgentToTask(taskId: string, agentId: string): Promise<object>
```

Assigns an agent to a task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID |
| `agentId` | `string` | The agent ID to assign |

## Returns

**`Promise<object>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.assignAgentToTask('taskId', 'agentId');
```
