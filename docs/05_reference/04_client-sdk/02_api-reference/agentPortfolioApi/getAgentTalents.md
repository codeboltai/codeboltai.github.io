---
name: getAgentTalents
cbbaseinfo:
  description: "Retrieves all talents for a specific agent.

Returns the list of skills and capabilities registered in the
agent's portfolio, along with endorsement counts."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentTalent[]>"
    description: A promise that resolves to an array of AgentTalent objects
data:
  name: getAgentTalents
  category: agentPortfolioApi
  link: getAgentTalents.md
---
# getAgentTalents

```typescript
client.agentPortfolioApi.getAgentTalents(agentId: string, params?: Record<string, unknown>): Promise<AgentTalent[]>
```

Retrieves all talents for a specific agent.

Returns the list of skills and capabilities registered in the
agent's portfolio, along with endorsement counts.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering |

## Returns

**`Promise<AgentTalent[]>`** — A promise that resolves to an array of AgentTalent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.getAgentTalents('agentId');
```
