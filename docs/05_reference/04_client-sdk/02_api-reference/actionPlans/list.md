---
name: list
cbbaseinfo:
  description: "Retrieves all action plans.

Returns every action plan in the system. Use optional query parameters
to paginate or filter the results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<ActionPlan[]>"
    description: A promise that resolves to an array of ActionPlan objects
data:
  name: list
  category: actionPlans
  link: list.md
---
# list

```typescript
client.actionPlans.list(params?: Record<string, unknown>): Promise<ActionPlan[]>
```

Retrieves all action plans.

Returns every action plan in the system. Use optional query parameters
to paginate or filter the results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<ActionPlan[]>`** — A promise that resolves to an array of ActionPlan objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionPlans.list();
```
