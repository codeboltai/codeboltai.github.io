---
name: createPrestart
cbbaseinfo:
  description: Create a prestart activity
cbparameters:
  parameters:
    - name: data
      typeName: CreatePrestartActivityRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity>"
    description: ""
data:
  name: createPrestart
  category: taskActivity
  link: createPrestart.md
---
# createPrestart

```typescript
client.taskActivity.createPrestart(data: CreatePrestartActivityRequest): Promise<TaskActivity>
```

Create a prestart activity

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreatePrestartActivityRequest` |  |

## Returns

**`Promise<TaskActivity>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.createPrestart(/* CreatePrestartActivityRequest */);
```
