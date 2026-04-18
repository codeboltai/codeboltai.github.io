---
name: getAll
cbbaseinfo:
  description: "Retrieves all defined agent execution phases.

Returns the complete list of execution phases that have been configured
in the system."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentExecutionPhase[]>"
    description: A promise that resolves to an array of AgentExecutionPhase objects
data:
  name: getAll
  category: agentExecutionPhases
  link: getAll.md
---
# getAll

```typescript
client.agentExecutionPhases.getAll(params?: Record<string, unknown>): Promise<AgentExecutionPhase[]>
```

Retrieves all defined agent execution phases.

Returns the complete list of execution phases that have been configured
in the system.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<AgentExecutionPhase[]>`** — A promise that resolves to an array of AgentExecutionPhase objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecutionPhases.getAll();
```
