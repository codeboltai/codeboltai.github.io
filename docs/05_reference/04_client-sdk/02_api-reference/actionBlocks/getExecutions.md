---
name: getExecutions
cbbaseinfo:
  description: "Retrieves execution records for action blocks.

Returns a list of past and current executions, useful for monitoring
which action blocks have run and their outcomes."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<ActionBlockExecution[]>"
    description: A promise that resolves to an array of ActionBlockExecution records
data:
  name: getExecutions
  category: actionBlocks
  link: getExecutions.md
---
# getExecutions

```typescript
client.actionBlocks.getExecutions(params?: Record<string, unknown>): Promise<ActionBlockExecution[]>
```

Retrieves execution records for action blocks.

Returns a list of past and current executions, useful for monitoring
which action blocks have run and their outcomes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<ActionBlockExecution[]>`** — A promise that resolves to an array of ActionBlockExecution records

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.actionBlocks.getExecutions();
```
