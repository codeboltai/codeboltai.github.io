---
name: get
cbbaseinfo:
  description: "Retrieves a specific action plan by its ID.

Returns the full action plan including its tasks, status, and metadata."
cbparameters:
  parameters:
    - name: planId
      typeName: string
      description: The unique identifier of the action plan
      isOptional: false
  returns:
    signatureTypeName: "Promise<ActionPlan>"
    description: A promise that resolves to the ActionPlan object
data:
  name: get
  category: actionPlans
  link: get.md
---
# get

```typescript
client.actionPlans.get(planId: string): Promise<ActionPlan>
```

Retrieves a specific action plan by its ID.

Returns the full action plan including its tasks, status, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `planId` | `string` | The unique identifier of the action plan |

## Returns

**`Promise<ActionPlan>`** — A promise that resolves to the ActionPlan object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionPlans.get('planId');
```
