---
name: createRemoteAgent
cbbaseinfo:
  description: "Creates a remote agent.

Registers a new agent that runs on a remote server, allowing
CodeBolt to delegate tasks to external agent services."
cbparameters:
  parameters:
    - name: data
      typeName: CreateRemoteAgentRequest
      description: The remote agent creation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the created Agent
data:
  name: createRemoteAgent
  category: agents
  link: createRemoteAgent.md
---
# createRemoteAgent

```typescript
client.agents.createRemoteAgent(data: CreateRemoteAgentRequest): Promise<Agent>
```

Creates a remote agent.

Registers a new agent that runs on a remote server, allowing
CodeBolt to delegate tasks to external agent services.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateRemoteAgentRequest` | The remote agent creation configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the created Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.createRemoteAgent(/* CreateRemoteAgentRequest */);
```
