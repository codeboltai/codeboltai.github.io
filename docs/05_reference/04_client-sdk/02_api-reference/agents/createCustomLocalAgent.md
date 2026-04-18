---
name: createCustomLocalAgent
cbbaseinfo:
  description: "Creates a custom local agent.

Defines a new agent from scratch on the local filesystem with custom
configuration, making it available for use in the runtime."
cbparameters:
  parameters:
    - name: data
      typeName: CreateCustomLocalAgentRequest
      description: The custom agent creation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the created Agent
data:
  name: createCustomLocalAgent
  category: agents
  link: createCustomLocalAgent.md
---
# createCustomLocalAgent

```typescript
client.agents.createCustomLocalAgent(data: CreateCustomLocalAgentRequest): Promise<Agent>
```

Creates a custom local agent.

Defines a new agent from scratch on the local filesystem with custom
configuration, making it available for use in the runtime.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateCustomLocalAgentRequest` | The custom agent creation configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the created Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.createCustomLocalAgent(/* CreateCustomLocalAgentRequest */);
```
