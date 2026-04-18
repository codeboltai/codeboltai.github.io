---
name: getRecent
cbbaseinfo:
  description: Get recent activities
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TaskActivity[]>"
    description: ""
data:
  name: getRecent
  category: taskActivity
  link: getRecent.md
---
# getRecent

```typescript
client.taskActivity.getRecent(): Promise<TaskActivity[]>
```

Get recent activities

## Parameters

_None_

## Returns

**`Promise<TaskActivity[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.getRecent();
```
