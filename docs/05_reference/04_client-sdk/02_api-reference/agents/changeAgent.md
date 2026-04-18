---
name: changeAgent
cbbaseinfo:
  description: "Changes the currently active agent.

Switches the runtime to use a different agent, stopping the current
one if necessary. Use this when transitioning between different agent
types during a workflow."
cbparameters:
  parameters:
    - name: data
      typeName: ChangeAgentRequest
      description: The agent change configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the newly active Agent instance
data:
  name: changeAgent
  category: agents
  link: changeAgent.md
---
# changeAgent

```typescript
client.agents.changeAgent(data: ChangeAgentRequest): Promise<Agent>
```

Changes the currently active agent.

Switches the runtime to use a different agent, stopping the current
one if necessary. Use this when transitioning between different agent
types during a workflow.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ChangeAgentRequest` | The agent change configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the newly active Agent instance

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.changeAgent(/* ChangeAgentRequest */);
```
