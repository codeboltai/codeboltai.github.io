---
name: startAgent
cbbaseinfo:
  description: "Starts a new agent instance with the specified configuration.

Initializes and launches an agent process in the CodeBolt runtime.
The agent will be configured based on the provided request parameters
including its type, capabilities, and execution context."
cbparameters:
  parameters:
    - name: data
      typeName: StartAgentRequest
      description: The agent start configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the started Agent instance with its runtime details
data:
  name: startAgent
  category: agents
  link: startAgent.md
---
# startAgent

```typescript
client.agents.startAgent(data: StartAgentRequest): Promise<Agent>
```

Starts a new agent instance with the specified configuration.

Initializes and launches an agent process in the CodeBolt runtime.
The agent will be configured based on the provided request parameters
including its type, capabilities, and execution context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StartAgentRequest` | The agent start configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the started Agent instance with its runtime details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.startAgent(/* StartAgentRequest */);
```
