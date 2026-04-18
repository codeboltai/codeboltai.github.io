---
name: getByType
cbbaseinfo:
  description: Get activities by type
cbparameters:
  parameters:
    - name: type
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<TaskActivity[]>"
    description: ""
data:
  name: getByType
  category: taskActivity
  link: getByType.md
---
# getByType

```typescript
client.taskActivity.getByType(type: string): Promise<TaskActivity[]>
```

Get activities by type

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `type` | `string` |  |

## Returns

**`Promise<TaskActivity[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.getByType('type');
```
