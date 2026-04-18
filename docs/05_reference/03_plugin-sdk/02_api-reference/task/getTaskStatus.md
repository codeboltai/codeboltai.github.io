---
name: getTaskStatus
cbbaseinfo:
  description: Gets the status of a task.
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: The task ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<string | undefined>"
    description: The task status
data:
  name: getTaskStatus
  category: task
  link: getTaskStatus.md
---
# getTaskStatus

```typescript
plugin.task.getTaskStatus(taskId: string): Promise<string | undefined>
```

Gets the status of a task.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` | The task ID |

## Returns

**`Promise<string | undefined>`** — The task status

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.task.getTaskStatus('taskId');
```
