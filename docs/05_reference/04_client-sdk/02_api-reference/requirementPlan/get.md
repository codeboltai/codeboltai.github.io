---
name: get
cbbaseinfo:
  description: "Retrieves a requirement plan based on query parameters.

Returns the plan matching the specified criteria, typically by project
ID or plan name. If multiple plans match, the most relevant one is returned."
cbparameters:
  parameters:
    - name: params
      typeName: GetRequirementPlanParams
      description: Query parameters to identify the plan
      isOptional: true
  returns:
    signatureTypeName: "Promise<RequirementPlan>"
    description: A promise that resolves to the RequirementPlan object
data:
  name: get
  category: requirementPlan
  link: get.md
---
# get

```typescript
client.requirementPlan.get(params?: GetRequirementPlanParams): Promise<RequirementPlan>
```

Retrieves a requirement plan based on query parameters.

Returns the plan matching the specified criteria, typically by project
ID or plan name. If multiple plans match, the most relevant one is returned.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `GetRequirementPlanParams` _(optional)_ | Query parameters to identify the plan |

## Returns

**`Promise<RequirementPlan>`** — A promise that resolves to the RequirementPlan object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.requirementPlan.get();
```
