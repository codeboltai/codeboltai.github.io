---
name: getByStatus
cbbaseinfo:
  description: Get activities by status
cbparameters:
  parameters:
    - name: status
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity[]>"
    description: ""
data:
  name: getByStatus
  category: taskActivity
  link: getByStatus.md
---
# getByStatus

```typescript
client.taskActivity.getByStatus(status: string): Promise<TaskActivity[]>
```

Get activities by status

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `status` | `string` |  |

## Returns

**`Promise<TaskActivity[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.getByStatus('status');
```
