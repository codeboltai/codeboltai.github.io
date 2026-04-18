---
name: getAgentKarma
cbbaseinfo:
  description: "Retrieves karma details for a specific agent.

Returns the agent's karma score breakdown including total karma,
recent awards, and karma history."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering karma records
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentKarma>"
    description: A promise that resolves to the AgentKarma details
data:
  name: getAgentKarma
  category: agentPortfolioApi
  link: getAgentKarma.md
---
# getAgentKarma

```typescript
client.agentPortfolioApi.getAgentKarma(agentId: string, params?: Record<string, unknown>): Promise<AgentKarma>
```

Retrieves karma details for a specific agent.

Returns the agent's karma score breakdown including total karma,
recent awards, and karma history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering karma records |

## Returns

**`Promise<AgentKarma>`** — A promise that resolves to the AgentKarma details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.getAgentKarma('agentId');
```
