---
name: getAgentTasks
cbbaseinfo:
  description: "Retrieves all tasks assigned to a specific agent.

Returns the task list for a given agent, allowing you to see what work is queued,
in progress, or completed for that agent."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent whose tasks to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<PlannerTask[]>"
    description: A promise that resolves to an array of tasks assigned to the agent
data:
  name: getAgentTasks
  category: planner
  link: getAgentTasks.md
---
# getAgentTasks

```typescript
client.planner.getAgentTasks(agentId: string): Promise<PlannerTask[]>
```

Retrieves all tasks assigned to a specific agent.

Returns the task list for a given agent, allowing you to see what work is queued,
in progress, or completed for that agent.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent whose tasks to retrieve |

## Returns

**`Promise<PlannerTask[]>`** — A promise that resolves to an array of tasks assigned to the agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.getAgentTasks('agentId');
```
