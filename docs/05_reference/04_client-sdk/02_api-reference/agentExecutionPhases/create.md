---
name: create
cbbaseinfo:
  description: "Creates a new execution phase.

Defines a new phase in the agent execution lifecycle. The phase will
be available for agents to transition through during their execution."
cbparameters:
  parameters:
    - name: data
      typeName: CreateAgentExecutionPhaseRequest
      description: The phase creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentExecutionPhase>"
    description: A promise that resolves to the newly created AgentExecutionPhase
data:
  name: create
  category: agentExecutionPhases
  link: create.md
---
# create

```typescript
client.agentExecutionPhases.create(data: CreateAgentExecutionPhaseRequest): Promise<AgentExecutionPhase>
```

Creates a new execution phase.

Defines a new phase in the agent execution lifecycle. The phase will
be available for agents to transition through during their execution.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateAgentExecutionPhaseRequest` | The phase creation payload |

## Returns

**`Promise<AgentExecutionPhase>`** — A promise that resolves to the newly created AgentExecutionPhase

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentExecutionPhases.create(/* CreateAgentExecutionPhaseRequest */);
```
