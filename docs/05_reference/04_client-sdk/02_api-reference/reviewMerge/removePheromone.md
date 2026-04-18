---
name: removePheromone
cbbaseinfo:
  description: "Removes a pheromone tag from a review-merge request.

Detaches a previously added pheromone by its type string from the review request."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
    - name: type
      typeName: string
      description: The pheromone type string to remove
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pheromone has been removed
data:
  name: removePheromone
  category: reviewMerge
  link: removePheromone.md
---
# removePheromone

```typescript
client.reviewMerge.removePheromone(id: string, type: string): Promise<unknown>
```

Removes a pheromone tag from a review-merge request.

Detaches a previously added pheromone by its type string from the review request.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |
| `type` | `string` | The pheromone type string to remove |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pheromone has been removed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.removePheromone('id', 'type');
```
