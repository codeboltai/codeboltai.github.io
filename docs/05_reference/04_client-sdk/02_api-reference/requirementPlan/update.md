---
name: update
cbbaseinfo:
  description: "Updates an existing requirement plan.

Modifies the content, status, or structure of a requirement plan.
Use this to add new requirements, update priorities, change status,
or make other modifications as the project evolves."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateRequirementPlanRequest
      description: Request containing the plan updates
      isOptional: false
  returns:
    signatureTypeName: "Promise<RequirementPlan>"
    description: A promise that resolves to the updated RequirementPlan object
data:
  name: update
  category: requirementPlan
  link: update.md
---
# update

```typescript
client.requirementPlan.update(data: UpdateRequirementPlanRequest): Promise<RequirementPlan>
```

Updates an existing requirement plan.

Modifies the content, status, or structure of a requirement plan.
Use this to add new requirements, update priorities, change status,
or make other modifications as the project evolves.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateRequirementPlanRequest` | Request containing the plan updates |

## Returns

**`Promise<RequirementPlan>`** — A promise that resolves to the updated RequirementPlan object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.requirementPlan.update(/* UpdateRequirementPlanRequest */);
```
