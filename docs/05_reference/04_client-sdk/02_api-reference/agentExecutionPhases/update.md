---
name: update
cbbaseinfo:
  description: "Updates an existing execution phase.

Modifies the configuration of an execution phase. Use this to change
the phase description, ordering, or other properties."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The unique name of the phase to update
      isOptional: false
    - name: data
      typeName: UpdateAgentExecutionPhaseRequest
      description: The fields to update on the phase
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentExecutionPhase>"
    description: A promise that resolves to the updated AgentExecutionPhase
data:
  name: update
  category: agentExecutionPhases
  link: update.md
---
# update

```typescript
client.agentExecutionPhases.update(name: string, data: UpdateAgentExecutionPhaseRequest): Promise<AgentExecutionPhase>
```

Updates an existing execution phase.

Modifies the configuration of an execution phase. Use this to change
the phase description, ordering, or other properties.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The unique name of the phase to update |
| `data` | `UpdateAgentExecutionPhaseRequest` | The fields to update on the phase |

## Returns

**`Promise<AgentExecutionPhase>`** — A promise that resolves to the updated AgentExecutionPhase

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecutionPhases.update('name', /* UpdateAgentExecutionPhaseRequest */);
```
