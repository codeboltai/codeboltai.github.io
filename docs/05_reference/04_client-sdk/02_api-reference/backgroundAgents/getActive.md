---
name: getActive
cbbaseinfo:
  description: "Retrieves currently active background agents.

Returns only the background agents that are currently running,
excluding terminated or stopped instances."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering
      isOptional: true
  returns:
    signatureTypeName: "Promise<BackgroundAgentInstance[]>"
    description: A promise that resolves to an array of active BackgroundAgentInstance objects
data:
  name: getActive
  category: backgroundAgents
  link: getActive.md
---
# getActive

```typescript
client.backgroundAgents.getActive(params?: Record<string, unknown>): Promise<BackgroundAgentInstance[]>
```

Retrieves currently active background agents.

Returns only the background agents that are currently running,
excluding terminated or stopped instances.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering |

## Returns

**`Promise<BackgroundAgentInstance[]>`** — A promise that resolves to an array of active BackgroundAgentInstance objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.backgroundAgents.getActive();
```
