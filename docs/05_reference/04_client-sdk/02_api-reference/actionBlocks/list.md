---
name: list
cbbaseinfo:
  description: "Retrieves all registered action blocks.

Returns the full list of action blocks available in the current workspace.
Use optional query parameters to paginate or filter the results."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<ActionBlock[]>"
    description: A promise that resolves to an array of ActionBlock objects
data:
  name: list
  category: actionBlocks
  link: list.md
---
# list

```typescript
client.actionBlocks.list(params?: Record<string, unknown>): Promise<ActionBlock[]>
```

Retrieves all registered action blocks.

Returns the full list of action blocks available in the current workspace.
Use optional query parameters to paginate or filter the results.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<ActionBlock[]>`** — A promise that resolves to an array of ActionBlock objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionBlocks.list();
```
