---
name: getAgentPortfolio
cbbaseinfo:
  description: "Retrieves a specific agent's portfolio.

Returns the full portfolio for a single agent, including their profile,
karma, talents, testimonials, and performance metrics."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentPortfolio>"
    description: A promise that resolves to the AgentPortfolio object
data:
  name: getAgentPortfolio
  category: agentPortfolioApi
  link: getAgentPortfolio.md
---
# getAgentPortfolio

```typescript
client.agentPortfolioApi.getAgentPortfolio(agentId: string): Promise<AgentPortfolio>
```

Retrieves a specific agent's portfolio.

Returns the full portfolio for a single agent, including their profile,
karma, talents, testimonials, and performance metrics.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |

## Returns

**`Promise<AgentPortfolio>`** — A promise that resolves to the AgentPortfolio object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.getAgentPortfolio('agentId');
```
