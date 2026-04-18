---
name: update
cbbaseinfo:
  description: Update a task activity
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateTaskActivityRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity>"
    description: ""
data:
  name: update
  category: taskActivity
  link: update.md
---
# update

```typescript
client.taskActivity.update(taskId: string, data: UpdateTaskActivityRequest): Promise<TaskActivity>
```

Update a task activity

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` |  |
| `data` | `UpdateTaskActivityRequest` |  |

## Returns

**`Promise<TaskActivity>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.update('taskId', /* UpdateTaskActivityRequest */);
```
