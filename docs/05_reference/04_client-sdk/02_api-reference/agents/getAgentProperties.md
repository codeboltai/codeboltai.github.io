---
name: getAgentProperties
cbbaseinfo:
  description: "Retrieves the global agent properties.

Returns system-wide properties that apply to all agents, such as
default timeouts, resource limits, and shared configuration."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<AgentProperties>"
    description: A promise that resolves to the AgentProperties object
data:
  name: getAgentProperties
  category: agents
  link: getAgentProperties.md
---
# getAgentProperties

```typescript
client.agents.getAgentProperties(): Promise<AgentProperties>
```

Retrieves the global agent properties.

Returns system-wide properties that apply to all agents, such as
default timeouts, resource limits, and shared configuration.

## Parameters

_None_

## Returns

**`Promise<AgentProperties>`** — A promise that resolves to the AgentProperties object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.getAgentProperties();
```
