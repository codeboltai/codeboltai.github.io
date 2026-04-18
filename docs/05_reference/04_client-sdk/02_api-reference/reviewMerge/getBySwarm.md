---
name: getBySwarm
cbbaseinfo:
  description: "Retrieves all review-merge requests associated with a specific swarm.

Filters requests by the swarm that generated them. Useful for monitoring review
activity within a particular swarm context."
cbparameters:
  parameters:
    - name: swarmId
      typeName: string
      description: The unique identifier of the swarm to filter by
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest[]>"
    description: A promise that resolves to an array of ReviewMergeRequest objects for the swarm
data:
  name: getBySwarm
  category: reviewMerge
  link: getBySwarm.md
---
# getBySwarm

```typescript
client.reviewMerge.getBySwarm(swarmId: string): Promise<ReviewMergeRequest[]>
```

Retrieves all review-merge requests associated with a specific swarm.

Filters requests by the swarm that generated them. Useful for monitoring review
activity within a particular swarm context.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `swarmId` | `string` | The unique identifier of the swarm to filter by |

## Returns

**`Promise<ReviewMergeRequest[]>`** — A promise that resolves to an array of ReviewMergeRequest objects for the swarm

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getBySwarm('swarmId');
```
