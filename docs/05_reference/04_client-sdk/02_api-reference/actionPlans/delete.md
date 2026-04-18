---
name: delete
cbbaseinfo:
  description: "Deletes an action plan.

Permanently removes the specified action plan and all its associated tasks."
cbparameters:
  parameters:
    - name: planId
      typeName: string
      description: The unique identifier of the action plan to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the plan has been deleted
data:
  name: delete
  category: actionPlans
  link: delete.md
---
# delete

```typescript
client.actionPlans.delete(planId: string): Promise<unknown>
```

Deletes an action plan.

Permanently removes the specified action plan and all its associated tasks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `planId` | `string` | The unique identifier of the action plan to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the plan has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionPlans.delete('planId');
```
