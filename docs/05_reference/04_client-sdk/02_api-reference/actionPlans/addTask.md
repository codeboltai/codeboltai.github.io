---
name: addTask
cbbaseinfo:
  description: "Adds a task to an existing action plan.

Appends a new task to the plan's task list. Tasks represent individual
steps that need to be completed as part of the overall plan."
cbparameters:
  parameters:
    - name: planId
      typeName: string
      description: The unique identifier of the action plan
      isOptional: false
    - name: data
      typeName: AddActionPlanTaskRequest
      description: The task definition to add to the plan
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the task has been added
data:
  name: addTask
  category: actionPlans
  link: addTask.md
---
# addTask

```typescript
client.actionPlans.addTask(planId: string, data: AddActionPlanTaskRequest): Promise<unknown>
```

Adds a task to an existing action plan.

Appends a new task to the plan's task list. Tasks represent individual
steps that need to be completed as part of the overall plan.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `planId` | `string` | The unique identifier of the action plan |
| `data` | `AddActionPlanTaskRequest` | The task definition to add to the plan |

## Returns

**`Promise<unknown>`** — A promise that resolves when the task has been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionPlans.addTask('planId', /* AddActionPlanTaskRequest */);
```
