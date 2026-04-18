---
name: getPending
cbbaseinfo:
  description: "Retrieves all pending review-merge requests.

Returns requests that are awaiting review and have not yet been approved or rejected.
Use this to build a review queue or dashboard showing outstanding work."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest[]>"
    description: A promise that resolves to an array of pending ReviewMergeRequest objects
data:
  name: getPending
  category: reviewMerge
  link: getPending.md
---
# getPending

```typescript
client.reviewMerge.getPending(): Promise<ReviewMergeRequest[]>
```

Retrieves all pending review-merge requests.

Returns requests that are awaiting review and have not yet been approved or rejected.
Use this to build a review queue or dashboard showing outstanding work.

## Parameters

_None_

## Returns

**`Promise<ReviewMergeRequest[]>`** — A promise that resolves to an array of pending ReviewMergeRequest objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getPending();
```
