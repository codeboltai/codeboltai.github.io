---
name: updateTask
cbbaseinfo:
  description: "Updates an existing planner task.

Modifies task properties such as status, assignment, priority, or description.
Use this to transition tasks through their lifecycle (e.g., pending to in-progress
to completed)."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to update
      isOptional: false
    - name: data
      typeName: UpdatePlannerTaskRequest
      description: The fields to update on the task
      isOptional: false
  returns:
    signatureTypeName: "Promise<PlannerTask>"
    description: A promise that resolves to the updated planner task
data:
  name: updateTask
  category: planner
  link: updateTask.md
---
# updateTask

```typescript
client.planner.updateTask(taskId: string, data: UpdatePlannerTaskRequest): Promise<PlannerTask>
```

Updates an existing planner task.

Modifies task properties such as status, assignment, priority, or description.
Use this to transition tasks through their lifecycle (e.g., pending to in-progress
to completed).

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to update |
| `data` | `UpdatePlannerTaskRequest` | The fields to update on the task |

## Returns

**`Promise<PlannerTask>`** — A promise that resolves to the updated planner task

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.updateTask('taskId', /* UpdatePlannerTaskRequest */);
```
