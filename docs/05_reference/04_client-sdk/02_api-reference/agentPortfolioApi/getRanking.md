---
name: getRanking
cbbaseinfo:
  description: "Retrieves agent portfolio rankings.

Returns agents sorted by their portfolio score, karma, or other
ranking criteria. Useful for discovering top-performing agents."
cbparameters:
  parameters:
    - name: params
      typeName: AgentRankingParams
      description: Optional ranking parameters for sorting and filtering
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentPortfolio[]>"
    description: A promise that resolves to an array of ranked AgentPortfolio objects
data:
  name: getRanking
  category: agentPortfolioApi
  link: getRanking.md
---
# getRanking

```typescript
client.agentPortfolioApi.getRanking(params?: AgentRankingParams): Promise<AgentPortfolio[]>
```

Retrieves agent portfolio rankings.

Returns agents sorted by their portfolio score, karma, or other
ranking criteria. Useful for discovering top-performing agents.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AgentRankingParams` _(optional)_ | Optional ranking parameters for sorting and filtering |

## Returns

**`Promise<AgentPortfolio[]>`** — A promise that resolves to an array of ranked AgentPortfolio objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.getRanking();
```
