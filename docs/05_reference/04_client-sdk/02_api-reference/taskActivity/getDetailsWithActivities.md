---
name: getDetailsWithActivities
cbbaseinfo:
  description: Get task details with activities
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskDetailsWithActivities>"
    description: ""
data:
  name: getDetailsWithActivities
  category: taskActivity
  link: getDetailsWithActivities.md
---
# getDetailsWithActivities

```typescript
client.taskActivity.getDetailsWithActivities(taskId: string): Promise<TaskDetailsWithActivities>
```

Get task details with activities

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` |  |

## Returns

**`Promise<TaskDetailsWithActivities>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.getDetailsWithActivities('taskId');
```
