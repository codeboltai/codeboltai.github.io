---
name: getInstances
cbbaseinfo:
  description: "Retrieves all agent debug instances.

Returns every agent instance that has been tracked by the debug system,
regardless of its current status."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering or pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentDebugInstance[]>"
    description: A promise that resolves to an array of AgentDebugInstance objects
data:
  name: getInstances
  category: agentDebugApi
  link: getInstances.md
---
# getInstances

```typescript
client.agentDebugApi.getInstances(params?: Record<string, unknown>): Promise<AgentDebugInstance[]>
```

Retrieves all agent debug instances.

Returns every agent instance that has been tracked by the debug system,
regardless of its current status.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering or pagination |

## Returns

**`Promise<AgentDebugInstance[]>`** — A promise that resolves to an array of AgentDebugInstance objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getInstances();
```
