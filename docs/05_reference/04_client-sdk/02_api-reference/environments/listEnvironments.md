---
name: listEnvironments
cbbaseinfo:
  description: "Lists all environments.

Returns every environment regardless of state. Use optional parameters
to filter or paginate the results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<Environment[]>"
    description: A promise that resolves to an array of  objects
data:
  name: listEnvironments
  category: environments
  link: listEnvironments.md
---
# listEnvironments

```typescript
client.environments.listEnvironments(params?: Record<string, unknown>): Promise<Environment[]>
```

Lists all environments.

Returns every environment regardless of state. Use optional parameters
to filter or paginate the results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<Environment[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.environments.listEnvironments();
```
