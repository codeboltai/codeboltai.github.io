---
name: getAll
cbbaseinfo:
  description: "Retrieves all deliberations.

Returns every deliberation in the system, optionally filtered by
the provided query parameters."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query or filter parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<Deliberation[]>"
    description: A promise that resolves to an array of Deliberation objects
data:
  name: getAll
  category: agentDeliberation
  link: getAll.md
---
# getAll

```typescript
client.agentDeliberation.getAll(params?: Record<string, unknown>): Promise<Deliberation[]>
```

Retrieves all deliberations.

Returns every deliberation in the system, optionally filtered by
the provided query parameters.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query or filter parameters |

## Returns

**`Promise<Deliberation[]>`** — A promise that resolves to an array of Deliberation objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.getAll();
```
