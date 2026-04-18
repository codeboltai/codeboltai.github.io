---
name: get
cbbaseinfo:
  description: "Retrieves agent flow(s).

Returns one or more agent flows based on the provided query parameters.
Use this to look up flows by name, ID, or other criteria."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters to identify which flow(s) to retrieve
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentFlow>"
    description: A promise that resolves to the AgentFlow object
data:
  name: get
  category: agentFlow
  link: get.md
---
# get

```typescript
client.agentFlow.get(params?: Record<string, unknown>): Promise<AgentFlow>
```

Retrieves agent flow(s).

Returns one or more agent flows based on the provided query parameters.
Use this to look up flows by name, ID, or other criteria.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters to identify which flow(s) to retrieve |

## Returns

**`Promise<AgentFlow>`** — A promise that resolves to the AgentFlow object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentFlow.get();
```
