---
name: updateAgent
cbbaseinfo:
  description: "Updates an installed agent to a newer version.

Applies updates to an already-installed agent, pulling the latest
version from the registry or local source."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateAgentRequest
      description: The update configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<Agent>"
    description: A promise that resolves to the updated Agent
data:
  name: updateAgent
  category: agents
  link: updateAgent.md
---
# updateAgent

```typescript
client.agents.updateAgent(data: UpdateAgentRequest): Promise<Agent>
```

Updates an installed agent to a newer version.

Applies updates to an already-installed agent, pulling the latest
version from the registry or local source.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateAgentRequest` | The update configuration |

## Returns

**`Promise<Agent>`** — A promise that resolves to the updated Agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.updateAgent(/* UpdateAgentRequest */);
```
