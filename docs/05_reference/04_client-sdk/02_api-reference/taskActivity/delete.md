---
name: delete
cbbaseinfo:
  description: Delete a task activity
cbparameters:
  parameters:
    - name: taskId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: ""
data:
  name: delete
  category: taskActivity
  link: delete.md
---
# delete

```typescript
client.taskActivity.delete(taskId: string): Promise<void>
```

Delete a task activity

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `taskId` | `string` |  |

## Returns

**`Promise<void>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.delete('taskId');
```
