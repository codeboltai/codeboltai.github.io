---
name: getByAgent
cbbaseinfo:
  description: "Retrieves all review-merge requests associated with a specific agent.

Filters requests by the agent that created or is assigned to them. Useful for
building agent-specific review dashboards or tracking an agent's review workload."
cbparameters:
  parameters:
    - name: agentId
      typeName: string
      description: The unique identifier of the agent to filter by
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest[]>"
    description: A promise that resolves to an array of ReviewMergeRequest objects for the agent
data:
  name: getByAgent
  category: reviewMerge
  link: getByAgent.md
---
# getByAgent

```typescript
client.reviewMerge.getByAgent(agentId: string): Promise<ReviewMergeRequest[]>
```

Retrieves all review-merge requests associated with a specific agent.

Filters requests by the agent that created or is assigned to them. Useful for
building agent-specific review dashboards or tracking an agent's review workload.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `agentId` | `string` | The unique identifier of the agent to filter by |

## Returns

**`Promise<ReviewMergeRequest[]>`** — A promise that resolves to an array of ReviewMergeRequest objects for the agent

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getByAgent('agentId');
```
