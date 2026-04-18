---
name: get
cbbaseinfo:
  description: "Retrieves a specific task by its unique identifier.

Returns the complete task object including all properties, metadata,
and relationships. Use this to get full task details after a search or
when you need the complete task representation."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the task to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<Task>"
    description: A promise that resolves to the Task object with the specified ID
data:
  name: get
  category: tasks
  link: get.md
---
# get

```typescript
client.tasks.get(taskId: string): Promise<Task>
```

Retrieves a specific task by its unique identifier.

Returns the complete task object including all properties, metadata,
and relationships. Use this to get full task details after a search or
when you need the complete task representation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the task to retrieve |

## Returns

**`Promise<Task>`** — A promise that resolves to the Task object with the specified ID

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.get('taskId');
```
