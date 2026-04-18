---
name: getAgentConfig
cbbaseinfo:
  description: "Retrieves the configuration for a specific agent by name.

Returns the full configuration object for the named agent, including
its capabilities, settings, and metadata."
cbparameters:
  parameters:
    - name: agentName
      typeName: string
      description: The name of the agent to look up
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentConfig>"
    description: A promise that resolves to the AgentConfig for the specified agent
data:
  name: getAgentConfig
  category: agents
  link: getAgentConfig.md
---
# getAgentConfig

```typescript
client.agents.getAgentConfig(agentName: string): Promise<AgentConfig>
```

Retrieves the configuration for a specific agent by name.

Returns the full configuration object for the named agent, including
its capabilities, settings, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentName` | `string` | The name of the agent to look up |

## Returns

**`Promise<AgentConfig>`** — A promise that resolves to the AgentConfig for the specified agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getAgentConfig('agentName');
```
