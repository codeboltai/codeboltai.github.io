---
name: updateAgentProperties
cbbaseinfo:
  description: "Updates the global agent properties.

Modifies system-wide agent settings that apply to all agent instances."
cbparameters:
  parameters:
    - name: data
      typeName: AgentProperties
      description: The updated agent properties
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentProperties>"
    description: A promise that resolves to the updated AgentProperties
data:
  name: updateAgentProperties
  category: agents
  link: updateAgentProperties.md
---
# updateAgentProperties

```typescript
client.agents.updateAgentProperties(data: AgentProperties): Promise<AgentProperties>
```

Updates the global agent properties.

Modifies system-wide agent settings that apply to all agent instances.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AgentProperties` | The updated agent properties |

## Returns

**`Promise<AgentProperties>`** — A promise that resolves to the updated AgentProperties

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.updateAgentProperties(/* AgentProperties */);
```
