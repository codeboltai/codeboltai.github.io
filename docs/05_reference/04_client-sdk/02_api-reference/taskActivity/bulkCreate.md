---
name: bulkCreate
cbbaseinfo:
  description: Bulk create activities
cbparameters:
  parameters:
    - name: data
      typeName: CreateTaskActivityRequest[]
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity[]>"
    description: ""
data:
  name: bulkCreate
  category: taskActivity
  link: bulkCreate.md
---
# bulkCreate

```typescript
client.taskActivity.bulkCreate(data: CreateTaskActivityRequest[]): Promise<TaskActivity[]>
```

Bulk create activities

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateTaskActivityRequest[]` |  |

## Returns

**`Promise<TaskActivity[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.bulkCreate(/* CreateTaskActivityRequest[] */);
```
