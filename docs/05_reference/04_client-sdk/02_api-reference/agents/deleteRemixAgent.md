---
name: deleteRemixAgent
cbbaseinfo:
  description: "Deletes a remix agent.

Permanently removes the specified remix agent from the system."
cbparameters:
  parameters:
    - name: name
      typeName: string
      description: The name of the remix agent to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the remix agent has been deleted
data:
  name: deleteRemixAgent
  category: agents
  link: deleteRemixAgent.md
---
# deleteRemixAgent

```typescript
client.agents.deleteRemixAgent(name: string): Promise<void>
```

Deletes a remix agent.

Permanently removes the specified remix agent from the system.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `name` | `string` | The name of the remix agent to delete |

## Returns

**`Promise<void>`** — A promise that resolves when the remix agent has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agents.deleteRemixAgent('name');
```
