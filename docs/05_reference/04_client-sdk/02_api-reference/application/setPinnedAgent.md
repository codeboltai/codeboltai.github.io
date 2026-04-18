---
name: setPinnedAgent
cbbaseinfo:
  description: "Sets the pinned agent for the application.

Pins a specific agent to the UI, making it the default or always-visible
agent for quick access."
cbparameters:
  parameters:
    - name: data
      typeName: SetPinnedAgentRequest
      description: The pinning configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the agent has been pinned
data:
  name: setPinnedAgent
  category: application
  link: setPinnedAgent.md
---
# setPinnedAgent

```typescript
client.application.setPinnedAgent(data: SetPinnedAgentRequest): Promise<void>
```

Sets the pinned agent for the application.

Pins a specific agent to the UI, making it the default or always-visible
agent for quick access.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetPinnedAgentRequest` | The pinning configuration |

## Returns

**`Promise<void>`** — A promise that resolves when the agent has been pinned

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.setPinnedAgent(/* SetPinnedAgentRequest */);
```
