---
name: getLocalAgent
cbbaseinfo:
  description: "Retrieves the LLM configuration for a specific local agent.

Returns the provider and model settings that have been configured for the given agent,
or the default configuration if no agent-specific override exists."
cbparameters:
  parameters:
    - name: agentName
      typeName: string
      description: The name of the agent whose LLM configuration to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<LLMLocalAgentConfig>"
    description: "A promise that resolves to the agent's LLM configuration"
data:
  name: getLocalAgent
  category: llm
  link: getLocalAgent.md
---
# getLocalAgent

```typescript
client.llm.getLocalAgent(agentName: string): Promise<LLMLocalAgentConfig>
```

Retrieves the LLM configuration for a specific local agent.

Returns the provider and model settings that have been configured for the given agent,
or the default configuration if no agent-specific override exists.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentName` | `string` | The name of the agent whose LLM configuration to retrieve |

## Returns

**`Promise<LLMLocalAgentConfig>`** — A promise that resolves to the agent's LLM configuration

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.getLocalAgent('agentName');
```
