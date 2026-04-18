---
name: createTask
cbbaseinfo:
  description: "Creates a new task in the planner.

Adds a task with a title, description, and optional agent assignment. Tasks can have
dependencies, priorities, and labels to organize complex project work."
cbparameters:
  parameters:
    - name: data
      typeName: CreatePlannerTaskRequest
      description: The task creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<PlannerTask>"
    description: A promise that resolves to the newly created planner task
data:
  name: createTask
  category: planner
  link: createTask.md
---
# createTask

```typescript
client.planner.createTask(data: CreatePlannerTaskRequest): Promise<PlannerTask>
```

Creates a new task in the planner.

Adds a task with a title, description, and optional agent assignment. Tasks can have
dependencies, priorities, and labels to organize complex project work.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePlannerTaskRequest` | The task creation payload |

## Returns

**`Promise<PlannerTask>`** — A promise that resolves to the newly created planner task

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.planner.createTask(/* CreatePlannerTaskRequest */);
```
