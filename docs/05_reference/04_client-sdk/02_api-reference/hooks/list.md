---
name: list
cbbaseinfo:
  description: "Lists all registered hooks.

Returns every hook in the system, including both enabled and disabled
hooks. Use optional parameters to filter or paginate the results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<Hook[]>"
    description: A promise that resolves to an array of  objects
data:
  name: list
  category: hooks
  link: list.md
---
# list

```typescript
client.hooks.list(params?: Record<string, unknown>): Promise<Hook[]>
```

Lists all registered hooks.

Returns every hook in the system, including both enabled and disabled
hooks. Use optional parameters to filter or paginate the results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<Hook[]>`** — A promise that resolves to an array of  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.hooks.list();
```
