---
name: updateAgentProfile
cbbaseinfo:
  description: "Updates an agent's profile information.

Modifies the profile section of an agent's portfolio, such as their
display name, description, or avatar."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
    - name: data
      typeName: UpdateAgentProfileRequest
      description: The profile fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentPortfolio>"
    description: A promise that resolves to the updated AgentPortfolio
data:
  name: updateAgentProfile
  category: agentPortfolioApi
  link: updateAgentProfile.md
---
# updateAgentProfile

```typescript
client.agentPortfolioApi.updateAgentProfile(agentId: string, data: UpdateAgentProfileRequest): Promise<AgentPortfolio>
```

Updates an agent's profile information.

Modifies the profile section of an agent's portfolio, such as their
display name, description, or avatar.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |
| `data` | `UpdateAgentProfileRequest` | The profile fields to update |

## Returns

**`Promise<AgentPortfolio>`** — A promise that resolves to the updated AgentPortfolio

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.updateAgentProfile('agentId', /* UpdateAgentProfileRequest */);
```
