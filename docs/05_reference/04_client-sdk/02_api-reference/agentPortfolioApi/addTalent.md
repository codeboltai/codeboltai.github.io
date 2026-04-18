---
name: addTalent
cbbaseinfo:
  description: "Adds a talent to an agent's portfolio.

Records a specific skill or capability that the agent possesses,
building out their talent profile."
cbparameters:
  parameters:
    - name: data
      typeName: AddTalentRequest
      description: The talent definition to add
      isOptional: false
  returns:
    signatureTypeName: "Promise<AgentTalent>"
    description: A promise that resolves to the created AgentTalent
data:
  name: addTalent
  category: agentPortfolioApi
  link: addTalent.md
---
# addTalent

```typescript
client.agentPortfolioApi.addTalent(data: AddTalentRequest): Promise<AgentTalent>
```

Adds a talent to an agent's portfolio.

Records a specific skill or capability that the agent possesses,
building out their talent profile.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `AddTalentRequest` | The talent definition to add |

## Returns

**`Promise<AgentTalent>`** — A promise that resolves to the created AgentTalent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.addTalent(/* AddTalentRequest */);
```
