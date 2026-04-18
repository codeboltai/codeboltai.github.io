---
name: getInstance
cbbaseinfo:
  description: "Retrieves details for a specific agent debug instance.

Returns the full debug record for a single agent instance including
its configuration, status, timing, and metadata."
cbparameters:
  parameters:
    - name: agentInstanceId
      typeName: string
      description: The unique identifier of the agent instance
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentDebugInstance>"
    description: A promise that resolves to the AgentDebugInstance object
data:
  name: getInstance
  category: agentDebugApi
  link: getInstance.md
---
# getInstance

```typescript
client.agentDebugApi.getInstance(agentInstanceId: string): Promise<AgentDebugInstance>
```

Retrieves details for a specific agent debug instance.

Returns the full debug record for a single agent instance including
its configuration, status, timing, and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentInstanceId` | `string` | The unique identifier of the agent instance |

## Returns

**`Promise<AgentDebugInstance>`** — A promise that resolves to the AgentDebugInstance object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentDebugApi.getInstance('agentInstanceId');
```
