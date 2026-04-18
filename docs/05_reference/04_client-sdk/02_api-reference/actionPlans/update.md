---
name: update
cbbaseinfo:
  description: "Updates an existing action plan.

Modifies the properties of an action plan such as its name, description,
or status."
cbparameters:
  parameters:
    - name: planId
      typeName: string
      description: The unique identifier of the action plan to update
      isOptional: false
    - name: data
      typeName: UpdateActionPlanRequest
      description: The fields to update on the action plan
      isOptional: false
  returns:
    signatureTypeName: "Promise<ActionPlan>"
    description: A promise that resolves to the updated ActionPlan
data:
  name: update
  category: actionPlans
  link: update.md
---
# update

```typescript
client.actionPlans.update(planId: string, data: UpdateActionPlanRequest): Promise<ActionPlan>
```

Updates an existing action plan.

Modifies the properties of an action plan such as its name, description,
or status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `planId` | `string` | The unique identifier of the action plan to update |
| `data` | `UpdateActionPlanRequest` | The fields to update on the action plan |

## Returns

**`Promise<ActionPlan>`** — A promise that resolves to the updated ActionPlan

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionPlans.update('planId', /* UpdateActionPlanRequest */);
```
