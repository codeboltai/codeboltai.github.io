---
name: create
cbbaseinfo:
  description: "Creates a new action plan.

Defines a new structured workflow plan that can be populated with tasks
and executed by agents."
cbparameters:
  parameters:
    - name: data
      typeName: CreateActionPlanRequest
      description: The creation payload for the new action plan
      isOptional: false
  returns:
    signatureTypeName: "Promise<ActionPlan>"
    description: A promise that resolves to the newly created ActionPlan
data:
  name: create
  category: actionPlans
  link: create.md
---
# create

```typescript
client.actionPlans.create(data: CreateActionPlanRequest): Promise<ActionPlan>
```

Creates a new action plan.

Defines a new structured workflow plan that can be populated with tasks
and executed by agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateActionPlanRequest` | The creation payload for the new action plan |

## Returns

**`Promise<ActionPlan>`** — A promise that resolves to the newly created ActionPlan

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionPlans.create(/* CreateActionPlanRequest */);
```
