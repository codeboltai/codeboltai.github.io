---
name: create
cbbaseinfo:
  description: "Creates a new review-merge request.

Initiates a review workflow for a set of changes. The request will enter the pending
state and can be reviewed, locked, and eventually merged."
cbparameters:
  parameters:
    - name: data
      typeName: CreateReviewMergeRequest
      description: The review-merge request creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest>"
    description: A promise that resolves to the newly created ReviewMergeRequest
data:
  name: create
  category: reviewMerge
  link: create.md
---
# create

```typescript
client.reviewMerge.create(data: CreateReviewMergeRequest): Promise<ReviewMergeRequest>
```

Creates a new review-merge request.

Initiates a review workflow for a set of changes. The request will enter the pending
state and can be reviewed, locked, and eventually merged.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateReviewMergeRequest` | The review-merge request creation payload |

## Returns

**`Promise<ReviewMergeRequest>`** — A promise that resolves to the newly created ReviewMergeRequest

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.create(/* CreateReviewMergeRequest */);
```
