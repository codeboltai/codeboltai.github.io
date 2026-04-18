---
name: getByThread
cbbaseinfo:
  description: Get activities by thread ID
cbparameters:
  parameters:
    - name: threadId
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity[]>"
    description: ""
data:
  name: getByThread
  category: taskActivity
  link: getByThread.md
---
# getByThread

```typescript
client.taskActivity.getByThread(threadId: string): Promise<TaskActivity[]>
```

Get activities by thread ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `threadId` | `string` |  |

## Returns

**`Promise<TaskActivity[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.getByThread('threadId');
```
