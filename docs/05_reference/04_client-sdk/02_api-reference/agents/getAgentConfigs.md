---
name: getAgentConfigs
cbbaseinfo:
  description: "Retrieves all agent configurations.

Returns configuration objects for every registered agent in the system."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AgentConfig[]>"
    description: A promise that resolves to an array of AgentConfig objects
data:
  name: getAgentConfigs
  category: agents
  link: getAgentConfigs.md
---
# getAgentConfigs

```typescript
client.agents.getAgentConfigs(): Promise<AgentConfig[]>
```

Retrieves all agent configurations.

Returns configuration objects for every registered agent in the system.

## Parameters

_None_

## Returns

**`Promise<AgentConfig[]>`** — A promise that resolves to an array of AgentConfig objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getAgentConfigs();
```
