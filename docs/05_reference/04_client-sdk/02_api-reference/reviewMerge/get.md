---
name: get
cbbaseinfo:
  description: "Retrieves a specific review-merge request by its ID.

Fetches the full details of a single review-merge request including its current
status, reviews, pheromones, and linked jobs."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the review-merge request
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest>"
    description: A promise that resolves to the ReviewMergeRequest object
data:
  name: get
  category: reviewMerge
  link: get.md
---
# get

```typescript
client.reviewMerge.get(id: string): Promise<ReviewMergeRequest>
```

Retrieves a specific review-merge request by its ID.

Fetches the full details of a single review-merge request including its current
status, reviews, pheromones, and linked jobs.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the review-merge request |

## Returns

**`Promise<ReviewMergeRequest>`** — A promise that resolves to the ReviewMergeRequest object

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.get('id');
```
