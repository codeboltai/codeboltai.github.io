---
name: getReadyToMerge
cbbaseinfo:
  description: "Retrieves all review-merge requests that are approved and ready to merge.

Filters for requests that have passed all review criteria and can be merged immediately.
Useful for automated merge pipelines or merge-ready dashboards."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<ReviewMergeRequest[]>"
    description: A promise that resolves to an array of merge-ready ReviewMergeRequest objects
data:
  name: getReadyToMerge
  category: reviewMerge
  link: getReadyToMerge.md
---
# getReadyToMerge

```typescript
client.reviewMerge.getReadyToMerge(): Promise<ReviewMergeRequest[]>
```

Retrieves all review-merge requests that are approved and ready to merge.

Filters for requests that have passed all review criteria and can be merged immediately.
Useful for automated merge pipelines or merge-ready dashboards.

## Parameters

_None_

## Returns

**`Promise<ReviewMergeRequest[]>`** — A promise that resolves to an array of merge-ready ReviewMergeRequest objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.reviewMerge.getReadyToMerge();
```
