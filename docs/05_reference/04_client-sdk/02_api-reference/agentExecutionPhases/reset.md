---
name: reset
cbbaseinfo:
  description: "Resets all agent execution phases to their default configuration.

Restores the built-in phase definitions, removing any custom phases
and reverting modified ones to their original state."
cbparameters:
  parameters:
    - name: data
      typeName: ResetAgentExecutionPhasesRequest
      description: Optional configuration for the reset operation
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the reset is complete
data:
  name: reset
  category: agentExecutionPhases
  link: reset.md
---
# reset

```typescript
client.agentExecutionPhases.reset(data?: ResetAgentExecutionPhasesRequest): Promise<unknown>
```

Resets all agent execution phases to their default configuration.

Restores the built-in phase definitions, removing any custom phases
and reverting modified ones to their original state.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ResetAgentExecutionPhasesRequest` _(optional)_ | Optional configuration for the reset operation |

## Returns

**`Promise<unknown>`** — A promise that resolves when the reset is complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecutionPhases.reset();
```
