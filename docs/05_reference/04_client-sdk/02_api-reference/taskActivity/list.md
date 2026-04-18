---
name: list
cbbaseinfo:
  description: List all task activities
cbparameters:
  parameters:
    - name: params
      typeName: TaskActivityListParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<TaskActivity[]>"
    description: ""
data:
  name: list
  category: taskActivity
  link: list.md
---
# list

```typescript
client.taskActivity.list(params?: TaskActivityListParams): Promise<TaskActivity[]>
```

List all task activities

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `TaskActivityListParams` _(optional)_ |  |

## Returns

**`Promise<TaskActivity[]>`**

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.taskActivity.list();
```
