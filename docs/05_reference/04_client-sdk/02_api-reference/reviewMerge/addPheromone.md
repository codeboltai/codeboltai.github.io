---
name: addPheromone
cbbaseinfo:
  description: "Adds a pheromone tag to a review-merge request.

Pheromones are metadata signals used for inter-agent communication. Adding a pheromone
allows agents to tag reviews with contextual information that other agents can detect."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: data
      typeName: AddPheromoneRequest
      description: The pheromone data to attach
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pheromone has been added
data:
  name: addPheromone
  category: reviewMerge
  link: addPheromone.md
---
# addPheromone

```typescript
client.reviewMerge.addPheromone(id: string, data: AddPheromoneRequest): Promise<unknown>
```

Adds a pheromone tag to a review-merge request.

Pheromones are metadata signals used for inter-agent communication. Adding a pheromone
allows agents to tag reviews with contextual information that other agents can detect.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `data` | `AddPheromoneRequest` | The pheromone data to attach |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pheromone has been added

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.addPheromone('id', /* AddPheromoneRequest */);
```
