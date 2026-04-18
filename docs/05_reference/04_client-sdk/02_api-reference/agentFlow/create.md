---
name: create
cbbaseinfo:
  description: "Creates a new agent flow.

Defines a new node-based workflow that agents can execute. The flow
consists of interconnected plugin nodes that define the processing pipeline."
cbparameters:
  parameters:
    - name: data
      typeName: CreateAgentFlowRequest
      description: The flow creation payload including nodes and connections
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentFlow>"
    description: A promise that resolves to the newly created AgentFlow
data:
  name: create
  category: agentFlow
  link: create.md
---
# create

```typescript
client.agentFlow.create(data: CreateAgentFlowRequest): Promise<AgentFlow>
```

Creates a new agent flow.

Defines a new node-based workflow that agents can execute. The flow
consists of interconnected plugin nodes that define the processing pipeline.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateAgentFlowRequest` | The flow creation payload including nodes and connections |

## Returns

**`Promise<AgentFlow>`** — A promise that resolves to the newly created AgentFlow

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentFlow.create(/* CreateAgentFlowRequest */);
```
