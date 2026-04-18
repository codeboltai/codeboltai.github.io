---
name: update
cbbaseinfo:
  description: "Updates an existing agent flow.

Modifies the node configuration, connections, or metadata of an
existing flow."
cbparameters:
  parameters:
    - name: data
      typeName: UpdateAgentFlowRequest
      description: The update payload containing the modified flow data
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentFlow>"
    description: A promise that resolves to the updated AgentFlow
data:
  name: update
  category: agentFlow
  link: update.md
---
# update

```typescript
client.agentFlow.update(data: UpdateAgentFlowRequest): Promise<AgentFlow>
```

Updates an existing agent flow.

Modifies the node configuration, connections, or metadata of an
existing flow.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UpdateAgentFlowRequest` | The update payload containing the modified flow data |

## Returns

**`Promise<AgentFlow>`** — A promise that resolves to the updated AgentFlow

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentFlow.update(/* UpdateAgentFlowRequest */);
```
