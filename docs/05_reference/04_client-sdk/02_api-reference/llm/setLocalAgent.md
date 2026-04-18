---
name: setLocalAgent
cbbaseinfo:
  description: "Configures the LLM settings for a specific local agent.

Allows overriding the default LLM configuration on a per-agent basis, so different
agents can use different models or provider settings tailored to their tasks."
cbparameters:
  parameters:
    - name: data
      typeName: LLMLocalAgentConfig
      description: The agent-specific LLM configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the agent configuration has been saved
data:
  name: setLocalAgent
  category: llm
  link: setLocalAgent.md
---
# setLocalAgent

```typescript
client.llm.setLocalAgent(data: LLMLocalAgentConfig): Promise<unknown>
```

Configures the LLM settings for a specific local agent.

Allows overriding the default LLM configuration on a per-agent basis, so different
agents can use different models or provider settings tailored to their tasks.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `LLMLocalAgentConfig` | The agent-specific LLM configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the agent configuration has been saved

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.llm.setLocalAgent(/* LLMLocalAgentConfig */);
```
