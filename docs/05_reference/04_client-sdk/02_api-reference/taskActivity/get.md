---
name: get
cbbaseinfo:
  description: Get a specific task activity
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity>"
    description: ""
data:
  name: get
  category: taskActivity
  link: get.md
---
# get

```typescript
client.taskActivity.get(taskId: string): Promise<TaskActivity>
```

Get a specific task activity

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` |  |

## Returns

**`Promise<TaskActivity>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.get('taskId');
```
