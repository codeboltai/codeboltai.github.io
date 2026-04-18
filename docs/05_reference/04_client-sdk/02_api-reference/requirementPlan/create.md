---
name: create
cbbaseinfo:
  description: "Creates a new requirement plan.

Registers a new requirement plan with the system using the provided
specification. The plan can include project goals, feature lists,
acceptance criteria, and other requirement documentation."
cbparameters:
  parameters:
    - name: data
      typeName: CreateRequirementPlanRequest
      description: Request containing the plan details
      isOptional: false
  returns:
    signatureTypeName: "Promise<RequirementPlan>"
    description: A promise that resolves to the created RequirementPlan object
data:
  name: create
  category: requirementPlan
  link: create.md
---
# create

```typescript
client.requirementPlan.create(data: CreateRequirementPlanRequest): Promise<RequirementPlan>
```

Creates a new requirement plan.

Registers a new requirement plan with the system using the provided
specification. The plan can include project goals, feature lists,
acceptance criteria, and other requirement documentation.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateRequirementPlanRequest` | Request containing the plan details |

## Returns

**`Promise<RequirementPlan>`** — A promise that resolves to the created RequirementPlan object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.requirementPlan.create(/* CreateRequirementPlanRequest */);
```
