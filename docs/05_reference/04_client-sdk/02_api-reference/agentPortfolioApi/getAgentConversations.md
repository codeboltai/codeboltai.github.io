---
name: getAgentConversations
cbbaseinfo:
  description: "Retrieves conversation history for an agent's portfolio.

Returns the list of conversations the agent has participated in,
providing context for their portfolio activity."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent
      isOptional: false
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: "A promise that resolves to the agent's conversation records"
data:
  name: getAgentConversations
  category: agentPortfolioApi
  link: getAgentConversations.md
---
# getAgentConversations

```typescript
client.agentPortfolioApi.getAgentConversations(agentId: string, params?: Record<string, unknown>): Promise<unknown>
```

Retrieves conversation history for an agent's portfolio.

Returns the list of conversations the agent has participated in,
providing context for their portfolio activity.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent |
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for pagination |

## Returns

**`Promise<unknown>`** — A promise that resolves to the agent's conversation records

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.agentPortfolioApi.getAgentConversations('agentId');
```
