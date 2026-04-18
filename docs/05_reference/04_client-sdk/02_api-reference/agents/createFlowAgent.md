---
name: createFlowAgent
cbbaseinfo:
  description: "Creates a flow-based agent.

Defines a new agent that operates based on a visual flow definition,
where behavior is determined by connected nodes in a flow graph."
cbparameters:
  parameters:
    - name: data
      typeName: CreateFlowAgentRequest
      description: The flow agent creation configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the created Agent
data:
  name: createFlowAgent
  category: agents
  link: createFlowAgent.md
---
# createFlowAgent

```typescript
client.agents.createFlowAgent(data: CreateFlowAgentRequest): Promise<Agent>
```

Creates a flow-based agent.

Defines a new agent that operates based on a visual flow definition,
where behavior is determined by connected nodes in a flow graph.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateFlowAgentRequest` | The flow agent creation configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the created Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.createFlowAgent(/* CreateFlowAgentRequest */);
```
