---
name: getHierarchy
cbbaseinfo:
  description: "Retrieves the complete hierarchy for a task.

Returns a hierarchical tree representation starting from the specified
task, including all descendants and their relationships. This provides
a complete view of the task's entire subtree for visualization or
comprehensive analysis."
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The unique identifier of the root task
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskHierarchy>"
    description: A promise that resolves to a TaskHierarchy object containing the full tree structure
data:
  name: getHierarchy
  category: tasks
  link: getHierarchy.md
---
# getHierarchy

```typescript
client.tasks.getHierarchy(taskId: string): Promise<TaskHierarchy>
```

Retrieves the complete hierarchy for a task.

Returns a hierarchical tree representation starting from the specified
task, including all descendants and their relationships. This provides
a complete view of the task's entire subtree for visualization or
comprehensive analysis.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The unique identifier of the root task |

## Returns

**`Promise<TaskHierarchy>`** — A promise that resolves to a TaskHierarchy object containing the full tree structure

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.tasks.getHierarchy('taskId');
```
