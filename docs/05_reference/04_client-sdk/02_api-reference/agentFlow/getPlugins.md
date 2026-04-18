---
name: getPlugins
cbbaseinfo:
  description: "Retrieves available agent flow plugins.

Returns the list of plugin types that can be used as nodes within
agent flows, each defining a specific processing capability."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering plugins
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentFlowPlugin[]>"
    description: A promise that resolves to an array of AgentFlowPlugin objects
data:
  name: getPlugins
  category: agentFlow
  link: getPlugins.md
---
# getPlugins

```typescript
client.agentFlow.getPlugins(params?: Record<string, unknown>): Promise<AgentFlowPlugin[]>
```

Retrieves available agent flow plugins.

Returns the list of plugin types that can be used as nodes within
agent flows, each defining a specific processing capability.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering plugins |

## Returns

**`Promise<AgentFlowPlugin[]>`** — A promise that resolves to an array of AgentFlowPlugin objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentFlow.getPlugins();
```
