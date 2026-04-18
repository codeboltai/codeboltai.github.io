---
name: getTaskSummary
cbbaseinfo:
  description: Gets the summary (description) of a task.
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The task ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<string | undefined>"
    description: The task description
data:
  name: getTaskSummary
  category: task
  link: getTaskSummary.md
---
# getTaskSummary

```typescript
plugin.task.getTaskSummary(taskId: string): Promise<string | undefined>
```

Gets the summary (description) of a task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID |

## Returns

**`Promise<string | undefined>`** — The task description

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.getTaskSummary('taskId');
```
