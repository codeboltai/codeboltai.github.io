---
name: create
cbbaseinfo:
  description: Create a new task activity
cbparameters:
  parameters:
    - name: data
      typeName: CreateTaskActivityRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity>"
    description: ""
data:
  name: create
  category: taskActivity
  link: create.md
---
# create

```typescript
client.taskActivity.create(data: CreateTaskActivityRequest): Promise<TaskActivity>
```

Create a new task activity

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTaskActivityRequest` |  |

## Returns

**`Promise<TaskActivity>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.create(/* CreateTaskActivityRequest */);
```
