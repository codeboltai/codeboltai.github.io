---
name: startAgents
cbbaseinfo:
  description: "Starts agents for a deliberation.

Launches the participant agents so they can begin generating responses
for the deliberation topic."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the deliberation
      isOptional: false
    - name: data
      typeName: StartDeliberationAgentsRequest
      description: Optional configuration for the agent startup
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the agents have been started
data:
  name: startAgents
  category: agentDeliberation
  link: startAgents.md
---
# startAgents

```typescript
client.agentDeliberation.startAgents(id: string, data?: StartDeliberationAgentsRequest): Promise<unknown>
```

Starts agents for a deliberation.

Launches the participant agents so they can begin generating responses
for the deliberation topic.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the deliberation |
| `data` | `StartDeliberationAgentsRequest` _(optional)_ | Optional configuration for the agent startup |

## Returns

**`Promise<unknown>`** — A promise that resolves when the agents have been started

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDeliberation.startAgents('id');
```
