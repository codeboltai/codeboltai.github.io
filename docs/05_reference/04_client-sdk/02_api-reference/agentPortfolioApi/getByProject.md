---
name: getByProject
cbbaseinfo:
  description: "Retrieves agent portfolios filtered by project.

Returns portfolios for agents that have contributed to a specific project,
useful for understanding which agents are active in a project context."
cbparameters:
  parameters:
    - name: params
      typeName: AgentByProjectParams
      description: Parameters to filter portfolios by project
      isOptional: true
  returns:
    signatureTypeName: "Promise<AgentPortfolio[]>"
    description: A promise that resolves to an array of AgentPortfolio objects
data:
  name: getByProject
  category: agentPortfolioApi
  link: getByProject.md
---
# getByProject

```typescript
client.agentPortfolioApi.getByProject(params?: AgentByProjectParams): Promise<AgentPortfolio[]>
```

Retrieves agent portfolios filtered by project.

Returns portfolios for agents that have contributed to a specific project,
useful for understanding which agents are active in a project context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `AgentByProjectParams` _(optional)_ | Parameters to filter portfolios by project |

## Returns

**`Promise<AgentPortfolio[]>`** — A promise that resolves to an array of AgentPortfolio objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.getByProject();
```
