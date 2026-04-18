---
name: create
cbbaseinfo:
  description: "Creates a new task in the system.

Creates a new task with the provided configuration. The task can be
a standalone unit of work or can later have child tasks added to create
a task hierarchy. Returns the created task with its generated ID."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTaskRequest
      description: The task creation request containing task properties
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the newly created Task object
data:
  name: create
  category: tasksApi
  link: create.md
---
# create

```typescript
plugin.tasksApi.create(data: CreateTaskRequest): Promise<Task>
```

Creates a new task in the system.

Creates a new task with the provided configuration. The task can be
a standalone unit of work or can later have child tasks added to create
a task hierarchy. Returns the created task with its generated ID.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTaskRequest` | The task creation request containing task properties |

## Returns

**`Promise<Task>`** — A promise that resolves to the newly created Task object

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.tasksApi.create(/* CreateTaskRequest */);
```
