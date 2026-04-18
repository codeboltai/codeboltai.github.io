---
name: updateRemixAgent
cbbaseinfo:
  description: "Updates a remix agent.

Modifies the configuration of an existing remix agent."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the remix agent to update
      isOptional: false
    - name: data
      typeName: RemixAgent
      description: The updated remix agent definition
      isOptional: false
  returns:
    signatureTypeName: "Promise<RemixAgent>"
    description: A promise that resolves to the updated RemixAgent
data:
  name: updateRemixAgent
  category: agents
  link: updateRemixAgent.md
---
# updateRemixAgent

```typescript
client.agents.updateRemixAgent(name: string, data: RemixAgent): Promise<RemixAgent>
```

Updates a remix agent.

Modifies the configuration of an existing remix agent.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the remix agent to update |
| `data` | `RemixAgent` | The updated remix agent definition |

## Returns

**`Promise<RemixAgent>`** — A promise that resolves to the updated RemixAgent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.updateRemixAgent('name', /* RemixAgent */);
```
