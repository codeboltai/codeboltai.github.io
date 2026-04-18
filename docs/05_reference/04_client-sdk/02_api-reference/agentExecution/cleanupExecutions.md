---
name: cleanupExecutions
cbbaseinfo:
  description: "Cleans up old execution records.

Removes execution records older than the specified threshold to free
up storage and keep the system performant."
cbparameters:
  parameters:
    - name: params
      typeName: CleanupExecutionsParams
      description: Query parameters controlling the cleanup
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when cleanup is complete
data:
  name: cleanupExecutions
  category: agentExecution
  link: cleanupExecutions.md
---
# cleanupExecutions

```typescript
client.agentExecution.cleanupExecutions(params?: CleanupExecutionsParams): Promise<unknown>
```

Cleans up old execution records.

Removes execution records older than the specified threshold to free
up storage and keep the system performant.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CleanupExecutionsParams` _(optional)_ | Query parameters controlling the cleanup |

## Returns

**`Promise<unknown>`** — A promise that resolves when cleanup is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecution.cleanupExecutions();
```
