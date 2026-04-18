---
name: createTaskGroup
cbbaseinfo:
  description: "Creates a new task group for organizing conversation threads.

Defines a new group that threads can be assigned to for organizational purposes."
cbparameters:
  parameters:
    - name: data
      typeName: CreateTaskGroupRequest
      description: The task group creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskGroup>"
    description: A promise that resolves to the newly created task group
data:
  name: createTaskGroup
  category: projects
  link: createTaskGroup.md
---
# createTaskGroup

```typescript
client.projects.createTaskGroup(data: CreateTaskGroupRequest): Promise<TaskGroup>
```

Creates a new task group for organizing conversation threads.

Defines a new group that threads can be assigned to for organizational purposes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTaskGroupRequest` | The task group creation payload |

## Returns

**`Promise<TaskGroup>`** — A promise that resolves to the newly created task group

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.projects.createTaskGroup(/* CreateTaskGroupRequest */);
```
