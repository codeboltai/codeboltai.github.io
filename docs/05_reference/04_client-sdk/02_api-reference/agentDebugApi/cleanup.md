---
name: cleanup
cbbaseinfo:
  description: "Cleans up old agent debug data.

Removes debug records that are older than the specified threshold.
Use this to free up storage and keep the debug system performant."
cbparameters:
  parameters:
    - name: params
      typeName: CleanupAgentDebugParams
      description: Query parameters controlling the cleanup
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when cleanup is complete
data:
  name: cleanup
  category: agentDebugApi
  link: cleanup.md
---
# cleanup

```typescript
client.agentDebugApi.cleanup(params?: CleanupAgentDebugParams): Promise<unknown>
```

Cleans up old agent debug data.

Removes debug records that are older than the specified threshold.
Use this to free up storage and keep the debug system performant.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CleanupAgentDebugParams` _(optional)_ | Query parameters controlling the cleanup |

## Returns

**`Promise<unknown>`** — A promise that resolves when cleanup is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.cleanup();
```
