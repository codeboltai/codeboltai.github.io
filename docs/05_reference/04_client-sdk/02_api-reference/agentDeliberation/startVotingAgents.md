---
name: startVotingAgents
cbbaseinfo:
  description: "Starts voting agents for a deliberation.

Launches the voting agents so they can evaluate the submitted responses
and cast their votes."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
    - name: data
      typeName: StartVotingAgentsRequest
      description: Optional configuration for the voting agent startup
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the voting agents have been started
data:
  name: startVotingAgents
  category: agentDeliberation
  link: startVotingAgents.md
---
# startVotingAgents

```typescript
client.agentDeliberation.startVotingAgents(id: string, data?: StartVotingAgentsRequest): Promise<unknown>
```

Starts voting agents for a deliberation.

Launches the voting agents so they can evaluate the submitted responses
and cast their votes.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `StartVotingAgentsRequest` _(optional)_ | Optional configuration for the voting agent startup |

## Returns

**`Promise<unknown>`** — A promise that resolves when the voting agents have been started

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.startVotingAgents('id');
```
