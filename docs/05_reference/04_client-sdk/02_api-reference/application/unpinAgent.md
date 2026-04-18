---
name: unpinAgent
cbbaseinfo:
  description: "Unpins the currently pinned agent.

Removes the pinned agent from the UI, reverting to the default
agent selection behavior."
cbparameters:
  parameters:
    - name: data
      typeName: UnpinAgentRequest
      description: Optional unpin configuration
      isOptional: true
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the agent has been unpinned
data:
  name: unpinAgent
  category: application
  link: unpinAgent.md
---
# unpinAgent

```typescript
client.application.unpinAgent(data?: UnpinAgentRequest): Promise<void>
```

Unpins the currently pinned agent.

Removes the pinned agent from the UI, reverting to the default
agent selection behavior.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UnpinAgentRequest` _(optional)_ | Optional unpin configuration |

## Returns

**`Promise<void>`** — A promise that resolves when the agent has been unpinned

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.application.unpinAgent();
```
