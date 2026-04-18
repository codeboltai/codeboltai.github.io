---
name: stopAgent
cbbaseinfo:
  description: "Stops a running agent.

Sends a stop signal to the specified agent, causing it to terminate
gracefully."
cbparameters:
  parameters:
    - name: data
      typeName: StopAgentRequest
      description: The stop request configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the agent has been stopped
data:
  name: stopAgent
  category: agents
  link: stopAgent.md
---
# stopAgent

```typescript
client.agents.stopAgent(data: StopAgentRequest): Promise<void>
```

Stops a running agent.

Sends a stop signal to the specified agent, causing it to terminate
gracefully.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `StopAgentRequest` | The stop request configuration |

## Returns

**`Promise<void>`** — A promise that resolves when the agent has been stopped

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.stopAgent(/* StopAgentRequest */);
```
