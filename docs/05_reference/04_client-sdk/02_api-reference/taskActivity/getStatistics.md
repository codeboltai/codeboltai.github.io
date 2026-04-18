---
name: getStatistics
cbbaseinfo:
  description: Get activity statistics overview
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<TaskActivityStatistics>"
    description: ""
data:
  name: getStatistics
  category: taskActivity
  link: getStatistics.md
---
# getStatistics

```typescript
client.taskActivity.getStatistics(): Promise<TaskActivityStatistics>
```

Get activity statistics overview

## Parameters

_None_

## Returns

**`Promise<TaskActivityStatistics>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.getStatistics();
```
